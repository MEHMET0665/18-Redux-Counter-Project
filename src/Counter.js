import { connect } from 'react-redux';
import { countFunction } from './actions/counterAction';

function Counter(props) {
  return (<div>
    <h1>You have {props.count} Clicked times</h1>
   { console.log(props.count)}
     <br/>
     <button onClick={props.countFunction}value={-1}>Decrease 1</button><br/>
      <button onClick={props.countFunction}value={-5}>Decrease 5</button><br/>
      <button onClick={props.countFunction}value={-10}>Decrease 10</button><br/>
      <button onClick={props.countFunction}value={1}>Increase 1</button><br/>
      <button onClick={props.countFunction}value={5}>Increase 5</button><br/>
      <button onClick={props.countFunction}value={10}>Increase 10</button>
    </div>)
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  } 
}

const mapDispatchToProps = {
  countFunction: countFunction,
  
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);