import { useState } from "react"
import { Button } from "./commons/Button"
import { Input } from "./commons/Input"
import { useUIState } from "../stores/useUIStore"

const ParcealRequest = () => {
    const [ is, setIs ] = useState(true);
    const [ profile, setProfile ] = useState(false);
    const slide = useUIState(state => state.slide);
    return (
        <div className="parcel-request" >
            <div className="parcel-request-content" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <section style={{ display: 'flex', gap: '20px', justifyContent: 'space-between', alignItems: 'center' }}>
                <section>
                    <Button  onClick={() => { setIs(true) }} style={{ backgroundColor: is ? '#a594f9' : 'transparent', color: is ? 'white' : 'black' }}>Make request</Button>
                    <Button  onClick={() => { setIs(false) }} style={{ backgroundColor: !is ? '#a594f9' : 'transparent', color: !is ? 'white' : 'black' }}>view all requests</Button>
                </section>
                <i onClick={() => { slide(); setProfile((prev) => prev = !prev) }} style={{ color: '#a594f9', fontSize: '25px', cursor: 'pointer' }} className="fa-solid fa-circle-user"></i>
            </section>
            { is && (
                <>
                    <h2 style={{ borderBottom: '2px solid #a594f9', paddingBottom: '10px' }}>Create Parcel requests</h2>
                    <form action="" style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                        <section style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <h3>Enter Parcel Details</h3>
                            <section style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px'}}>
                                    <label htmlFor="">Weight:</label>
                                    <Input style={{ width: '13vw', padding: '4px 5px' }} type="text"  />
                                </section>
                                <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px'}}>
                                    <label htmlFor="">Demension:</label>
                                    <Input style={{ width: '13vw', padding: '4px 5px' }} type="text"  />
                                </section>
                                <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px'}}>
                                    <label htmlFor="">Parcel Type:</label>
                                    <select name="" id="" style={{ width: '13vw', padding: '4px 5px', border: '2px solid #dadddf;', borderRadius: '3px'}}>
                                        <option value="goods">Goods</option>
                                        <option value="docs">Docs</option>
                                    </select>
                                </section>
                                <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px'}}>
                                    <label htmlFor="">Decleared Value:</label>
                                    <Input style={{ width: '10vw', padding: '4px 5px' }} type="text"  />
                                </section>
                            </section>
                        </section>
                        <section style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <h3>Enter Parcel Route</h3>
                            <section style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', maxWidth: '70%' }}>
                                <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px'}}>
                                    <label htmlFor="">Origin Country/City:</label>
                                    <Input style={{ width: '20vw', padding: '4px 5px' }} type="text"  />
                                </section>
                                <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px'}}>
                                    <label htmlFor="">Destenation Country/city:</label>
                                    <Input style={{ width: '20vw', padding: '4px 5px' }} type="text"  />
                                </section>
                                <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px'}}>
                                    <label htmlFor="">Pick up address:</label>
                                    <Input style={{ width: '20vw', padding: '4px 5px' }} type="text" />
                                </section>
                                <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px'}}>
                                    <label htmlFor="">Delivery address</label>
                                    <Input style={{ width: '20vw', padding: '4px 5px' }} type="text"  />
                                </section>
                            </section>
                        </section>
                        <section style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '15px'}}>
                            <section style={{ display: 'flex', gap: '10px' }}>
                                <label htmlFor="">Enter Shipping Type</label>
                                <select name="" id="" style={{ width: '13vw', padding: '4px 5px', borderColor: '#dadddf', borderRadius: '3px' }}>
                                    <option value="">sea</option>
                                    <option value="">railway</option>
                                    <option value="">road</option>
                                    <option value="">air</option>
                                </select>
                            </section>
                        </section>
                        <Button type="submit" style={{ width: '12vw' }}>Submit</Button>
                    </form>
                </>
            ) }
            </div>
        </div>
    )
}
export default ParcealRequest