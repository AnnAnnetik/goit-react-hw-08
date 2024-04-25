import style from './ContactList.module.css';
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';

import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <ul>
      {Array.isArray(contacts) &&
        contacts.map(contact => (
          <li key={contact.id} className={style.contactItem}>
            <Contact contact={contact} />
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
