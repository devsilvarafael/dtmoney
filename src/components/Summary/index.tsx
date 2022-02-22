import { Container } from "./styles"

import inComeImg from '../../assets/income.svg';
import outComeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export const Summary = () => {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={inComeImg} alt="" />
                </header>
                <strong>R$1.000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outComeImg} alt="" />
                </header>
                <strong>R$1.000,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="" />
                </header>
                <strong>R$1.000,00</strong>
            </div>
        </Container>
    )
}