import { Slider } from "./ui/slider";
import {
  Avatar,
  Box,
  Button,
  Grommet,
  Main,
  Nav,
  Sidebar,
  Tab,
  Tabs,
} from "grommet";
import { Projects, Help, Clock } from "grommet-icons";

function App() {
  return (
    <>
      <div className="bg-cyan-400 flex gap-2 rounded-lg border-orange-700 border-8">
        <div>A</div>
        <div>B</div>
        <div>C</div>
      </div>

      <div style={{ height: 100, width: 100 }}>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>
    </>
  );
}

function AppA() {
  return (
    <>
      <Grommet full>
        <Box width="xsmall">
          <Sidebar
            background="brand"
            round="small"
            header={
              <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
            }
            footer={<Button icon={<Help />} hoverIndicator />}
          >
            <Nav gap="small">
              <Button icon={<Projects />} hoverIndicator />
              <Button icon={<Clock />} hoverIndicator />
            </Nav>
          </Sidebar>
        </Box>
        <Main>
          <Tabs>
            <Tab title="View data">
              <Box pad="medium">Show some data</Box>
            </Tab>
            <Tab title="Statistics">
              <Box pad="medium">Two</Box>
            </Tab>
          </Tabs>
        </Main>
      </Grommet>
    </>
  );
}

export default App;
