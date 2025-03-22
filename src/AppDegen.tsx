import { TonConnectButton, useTonAddress } from './library/tonconnect-ui/src';
import './AppDegen.css';

function AppDegen() {
  const userFriendlyAddress = useTonAddress();

  return (
    <div className="flex-container">
      <div className="flex flex-row flex-header justify-between bg-pink-500 border-b-3">
        <div className="my-3 mx-6">
          <span className="text-app text-3xl font-bold text-[#f8f8e3]">Ton Fun</span>
        </div>
        <div className="my-3 mx-6">
          <TonConnectButton className="ton-connect"/>
        </div>
      </div>
      <div className="flex flex-row flex-content bg-[#f8f8e3]">
        <div className="m-auto text-center">
          <span className="text-2xl font-bold text-[#194DA1FF]">
            {
              !userFriendlyAddress ?
                <div>
                  Connect you wallet!
                </div> :
                <div>
                  Your wallet:
                  <br/>
                  {userFriendlyAddress}
                </div>
            }
          </span>
        </div>
      </div>
    </div>
  )
}

export default AppDegen
