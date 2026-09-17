---
sidebar_position: 1
---

# Agents
---

import JSONTable from '@site/src/components/ui/JSONTable';
import ecosystem from "/static/data/ecosystem_dlt_interop.json"

# Landscape

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

# Ecosystem

  <table>
		<tr style={{ textAlignVertical: "center", textAlign: "center", 'color': '#000000', 'backgroundColor': '#f0f0f0' }}>
			<th>Name</th>
			<th>BuiltOn</th>
			<th>Consensus</th>
			<th>VM</th>
		</tr>
	
		{ecosystem.map((data, index) => {
			if (!data.name) {
				return (
					<tr style={{ textAlignVertical: "center",textAlign: "center", 'backgroundColor': '#fff7d9' }}>
						<th colspan='5'>{data.type}</th>
					</tr>
				)
			} else {
				return (
					<tr>
						<td><a href={data.url} target='_blank'>{data.name}</a></td>
						<td>{data.builtOn}</td>
						<td nowrap="nowrap">{data.consensus}</td>
						<td nowrap="nowrap">{data.vm}</td>
					</tr>
				)
			}
		})}
    
  </table>