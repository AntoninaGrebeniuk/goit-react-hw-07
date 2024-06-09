import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

export default function ContactList() {
  const items = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const visibleContacts = () =>
    items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );

  return (
    <ul>
      {visibleContacts().map(contact => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}
