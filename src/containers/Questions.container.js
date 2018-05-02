import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import QuestionsPage from '../components/QuestionsPage/QuestionsPage';
import { resetL, getQuestions, getQuestionsByTag, getQuestionsByUserId } from '../actions/common.actions';


const mapStateToProps = state => ({
    questions: state.questionL.questions,
    questionsLoading: state.questionL.questionsLoading,
    questionsLoadingError: state.questionL.questionsLoadingError,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        resetL, getQuestions, getQuestionsByTag, getQuestionsByUserId
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);
