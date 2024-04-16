# URL Shortener

This repository contains the source code for a simple URL shortener built using Node.js and Express. The URL shortener allows users to generate shortened versions of long URLs, making them easier to share and manage. It provides a RESTful API for creating short URLs and handles redirection to the original URLs seamlessly.

## Key Features
- **Shorten URLs:** Generate short, unique identifiers for long URLs.
- **RESTful API:** Exposes endpoints for creating short URLs and handling redirection.
- **Frontend Interface:** Includes a simple web interface created with the help of ejs for users to input URLs and get shortened versions.
- **User Authentication:** Allows user to authenticate and register themselve, check ckick history and other analytics of their short urls.
- **Admin Authorization:** User with admin previlages are allowed to check not only their own analytics but also the analytics of all users.
- **Error Handling:** Implements robust error handling and validation to ensure smooth user experience.

## Dependencies
- **cookie-parser**
- **dotenv**
- **ejs:** `ejs` is used to generate the server side rendered pages.
- **express:** Fast, unopinionated web framework for Node.js.
- **jsonwebtokens:** JSON web tokens used for authentication and authorization.
- **mongoose:** The Database choosen is MongoDB, the repository uses `mongoose` as database driver.
- **ssid:** Library for generating short, unique IDs.
- **uuid**

## Usage
1. Clone the repository:
   ```
   git clone https://github.com/vaibhav-goklani/URL-Shortener.git
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```

## Contributing
Contributions are welcome! If you have ideas for new features, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## Author
[Vaibhav Goklani](https://github.com/vaibhav-goaklani)