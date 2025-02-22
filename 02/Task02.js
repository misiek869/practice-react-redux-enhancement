import React from 'react';
import Welcome from './../src/components/Welcome';
import withPopup from './../src/hoc/withPopup';

const ComponentWithPopup = withPopup(Welcome, 0.8, 'beige')

const Task02 = () => (
	<section>
		<h2>Task 02</h2>
		<ComponentWithPopup />
	</section>
)

export default Task02;

