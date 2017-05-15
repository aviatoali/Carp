# WebTask
An educational exploration to learn React and experiment around with making a web app. The database behind it all is Firebase. There's a very small set of data that doesn't really need a backend, but for demonstration purposes it's hooked up and the app is pulling down all vehicle data from it. Also note that if you're in chrome and are using its built-in dev tools to emulate a mobile screen, once the app loads, simply zoom out to regular distance. For some reason when you toggle mobile display on Chrome it starts auto-zoomed in. Once you go back to the regular distance it's all fine from there, though.

## Getting started
The web app is up on Heroku, so if you'd like to check the app out on your mobile devices, just head over to the following link:

[LINK TO WEBAPP](https://secret-chamber-82310.herokuapp.com/app).


### Want to run it yourself locally? No worries! Simply:
1. Clone the repository into a local directory.
1. Navigate to said directory on the command line, and at the root type:
      ```
      npm install
      ```
1. Once it's done installing all the necessary dependencies, simply enter the command:
      ```
      npm start
      ```
## Why Isn't There A Nice Optimized Build?
Good question! React is new for me and I wanted to dive into the code straight away so I used create-react-app, the new-ish officially supported way to create a single-page React application that requires no configuration. It uses both Webpack and Babel under the hood so you can focus on the code. When you're ready, though, you can always eject the app and gain access to the previously hidden config and build tools. I'd like to continue working on and optimizing this application, since I felt like I was a little coarse in my implementation, so I wanted to keep from ejecting just yet.

## Improvements/To Dos
1. More responsive: Given more time I'd like to make the application more responsive to different devices. With the current time constraints I was only able to ensure proper display for Samsung Galaxy S5/S6 phones.
2. Refactoring and Optimization: There are some sections that were brute-forced that I'd like to go back and make more reusable and streamlined. The way that data is pulled down from the database and passed around the application, for instance, is coarse.
3. React-Redux Store: I had begun to play around with trying to implement a global store through react-redux. It would've made the application flow much better for the components to have access to pertinent data and bound actions. Given more time I'd like to move forward with that.
