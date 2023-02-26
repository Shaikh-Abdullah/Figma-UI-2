import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Hero from '../Hero/Hero';
import './Tab.css';

function Tabcomponent() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="tabparent"
    >
      <Tab eventKey="home" title="Home">
        <Hero />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <Hero />

      </Tab>

    </Tabs>
  );
}

export default Tabcomponent;