import React from 'react';
import ReactSlider, { Settings } from 'react-slick';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import "slick-carousel/slick/slick.css";

interface Props {
  settings?: Settings;
}

const ArrowButton = styled.button<{ pos?: 'left' | 'right' }>`
  padding: 16px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  z-index: 100;
  position: absolute;
  top: 33%;
  background-color: #fff;
  border: none;
  cursor:pointer;
  ${({ pos }) => pos === 'left' ? css`left: 0; transform: translate(-50%, -50%)` : css`right: 0; transform: translate(50%, -50%)`};
  &:before {
    content: initial;
  }
  & > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    color: #222;
  }
`;

const DEFAULT_SETTINGS = {
  dots: false,
  // edgeFriction: 1,
  // centerMode: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  swipe: true,
  infinite: true,
  swipeToSlide: true,
  // variableWidth: true,
  accessibility: true,
  arrows: true,
  prevArrow: <ArrowButton pos='left'><MdArrowBackIos /></ArrowButton>,
  nextArrow: <ArrowButton pos='right'><MdArrowForwardIos /></ArrowButton>,
  focusOnSelect: true,
  draggable: true
};

const Slider: React.FC<Props> = ({ settings = DEFAULT_SETTINGS, children }) => (
  <ReactSlider {...settings}>
    {children}
  </ReactSlider>
)

export default Slider;
