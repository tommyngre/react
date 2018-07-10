# react
The "Minecraft Memory Game" tests your memory and reinforces your Minecraft characters awareness- a critical knowledge.

The instructions are simple: Try to click every character - without clicking one twice.

Here's how it works:
* The page loads 16 images of Minecraft characters
* Each time you click an image, the images shuffle
* If you click one which you **have not clicked before**, you get a point
* If you click one you **have clicked before**, you lose :( and the game game resets
* The session stores your high score (session, not persistent)

## implementation
Built with `node`, `react` (`create-react-app`), and `bootstrap 4.0`. If you inspect the code, you'll see Wrapper and Card are container components, and Header, Alert, and HighScore are presentational components. 
* Wrapper passes props to Card, Header, and Alert
* Wrapper and Card leverage an onClick function

See it hosted on Heroku, [here](https://ancient-river-89549.herokuapp.com/).