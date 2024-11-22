import { useContext } from "react"
import { useFormContext } from "react-hook-form"
import { CyclesContext } from "../../../../contexts/CyclesContext"
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles"

export const NewCycleForm = () => {

    const { activeCycle } = useContext(CyclesContext)
    const { register } = useFormContext()
    
    return(
        <FormContainer>
            <label htmlFor="task">Vor trabalhar em</label>
            <TaskInput 
                id="task" 
                list="task-seggestions"
                placeholder="Dê um nome ao seu projeto"
                disabled={!!activeCycle}
                {...register("task")}
                />
            
            <datalist id="task-seggestions">
                <option value="React"/>
                <option value="Angular"/>
                <option value="Drawing"/>
            </datalist>

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput 
                type="number" 
                id="minutesAmount" 
                placeholder="00"
                step={5}
                disabled={!!activeCycle}
                {...register("minutesAmount", { valueAsNumber: true })}
                />
            <span>minutos.</span>
        </FormContainer>
    )
}