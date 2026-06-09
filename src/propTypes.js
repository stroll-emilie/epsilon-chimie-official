import PropTypes from 'prop-types'

export const sizeProp = {size: PropTypes.number};
export const childrenProp = {children: PropTypes.node.isRequired};

export const specsListProp = {
    specsList: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            data:  PropTypes.string,
        })
    ).isRequired,
};

export const formDataProp = {
    data: PropTypes.shape({
        company:        PropTypes.string,
        country:        PropTypes.string,
        additional:     PropTypes.string,
        requestType:    PropTypes.string,
        compoundName:   PropTypes.string,
        application:    PropTypes.string,
        lastName:       PropTypes.string,
    }).isRequired
}
