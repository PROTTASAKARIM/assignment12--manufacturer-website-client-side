import React from 'react';
import prototypePic from '../../images/prototype.png';

const Blogs = () => {
    const improveReact = `function App() {
        return (
          <h1>Hello React!</h1>
          <h1>Hello React Again!</h1>
        );
      }`
    const callBack = `const incrementCount = React.useCallback(() => setCount(count + 1), [count]);`

    const protoExample = `let animal = {
        eats: true
      };
      let rabbit = {
        jumps: true
      };
      
      rabbit.__proto__ = animal; // 
      
      // we can find both properties in rabbit now:
      alert( rabbit.eats ); // true 
      alert( rabbit.jumps ); // true`

    const stateExample = `import { useState } from "react";

      function FavoriteColor() {
        const [color, setColor] = useState("");
      }`

    const stateEx = `const {id} = data`

    return (
        <div className='mx-5 mt-5'>
            <div class="card w-full bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">How will you improve the performance of a React Application?</h2>
                    <p className='text-justify'>This are some useful techniques we can use to improve our React code :</p>
                    <p className='text-justify'><strong>Data immutability:</strong> Data immutability is not an architecture or design pattern, it's an opinionated way of writing code. Data immutability  have many benefits, such as:</p>
                    <p className='text-justify'>
                        <ul>
                            <li>1. Zero side-effects</li>
                            <li>2. Immutable data objects are simpler to create, test, and use</li>
                            <li>3. Helps prevent temporal coupling</li>
                            <li>4. Easier to track changes.</li>
                        </ul>
                    </p>
                    <p className='text-justify'> <strong>React.Fragment</strong></p>
                    <p className='text-justify'>Use React.Fragment to Avoid Adding Extra Nodes to the DOM</p>
                    <p className='text-justify'>{improveReact}</p>
                    <p className='text-justify'> <strong>Keeping component state local where necessary</strong></p>
                    <p className='text-justify'> <strong>Using the useCallback Hook</strong></p>
                    <p className='text-justify'> {callBack}</p>
                    <p className='text-justify'> <strong>Using the useMemo Hook</strong></p>
                    <p className='text-justify'> Similar to useCallback, the useMemo Hook also expects a function and an array of dependencies</p>
                </div>
            </div>

            <div class="card w-full bg-base-100 shadow-xl my-5">
                <div class="card-body">
                    <h2 class="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p className='text-justify'> There are four main types of state we need to properly manage in a React apps :</p>
                    <p className='text-justify'>
                        <ul>
                            <li><strong>1. Local state :</strong> Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook.</li>

                            <li><strong>2. Global state :</strong> Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. A common example of global state is authenticated user state.</li>

                            <li><strong>3. Server state :</strong> Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. There are several pieces of state that must be managed every time we fetch or update data from an external server, including loading and error state. Fortunately there are tools such as SWR and React Query that make managing server state much easier.</li>

                            <li><strong>4. URL state :</strong> Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state.</li>
                        </ul>
                    </p>
                </div>
            </div>

            <div class="card w-full bg-base-100 shadow-xl my-5">
                <div class="card-body">
                    <h2 class="card-title">How does prototypical inheritance work?</h2>
                    <img className='w-1/2' src={prototypePic} alt="" />
                    <p className='text-justify'>  prototypical inheritance refers to the ability to access object properties from another object.Date objects inherit from Date.prototype. Array objects inherit from Array.prototype. Player objects inherit from Player.prototype. The Object.prototype is on top of the prototype inheritance chain. Date objects, Array objects, and Player objects all inherit from Object.prototype. All tha data is inherited from object.prototype. </p>
                    <p className='text-justify'>Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
                    <p className='text-justify'><strong>Example :</strong></p>
                    <p className='text-justify'>{protoExample}</p>
                    <p className='text-justify'>Here the line 'rabbit.__proto__ = animal;' sets animal to be the prototype of rabbit. Then, when alert tries to read property rabbit.eats (alert( rabbit.eats )), it's not in rabbit, so JavaScript follows the [[Prototype]] reference and finds it in animal</p>
                    <p className='text-justify'>Here we can say that "animal is the prototype of rabbit" or "rabbit prototypically inherits from animal". So if animal has a lot of useful properties and methods, then they become automatically available in rabbit. Such properties are called “inherited”.</p>
                </div>
            </div>

            <div class="card w-full bg-base-100 shadow-xl my-5">
                <div class="card-body">
                    <h2 class="card-title text-left">Why you do not set the state directly in React? For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts.
                    </h2>
                    <p className='text-justify'> The React useState Hook allows us to track state in a function component.</p>
                    <p className='text-justify'><strong>Example: </strong></p>
                    <p className='text-justify'>{stateExample}</p>
                    <p className='text-justify'>The first value, color, is our current state. The second value, setColor, is the function that is used to update our state. Initially here the value of color is empty string. if we pass the value red in setColor function like setColor(red) we can access the value from color.</p>
                    <p className='text-justify'>If we use useState color will return an object. It is easier to access data from an object. Sush as , {stateEx} here if data has a value in id ,it does't matter where it is. A variable name id will have tha value of data.id  </p>
                    <p className='text-justify'> But if we set products = [...] then if want to access value of lets's say 10 no position we have to give variable name in 10 no position. </p>
                    <p className='text-justify'>So we can say that it is easier to access data from an object from then array.</p>
                </div>
            </div>

            <div class="card w-full bg-base-100 shadow-xl my-5">
                <div class="card-body">
                    <h2 class="card-title text-left"> What is a unit test? Why should write unit tests?
                    </h2>
                    <p className='text-justify'>Unit testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p>
                    <p className='text-justify'>Unit tests help to fix bugs early in the development cycle and save costs. It helps the developers to understand the testing code base and enables them to make changes quickly. Good unit tests serve as project documentation. Unit tests help with code re-use. </p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;