Namaste React : 

Episode 1 : Inception

1. CDN - CDN is Content Delivery Network, which is a group of distributed servers which allows the transfers of the assets, images, Javascript files, stylesheets etc.
   Thing which I noticed on react cdn website is : there are 2 CDNs, one is for development purpose which we used in our app in ep 1, and there is another CDN as well which is for production. So for production release React recommends to use that CDN as it have more minified react code.
2. crossorigin - Basically, when our application is making a request to a server which is hosted in different domain, it returns us the CORS (Cross Origin Resource Sharing) error. (Many frontend devs have experienced it). So for that reason we need cross origin to get rid of that error.
3. When react is injected via CDN links, on developer console when you type - "React" - you will see that React is available to use now. Also I have noticed that it returns the version of react you have injected.
4. There are 2 files : React and React DOM.
   React - It is the core React.
   ReactDOM - This is used for the DOM (Document Object Model) operations.
5. Below Code to Write our fancy and first code "Hello World in React". I am not writing the whole HTML but the necessary code.

    <script>
    const heading = React.createElement("h1", {}, "Hello World from React !");
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(heading)
	</script>
	
	Here - I have taken a variable named "heading" - In this I am creating an element using React.createElement(). It will create an Object for you.
	In the "root" variable - I am telling React to create a root for me using the ReactDOM.createRoot(). Here see the difference that when I was creating the element I used React.createElement but when I need to create the root I am using ReactDOM.createRoot().
	Then I am rendering my created element in the browser using render method. Render method is taking that Object and creating the element for us.
	
	Just do console.log(heading) and console.log(root) - and check the browser console. You will be amazed how React is working. How it is creating element for you behind the scenes.

6. ReactElement is nothing but an Object.
7. To create sibling in the DOM - We can use the third parameter of React.createElement as an array.




Episode 2 - Igniting the App

1. What is NPM - Ofcourse, it is (!Node Package Manager) - It is a repository for all the packages. There are tons of packages available on NPM.
2. npm init - It will ask you some basic questions like package name, version, description etc. If you want to ignore these questions you can fire the command like : npm init -y
3. What is package.json - It is a configuration of our application which also keep tracks which packages are available in our application.
4. What is bundler. - Bundler is useful for bundle our application and it makes our app to production ready. Basically it takes all our code and dependencies and put it at one place.
	There are multiple bundlers available - browserify, webpack, vite, parcel etc
5. There are 2 types of dependencies : 
	1. Dev dependencies - It is only require for development purpose.
	2. Normal dependencies - It is used in production as well.
6. There are three signs before packages name : "^" and "~".
   "^" - It means that it will do the minor version upgrade automatically.
   "~" - It means that it will do the major minor upgrade automatically.
7. What is package-lock.json - It takes cares of the exact version of the packages which are installed.
8. Transitive dependencies - When we use a package in our application - it is highly possible that those packages are also using some other packages too. Those are known as transitive dependencies.
9. What is npx - For executing any package we use npx.
10. What is HMR - Stands for Hot Module Reloading. The use is when I modify anything in my application, it automatically reloads those changes in browser for us.
11. Very Good Article about the features of Parcel : Give it your few minutes.
    https://medium.com/@nikhildhariwal2004/parcel-is-a-beast-an-all-in-one-bundle-for-powerful-web-development-e79f8a70cbd6
12. How to make our app configurable for older browsers using browserslist in the package.json



Episode 3 : Laying the Foundation

1. I have learned how to write scripts in the package.json to make our life easy as a developer. I created scripts to run my application with shorthand commands.
2. JSX - JSX is basically here to make developer life easy. It is use to make the elements easily. JSX is different than HTML. It is not HTML inside JS. JSX is HTML like syntax.
3. Babel - It is respoonsible to transpile the JSX. So that React can understand those code. It is also useful to convery our code for older browsers who does not understand ES6.
4. JSX at the end of the day is nothing but React.createElement()
5. When giving attributes to JSX we should write camelCase.
6. React Components : 
   1. Class Components - Class components are now outdated and it is not getting used now a days in industry.
   2. Functional Components - It is nothing but a normal JS function. In simple terms, a function which returns some piece of JSX. Make sure to start the function name with Capital letters.
7. Difference between React Element vs React Component - 
8. To render a component inside render method we need to render it like 
   root.render(<HeadingComponent />
9. What is React Component Composition :  When we load a component inside another component, it is called as component composition
10. We can inject any Javascript expression inside JSX using {} braces.
11. Cross Site Scripting (XSS) attacks- JSX is so powerful that it automatically takes care of XSS attacks in your application. Everything converted to String before rendering.


Episode 4 : Talk is Cheap, Show me the Code:

1. Props : Props is a short form of properties. If we need to pass data between components, we use props. Props are normal arguments to the functions
2. Config driven UI : Controlling the UI based on the data coming from the backend.
3. Why do we need to give the key  - If we give the unique key react will only render the new item which is coming in DOM.
4. Never use index as keys in React.



Episode 5 : Let's get hooked
1. Module cannot have multiple default exports.
2. If we need to do multiple export from same file, then we need to use named export.
3. State Variable
4. React hooks is a normal JS utility function.
5. State variables 
6. Whenever a state variable updates, react rerender() the component.
7. Reconsiliation Algorithm, React Fiber - 
8. Virtual DOM is a representation of the actual DOM.