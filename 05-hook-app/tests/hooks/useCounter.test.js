import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { useCounter } from "../../src/hooks/useCounter"

describe('Pruebas en useCounter', () => {

    test('Debe retornar los valores por defecto', () => {
        const { result } = renderHook(() => useCounter())
        const { counter, decrementar, incrementar, reset } = result.current

        expect(counter).toBe(10)
        expect(decrementar).toEqual(expect.any(Function))
        expect(incrementar).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))
    })

    test('Debe generar el counter con el valor de 100', () => {
        const { result } = renderHook(() => useCounter(100))
        const { counter } = result.current

        expect(counter).toBe(100)
    })

    test('Debe incrementar el contador', () => {
        const { result } = renderHook(() => useCounter(100))
        const { incrementar } = result.current

        act(() => incrementar())

        expect(result.current.counter).toBe(101)
    })

    test('Debe decrementar el contador', () => {
        const { result } = renderHook(() => useCounter(100))
        const { decrementar } = result.current

        act(() => decrementar())

        expect(result.current.counter).toBe(99)
    })

    test('Debe resetear el contador', () => {
        const { result } = renderHook(() => useCounter(100))
        const { decrementar, reset } = result.current

        act(() => {
            decrementar(52)
            reset()
        })

        expect(result.current.counter).toBe(100)
    })
})