document.addEventListener('DOMContentLoaded', function() {

    // --- SMOOTH SCROLL FOR NAV LINKS ---
    document.querySelectorAll('.nav-menu a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- ADD SHADOW TO HEADER ON SCROLL ---
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // --- CONTACT FORM SUBMISSION (FORMSPREE) ---
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', async function(event) {
            event.preventDefault();
            const status = document.getElementById('form-status');
            const data = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    status.innerHTML = "¡Gracias por tu mensaje! Te responderé pronto.";
                    status.style.color = 'var(--primary-color)';
                    form.reset();
                } else {
                    const responseData = await response.json();
                    if (responseData.hasOwnProperty('errors')) {
                        status.innerHTML = responseData.errors.map(error => error.message).join(", ");
                    } else {
                        status.innerHTML = "Oops! Hubo un problema al enviar tu formulario.";
                    }
                    status.style.color = '#dc3545'; // Un color de error
                }
            } catch (error) {
                status.innerHTML = "Oops! Hubo un problema de conexión.";
                status.style.color = '#dc3545';
            }
        });
    }
});
