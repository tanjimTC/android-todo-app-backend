const Joi = require("joi");

module.exports = {
  validateParam: (schema, name) => {
    return async (req, res, next) => {
      const result = await schema.validate({ params: req["params"][name] });
      if (result.error) {
        // Error happened=
        return res.status(400).json(result.error);
      } else {
        if (!req.value) {
          req.value = {};
        }
        if (!req.value["params"]) {
          req.value["params"] = {};
        }
        req.value["params"][name] = result.value.params;
        next();
      }
    };
  },

  validateBody: (schema) => {
    return async (req, res, next) => {
      const result = await schema.validate(req.body);
      if (result.error) {
        // Error happened=
        return res.status(400).json(result.error);
      } else {
        if (!req.value) {
          req.value = {};
        }
        if (!req.value["body"]) {
          req.value["body"] = {};
        }
        req.value["body"] = result.value;
        next();
      }
    };
  },

  schemas: {
    idSchema: Joi.object().keys({
      params: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required(),
    }),
    todoSchema: Joi.object().keys({
      todoTitle: Joi.string().required(),
    }),
  },
};
