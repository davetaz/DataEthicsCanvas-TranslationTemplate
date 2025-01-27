# Data Ethics Canvas

You can use this tool to view different translations on different both the colour and black and white Data Ethics Canvases.

This can be acheived by simply changing the *lang* and *color* query parameters e.g.

https://theodi.github.io/data-ethics-canvas/?lang=en&color=greyscale

lang = Any language in the lang directory

color = *colour* OR *greyscale* only (default is colour)

## How to submit a translation

In the lang folder, take an existing translation to edit and create a new file with your language code as the filename.

Carefully translate the contents and send it back to us as a pull request.

However, if you are new to Github/unsure how pull requests work then we ask that you download and save <a href="https://raw.githubusercontent.com/theodi/data-ethics-canvas/master/lang/translateMe.json"> this file </a> to your computer. Open the file in your local text editor e.g. TextEdit on Mac or Notepad on Windows. This file is in the <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON"> JSON format </a>. Make sure to directly change the "title" and "questions" one-by-one without making changes to the overall structure. 

Please see the gif below:

<img src="./InstructionAssets/JSON-Example.gif"/>

Once you have made changes to every "title" and "questions" then <a href="mailto:jack.schofield@theodi.org"> email us </a> at the ODI to implement these changes.

## How to re-arrange the canvas

Assuming you want to choose the where the data is placed with in the bubbles — we will use something called appendChild. Append child is how we put an item inside of another item.

So, lets say we want to put the the first piece of text inside the 3rd bubble

### This text

<img src="./InstructionAssets/Untitled 4.png"/>

### Inside of 

<img src="./InstructionAssets/Screenshot_2021-06-03_at_10.23.04.png"/>

### To look like this

<img src="./InstructionAssets/Untitled 5.png"/>

We use appendChild. AppendChild is <u>exactly the same</u> as saying *'container 3 will contain the data in container 1'*. So, lets do this directly below where it says //CHANGE CODE HERE in your *main.js* file: 

<img src="./InstructionAssets/Untitled 6.png"/>

Repeat this process deciding where you want to insert the text into which bubbles. 

Double click on your html file to see the results

When you are happy with what goes where, we can move on to changing the print settings.

### Here is a finished example:

<img src="./InstructionAssets/Untitled 7.png"/>

Change the destination to *'save as PDF'*. Change the layout setting from *portrait to landscape*. Click on *more settings* and change the *scale to 80*.

<img src="./InstructionAssets/Untitled 8.png"/>

Once all of these changes have been made press print
