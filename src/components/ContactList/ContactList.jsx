import PropTypes from 'prop-types';
import {Table, TableHead, DelBtn} from './ContatcList.styled'
import {ReactComponent as Logo} from './Delete-button.svg';
const ContactList = ({contacts, onDeleteContact}) => {
// return  (<ul>
//             {contacts.map(({id, name, number})=>(
//             <li key={id}>
//                 <p>{name}</p>
//                 <p>{number}</p>
//                 <button type="button" onClick={()=>onDeleteContact(id)}>Delete</button>
//             </li>)  
//             )} 
//         </ul>)

return (
  <div>
  <Table>
    <thead>
      <tr>
        <TableHead>Name</TableHead>
        <TableHead>Phone</TableHead>
        <TableHead>Actions</TableHead>
      </tr>
    </thead>
    <tbody>
    {contacts.map(({id, name, number})=>(
      <tr key={id}>
        <TableHead>{name}</TableHead>
        <TableHead>{number}</TableHead>
        <TableHead><DelBtn type="button" onClick={()=>onDeleteContact(id)}><Logo/></DelBtn></TableHead>
      </tr>
      ))}
    </tbody>
  </Table>
</div>

)
}
ContactList.propeTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func,
  };

export default ContactList;


