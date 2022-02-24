import Modal from 'react-modal';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

import inComeImg from '../../assets/income.svg';
import outComeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { useTransaction } from '../../hooks/useTransaction';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const NewTransactionModal = ({isOpen, onRequestClose}:NewTransactionModalProps) => {
    const { createTransaction } = useTransaction();

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    async function handleCreateNewTransaction(event:FormEvent) {
        event.preventDefault();

        await createTransaction ({
            title,
            amount,
            category,
            type
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        
        onRequestClose();
    }

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
        <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar transação</h2>

            <input 
                type="text" 
                placeholder="Título" 
                value={title} 
                onChange={event => setTitle(event.target.value)} 
            />

            <input 
                type="number" 
                placeholder="Valor" 
                value={amount} 
                onChange={event => setAmount(Number(event.target.value))}
            />


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

            <input 
                type="text" 
                placeholder='Categoria' 
                value={category} 
                onChange={event => setCategory(event.target.value)}
            />

            <button className="register" type="submit">Cadastrar</button>
        </Container>
    </Modal>
    )
}