# OddCommon Code Test

This repo is setup as a quick start, if you have a go to starter that you're more comfortable with feel free to use, but please include instructions for building.

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

Good luck!

### Helpers and things you will need

- In `src/scripts/data` you will find a config file from the vimeo API that contains a set of 25 featured videos. Use this as your data.
- In order to get the raw video clip you will need to make a `POST` request to: `https://proxy.oddcommon.dev/proxy?url=https://player.vimeo.com/video/${video_id}/config`
  - This request will return a config file for the requested video. In order to get the actual video file, you will need to look at `request.files.progressive` in the payload. You will need to sort and use the widest video in the set. This will be an mp4 that you can use in your app.
  ```js
  config.request.files.progressive.sort((a, b) => b.width - a.width)[0];
  ```

# react-boilerplate

A minimal boilerplate for Vite + React.

## ⚙️ Setup

- `npm i`
- `npm start`

## 🔨 Build

- `npm run dist`

## 🚧 Config

You can find the `vite.config.js` in the root of the project, there you can modify the Vite setup and configuration.

### 🥸 Aliases

There are a base set of aliases you can use, you can add or modify in `vite.config.js`

```js
  '@assets': `${path.resolve(__dirname, './src/public')}`,
  '@store': `${path.resolve(__dirname, './src/scripts/store')}`,
  '@data': `${path.resolve(__dirname, './src/scripts/data')}`,
  '@libs': `${path.resolve(__dirname, './src/scripts/libs')}`,
  '@hooks': `${path.resolve(__dirname, './src/scripts/hooks')}`,
  '@views': `${path.resolve(__dirname, './src/scripts/views')}`,
  '@components': `${path.resolve(__dirname, './src/scripts/components')}`,
  '@styles': `${path.resolve(__dirname, './src/styles')}`,
  '@cssUtils': `${path.resolve(__dirname, './src/styles/utils')}`,
```

## 📦 What's inside

- Utils

  - [@oddcommon/utils](https://github.com/oddcommon/utils) - A set of handy tools that we use often at oddcommon
    - A commonly used util is `css` this allows for stateful class names in an esily composable manner.
    - example:
    ```js
        ...
        <MyComponent
            className={css(
                someStateOrLogic && Styles.active,
                someOtherLogic && Styles.exampleClass
            )}
        />
        ....
    ```

- State

  - [zustand](https://github.com/pmndrs/zustand) - A small, fast and scalable bearbones state-management solution using simplified flux principles. Has a comfy api based on hooks, isn't boilerplatey or opinionated.
    - You can find the store in `src/scripts/store`

- [Normalize](modern-normalize)

- Animations
  - [GSAP](https://greensock.com/gsap/)

## 📐 Structure

The setup here is very basic so modify as you see fit.

- public
  - Any assets that should be considered static and don't need to be hashed at compile time.
- scripts
  - `components`
    - Repeated and shared components from the app.
  - `store`
    - Global State. You can access via `import useStore from "@store"`
  - `views`
    - A view is a collection of components and will typically be a wrapper for a page or a larger component on a page.
  - `index.jsx`
    - Where things get started.
  - `styles`
    - `_fonts.scss` - Font imports & base styles.
    - `_mixins.scss` - Useful mixins, expand this if needed.
    - `_typography.scss` - Global type styles
    - `_utils.scss` - Should not generate styles but act as a proxy for vars & mixins.
      - Import into your components using `@import '@cssUtils'`
    - `_vars.scss` - Variables
    - `index.scss` - Global Styles

## 👮‍♀️ Rules

We try not to be too heavy handed with opinions but there are some basic rules to follow:

- Anything that is repeated more than once should be turned into a component.
- Use SCSS modules for styles

  - The only global styles you should be using are type styles for tags and basic elements.
  - When importing use `import Styles from './index.module.scss`

- Keep ALL requests ( axios / fetch ) in the store, a component and view should be responsible for presentation layer only.

- Documentation and comments are highly encouraged.

- Don't be clever. As fun as a cool one liner is, your code should be made for other humans.
