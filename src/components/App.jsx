import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchContacts from '../redux/contactsOps';
import { selectError, selectIsLoading } from '../redux/contactsSlice';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import Loader from './Loader/Loader';
import ErrorMessage from './Error/Error';
import ContactList from './ContactList/ContactList';

const App = () => {
  const dispatch = useDispatch();
  const isloading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {isloading && <Loader />}
        {isError && <ErrorMessage />}
        <ContactList />
      </div>
    </>
  );
};
export default App;
