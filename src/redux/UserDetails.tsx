import { Card } from '../components/Card';
import { useApiSelector } from './store';
import { User } from './Users';

export const UserDetails = () => {
  const { data: user, isFetching } = useApiSelector<User>('userById');

  return (
    <div className="border p-3">
      <div className="mb-3">
        <label className="form-label">First name</label>
        <Value isLoading={isFetching} placeholder="First name" value={user?.first_name} />
      </div>
      <div className="mb-3">
        <label className="form-label">Last name</label>
        <Value isLoading={isFetching} placeholder="Last name" value={user?.last_name} />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <Value isLoading={isFetching} placeholder="Email" value={user?.email} />
      </div>
    </div>
  );
};

const Value = ({
  isLoading,
  placeholder,
  value,
}: {
  isLoading: boolean | undefined;
  placeholder: string;
  value: any;
}) => (
  <div>
    <div className="badge bg-secondary">{isLoading ? 'Wait...' : value || placeholder}</div>
  </div>
);
