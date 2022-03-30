module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bf99e82812be731f34e9d85c0d70139b'),
  },
});
