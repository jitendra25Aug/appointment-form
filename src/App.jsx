import styled from "styled-components";
import { AppointmentForm, Appointments, Sidebar } from "./components";

const App = ()=>{
  return (
    <Wrapper>
      <Sidebar />
      <Appointments />
      <AppointmentForm />
    </Wrapper>
  );
}

const Wrapper = styled.main`
display: grid;
grid-template-columns: 400px 1fr;
gap: 0.65rem;

@media (max-width: 500px) {
  grid-template-columns: 1fr;
}
`;

export default App;