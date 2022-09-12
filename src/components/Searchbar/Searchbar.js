import { useState } from "react";


export const Searchbar = ({onSubmit}) => {

const [searchName, setSearchName] = useState('');


 
  const handleChange = e => {
    setSearchName(e.target.value)
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(searchName);
    setSearchName('');
    

  };



    return (
      <form onSubmit={handleSubmit}>
        <label>
            <button type="submit">Search</button>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          name="name"
          value={searchName}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
</label>
      </form>
    );
  }
