import React from 'react';
import { Form } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import '../Styles/dashboard.css';

function SearchInputField() {
  return (
    <div>

      <Form.Group className="mb-3 GeneralSearch" controlId="exampleForm.ControlInput1">
        <Form.Control size="sm" type="email" placeholder="Search" />
      </Form.Group>

      <div className="SearchIcon">
        <Search size={20} />
      </div>
    </div>
  );
}


export default SearchInputField;