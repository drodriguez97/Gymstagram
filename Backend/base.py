import pyrebase
import creds
from flask import Blueprint
from flask import Flask, request, jsonify
from flask_cors import CORS
from routes import user_auth_routes
from routes import weather_routes

api = Flask(__name__)

CORS(api)

config = {
    "apiKey": creds.FIREBASE_API_KEY,
    "authDomain": creds.FIREBASE_AUTH_DOMAIN,
    "projectId": creds.FIREBASE_PROJECT_ID,
    "storageBucket": creds.FIREBASE_STORAGE_BUCKET,
    "messagingSenderId": creds.FIREBASE_MESSAGING_SENDER_ID,
    "appId": creds.FIREBASE_APP_ID,
    "databaseURL": creds.DATABASE
}


firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
firestore = firebase.database()

api.register_blueprint(user_auth_routes.user_auth_bp, url_prefix='/user_auth')
api.register_blueprint(weather_routes.weather_bp, url_prefix='/weather')