import { useState } from 'react';
import { useAddContactMutation, useGetContactsQuery } from 'components/store/slices/contactsApi';
import shortid from 'shortid';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import s from '../ContactForm/ContactForm.module.css';

function ContactForm() {
  const inputNameId = shortid.generate();
  const inputNumberId = shortid.generate();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [addContact] = useAddContactMutation();
  const { data } = useGetContactsQuery();

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (data.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    )) {
return toast.error(`${name} is already in contacts`);
}
    addContact({
      id: shortid(),
      name,
      number,
    });
    toast.success('Contact added!');
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor={inputNameId}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          id={inputNameId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.label} htmlFor={inputNumberId}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          id={inputNumberId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
