import React from 'react';
import ReactDom from 'react-dom';

/* Hands-On Project 1*/
class NameTable extends React.Component {
    render() {
        return (
            <table>
                <tbody>
                <tr>
                    <th>{this.props.FN}</th>
                    <th>{this.props.LN}</th>
                </tr>
                <tr>
                    <td>{this.props.FN2}</td>
                    <td>{this.props.LN2}</td>
                </tr>
                <tr>
                    <td>{this.props.FN3}</td>
                    <td>{this.props.LN3}</td>
                </tr>
                </tbody>
            </table>  
        )
    }
}

ReactDom.render (
    <NameTable FN="First Name" LN="Last Name" FN2="Janet" LN2="James" FN3="John" LN3="Jameson"  />,
        document.getElementById('root')
)


/* Hands-On Project 2*/
const hasUsernameAndPassword = (user) => {
    return user.name.length > 0 && user.password.length > 0;
}

const filterInvalidUsers = (users) => {
const validUsers = [];

    for (let user of users) {
        if (hasUsernameAndPassword(user)) {
            validUsers.push(user);
        }
    }
    return validUsers;
}

const userToFormattedString = (user) => {
    return `name: ${user.name} \nrole: ${user.role}`
}

let users = [
    {
        name: 'Kirk Douglass',
        password: 'iamspartacus',
        role: 'revolutionary'
    },
    {
        name: 'Charlie Chaplain',
        password: '',
        role: 'tramp'
    },
    {
        name: 'Harrison Ford',
        password: 'AnythingButSnakes',
        role: 'archaeologist'
    }
];

let validUsers = filterInvalidUsers(users);

for (let i in validUsers) {
    console.log(userToFormattedString(validUsers[i]));
}




