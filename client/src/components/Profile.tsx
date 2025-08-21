import { useState, useEffect } from "react";
import { useAuthStore } from "../stores/useAuthStore"
import { Button } from "./commons/Button";
import { Input } from "./commons/Input";
import { useNavigate } from "react-router-dom";
import { useEditUser } from "../customHooks/useEditUser";
import { type Address, type User } from "../types/types";

const Profile = () => {
    const navigate = useNavigate();
    const user = useAuthStore(state => state.user);
    const { mutate } = useEditUser();
    const edit = useAuthStore(state => state.edit);
    const [editedData, setEditedData] = useState<User>({...user});
    const logout = useAuthStore(state => state.logout);

    useEffect(() => {
        if (user) {
            setEditedData({...user});
        }
    }, [user]);
    
    const handleLogout = () => {
        logout();   
        navigate('/user')
    }
    
    const handleDataUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(editedData, {
            onSuccess: (data) => {
                if (data) {
                    edit(data);
                }
            }
        });
    };
    const updateAddressField = (index: number, field: keyof Address, value: string) => {
        const newAddresses = [...editedData.addresses];
        newAddresses[index] = {
            ...newAddresses[index],
            [field]: value
        };
        setEditedData({...editedData, addresses: newAddresses});
    };

    if(user) return (        
        <>
            <div className="profile">
                <form className="profile-info" onSubmit={handleDataUpdate}>
                    <h2>Hello {editedData.fullName}</h2>
                    <section className="profile-info-details">
                        <section>
                            <label htmlFor="">full name:</label>
                            <Input 
                                type="text" 
                                value={editedData.fullName} 
                                onChange={e => setEditedData({...editedData, fullName: e.target.value})} 
                            />
                        </section>
                        <section>
                            <label htmlFor="">email:</label>
                            <Input 
                                type="text" 
                                value={editedData.email} 
                                onChange={e => setEditedData({...editedData, email: e.target.value})} 
                            />
                        </section>
                    </section>
                    <section className="profile-info-details">
                        <section>
                            <label>Phone:</label>
                            <Input 
                                type="text" 
                                value={editedData.phone} 
                                onChange={e => setEditedData({...editedData, phone: e.target.value})}
                            />
                        </section>
                        <section>
                            <label>Password</label>
                            <Input 
                                type="password" 
                                value={editedData.password || ''} 
                                onChange={e => setEditedData({...editedData, password: e.target.value})}
                                placeholder="Enter new password to change"
                            />
                        </section>
                    </section>
                    <section className="profile-info-details addresses">
                        <h3>Addresses:</h3>
                        {editedData.addresses.map((item: Address, index) => (
                            <section key={index} className="addresses-info">
                                <section className="addresses-info-details">
                                    <section>
                                        <label htmlFor="">country: </label>
                                        <Input 
                                            value={item.country} 
                                            onChange={e => updateAddressField(index, 'country', e.target.value)}
                                        />
                                    </section>
                                    <section>
                                        <label htmlFor="">line1: </label>
                                        <Input 
                                            value={item.line1} 
                                            onChange={e => updateAddressField(index, 'line1', e.target.value)}
                                        />
                                    </section>
                                </section>
                                <section className="addresses-info-details">
                                    <section>
                                        <label htmlFor="">city: </label>
                                        <Input 
                                            value={item.city} 
                                            onChange={e => updateAddressField(index, 'city', e.target.value)}
                                        />
                                    </section>
                                    <section>
                                        <label htmlFor="">postalcode: </label>
                                        <Input 
                                            value={item.postalCode} 
                                            onChange={e => updateAddressField(index, 'postalCode', e.target.value)}
                                        />
                                    </section>
                                </section>
                            </section>
                        ))}
                    </section>
                    <div className="actions-container">
                        <Button onClick={handleLogout}>Logout</Button>
                        <Button type="submit">Save Edited</Button>
                    </div>
                </form>
            </div>
        </>
    )
    else return <h2>You are not logged in</h2>
}

export default Profile;