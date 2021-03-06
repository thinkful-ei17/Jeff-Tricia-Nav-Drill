import React from 'react';

import './navigation-bar.css';

// The NavigationBar component goes here.  It should be the default export.

export default function NavigationBar(props) {

const links = props.links.map((link) => (
  <li>
    <a href={link.href}>{link.text}</a>
  </li>
));

return (
<section className='navigation-bar'>
  <h1>{props.title}</h1>
  <nav className='navigation-bar-nav'>
    <ul>
      {links}
    </ul>
  </nav>
</section>
);

}