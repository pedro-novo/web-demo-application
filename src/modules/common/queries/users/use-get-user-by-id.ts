import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RoutePaths } from '@router/enums/route-paths';

import { UserService } from '@/services/user-service/user-service';

export const useGetUserById = (id?: number) => {
  const navigate = useNavigate();

  const { data, isLoading, error, refetch } = useQuery(['useGetUserById', id], () => UserService.getById(id!), {
    enabled: !!id,
    onError: () => {
      toast.error('Unable to get the user!');
      navigate(RoutePaths.Home);
    },
  });

  return {
    user: data,
    isUserLoading: isLoading,
    userError: error,
    userRefetch: refetch,
  };
};
