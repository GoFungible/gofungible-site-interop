import JSONTable from '@site/src/components/ui/JSONTable';
import erc from "/static/data/erc.json"

# Standards
---

## Messaging related ERCs

<table>
	<tr style={{ textAlignVertical: "center", textAlign: "center", 'color': '#000000', 'backgroundColor': '#f0f0f0' }}>
		<th>ERC</th>
		<th>Title</th>
		<th>Description</th>
	</tr>
	{erc.map((data, index) => {
		if (data.keywords == 'interoperability.messaging') {
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

## Execution related ERCs

<table>
	<tr style={{ textAlignVertical: "center", textAlign: "center", 'color': '#000000', 'backgroundColor': '#f0f0f0' }}>
		<th>ERC</th>
		<th>Title</th>
		<th>Description</th>
	</tr>
	{erc.map((data, index) => {
		if (data.keywords == 'interoperability.execution') {
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
