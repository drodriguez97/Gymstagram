from flask import Blueprint, request, jsonify
import requests
import creds

weather_bp = Blueprint('weather_bp', __name__)

@weather_bp.route('/weather_info', methods=['GET'])
def get_weather():
    api_key = creds.WEATHER_API_KEY
    city = request.args.get('city', 'Los Angeles')  # Get the city from query parameters, default to Los Angeles
    url = f'http://api.weatherapi.com/v1/current.json?key={api_key}&q={city}'
    
    try:
        response = requests.get(url)
        data = response.json()
        # Extract relevant weather information from the response
        weather_data = {
            'city': city,
            'temperature': data['current']['temp_c'],
            'condition': data['current']['condition']['text'],
        }
        return jsonify(weather_data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500
