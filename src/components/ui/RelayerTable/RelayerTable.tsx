import React, { useEffect, useState } from 'react';
import TanStackTable from '../../basic/TanStackTable/TanStackTable';

// 1. Define the interface for your parameters (props)
interface RelayerTableProps {
  filter?: (info) => boolean;
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
		/*{
      accessorKey: 'type',
      header: 'Type',
			visi
    },*/
		{
      accessorKey: 'model',
      header: 'Trust Model',
    },
    {
      accessorKey: 'name',
      header: 'Name (URL)',
			cell: (info: any) => {
				const name = info.getValue();
				const url = info.row.original.infoURL;

				return (
					<a href={url} target='_blank'><strong>{name}</strong></a>
				);
			},
    },

  ];

  return (
    <div>
      <TanStackTable
        data={data.filter(item => params.filter(item))}
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