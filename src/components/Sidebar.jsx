import { nanoid } from "@reduxjs/toolkit";
import styled from "styled-components";
import { sidebarLinks } from "../data";

const Sidebar = ()=>{
    return (
        <Wrapper>
            <ul className="links-container">
                {sidebarLinks.map((link) => {
                    const { icon, id } = link;
                    return <li key={id}>{icon}</li>
                })}
            </ul>
        </Wrapper>
    );
}

const Wrapper = styled.aside`
position: fixed;
top: 0;
left: 0;
height: 100%;
width: 50px;
background-color:  var(--clr-primary-1);
// box-shadow: var(--red-dark);
/* layout */
display: flex;
align-items: flex-start;
transition: var(--transition);
/* toggle logic */
// transform: translateX(-100%);

.links-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    margin-top: 1rem;
    padding: 0 0.5rem;
}
.links-container li{
    flex: 1 0 auto;
}
  
.links-container svg{
    font-size: 1.5rem;
    color: var(--white);
    transition: var(--transition);
    cursor: pointer;
}

.links-container a svg:hover{
    color: var(--grey-900);
}

`;

export default Sidebar;