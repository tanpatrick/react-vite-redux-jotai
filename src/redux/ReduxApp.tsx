import { Provider } from 'react-redux';
import { Col, Row } from '../components/Grid';
import { ReduxCounterCard } from './ReduxCounterCard';
import { ReduxFeed } from './ReduxFeed';
import { ReduxSummary } from './ReduxSummary';
import store from './store';

export const ReduxApp = () => {
  return (
    <Provider store={store}>
      <Row>
        <Col size={6}>
          <ReduxCounterCard name="A" />
        </Col>
        <Col size={6}>
          <ReduxCounterCard name="B" />
        </Col>
      </Row>
      <ReduxSummary />
      <ReduxFeed />
    </Provider>
  );
};
