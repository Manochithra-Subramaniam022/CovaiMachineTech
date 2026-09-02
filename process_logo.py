from PIL import Image

def process_logo(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    # Any pixel that is close to white, make transparent
    for item in datas:
        # Check if the pixel is near white
        if item[0] > 220 and item[1] > 220 and item[2] > 220:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    
    # Get bounding box of non-transparent pixels to crop out whitespace
    bbox = img.getbbox()
    if bbox:
        # Add a tiny bit of padding (e.g., 5px) just in case
        left = max(0, bbox[0] - 5)
        top = max(0, bbox[1] - 5)
        right = min(img.width, bbox[2] + 5)
        bottom = min(img.height, bbox[3] + 5)
        img = img.crop((left, top, right, bottom))
        
    img.save(output_path, "PNG")
    print(f"Saved processed logo to {output_path}")

if __name__ == "__main__":
    process_logo("public/logo.png", "public/logo_transparent.png")
