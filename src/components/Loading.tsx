import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-[50vh]">
            <div className="relative w-16 h-16">
                <div className="absolute top-0 left-0 w-full h-full border-4 border-primary/30 rounded-full animate-ping"></div>
                <div className="absolute top-0 left-0 w-full h-full border-4 border-t-primary rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default Loading;
