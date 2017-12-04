import { connect } from 'react-redux';
import Section from '../presentation/layout-templates/section.js';
import { getSectionsById } from '../../reducers/state-mappers/retail'

const mapStateToProps = (state, props) => getSectionsById(state, props.match.params.id) || { title: '', description: '', items: [] };

const VisibleSection = connect(
  mapStateToProps
)(Section)

export default VisibleSection