# swiggy-mart
React Eats 🍔🥡 is a practice e-commerce web app built with React using Swiggy’s public APIs. It features restaurant listing, filtering by rating/cuisine, cart functionality, and a top-rated section. Built with useState, useEffect, and optional chaining, it offers a responsive UI for learning React + API integration.


# 2types of Routing in web apps
-Client Side Routing
-Server Side Routing 


//whenever the state variable updates react triggers a reconcilliation cycle(re-renders the component )

//fetch method will return a promise , here aync and await will resolve the promise , and once data is there then we have to convert the data to json.

//fetch method is given to us by browsers

//useState() is used to create the local state variables inside the functional components , 


# Creating accordians , promoted , and some other features. 
like recomended sections and some other sections.



# learning 
how to keep the debugger in elements or debugger in the code  ,

after fixing the width only, we have to give the margin 0 auto , to center the content. 

# Reading
position absolute , relative
# creating service and jobs 


# Creating acordians 
1. controlled and uncontrolled inputs
2. lifting the state up 


# onMouseEnter , onMouseLeave are the event handlers in js (know about the event handlers in js )


tooltip question practice , 

"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"


But in JavaScript, when you use curly braces {}, the function body requires an explicit return statement. Without it, nothing is returned — and therefore, every iteration is returning undefined, which is falsy, resulting in an empty array [].

# know more about the components and profiler in the react dev tools. 

# aggregation means in mongo 

# props drilling(passing the data to its childs even though the data is not needed for the intermediate children) and lifting the state up (means to pass the state from its parent)
//for the problem of prop drilling , solution is lifting the state up and using useContextApi and Redux store. 

//by fixing the width , we have to give the margin: 0 auto, and some times we have to give the justify-content:space between *** 


# usecontext 
we can pass the function also in the useContext so that we can modify the state variable name to that value. 
the context value will be there for the lazy loading components also . 
--> UseContext.consumer will take the callback function. 
by using .provider , we can override the value for the useContext values. 


Data Management Libraries and state mngmt Libraries : 
Redux is not from react , 
Redux thunks , middlewares 

# Redux is not from redux and , Zustand is also another state management library 
--> easy to debug , (as redux has chrome extension ) (redux and redux toolkit(updates version, old version is vanilla redux))


# Redux Toolkit : 
-Install @reduxjs/toolkit and react redux 
-Build our store 
-Connect our store to our app
-slice(cart Slice)
-dispatch Action
-Selector (selector is a hook inside React)


Interview Questions: 
--> while subscribing to the store make sure to subscribe to the right portion of the store (if not big performance loss, when we get access to whole store when we dont need the other items ,when other items change then whole store will be updated and leads to performance loss.)
--> for the main app store , we use reducer ,but while creating slice , we use reducers (as we create so many actions in the slices) , app reducer can have multiple small reducers.
--> when we mutate the state in slices , redux is doing the immutable thing in background(which vanilla redux does) redux uses immer to do this ,
Immer -- immer is a tiny package that allows you to work with immutable state in a more convenient way. (Redux tool kit uses the Immer Behind the scenes) 

# know about RTK Query (middleware , and thunks now rtk Query )