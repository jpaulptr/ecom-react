import { connect } from 'react-redux'
import Section from '../layout/section'

const mapStateToProps = (state, props) => {
  return  state.app.sections.find((element) => element.id ===props.match.params.id)  
}

const VisibleSection = connect(
  mapStateToProps
)(Section)

export default VisibleSection