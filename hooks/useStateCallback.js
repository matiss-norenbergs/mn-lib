import { useCallback, useEffect, useRef, useState } from "react"

const useStateCallback = (initValue) => {
    const [state, setState] = useState(initValue)

    const callbackFunction = useRef(null)

    const setStateCallback = useCallback((newValue, callback) => {
        callbackFunction.current = callback
        setState(newValue)
    }, [])

    useEffect(() => {
        if (callbackFunction.current) {
            callbackFunction.current(state)
            callbackFunction.current = null
        }
    }, [state])

    return [state, setStateCallback]
}

export default useStateCallback