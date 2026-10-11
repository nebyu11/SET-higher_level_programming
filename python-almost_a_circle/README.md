# Python - Almost a circle

This directory contains tasks for object-oriented programming, inheritance, class hierarchies (`Base`, `Rectangle`, `Square`), JSON and CSV serialization/deserialization, unit testing using `unittest`, and turtle GUI drawing.

## Tasks
- **models/base.py**: Base model class managing `id` attributes, JSON/CSV serialization, and turtle graphics drawing.
- **models/rectangle.py**: `Rectangle` class inheriting from `Base` with `width`, `height`, `x`, `y` validations, `area`, `display`, and dictionary representations.
- **models/square.py**: `Square` class inheriting from `Rectangle` with `size` setter/getter and dictionary representations.
- **models/__init__.py**: Package initializer.
- **tests/test_models/test_base.py**: Unittests for `Base` class.
- **tests/test_models/test_rectangle.py**: Unittests for `Rectangle` class.
- **tests/test_models/test_square.py**: Unittests for `Square` class.
