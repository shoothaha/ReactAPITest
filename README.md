# React API Test

This is a single page CRUD react web application which renders the data from a PHP server as a table which has the CRUD functions. 

This repository contains only the React part of code, to fully running this application the PHP files will be needed.

#### Note:
Please insert the following code block to the top of `deliveries.php` and `drivers.php` file, the purpose of the following code is to solve and avoid the CORS (cross-origin resource sharing) issues:
```
$origin = $_SERVER['HTTP_ORIGIN'];
$allowed_domains = [
    'Your react doamin here, usually is: http://localhost:3000',
];

if (in_array($origin, $allowed_domains)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
    header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");
}

if (strtoupper($_SERVER['REQUEST_METHOD'] == 'OPTIONS')) {
    exit;
}
```