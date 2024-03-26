from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain_openai import OpenAI

import json

from constants import (
    OPENAI_API_KEY,
    EXAMPLE_JSON,
    GET_JSON_RECEIPT_PROMPT
)

def get_json_from_scanned_text(text):
    # Create a prompt template
    prompt = PromptTemplate.from_template(GET_JSON_RECEIPT_PROMPT)
    prompt_str = prompt.format(scanned_output=text, example_json=json.dumps(EXAMPLE_JSON))
    # Create an OpenAI language model chain
    llm = OpenAI(api_key=OPENAI_API_KEY, max_tokens=1000)
    answer = llm.invoke(prompt_str)
    return json.loads(answer)
