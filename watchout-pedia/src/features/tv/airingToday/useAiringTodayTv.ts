import {useQuery} from "react-query";
import {airingTodayApi} from "../../../apis/tvApi";
import {AxiosError, AxiosResponse} from "axios";
import {TVDetail, ListResponse} from "../../../types";

const useAiringTodayTv = () => {
    return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('airingTodayTvApi', airingTodayApi)
}

export default useAiringTodayTv