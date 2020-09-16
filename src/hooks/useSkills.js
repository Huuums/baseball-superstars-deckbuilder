import { useQuery } from 'react-query';
import getSkills from '../api/skillQueries';

const useTrainers = () =>
  useQuery(['skills'], getSkills, {
    staleTime: Infinity,
  });

export default useTrainers;
