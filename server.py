import http.server
import socketserver
import json
import os
import base64
import time
import re

import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 3001
DB_FILE = 'database.json'
IMAGES_DIR = 'images'

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/api/data':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            try:
                with open(DB_FILE, 'r', encoding='utf-8') as f:
                    data = f.read()
                self.wfile.write(data.encode('utf-8'))
            except Exception as e:
                self.wfile.write(json.dumps({}).encode('utf-8'))
        else:
            super().do_GET()

    def do_POST(self):
        if self.path == '/api/data':
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length)
            try:
                data = json.loads(body.decode('utf-8'))
                with open(DB_FILE, 'w', encoding='utf-8') as f:
                    json.dump(data, f, ensure_ascii=False, indent=2)
                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "ok", "message": "Datos guardados en database.json"}).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))

        elif self.path == '/api/upload':
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length)
            try:
                payload = json.loads(body.decode('utf-8'))
                orig_filename = payload.get('filename', f"img_{int(time.time())}.jpg")
                clean_filename = re.sub(r'[^a-zA-Z0-9_\.-]', '_', orig_filename)
                final_filename = f"{int(time.time())}_{clean_filename}"
                
                base64_data = payload.get('base64', '')
                if ',' in base64_data:
                    base64_data = base64_data.split(',')[1]
                
                img_bytes = base64.b64decode(base64_data)
                
                web_dir = os.path.dirname(os.path.abspath(__file__))
                images_path = os.path.join(web_dir, IMAGES_DIR)
                os.makedirs(images_path, exist_ok=True)
                
                target_file = os.path.join(images_path, final_filename)
                with open(target_file, 'wb') as f:
                    f.write(img_bytes)
                
                rel_path = f"images/{final_filename}"
                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "ok", "imagePath": rel_path}).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))
        else:
            self.send_error(404, "Endpoint no encontrado")

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

if __name__ == '__main__':
    web_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(web_dir)
    os.makedirs(os.path.join(web_dir, IMAGES_DIR), exist_ok=True)
    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        print(f"Servidor HTTP con API de Carga de Imágenes en imágenes/ ejecutándose en puerto {PORT}...")
        httpd.serve_forever()
