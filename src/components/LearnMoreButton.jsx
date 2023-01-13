import { useState } from 'react';
import { Link } from 'react-router-dom';

const LearnMoreButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <Link
            to='/services'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`bg-light-blue-500 hover:bg-light-blue-600 text-black rounded-lg py-2 px-4 transition-colors duration-300 ${
                isHovered ? 'shadow-lg' : ''
            }`}
        >
            Learn More
        </Link>
    );
};

export default LearnMoreButton;
