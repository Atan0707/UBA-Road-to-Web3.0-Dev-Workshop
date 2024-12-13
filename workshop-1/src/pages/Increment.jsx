import React from 'react'
import { ethers } from 'ethers'
import Increment from './Increment.json'
import { useState } from 'react'

const IncrementComponent = () => {

    const [number, setNumber ] = useState();
    const [account, setAccount] = useState(null);

    const contractABI = Increment.abi;
    const contractAddress = "0xFeB24f50eC7fAdC4F4e691c4f2c484d165591CdE"

    const connectWallet = async () => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setAccount(accounts[0]);
        } else {
            alert("Please install MetaMask!");
        }
    }

    const handleClick = async () => {
        const provider = new ethers.BrowserProvider(); //core 
        const signer = await provider.getSigner(); //core
        const contractInstance = new ethers.Contract(contractAddress, contractABI, signer)

        const IncrementTheValue = contractInstance.increment();

        const getValue = contractInstance.getCount();
        setNumber(getValue);
    }

  return (
    <div>
        <button onClick={connectWallet}>Connect Wallet</button>
        {account && <p>Connected Account: {account}</p>}
        <button onClick={handleClick}>Increment</button>
        <p>{number}</p>
    </div>
  )
}

export default IncrementComponent