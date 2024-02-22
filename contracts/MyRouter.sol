// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IRouter {
    function swapExactTokensForTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);

    function getAmountsOut(uint amountIn, address[] memory path) external view returns (uint[] memory amounts);
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IDEXRouter {
    function swapExactTokensForTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);

    function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts);
}

contract MyRouter {
    address private immutable dexRouter;
    IDEXRouter public immutable dexRouterInterface;

    constructor(address _dexRouter) {
        require(_dexRouter != address(0), "DEX Router address cannot be 0");
        dexRouter = _dexRouter;
        dexRouterInterface = IDEXRouter(_dexRouter);
    }

    function swapExactTokensForTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts) {
        // Forward the call to the actual DEX router
        return dexRouterInterface.swapExactTokensForTokens(amountIn, amountOutMin, path, to, deadline);
    }

    function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts) {
        // Forward the call to the actual DEX router
        return dexRouterInterface.getAmountsOut(amountIn, path);
    }
}