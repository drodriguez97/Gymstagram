import pyrebase
import creds
from flask import Flask, request, jsonify
from flask_cors import CORS
from routes import user_routes

api = Flask(__name__)
CORS(api)

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

api.register_blueprint(user_routes.user_bp, url_prefix='/user')