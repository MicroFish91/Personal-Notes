// ** For Input Validation **
// NPM Package - 'npm i joi'

const Joi = required('joi');

function validate(something){
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(something, schema);
}