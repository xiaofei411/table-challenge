import React from 'react';
import './style.css';
import Users from '../../constants/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortNumericDown, faSortNumericUpAlt, faSortAlphaDown, faSortAlphaUpAlt } from '@fortawesome/free-solid-svg-icons'

class Table extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          users: [],
          directions: {
            "firstname" : true,
            "lastname" : true,
            "age" : true
          }, // sort directions
          selected: '' // selected column
        };
      this.compareBy.bind(this);
      this.sortBy.bind(this);
    }
    
    componentDidMount() {
        console.log(Users);
        this.setState({
            users: Users,
        });
        
    }

    compareBy(key) {

        const {directions} = this.state;

        if(directions[key] === true) {
            return function (a, b) {
                if (a[key] < b[key]) return -1;
                if (a[key] > b[key]) return 1;
                return 0;
            };
        }
        else {
            return function (a, b) {
                if (a[key] > b[key]) return -1;
                if (a[key] < b[key]) return 1;
                return 0;
            };
        }

    }
   
    sortBy(key) {
        const {directions} = this.state;

        directions[key] = !directions[key];

        this.setState({
          directions : directions
        });

        let arrayCopy = [...this.state.users];
        arrayCopy.sort(this.compareBy(key));
        this.setState({
            users: arrayCopy,
            selected: key
        });
    }
      
    render() {

        const {directions, selected, users} = this.state;

        let firstname_sortIcon, lastname_sortIcon, age_sortIcon;

        firstname_sortIcon = '';
        lastname_sortIcon = '';
        age_sortIcon = '';

        if(selected === "firstname") {
            if (directions["firstname"] === true) {
                firstname_sortIcon = <span><FontAwesomeIcon icon={faSortAlphaDown} /></span>
            } else {
                firstname_sortIcon = <span><FontAwesomeIcon icon={faSortAlphaUpAlt} /></span>
            }
        }

        if(selected === "lastname") {
            if (directions["lastname"] === true) {
                lastname_sortIcon = <span><FontAwesomeIcon icon={faSortAlphaDown} /></span>
            } else {
                lastname_sortIcon = <span><FontAwesomeIcon icon={faSortAlphaUpAlt} /></span>
            }
        }

        if(selected === "age") {
            if (directions["age"] === true) {
                age_sortIcon = <span><FontAwesomeIcon icon={faSortNumericDown} /></span>
            } else {
                age_sortIcon = <span><FontAwesomeIcon icon={faSortNumericUpAlt} /></span>
            }
        }
        
        
        return (
            <table>
            <thead>
                <tr>
                    <th onClick={() => this.sortBy('firstname')} className={selected === "firstname" ? 'active' : '' }>Firstname{firstname_sortIcon}</th>
                    <th onClick={() => this.sortBy('lastname')}  className={selected === "lastname" ? 'active' : '' }>Lastname{lastname_sortIcon}</th>
                    <th onClick={() => this.sortBy('age')}  className={selected === "age" ? 'active' : '' } >Age{age_sortIcon}</th>
                </tr>
            </thead>
            <tbody>
                {users.map(function(user) {
                    return (
                        <tr key={user.id}>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.age}</td>      
                        </tr>
                    );
                })}
            </tbody>
            </table>
        );
      
    }
  }
  
  export default Table;