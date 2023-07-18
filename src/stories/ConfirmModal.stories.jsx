import { ConfirmModal } from '../components';
import { movies } from './stub';
export default {
    title: 'ConfirmModal component',
    component: ConfirmModal,
};

const Template = (args) => <ConfirmModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    open: true,
    title: 'My favorite movies',
    url: 'http://localhost:3000/recommend?title="my movies"&ids=232,434',
    onClose: () => {},
};
