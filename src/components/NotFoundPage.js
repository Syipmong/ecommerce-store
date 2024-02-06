import {React} from 'react'

import PropTypes from "prop-types";

const Header = ({title, onClose}) => (
    <header className="modal__header">Menu</header>
    );

Header.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func
};

export default Header;