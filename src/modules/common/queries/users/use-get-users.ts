import { useQuery } from 'react-query';
import { UserService } from '@/services/user-service/user-service';
import { toast } from 'react-toastify';
import { RoutePaths } from '@router/enums/route-paths';
import { useNavigate } from 'react-router-dom';

export const useGetUsers = () => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery(['useGetUsers'], () => UserService.getAll(), {
    onError: () => {
      toast.error('Unable to get the users!');
      navigate(RoutePaths.Home);
    },
  });

  return {
    users: data,
    isUsersLoading: isLoading,
    usersError: error,
  };
};
