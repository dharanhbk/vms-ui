import { QuestionnaireAnswer } from "./QuestionnaireAnswer";

export class Entity{
    entityCode!:string;
	entityName!:string;
	entityType!:string;
	questions!:QuestionnaireAnswer[];
}