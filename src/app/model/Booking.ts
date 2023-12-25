export class Answer {
    answer!: string;
    questionText!: string;
    questionCode!: string;
    parentQuestionCode!: string;
    fkEntityCode!: string;
    questionCategory!: string;
    subQuesAnswers!:Answer[];
  
  }

export class QueAnsRequest{

  fkEntityCode!:string;
	id!:number;
	quesAnswers:Answer[]=new Array();
}