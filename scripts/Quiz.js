export class Quiz{
    constructor(title, description, answers, ques){
        // this.id =`quiz-${(new Date()).getTime()}`;
        this.title = title;
        this.description = description;
        this.ques = []
        this.answers = {}
    }
}
