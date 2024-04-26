// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract flappyToken {
    uint256 public tokenReward;
    address public owner;

    mapping (address => uint256) public balances;

    //evento cuando emite tokens al ganador     
    event TokenWon(address winner, uint256 amount);
    constructor(uint256 _tokenReward) {
        owner = msg.sender;
        tokenReward = _tokenReward;
        
    }
    //FUCION PARA EL JUEGO 
     function pressButton() public {
        balances[msg.sender] += tokenReward;
        emit TokenWon(msg.sender, tokenReward);
    }
    function setTokenReward(uint256 _newTokenReward) public {
        require(msg.sender == owner, "Solo el propietario puede cambiar la recompensa de tokens");
        tokenReward = _newTokenReward;
    }
}