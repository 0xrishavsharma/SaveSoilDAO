import {useAddress, useMetamask} from "@thirdweb-dev/react";

const App = () => {
  const address = useAddress();
  const connectToMetamask = useMetamask();
  console.log("address:", address);

  if(!address){
    return(
      <div className="landing">
        <h1>Welcome to SaveSoilDao</h1>
        <button onClick={connectToMetamask}>
          Connect Wallet
        </button>
      </div>
    )
  }
  
  return (
    <div className="landing">
          <h1>Wallet Connected :)</h1>
    </div>
  );
};

export default App;
