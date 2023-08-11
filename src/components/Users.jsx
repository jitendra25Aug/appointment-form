import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Pagination, User } from ".";
import { userSliceActions } from "../store/user_slice";

/**
 * Displays The List of Avaiable Users
 */

const Users = () => {
    const { filtered_users, activeId } = useSelector(state => state.user);
    const dispatch = useDispatch();

    // PAGINATION
    // User is currently on this page
    const [currentPage, setCurrentPage] = useState(1);  
    const [recordsPerPage] = useState(5);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    // Records to be displayed on the current page
    const currentRecords = filtered_users.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(filtered_users.length / recordsPerPage);


    const setElementActive = (id) => {
        dispatch(userSliceActions.setActiveId(id));
        dispatch(userSliceActions.setCurrentUser(id));
    }
    return (
        <Wrapper>
            <div className="heading grid">
                <p>full name</p>
                <p>contact</p>
            </div>
            <div className="user-container">
                <ul className="user-container">
                    {currentRecords.map((user) => {
                        return <User key={user.id} {...user} activeId={activeId} setElementActive={setElementActive} />
                    })}
                </ul>
            </div>
            <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage}
                indexOfFirstRecord={indexOfFirstRecord} indexOfLastRecord={indexOfLastRecord} currentRecords={currentRecords}
                totalRecords={filtered_users.length}
                activeId={activeId}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
border: 1px solid var(--clr-grey-1);
border-radius: var(--radius);
color: var(--clr-primary-1);
font-size: clamp(var(--fz-xxs), 4vw, var(--fz-xs));

.heading{
    text-transform: capitalize;
    height: 50px;
    padding-left: 0.5rem;
    font-size: clamp(var(--fz-xxs), 4vw, var(--fz-xs));
    p{
        border-right: 2px solid var(--clr-grey-1);
    }
}

.user-container li{
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    font-size: clamp(var(--fz-xxs), 4vw, 13px);
    font-weight: 600;
    border-top: 1px solid var(--clr-grey-1);
    cursor: pointer;
    p{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
.active{
    background-color: rgba(0, 0, 0, 0.04);
}
`;

export default Users;