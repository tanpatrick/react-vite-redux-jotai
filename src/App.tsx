import { Col, Row } from './components/Grid';
import { Header } from './components/Header';
import { JotaiApp } from './jotai/JotaiApp';
import { ReduxApp } from './redux/ReduxApp';

function App() {
  return (
    <>
      <Row>
        <Col size={6}>
          <Header value="Jotai" size="h2" />
          <JotaiApp />
        </Col>
        <Col size={6}>
          <Header value="Redux" size="h2" />
          <ReduxApp />
        </Col>
      </Row>
    </>
  );
}

export default App;
