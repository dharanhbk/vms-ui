import { QuestionnaireAnswer } from "./QuestionnaireAnswer";

export class Entity{
    entityCode!:string;
	entityName!:string;
	entityType!:string;
	entityOwnerId!:string;
	cardIcon!:string;
	entityDescription!:string
	questions!:QuestionnaireAnswer[];
}