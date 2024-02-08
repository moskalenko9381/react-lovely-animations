import styled, {css, keyframes} from "styled-components";

export const rotation = keyframes`
  from {
    transform: scale(0)
  }
  25% {
    transform: scale(0.5);
    opacity: 0.3;
  }
  50% {
    transform: scale(1) rotate(45deg);
    opacity: 1;
    fill: white;
    stroke: white;
  }
  to {
    transform: scale(0.5) rotate(90deg);
    opacity: 0.5;
  }
`;

const flyUp = (y: number) => keyframes`
  0% {
    transform: scale(0) translateY(0px)
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.1;
    transform: scale(2) translateY(${y}px)
  }
`;

const flyRight = (x: number) => keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  1% {
    opacity: 1;
  }
  to {
    transform: translateX(${x}px);
  }
`;


const RotateAnimation = (props: { $delay?: number }) => css<{
    $delay?: number;
}>`
  ${rotation} 1.5s ease-in ${props.$delay}s infinite both;
`;
export const AnimatedSparkle = styled.svg<{ $delay?: number }>`
  animation: ${RotateAnimation};
  position: absolute;
  opacity: 0.7;
`;

export const AnimatedHeart = styled.svg<{ $delay?: number; $y: number }>`
  position: absolute;
  animation: ${(props) => flyUp(-props.$y)} 5s linear ${(props) => props.$delay}s infinite backwards
}

;
`;

export const AnimatedCloud = styled.div<{ $delay?: number; $parentWidth: number }>`
  position: absolute;
  width: fit-content;
  animation: ${(props) => flyRight(props.$parentWidth)} 15s linear ${(props) => props.$delay}s infinite both;
`;

const diagonalFartAnimation = (x: number) => keyframes`
  from {
    opacity: 0;
    transform: translateX(-200px) rotate(45%);
  }
  to {
    transform: translateX(${x}px);
  }
`;
export const AnimatedFart = styled.div`
  svg {
    transform: rotate(-45deg);
  }

  transform: translate(-130px, 100px);
  visibility: hidden;

  &.farty-cloud-up {
    visibility: visible;
    transition: transform 6s ease-out, visibility 6s linear 1s, opacity 6s linear;
    transform: translateY(-300px) scale(0.5);
    opacity: 0;
  }
`;
