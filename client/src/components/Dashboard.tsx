import ParcealRequest from "./ParcealRequest"
import Profile from "./Profile"

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard-content">
                <ParcealRequest/>
                <Profile/>
            </div>
        </div>
    )
}
export default Dashboard