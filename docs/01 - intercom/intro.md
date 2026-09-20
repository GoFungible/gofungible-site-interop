import JSONTable from '@site/src/components/ui/JSONTable';
import erc from "/static/data/erc.json"

# Cross-chain Communicationz
---

## The problem of Direct Invokations

As smart contracts running in a blockchain, tokens were designed to be isolated. Despite a token can invoke another token in the same blockchain, a token cannot directly invoke another token from a different blockchain.

<div style={{textAlign: 'center'}}>
	<img src="/img/drawings/interop_direct.svg" width="80%"></img>
</div>
<br/>


### Contracts cannot make HTTP calls



### Contracts cannot digitally sign



## Landscape

<div style={{overflowX : 'auto'}}>
	<table style={{textAlign: 'center'}}>
		<tr>
			<th>Interoperability Tools</th>
			<th rowSpan="7"><h1>+</h1></th>
			<th>Interoperability Patterns</th>
			<th rowSpan="7"><h1>=</h1></th>
			<th>Interoperability Services</th>
		</tr>
		<tr>
			<td>Oracles</td>
			<td>BoB</td>
			<td>Multichain Smart Contracts</td>
		</tr>
		<tr>
			<td>Relayers</td>
			<td>Notary Networks</td>
			<td>Bridges</td>
		</tr>
		<tr>
			<td>Routers</td>
			<td>Validation Networks</td>
			<td>Native Token Transfers</td>
		</tr>
		<tr>
			<td>Messages</td>
			<td>L1 Interoperability Layers</td>
			<td>Atomic Swaps</td>
		</tr>
		<tr>
			<td>Intends</td>
			<td>L2 Interoperability Layers</td>
			<td></td>
		</tr>
		<tr>
			<td></td>
			<td>Liquidity Networks</td>
			<td></td>
		</tr>
	</table>
</div>
<br/>



## Direct Invocations related ERCs

<table>
	<tr style={{ textAlignVertical: "center", textAlign: "center", 'color': '#000000', 'backgroundColor': '#f0f0f0' }}>
		<th>ERC</th>
		<th>Title</th>
		<th>Description</th>
	</tr>
	{erc.map((data, index) => {
		if (data.keywords == 'interoperability.invocations') {
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