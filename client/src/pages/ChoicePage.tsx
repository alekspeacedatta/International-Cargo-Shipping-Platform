import { useNavigate } from "react-router-dom";
import { Button } from "../components/commons/Button"; 

const ChoicePage = () => {
  const navigate = useNavigate();

  return (  
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-3xl font-bold mb-8">Welcome! Choose your role:</h1>

      <div className="flex gap-4">
        <Button
          className="bg-dark-500 text-white px-6 py-3 rounded-3xl border-3 border-dark-500 hover:bg-dark-300  transition-all duration-200"
          onClick={() => navigate("/client/register")}
        >
          I am a Client
        </Button>

        <Button className="bg-light-500 text-dark-500 px-6 py-3 rounded-3xl border-3 border-dark-500  transition-all duration-200" onClick={() => navigate("/company")} >
          I am a Company
        </Button>
      </div>
    </div>
  );
};

export default ChoicePage;
