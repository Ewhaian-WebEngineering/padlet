import React from "react";
import * as S from "./EventPage.style";

import Header from "../../components/common/Header";
import MenuBar from "../../components/common/MenuBar";
import { PageContainer } from "../../components/common/PageContainer.style";
import logo from "../../assets/common/logo.svg";
import logo2 from "../../assets/common/logo2.svg";
import logo3 from "../../assets/common/logo3.svg";
import logoDott from "../../assets/common/logoDott.png";
import eventInfo from "../../data/eventInfo.json";

function IntroPage() {
  return (
    <div>
      <Header pickMenu={0} />
<<<<<<< HEAD
      {/* //충돌해결  */}
=======
>>>>>>> 9881aea7de046dbeae85552d3d2b73947d3cbad6
      <PageContainer>
        {/* 1. title Container */}
        <S.TitleContainer>
          <S.Logo src={logo2} alt="logo2" />
          <S.Title>
            <h3 className="font-title">
              이화담(<span className="green">談</span>) 이란?
            </h3>
          </S.Title>
          <S.Logo src={logo3} alt="logo3" />
        </S.TitleContainer>

        {/* 2. content */}
        <S.Content>
          <div> 이화인들에게 귀감이 될 만한 연사들을 모시고,</div>
          <div>그들의 진솔한 경험과 생각을 나누는 강연회입니다.</div>
        </S.Content>

        {/* 3. cardContainer-card 3개 위치  */}
        <S.CardContainer>
          <S.Card className="square">
            <S.CardTitle className="font-title">강연 정보</S.CardTitle>
            <S.CardContent>
              <div className="date">
                <h3>{eventInfo.date}</h3>
                <h3>{eventInfo.location}</h3>
              </div>
              <div className="reservation">
                <h3>사전예매: {eventInfo.preSale}</h3>
                <h3>현장예매: {eventInfo.onsiteSale}</h3>
              </div>
            </S.CardContent>
          </S.Card>

          {/* *2번쨰: 강연 시간표 카드  */}

          <S.Card className="square long-card">
            <S.CardTitle2 className="font-title">강연 시간표</S.CardTitle2>
            <S.CardList>
              <S.CardItem>
                <S.LogoDot src={logoDott} alt="logo" className="firstDot" />
                <div className="text">
                  <span className="time">18:00~18:10</span>
                  <span className="title">오프닝</span>
                </div>
              </S.CardItem>

              <S.CardItem>
                <S.LogoDot src={logoDott} alt="logo" />

                <div className="text">
                  <span className="time">18:00~18:10</span>
                  <span className="title">첫 번째 강연</span>
                  <p className="speaker"> {eventInfo.speaker1}</p>
                </div>
              </S.CardItem>

              <S.CardItem>
                <S.LogoDot src={logoDott} alt="logo" />
                <div className="text">
                  <span className="time">18:50~19:20</span>

                  <span className="title">두 번째 강연</span>
                  <p className="speaker"> {eventInfo.speaker2}</p>
                </div>
              </S.CardItem>
            </S.CardList>
          </S.Card>
          {/* 3번째 카드:주제 */}
          <S.Card className="full">
            <S.CardTitle3 className="font-title">강연 주제</S.CardTitle3>
            <S.CardList2>
              <S.CardItem2>
                <div className="CardItems22">
                  <div className="firstLine">
                    <S.LogoDot src={logoDott} alt="logo" />
                    <h3>{eventInfo.speaker1}</h3>
                  </div>
                  <p>{eventInfo.title1}</p>
                </div>
              </S.CardItem2>

              <S.CardItem2>
                <div className="CardItems22">
                  <div className="firstLine">
                    <S.LogoDot src={logoDott} alt="logo" />
                    <h3>{eventInfo.speaker2}</h3>
                  </div>
                  <p>{eventInfo.title2}</p>
                </div>
              </S.CardItem2>
            </S.CardList2>
          </S.Card>
        </S.CardContainer>

        <MenuBar pickMenu={0} />
      </PageContainer>
    </div>
  );
}

export default IntroPage;
