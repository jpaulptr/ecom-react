import { connect } from 'react-redux';
import { fetchSections } from '../../actions/retail'
import Section from '../layout/section.js';

const mapStateToProps = (state, props) => {
  return state.app.sections.find((element) => element.id === props.match.params.id)
}


const VisibleSection = connect(
  mapStateToProps,
  { fetchSections }
)(Section)

export default VisibleSection