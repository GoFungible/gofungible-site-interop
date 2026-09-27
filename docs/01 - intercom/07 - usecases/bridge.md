import JSONTable from '@site/src/components/ui/JSONTable';
import erc from "/static/data/erc.json"

# Bridge Pattern
---

1	User deposits 100 USDT into BridgeEth.sol (0x123)	(Ethereum Mainnet) <br/>
2	Contract locks the 100 USDT and emits a Locked event.	(Ethereum Mainnet) <br/>
3	Validator nodes detect the Locked event.(Off-Chain Network) <br/>
4	Validators agree and sign a message: "Prove to Polygon that User can mint 100 USDT." (Off-Chain Network)<br/>
5	One validator submits the signed proof to BridgePoly.sol (0x456). (Polygon Mainnet)<br/>
6	BridgePoly.sol verifies the signatures. If valid, it mints 100 "USDT.e" (wrapped USDT) to the user's Polygon address.	(Polygon Mainnet)<br/>

<div style={{textAlign: 'center'}}>
	<img src="/img/drawings/patterns_bridge.svg" width="80%"></img>
</div>
<br/>


## Bridge related ERCs

<table>
	<tr style={{ textAlignVertical: "center", textAlign: "center", 'color': '#000000', 'backgroundColor': '#f0f0f0' }}>
		<th>ERC</th>
		<th>Title</th>
		<th>Description</th>
	</tr>
	{erc.map((data, index) => {
		if (data.keywords == 'interoperability.bridge') {
			return (
				<tr>
					<td><a href={data.url} target="_blank">{data.erc}</a></td>
					<td>{data.title}</td>
					<td>{data.desc}</td>
				</tr>
			)
		}
	})}
</table>