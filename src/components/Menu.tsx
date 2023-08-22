import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

import { mediaQueries } from '../utils/mediaQueries';

const List = styled.ul`
  padding: 0;
  margin: 0;
  width: 7rem;
  list-style: none;
  float: right;

  a {
    text-decoration: none;
    color: #fff;
    display: block;
    display: flex;
    align-items: end;
    justify-content: end;
    position: relative;
    z-index: 0;
    transition: 1.5s;

    &:before {
      width: 0rem;
      position: absolute;
      right: 0;
      bottom: 0;
      border-bottom: 1px solid hsla(100, 50%, 50%);
      border-bottom: 1px solid hsla(190, 70%, 70%);
      background: transparent;
      z-index: -1;
      transition: 0.5s;
      content: '';
      color: hsla(100, 50%, 50%);
    }
  }
  a:hover {
    color: hsla(190, 70%, 70%);
  }
  a:hover::before {
    width: 7rem;
  }

  li {
    margin: 0.75rem 0;
  }
  a.active {
    color: #fff;
    &:before {
      width: 7rem;
      border-bottom: 1px solid hsl(50, 80%, 50%);
    }
  }

  ${mediaQueries("md")`
  margin-bottom: 1.5rem;
  width: 100%;
    li {
      display: inline-block;
      width: 6rem;
    }

    a {
      justify-content: start;

      &:before {
        right: initial;
        left: 0;
      }
    }

    a:hover::before {
      width: 5rem;
    }

    a.active {
      color: #fff;
      &:before {
        width: 5rem;
      }
    }
  `};
`;

export const Menu = () => {
  return (
    <header>
      <List>
          <li>
          <NavLink to="/">about</NavLink>
        </li>
        <li>
          <NavLink to="/projects">projects</NavLink>
        </li>
        <li>
          <NavLink to="/work">work</NavLink>
        </li>
        {/* <li>
          <NavLink to="/blog">Blog</NavLink>
        </li> */}
      </List>
    </header>
  )
}
