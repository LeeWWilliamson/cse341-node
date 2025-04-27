const getElizabeth = (req, res) => {
  res.send('Elizabeth Williamson');
};

const getFaye = (req, res) => {
  res.send('Faye Williamson');
};

const getRoby = (req, res) => {
  res.send('Roby Beazer');
};

module.exports = {
  getElizabeth,
  getFaye,
  getRoby
};
