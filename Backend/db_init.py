from app import db

# Initialize the database and create all tables
db.create_all()

print("Database initialized successfully.")
