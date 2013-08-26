'use strict';

describe('Service: schedule', function () {

  // load the service's module
  beforeEach(module('dashboardApp'));

  // instantiate service
  var schedule, $timeout;

  beforeEach(inject(function (_schedule_, _$timeout_) {
    schedule = _schedule_;
    $timeout = _$timeout_;
  }));

  describe('onceAMinute', function() {

    it('should schedule a task execution every 1 minute', function () {
      var log = [];

      schedule.onceAMinute(function() {
        log.push('task1');
      });

      expect(log).toEqual([]);

      $timeout.flush(60);
      expect(log).toEqual(['task1']);
    });
  })

});