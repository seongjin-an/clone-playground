import {useQuery} from "react-query";
import {popularApi} from "../../../apis/tvApi";
import {AxiosError, AxiosResponse} from "axios";
import {TVDetail, ListResponse} from "../../../types";

const usePopularTv = () => {
    return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('popularTvApi', popularApi)
}

export default usePopularTv