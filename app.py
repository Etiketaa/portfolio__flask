from pathlib import Path

from flask import Flask, render_template, send_from_directory

DIST = Path(__file__).parent / "frontend" / "dist"

app = Flask(__name__, static_folder=None, template_folder="frontend/dist")


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/<path:path>")
def spa(path):
    candidate = DIST / path
    if candidate.is_file():
        return send_from_directory(DIST, path)
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)