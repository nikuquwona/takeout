// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Wallet {
    mapping (address => uint) private balances;

    event Deposit(address indexed sender, uint amount);
    event Withdrawal(address indexed receiver, uint amount);

    function deposit() public payable {
        require(msg.value > 0, "Deposit amount must be greater than zero");
        balances[msg.sender] += msg.value;

        emit Deposit(msg.sender, msg.value);
    }

    function withdraw(uint _amount) public {
        require(balances[msg.sender] >= _amount, "Insufficient balance");

        balances[msg.sender] -= _amount;
        payable(msg.sender).transfer(_amount);

        emit Withdrawal(msg.sender, _amount);
    }

    function balanceOf(address _account) public view returns (uint) {
        return balances[_account];
    }
}
