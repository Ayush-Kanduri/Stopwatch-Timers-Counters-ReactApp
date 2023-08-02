# Stopwatch, Timers & Counters 🚀

<br/>
<p align="center">
<img src="https://github.com/Ayush-Kanduri/GitHub-Tutorial/assets/76626529/e58f6873-1194-49d8-a841-950c3e905a82">
</p>

## ⭐ Introduction

This application comprises of a Timer, Stop Watch, Clicks Counter & Counter Animation. It is built using React.
<br/>
<br/>

## 🔥 Getting Started With The Project

-   Fork the Project.

Click the gray `Fork` button in the top right of this page. This creates _your_ copy of the project and saves it as a new repository in your github account.
<br/>
<br/>

-   Clone the Forked Repository in your Local System.

Click on the green `Code` button, then either the HTTPS or SSH option and, click the icon to copy the URL.
<br/>
<br/>

-   Run the following commands in your code editor's terminal:
    <br/>

```bash
  git clone <Paste the copied link>
```

<br/>
Switch to the cloned folder.
<br/>
<br/>

```bash
  cd <Repository Name>
```

<br/>
Make a new branch.
<br/>
<br/>

```bash
  git checkout -b <your-username>
```

<br/>

-   Download, Install & Configure `NodeJS` in your system.

Make sure that `NPM` is also installed.<br/>
See the section about [NodeJS](https://nodejs.org/en/#download) for more information.
<br/>
<br/>

-   Install Dependencies

```bash
npm install
```

<br/>

-   Check for the project `Configurations`.

Run this command to install _node_ devDependency.

```bash
npm install @types/node
```

If _jsconfig.js_ doesn't exist, then create it at the root with the following configuration.

```js
{
"compilerOptions": {
    "baseUrl": ".",
    "paths": {
        "@/*": ["src/*"]
        }
    }
}
```

If _vite.config.js_ doesn't exist, then create it at the root with the configuration given below. If it exists, then replace it with the same given below.

```js
import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		open: true,
		port: 8000,
	},
	build: {
		outDir: "build",
	},
	base: "/",
});
```

<br/>
<br/>

-   To run the project in Development mode, run this command in your code editor's terminal to Fire Up the Local Server:

```bash
npm run dev
```

This runs the app in the development mode locally.
Now open http://localhost:8000 in your browser to view the Live Website.
<br/>
<br/>

-   To run the project in Production mode, first build the project to make it production ready:

```bash
npm run build
```

Now, run this command in your code editor's terminal to Fire Up the Local Server:

```bash
npm run preview
```

This runs the app in the production mode locally.
Now open http://localhost:4173 in your browser to view the Live Website.
<br/>
<br/>

## 🔨 Tools Used

<br/>

<p align="center">
  <a href="https://skillicons.dev">
    <img width="2000" src="https://skillicons.dev/icons?i=vite,react,materialui,css,styledcomponents,js,nodejs,vscode,github,emotion,babel&theme=dark&perline=10" />
  </a>
</p>

<br/>

-   Library:
    -   react-toastify
    -   styled-components
    -   react
    -   react-dom
    -   gh-pages
    -   framer-motion
    -   @emotion/react
    -   @emotion/styled
    -   @mui/icons-material
    -   @mui/material
    -   @mui/styled-engine-sc
    -   canvas-confetti
    -   @types/node
-   Version Control System: Git
-   Version Control System Hosting: GitHub
-   Programming / Scripting: JavaScript
-   Front-End: ReactJS
-   Styling: CSS, Styled Components, Material UI, Framer Motion, Emotion
-   Runtime Environment: NodeJS
-   Integrated Development Environment: VSCode
-   Hosting: GitHub Pages
-   Tech Stack: React, Styled Components, Material UI, Framer Motion, React Toastify
    <br/>
    <br/>

## 🔗 Links

### **_Checkout the Live Website:_** [Stopwatch, Timers & Counters](https://ayush-kanduri.github.io/Stopwatch-Timers-Counters-ReactApp/)

<br />

### **_Checkout the Demo Video:_** [Video](https://youtu.be/RfRVNT5jMho)

<br />

## 💻 Screens

<p align="justify">
<img src="https://github.com/Ayush-Kanduri/GitHub-Tutorial/assets/76626529/e4f8de68-e6e4-49c3-9038-d354a1c43176">
<img src="https://github.com/Ayush-Kanduri/GitHub-Tutorial/assets/76626529/ca34670e-3af6-4c54-9fff-4b1cb35c10b4">
<img src="https://github.com/Ayush-Kanduri/GitHub-Tutorial/assets/76626529/aa26e0d6-9d64-4532-a52f-b3c474222fb9">
<img src="https://github.com/Ayush-Kanduri/GitHub-Tutorial/assets/76626529/24be71e0-70a5-4490-aaa5-be4d8626a05a">
</p>
<br/>

## :heart: Follow Me:

> [Twitter](https://twitter.com/ayush_codes)

> [LinkedIn](https://www.linkedin.com/in/ayushkanduri)

> [YouTube](https://www.youtube.com/@AyushKanduri)

#### I hope you like the project. Thanks for reading! 😀
