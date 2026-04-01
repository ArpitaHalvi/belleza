export const validateMiddleware = (schema) => {
  return (req, res, next) => {
    try {
      const parsedBody = schema.parse(req.body);
      req.body = parsedBody;
      next();
    } catch (e) {
      console.error("Error validating request body:", e);
      res.status(400).json({ error: e.errors });
    }
  };
};
