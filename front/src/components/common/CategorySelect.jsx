import * as S from "./CategorySelect.style";
import arrow from "../../assets/common/Arrow.svg";
import { createPortal } from "react-dom";
import { useRef, useState, useEffect } from "react";

export default function CategorySelect({
  categories,
  visible,
  selectedCategory,
  onToggle,
  onSelect,
  onMouseEnter,
  onMouseLeave,
}) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });

  const updatePosition = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  };

  useEffect(() => {
    if (visible) updatePosition();

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [visible]);

  return (
    <S.Container
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onToggle}
      ref={containerRef}
      $active={!!selectedCategory}
    >
      <S.FilterTitle>{selectedCategory || "카테고리 선택"}</S.FilterTitle>
      <S.ArrowContainer>
        <S.Arrow src={arrow} alt="arrow" />
      </S.ArrowContainer>

      {visible &&
        position.width > 0 &&
        createPortal(
          <S.PortalDropdown
            style={{
              top: position.top,
              left: position.left,
              width: position.width,
            }}
          >
            {categories.map((item, idx) => (
              <li
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(item);
                }}
              >
                {item}
              </li>
            ))}
          </S.PortalDropdown>,
          document.body
        )}
    </S.Container>
  );
}
