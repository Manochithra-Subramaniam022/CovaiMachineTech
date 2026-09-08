import fitz
import io
from PIL import Image
import os

pdf_path = r"C:\Users\manch\.gemini\antigravity-ide\brain\d74f35d9-0e6a-4757-9875-e71a7a98b966\.user_uploaded\media_1788357178154.pdf"
doc = fitz.open(pdf_path)

targets = {
    13: "machine-ktm-dcmc2618.webp", # Double Column
    14: "machine-zeiss-spectrum.webp" # CMM
}

output_dir = r"c:\Projects\covaimachinetech\public\images"

for page_idx, filename in targets.items():
    page = doc.load_page(page_idx)
    image_list = page.get_images(full=True)
    
    if image_list:
        largest_img_tuple = None
        max_area = 0
        
        for img_tuple in image_list:
            width = img_tuple[2]
            height = img_tuple[3]
            area = width * height
            if area > max_area:
                max_area = area
                largest_img_tuple = img_tuple
                
        if largest_img_tuple:
            xref = largest_img_tuple[0]
            smask = largest_img_tuple[1]
            
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image = Image.open(io.BytesIO(image_bytes))
            image = image.convert("RGB")
            
            # Apply SMask if exists
            if smask > 0:
                mask_image_info = doc.extract_image(smask)
                mask_image_bytes = mask_image_info["image"]
                mask = Image.open(io.BytesIO(mask_image_bytes)).convert("L")
                
                # ensure same size
                if mask.size != image.size:
                    mask = mask.resize(image.size)
                
                # Paste over white background
                bg = Image.new("RGB", image.size, (255, 255, 255))
                bg.paste(image, mask=mask)
                image = bg
            
            output_path = os.path.join(output_dir, filename)
            image.save(output_path, 'WEBP')
            print(f"Extracted and saved {filename} with mask")
