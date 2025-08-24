import { useState } from "react";
import { Button } from "./commons/Button";
import { Input } from "./commons/Input";
import { useUIState } from "../stores/useUIStore";

const ParcelRequest = () => {
  const [is, setIs] = useState(true);
  const [profile, setProfile] = useState(false);
  const slide = useUIState(state => state.slide);

  return (
    <div className="min-h-screen flex justify-center items-start bg-light-50 dark:bg-dark-500 p-6">
      <div className="bg-white dark:bg-dark-500 shadow-xl rounded-2xl p-6 w-full max-w-5xl h-[90vh] overflow-auto">
        
        {/* Top Buttons and Profile Icon */}
        <div className="flex justify-between items-center mb-6">
      <div className="flex gap-2">
  <Button
    className={`px-6 py-2 rounded-3xl border-2 transition-all duration-200 
      ${is 
        ? 'bg-dark-500 border-primary text-white'  // active button
        : 'bg-transparent border-primary text-dark-500 dark:text-light-50'}`} // inactive button
    onClick={() => setIs(true)}
  >
    Make Request
  </Button>
  <Button
    className={`px-6 py-2 rounded-3xl border-2 transition-all duration-200 
      ${!is 
        ? 'bg-dark-500 border-primary text-white'  // active button
        : 'bg-transparent border-primary text-dark-500 dark:text-light-50'}`} // inactive button
    onClick={() => setIs(false)}
  >
    View All Requests
  </Button>
</div>
          <i
            onClick={() => { slide(); setProfile(prev => !prev); }}
            className="fa-solid fa-circle-user text-primary text-2xl cursor-pointer"
          />
        </div>

        {/* Form */}
        {is ? (
          <>
            <h2 className="text-2xl font-bold border-b-2 border-primary pb-2 mb-6">
              Create Parcel Request
            </h2>

            <form className="flex flex-col gap-6">
              
              {/* Parcel Details */}
              <section className="flex flex-col gap-3">
                <h3 className="font-semibold">Enter Parcel Details</h3>
                <div className="flex flex-wrap gap-4">
                  
                  <div className="flex flex-col gap-1">
                    <label>Weight:</label>
                    <Input placeholder="Enter your parcel weight" className="w-32 px-2 py-1 border border-dark-500 rounded-lg" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label>Dimensions:</label>
                    <div className="flex gap-2">
                      <Input placeholder="Length cm" className="w-32 px-2 py-1 border border-dark-500 rounded-lg" />
                      <Input placeholder="Width cm" className="w-32 px-2 py-1 border border-dark-500 rounded-lg" />
                      <Input placeholder="Height cm" className="w-32 px-2 py-1 border border-dark-500 rounded-lg" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label>Parcel Type:</label>
                    <select className="w-32 px-2 py-1 border border-dark-500 rounded-lg">
                      <option value="goods">Goods</option>
                      <option value="docs">Docs</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label>Declared Value:</label>
                    <Input placeholder="Enter declared value" className="w-28 px-2 py-1 border border-dark-500 rounded-lg" />
                  </div>
                </div>
              </section>

              {/* Parcel Route */}
              <section className="flex flex-col gap-3">
                <h3 className="font-semibold">Enter Parcel Route</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="flex flex-col gap-1">
                    <label>Origin Country/City:</label>
                    <Input placeholder="Country/City" className="w-52 px-2 py-1 border border-dark-500 rounded-lg" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label>Destination Country/City:</label>
                    <Input placeholder="Country/City" className="w-52 px-2 py-1 border border-dark-500 rounded-lg" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label>Pick Up Address:</label>
                    <Input placeholder="Enter pick up address" className="w-52 px-2 py-1 border border-dark-500 rounded-lg" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label>Delivery Address:</label>
                    <Input placeholder="Enter delivery address" className="w-52 px-2 py-1 border border-dark-500 rounded-lg" />
                  </div>
                </div>
              </section>

              {/* Shipping Type */}
              <section className="flex flex-col gap-2">
                <label>Enter Shipping Type:</label>
                <select className="w-32 px-2 py-1 border border-dark-500 rounded-lg">
                  <option value="sea">Sea</option>
                  <option value="railway">Railway</option>
                  <option value="road">Road</option>
                  <option value="air">Air</option>
                </select>
              </section>

              {/* Price */}
              <section>
                <h2 className="text-xl font-semibold mt-2">Price Estimate: 312$</h2>
              </section>

              {/* Submit Button */}
              <Button type="submit" className="w-36 bg-primary text-white px-4 py-2 rounded-3xl hover:bg-primary/80 hover:-translate-y-1 transition-all duration-200">
                Submit
              </Button>
            </form>
          </>
        ) : (
          <h2 className="text-center text-dark-500 dark:text-white mt-6">You don’t have any requested parcel</h2>
        )}
      </div>
    </div>
  );
};

export default ParcelRequest;
