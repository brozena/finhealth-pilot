# Finhealth / BD Plaid Pilot

This repo contains our pilot Django application intended to collect and annotate two years of retrospective financial data.

## Local deployment

First, clone our repo using `git clone https://github.com/brozena/finhealth-pilot.git`. The `sqlite` branch is configured to use sqlite3 (rather than postgresql) for easier local deployment. After cloning, navigate to the project's folder and use `git switch sqlite` before proceeding.

We'll tend to stick to [feature branch workflows](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).

### pipx & poetry

We use [pipx](https://pipx.pypa.io/stable/) and [poetry](https://python-poetry.org/) for package/environment management. On a Mac, the easiest way to install `pipx` is using [Homebrew](https://brew.sh),

```
brew install pipx
pipx ensurepath
```

If you do not use Homebrew, go ahead and follow the [installation instructions](https://pipx.pypa.io/stable/) for your platform.

Poetry can then be installed using `pipx install poetry`. Then run `poetry install` from within the project's root directory to get dependencies installed as specified in `pyproject.toml`.

### Environmental variables

Environmental variables required by this project are listed in `.env.example`. Copy that file to `.env` and enter our Plaid API keys. These can be found in the Plaid dashboard -- get in touch with us if you need access to this. `.env` is listed in `.gitignore`; **do not** hardcode API keys or other authentication info. Note that the `dev` branch does not require postgres authentication details to run. 

### Starting Django locally

So long as pipx/poetry are installed correctly (i.e., no issues with `ensurepath`), you should be able to get a Django instance up and running in a shell using the following commands:

```
poetry run python3 manage.py makemigrations
poetry run python3 manage.py migrate
poetry run python3 manage.py runserver
``` 

## Production deployment

The production environment is a RHEL8 VM on IST's network and is accessible via SSH over their jump host:

```
ssh -J username@ssh.ist.psu.edu username@finhealth.ist.psu.edu
```

This repo is contained at `/data/websites/finhealth`. Conventionally `.pipx` is located in a home directory. To meet IST requirements, `.pipx/` is located at `/data/websites/.pipx`, including the virtual environments required by this project. See [pipx installation options](https://pipx.pypa.io/stable/installation/#installation-options) for more details on this.

Apache is configured to use Poetry's venv as `WSGIPythonPath` and `WSGIDaemonProcess python-home` within the virtualhost definition. Questions about this should be directed to IST's helpdesk.
