import React, { useEffect, useState } from 'react';
import TanStackTable from '../../basic/TanStackTable/TanStackTable';

// 1. Define the interface for your parameters (props)
interface RelayerTableProps {
  filter: (info:any) => boolean;
}

const RelayerTable: React.FC<RelayerTableProps> = (params: RelayerTableProps) => {

	const [data, setData] = useState([]);

	useEffect(() => {
		 let url = "https://raw.githubusercontent.com/GoFungible/relayer-list/refs/heads/main/static/data/relayers.json";
		 fetch(url)
				 .then(res => res.json())
				 .then(data => setData(data))
		 }, []);

  const columns = [
		{
      accessorKey: 'type',
      header: 'Type',
    },
		{
      accessorKey: 'trust',
      header: 'Trust Model',
    },
    {
      accessorKey: 'name',
      header: 'Name (URL)',
			cell: (info: any) => {
				const name = info.getValue();
				const url = info.row.original.url;

				return (
					<a href={url} target='_blank'><strong>{name}</strong></a>
				);
			},
    },
		{
      accessorKey: 'builtOn',
      header: 'Built On',
    },
		{
      accessorKey: 'code',
      header: 'Code',
    },
	];

  return (
    <div>
      <TanStackTable
        data={params.filter ? data.filter(item => params.filter(item)) : data}
        columns={columns}
        showPagination={true}
        showGlobalFilter={true}
        defaultPageSize={50}
				searchText='Search for EVM-based blockchain...'
      />
    </div>
  );
};

export default RelayerTable;