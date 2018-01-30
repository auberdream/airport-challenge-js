describe('Plane', function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe('land', function() {

    it('changes plane state when land is called', function() {
      plane.land();
      expect(plane.isFlying()).toBe(false);
    });
  });

    describe('takeOff', function() {

      it('changes plane state when takeOff is called', function() {
        plane.takeOff();
        expect(plane.isFlying()).toBe(true);
      });
    });
  });
