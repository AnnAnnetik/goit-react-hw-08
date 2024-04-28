import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import css from './ContactsPage.module.css';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
import fetchContacts from '../../redux/contacts/operations';
import ContactList from '../../components/ContactList/ContactList';
import { useEffect } from 'react';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.pageContainer}>
      <h1 className={css.title}>Contacts</h1>
      <div className={css.contentContainer}>
        <div className={css.formContainer}>
          <ContactForm />
        </div>
        <div className={css.searchContainer}>
          <SearchBox />
        </div>
        {isLoading && !error && <b>Loading...</b>}
        {error && <b>Something went wrong.</b>}

        <ContactList />
      </div>
    </div>
  );
};

export default ContactsPage;
