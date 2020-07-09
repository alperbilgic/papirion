import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import { Link } from 'react-router-dom';
import DropDownStyles from './DropDownStyles';

const DropDown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
      <React.Fragment>
        <DropDownStyles/>
        <Dropdown isOpen={dropdownOpen} toggle={toggle} className='w-dropdown-gozat'>
            <DropdownToggle tag='div' caret className='text-dark dropdown-toggle-ellipsis-gozat'>
                {props.text}
            </DropdownToggle>
            <DropdownMenu className='dropdown-list-gozat w-dropdown-list-gozat'>
                <DropdownItem href='/booklists/' className='navlink-gozat dropdown-link-gozat w-dropdown-link-gozat' style={{textDecoration: 'none'}}>Listeler</DropdownItem>
                <DropdownItem href='/users/' className='navlink-gozat dropdown-link-gozat w-dropdown-link-gozat' style={{textDecoration: 'none'}}>Kullanıcılar</DropdownItem>
                <DropdownItem href='/recommendedbooks/' className='navlink-gozat dropdown-link-gozat w-dropdown-link-gozat' style={{textDecoration: 'none'}}>Tavsiyeler</DropdownItem>
            </DropdownMenu>
        </Dropdown>
      </React.Fragment>
  );
}

export default DropDown;