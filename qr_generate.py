# Importing library
# usage python qrcode url image
import sys
import qrcode
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--link', type=str, help="Link to generate QR code for poster")
parser.add_argument('--image_path', type=str, help="Image path to save the qr image")
args = parser.parse_args()

def generate_qr(link, image_path):
    img = qrcode.make(link)
    img.save(image_path)

if __name__ == '__main__':
    generate_qr(args.link, args.image_path)