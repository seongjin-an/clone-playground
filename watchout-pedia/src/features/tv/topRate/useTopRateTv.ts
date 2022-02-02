import {useQuery} from "react-query";
import {topRatedApi} from "../../../apis/tvApi";
import {AxiosError, AxiosResponse} from "axios";
import {TVDetail, ListResponse} from "../../../types";

const useTopRateTv = () => {
    return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('topRatedApiTv', topRatedApi)
}

export default useTopRateTv