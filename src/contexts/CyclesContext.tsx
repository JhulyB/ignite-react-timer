import { differenceInSeconds } from "date-fns";
import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { addNewCycleAction, interruptCurrentCycleAction, markCurrentCycleAsFineshedAction } from "../reducers/cycles/actions";
import { Cycle, cyclesReducer } from "../reducers/cycles/reducer";

interface CreateCycleData{
    task: string,
    minutesAmount: number
}

interface CyclesContextData{
    cycles: Cycle[]
    activeCycle: Cycle | undefined
    activeCycleId: string | null
    amountSecondsPassed: number
    markCurrentCycleAsFineshed: () => void
    setSecondsPassed: (seconds: number) => void
    createNewCycle: (data: CreateCycleData) => void
    interruptCurrentCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextData)

interface CyclesContextProviderProps{
    children: ReactNode
}

export function CyclesContextProvider({ children }: CyclesContextProviderProps ) {
    const [cyclesState, dispatch ] = useReducer( 
        cyclesReducer,
        {
            cycles: [],
            activeCycleId: null
        }, 
        (initialState) => {
            const storagedStateAsJSON = localStorage.getItem('@ignite-timer:cycles-state-1.0.0')

            if (storagedStateAsJSON) {
                return JSON.parse(storagedStateAsJSON)
            }

            return initialState
        }
    )
    
    const { cycles, activeCycleId } = cyclesState
    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

    const [ amountSecondsPassed, setAmountSecondsPassed ] = useState(() => {
        if(activeCycle){
            return differenceInSeconds(
                new Date(), 
                new Date(activeCycle.startDate)
            )
        }

        return 0
    })

    useEffect(() => {
        const stateJSON = JSON.stringify(cyclesState)

        localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
    },[cyclesState])
    


    function markCurrentCycleAsFineshed() {
        dispatch(markCurrentCycleAsFineshedAction())
    }

    function setSecondsPassed(seconds: number) {
        setAmountSecondsPassed(seconds)
    }

    function createNewCycle(data: CreateCycleData) {
        const  id =  new Date().getTime().toString()
        
        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date()
        }

        dispatch(addNewCycleAction(newCycle))

        setAmountSecondsPassed(0)

    }

    function interruptCurrentCycle() {
        dispatch(interruptCurrentCycleAction())
    }

    return(
        <CyclesContext.Provider 
            value={{ 
                cycles,
                activeCycle, 
                activeCycleId, 
                amountSecondsPassed,
                markCurrentCycleAsFineshed,
                setSecondsPassed,
                createNewCycle,
                interruptCurrentCycle
                }}
            >
            {children}
        </CyclesContext.Provider>

    )
}