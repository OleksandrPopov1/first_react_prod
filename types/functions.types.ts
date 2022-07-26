import {IUser} from "../interfaces";

type sumType = (a: number, b: number) => number;

type showSumType = (a: number, b: number) => void;

type changeUserAgeType = (user: IUser, inc: number) => IUser;

export type {
    sumType,
    changeUserAgeType,
    showSumType
};