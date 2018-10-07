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
#### Running
To run this app:
- Open terminal and enter the root directory of backend files
- Run `php -S localhost:8000` to start the api server
- Then open another tab of your terminal
- Go to the `ReactAPITest` directory
- Run `npm start` should automatically open your browser with the page, if not, [http://localhost:3000](http://localhost:3000) is the URL for this application

#### PS:
If you have errors about "eslint" version issues while running `npm start`, it's not an error that could influence the application, just a "eslint" plugin issue. You can ignore it by create a `.env` file and add `SKIP_PREFLIGHT_CHECK=true` to it, then run `npm start` again, it should works fine then. 