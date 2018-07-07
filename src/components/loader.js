import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotateplane = keyframes`
  0% { transform: perspective(120px) rotateX(0deg) rotateY(0deg); }
	50% {
		transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
	100% {
		transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
	}
`;

export default () => {
    const Loader = styled.div`
        margin: 0 auto;
        animation: ${rotateplane} 1.2s infinite ease-in-out;
        background: black;
        width: 50px;
        height: 50px;
        animation-duration: 1.2s;
    `;

    return <Loader />
}
