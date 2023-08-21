
/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>Hello h1 </h1>
 *      </div>
 * </div>
 */


//Simple/Single element creation in react
const headerText = React.createElement('h1', {id : 'abcd'}, "Hello and Namaste from React");
const root = ReactDOM.createRoot(document.getElementById('root2'));
//root.render(headerText);


//Nested element creation in react using react to create element
const parentDiv = React.createElement('div', 
{id : 'parent'}, 
[React.createElement('div', {id : 'child'}, 
[React.createElement('h1', {id : 'header'}, "Hello H1"), React.createElement('h2', {id : 'header2'}, "Hello h2")]),
React.createElement('div', {id : 'child2'}, 
[React.createElement('h3', {id : 'header3'}, "Hello H3"), React.createElement('h4', {id : 'header4'}, "Hello h4")])
]);
root.render(parentDiv);

