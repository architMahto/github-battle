var React = require('react');
var PropTypes = require('prop-types');

function SelectLanguage (props) {
	var languages = ['All', 'JavaScript', 'Ruby', 'PHP', 'CSS', 'Python'];

	return (
		<ul className={'languages'}>
			{languages.map(function (lang) {
				return (
					<li
						key={lang}
						style={lang === props.selectedLanguage ? { color: '#d0021b' } : null}
						onClick={props.onSelect.bind(null, lang)}>
						{lang}
					</li>
				);
			})}
		</ul>
	);
}

SelectLanguage.propTypes = {
	selectedLanguage: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired
};

module.exports = SelectLanguage;
