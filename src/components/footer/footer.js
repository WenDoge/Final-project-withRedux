import './footer.scss';
import Button from '../button/button';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="footer-wrapper">
			<div className="footer-blocks">
				<div className="footer-block">
					<h2>About</h2>
					<p>
						Наша компания была основана в 1999 году в Копейске. Мы являемся
						одной из первых компаний по аренде двух колесного транспорта в
						России.
					</p>
				</div>
				<div className="footer-block">
					<h2>Contacts</h2>
					<span className="coords__item">Екатеринбург, ул. Солнечная 65б</span>
					<a
						className="contacts__item"
						href="mailto:someBikeCompanyMail@yahoo.com">
						Email: someBikeCompanyMail@yahoo.com
					</a>
					<a className="contacts__item" href="tel:+79993335544">
						tel: +7 (999)-333-55-44
					</a>
				</div>
			</div>
			<div className="footer-ending">
				<span className="footer-copyright">
					Copyright &#169; <b>Good Bike</b>. All rights reserved.
				</span>
				<nav className="footer-nav">
					<div className="footer-buttons-wrapper">
						<Link to="/">
							<Button title="Главная" className="button footer-button" />
						</Link>
						<Link to="/create-case">
							<Button
								title="Сообщить о краже"
								className="button footer-button"
							/>
						</Link>
						<Link to="/auth">
							<Button title="Регистрация" className="button footer-button" />
						</Link>
					</div>
				</nav>
			</div>
		</footer>
	);
};
export default Footer;
