import { validate } from "class-validator";
import { UnprocessableEntityException } from "9ight";

export const Validator = (InputClass: any) => {
  return async function(input: any): Promise<boolean> {
    const instance = new InputClass();

    for (const prop in input) {
      instance[prop] = input[prop];
    }

    const errors = await validate(instance);

    if (!errors.length) {
      return true;
    }

    const expandedErrors = errors.map(error => {
      const [key] = Object.keys(error.constraints);
      const constraint = error.constraints[key];
      return { field: error.property, code: constraint };
    });

    throw new UnprocessableEntityException(...expandedErrors);
  };
};
