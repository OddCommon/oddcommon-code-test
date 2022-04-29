# OddCommon Code Test

This repo is a bare bones vite + react boilerplate. If you have a go to starter that you're more comfortable with feel free to use just include instructions for building.

Note that fonts are included in this repo so feel free to grab them to use within your app.

🤘

## Instructions

1. Download this repo
2. Check out the figma
3. Read the readme
4. Make magic happen
5. Create a new repo and push

## The task:

Build a single page application that shows a list of curated videos from Vimeo. The page should populate with the static thumbnail provided by Vimeo, its title and a set of like and dislike buttons. These buttons should persist their like or disliked status between page refreshes.

As you scroll the cell that is the most in view should start playing its video inline. We look to you on how you want to handle scrolling and animating these cells. If you have a neat idea for an interaction that is different than just a native scroll that’s great and we’d love to see it.

When a user taps on a cell it should seamlessly transition to a detail view and begin playing the video with sound, and custom controls should appear below with a progress bar over the video. Again we defer to you on how you’d like to handle this transition.

When a user taps the next and previous buttons it should transition to the next or previous video in the config file. No need for infinite looping, it is okay to disable the previous and next buttons when you’ve hit the min and max of the list.

Your target should be mobile browsers.

Good luck!

### Helpers and things you will need

- The Vimeo API is rate limited so for the sake of caching in `src/scripts/data` you will find a config file from the vimeo API that contains a set of 25 featured videos. Use this as your data.

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

- [Vimeo Player](https://www.npmjs.com/package/@vimeo/player)

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
