# Finhealth / BD Plaid Pilot

This repo contains our pilot Django application intended to collect and annotate two years of retrospective financial data.


## Local deployment

First, clone our repo using `git clone https://github.com/brozena/finhealth-pilot.git`. The `sqlite` branch is configured to use Plaid's Sandbox and  sqlite3 (rather than postgresql) for easier local deployment. After cloning, navigate to the project's folder using `cd finhealth-pilot` and then use `git checkout -b sqlite origin/sqlite` before proceeding.

We'll tend to stick to [feature branch workflows](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).


### pipx & poetry

We use [pipx](https://pipx.pypa.io/stable/) and [poetry](https://python-poetry.org/) for package/environment management. On a Mac, the easiest way to install `pipx` is using [Homebrew](https://brew.sh),

```
brew install pipx
pipx ensurepath
```

If you do not use Homebrew, go ahead and follow the [installation instructions](https://pipx.pypa.io/stable/) for your platform.

Poetry can then be installed using `pipx install poetry`. Then run `poetry install` from within the project's root directory to get dependencies installed as specified in `pyproject.toml`.

**A note on virtual environments:** By default, `poetry install` will create a Python virtual environment according to [Poetry's configuration](https://python-poetry.org/docs/configuration/). Internally, we set `virtualenvs.path` to a specific directory and then set `virtualenvs.in-project` to false. We then configure `mod_wsgi` to make use of (and isolate to) Poetry's virtual environment, which is necessary for the asynchronous Plaid calls.


### Environmental variables

Environmental variables required by this project are listed in `finhealth/.env.example`. Copy that file to `finhealth/.env` and enter a Django secret of your choosing and your Plaid API keys. These can be found in the [Plaid dashboard](https://dashboard.plaid.com). 

`.env` is listed in `.gitignore`; **do not** hardcode API keys or other authentication info. Note that the `sqlite` branch does not require postgres authentication details to run.


### Handling Plaid calls

This repo makes use of `celery` (installed via Poetry) and `rabbitmq-server` (installed manually, as a service) to handle the Plaid calls. If you want to test calls to Plaid (using either Sandbox or Production modes), you can get `rabbitmq-server` installed and then run `poetry run celery -A finhealth worker -l debug`.

In our case, Apache is configured to use Poetry's venv through `mod_wsgi` by setting `WSGIPythonPath` and `WSGIDaemonProcess python-home` within the httpd.conf virtualhost definition. Also, since we don't host this prototype on the public internet, we use a [ngrok](https://ngrok.com/) agent to establish a tunnel with a selector pointing at `/webhook_transactions`. This lets us receive Plaid's `HISTORICAL_UPDATE` webhook when transactions are ready.


### Starting Django

So long as pipx/poetry are installed correctly (i.e., no issues with `pipx ensurepath` or the Poetry venv), you should be able to get a Django instance up and running in a shell using the following commands:

```
poetry run python3 manage.py makemigrations
poetry run python3 manage.py migrate
poetry run python3 manage.py migrate --run-syncdb
poetry run python3 manage.py runserver
```

You'll also want to edit `finhealth/settings.py` to adjust `ALLOWED_HOSTS` to fit your needs.

Email me if you have any questions or comments!
