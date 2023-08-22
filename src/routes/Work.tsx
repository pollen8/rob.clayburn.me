import { styled } from 'styled-components';

import { TwoColumnContent } from '../components/TwoColumnContent';

const Details = styled.article`
  margin-bottom: 1rem;
  strong {
    color: #fff;
  }
  ul {
    margin: 0;
    padding: 1rem;
  }
`;
export const Work = () => {
  return (
    <>
    <h1 className="animate-character-blue">/work</h1>
    <TwoColumnContent>
      <div>2019 - Present</div>
      <Details><strong>Lead Front End Software Engineer</strong> / InfoSum<br />
<ul>
  <li> Technical lead to a team of 9 other front end developers.</li>
<li> Liaising with the product and architecture teams to understand
technical implications and breakdown epics.</li>
<li> Mentoring team members, helping them meet their career and
technical goals.</li>
<li> Leading the drive to implement a micro-front end & GraphQL architecture.</li>
<li> Developed R&D project to integrate 3rd party apps into our
platform, authenticated via oAuth.</li>
</ul>
</Details>
<div>2016 - 2019</div>
<Details>
<strong>Software Engineer</strong> / InfoSum<br />
I joined InfoSum as their first front end engineer and have been a core
part of the development team creating the market leading privacy first
decentralised platform for connecting and analysing data.
<ul>
  <li>Developed complex visualizations in D3 and published an open
source charting library.</li>
<li>Designed front end architecture (TypeScript React & Redux).</li>
<li>Created Node.js/Express user management & authentication
services.</li>
<li>Conceived and implemented our React design system.</li>
</ul>
</Details>
<div>
2014
</div>
<Details>
<strong>Project lead</strong> for the redevelopment of the <a href="http://extensions.joomla.org" target="_blank">Joomla! extension directory</a>, one of the world’s most used CMSs. &nbsp;

<ul>
<li>Writing and presenting project proposals and costings based on
their initial requirements.</li>
<li>Contractual negotiations with their legal team.</li>
<li>Managing a remote team of designers and developers.</li>
<li>Implementing Rest API to power both the front end and the
AngularJS admin application.</li>
</ul>
</Details>
<div>
2005 – 2014
</div>
<Details>
<strong>Owner</strong> / Pollen 8 Design Ltd<br />
Lead developer and community manager
for <a href="https://fabrikar.conm" target="_blank">Fabrik</a>, a low-code solution for building custom applications in Joomla
<ul>
<li>Providing project vision and best practices.</li>
<li>Managing a remote team of contributors.</li>
<li>Creating UI and application framework.</li>
<li>In 2012, The Joomla Community Team rated Fabrik as JCM one
of the Top Ten Community Choice Extensions.</li>
</ul>
Providing design, web and programming solutions based primarily
around Joomla!.
<ul>
<li>Gather client requirements, writing proposals and presenting
designs. Coding and implementing designs, ensuring project
milestones are met and final client delivery.</li>
</ul>
Bourjois Belle - GPS / Google map-based Facebook Application.
<ul>
<li>Nominated the 2012 Cannes Advertising Festival and for the
social buzz awards in the category "Best use of Check
In/Location Based Services".</li>
</ul>
</Details>
<div>
2007 – 2014
</div>
<Details>
<strong>Chief Technical Officer</strong> / Illibirum <br />
Providing real-time HTML5
collaborative video annotation services for the film industry.
<ul>
  <li>R&D in emerging web technologies, such as NodeJS, Socket.io,
HTML5, webRTC and Angular.js
</li>
</ul>
</Details>
<div>
1999 – 2005
</div>
<Details>
  <strong>Senior designer / developer</strong> / Datasphere Ltd <br />
Design and development of touchscreen kiosk software, web
applications and websites.
<ul>
  <li>Managed a team of four developers and provided in-house
training.
</li>
</ul>
</Details>
    </TwoColumnContent>
    </>
  )
}
