pragma solidity 0.7.3;

contract RocketCrafting {

    string private gamePlayName;
    string private gameVersion;

    /**
     * String param setter
     */
    function setInfo(string memory _gamePlayName) public {
        gamePlayName = _gamePlayName;
    }
    
    /**
     * String param getter
     */
    function getInfo() public view returns (string memory) {
        return gamePlayName;
    }

    /**
     * String param getter
     */
    function getVersion() public view returns (string memory) {
        return gameVersion;
    }

}
