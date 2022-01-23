# Note Taker Starter Code
# Description
For this week challenge, We were given a starter code for an application called Note Taker that used to write ans save notes. We had to use an Express.js back-end that will save and retrieve note data from a JSON file.

# Table of contents
[Installation](#Installation)<br>
[User Story](#User-Story)<br>
[Acceptance Criteria](#Acceptance-Criteria)<br>
[Credits](#Credits)<br>
[Walkthrough Video](#Walkthrough-Video)<br>
[Bonus](#Bonus:-+10-Points)<br>

# Installation
You can use the `-y` flag to skip the package questionnaire and leave default answers
```
npm init -y
```
 You can use `npm i` as a shortcut for `npm install`
```
npm i express
```
# Usage
``` html
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000)
```
# Credits
GitHub: https://github.com/maddi124 <br>
### Starter Code:
GitHub: https://github.com/coding-boot-camp/miniature-eureka.git
# Walkthrough Video
https://watch.screencastify.com/v/VF0KqntgYFDoLHGQq7O6
# User Story
``` 
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```
# Acceptance Criteria
```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

```
### Bonus: +10 Points
```
Application allows users to delete notes.
```