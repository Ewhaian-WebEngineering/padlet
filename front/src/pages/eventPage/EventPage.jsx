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
      <Header username={"김이화"} isLogin={true} />
      <PageContainer>
        {/* 1. title Container */}
        <S.TitleContainer>
          <S.Logo src={logo2} alt="logo2" />
          <S.Title>
            <h3>
              {" "}
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
            <S.CardTitle>강연 정보</S.CardTitle>
            <div className="time">
              <h3>{eventInfo.date}</h3>
              <h3>{eventInfo.location}</h3>
            </div>

            <h3>사전예매: {eventInfo.preSale}</h3>
            <h3>현장예매: {eventInfo.onsiteSale}</h3>
          </S.Card>

          <S.Card className="square">
            <S.CardTitle>강연 시간표</S.CardTitle>
            <S.CardList>
              <S.CardItem>
                <S.LogoDot src={logoDott} alt="logo" className="firstDot" />
                <div className="text">
                  <h3>18:00~18:10 &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; 오프닝</h3>
                </div>
              </S.CardItem>

              <S.CardItem>
                <S.LogoDot src={logoDott} alt="logo" />

                <div className="text">
                  <h3>18:00~18:10 첫번째 강연</h3>
                  <p>00학과 교수 000연사</p>
                </div>
              </S.CardItem>

              <S.CardItem>
                <S.LogoDot src={logoDott} alt="logo" />
                <div className="text">
                  <h3>18:50~19:20 두번째 강연</h3>
                  <p>00학과 교수 000연사</p>
                </div>
              </S.CardItem>
            </S.CardList>
          </S.Card>

          <S.Card className="full">
            <S.CardTitle>강연 주제</S.CardTitle>
            <S.CardList2>
              <S.CardItem>
                <S.LogoDot src={logoDott} alt="logo" />
                <div className="text">
                  <h3>00학과 교수 000연사</h3>
                  <p>강연 주제입니다: 강연 주제 소제목</p>
                </div>
              </S.CardItem>

              <S.CardItem>
                <S.LogoDot src={logoDott} alt="logo" />
                <div className="text">
                  <h3>00학과 교수 000연사</h3>
                  <p>강연 주제입니다: 강연 주제 소제목</p>
                </div>
              </S.CardItem>
            </S.CardList2>
          </S.Card>
        </S.CardContainer>

        <MenuBar />
      </PageContainer>
    </div>
  );
}

export default IntroPage;
