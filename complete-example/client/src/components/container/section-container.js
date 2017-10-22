import { connect } from 'react-redux';
import { fetchSections } from '../../actions/retail'
import Section from '../layout/section.js';
import { getSectionsById } from '../../reducers/state-mappers/retail'

const mapStateToProps = (state, props) => {
  return getSectionsById(state, props.match.params.id);
}

const VisibleSection = connect(
  mapStateToProps,
  { fetchSections }
)(Section)

export default VisibleSection