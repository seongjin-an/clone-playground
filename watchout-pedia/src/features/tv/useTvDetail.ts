import {useQuery} from "react-query";
import {detailApi} from "../../apis/tvApi";
import {AxiosError, AxiosResponse} from "axios";
import {TVDetail} from "../../types";

const useTvDetail = (query: string) => {
    const queryFn = () => detailApi(query);
    return useQuery<AxiosResponse<TVDetail>, AxiosError>(
        ['tvDetail', query],
        queryFn,
        {enabled: Boolean(query)}
        )
}
export default useTvDetail