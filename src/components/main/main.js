import './main.scss';
import Button from '../button/button';
import AuthPage from './components/authPage';
import ErrorPage from './components/errorPage';
import CreateCase from './components/createCase';
import Cases from './components/cases';
import CaseDetailsWindow from '../DetailsWindow/caseDetailsWindow';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import OfficersPage from './components/officers';
import OfficerDetailsWindow from '../DetailsWindow/officerDetailsWindow';

// const user = {
// 	email: 'vasD@mail.ru',
// 	password: 'qwerty',
// 	clientId: '3aa95a67-41da-421c-9598-cc64ff7566ae',
// 	firstName: 'Алексей',
// 	lastName: 'Смирнов',
// };
const Main = () => {
	const mainPage = (
		<article className="hero-content">
			<h1 className="hero-title">
				Компания <br />
				<span>Good Bike</span>
			</h1>
			<p className="hero-text">
				Наша компания находится на лидирующих позициях в сфере проката
				велосипедов во всех крупных городах России. <br />В последнее время
				участились случаи кражи, для поддержания качества сервиса был введен
				учёт известных случаев пропажи имущества компании. <br />
				Если Вы обладаете какой-либо информацией, связанной с пропажей, просим
				сообщить нам.
			</p>
			<Link to="create-case">
				<Button className="button hero-button" title="Сообщить о краже" />
			</Link>
		</article>
	);

	return (
		<main className="container main-container">
			<Routes>
				<Route path="/" exact element={mainPage} />
				<Route path="/auth" element={AuthPage()} />
				<Route path="/create-case" element={CreateCase()} />
				<Route path="/cases" element={Cases()}></Route>
				<Route path="/cases/:caseID" element={<CaseDetailsWindow />} />
				<Route path="/officers" element={OfficersPage()} />
				<Route path="/officers/:officerID" element={<OfficerDetailsWindow />} />

				<Route path="*" element={ErrorPage()} />
			</Routes>
		</main>
	);
};
export default Main;
