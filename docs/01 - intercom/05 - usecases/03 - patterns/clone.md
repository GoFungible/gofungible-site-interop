---
sidebar_position: 1
---

# Clone Pattern
---

The total supply variable was introduced to prevent issuers make a misuse of supply operations (printing and burning tokens). This was motivated because supply was open to bridges operated externally to tokens. 

If we block external access to the supply we do not need to maintain the totalSupply attribute. Furthermore, we do not need to maintain across networks and it can be centralized in one of the networks where the token acts as master.

<div style={{textAlign: 'center'}}>
	<img src="/img/drawings/patterns_erc20_multichain_pattern_clone.svg" width="80%"></img>
</div>
<br/>