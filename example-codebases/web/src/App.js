import React, { useContext, useState, useEffect } from 'react';
import { Diez, DesignLanguage } from 'diez-dashboard';
import './App.css';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

import { Admin, Resource, ListGuesser } from 'react-admin';
import { PostList, PostEdit, PostCreate, PostShow } from './Components/posts';
import { UserList } from './Components/users';
import Dashboard from './Layout/Dashboard';
import authProvider from './Business/authProvider';
import jsonServerProvider from 'ra-data-json-server';

import LightTheme from './themes/light-theme';
import createDarkTheme from './themes/dark-theme';
import { withTheme } from '@material-ui/core/styles';
// const Text = styled.p`
// 	${tw`text-white text-7xl`};
// `;

// const Animation = props => {
// 	const animation = useCallback(node => {
// 		if (node !== null) {
// 			props.lottie.mount(node);
// 		}
// 	}, []);

// 	return <div className={animation} ref={animation} style={props.style} />;
// };

import selectTheme from './themes/selected-theme';
import { ThemeProvider, ThemeConsumer } from 'styled-components';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

function themeSwitch(theme) {
	console.log(theme);
	var d = document.documentElement;

	if (theme === 'dark') {
		d.classList.add('theme-dark');
		// localStorage.setItem("theme", "ligth");
	} else {
		d.classList.remove('theme-dark');
		// localStorage.setItem("theme", "dark");
	}
}

const App = () => {
	const [ds, setDs] = useState();
	const diez = new Diez(DesignLanguage);
	const [theme, setTheme] = useState('dark');

	useEffect(() => {
		// Here we are observing hot updates to our design language.
		//
		// Since this instance of Diez was initialized with DesignLanguage, it will deliver updates to the DesignLanguage
		// object described in `src/DesignLanguage.ts` (relative to the root of the Diez project).
		diez.attach(setDs);
	}, []);

	if (typeof ds === 'undefined') {
		return null;
	}

	themeSwitch(theme);

	return (
		<ThemeProvider theme={selectTheme(ds, theme)}>
			<ThemeConsumer>
				{theme => (
					<Admin
						dataProvider={dataProvider}
						authProvider={authProvider}
						dashboard={Dashboard}
						theme={theme}
					>
						<div className={'selector'}>ewrew</div>
						<Resource
							name='posts'
							icon={PostIcon}
							list={PostList}
							edit={PostEdit}
							create={PostCreate}
							show={PostShow}
						/>
						<Resource name='users' icon={UserIcon} list={UserList} />
						<Resource name='comments' list={ListGuesser} />
					</Admin>
				)}
			</ThemeConsumer>
		</ThemeProvider>
	);
};

export default App;
