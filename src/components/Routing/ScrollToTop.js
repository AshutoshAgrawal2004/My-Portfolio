import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default ({ scrollToComponent }) => {
	const { pathname } = useLocation();

	useEffect(() => {
		if (scrollToComponent.current && pathname !== '/') {
			// window.scrollTo(0, scrollToComponent.current.offsetTop);
			scrollToComponent.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	}, [pathname]);

	return null;
};
