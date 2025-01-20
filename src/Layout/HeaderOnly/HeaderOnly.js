import PropTypes from 'prop-types';
import Header from '~/Layout/DefaultLayout/Header';

//File này chứa layout chung cố định
function HeaderOnly({ children }) {
    //Vì phần content động chuyền từ ngoài vào nên chuyền vào props children
    return (
        <div className='Home'>
            <Header />
            {children}
        </div>
    );
}

HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderOnly;
