import styled from "styled-components";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"

/**
 * Displays and Handles Pagination System
 */

const Pagination = ({ nPages, currentPage, setCurrentPage, indexOfFirstRecord, indexOfLastRecord, currentRecords, totalRecords, activeId }) => {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
    const nextPage = () => {
        if (currentPage !== nPages)
            setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if (currentPage !== 1)
            setCurrentPage(currentPage - 1)
    }
    return (
        <Wrapper>
            {activeId !== null ? <p className="text-blue">1 row selected</p> : ''}
            {
                currentRecords.length > 0 ?
                    <p>{indexOfFirstRecord + 1}-{totalRecords > 4 ? indexOfLastRecord : currentRecords.length } of {totalRecords}</p>
                    :
                    <p>0 of {totalRecords}</p>
            }
            <div className="btn-container">
                <button type="button" onClick={prevPage}><BiChevronLeft /></button>
                <button type="button" onClick={nextPage}><BiChevronRight /></button>
            </div>
        </Wrapper>
    );
}
const Wrapper = styled.div`
display: grid;
grid-template-columns: 2fr 1fr 1fr;
align-items: center;
padding: 0.5rem;
padding-right: 1rem;

p{
    color: var(--black);
    font-size: 12px;
}
.text-blue{
    color: var(--clr-primary-1);
    font-weight: 600;
}
.btn-container{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
button{
    background: transparent;
    border: none;
    svg{
        font-size: 1.35rem;
    }
}

`;

export default Pagination;