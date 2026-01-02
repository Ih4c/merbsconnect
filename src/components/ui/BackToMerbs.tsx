import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/BackToMerbs.css';

const BackToMerbs: React.FC = () => {
    const navigate = useNavigate();

    return (
        <button
            className="back-to-merbs"
            onClick={() => navigate('/')}
            aria-label="Back to MerbsConnect"
        >
            <div className="icon-container">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
            </div>
            <span className="btn-text">Back to MerbsConnect</span>
        </button>
    );
};

export default BackToMerbs;
