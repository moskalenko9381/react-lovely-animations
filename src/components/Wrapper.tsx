import styled from "styled-components";

export const MainWrapper = styled.div<{ $padding?: string }>`
  padding: ${(props) => props.$padding || 0};
  width: fit-content;
  height: fit-content;
  position: relative;
`;
export const AnimationWrapper = styled.div`
    background: transparent;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 3;
    pointer-events: none;
`;
