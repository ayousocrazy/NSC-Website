# New SUMMIT College Website (NSC)

[![GitHub issues](https://img.shields.io/github/issues/ayousocrazy/NSC-Website)](https://github.com/ayousocrazy/NSC-Website/issues)
[![GitHub license](https://img.shields.io/github/license/ayousocrazy/NSC-Website)](https://github.com/ayousocrazy/NSC-Website/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/ayousocrazy/NSC-Website)](https://github.com/ayousocrazy/NSC-Website/stargazers)

A modern, responsive website for **New SUMMIT College** built using **Django**.  
This project replaces the old outdated website with a fresh, interactive design and adds modern features like a **virtual tour** using **Pannellum.js** and Google Street View integration.

---

## Features

- Fully responsive modern design  
- Virtual campus tour with panoramic images  
- Academic programs and faculty details  
- Admission forms  
- Multimedia support (images and videos)  
- Custom navigation and interactive components  

---

## File Structure



```
NSC-Website/
├── requirements.txt
├── .gitignore
└──nsc/
  │
  ├── manage.py
  ├── db.sqlite3
  │
  ├── nsc/
  │ ├── settings.py
  │ ├── urls.py
  │ ├── wsgi.py
  │ ├── asgi.py
  │ └── __init__.py
  │
  ├── main/
  │ ├── admin.py
  │ ├── apps.py
  │ ├── context_processors.py
  │ ├── models.py
  │ ├── urls.py
  │ ├── views.py
  │ ├── tests.py
  │ ├── migrations/
  │ │ └──__init__.py
  │ │
  │ │
  │ └── templates/
  │   └── main/
  │     ├── home.html
  │     ├── about.html
  │     ├── academics.html
  │     ├── plus2academics.html
  │     ├── admissions.html
  │     ├── faculty.html
  │     └── form.html
  │
  └── templates/
    ├── 404.html
    ├── e-s.html
    ├── main.html
    ├── nav.html
    └── footer.html
```

> **Note:** `static/`, `media/`, `__pycache__/`, `migrations/`, and other auxiliary files have been omitted for clarity.

---

## Installation & Setup

```bash
# Clone the repository
git clone [https://github.com/your-username/nsc-website.git](https://github.com/ayousocrazy/NSC-Website)

# Create and activate virtual environment
python -m venv env
# Windows
env\Scripts\activate
# Linux/Mac
source env/bin/activate

# Install dependencies
pip install -r requirements.txt

# Move to project directory
cd nsc

# Apply migrations
python manage.py migrate

# Run the development server
python manage.py runserver
```
Open your browser at http://127.0.0.1:8000/ to view the website.

---

## Pannellum JS demo code

```javascript
<div id="panorama" style="width: 100%; height: 500px;"></div>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css"/>

<script>
  pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "{% static 'images/pov/lobby.jpg' %}",
    "autoLoad": true,
    "showControls": true
  });
</script>
```
Replace lobby.jpg with your own panoramic image from static/images/pov/.
