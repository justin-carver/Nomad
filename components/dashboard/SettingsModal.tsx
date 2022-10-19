import { useState } from 'react';
import { Modal, Button, Group, Stack } from '@mantine/core';

const SettingsModal = (props: any) => {
	return (
		<>
			<Modal
				opened={props.opened}
				overlayBlur={3}
				closeOnClickOutside={false}
				onClose={() => props.setOpened(false)}
				title="Settings Panel"
				withFocusReturn
				transition={'slide-up'}>
				<Stack>This is the inside of a modal!</Stack>
			</Modal>
		</>
	);
};

export default SettingsModal;
