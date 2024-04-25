import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import style from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <div className={style.contactInf}>
        <FaUser />
        <p>{contact.name}</p>
      </div>
      <div className={style.contactInf}>
        <FaPhone />
        <p>{contact.number}</p>
      </div>

      <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
    </div>
  );
};

export default Contact;
