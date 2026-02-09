let questions = [
    {
      numb: 1,
      question: "What is React?",
      answer: "A JavaScript library for building web app interfaces using components",
      options: [
        "A programming language",
        "A JavaScript library for building web app interfaces using components",
        "A database management system",
        "An operating system"
      ]
    },
    {
      numb: 2,
      question: "What is the main function of the app component in React?",
      answer: "Defining the root of the application",
      options: [
        "Styling the entire application",
        "Defining the root of the application",
        "Managing state changes",
        "Handling user authentication"
      ]
    },
    {
      numb: 3,
      question: "Which method is used to create a header component in React?",
      answer: "Creating a new file with .js extension",
      options: [
        "createComponent()",
        "setComponent()",
        "renderComponent()",
        "Creating a new file with .js extension"
      ]
    },
    {
      numb: 4,
      question: "How can you access and display data using the props object in React?",
      answer: "Access data via the props object",
      options: [
        "Use the getData() method",
        "Access data directly from the parent component",
        "Access data via the props object",
        "Use the useState hook"
      ]
    },
    {
      numb: 5,
      question: "What is the purpose of using the useState hook in React?",
      answer: "To create stateful variables",
      options: [
        "For creating reusable components",
        "To access external APIs",
        "For handling user inputs",
        "To create stateful variables"
      ]
    },
    {
      numb: 6,
      question: "What is the main benefit of using the useContext hook in React?",
      answer: "Reducing the complexity of state management",
      options: [
        "Reducing the complexity of state management",
        "Accessing external data sources",
        "Creating new components",
        "Styling the components"
      ]
    },
    {
      numb: 7,
      question: "How can you reference and manipulate HTML elements in React without causing re-renders?",
      answer: "Using the useRef hook",
      options: [
        "Using the useRef hook",
        "Utilizing the useState hook",
        "Direct DOM manipulation",
        "Creating new components"
      ]
    },
    {
      numb: 8,
      question: "What is the purpose of the useEffect hook in React?",
      answer: "Performing side effects and cleanup operations",
      options: [
        "To handle form submissions",
        "Managing context API",
        "Fetching data from an API",
        "Performing side effects and cleanup operations"
      ]
    },
    {
      numb: 9,
      question: "Which method is used for deleting items from an array in React?",
      answer: "filter()",
      options: [
        "removeItem()",
        "deleteItem()",
        "splice()",
        "filter()"
      ]
    },
    {
      numb: 10,
      question: "What is the correct syntax for conditional rendering in React using the ternary operator?",
      answer: "{condition ? <ComponentA /> : <ComponentB />}",
      options: [
        "{condition ? <ComponentA /> : <ComponentB />}",
        "(condition ? <ComponentA /> : <ComponentB />)",
        "{condition ? <ComponentA /> && <ComponentB />}",
        "(condition ? <ComponentA /> && <ComponentB />)"
      ]
    },
    {
      numb: 11,
      question: "How do you set alternative text for images in React?",
      answer: "Using the alt attribute in the image tag",
      options: [
        "Using the alt attribute in the image tag",
        "Using the title attribute in the image tag",
        "Defining it in a separate JSON file",
        "Adding it as a props in the image component"
      ]
    },
    {
      numb: 12,
      question: "What hook is used to create stateful variables that update in real-time in React?",
      answer: "useState",
      options: [
        "useEffect",
        "useReducer",
        "useState",
        "useContext"
      ]
    },
    {
      numb: 13,
      question: "Which method is used to handle adding and removing elements to an array in React?",
      answer: "splice()",
      options: [
        "push()",
        "remove()",
        "splice()",
        "concat()"
      ]
    },
    {
      numb: 14,
      question: "How can you handle click events with event object in React?",
      answer: "Accessing the event object directly in the component",
      options: [
        "Using the onClick property",
        "Via the mouseClick event",
        "Defining a separate clickHandler() function",
        "Accessing the event object directly in the component"
      ]
    },
    {
      numb: 15,
      question: "What is the main benefit of using CSS modules for styling in React?",
      answer: "Improved encapsulation for component-specific styles",
      options: [
        "Easier integration with external style libraries",
        "Improved encapsulation for component-specific styles",
        "Better performance for large-scale applications",
        "Enhanced support for media queries"
      ]
    },
    {
      numb: 16,
      question: "In React, how can you add a unique key for each item when rendering a list?",
      answer: "Defining a key prop for each list item",
      options: [
        "Using the id attribute of the list items",
        "Defining a key prop for each list item",
        "Automatically generated by React",
        "No need for a unique key in React"
      ]
    },
    {
      numb: 17,
      question: "What is the purpose of using the setCard() function in React?",
      answer: "For updating the state of the card object",
      options: [
        "To create a new card component",
        "For updating the state of the card object",
        "For accessing card-related data",
        "To remove the card component from the DOM"
      ]
    },
    {
      numb: 18,
      question: "How can you handle payment and delivery options in forms in React?",
      answer: "Implementing controlled components and updating state on change events",
      options: [
        "Utilizing the useState hook",
        "Defining a separate paymentHandler() function",
        "Managing it through useContext",
        "Implementing controlled components and updating state on change events"
      ]
    },
    {
      numb: 19,
      question: "What is the role of the useEffect hook in React?",
      answer: "Performing side effects and cleanup operations",
      options: [
        "Managing layout and style updates",
        "Performing asynchronous data fetching",
        "Handling form submissions",
        "Performing side effects and cleanup operations"
      ]
    },
    {
      numb: 20,
      question: "When using JavaScript to set the initial state for car year, make, and model in React, which method is commonly used?",
      answer: "Initializing the state in the constructor method",
      options: [
        "Initializing the state in the constructor method",
        "Defining a separate setState() function",
        "Utilizing the useEffect hook",
        "Directly modifying the state object within the render method"
      ]
    }
  ];
  