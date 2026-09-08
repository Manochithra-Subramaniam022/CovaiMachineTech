import fitz
import io
from PIL import Image
import os

pdf_path = r"C:\Users\manch\.gemini\antigravity-ide\brain\d74f35d9-0e6a-4757-9875-e71a7a98b966\.user_uploaded\media_1788357178154.pdf"
doc = fitz.open(pdf_path)

# Dictionary for pages to extract images from
# Page 14 (index 13) is DCMC, Page 15 (index 14) is CMM
targets = {
    13: "machine-ktm-dcmc2618.webp", # Double Column
    14: "machine-zeiss-spectrum.webp" # CMM
}

output_dir = r"c:\Projects\covaimachinetech\public\images"

for page_idx, filename in targets.items():
    page = doc.load_page(page_idx)
    image_list = page.get_images(full=True)
    
    if image_list:
        # Assuming the largest image on the page is the machine image
        # Let's find the image with the largest width * height
        largest_img = None
        max_area = 0
        img_index = 0
        
        for i, img in enumerate(image_list):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            
            image = Image.open(io.BytesIO(image_bytes))
            area = image.width * image.height
            if area > max_area:
                max_area = area
                largest_img = image
                
        if largest_img:
            # Convert to webp and save
            output_path = os.path.join(output_dir, filename)
            # if the image has transparency (e.g. RGBA), keep it, otherwise convert to RGB
            if largest_img.mode in ('RGBA', 'LA') or (largest_img.mode == 'P' and 'transparency' in largest_img.info):
                pass
            else:
                largest_img = largest_img.convert('RGB')
            largest_img.save(output_path, 'WEBP')
            print(f"Extracted and saved {filename}")
        else:
            print(f"Could not load largest image on page {page_idx+1}")
    else:
        print(f"No images found on page {page_idx+1}")
