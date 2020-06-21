import React, { useState, useEffect } from 'react';
import Row from './Row';

export default function Greeting() 
{
	const name = useFormInput('Mary');	
	const surname = useFormInput('Poppys');
	const width = useWindowWidth();
	
	return (
			<section>
				<Row label="Name">
					<input value={name.value} onChange={name.onChange}/>	
				</Row>
				<Row label="Surname">
					<input value={surname.value} onChange={surname.onChange}/>	
				</Row>
				<Row label="width">
					{width}	
				</Row>		

			</section>
	);	

}
function useFormInput(initialValue)
{
	const [value, setValue] = useState(initialValue)
	function handleChange(e) {
		setValue(e.target.value);
	}
	return {
		value,
		onChange : handleChange
	};	
}
function useWindowWidth()
{
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};		
	})
	return width;
}
