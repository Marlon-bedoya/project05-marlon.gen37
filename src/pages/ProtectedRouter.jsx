import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRouter = () => {
 
 const trainer = useSelector(srore => srore.trainer)

if (trainer.length >= 3) {
    return <Outlet />
} else {
    return <Navigate to ='/'/>
}


}

export default ProtectedRouter