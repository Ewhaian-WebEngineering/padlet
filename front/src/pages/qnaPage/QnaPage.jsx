import { useState } from "react";
import MenuBar from "../../components/common/MenuBar";
import Header from "../../components/common/Header";
import SortBar from "../../components/qnaPage/SortBar";
import { PageContainer } from "../../components/common/PageContainer.style";

export default function QnaPage() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const isVisible = open || hovered;
  
  const categories = ["카테고리1", "카테고리2", "카테고리3"];
  return (
    <>
      <Header username={"김이화"} isLogin={true} pickMenu={1} />
      <PageContainer>
        <SortBar
          categories={categories}
          visible={isVisible}
          selectedCategory={selectedCategory}
          onToggle={() => setOpen(!open)}
          onSelect={(item) => {
            setSelectedCategory(item);
            setOpen(false);
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
        <MenuBar pickMenu={1} />
      </PageContainer>
    </>
  );
}
