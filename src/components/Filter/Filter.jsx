import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';
import { Input } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <label className={css.filterLabel}>
        Find contacts by Name
        <Input
          variant="outline"
          focusBorderColor="teal.500"
          className={css.filterName}
          type="text"
          name="filter"
          placeholder="Enter filter"
          value={filter}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};
