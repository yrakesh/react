const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    if (action.type === 'ADD') { 
        let newPerson = {
            name: 'Om',
            age: Math.floor(Math.random() * 40),
            id: new Date()
        };
        return { 
            persons: state.persons.concat(newPerson) 
        } 
    }
    if (action.type === 'DEL') { 
        console.log('DEL', action.id);
        return { 
            persons: state.persons.filter((person) => person.id !== action.id)
        } 
    }
    return state;
};

export default reducer;