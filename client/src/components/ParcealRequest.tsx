import { useState } from "react"
import { Button } from "./commons/Button"
import { Input } from "./commons/Input"

const ParcealRequest = () => {
    const [ is, setIs ] = useState(true);
    return (
        <div className="parcel-request">
            <div className="parcel-request-content" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <section style={{ display: 'flex', gap: '20px' }}>
                <Button style={{ backgroundColor: 'transparent', color: 'black' }} onClick={() => { setIs(true) }}>Make request</Button>
                <Button style={{ backgroundColor: 'transparent', color: 'black' }} onClick={() => { setIs(false) }} >view all requests</Button>
            </section>
            { is && (
                <>
                    <h2 style={{ borderBottom: '2px solid #219ebc', paddingBottom: '10px' }}>Create Parcel requests</h2>
                    <form action="" style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                        <section style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <h3>Enter Parcel Details</h3>
                            <section style={{ display: 'flex', gap: '10px' }}>
                                <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px'}}>
                                    <label htmlFor="">Weight:</label>
                                    <Input style={{ width: '10vw', padding: '4px 5px' }} type="text"  />
                                </section>
                                <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px'}}>
                                    <label htmlFor="">Demension:</label>
                                    <Input style={{ width: '10vw', padding: '4px 5px' }} type="text"  />
                                </section>
                                <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px'}}>
                                    <label htmlFor="">Parcel Type:</label>
                                    <select name="" id="">
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
                            <section style={{ display: 'flex', gap: '10px' }}>
                                <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px'}}>
                                    <label htmlFor="">Origin Country/City:</label>
                                    <Input style={{ width: '10vw', padding: '4px 5px' }} type="text"  />
                                </section>
                                <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px'}}>
                                    <label htmlFor="">Destenation Country/city:</label>
                                    <Input style={{ width: '10vw', padding: '4px 5px' }} type="text"  />
                                </section>
                                <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px'}}>
                                    <label htmlFor="">Pick up address:</label>
                                    <Input style={{ width: '10vw', padding: '4px 5px' }} type="text" />
                                </section>
                                <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px'}}>
                                    <label htmlFor="">Delivery address</label>
                                    <Input style={{ width: '10vw', padding: '4px 5px' }} type="text"  />
                                </section>
                            </section>
                        </section>
                        <section style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '15px'}}>
                            <h3>Enter Parcel Route</h3>
                            <section style={{ display: 'flex', gap: '10px' }}>
                                <label htmlFor="">Enter Shipping Type</label>
                                <select name="" id="">
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