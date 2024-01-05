import PropTypes from 'prop-types';
const Stats = ({toDoList}) => {
    let countList = toDoList.length;
    return (
        <div className='stats'>
            <p className='notify'>
                {countList === 0 ? 'You have got everything done!' : `You have ${countList} tasks on your list`}
            </p>
        </div>
    )
}

Stats.propTypes = {
    toDoList: PropTypes.array.isRequired
};

export default Stats;
