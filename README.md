# App Preview

https://user-images.githubusercontent.com/17801144/142776806-acd381d2-0695-4576-914c-d17ae6e0d08e.mp4

# Tests
Test should be written for functions using `jest`, for screens and components `Storybook` and `Loki`, for e2e testing - `Detox`

# React Native Developer Test

Welcome to the Sorted React Native Developer test. We've been using React Native since its initial public launch in 2015, and since then it's been our go-to choice for developing rich cross-platform experiences. 

This test has been designed to give you an opportunity to show your knowledge of React Native and will touch on aspects of functionality from state management, API interaction & UI design. There is no 'right' answer - we're most interested in how you choose to approach the challenge. There are no wrong submissions, as long as your code successfully runs.

Be sure to read **all** of this document carefully, and follow the guidelines within.

## Contents
-   [Task Outline](#task-outline)
-   [Requirements](#requirements)
-   [Notes](#notes)
-   [Q&A](#qa)

## Task Outline
Everyone at Sorted is passionate about food - and we're creating tools to help foodies all around the world cook better, and smarter. We give people the tools and know-how, but the rest is up to them.

As part of this, the Mealpacks app loads data from an API which provides data on Recipes, where Recipes are grouped together into Packs. Each week a selection of Packs are curated together into a Menu by our in-house development chefs.

We would like you to connect the provided Expo app to the Mealpacks REST API. You'll have to retrieve the Menu data, then display the Packs and related Recipes within the UI. We've given you all of the building blocks, but you'll have to fill in the blanks and decide on how to display the data retrieved from the API. Some minor clues have been left in the code which you may find of use.


## Requirements
To be successful in this task, you'll need to satisfy the following use cases:

**User session is persisted across app launches**

The app currently allows users to signup & login via auth0, but sessions are not persisted across app launches. If I have previously logged into the app, I should not have to login again on app launch.

> N.B. Do not worry about session duration or expiration

**The current Menu is displayed on the Home screen**

The Home screen should load from the Menu API (https://cook.sorted.club/api/v1/menu) and display a list of Packs, and within each Pack it should display a list of Recipes. Use your judgement on the design of this, but we encourage you to think *visually* and make use of images where appropriate.

> N.B. There is no authentication required for this API

**A dedicated Recipe screen which can be navigated to from the Home screen**

From the Home screen, you should be able to navigate to a new Recipe screen (the Recipes displayed on the Home screen should be clickable). The Recipe screen itself should use data loaded from the Menu API and should be kept visually simple. At a minimum, include the following information on the Recipe screen:
- Image
- Title
- Portion size toggle (refer to the `num_people` property)
- Cooking time for currently selected portion size
- Ingredient count for currently selected portion size

> N.B. There is no authentication required for this API

## Notes
* Use `yarn ios` or `yarn android` to run the Expo app and launch the simulator
* The APIs are publicly accessible.
* Don't forget to add comments to explain how any logically complex code works
* Add an indication of how you might approach testing in the app
* Write concise and clear commit messages
* Finish the `useOrientation` hook and adapt your styles between landscape & portrait _(optional)_
* Add rate limiting to the API at 60 req/min _(optional)_

## Q&A
> How much time should I spend on the task?

The task should take you a maximum of 3-hours. Please don't aim for a perfect submission by spending more time than this on it.

> How should I submit my test when I'm done?

Clone this repo and send a link when you think you are done. Do *not* fork the repo.
