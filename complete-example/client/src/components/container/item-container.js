import { connect } from 'react-redux'
import { fetchItemIfNeeded } from '../../actions/retail'
import ContainerItem from '../presentation/items/container-item'
import { getItemsById } from '../../reducers/state-mappers/retail'

const mapStateToProps = (state, props) => getItemsById(state, props.match.params.id);

const VisibleItem = connect(
  mapStateToProps,
  { fetchItemIfNeeded }
)(ContainerItem)

export default VisibleItem

