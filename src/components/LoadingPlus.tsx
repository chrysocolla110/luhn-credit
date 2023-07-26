import { ReactElement, useEffect, useState } from "react"
import { LoadingSpinner } from './LoadingSpinner'
interface props {
    children?: React.ReactElement | ReactElement[]
}

export const LoadingPlus = ({children}: props) => {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setVisible(false);
        }, 400)
    }, [])
    return visible?<LoadingSpinner/>:<>{children}</>;
}