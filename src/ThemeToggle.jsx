import { useGlobalContext } from './context';
import { GiPumpkinMask, GiMoonBats } from 'react-icons/gi';

const ThemeToggle = () => {
    const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
    return (
        <section className='toggle-container'>
            <button className='dark-toggle' onClick={toggleDarkTheme}>
                {isDarkTheme ? (
                    <GiPumpkinMask className='toggle-icon' />
                ) : (
                    <GiMoonBats className='toggle-icon' />
                )}
            </button>
        </section>
    );
};

export default ThemeToggle;
