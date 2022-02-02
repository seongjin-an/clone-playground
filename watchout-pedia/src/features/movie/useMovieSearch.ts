import {useQuery} from "react-query";
import {searchApi} from "../../apis/movieApi";
import {AxiosError, AxiosResponse} from "axios";
import {ListResponse, Movie} from "../../types";

const useMovieSearch = (query: string) => {
    return useQuery<AxiosResponse<ListResponse<Movie>>, AxiosError>({
        queryKey: ['searchMovie', query],
        queryFn: () => searchApi(query),
        enabled: Boolean(query)//query is not null
    })
}

export default useMovieSearch