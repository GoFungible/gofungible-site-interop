import JSONTable from '@site/src/components/ui/JSONTable';
import ecosystem from "/static/data/ecosystem_dlt_interop.json"

# Chain To Chain
---

Interchain solution aim to enable crosschain interoperability by connecting the blockchains natively which each other.

## BoB

<table>
	<tr style={{ textAlignVertical: "center", textAlign: "center", 'color': '#000000', 'backgroundColor': '#f0f0f0' }}>
		<th>Name</th>
		<th>BuiltOn</th>
		<th>Consensus</th>
		<th>VM</th>
	</tr>

	{ecosystem.map((data, index) => {
		if (data.type === 'BoB') {
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

## Notary Schemes

<table>
	<tr style={{ textAlignVertical: "center", textAlign: "center", 'color': '#000000', 'backgroundColor': '#f0f0f0' }}>
		<th>Name</th>
		<th>BuiltOn</th>
		<th>Consensus</th>
		<th>VM</th>
	</tr>

	{ecosystem.map((data, index) => {
		if (data.type === 'NN') {
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

## Layer0

<table>
	<tr style={{ textAlignVertical: "center", textAlign: "center", 'color': '#000000', 'backgroundColor': '#f0f0f0' }}>
		<th>Name</th>
		<th>BuiltOn</th>
		<th>Consensus</th>
		<th>VM</th>
	</tr>

	{ecosystem.map((data, index) => {
		if (data.type === 'L0') {
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

