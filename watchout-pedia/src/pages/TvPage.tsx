import React from "react";
import LatestTvSection from "../features/tv/latest";
import AiringTodayTvSection from "../features/tv/airingToday";
import OnTheAirTvSection from "../features/tv/onTheAir";
import PopularTvSection from "../features/tv/popular";
import TopRateTvSection from "../features/tv/topRate";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "@emotion/styled";

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;

const TvPage: React.FC = () => {
    return(
        <div>
            <Header/>
            <Main>
                <Container>
                    <LatestTvSection/>
                    <AiringTodayTvSection/>
                    <OnTheAirTvSection/>
                    <PopularTvSection/>
                    <TopRateTvSection/>
                </Container>
            </Main>
            <Footer/>
        </div>
    )
}

export default TvPage