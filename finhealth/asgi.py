"""
ASGI config for finhealth_django project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'finhealth.settings')

application = get_asgi_application()

"""Added by ngrok"""
# This block handles 'make run-django-uvicorn' and 'make run-django-gunicorn' which uses this asgi.py as the entry point.
# Set env variable to protect against the gunicorn autoreloader.
if os.getenv("NGROK_LISTENER_RUNNING") is None:
    os.environ["NGROK_LISTENER_RUNNING"] = "true"
    import asyncio, multiprocessing, ngrok, sys

    async def setup():
        listen = "localhost:80"
        listener = await ngrok.default()
        print(f"Forwarding to {listen} from ingress url: {listener.url()}")
        listener.forward(listen, authtoken_from_env=True, proto="tcp", ip_restrictions_allow_cidrs=["52.21.26.131", "52.21.47.157", "52.41.247.19", "52.88.82.239"])

    try:
        running_loop = asyncio.get_running_loop()
        running_loop.create_task(setup())
    except RuntimeError:
        # no running loop, run on its own
        asyncio.run(setup())
"""End added by ngrok"""
