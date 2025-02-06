# Wordle Clone

## Overview

This is a simple Wordle clone built using React. The game allows users to guess a 5-letter word within 6 attempts, providing color-coded feedback for each guess.

## Features

- **Game Logic:**

  - The user has 6 attempts to guess a 5-letter word.
  - Color-coded feedback:
    - Green: Correct letter in the correct position.
    - Yellow: Correct letter in the wrong position.
    - Gray: Incorrect letter.
  - Prevents invalid words from being submitted.

- **UI/UX:**

  - A grid displaying previous guesses with color-coded feedback.
  - A message when the user wins or loses.
  - A "New Game" button to restart the game.

- **State Management:**
  - Tracks guessed words, remaining attempts, and game status.
- **Performance & Code Quality:**

  - Clean, modular, and readable code.
  - Proper component structure.

- **Bonus Features:**
  - Dark mode toggle.
  - Animations for letter feedback.

## Tech Stack

- **Frontend:** React
- **Styling:** CSS/TailwindCSS
- **No backend required** (words are hardcoded)

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/maniyadhav997/Wordle-clone.git
   cd wordle-clone
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   npm start
   ```
4. Open the application in your browser:
   ```
   http://localhost:3000
   ```

## Screenshots

### Light Mode

![Light Mode](https://github.com/maniyadhav997/Wordle-clone/blob/74ef27b1d2d34f047c18118e6cd318e66ba95bfa/Screenshot%202025-02-06%20103457.png)

### Dark Mode

![Dark Mode](https://github.com/maniyadhav997/Wordle-clone/blob/ad6e17dea6a41aed3aaef7194352fcbcf735e499/Screenshot%202025-02-06%20103156.png)

## Deployment

To deploy the application, run:

```sh
npm run build
```

Then, deploy the `build` folder using your preferred hosting service (Vercel, Netlify, GitHub Pages, etc.).

## License

This project is open-source and available under the MIT License.

## Author

Manikanta

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
