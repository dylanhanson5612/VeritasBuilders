// This is a basic model structure for Stackbit

export interface Model {
    id: string;
    name: string;
    properties?: Record<string, any>;
}

export class StackbitModel implements Model {
    id: string;
    name: string;
    properties?: Record<string, any>;

    constructor(id: string, name: string, properties?: Record<string, any>) {
        this.id = id;
        this.name = name;
        this.properties = properties;
    }
}