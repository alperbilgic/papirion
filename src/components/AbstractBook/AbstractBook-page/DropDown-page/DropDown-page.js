import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import { Link } from 'react-router-dom';
import DropDownStyles from './DropDownStyles-page';

const DropDown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const browseByBook = () => {
      console.log("browseBy");
  }

  return (
      <React.Fragment>
        <DropDownStyles/>
        <Dropdown isOpen={dropdownOpen} toggle={toggle} className='w-dropdown-gozat'>
            <DropdownToggle tag='div' caret className='text-dark dropdown-toggle-ellipsis-gozat'>
                {props.name}
            </DropdownToggle>
            <DropdownMenu className='dropdown-list-gozat w-dropdown-list-gozat'>
                {props.items.map( item => <DropdownItem onClick={browseByBook(props.name)} className='navlink-gozat dropdown-link-gozat w-dropdown-link-gozat'>{item}</DropdownItem>)}
            </DropdownMenu>
        </Dropdown>
      </React.Fragment>
  );
}

export default DropDown;