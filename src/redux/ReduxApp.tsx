import { Provider } from 'react-redux';
import { Employees } from './Employees';
import store, { useAppSelector } from './store';
import { UserDetails } from './UserDetails';
import { Users } from './Users';

const ErrorHandler = () => {
  const error = useAppSelector((state) => state.api.error);

  if (error?.code) {
    return (
      <div className="p-2 border border-danger">
        <strong>Error Handler</strong>
        <hr />
        <code>
          {error.code} = {error.message}
        </code>
      </div>
    );
  }

  return <></>;
};

export const ReduxApp = () => {
  return (
    <Provider store={store}>
      <ErrorHandler />
      <Employees />
      <Users />
    </Provider>
  );
};
