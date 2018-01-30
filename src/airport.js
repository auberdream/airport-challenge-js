function Airport() {
  this._planes = [];
};

Airport.prototype.hangar = function() {
  return this._planes
};

Airport.prototype.land = function(plane) {
  if (plane.isFlying()) {
    plane.land();
    console.log('plane has landed');
    this._planes.push(plane);
    }
  else {
    console.log('plane is already in the airport')
  }
};

Airport.prototype.takeOff = function(plane) {

  this._planes.splice(this._planes.indexOf(plane), 1);
}
