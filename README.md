# Project Overview

This repository contains two distinct applications for resume analysis and job management:

## 1. Streamlit Application (`resume_screening_streamlit/`)
**Type:** Prototype / Standalone Tool
**Framework:** Streamlit
**Description:** A rapid prototype and interactive dashboard for resume screening.
- **Key Features:**
    - PDF Resume Parsing
    - AI-based Analysis (Gemini)
    - Admin/User Roles
    - Simple, single-script deployment structure.

## 2. Flask Application (`smart-resume-analyzer/`)
**Type:** Production-Ready Web Application
**Framework:** Flask
**Description:** A full-featured, scalable web application with a robust backend architecture.
- **Key Features:**
    - MVC Architecture (Blueprints, Models, Templates)
    - SQL Database (SQLAlchemy + Migrations)
    - User Authentication (Flask-Login)
    - SocketIO for real-time features
    - Specialized Admin and User dashboards.

## Quick Start

### Streamlit App
```bash
cd resume_screening_streamlit
pip install -r requirements.txt
streamlit run web.py
```

### Flask App
```bash
cd smart-resume-analyzer
pip install -r requirements.txt
flask run
```
