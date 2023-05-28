const initServer = (p, objectWithServer) => {
  objectWithServer.listen(p, (err) => {
    if (err) throw new Error(err);
    console.log(`Server is running on port ${p}`);
  });
};

module.exports = initServer;
