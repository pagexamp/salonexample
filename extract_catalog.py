import os
import sys
import pymupdf

sys.stdout.reconfigure(encoding='utf-8')

pdf_files = [f for f in os.listdir('.') if f.lower().endswith('.pdf')]
print("PDF files found count:", len(pdf_files))

if pdf_files:
    pdf_path = pdf_files[0]
    doc = pymupdf.open(pdf_path)
    print(f"Total pages in PDF: {len(doc)}")
    
    os.makedirs("extracted_images", exist_ok=True)
    
    full_text = []
    for page_num in range(len(doc)):
        page = doc[page_num]
        text = page.get_text()
        print(f"\n--- PAGE {page_num + 1} ---")
        print(text)
        full_text.append(f"=== PAGE {page_num + 1} ===\n" + text)
        
        # Extract images from page
        image_list = page.get_images(full=True)
        print(f"Page {page_num + 1} has {len(image_list)} images")
        for img_index, img in enumerate(image_list):
            try:
                xref = img[0]
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                image_ext = base_image["ext"]
                image_name = f"page_{page_num+1}_img_{img_index+1}.{image_ext}"
                image_save_path = os.path.join("extracted_images", image_name)
                with open(image_save_path, "wb") as f:
                    f.write(image_bytes)
                print(f"Saved image: {image_save_path}")
            except Exception as e:
                print(f"Error extracting image {img_index}: {e}")

    with open("pdf_catalog_text.txt", "w", encoding="utf-8") as f:
        f.write("\n\n".join(full_text))
    print("\nSaved pdf_catalog_text.txt successfully!")
