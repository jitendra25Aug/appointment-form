import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { userSliceActions } from "../store/user_slice";

/**
 * Allows us to search for a user from the list of users 
 */

const SearchUser = ()=>{
    const [searchInput, setSearchInput ] = useState('');
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setSearchInput(e.target.value);
        dispatch(userSliceActions.updateUserList(e.target.value));
    }
    return (
        <Wrapper>
            <input type="text" placeholder="search by name/mobile number" value={searchInput} onChange={handleChange} />
            <button type="button" className="btn">view profile</button>
        </Wrapper>
    );
}

const Wrapper = styled.div`
display: grid;
grid-template-columns: 2fr 1fr;
align-items: center;
gap: 1rem;
margin-bottom: 1.35rem;
input{
    height: 100%;
    padding: 0 1rem;
    border: 1px solid var(--clr-grey-1);
    border-radius: 3rem;
    font-size: var(--fz-xxs);
    color: black;
}
::placeholder{
    color:  var(--clr-grey-2);
    text-transform: capitalize;
}
input:focus{
    outline: none;
    border-color: var(--clr-grey-4);
}

`;

export default SearchUser;