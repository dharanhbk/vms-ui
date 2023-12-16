export class Answer {
    answer!: string;
    questionText!: string;
    questionCode!: string;
    // questionDataType: string;
    // possibleAnswers: string[];
    parentQuestionCode!: string;
    // isMainMandatory: boolean;
    fkEntityCode!: string;
    // isActiveInd: boolean;
    // columnOrderId: number;
    questionCategory!: string;
    subQuesAnswers!:Answer[];
    // questionVersion: number;
    // questionType: string;
  
  }

export class BookingRequest{

    fkEntityCode!:string;
	bookingId!:number;
	quesAnswers:Answer[]=new Array();
}