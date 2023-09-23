// MediationContract.sol
pragma solidity ^0.8.0;

contract MediationContract {
    struct Mediation {
        address mediator;
        address partyA;
        address partyB;
        bool isResolved;
    }

    Mediation[] public mediations;

    function createMediation(address _partyA, address _partyB) public {
        require(_partyA != _partyB, "Party A and Party B must be different");
        Mediation memory newMediation = Mediation({
            mediator: msg.sender,
            partyA: _partyA,
            partyB: _partyB,
            isResolved: false
        });
        mediations.push(newMediation);
    }

    function resolveMediation(uint256 _mediationId) public {
        require(_mediationId < mediations.length, "Invalid mediation ID");
        Mediation storage mediation = mediations[_mediationId];
        require(msg.sender == mediation.mediator, "Only the mediator can resolve");
        mediation.isResolved = true;
    }
}

