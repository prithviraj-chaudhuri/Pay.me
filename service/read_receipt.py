import pytesseract
from PIL import Image
from llm_scripts import get_json_from_scanned_text

def extract_items_and_prices(image_path):
    text = ""
    with Image.open(image_path) as img:
        text = pytesseract.image_to_string(img)
    return text

# def main():
#     # Path to the uploaded receipt image
#     image_path = "/Users/prithvirajchaudhuri/Downloads/IMG_2958.jpg"  # Update this with the actual path

#     # Extract items and prices from the receipt image
#     items_and_prices = extract_items_and_prices(image_path)
#     print(items_and_prices)

#     answer = get_json_from_scanned_text(items_and_prices)
#     print(answer)


# if __name__ == "__main__":
#     main()
