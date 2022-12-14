import { useEffect } from 'react';
import { apiAction, getEmployeesApi, getUsersApi } from './reducers/apiReducer';
import { useApiSelector, useAppDispatch } from './store';

type Employee = {
  employee_name: string;
};

export const Employees = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      apiAction({
        apiFn: getEmployeesApi,
        apiKey: 'employees',
        queryKey: 'employees',
        errorHander: {
          delegateToGlobal: true,
        },
      })
    );
  }, []);

  const { isFetching, data, error } = useApiSelector<Employee[]>('employees');

  return (
    <div className="my-2 border border-dark p-3">
      <p>{error?.message}</p>
      <ul className="list-group text-left">
        {isFetching && <li className="list-group-item text-left">Loading...</li>}
        {data?.map((employee, index) => (
          <li className="list-group-item text-left" key={index}>
            {employee.employee_name}
          </li>
        ))}
      </ul>
    </div>
  );
};
