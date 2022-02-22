import { Summary } from "../Summary"
import { TransitionTable } from "../TransitionTable"
import { Container } from "./styles"

export const Dashboard = () => {
    return (
        <Container>
            <Summary />
            <TransitionTable />
        </Container>
    )
}