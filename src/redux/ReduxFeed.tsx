import { Feed } from '../components/Feed';
import { useAppSelector } from './store';

export const ReduxFeed = () => {
  const feeds = useAppSelector((state) => state.feedsReducer.feeds);
  return <Feed feeds={feeds} />;
};
