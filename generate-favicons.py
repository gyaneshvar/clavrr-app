#!/usr/bin/env python3
from PIL import Image
import os

public_dir = os.path.join(os.path.dirname(__file__), 'public')
logo_path = os.path.join(public_dir, 'clavrr-logo.png')

try:
    # Open the logo
    img = Image.open(logo_path)
    
    # Create 256x256 favicon
    favicon = img.resize((256, 256), Image.Resampling.LANCZOS)
    favicon.save(os.path.join(public_dir, 'favicon.png'))
    print('✓ favicon.png created (256x256)')
    
    # Create 32x32
    favicon_32 = img.resize((32, 32), Image.Resampling.LANCZOS)
    favicon_32.save(os.path.join(public_dir, 'favicon-32x32.png'))
    print('✓ favicon-32x32.png created')
    
    # Create 16x16
    favicon_16 = img.resize((16, 16), Image.Resampling.LANCZOS)
    favicon_16.save(os.path.join(public_dir, 'favicon-16x16.png'))
    print('✓ favicon-16x16.png created')
    
    # Create apple-touch-icon (180x180)
    apple_icon = img.resize((180, 180), Image.Resampling.LANCZOS)
    apple_icon.save(os.path.join(public_dir, 'apple-touch-icon.png'))
    print('✓ apple-touch-icon.png created (180x180)')
    
except Exception as e:
    print(f'Error: {e}')
