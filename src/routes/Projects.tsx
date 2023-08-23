import {
  format,
  parseISO,
} from 'date-fns';
import { useLoaderData } from 'react-router-dom';
import {
  keyframes,
  styled,
} from 'styled-components';

import { TwoColumnContent } from '../components/TwoColumnContent';
import { JournalRow } from '../supabase';
import { mediaQueries } from '../utils/mediaQueries';

const Article = styled.article`
  margin-bottom: 3rem;
  box-shadow: 3px 1px 14px 1px hsla(0, 100%, 0%, 0.2);

`;

const Title = styled.div`
  time {
    font-size: 0.9rem;
    padding:0.25rem 0 0.5rem 0;
    display: block;
  }
`;

const fadeinImg= keyframes`
  0% {
    opacity: 0.8;
  }

  100% {
    opacity: 1;
  }
`;


const Grid = styled(TwoColumnContent)`
  background: hsla(0, 100%, 100%, 0.02);
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 1px 0px hsla(180, 100%, 80%, 0.1) inset;
  ${mediaQueries("md")`
    grid-template-columns:1fr;
    row-gap: 0;
    width: auto;
    padding: 0.75rem 1.25rem;
  `};
`

const Img = styled.img`
  max-width: 100%;
  background-color:#fff;
  background-blend-mode: multiply;
  opacity: 0.8;

  &:hover{
    animation: ${fadeinImg} 1s forwards;
  }
`

const Card = styled.div`

`;

const TechList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    background:  hsla(180, 100%, 80%, 0.1);
    border-radius: 0.5rem;
    padding: 0.1rem 0.5rem;
    display: inline-block;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const Projects = () => {
  const entries = useLoaderData() as JournalRow[];
  if (!entries) {
    return null;
  }
  return (
    <>
    <h1 className="animate-character-blue">/projects</h1>
    {entries.map((entry) => <Article key={entry.id}>
      
      <Grid>
        <div>
          {
            entry.image && 
        <Img src={entry.image} alt={entry.title ?? ''}/>
          }
        </div>
        <Card>
        <Title><h3>{entry.title}</h3>
        <time dateTime={entry.created_at ?? undefined}>
        {format(parseISO(entry.created_at ?? ''), "MMMM yyyy")}
        </time>
        </Title>
        <div dangerouslySetInnerHTML={{__html: entry.description ?? ''}} />
        <TechList>
        {
          (entry.technologies ?? []).map((tech) => <li key={tech?.toString()}>{tech?.toString()}</li>)
        }
        </TechList>
        </Card>
        </Grid>
    </Article>
    )}
    </>
  )
}
