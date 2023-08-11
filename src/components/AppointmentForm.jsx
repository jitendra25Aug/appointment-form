import { useState } from "react";
import styled from "styled-components";
import { Card, ToggleButton } from ".";

/**
 * Contains The Appointment Form To Be Filled By User.  
 */

const selectOptions = ['John', 'Peter', 'Susan'];
const selectOptionsTime = ['9:00 A.M.', '12:00 P.M.', '3:00 P.M.', '6:00 P.M.'];

const AppointmentForm = () => {
    const [user, setUser] = useState({
        doctor: '', appointmentChannel: '', appointmentTitle: '', time: '', date: '', appointmentType: '', bp: '', temp: '', height: '',
        weight: '', spo2: '', pulseRate: '', shortNote: '', prescriptionNode: '', walkIn: false,
    })

    const handleChange = (e) => {
        console.log("insde handle");
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setUser({ ...user, [e.target.name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }

    const handleReset = () => {
        setUser({
            doctor: '', appointmentChannel: '', appointmentTitle: '', time: '', date: '', appointmentType: '', bp: '', temp: '', height: '',
            weight: '', spo2: '', pulseRate: '', shortNote: '', prescriptionNode: '', walkIn: false,
        });
    }
    return (
        <Wrapper>
            <Card>
                <form onSubmit={handleSubmit} className="appointment-form">
                    <div className="control-group">
                        <div className="doctor-details">
                            <p className="details-heading">details</p>
                            <div className="form-control">
                                <select value={user.doctor} onChange={handleChange} name="doctor" required>
                                    <option value="" disabled> Select Doctor</option>
                                    {selectOptions.map((item) => { return <option key={item} value={item}>{item}</option> })}
                                </select>
                            </div>
                            <div className="form-control">
                                <select value={user.appointmentChannel} onChange={handleChange} name="appointmentChannel" required>
                                    <option value="" disabled >Select Appointment Channel</option>
                                    {selectOptions.map((item) => { return <option key={item}>{item}</option> })}
                                </select>
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Appointment Title" value={user.appointmentTitle} onChange={handleChange}
                                    name="appointmentTitle" required />
                            </div>
                        </div>
                        <div className="appointment-details">
                            <p className="details-heading">Appointment Details</p>
                            <div className="form-control grid user-name">
                                <p>Ravi Patil </p>
                                <span>PID - 836241565</span>
                            </div>
                            <div className="form-control">
                                <ToggleButton value={user.walkIn} handleChange={handleChange} name="walkIn" />
                            </div>
                            <div className="form-control grid">
                                <select value={user.time} onChange={handleChange} name="time" required>
                                    <option value="" disabled>Time</option>
                                    {selectOptionsTime.map((item) => { return <option key={item}>{item}</option> })}
                                </select>
                                <input type="date" value={user.date} onChange={handleChange} name="date" required />
                            </div>
                            <div className="form-control">
                                <select value={user.appointmentType} onChange={handleChange} name="appointmentType" required>
                                    <option value="" disabled>Select Appointment Type</option>
                                    {selectOptions.map((item) => { return <option key={item}>{item}</option> })}
                                </select>
                            </div>
                        </div>
                        <hr className="hr" />
                        <div className="patient-info">
                            <p className="details-heading">Vital information</p>
                            <div className="form-control">
                                <input type="text" value={user.bp} onChange={handleChange} name="bp" placeholder="BP" required />
                                <input type="text" value={user.temp} onChange={handleChange} name="temp" placeholder="Temp" required />
                                <input type="text" value={user.height} onChange={handleChange} name="height" placeholder="Height" required />
                                <input type="text" value={user.weight} onChange={handleChange} name="weight" placeholder="Weight" required />
                                <input type="text" value={user.spo2} onChange={handleChange} name="spo2" placeholder="SPO2" required />
                                <input type="text" value={user.pulseRate} onChange={handleChange} name="pulseRate" placeholder="Pulse Rate" required />
                            </div>
                            <div className="form-control extra-details">
                                <input type="text" placeholder="Reason" value={user.shortNote} onChange={handleChange} name="shortNote" required />
                                <select value={user.prescriptionNode} onChange={handleChange} name="prescriptionNode" required>
                                    <option value="" disabled>Note for doctor</option>
                                    {selectOptions.map((item) => { return <option key={item}>{item}</option> })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button type="button" className="btn" onClick={handleReset}>reset</button>
                        <button type="submit" className="btn">submit</button>
                    </div>
                </form>
            </Card>
        </Wrapper>
    );
}

const Wrapper = styled.section`
padding : 1rem;

.control-group{
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.appointment-details{
    input, select{
        width: 95%;
    }
}
.appointment-details .grid{
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    justify-items: start;
    gap: 1.5rem;
}

.form-control{
    margin-bottom: 1rem;
}

.appointment-details .form-control{
    margin-bottom: 0.9rem;
}

.appointment-details .user-name{
    color: rgba(0, 0, 0, 0.6);
    font-size: clamp(var(--fz-xxs), 4vw, var(--fz-xs));
    p{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
.details-heading{
    text-decoration: underline;
    text-transform: capitalize;
    margin-bottom: 0.65rem;
    color: var(--clr-primary-1);
    font-size: clamp(var(--fz-xxs), 4vw, var(--fz-xs));
    font-weight: 700;
}

.patient-info{
    grid-column: span 2;
}
.patient-info .form-control{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
}
.patient-info .extra-details{
    grid-template-columns: 1fr 1fr;
    input,select{
        width: 95%;
    }
}

select, input{
    width: 90%;
    height: 2.5rem;
    padding: 0 0.5rem;
    border: 1px solid var(--clr-grey-1);
    border-radius: var(--radius);
    font-size: clamp(var(--fz-xxs), 4vw, var(--fz-xs));
    color: var(--black);
}

select{
    // -webkit-appearance: none;
    // -moz-appearance: none;
    // background: transparent;
    // background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    // background-repeat: no-repeat;
    // background-position-x: 100%;
    // background-position-y: 8px;
    // padding-right: 1.5rem;
    color: var(--clr-grey-5);
}

option{
    color: #000;
}

input:focus{
    outline: none;
    border-color: var(--clr-grey-4);
}

::placeholder{
    color:  var(--clr-grey-5);
}

.btn-container{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
}

.hr{
    grid-column: span 2;
    margin: 0.5rem 0 1rem 0;
    border: none;
    border-top: 1px solid var(--clr-grey-1);
    opacity: 0.3;
}
`;

export default AppointmentForm;