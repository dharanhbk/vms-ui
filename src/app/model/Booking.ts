export class Answer {
    answer!: string;
    questionText!: string;
    questionCode!: string;
    parentQuestionCode!: string;
    fkEntityCode!: string;
    questionCategory!: string;
    subQuesAnswers!:Answer[];
  
  }

export class BookingRequest{

  fkEntityCode!:string;
	bookingId!:number;
	quesAnswers:Answer[]=new Array();
}