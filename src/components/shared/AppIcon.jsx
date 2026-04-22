import styled from "styled-components";

const AppIcon = ({
  color,
  size = 20,
  hoverable = true,
  Icon,
  iconType = "stroke",
  onClick = null,
}) => {
  return (
    <StyledIconWrapper
      $color={color}
      $size={size}
      $iconType={iconType}
      $hoverable={hoverable}
      onClick={onClick}
    >
      <Icon />
    </StyledIconWrapper>
  );
};

const StyledIconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    transition: all 0.3s ease;
    flex-shrink: 0;
  }

  ${"" /* FILL */}
  ${({ $iconType, $color, theme }) =>
    $iconType === "fill" &&
    `svg path, svg rect, svg circle, svg ellipse  {
    fill: ${$color || theme.palette.icon.primary} !important;
    transition: fill 0.3s ease;
  }`}

${"" /* STROKE */}
  ${({ $iconType, $color, theme }) =>
    $iconType === "stroke" &&
    `svg path, svg rect, svg circle, svg ellipse, svg line, svg polyline {
    stroke: ${$color || theme.palette.icon.primary} !important;
    fill: none !important;
    transition: stroke 0.3s ease;
  }`}
  

 ${({ $hoverable, $iconType, theme }) =>
    $hoverable &&
    $iconType === "fill" &&
    `
    cursor: pointer;
    &:hover svg path,
    &:hover svg rect,
    &:hover svg circle,
    &:hover svg ellipse {
      fill: ${theme.palette.primary.main} !important;
    }
  `}

  
  ${({ $hoverable, $iconType, theme }) =>
    $hoverable &&
    $iconType === "stroke" &&
    `
    cursor: pointer;
    &:hover svg path,
    &:hover svg rect,
    &:hover svg circle,
    &:hover svg ellipse,
    &:hover svg line,
    &:hover svg polyline {
      stroke: ${theme.palette.primary.main} !important;
    }
  `}
`;
export default AppIcon;
