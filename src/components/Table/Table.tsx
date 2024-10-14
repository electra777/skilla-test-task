import Type from '../Type/Type';
import Time from '../Time/Time';
import Employee from '../Employee/Employee';

import styles from './Table.module.scss';
import Source from '../Source/Source';

const Table = () => {
	return (
		<div className={styles.table}>
			<div className={styles.tableItem}>
				<div className={styles.type}>Тип</div>
				<div className={styles.time}>Время</div>
				<div className={styles.employee}>Сотрудник</div>
				<div className={styles.call}>Звонок</div>
				<div className={styles.sourse}>Источник</div>
				<div className={styles.grade}>Оценка</div>
				<div className={styles.duration}>Длительность</div>
			</div>
			<div className={styles.tableItem}>
				<Type />
				<Time />
				<Employee />

				<Source />
			</div>
		</div>
	);
};

export default Table;
