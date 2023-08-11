import { useSelector } from "react-redux";
import styled from "styled-components";
import { Card, SearchUser, Users } from ".";

const Appointments = () => {
    const { currentUser } = useSelector(state => state.user);
    return (
        <Wrapper>
            <Card>
                <SearchUser />
                <Users />
                {
                    currentUser &&
                    <div className="profile-details">
                        <p className="details-heading">profile details</p>
                        <div className="img-container">
                            <img src={currentUser.image} alt={currentUser.name} className="user-img" />
                            <p>{currentUser.name}</p>
                        </div>
                        <div className="user-info">
                            <p>Location: <span>NA</span></p>
                            <p>Contact: <span>{currentUser.contact}</span></p>
                            <p>Email Id: <span>NA</span></p>
                        </div>
                    </div>
                }
            </Card>
        </Wrapper>
    );
}

const Wrapper = styled.section`
padding: 1rem;
margin: 0 auto;
.profile-details{
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    color: var(--clr-grey-5);
    column-gap: 1rem;
}
.profile-details .user-img{
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
}

.profile-details .img-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
}

.profile-details p{
    font-size: var(--fz-xxs);
}

.profile-details .details-heading{
    text-decoration: underline;
    text-transform: capitalize;
    margin-bottom: 0.65rem;
    color: var(--clr-primary-1);
    font-size: clamp(var(--fz-xxs), 4vw, var(--fz-xs));
    font-weight: 700;
    grid-column: span 2;
}

.profile-details .user-info{
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    gap: 1rem;
}
.user-info p{
    display: flex;
    gap: 0.75rem;
}
`;

export default Appointments;