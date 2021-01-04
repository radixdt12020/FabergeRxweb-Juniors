import {Option} from './option'
export interface Paper{

    questionId : string;

    paperName : string;

    question : string;

    answer : string;

    options : Option[];
}