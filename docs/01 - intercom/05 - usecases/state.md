import JSONTable from '@site/src/components/ui/JSONTable';
import erc from "/static/data/erc.json"

# Multichain ERC-20 State
---

## ERC-20 State

The total supply is fixed and cannot be increased for utility tokens.

<div style={{textAlign: 'center'}}>
	<img src="/img/drawings/patterns_erc20.svg" width="30%"></img>
</div>
<br/>

## Multichain ERC-20 State

A multichain token has token instances on multiple chains. Therefore, every chain does not maintain the complete supply. To keep track of this a new supply state must be stored.

The total supply is also fixed and cannot be increased for utility tokens. The issuer can move supply to other chains, e.g. to create new pools, if he is a token holder. The minimum supply needed to move to other chains is the one des not create spillage on exchanges (make calculation).

<br/>
<div style={{textAlign: 'center'}}>
	<img src="/img/drawings/patterns_erc20_multichain.svg" width="80%"></img>
</div>
<br/>

Questions:

* Networks:

  * there are 3000+ networks so every issuer will decide his own set

  * needed a especial facet to track the actual networks covered by the issuer

  * if we know all networks covered by the issuer, we do not need to store total aggregated supply, it can be calculated off-chain. Maybe is good for security.

  * expandToNetwork
	  
		* clone current diamond with no supply

		* guarantee facet version

		* withdraw supply from current network

		* add intended supply to new network
		
  * expandNetwork

		* withdraw supply from current network

		* add intended supply to new network

  * whichdrawFromNetwork

* Registry:

* Contract:

* Factory:

* Functions:

  * how to verify that all networks have the same contract functions?


## State related ERCs

<table>
	<tr style={{ textAlignVertical: "center", textAlign: "center", 'color': '#000000', 'backgroundColor': '#f0f0f0' }}>
		<th>ERC</th>
		<th>Title</th>
		<th>Description</th>
	</tr>
	{erc.map((data, index) => {
		if (data.keywords == 'interoperability.state') {
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