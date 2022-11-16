# What Do You Know?

## Table of Contents

- [Introduction](#introduction)
- [Links](#links)
- [Purpose](#purpose)
- [Setup](#setup)
- [Technologies](#technologies)
- [Complications](#complications)
- [Future Additions](#future-additions)
- [Author](#author)

## Introduction

What Do You Know? is a trivia app that is designed to help people test their knowledge in specific areas. Particularly in areas of programming and coding. With the ability to choose a category of trivia and then different topics within that. The user can then save questions of interest and then review them to strengthen their knowledge.

## Links

- [Project Spec](https://frontend.turing.edu/projects/module-3/showcase.html)
- [Project Board](https://github.com/users/Universal-Patois/projects/6)
- [Wireframe](https://miro.com/app/board/uXjVPGskeOU=/#tpicker-content)
- [Deployed Project](https://what-do-you-know.vercel.app/)

## Purpose

- The purpose of the project is a showcase of everything that was learned during my time in module 3 of Turing's School of Software and Design's Font-End Development program. Showcasing my understanding of React, React Router, Cypress, and competency with API's. As well as project management from conception, to research, to creation, and implementation. Creating the application based on user stories and applying everything I have learned so far during my time at Turing.

## Setup

1. Fork this repo - on the top right corner of this page, click the **Fork** button. 
2. Clone down the forked repo. To rename your project you can use an optional argument when you run git clone (you replace the [...] with the terminal command arguments): `git clone [remote-address] [what you want to name the repo]`
3. Once you have cloned the repo, change into the directory and install the project dependencies. Run `npm install` to install project dependencies.
4. Run `npm start` in the terminal to see the page running in your browser on `http://localhost:3000/`. `Control + C` is the command to stop running the local server.  Closing the terminal without stopping the server first could allow the server to continue to run in the background and cause problems. This command is not specific to Webpack; make note of it for future use. 
7. Enjoy!

## Technologies

* React
* React Router
* CSS
* Cypress Testing  
* LightHouse Accessibility Testing
* Consumption of Two API's for data

## Complications

There were several complications that arose during this project that caused some deviation from the MVP. They were:

* When creating the UI for selecting the response to each question the idea was to have check boxes for each choice. This proved to be a little too complicated for the scope of this project since the logic to track multiple check boxes across multiple questions required more code than I would have liked. Instead I switch to making the question choices clickable with buttons.

* When showing the results of the quiz after it was complete the intention was to have another page that showed each answer. This would show which ones were correct/incorrect and even what the users response was as well as the right answer. Also, with the ability to save each question. This also proved to be a little too complex for the time alloted on the project.

* While testing the application I realized that not all of the options for topics in the programming category were functional. It appears the API I was consuming did not have questions for each topic in each level of difficulty and therefore would throw a 404 response. Unfortunately I had to cut the ability to select difficulty down to only 'Easy'.

* During the production of the application I realized that I tried to implement the use of too many pages with router. This make the project a little more cumbersome due to the need of prop drilling to pass props across siblings. Given time I would have used a global state management like Redux to avoid that.

## Future Additions

- I would like to add is the ability to save the users quiz information within the local storage of the browser, so when the page is reloaded their information persists.

- I would like to add a feature to calculate the users all time statistics from quiz taking. Showing overall statistics as well as stats for each category/topic.

- Adding an answers page thats shows each question after the results are calculated. This page would show which questions were correct/incorrect and allow the user to save the question if they like.

- Adding global state management with Redux to avoid unnecessary prop drilling.

## Author

This project was created by [Andrew Knapick](https://github.com/Universal-Patois?tab=repositories)
