// Write your Character component here
 import React from 'react';
 import styled from 'styled-components';

 const Character = (props)=>{
    const {dataCharacter} = props;

    const StyledCharacter = styled.div`
    font-size: 0.8rem;
    `
    
    return(
        <StyledCharacter>
            
            {dataCharacter.map((item,index)=> <h1 key={index}>{item.name} 
            <h4>{item.height}cm</h4></h1> )}
            
        
        </StyledCharacter>
    )

 }
 
 export default Character;