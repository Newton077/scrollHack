import React, { useState } from 'react';
import { ethers } from 'ethers';

const WalletConnect = () => {
    const [userAddress, setUserAddress] = useState("");

    const connectWalletHandler = async () => {
        if (window.ethereum) {
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                // Solicita al usuario que conecte su cuenta
                const accounts = await provider.send("eth_requestAccounts", []);
                console.log('Connected', accounts[0]);
                setUserAddress(accounts[0]);
            } catch (err) {
                console.error(err);
            }
        } else {
            console.log('Install MetaMask');
        }
    };

    return (
        <div>
            <button onClick={connectWalletHandler}>Connect Wallet</button>
            {userAddress && <p>Connected: {userAddress}</p>}
        </div>
    );
};

export default WalletConnect;
