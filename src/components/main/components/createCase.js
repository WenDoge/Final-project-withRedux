import AuthInput from '../../authInput/authInput';
import Button from '../../button/button';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { createCase, getOfficers } from '../../../store/actions';

const CreateCase = () => {
	const auth = useSelector(state => state.authorised);
	const officers = useSelector(state => state.officers);

	const dispatch = useDispatch();

	const handleCreateCase = async e => {
		const selectedIndex = e.target[5].selectedIndex;
		const data = {
			licenseNumber: e.target[0].value,
			ownerFullName: e.target[1].value,
			type: e.target[2].value === 'Обычный' ? 'general' : 'sport',
			color: e.target[3].value,
			date: e.target[4].value,
			officer: e.target[5][selectedIndex].id,
			description: e.target[6].value,
		};
		e.preventDefault();
		await fetch('https://sf-final-project.herokuapp.com/api/cases/', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		})
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log(data);
				alert('Сообщение отправлено на проверку');
				for (let i = 0; i <= 6; i++) {
					e.target[i].value = '';
				}
				dispatch(createCase(data.data));
			})
			.catch(error => console.error(error));
	};

	const handleCreatePublicCase = async e => {
		const data = {
			licenseNumber: e.target[0].value,
			ownerFullName: e.target[1].value,
			type: e.target[2].value === 'Обычный' ? 'general' : 'sport',
			color: e.target[3].value,
			date: e.target[4].value,
			clientId: e.target[5].value,
			description: e.target[6].value,
		};
		e.preventDefault();
		await fetch('https://sf-final-project.herokuapp.com/api/public/report', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-type': 'application/json',
			},
		})
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log(data);
				alert('Сообщение отправлено на проверку');
				for (let i = 0; i <= 6; i++) {
					e.target[i].value = '';
				}
			})
			.catch(error => console.error(error));
	};

	useEffect(() => {
		const fetchData = async () => {
			await fetch('https://sf-final-project.herokuapp.com/api/officers/', {
				method: 'GET',
				headers: {
					'Content-type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			})
				.then(res => res.json())
				.then(data => {
					dispatch(getOfficers(data.officers));
					console.log(data.officers);
				})
				.catch(error => console.error(error));
		};
		if (localStorage.getItem('token')) fetchData();
	}, []);
	return (
		<article className="create-case-page">
			<form
				className="create-case-form"
				onSubmit={auth ? handleCreateCase : handleCreatePublicCase}>
				<h2 className="subtitle">Заявление о краже</h2>
				<AuthInput title="Номер Лицензии*" for="crtcs1" required={true} />
				<AuthInput
					title="ФИО*"
					for="crtcs2"
					placeholder="Иванов Иван Петрович"
					required={true}
				/>
				<AuthInput
					title="Тип велосипеда*"
					for="crtcs3"
					selectList={['Обычный', 'Спортивный']}
					required={true}
				/>
				<AuthInput title="Цвет" for="crtcs4" />
				<AuthInput
					title="Дата кражи"
					for="crtcs4"
					type="date"
					min="2017-01-01"
					max={new Date().toISOString().slice(0, 10)}
				/>
				{auth ? (
					<AuthInput
						title="Ответственный сотрудник"
						for="crtcs5"
						selectList={officers}
					/>
				) : (
					<AuthInput title="clientId*" for="crtcs5" required={true} />
				)}
				<AuthInput title="Дополнительная информация" for="crtcs6" />

				<Button
					title="Подтвердить"
					className="button signup-button"
					type="submit"
				/>
			</form>
		</article>
	);
};
export default CreateCase;
