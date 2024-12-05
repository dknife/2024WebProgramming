const http = require('http'); // Import the HTTP module
const fs = require('fs'); // Import the File System module
const path = require('path'); // Import the Path module

// Mapping of file extensions to Content-Type headers
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.json': 'application/json'
};

// Create the server
const server = http.createServer((req, res) => {
    // Parse the URL to get the requested file path
    let filePath = '.' + req.url; // Default to serving the file corresponding to the URL
    if (filePath == './') {
        filePath = './index.html'; // Default to index.html if no file is specified
    }

    // Get the file extension for setting the Content-Type
    const extname = path.extname(filePath);

    // Read and serve the requested file
    fs.readFile(filePath, 'utf-8', (err, content) => {
        if (err) {
            // If the file is not found or another error occurs, send a 404 error
            if (err.code == 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            }
        } else {
            // Set the Content-Type based on the file extension
            res.writeHead(200, { 'Content-Type': mimeTypes[extname] || 'application/octet-stream' });
            res.end(content);
        }
    });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
