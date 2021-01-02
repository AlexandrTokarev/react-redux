import React, { useState } from 'react';
import { Button, Input, Modal, Tab, Tabs } from '@/components';

import './ComponentsList.scss';

const ComponentsList = () => {
	const [activeTab, setActiveTab] = useState(0);

	const onTabChange = (newTab) => {
		setActiveTab(newTab);
	}

	const [showModal, setShowModal] = useState(false);

	return (
		<div className='components'>
			<div className='components__card'>
				<h3 className='components__title'>Кнопки</h3>
				<hr/>
				{['success', 'primary', 'danger', 'default'].map(color => <Button key={color} style={{ marginRight: 5 }} color={color}>{color}</Button>)}
			</div>

			<div className='components__card'>
				<h3 className='components__title'>Текстовое поле</h3>
				<hr/>
				<Input/>
			</div>

			<div className='components__card'>
				<h3 className='components__title'>Вкладки</h3>
				<hr/>
				<Tabs activeTab={activeTab} onActiveTabChange={onTabChange}>
					<Tab title='Tab 1'>
						<span>Вкладка 1</span>
					</Tab>
					<Tab title='Tab 2'>
						<span>Произвольный текс 2й вкладки</span>
					</Tab>
					<Tab title='Tab 3'>
						<span>Произвольный текс 3й вкладки</span>
					</Tab>
				</Tabs>
			</div>

			<div className='components__card'>
				<h3 className='components__title'>Модальное окно</h3>
				<hr/>
				<Modal
					show={showModal}
					onClose={() => setShowModal(false)}
				>
					<h3>Modal title</h3>
					<p>Content</p>
				</Modal>
				<Button onClick={() => setShowModal(true)}>Показать</Button>
			</div>
		</div>
	)
};

export default ComponentsList