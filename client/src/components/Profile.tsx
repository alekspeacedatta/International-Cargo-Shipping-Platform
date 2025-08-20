import { useAuthStore } from "../stores/useAuthStore"
import Button from "./commons/Button";

const Profile = () => {

    const user = useAuthStore(state => state.user);
    const logout = useAuthStore(state => state.logout);
    if(!user) return (
        <h2>You are not logined</h2>
    )
    else return (
        <>
            <div className="profile">
                <div className="profile-info">
                    <h1>Hello {user.fullName}</h1>
                    <section className="profile-info-details">
                        <h3 style={{textTransform: "lowercase"}}>Your FullName: {user.fullName}</h3>
                        <Button submit={false} buttonText="Edit" />
                    </section>
                    <section className="profile-info-details">
                        <h3>Your Email: {user.email}</h3>
                        <Button submit={false} buttonText="Edit" />
                    </section>
                    <section className="profile-info-details">
                        <section>
                            <h3>Your Phone:</h3>
                            <input type="text" value={user.phone} />
                        </section>
                        <Button submit={false} buttonText="Edit" />
                    </section>
                    <section className="profile-info-details">
                        <h3>Your Addresses: {user.addresses[0].country} - {user.addresses[0].city} - {user.addresses[0].postalCode}</h3>
                        <Button submit={false} buttonText="Edit" />
                    </section>
                    <Button fn={logout} submit={false} buttonText="Log out"/>
                </div>
            </div>

        </>
    )
}
export default Profile