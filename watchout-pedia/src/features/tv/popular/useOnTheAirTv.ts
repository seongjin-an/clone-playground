import {useQuery} from "react-query";
import {onTheAirApi} from "../../../apis/tvApi";
import {AxiosError, AxiosResponse} from "axios";
import {TVDetail, ListResponse} from "../../../types";

const useOnTheAirTv = () => {
    return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('onTheAirTvApi', onTheAirApi)
}

export default useOnTheAirTv