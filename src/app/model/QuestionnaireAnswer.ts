export class QuestionnaireAnswer{
    questionId!:number;
    answer!:string;
    questionText!:string;
    questionCode!:string;
    questionDesc!:string;
    questionDataType!:string;
    possibleAnswers!:string[];
    parentQuestionCode!:string;
    isMainMandatory!:boolean;
    fkEntityCode!:string;
    isActiveInd!:boolean;
    columnOrderId!:number;
    questionCategory!:string;
    questionVersion!:number;
    questionType!:string;
    
}

// private Long questionId;
// 	private String questionText;
// 	private String questionDesc;
// 	private String possibleAnswers;
// 	private String questionType;
// 	private String questionDataType;
// 	private Boolean isMainMandatory;
// 	private String questionCode;
// 	private String parentQuestionCode;
// 	private String fkEntityCode;
// 	private Integer questionVersion;
// 	private String questionCategory;
// 	private boolean isActiveInd;
// 	private Integer columnOrderId;