import React from 'react';
import { Link } from 'react-router';

const Sidebar = (props) => {

  const deselectAlbum = props.deselectAlbum;

  return (
    <sidebar>
      <img src="/juke.svg" className="logo" />
      <section>
        <h4>
        <Link to="/albums/" className="menu-item" activeClassName="active">ALBUMS</Link>
        </h4>
      </section>
      <section>
        <h4>
          <Link to="/artists/" className="menu-item" activeClassName="active">ARTISTS</Link>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
