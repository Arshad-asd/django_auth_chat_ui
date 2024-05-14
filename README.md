
## Django Authentication and Chat UI

Django, a powerful web framework written in Python, provides robust authentication mechanisms out of the box. Authentication is the process of verifying the identity of a user attempting to access a web application. Django simplifies this process by offering built-in authentication features that handle user authentication, registration, login, logout, password management, and more.


## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/Arshad-asd/django_auth_chat_ui.git
```

2. Create and activate a virtual environment:

```bash
python -m venv env
```

```bash
# On Windows: .\env\Scripts\activate
# On macOS/Linux: source venv/bin/activate
```

```bash
cd chat_app
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Run the development server:

```bash
python manage.py runserver
```

6. Access the API at [http://localhost:8000/api/](http://localhost:8000/login)

## API Endpoints


#### 1. User Management:

- `POST /user/signup`: Register a new user.
- `POST /user/login`: Log in an existing user.
- `POST /user/logout`: Log out session
- `GET /user/chat`: Display chat UI
