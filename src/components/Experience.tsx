import {
  PropsWithChildren,
  ReactNode,
} from 'react';
import { styled } from 'styled-components';

import { mediaQueries } from '../utils/mediaQueries';

const WideDate = styled.div`
  ${mediaQueries("md")`
    display:none;
  `};
`;

const ShortDate = styled.div`
  display:none;
  ${mediaQueries("md")`
    display:block;
  `};
`;

const Details = styled.article`
  margin-bottom: 1rem;
  strong {
    color: #fff;
  }
  ul {
    margin: 0;
    padding: 1rem;
  }
  p {
    padding: 1rem 0 0 0;
    margin: 0;
  }
`;


type Props = {
  date: string;
  title: string;
  company: ReactNode;
}
export const Experience = ({
  children,
  title,
  date,
  company,
}: PropsWithChildren<Props>) => {
  return (
    <>
    <WideDate>{date}</WideDate>
    <Details><strong>{title}</strong> / {company}<br />
    <ShortDate>{date}</ShortDate>
{children}
</Details>
</>
  )
}
