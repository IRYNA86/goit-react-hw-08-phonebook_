import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import s from '../components/app.module.css';

function Contacts() {
  return (
    <>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h3 className={s.title}>Contacts</h3>
      <p>Find contacts by name</p>
      <Filter />
      <ul>
        <ContactList />
      </ul>
    </>
  );
}

export default Contacts;
