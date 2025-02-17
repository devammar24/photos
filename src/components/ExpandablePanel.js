import { useState } from "react"
import { GoArrowDown, GoArrowLeft } from "react-icons/go"

export const ExpandablePanel = ({ header, children }) => {
    const [expanded, setExpanded] = useState(false)

    const handleClick = () => {
        setExpanded(!expanded)
    }

    return (
        <div className='mb-2 border rounded'>
            <div className="flex p-2 justify-between items-center">
                <div className="flex flex-row items-center justify-between">
                    {header}
                </div>
                <div className="cursor-pointer" onClick={handleClick}>
                    {expanded ? <GoArrowDown /> : <GoArrowLeft />}
                </div>
            </div>
            {
                expanded &&
                <div className="p-2 border-t">
                    {children}
                </div>
            }
        </div>
    )
}