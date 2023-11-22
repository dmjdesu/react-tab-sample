import logo from "./logo.svg";
import "./App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function App() {
  return (
    <Tabs defaultCSS={false}>
      <TabList>
        <Tab>Racten Fashion</Tab>
        <Tab>LUXURY</Tab>
      </TabList>

      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  );
}

export default App;
