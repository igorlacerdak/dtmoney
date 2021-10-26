import { Summary } from "../Summary";
import { TranstacionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
    return(
        <Container>
            <Summary/>
            <TranstacionsTable/>
        </Container>
    );
}

