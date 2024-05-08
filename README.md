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

1. What is NPM - Ofcourse, it is !(Node Package Manager) - It is a repository for all the packages. There are tons of packages available on NPM.
2. npm init - It will ask you some basic questions like package name, version, description etc. If you want to ignore these questions you can fire the command like : npm init -you
3. What is package.json - It is a configuration of our application which also keep tracks which packages are available in our application.
4. What is bundler. - Bundler is useful for bundle our application and it makes our app to production ready. Basically it takes all our code and dependencies and put it at one place.
5. There are 2 types of dependencies : 
	1. Dev dependencies - It is only require for development purpose.
	2. Normal dependencies - It is used in production as well.
6. There are three signs before packages name : "^" and "~".
   "^" - It means that it will do the minor version upgrade automatically.
   "~" - It means that it will do the major minor upgrade automatically.
7. What is package-lock.json - It takes cares of the exact version of the packages which are installed.
8. Transitive dependencies - When we use a package in our application - it is highly possible that those packages are also using some other packages too. Those are known as transitive dependencies.
9. 