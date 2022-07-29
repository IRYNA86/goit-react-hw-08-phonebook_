import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'components/store/contactsSlice';
import s from '../ContactList/ContactList.module.css';

function ContactList() {
  const filter = useSelector(state => state.contacts.filter);
  const { data } = useGetContactsQuery();

  const getFilterContact = () => {
    return (
      data &&
      data.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };
  const contacts = getFilterContact();

  const [deleteContact] = useDeleteContactMutation();

  const handleDeleteContact = async id => {
    await deleteContact(id);
  };

  return (
    <>
      {contacts && (
        <>
          {contacts.map(contact => (
            <li className={s.item} key={contact.id}>
              <span className={s.text}>{contact.name}:</span>
              <span> {contact.phone} </span>
              <button
                className={s.button}
                type="button"
                onClick={() => handleDeleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </>
      )}
    </>
  );
}

export default ContactList;
