import {connect} from "react-redux";
import {ResultsContainer} from "./ResultsContainer";
import {getBingData, getGoogleData} from "./selectors";

const mapStateToProps = state => ({
    google: getGoogleData(state),
    bing: getBingData(state)
})

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultsContainer);
