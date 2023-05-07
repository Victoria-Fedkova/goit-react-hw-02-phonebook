import PropTypes from 'prop-types';

const ContactList = ({contacts, onDeleteContact}) => {
return  (<ul>
            {contacts.map(({id, name, number})=>(
            <li key={id}>
                <p>{name}</p>
                <p>{number}</p>
                <button type="button" onClick={()=>onDeleteContact(id)}>Delete</button>
            </li>)  
            )} 
        </ul>)
}
ContactList.propeTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    onDelete: PropTypes.func,
  };

export default ContactList;