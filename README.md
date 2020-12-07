# DES Mobile App
DVSA Driving Examiner Application

### Pre-requisites

- Node
- npm
- Ionic CLI: `npm install -g ionic`
- Capacitor `npm install @capacitor/core @capacitor/cli`
- Cocoapods `brew install cocoapods`
- NOTE: you wil need to obtain `ionic-config.json` and `.npmrc` files containing the ionic enterprise licence keys and save to the project root in order to build the app.

### Get started

- `npm i`
- `npm run build`
- `ionic capacitor add ios`
- `ionic cap sync`todo
- For simulator `ionic cap run ios -l --external` this will open xcode where you can select your device and click play
- For browser `ionic serve`

### State management with NGXS

This branch contains a simplified solution for the application where a DE load a journal and can collect data on two different categories. Focusing on solving the state management using NGXS.