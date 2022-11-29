import React from "react";

const Blogs = () => {
  return (
    <div className="w-11/12 mx-auto my-6">
      <div>
        <h2 className="text-3xl text-center font-bold">Blogs</h2>
      </div>
      <div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-10 ">
          <div className="border rounded-md p-3">
            <h3 className="font-bold text-lg">
              How does prototypical inheritance work?
            </h3>
            <p>
              Prototype inheritance in javascript is the linking of prototypes
              of a parent object to a child object to share and utilize the
              properties of a parent class using a child class. Prototypes are
              hidden objects that are used to share the properties and methods
              of a parent class to child classes.
            </p>
          </div>
          <div className="border rounded-md p-3">
            <h3 className="font-bold text-lg">
              What are the different ways to manage a state in a React
              application?
            </h3>
            <p>
              There are four main types of state you need to properly manage in
              your React apps: Local state, Global state, Server state, URL
              state,
            </p>
          </div>
          <div className="border rounded-md p-3">
            <h3 className="font-bold text-lg">React vs. Angular vs. Vue?</h3>
            <p>
              React is a UI library, Angular is a fully-fledged front-end
              framework, while Vue.js is a progressive framework. They can be
              used almost interchangeably to build front-end applications, but
              they’re not 100 percent the same
            </p>
          </div>
          <div className="border rounded-md p-3">
            <h3 className="font-bold text-lg">
              What is a unit test? Why should we write unit tests?
            </h3>
            <p>
              A unit test is a way of testing a unit - the smallest piece of
              code that can be logically isolated in a system.The main objective
              of unit testing is to isolate written code to test and determine
              if it works as intended
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
