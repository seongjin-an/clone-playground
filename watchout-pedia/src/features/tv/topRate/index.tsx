import React from "react";
import styled from "@emotion/styled/macro";

import useTopRateTv from './useTopRateTv';

import Card from "../../../components/Card";
import Slider from "../../../components/Slider";

const Base = styled.div`
  margin-bottom: 62px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  //line-height: 30px;
  padding: 12px 0 14px;
`;

const TopRateTvSection: React.FC = () => {
    const { data, isLoading } = useTopRateTv();
    const getYear = (release_date: string) => release_date.split('-')[0] || '';
    return(
        <Base>
            <Title>평점 방영</Title>
            {
                isLoading || !data ? (
                    <div>Loading...</div>
                ) : (

                    <Slider>
                        {
                            data.data.results.map(tv => (
                                <Card
                                    linkUrl={`/tv/${tv.id}`}
                                    title={tv.name}
                                    year={getYear(tv.first_air_date)}
                                    posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${tv.poster_path}`}
                                    voteAverage={tv.vote_average}
                                />
                            ))
                        }
                    </Slider>
                )
            }
        </Base>
    )
}

export default TopRateTvSection