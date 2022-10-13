import { useMemo, useState } from "react"
import { useCounter } from "../hooks"

const heavyStuff = (numberIt = 1000) => {
    for (let i = 0; i < numberIt; i++)
        console.log('Ahi vamos !!!')
    return `${numberIt} iteraciones realizadas`
}

export const MemoHook = () => {

    const { counter, incrementar } = useCounter(1000)
    const [show, setshow] = useState(true)

    const memoValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr />
            <h4>{memoValue}</h4>
            <button
                className="btn btn-primary"
                onClick={() => incrementar(1)}>
                +1
            </button>
            <button
                className="btn btn-outline-primary"
                onClick={() => setshow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
