import dotenv
import os

dotenv.load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", '')

BASIC_AUTH_USERNAME = os.getenv("BASIC_AUTH_USERNAME", '')
BASIC_AUTH_PASSWORD = os.getenv("BASIC_AUTH_PASSWORD", '')

EXAMPLE_JSON = {
        'items': [
            {
                'item': 'ITEM 1',
                'price': 2.11
            },
            {
                'item': 'ITEM 2',
                'price': 2.43
            },
            {
                'item': 'ITEM 3',
                'price': 8.54
            }
        ],
        'subtotal': 13.08,
        'tax': 0.01,
        'total': 13.09
    }

GET_JSON_RECEIPT_PROMPT = """
    Below is a scanned output from tessaract of a receipt. 
    Give me a json output of every item in this receipt and its price.
    Ensure that the json output is in the following format:

    {example_json}

    Scanned output:
    {scanned_output}
"""