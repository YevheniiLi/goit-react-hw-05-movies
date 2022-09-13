import { Formik } from 'formik';
import {
  SearchForm,
  SearchFormInput,
  SearchFormBtn,
  SearchFormBtnIcon,
} from './SearchBar.styled';

export const SearchBar = ({ onSubmit, value }) => {
  return (
    <Formik
      initialValues={{ query: value ?? '' }}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      <SearchForm>
        <SearchFormInput
          type="text"
          name="query"
          placeholder="Enter movie name"
        />
        <SearchFormBtn type="submit">
          <SearchFormBtnIcon />
        </SearchFormBtn>
      </SearchForm>
    </Formik>
  );
};
