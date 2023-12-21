# OddCommon Code Test

This repo is a bare bones Vite + React boilerplate. If you have a go to starter that you're more comfortable with, feel free to use that instead. Our only tech requirements are that you use React and SCSS modules as we are looking for basic domain knowledge within that stack.

🤘

## Instructions

1. Download this repo
2. Check out [the Figma](https://www.figma.com/file/055fR0aI4qAMVYZjxpe33P/OddCommon-Code-Test?type=design&node-id=0%3A1&mode=design&t=P32wz6MhbFhMzzxr-1)
3. Read the readme
4. Make magic happen
5. Create a new repo and push

## The task:

Build a single page application that shows a list of curated videos from Vimeo. The page should populate with the static thumbnail provided by Vimeo, its title, and a set of like and dislike buttons. These buttons should persist their like or disliked statuses between page refreshes.

As you scroll the cell that is the most in view, it should start playing its video inline. We look to you on how you want to handle scrolling and animating these cells. If you have a neat idea for an interaction that is different than just a native scroll—great! We’d love to see it.

When a user taps on a cell it should seamlessly transition to a detail view and begin playing the video with sound, and custom controls should appear below with a progress bar over the video. Again, we defer to you on how you’d like to handle this transition.

When a user taps the next and previous buttons it should transition to the next or previous video in the config file. No need for infinite looping; it is okay to disable the previous and next buttons when you’ve hit the min and max of the list.

Your target should be mobile browsers.

Good luck!

### Helpers and things you will need

- The Vimeo API is rate limited so for the sake of caching in `src/scripts/data` you will find a config file from the vimeo API that contains a set of 16 featured videos. Use this as your data.

- In order to achieve the layout and design you will need to access the raw MP4 from Vimeo. To help you we've created a little proxy you can use to query for the config. `https://proxy.oddcommon.dev/vimeo/${video_id}`
  - That endpoint will return the config metadata for the Vimeo video. You will need to parse this data and merge it with your other data.
  - You will need to run a POST request (not a GET request) to access a valid response.
  - To get the actual MP4 you will need to look at `request.files.progressive` which will be a set of videos. Would suggest sorting and filtering the largest video.

# react-boilerplate

A minimal boilerplate for Vite + React.

## ⚙️ Setup

- `npm i`
- `npm start`

## 🔨 Build

- `npm run dist`

## 🚧 Config

You can find the `vite.config.js` in the root of the project, there you can modify the Vite setup and configuration.

## 📦 What's inside

- [zustand](https://github.com/pmndrs/zustand) - A small, fast and scalable bearbones state-management solution using simplified flux principles. Has a comfy api based on hooks, isn't boilerplatey or opinionated.

- [Normalize](modern-normalize)

- [GSAP](https://greensock.com/gsap/)

## 📐 Structure

The setup here is very basic so modify as you see fit.

- public
  - Any assets that should be considered static and don't need to be hashed at compile time.
- scripts
  - `components`
    - Repeated and shared components from the app
  - `data`
    - Where data lives
  - `index.jsx`
    - Where things get started
  - `styles`
    - `_fonts.scss` - Font imports & base styles
    - `index.scss` - Global Styles
