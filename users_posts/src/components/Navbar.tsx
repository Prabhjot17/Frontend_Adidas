import React from 'react';

interface NavbarProps {
  title: string;
  links: { text: string; href: string }[];
}


const Navbar: React.FC<NavbarProps> = ({title,links}) => {
  return (
    <nav>
     
      <ul className='navbar-container'>
        {links.map(link => (
          <li style={{ listStyleType: "none",display: 'inline'}} key={link.href}>
            <a style = {{color:"white"}}href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;