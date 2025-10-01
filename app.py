from flask import Flask, render_template, send_from_directory

app = Flask(__name__,
            static_folder='frontend/dist',
            static_url_path='/',
            template_folder='frontend/dist')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/<path:path>')
def serve_react_app(path):
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)