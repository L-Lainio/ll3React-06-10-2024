/* eslint-disable no-undef */
import { render, fireEvent, it, describe } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
    it('should render with dark mode enabled', () => {
        const toggleDarkMode = jest.fn();
        const { getByTestId } = render(
            <Navbar darkMode={true} toggleDarkMode={toggleDarkMode} />
        );

        const navbar = getByTestId('navbar');
        expect(navbar).toBeInTheDocument();
        expect(navbar).toHaveClass('dark-mode');

        const toggleButton = getByTestId('toggle-button');
        expect(toggleButton).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(toggleDarkMode).toHaveBeenCalled();
    });

    it('should render with dark mode disabled', () => {
        const toggleDarkMode = jest.fn();
        const { getByTestId } = render(
            <Navbar darkMode={false} toggleDarkMode={toggleDarkMode} />
        );

        const navbar = getByTestId('navbar');
        expect(navbar).toBeInTheDocument();
        expect(navbar).not.toHaveClass('dark-mode');

        const toggleButton = getByTestId('toggle-button');
        expect(toggleButton).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(toggleDarkMode).toHaveBeenCalled();
    });
});
