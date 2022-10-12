import { motion } from 'framer-motion';
import sortBy from 'lodash/sortBy';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';

import companies from '../../data/Companies.json';

const DataTableComponent = () => {
	const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
		columnAccessor: 'name',
		direction: 'asc',
	});
	const [records, setRecords] = useState(sortBy(companies, 'name'));

	useEffect(() => {
		const data = sortBy(companies, sortStatus.columnAccessor);
		setRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
	}, [sortStatus]);

	return (
		<motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
			<DataTable
				striped
				withBorder
				withColumnBorders
				highlightOnHover
				shadow={'md'}
				borderRadius={'md'}
				records={records}
				columns={[
					{ accessor: 'Post Titles', width: '20%', sortable: true },
					{ accessor: 'streetAddress', width: '60%' },
					{ accessor: 'city', width: 160, sortable: true },
					{ accessor: 'Post Actions', width: 80 },
				]}
				sortStatus={sortStatus}
				onSortStatusChange={setSortStatus}
			/>
		</motion.div>
	);
};

export default DataTableComponent;
