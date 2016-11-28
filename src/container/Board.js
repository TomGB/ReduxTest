import { connect } from 'react-redux';
import Board from '../components/Board';

const mapStateToProps = (state) => {
  return {
    pieces: state.board.pieces
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
