import AuthInput from '../../authInput/authInput';
import Button from '../../button/button';

const AuthPage = () => {
	const handleSignup = async e => {
		const data = {
			email: e.target[0].value,
			password: e.target[1].value,
			clientId: e.target[2].value,
			firstName: e.target[3].value,
			lastName: e.target[4].value,
		};

		console.log(data);
		e.preventDefault();
		await fetch('https://sf-final-project.herokuapp.com/api/auth/sign_up', {
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
				alert('Пользователь создан!');
				for (let i = 0; i <= 4; i++) {
					e.target[i].value = '';
				}
				console.log(data);
			});
	};

	return (
		<article className="signup-page">
			<form className="signup-form" onSubmit={handleSignup}>
				<AuthInput title="Email*" type="email" for="reg1" required={true} />
				<AuthInput title="Пароль*" type="password" for="reg2" required={true} />
				<AuthInput
					title="Client ID*"
					placeholder="XXXX-XXXX-XXXX-XXXX"
					for="reg3"
					required={true}
				/>
				<AuthInput title="Имя" placeholder="Иван" for="reg4" />
				<AuthInput title="Фамилия" placeholder="Иванов" for="reg5" />
				<Button
					title="Подтвердить"
					className="button signup-button"
					type="submit"
				/>
			</form>
		</article>
	);
};
export default AuthPage;
