//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import {ISWTRProxy} from "@swisstronik/sdi-contracts/contracts/interfaces/ISWTRProxy.sol";

contract myProxyChall {

    ISWTRProxy public swtrProxy;

    constructor(address _swtrProxyAddress) {
	swtrProxy = ISWTRProxy(_swtrProxyAddress); // Cast address to interface
    }

    function getIssuers() external view returns (address[] memory) {
        return swtrProxy.getLatestIssuers();
    }

}
