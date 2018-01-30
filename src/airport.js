function Airport() {
  this._planes = [];
};

Airport.prototype.hangar = function() {
  return this._planes
};

Airport.prototype.land = function(plane) {
  this._planes.push(plane)
};
