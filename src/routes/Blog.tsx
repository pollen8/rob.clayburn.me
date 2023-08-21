import { styled } from 'styled-components';

const Card = styled.div`
 background: hsla(0, 100%, 100%, 0.02);
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 1px 0px hsla(180, 100%, 80%, 0.1) inset;
  margin-bottom: 1rem;
`;

export const Blog = () => {
  return (
    <>
    <h1 className="animate-character-blue">/ blog</h1>
    <Card>
      <h3>Errors</h3>
    </Card>
    <Card>
      <h3>Form Design</h3>
    </Card>
    <Card>
      <h3>Why XState</h3>
    </Card>
    <Card>
      <h3>Kanban vs Scrum - fight</h3>
    </Card>
    </>
  )
}
