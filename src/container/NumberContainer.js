import { connect } from 'react-redux';
import NumberComponent from '../components/NumberComponent';
import { beans } from '../actions/boardActions';

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = {
  beans
}

export default connect(mapStateToProps, mapDispatchToProps)(NumberComponent)
