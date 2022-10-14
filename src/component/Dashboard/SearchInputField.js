import React from 'react';
import { Input } from 'semantic-ui-react';
import { Search } from 'react-bootstrap-icons';
import '../Styles/dashboard.css';

function SearchInputField() {
  return (
    <div>
      <Input
        className="GeneralSearch"
        icon={{ name: 'search', circular: false, link: true }}
        iconPosition='left' placeholder='Search users...' />

      <div className="SearchIcon">
        <Search size={26} />
      </div>
    </div>
  );
}


export default SearchInputField;