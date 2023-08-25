export class Question {
    constructor(ques, ans ,correctAnsIndex, quizId) {
        // this.id = `ques-${(new Date()).getTime()}`;
        this.ques = ques
        this.ans = ans;
        this.correctAnsIndex = correctAnsIndex;
        this.quizId = quizId
    }
}
