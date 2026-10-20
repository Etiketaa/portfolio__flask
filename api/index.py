# Vercel Python Serverless Function Entry Point
# This wraps the Flask app for Vercel's Python runtime

import sys
import os

# Add the project root to the path so we can import app
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app import app

# Vercel expects the app to be available as `app` or `handler`
# For Flask, we just export the app instance
# The Flask app will handle routing including /api/*

# For local development
if __name__ == "__main__":
    app.run(debug=True)