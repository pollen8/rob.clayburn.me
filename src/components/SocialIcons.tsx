import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { styled } from 'styled-components';

import { mediaQueries } from '../utils/mediaQueries';

const IconList = styled.ul`
list-style: none;
li {
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

${mediaQueries("md")`
  padding: 0;
  position: absolute;
  top: 1.5rem;
  right: 1rem;
  margin: 0;
  li {
    padding-left: 0;
    display: block;
    padding-bottom: 1rem;
  }
`};
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
