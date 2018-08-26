import { observable } from 'mobx';

export default class AgeStore {
    @observable
    private _age: number = 20;

    constructor(age: number) {
        this._age = age;
    }

    public getAge(): number {
        return this._age;
    }

    public setAge(age: number) {
        this._age = age;
    }
}
