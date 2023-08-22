import { motion } from 'framer-motion';
import {
  Outlet,
  useLocation,
} from 'react-router-dom';
import { styled } from 'styled-components';

import { Intro } from './components/Intro';
import { mediaQueries } from './utils/mediaQueries';

const Frame = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 80rem;
  grid-column-gap: 5rem;
  margin: auto;
  padding: 5rem 1rem 0 1rem;

  ${mediaQueries("md")`
    grid-template-columns:1fr;
    row-gap: 0;
    width: auto;
    padding: 0.75rem 1.25rem;
  `};
`
const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

const pageTransition = {
  type: 'tween',
  ease: [0.22, 1, 0.36, 1],
  duration: 4.5
}; 

export const App = () => {
  const { pathname } = useLocation();
  return (
      <Frame>
        <div>
          <Intro />
        </div>
        <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <main>
          <Outlet />
        </main>
      </motion.div>
      </Frame>
  );
};
