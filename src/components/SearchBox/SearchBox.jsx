import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilter = evt => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <label className={css.label} htmlFor="">
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleFilter}
        placeholder="Name"
      />
    </label>
  );
}
