//SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import {ISWTRProxy} from "@swisstronik/sdi-contracts/contracts/interfaces/ISWTRProxy.sol";

contract myProxyChall {

    ISWTRProxy public swtrProxy;

    constructor(address _swtrProxyAddress) {
	swtrProxy = ISWTRProxy(_swtrProxyAddress);
    }

    function listIssuers() external view returns (ISWTRProxy.Issuer[] memory) {
	return swtrProxy.listIssuersRecord(0, swtrProxy.issuerRecordCount());
    }

}
