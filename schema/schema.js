const Joi = require('joi');

// Registration schema
const registerSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required()
        .messages({
            "string.base": "Name must be a string.",
            "string.empty": "Name is required.",
            "string.min": "Name must be at least 3 characters.",
            "string.max": "Name must not exceed 30 characters.",
            "any.required": "Name is required."
        }),

    email: Joi.string()
        .email()
        .required()
        .messages({
            "string.base": "Email must be a string.",
            "string.email": "Invalid email format.",
            "string.empty": "Email is required.",
            "any.required": "Email is required."
        }),

    password: Joi.string()
        .min(8)
        .required()
        .messages({
            "string.base": "Password must be a string.",
            "string.empty": "Password is required.",
            "string.min": "Password must be at least 8 characters.",
            "any.required": "Password is required."
        })
});

// Login schema
const loginSchema = Joi.object({
    email: Joi.string()
        .email()
        .required()
        .messages({
            "string.base": "Email must be a string.",
            "string.email": "Invalid email format.",
            "string.empty": "Email is required.",
            "any.required": "Email is required."
        }),

    password: Joi.string()
        .required()
        .messages({
            "string.base": "Password must be a string.",
            "string.empty": "Password is required.",
            "any.required": "Password is required."
        })
});

module.exports = { registerSchema, loginSchema };
