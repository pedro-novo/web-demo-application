import { PostService } from '@/services/post-service/post-service';
import { useQuery } from 'react-query';

export const useGetPosts = () => {
  const { data, isLoading, error } = useQuery(['useGetPosts'], () => PostService.getAll());

  return {
    posts: data,
    isPostsLoading: isLoading,
    postsError: error,
  };
};
