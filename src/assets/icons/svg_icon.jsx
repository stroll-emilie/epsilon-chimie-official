import PropTypes from 'prop-types';

export const SvgIcon = ({ size = 24, children, viewBox = "0 0 24 24" }) => (
    <svg width={size} height={size} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
        {children}
    </svg>
);

SvgIcon.propTypes = {
    size: PropTypes.number,
    viewBox: PropTypes.string,
    children: PropTypes.node,
};