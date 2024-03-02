import pyrebase 
import creds
import secrets
from flask import Flask, Blueprint
from flask import request, jsonify, session

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
        "name": "Daniel",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }
    return response_body

@user_bp.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        data = request.json
        email =data.get('email')
        password = data.get('password')
        try:
            user = auth.sign_in_with_email_and_password(email, password)
            return 'Login successful'  # Or any other success response
        except Exception as e:
            return str(e), 401 
    
if __name__ == '__main__':
    user_bp.run(debug=True)