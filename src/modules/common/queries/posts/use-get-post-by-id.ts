import { PostService } from '@/services/post-service/post-service';
import { RoutePaths } from '@router/enums/route-paths';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const useGetPostById = (id: number) => {
  const navigate = useNavigate();

  const { data, isLoading, error, refetch } = useQuery(['useGetPostById', id], () => PostService.getById(id), {
    enabled: false,
    onError: () => {
      toast.error('Unable to get the post!');
      navigate(RoutePaths.Home);
    },
  });

  return {
    post: data,
    isPostLoading: isLoading,
    postError: error,
    postRefetch: refetch,
  };
};
