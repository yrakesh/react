import React, { Component } from 'react';
import AddPerson from '../../components/AddPerson/AddPerson';
import Person from '../../components/Person/Person';
import  { connect } from 'react-redux';

class Persons extends Component {
    render() {
        return (
            <div>
                <AddPerson clicked={() => this.props.onAddingPerson(this.props.persons.length)}/>
                <hr/>
                {
                    this.props.persons.map((person, i) => {
                        return <Person key={person.id} name={person.name} age={person.age} clicked={() => this.props.onRemovingPerson(person.id)}/>
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddingPerson  : (id) => dispatch({type: 'ADD', id:id}),
        onRemovingPerson: (id) => dispatch({type: 'DEL', id: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);