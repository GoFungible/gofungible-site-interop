import JSONTable from '@site/src/components/ui/JSONTable';
import erc from "/static/data/erc.json"

# Overview
---

## The Isolated Chains Problem

As smart contracts running in a blockchain, tokens were designed to be isolated. Despite a token can invoke another token in the same blockchain, a token cannot directly invoke another token from a different blockchain.

<div style={{textAlign: 'center'}}>
	<img src="/img/drawings/interop_direct.svg" width="80%"></img>
</div>
<br/>


### Contracts cannot make HTTP calls



### Contracts cannot digitally sign




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