# NFL Hall of Fame Web Application

This project is a web application that allows users to explore detailed information about significant players in NFL history. Users can easily access each player's career statistics and biography.

## Features

- **Player List**: A list of all players inducted into the Hall of Fame.
- **Detailed Player Information**: Access to career statistics and biographical details of each player.
- **Filtering and Search**: Search players by name or position.
- **Responsive Design**: Optimized for both mobile and desktop devices.

## Demo

![Demo GIF](./public/assets/Demo.gif)

## Technologies Used

- **React.js**: Used to build the user interface of the application.
- **React-Bootstrap**: Helps in quickly creating UI components with Bootstrap styles.
- **JavaScript**: The core programming language used for application functionality.
- **HTML/CSS**: Used for page structure and styling.

## Project Structure

```plaintext
┣ 📂.github
┃ ┗ 📂workflows
┃   ┗ 📜deploy.yml         # Automatic deployment workflow
┣ 📂public
┃ ┣ 📂assets               # Images and static files
┃ ┃ ┣ 📜background-image.jpg
┃ ┃ ┗ 📜logo.png
┃ ┣ 📜favicon.ico
┃ ┗ 📜index.html           # Entry point for the application
┣ 📂src
┃ ┣ 📂components           # React components
┃ ┃ ┣ 📂cards
┃ ┃ ┃ ┣ 📜CardsContainer.jsx
┃ ┃ ┃ ┗ 📜MyCards.jsx
┃ ┃ ┗ 📂header
┃ ┃   ┗ 📜MyHeader.jsx
┃ ┣ 📂helpers              # Helper functions and data
┃ ┃ ┗ 📜data.js
┃ ┣ 📜App.css              # Main styling file
┃ ┣ 📜App.js               # Main entry point of the application
┃ ┣ 📜index.css            # Global styles
┃ ┗ 📜index.js             # React rendering logic
┣ 📜.gitignore             # Git ignore rules
┣ 📜LICENSE                # Licensing information
┣ 📜package.json           # Dependency and project details
┣ 📜pnpm-lock.yaml         # pnpm lock file
┗ 📜README.md              # Project documentation
```

## Installation

1. **Clone the Repository**

```
git clone https://github.com/celal-dzelal/nfl-hall-of-fame.git

```

2. **Install the Required Dependencies**

```
pnpm install

```

3. **Start the Application**

```
pnpm start

```

### Contributing

- Feel free to open a pull request if you'd like to contribute to the project. Suggestions and feedback are welcome.

### License

- This project is licensed under the MIT License.
