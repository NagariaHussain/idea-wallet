![](.github/images/hero.png)

# Project Report

## Introduction

## Ideation

First of all, thank you for making it an open-ended project! This made it a very interesting project to work on. I started by asking my colleagues for suggestions. I got some pretty good ideas from them. Here are a few of them:

* A Better ToDo list application

* A Better weather application

* An app to help people decide what to cook today intelligently

* An app / platform to connect volunteers with elderly to help them with chores

But either the ideas seemed very general or huge in scope. Last month, while reading this amazing book titled "Creative Confidence" by the **Kelly** brothers, I came across this idea of keeping an idea wallet. Basically, the authors suggest to always have something (like a diary or a "whiteboard in the shower" 😂) to note down ideas, since ideas can strike you anywhere, anytime.

So, then I thought, why not create an "Idea Wallet" in the form of an app!

### The Problems

The core problems I am trying to solve with this app:

* Ideas getting lost before we can write them down or act on them

* The written record itself gets lost

* The written pieces are not always in hand

* Categorize the ideas

Idea Wallet app tries to solve the above mentioned problems along with providing features that are not possible with written records:

* Voice Notes

* Accessible storing of links

* Image / Screenshot attachments

### The Users

Me! I designed and built this app so that I can use it as my idea wallet. Eventually, I want to publish it to the app stores (both iOS and Android) for anyone to download and use.

## Design

Everything related to the design and prototype of the app can be found in this Figma file: <https://www.figma.com/file/mABEJmd0j52tGisoPglDiY/IdeaWalletApp?node-id=58%3A4928>. Basically, the product design cycle consisted of the below 4 phases/deliverables:

1. User Flow Diagram
2. Hand Sketches
3. Lo-Fi Wireframes (Grayscale / Made in Figma)
4. Hi-Fi Wireframes / Visual Design (Make it beautiful!)

Believe me, I have spent as much time, if not more, in designing the app as it took me to develop it to the current point. But having every screen designed and ready, accelerated the development speed.

### User Flow Diagram

Here, I have mapped almost all the core actions that I want the user to be able to do in the app. For instance, creating a new idea, deleting a idea, searching for an idea and more.

![User Flow Diagram](.github/images/User-Flow-Diagram.jpg)

### Hand Sketches

Everything starts ugly. Period.

![](.github/images/hand-sketches.png)

## Lo-fi Wireframes

I placed my hand sketches into the figma file and started to create a lo-fi wireframe corresponding to them one by one. This phase was all about deciding what element would go where. In this phase, I didn't worry about fonts, colors, spacing etc. Those were done in the visual design phase.

![](.github/images/Lo-fi-wireframes.png)

### Hi-fi Wireframes / Visual Design

![](.github/images/Hi-fi-wireframes.png)

This is my favorite part of the Product Design process. In my opinion, it is all about iteration, iteration and iteration! I created a mood board with all kinds of app design inspiration from all over Dribble.

This phase involved choosing colors, fonts, sizes etc. This is what makes the app look look polished and visually pleasing.

### The Core Components

I have extensively used Figma's component feature to create reusable components that are used through out the app screen designs. This also helped a lot while developing the app, as I started by directly building these components as React components which, though initially a slow process, paid of a lot at later stages.

![](.github/images/Components.png)

## Development

### Entry Points: App.js

This is exactly what is returned by the `App` component:

```js
<ThemeProvider theme={theme}>
    <AuthProvider>
        <SafeAreaView style={{ flex: 1 }}>
            <Navigation />
        </SafeAreaView>
    </AuthProvider>
    <AlertMessage position="top" />
</ThemeProvider>
```

There are two main providers: `ThemeProvider` (which comes from `styled-components`) and `AuthProvider` (which I have implemented to provide authentication state for Supabase Auth). As you can see, a `Navigation` component is rendered at root. The Navigation component then manages all the screens using React Navigation, as discussed more in the next section.

### Navigation

The entry point for Navigation is located at `src/infra/navigation/index.js`. Basically it is a wrapper around React Navigation's `NavigationComponent` and renders either the `HomeNavigator` or `AuthNavigator` based on the authentication status. Currently, the authentication is useless, so I am just rendering the home navigator.

There is a lot of nesting of Navigators (Stack, Tab etc.) going on here, a diagram will give us a much better idea:

![](.github/images/Navigation-Arch.jpg)

As you see in the diagram, to achieve the desired navigation flow, I have used many advanced features provided by React Navigation like Tab Navigator, Stack Navigator, Navigation groups, Modal pages (which slide in from bottom and can be swiped down to close, like the New Idea Input Screen). Now, let's talk about that lit bottom tab bar!

### Bottom Tab Bar

I spent a whole day on this one 😅. While designing I didn't knew it would be a "little" hard to implement as expected, but it turned out awesome!

![](.github/images/Idea-Dashboard.png)

It is always present on the screen, except for the modal screens like new idea and category input. This is a standalone React component that I created, code can be found at `src/components/BottomNavigationBar.js`.

## New Stuff Used Not in Course

* Styled Components
* Expo Google Fonts
* ESLint & Prettier Setup

## Some cool components

* Select Box
* Click to Copy
* Flash Messages
* Image Viewer

<https://github.com/jobtoday/react-native-image-viewing>

## The Emoji Picker

This is one of my favorite components. It uses the below 3 libraries to work:

1. `gemoji`: List of emojis (with descriptions) used by GitHub.
1. `react-native-popover-view`: For shown the popover
1. `@shopify/flash-list`: For rendering the list of emojis to the popover view.

![](.github/images/Emoji-Picker.png)

I had to use `flash-list` because the normal scroll view/flat list were rendering very slow due to the large number of emojis (~2000) and I wanted to make it snappy!

## The `FloatingActions` component

Based on: <https://snack.expo.dev/@andypandy/animated-button-above-keyboard?platform=ios>

## The Voice Note player

I wrote a voice note / sound player component basically from scratch. This is one of the components that I am very proud of.

## The Backend

* Supabase
* Supabase Auth

## What went wrong?

The Scope. I had spent so much time designing the app and aiming for a lot of features. But, I was not able to implement all of it. Here are the things that I was not able to implement while submission:

1. Settings Screen (themes)
2. Update an existing idea and its attachments
3. Sync to Cloud

## Further Improvement

I plan to continue working on this app even after submitting this assignment. Here are a few thing that can be improved / introduced in the idea wallet app before publishing it to the app stores:

* Customized Splash Screen
* A Neat App Icon
* Emoji Picker enhancements: search by keyword and scroll to the currently picked emoji.
* UX for recording voice Notes, currently if we record a voice note and then again tap the mic button, the previous recording is overwritten :(.
* Color Theme Preference in settings

## Conclusion
