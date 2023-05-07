import PropTypes from 'prop-types';
import {Table, TableHead, DelBtn, TableD, TableRow} from './ContatcList.styled'
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
      <TableRow key={id}>
        <TableD>{name}</TableD>
        <TableD>{number}</TableD>
        <TableD><DelBtn type="button" onClick={()=>onDeleteContact(id)}><Logo/></DelBtn></TableD>
      </TableRow>
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


