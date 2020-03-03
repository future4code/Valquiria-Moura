import { UserInterface } from "./userInterface";

export abstract class User implements UserInterface {
    constructor (
        public name: string,
        public email: string,
        public birthDate: string,
    ) {}
}