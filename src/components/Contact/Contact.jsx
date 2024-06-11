import { HiUserMinus } from 'react-icons/hi2';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <span className={css.name}>{name}</span>
      <span className={css.number}>{number}</span>
      <button className={css.btnDelete} type="button" onClick={handleDelete}>
        <HiUserMinus />
      </button>
    </>
  );
}
