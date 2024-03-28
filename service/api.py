from fastapi import FastAPI, UploadFile, Depends
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import shutil

import read_receipt
import llm_scripts

from constants import (
    BASIC_AUTH_USERNAME,
    BASIC_AUTH_PASSWORD
)

app = FastAPI()

origins = [
    "http://192.168.1.180:3000",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

security = HTTPBasic()



def get_current_username(credentials: HTTPBasicCredentials = Depends(security)):
    if credentials.username == BASIC_AUTH_USERNAME and credentials.password == BASIC_AUTH_PASSWORD:
        return credentials.username
    return None

@app.post("/receipt/json")
async def get_receipt_json(image: UploadFile, username: str = Depends(get_current_username)):
    if username is None:
        return {"message": "Authentication failed"}

    print("Received image "+image.filename+" from user "+username)

    # Process the image here
    temp_file_path = "/Users/prithvirajchaudhuri/Desktop/Other/Projects/Pay.me/tmp/image.jpg"
    with open(temp_file_path, "wb") as temp_file:
        shutil.copyfileobj(image.file, temp_file)

    reciept_text = read_receipt.extract_items_and_prices(temp_file_path)
    receipt_json = llm_scripts.get_json_from_scanned_text(reciept_text)
    print(str(receipt_json))
        
    # Return a JSON response
    return receipt_json

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)