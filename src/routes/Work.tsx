import { styled } from 'styled-components';

import { Experience } from '../components/Experience';
import { TwoColumnContent } from '../components/TwoColumnContent';
import { mediaQueries } from '../utils/mediaQueries';

const WorkColumns = styled(TwoColumnContent)`
  ${mediaQueries("md")`
    grid-template-columns:1fr;
  `};
`



export const Work = () => {
  return (
    <>
    <h1 className="animate-character-blue">/work</h1>
    <WorkColumns>
      <Experience
      date="2019 - Present"
      title="Lead Front End Software Engineer"
      company="InfoSum">
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
      </Experience>
    
      <Experience
        date="2016 - 2019"
        title="Software Engineer"
        company="InfoSum">
        <p>
          I joined InfoSum as their first front end engineer and have been a core
        part of the development team creating the market leading privacy first
        decentralised platform for connecting and analysing data.
        </p>
        <ul>
          <li>Developed complex visualizations in D3 and published an open
        source charting library.</li>
        <li>Designed front end architecture (TypeScript React & Redux).</li>
        <li>Created Node.js/Express user management & authentication
        services.</li>
        <li>Conceived and implemented our React design system managed within Storybook.</li>
        </ul>
      </Experience>

      <Experience
        date="2014"
        title="Project lead"
        company="Joomla Extension Directory">
          <p>
        Lead the redevelopment of 
        the <a href="http://extensions.joomla.org" target="_blank">Joomla! extension directory</a>, 
        one of the world’s most used CMSs. &nbsp;
        </p>
        <ul>
          <li>Writing and presenting project proposals and costings based on
          their initial requirements.</li>
          <li>Contractual negotiations with their legal team.</li>
          <li>Managing a remote team of designers and developers.</li>
          <li>Implementing Rest API to power both the front end and the
          AngularJS admin application.</li>
        </ul>
      </Experience>

      <Experience
        date="2005 – 2014"
        title="Owner"
        company="Pollen 8 Design">
        <p>
          Lead developer and community manager
          for <a href="https://fabrikar.conm">Fabrik</a>, a low-code solution for building custom applications in Joomla
        </p>
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
      </Experience>

      <Experience
        date="2007 – 2014"
        title="Chief Technical Officer"
        company="Illibirum">
        <p>
          Providing real-time HTML5
          collaborative video annotation services for the film industry.
        </p>
        <ul>
          <li>R&D in emerging web technologies, such as NodeJS, Socket.io,
        HTML5, webRTC and Angular.js
          </li>
        </ul>
      </Experience>

      <Experience
        date="1999 – 2005"
        title="Senior designer / developer"
        company="Datasphere">
        <p>Design and development of touchscreen kiosk software, web
        applications and websites.
        </p>
        <ul>
          <li>
            Managed a team of four developers and provided in-house
            training.
          </li>
        </ul>
      </Experience>
    </WorkColumns>
    </>
  )
}
