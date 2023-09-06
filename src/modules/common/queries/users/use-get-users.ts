import { useQuery } from 'react-query';
import { UserService } from '@/services/user-service/user-service';
import { toast } from 'react-toastify';

export const useGetUsers = () => {
  const { data, isLoading, error } = useQuery(['useGetUsers'], () => UserService.getAll(), {
    onError: () => toast.error('Unable to get the users!'),
  });

  return {
    users: data,
    isUsersLoading: isLoading,
    usersError: error,
  };
};
