## [Check it on Vercel](https://calculator-constructor-five.vercel.app/)

# How to start the project localy?
- git clone this project
- cd my-app
- npm i
- npm run dev

# How to use this calculator?
1) First of all you see the Palette of calculator constructor
- you can add part from Palette to Canvas by drag and drop
- you can remove the part from Canvas by double click
- you can swap the parts between each other
### EXCEPTIONS: 
- display part is constantly on the top of the Canvas
- you can't use the calculator logic when the mode on Switch panel is "Constructor"
- you can't add same part twice 
2) If you want to calculate something, turn switch on "Runtime" mode and use it :)
- you can remove value by click on display
### EXCEPTIONS: 
- result cleaning after 1 sec
- operators are not displaying, but they are highlighting 
- you can't swap the parts here on "Runtime" mode
- when you switch mode back to "Constuctor" your dispay will clean up

# What I used for it?
| Package name                                                                                        | Version  |                                                | 
| ----------------------------------------------------------------------------------------------------|:--------:|:----------------------------------------------:|
|[vite](https://vitejs.dev/guide/)                                                                    | 4.1.0    | instead of CRA                                 |
|[eslint](https://eslint.org/)                                                                        | 8.2.0    | provides guide style, I used AIRBNB guide style|                                |
|[react](https://www.npmjs.com/package/react)                                                         | 18.2.0   | main library                                   | 
|[typescript](https://www.typescriptlang.org/docs/)                                                   | ^4.9.3   | provides typization                            | 
|[react-redux](https://www.npmjs.com/package/react-redux)                                             | 8.0.5    | provides state management                      |
|[@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit)                                   | ^1.9.3   | simplified version of redux                    |
|[tailwind css](https://tailwindcss.com/docs)                                                         | ^3.2.7   | CSS Framework                                  |
|[sass](https://www.npmjs.com/package/sass)                                                           | ^1.58.3  | provides SCSS functionality                    |
|[postcss](https://www.npmjs.com/package/postcss)                                                     | ^8.4.21  | lint CSS                                       |
|[react-drag-and-drop](https://www.npmjs.com/package/react-drag-and-drop)                             | ^3.0.0   | provides Drag and Drop functionality           |
