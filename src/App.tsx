import { motion } from 'framer-motion';
import {
  Outlet,
  useLocation,
} from 'react-router-dom';
import { styled } from 'styled-components';

import { Intro } from './components/Intro';

/**
 * @todo mobile....
 */
const Frame = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80rem;
  row-gap: 10rem;
  grid-column-gap: 5rem;
  padding-top: 5rem;
  margin: auto;
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
