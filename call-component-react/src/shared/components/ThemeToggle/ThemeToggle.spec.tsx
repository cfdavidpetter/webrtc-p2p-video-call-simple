import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeToggle } from './ThemeToggle';
import { useThemeToggle } from './hooks/useThemeToggle';

// Mock the useThemeToggle hook
jest.mock('./hooks/useThemeToggle');

describe('ThemeToggle', () => {
  const mockUseThemeToggle = useThemeToggle as jest.MockedFunction<typeof useThemeToggle>;

  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  it('renders the toggle button with correct aria-label', () => {
    mockUseThemeToggle.mockReturnValue({
      isDark: false,
      toggleTheme: jest.fn(),
    });

    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /toggle theme/i });
    expect(button).toBeInTheDocument();
  });

  it('shows sun icon when in light mode', () => {
    mockUseThemeToggle.mockReturnValue({
      isDark: false,
      toggleTheme: jest.fn(),
    });

    render(<ThemeToggle />);
    const sunIcon = screen.getByTestId('sun-icon');
    expect(sunIcon).toBeInTheDocument();
  });

  it('shows moon icon when in dark mode', () => {
    mockUseThemeToggle.mockReturnValue({
      isDark: true,
      toggleTheme: jest.fn(),
    });

    render(<ThemeToggle />);
    const moonIcon = screen.getByTestId('moon-icon');
    expect(moonIcon).toBeInTheDocument();
  });

  it('calls toggleTheme when button is clicked', () => {
    const mockToggleTheme = jest.fn();
    mockUseThemeToggle.mockReturnValue({
      isDark: false,
      toggleTheme: mockToggleTheme,
    });

    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /toggle theme/i });
    fireEvent.click(button);
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });

  it('applies correct classes for light mode', () => {
    mockUseThemeToggle.mockReturnValue({
      isDark: false,
      toggleTheme: jest.fn(),
    });

    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /toggle theme/i });
    expect(button).toHaveClass('bg-gray-200');
    expect(button).toHaveClass('text-gray-800');
  });

  it('applies correct classes for dark mode', () => {
    mockUseThemeToggle.mockReturnValue({
      isDark: true,
      toggleTheme: jest.fn(),
    });

    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /toggle theme/i });
    expect(button).toHaveClass('dark:bg-gray-700');
    expect(button).toHaveClass('dark:text-gray-100');
  });
});
