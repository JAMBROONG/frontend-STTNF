
import styles from './Province.module.css'
function Province(props) {
	const { dataProvince } = props;
	return (
		<div className={styles.container}>
			<section className={styles.province}>
				<h2 className={styles.province__title}>Provinsi</h2>
				<h4 className={styles.province__subtitle}>Data Covid Berdasarkan Provinsi</h4>
				<div className={styles.table__container}>
					<div className={styles.table__wrapper}>
						<table className={styles.table} border='1px'>
							<thead className={styles.table__head}>
								<tr>
									<th>No</th>
									<th>Provinsi</th>
									<th>Positif</th>
									<th>Sembuh</th>
									<th>Dirawat</th>
									<th>Meninggal</th>
								</tr>
							</thead>
							<tbody className={styles.table__body}>
								{
									dataProvince.map((data, index) => {
										return (
											<tr key={data.kota}>
												<td>{index + 1}</td>
												<td>{data.kota}</td>
												<td>{data.kasus}</td>
												<td>{data.sembuh}</td>
												<td>{data.dirawat}</td>
												<td>{data.meninggal}</td>
											</tr>
										)
									})
								}
							</tbody>
						</table>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Province;