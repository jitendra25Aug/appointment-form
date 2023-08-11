import styled from "styled-components";

const User = ({ name, contact, id, activeId, setElementActive }) => {
    const isActive = id === activeId;
    console.log(isActive);
    return (
        <li className={`${isActive ? 'grid active' : 'grid'}`} onClick={()=>setElementActive(id)}>
            <p>{name}</p>
            <p>{contact}</p>
        </li>
    );
}

export default User;