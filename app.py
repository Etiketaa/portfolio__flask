from pathlib import Path
import logging

from flask import Flask, render_template, send_from_directory, request, jsonify

DIST = Path(__file__).parent / "frontend" / "dist"

app = Flask(__name__, static_folder=None, template_folder="frontend/dist")

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/<path:path>")
def spa(path):
    candidate = DIST / path
    if candidate.is_file():
        return send_from_directory(DIST, path)
    return render_template("index.html")


@app.route("/api/contact", methods=["POST"])
def contact():
    """Endpoint para recibir formularios de contacto."""
    data = request.get_json(silent=True)
    if not data:
        return jsonify({"ok": False, "error": "JSON inválido"}), 400

    name = (data.get("name") or "").strip()
    email = (data.get("email") or "").strip()
    message = (data.get("message") or "").strip()

    # Validación server-side
    errors = {}
    if len(name) < 2:
        errors["name"] = "El nombre debe tener al menos 2 caracteres"
    if len(name) > 80:
        errors["name"] = "El nombre no puede superar 80 caracteres"
    if "@" not in email or "." not in email.split("@")[-1]:
        errors["email"] = "Email inválido"
    if len(message) < 10:
        errors["message"] = "El mensaje debe tener al menos 10 caracteres"
    if len(message) > 2000:
        errors["message"] = "El mensaje no puede superar 2000 caracteres"

    if errors:
        return jsonify({"ok": False, "errors": errors}), 400

    # Log del contacto (en producción: enviar email, guardar en DB, etc.)
    logger.info(f"Nuevo contacto: {name} <{email}> — {message[:100]}...")

    # TODO: Integrar envío real de email (SendGrid, Resend, SMTP, etc.)
    # Por ahora devolvemos éxito para que el frontend muestre confirmación

    return jsonify({"ok": True, "message": "Mensaje recibido. Te respondo pronto."})


@app.route("/api/health", methods=["GET"])
def health():
    """Health check endpoint."""
    return jsonify({"status": "ok", "service": "portfolio-api"})


if __name__ == "__main__":
    app.run(debug=True)