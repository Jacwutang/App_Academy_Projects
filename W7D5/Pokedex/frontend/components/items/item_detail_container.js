import {connect} from 'react-redux';
import ItemDetail from './item_detail';
import { selectPokemonItem } from '../../reducers/selectors';
import {withRouter} from 'react-router-dom';
const mapStateToProps = (state, ownProps) => ({
  item: selectPokemonItem(state, parseInt(ownProps.match.params.itemId))
});

// const mapDispatchToProps = (dispatch) => ({
// });

export default withRouter(connect(
  mapStateToProps
)(ItemDetail));
