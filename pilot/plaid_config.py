import os
import plaid

from plaid.api import plaid_api

import environ

env = environ.Env()
environ.Env.read_env()


class PlaidConfig():
    def __init__(self, env):
        self.env = env

    def client(self):
        configuration = plaid.Configuration(
            host=self.env,
            api_key={
                'clientId': env('PLAID_CLIENT_ID'),
                'secret': env('PLAID_SECRET')
            }
        )
        api_client = plaid.ApiClient(configuration)
        client = plaid_api.PlaidApi(api_client)
        return client
