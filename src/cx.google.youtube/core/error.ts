export declare class Error {
        public name: string;
        public message: string;
        public stack: string;
        constructor(message?: string);
    }

export class MissingRequiredFieldError extends Error {
    constructor(public message: string) {
        super(message);
        this.name = 'MissingRequiredFieldError';
        this.message = 'Missing required field: ' + message;
        this.stack = (<any>new Error()).stack;
    }
    toString() {
        return this.name + ': ' + this.message;
    }
}

export class InvalidFieldValueError extends Error {
    constructor(public field: string, value: any) {
        super(field);
        this.name = 'InvalidFieldValueError';
        this.message = value + ' is not a valid value for ' + field;
        this.stack = (<any>new Error()).stack;
    }
    toString() {
        return this.name + ': ' + this.message;
    }
}

export class JsonBodyParseError extends Error {
    constructor(public message: string) {
        super(message);
        this.name = 'JsonBodyParseError';
        this.message = 'Failed to parse body as json: ' + message;
        this.stack = (<any>new Error()).stack;
    }
    toString() {
        return this.name + ': ' + this.message;
    }
}
