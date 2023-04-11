import React from 'react';

const Statistics = () => {
    return (
        <div className="py-4 px-4 lg:px-8 xl:px-16">
            <div className="container mx-auto py-10 bg-gray-100">
      <h1 className="text-3xl font-bold mb-7 text-center">Welcome to Blog Page</h1>
      <div className="flex flex-wrap mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">When to use Context API?</h2>
          <p className="text-gray-700 leading-loose">
            Context API is useful when we need to share data between
            components that are not directly connected by parent-child
            relationships. It eliminates the need to pass props through
            intermediate components. It's also useful when you need to share
            state between components that are deeply nested in the component
            tree.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">What is a custom hook?</h2>
          <p className="text-gray-700 leading-loose">
            A custom hook is a function that allows us to reuse stateful logic
            across multiple components. It's a way to extract and share
            functionality that is not related to rendering, such as fetching
            data, handling form input, or managing timers. Custom hooks are
            created using the "use" prefix, such as "useFetch" or "useForm".
          </p>
        </div>
        <div className="w-full md:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">What is useRef?</h2>
          <p className="text-gray-700 leading-loose">
            useRef is a hook that allows us to create a mutable reference to a
            DOM node or a value that persists across renders. It's useful for
            accessing DOM nodes, managing focus, or preserving a value between
            renders without triggering a re-render. To create a ref, we call
            the useRef hook and pass an initial value. The returned object has
            a "current" property that can be assigned to a DOM node or a value.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">What is useMemo?</h2>
          <p className="text-gray-700 leading-loose">
          useMemo is a hook in React that allows us to memoize the result of a function call and avoid unnecessary recalculations. We can use useMemo to improve the performance of our application by preventing expensive calculations from being repeated unnecessarily.
          When we use useMemo, the function that we pass as the first argument is only executed when one or more of the dependencies in the second argument change. If none of the dependencies change, then the cached result of the previous call to useMemo is returned.</p>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Statistics;