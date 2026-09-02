from PIL import Image
import os
import glob

directory = r"c:\Projects\covaimachinetech\public\images"
files = glob.glob(os.path.join(directory, "*"))
for file in files:
    if file.lower().endswith(('.png', '.jpg', '.jpeg')):
        try:
            img = Image.open(file)
            webp_file = os.path.splitext(file)[0] + ".webp"
            img.save(webp_file, "WEBP", quality=85)
            print(f"Converted {file} to {webp_file}")
        except Exception as e:
            print(f"Failed to convert {file}: {e}")
