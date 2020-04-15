import { createSlice } from '@reduxjs/toolkit';

// Change these to your own questions!
const questions = [
	{
		id: 1,
		questionFlag: 'France',
		questionClass: 'fr',
		options: [ 'Great Britain', 'Japan', 'Norway', 'France' ],
		correctAnswerIndex: 3
	},
	{
		id: 2,
		questionFlag: 'South Africa',
		questionClass: 'za',
		options: [ 'Great Britain', 'South Korea', 'Norway', 'South Africa' ],
		correctAnswerIndex: 3
	},
	{
		id: 3,
		questionFlag: 'Sweden',
		questionClass: 'se',
		options: [ 'Great Britain', 'Japan', 'Sweden', 'France' ],
		correctAnswerIndex: 2
	},

	{
		id: 4,
		questionFlag: 'Australia',
		questionClass: 'au',
		options: [ 'Australia', 'Japan', 'Sweden', 'France' ],
		correctAnswerIndex: 0
	},

	{
		id: 5,
		questionFlag: 'Japan',
		questionClass: 'jp',
		options: [ 'Australia', 'Japan', 'Sweden', 'France' ],
		correctAnswerIndex: 1
	},

	{
		id: 6,
		questionFlag: 'Chile',
		questionClass: 'cl',
		options: [ 'Australia', 'Japan', 'Sweden', 'Chile' ],
		correctAnswerIndex: 3
	},

	{
		id: 7,
		questionFlag: '',
		questionClass: '',
		options: [ '' ],
		correctAnswerIndex: 3
	}
];

// Countries
// France <i class="em em-fr" aria-role="presentation" aria-label="France Flag"></i>
// South africa <i class="em em-flag-za" aria-role="presentation" aria-label="South Africa Flag"></i>
// Sweden <i class="em em-flag-se" aria-role="presentation" aria-label="Sweden Flag"></i>
// Australia <i class="em em-flag-au" aria-role="presentation" aria-label="Australia Flag"></i>
// Japan <i class="em em-jp" aria-role="presentation" aria-label="Japan Flag"></i>
// Chile <i class="em em-flag-cl" aria-role="presentation" aria-label="Chile Flag"></i>
//

const initialState = {
	questions,
	answers: [],
	currentQuesionIndex: 0,
	quizOver: false
};

export const quiz = createSlice({
	name: 'quiz',
	initialState,
	reducers: {
		/**
     * Use this action when a user selects an answer to the question.
     * The answer will be stored in the `quiz.answers` state with the
     * following values:
     *
     *    questionId  - The id of the question being answered.
     *    answerIndex - The index of the selected answer from the question's options.
     *    question    - A copy of the entire question object, to make it easier to show
     *                  details about the question in your UI.
     *    answer      - The answer string.
     *    isCorrect   - true/false if the answer was the one which the question says is correct.
     *
     * When dispatching this action, you should pass an object as the payload with `questionId`
     * and `answerIndex` keys. See the readme for more details.
     */
		submitAnswer: (state, action) => {
			const { questionId, answerIndex } = action.payload;
			const question = state.questions.find((q) => q.id === questionId);

			if (!question) {
				throw new Error(
					'Could not find question! Check to make sure you are passing the question id correctly.'
				);
			}

			if (question.options[answerIndex] === undefined) {
				throw new Error(`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`);
			}

			state.answers.push({
				questionId,
				answerIndex,
				question,
				answer: question.options[answerIndex],
				isCorrect: question.correctAnswerIndex == answerIndex
			});
		},

		/**
     * Use this action to progress the quiz to the next question. If there's
     * no more questions (the user was on the final question), set `quizOver`
     * to `true`.
     *
     * This action does not require a payload.
     */
		goToNextQuestion: (state) => {
			if (state.currentQuesionIndex + 1 === state.questions.length) {
				state.quizOver = true;
			} else {
				state.currentQuesionIndex += 1;
			}
		},

		/**
     * Use this action to reset the state to the initial state the page had
     * when it was loaded. Who doesn't like re-doing a quiz when you know the
     * answers?!
     *
     * This action does not require a payload.
     */
		restart: () => {
			return initialState;
		}
	}
});

//<i class="em em-flag-se" aria-role="presentation" aria-label="Sweden Flag"></i>
