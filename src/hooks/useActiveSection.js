// hooks/useActiveSection.js
import { useState, useEffect } from 'react';

function useActiveSection(sections, offset = 300) {
    const [activeKey, setActiveKey] = useState(sections[0]?.key);

    useEffect(() => {
        const handleScroll = () => {
        const current = sections.find(({ key }) => {
            const el = document.getElementById(key);
            if (!el) return false;
            const top = el.getBoundingClientRect().top;
            return top >= 83 && top < offset;
        });
        if (current) setActiveKey(current.key);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections, offset]);

    return [activeKey, setActiveKey];
}

export default useActiveSection;