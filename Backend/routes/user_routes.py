import pyrebase 
import creds
from flask import Blueprint
from flask import request, jsonify

user_bp = Blueprint('user_bp', __name__)

config = {
    "apiKey": creds.FIREBASE_API_KEY,
    "authDomain": creds.FIREBASE_AUTH_DOMAIN,
    "projectId": creds.FIREBASE_PROJECT_ID,
    "storageBucket": creds.FIREBASE_STORAGE_BUCKET,
    "messagingSenderId": creds.FIREBASE_MESSAGING_SENDER_ID,
    "appId": creds.FIREBASE_APP_ID,
    "databaseURL": ''
}

firebase = pyrebase.initialize_app(config)
auth = firebase.auth()

@user_bp.route('/profile', methods=["GET"])
def my_profile():
    response_body = {
        "name": "Nagato",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }
    return response_body

@user_bp.route('/login', methods=["GET"])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    
    try:
        user = auth.sign_in_with_email_and_password(email, password)
        return jsonify({'message': 'Authentification Successful', 'user': user}), 200
    except Exception as e:
        return jsonify({'message': 'Authentification failed', 'error': str(e)}), 401