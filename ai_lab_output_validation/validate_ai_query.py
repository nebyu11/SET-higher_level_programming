#!/usr/bin/python3
"""
validate_ai_query.py
--------------------
AI Lab Assignment: Output Validation and Debugging
Implementation of the corrected, idiomatic SQLAlchemy ORM query.

Retrieves all City objects and their associated State name using
proper ORM relationship joins, ordered by City.id.

Output Format:
    <city_id>: <city_name> from <state_name>
"""

import sys
from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
from sqlalchemy.orm import (
    relationship, declarative_base, sessionmaker
)

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


def validate_ai_query(username, password, db_name):
    """
    Executes an idiomatic, optimized SQLAlchemy ORM query to retrieve
    all City objects along with their corresponding State name.

    Demonstrates the corrected approach vs the naive 'bad' query:
    - Replaces raw cartesian product filtering with an explicit join
      on the declared relationship property (City.state).
    - Works with domain model objects rather than unmapped row tuples.
    - Handles empty databases gracefully.

    Args:
        username (str): Database username (optional for SQLite).
        password (str): Database password (optional for SQLite).
        db_name (str): Database name or SQLite file path.

    Returns:
        list: List of City objects retrieved, or empty list on empty db/error.
    """
    # Configure engine for SQLite or MySQL based on provided parameters
    if not username and not password:
        db_path = db_name if db_name.endswith('.db') else f"{db_name}.db"
        engine = create_engine(f"sqlite:///{db_path}", echo=False)
    elif db_name.endswith('.db'):
        engine = create_engine(f"sqlite:///{db_name}", echo=False)
    else:
        try:
            conn_url = (
                f"mysql+mysqldb://{username}:{password}"
                f"@localhost:3306/{db_name}"
            )
            engine = create_engine(conn_url, pool_pre_ping=True, echo=False)
        except Exception:
            engine = create_engine(f"sqlite:///{db_name}", echo=False)

    # Ensure schema exists (enables testing against fresh/empty SQLite files)
    Base.metadata.create_all(engine)

    Session = sessionmaker(bind=engine)
    session = Session()

    try:
        # Corrected Idiomatic ORM Query:
        # 1. Uses explicit join via relationship property City.state
        # 2. Emits ANSI-92 JOIN instead of ANSI-89 Cartesian product
        # 3. Returns City domain objects with linked state populated
        # 4. Orders deterministically by City.id
        cities = (
            session.query(City)
            .join(City.state)
            .order_by(City.id)
            .all()
        )

        # Output format: <city_id>: <city_name> from <state_name>
        for city in cities:
            print(f"{city.id}: {city.name} from {city.state.name}")

        return cities
    except Exception as exc:
        print(f"Error executing query: {exc}", file=sys.stderr)
        return []
    finally:
        session.close()
        engine.dispose()


if __name__ == "__main__":
    user = sys.argv[1] if len(sys.argv) > 1 else ""
    pwd = sys.argv[2] if len(sys.argv) > 2 else ""
    database = sys.argv[3] if len(sys.argv) > 3 else "orm_practice.db"

    validate_ai_query(user, pwd, database)
