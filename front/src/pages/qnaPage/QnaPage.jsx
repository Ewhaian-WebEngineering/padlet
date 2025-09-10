import React from "react";
import MenuBar from "../../components/common/MenuBar";
import Header from "../../components/common/Header";
import SortBar from "../../components/qnaPage/SortBar";
import { PageContainer } from "../../components/common/PageContainer.style";

export default function QnaPage() {
  return (
    <>
      <Header username={"김이화"} isLogin={true} />
      <PageContainer>
        <SortBar />
        <MenuBar pickMenu={1} />
      </PageContainer>
    </>
  );
}
