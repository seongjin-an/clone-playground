import {useQuery} from "react-query";
import {latestApi} from "../../../apis/tvApi";
import {AxiosError, AxiosResponse} from "axios";
import {TVDetail} from "../../../types";

const useAiringTodayTv = () => {
    return useQuery<AxiosResponse<TVDetail>, AxiosError>('latestTv', latestApi)
}

export default useAiringTodayTv