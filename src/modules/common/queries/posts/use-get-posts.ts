import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RoutePaths } from '@router/enums/route-paths';

import { PostService } from '@/services/post-service/post-service';

export const useGetPosts = () => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery(['useGetPosts'], () => PostService.getAll(), {
    onError: () => {
      toast.error('Unable to get the posts!');
      navigate(RoutePaths.Home);
    },
  });

  return {
    posts: data,
    isPostsLoading: isLoading,
    postsError: error,
  };
};
