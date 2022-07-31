import axios from 'axios';
import { useState } from 'react';

function Form({ getGallery }) {
	// variables to hold value of inputs
	const [newTitle, setNewTitle] = useState('');
	const [newPath, setNewPath] = useState('');
	const [newDescription, setNewDescription] = useState('');

	const addFile = (event) => setNewPath(event.target.files[0]);

	const sendImage = (event) => {
		const data = new FormData();
		
		data.append('image', newPath);

		axios
			.post('/gallery/image', data)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				alert('Error with post', error);
			});
	};

	
	const handleSubmit = (event) => {
		console.log('submit button');
		event.preventDefault();
		sendImage();

		axios
			.post('/gallery', { title: newTitle, file: newPath.name, description: newDescription })
			.then((response) => {
				console.log(response);
				getGallery();
			})
			.catch((error) => {
				alert('Error with post', error);
			});
		setNewTitle('');
		setNewDescription('');
	};

	return (
		<form encType='multipart/form-data'>
			<label>Title:</label>
			<input
				placeholder='Title'
				className='input'
				onChange={(event) => setNewTitle(event.target.value)}
				value={newTitle}
			/>
			<label>Image:</label>
			<input type='file' name='image' className='input' onChange={addFile} />
			<label>Description:</label>
			<input
				placeholder='Image Description'
				className='input'
				onChange={(event) => setNewDescription(event.target.value)}
				value={newDescription}
			/>
			<button className='button' onClick={handleSubmit} type='submit'>
				Save
			</button>
		</form>
	);
}
export default Form;