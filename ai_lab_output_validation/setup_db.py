#!/usr/bin/python3
"""
setup_db.py
-----------
Sets up a SQLite database (orm_practice.db) with State and City models
and populates it with initial sample data for the ORM debugging challenge.
"""

from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship, declarative_base, sessionmaker

Base = declarative_base()


class State(Base):
    """State model representing geographic states."""
    __tablename__ = 'states'

    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    cities = relationship("City", back_populates="state")


class City(Base):
    """City model representing municipalities linked to a state."""
    __tablename__ = 'cities'

    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    state_id = Column(Integer, ForeignKey('states.id'), nullable=False)
    state = relationship("State", back_populates="cities")


def init_database(db_name="orm_practice.db"):
    """Initialize database schema and populate with sample records."""
    db_path = f"sqlite:///{db_name}"
    engine = create_engine(db_path, echo=False)
    Base.metadata.create_all(engine)

    Session = sessionmaker(bind=engine)
    session = Session()

    # Clear existing data if any (for clean repeatable runs)
    session.query(City).delete()
    session.query(State).delete()
    session.commit()

    # Add sample states
    california = State(name="California")
    new_york = State(name="New York")
    session.add_all([california, new_york])
    session.commit()

    # Add sample cities linked to states via relationship
    cities = [
        City(name="Los Angeles", state=california),
        City(name="San Francisco", state=california),
        City(name="New York City", state=new_york),
        City(name="Buffalo", state=new_york)
    ]
    session.add_all(cities)
    session.commit()
    session.close()
    print(f"Database successfully initialized at: {db_name}")


if __name__ == "__main__":
    init_database()
