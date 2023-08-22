import {
  keyframes,
  styled,
} from 'styled-components';

import { Menu } from './Menu';
import { SocialIcons } from './SocialIcons';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const StrapLine = styled.p`
  opacity: 0;
  animation: ${fadeIn} 2s linear forwards;
  animation-delay: 2.2s;
  margin-top: 1rem;
`;

const Fixed = styled.div`
  position: sticky;
  top: 5rem;
`;

export const Intro = () => {
  return (
    <Fixed>
      <div style={{textAlign: 'right'}}>
        <h1 className="animate-character">Rob Clayburn</h1>
        <StrapLine>Full stack developer</StrapLine>
        <SocialIcons />
        <Menu />
      </div>
  </Fixed>
  )
}
