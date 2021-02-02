import { connect } from 'react-redux';
import { increaseCount, decreaseCount,increaseCount1, decreaseCount1,increaseCount2, decreaseCount2, } from '../actions/counterAction';

function Counter(props) {
  return (<div className='container'>
    <h1>You have {props.count} Clicked times</h1>
     <br/>
     <button onClick={props.increase}>Increase </button><br/>
     <button onClick={props.decrease}>Decrease</button><br/>
     
      <button onClick={props.decrease1}>Decrease 5</button><br/>
      <button onClick={props.decrease2}>Decrease 10</button><br/>
     
      <button onClick={props.increase1}>Increase 5</button><br/>
    
    </div>)
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  } 
}

const mapDispatchToProps = {
  increase: increaseCount,
  decrease: decreaseCount,
  increase1: increaseCount1,
  decrease1: decreaseCount1,
  increase2: increaseCount2,
  decrease2: decreaseCount2
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);