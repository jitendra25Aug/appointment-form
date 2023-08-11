import styled from "styled-components";

/**
 * Displays and Handles ToggleCheckbox Button. 
 */

const ToggleButton = ({ name, value, handleChange }) => {
    return (
        <Wrapper>
            <input className="switch-checkbox" id="switch-checkbox-label" type="checkbox" checked={true} onChange={handleChange}
                name={name} required />
            <label className="checkbox-label" htmlFor="switch-checkbox-label">
                <span className="toggle-text">Walk-In Appointment</span>
                <span className="toggle-btn" />
            </label>
        </Wrapper>
    )
}

const Wrapper = styled.div`
.switch-checkbox {
    height: 0;
    width: 0;
    visibility: hidden;
    display: none;
}
   
.checkbox-label {
    border: 1px sollid red;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: start;
    gap: 1rem;
}
   
.checkbox-label .toggle-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 35px;
    height: 12px;
    background:  var(--clr-grey-3);;
    border-radius: 100px;
    position: relative;
    transition: background-color .2s;
}

.checkbox-label .toggle-btn:before{
    content: '';
    position: absolute;
    top: -4px;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transition: 0.2s;
    background:  var(--clr-primary-1);;
}

.switch-checkbox:checked + .checkbox-label .toggle-btn:before {
    transform: translateX(100%);
}

.toggle-text{
    color: rgba(0, 0, 0, 0.6);
    font-size: clamp(var(--fz-xxs), 4vw, var(--fz-xs));
}

`;

export default ToggleButton;