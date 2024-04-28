import style from './ContactList.module.css';
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import {
  selectContacts,
  selectFilteredContacts,
} from '../../redux/contacts/selectors';

const ContactList = () => {
  const contactsFiltered = useSelector(selectFilteredContacts);
  const allContacts = useSelector(selectContacts);
  return (
    <ul>
      {Array.isArray(allContacts) && allContacts.length === 0 && (
        <li>You don&apos;t have any added contacts yet!</li>
      )}
      {Array.isArray(allContacts) &&
        contactsFiltered.map(contact => (
          <li key={contact.id} className={style.contactItem}>
            <Contact contact={contact} />
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
