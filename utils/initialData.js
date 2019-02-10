export const initialCards = [{
    deck_name: 'redux',
    cards: [{
        id: '1',
        question: 'What is the concept of “single source of truth” in Redux?',
        answer: 'The state of your whole application is stored in an object tree within a single store. This makes it easy to create universal apps, as the state from the server can be serialized and hybridized into the client with no extra coding effort.',
        category: 'redux'
    },
    {
        id: '2',
        question: 'What is the role of reducers in Redux?',
        answer: 'In Redux, reducers are functions (pure) that take the current state of the application and an action and then return a new state.',
        category: 'redux'
    },
    {
        id: '3',
        question: 'What are “actions” in Redux?',
        answer: 'In a nutshell, actions are events. Actions send data from the application (user interactions, internal events such as API calls, and form submissions) to the store.',
        category: 'redux'
    },
    {
        id: '4',
        question: 'How is state changed in Redux?',
        answer: 'The only way to change the state is to emit an action, an object describing what happened.',
        category: 'redux'
    },
    {
        id: '5',
        question: 'What is ‘Store’ in Redux?',
        answer: 'Store is the object that holds the application state and provides a few helper methods to access the state, dispatch actions and register listeners.',
        category: 'redux'
    },
    {
        id: '6',
        question: 'What is Redux?',
        answer: 'Redux is a predictable state container for JavaScript apps based on the Flux design pattern. Redux can be used together with ReactJS, or with any other view library.',
        category: 'redux'
    },
    {
        id: '7',
        question: 'What is a pure function?',
        answer: 'In computer programming, a pure function is a function that has the following properties: Its return value is the same for the same arguments. Its evaluation has no side effects.',
        category: 'redux'
    },
    {
        id: '8',
        question: 'How would you disable the store redux, so it does not accept any changes to state?',
        answer: 'One way to do it is by setting an exit flag in the root state reducer, so it is set to true it just let the state pass unmodified.',
        category: 'redux'
    },
    {
        id: '9',
        question: 'What is the method dispatch?',
        answer: 'Is the method used to dispatch actions and trigger state changes to the store.',
        category: 'redux'
    },
    {
        id: '10',
        question: 'How can I use Redux in my React app?',
        answer: 'Just install the following packages: redux and react-redux',
        category: 'redux'
    }]
}]