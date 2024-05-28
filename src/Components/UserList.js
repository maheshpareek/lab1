import React, { Component } from "react";

export default class UserList extends Component {
    state = {
        users: [] 
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(data =>
                this.setState({
                    users: data  
                })
            )
            .catch(error => console.log(error));
    }

    render() {
        const { users } = this.state;

        return (
            <>
                <div>
                    {users.length > 0 ? (
                        users.slice(0, 3).map(user => (  
                            <div key={user.id}>
                                Hello, {user.name}
                            </div>
                        ))
                    ) : (
                        <p>Loading.....</p>
                    )}
                </div>
            </>
        )
    }
}
