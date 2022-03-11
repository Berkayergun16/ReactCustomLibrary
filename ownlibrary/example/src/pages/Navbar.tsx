import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Menu, Dropdown } from 'semantic-ui-react'

const Navbar = () => {
  return (
    <div>
      <Menu color='black' inverted size='tiny'>
        <Container>
          <Menu.Item as={NavLink} to='/' name='Anasayfa' />
          <Menu.Item as={NavLink} to='/button' name='Button' />
          <Menu.Item as={NavLink} to='/uniform' name='Uniform' />
          <Menu.Menu position='right'>
            <Dropdown item text="Table's">
              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to='/basic-table'>Basic Table</Dropdown.Item>
                <Dropdown.Item as={NavLink} to='/footer-table'> Footers</Dropdown.Item>
                <Dropdown.Item  as={NavLink} to='/sorting-table'>Sorting</Dropdown.Item>
                <Dropdown.Item  as={NavLink} to='/filtering-table'>Filtering</Dropdown.Item>
                <Dropdown.Item  as={NavLink} to='/footer-table'>Grouping</Dropdown.Item>
                <Dropdown.Item  as={NavLink} to='/footer-table'>Grouping Column</Dropdown.Item>
                <Dropdown.Item  as={NavLink} to='/footer-table'>Pagination</Dropdown.Item>
                <Dropdown.Item  as={NavLink} to='/footer-table'>Row Selection</Dropdown.Item>
                <Dropdown.Item  as={NavLink} to='/footer-table'>Row Selection and Pagination</Dropdown.Item>
                <Dropdown.Item  as={NavLink} to='/footer-table'>Expanding</Dropdown.Item>
                <Dropdown.Item  as={NavLink} to='/footer-table'>Sub Components</Dropdown.Item>
                <Dropdown.Item  as={NavLink} to='/footer-table'>Sub Components Lazy</Dropdown.Item>
                <Dropdown.Item  as={NavLink} to='/footer-table'>Editable Data</Dropdown.Item>
                <Dropdown.Item  as={NavLink} to='/footer-table'>Column Ordering</Dropdown.Item>
                <Dropdown.Item  as={NavLink} to='/footer-table'>Column Hiding</Dropdown.Item>
                <Dropdown.Item  as={NavLink} to='/footer-table'>Data Driven Classes and Styles</Dropdown.Item>
                <Dropdown.Item  as={NavLink} to='/footer-table'>Row Drag Drop</Dropdown.Item>
                <Dropdown.Item  as={NavLink} to='/footer-table'>Full Width Table</Dropdown.Item>
                <Dropdown.Item  as={NavLink} to='/footer-table'>Full Width Resizable Table</Dropdown.Item>
                <Dropdown.Item  as={NavLink} to='/footer-table'>Kitchen Sink</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  )
}

export default Navbar
