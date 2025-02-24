import PropTypes from 'prop-types';

//File này chứa layout chung cố định
function NoLayOut({ children }) {
    //Vì phần content động chuyền từ ngoài vào nên chuyền vào props children
    return (
        <div className='Home'>
            {children}
        </div>
    );
}

NoLayOut.propTypes = {
    children: PropTypes.node.isRequired,
};

export default NoLayOut;
