import React from 'react';

const Footer = () => {
	return (
		<footer id='footer' >
			<div class="inner">
				<ul className="icons">
					<li><a href="mailto:eric@ericmiles.me" class="icon fa-envelope-o"><span class="label">Email</span></a></li>
				</ul>
				<ul className="copyright">
					<li>&copy; Eric Miles</li><li><a href="/">ericmiles.me</a></li>
				</ul>
			</div>    
		</footer>
	);
};

export default Footer;
