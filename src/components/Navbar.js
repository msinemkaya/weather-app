import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Navbar({setSearch, value}) {

  // const [value, setValue] = useState('')
  //
  // const handleSubmit = () => {
  //
  // }

  const handleChange = ({target}) => {
    setSearch(target.value)
    // console.log(value)
  }

  return (
    <>
      <nav className='navbar'>
        <h1 className='logo'>Weather.</h1>
        <form action='' className='search'>
          <input type='text' className='search-input' value={value} onChange={handleChange}/>
          <button className=''>
            <FontAwesomeIcon
              icon={faMagnifyingGlassLocation}
              size='lg'
              className='search-icon'
            />
          </button>
        </form>
      </nav>
    </>
  );
}
