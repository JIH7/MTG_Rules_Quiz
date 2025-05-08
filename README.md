# MTG Quiz App
A school project that quizes the player on Magic the Gathering rules

## Project Setup
Install node.js and open a terminal in the same directory as `package.json`.

Execute `npm install` to download the required Node Modules

To load the project dev environment, execute `npm run dev`, and to export the project to host elsewhere run `npm run build`. This will create a folder called "dist" where the build can be found.

## Project Rundown

### Basics
App.jsx is the entry point to the project. This component uses a switch statement and a state variable to conditionally render different pages for the user.

HomePage.jsx, NameEntry.jsx, QuestionPage.jsx, ResultsPage.jsx and HighScores.jsx are the pages that can be loaded, anything other JSX files are components these can load.


### Questions
The questions.json file contains the questions of course. Each item in the JSON object needs a question string property, an answers array of strings property, and an integer solutions property. When an array of images is present, the app will render a container for the images and an img tag for each one. When an explanations array is present, the default message that shows when the corresponding answer is selected will be overwritten. Explanations should be the same length as answers when present.

### Scores
When the app is loaded, a React useEffect hook checks localstorage for a highScores key. If present, the corresponding array is loaded into a React state variable. Any time one is changed, the other should be changed as well. The state variable mirrors the stored values to handle UI reactivity while staying true to actual data.