import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { styled } from 'styled-components';

const IconList = styled.ul`
list-style: none;
li {
  /* padding-top: 2rem; */
padding-left: 1rem;
  display: inline-block;
}
a {
  transition: all 0.5s;

  &:hover {
    svg path {
      fill: hsla(50, 80%, 50%);
    }
  }
}
`
export const SocialIcons = () => {
  return (
    <IconList>
    <li>
      <a href="https://github.com/pollen8">
      <AiFillGithub size="1.5rem" />
    </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/pollen8/">
      <AiFillLinkedin size="1.5rem" />
    </a>
    </li>
    <li>
      <a href="https://twitter.com/pollen8/">
      <AiFillTwitterCircle size="1.5rem" />
    </a>
    </li>
    </IconList>
  )
}
