import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';

import inComeImg from '../../assets/income.svg';
import outComeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { useState } from 'react';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const NewTransactionModal = ({isOpen, onRequestClose}:NewTransactionModalProps) => {
    const [type, setType] = useState('deposit');

    return (
    <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose} 
        overlayClassName="react-modal-overlay" 
        className="react-modal-content"
    >
        <button 
            type="button" 
            onClick={onRequestClose} 
            className="react-modal-close"
        >
            <img src={closeImg} alt="Fechar modal" />
        </button>   
        <Container>
            <h2>Cadastrar transação</h2>

            <input type="text" placeholder="Título" />

            <input type="number" placeholder="Valor" />


            <TransactionTypeContainer>
                <RadioBox
                    type="button"
                    onClick={() => {setType('deposit')}}
                    isActive={type === 'deposit'}
                    activeColor="green"
                >
                    <img src={inComeImg} alt="Botão Entrada" />
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox
                    type="button" 
                    onClick={() => {setType('withdraw')}}
                    isActive={type === 'withdraw'}
                    activeColor="red"
                >
                    <img src={outComeImg} alt="Botão Saída" />
                    <span>Saída</span>
                </RadioBox>
            </TransactionTypeContainer>

            <input type="text" placeholder='Categoria' />

            <button className="register" type="submit">Cadastrar</button>
        </Container>
    </Modal>
    )
}