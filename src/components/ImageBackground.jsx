import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

const Image = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

export default function ImageBackground({src}) {
    return (
        <Container>
            <Image src={src} alt="Image not available" />
        </Container>
    )
}

