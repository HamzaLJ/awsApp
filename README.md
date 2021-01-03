# Ionic app (Using AWS Amplify framework)

To run the app on the browser, run the following:

`ionic serve`

To build and run for Android :

`ionic capacitor build android`


To avoid the white screen while building for Android and see the app fully working, disable the following line that can be found inside (main.ts)

`Amplify.configure(awsmobile);`
