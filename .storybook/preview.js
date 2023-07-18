// import { muiTheme } from 'storybook-addon-material-ui';

// /** @type { import('@storybook/react').Preview } */

// export const decorators = [muiTheme()];
// const preview = {
//     parameters: {
//         actions: { argTypesRegex: '^on[A-Z].*' },
//         controls: {
//             matchers: {
//                 color: /(background|color)$/i,
//                 date: /Date$/,
//             },
//         },
//     },
// };

// export default preview;
export const parameters = {
    actions: { argTypesRegex: 'on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
