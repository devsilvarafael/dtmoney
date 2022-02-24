import { useContext } from "react"
import { TransactionContext } from "../TransactionContext"

export const useTransaction = () => {
    const value = useContext(TransactionContext)

    return value;
}