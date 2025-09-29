import Button from "../common/Button";
import CategoryFilter from "../common/CategoryFilter";
import * as S from "./SortBar.style";
import React from "react";

export default function SortBar({
  categories,
  visible,
  selectedCategory,
  onToggle,
  onSelect,
  onMouseEnter,
  onMouseLeave,
  order,
  onChangeOrder,
}) {
  return (
    <S.Container>
      <S.BtnContainer>
        <CategoryFilter
          categories={categories}
          visible={visible}
          selectedCategory={selectedCategory}
          onToggle={onToggle}
          onSelect={onSelect}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
        <S.InfoContainer2>
          공감하는 질문에 좋아요를 눌러보세요!
        </S.InfoContainer2>
        <S.SortBtnCotainer>
          <Button
            buttonName={"최신순"}
            isPick={order === "latest"}
            onClick={() => onChangeOrder("latest")}
          />
          <Button
            buttonName={"좋아요순"}
            isPick={order === "likes"}
            onClick={() => onChangeOrder("likes")}
          />
        </S.SortBtnCotainer>
      </S.BtnContainer>
      <S.InfoContainer1>공감하는 질문에 좋아요를 눌러보세요!</S.InfoContainer1>
    </S.Container>
  );
}
