import styles from './Employee.module.scss';

const Employee = () => {
	return (
		<div className={styles.employee}>
			<img
				src="../../../public/images/employee-avatar.png"
				alt="avatar"
				className={styles.avatar}
			/>
		</div>
	);
};

export default Employee;
