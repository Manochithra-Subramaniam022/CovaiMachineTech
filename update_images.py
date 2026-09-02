import re

with open(r'c:\Projects\covaimachinetech\src\app\page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace external hero image
content = content.replace(
    'src="https://cdn.prod.website-files.com/671f633d00383c11aeb0f116/672e35e7552c5617bc904ba0_hero-cnc.png"',
    'src="/images/hero-cnc.webp" width={1920} height={1080}'
)

# Replace local image extensions
content = re.sub(r'src="(/images/[^"]+)\.(jpg|jpeg|png)"', r'src="\1.webp" width={800} height={600}', content)

with open(r'c:\Projects\covaimachinetech\src\app\page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated page.tsx images to webp and added dimensions.")
