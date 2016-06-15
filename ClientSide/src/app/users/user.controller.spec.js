/**
 * Created by Andre on 11.05.2016.
 */
(function() {
  'use strict';

  describe('controllers', function(){
    var uc;
    var $timeout;
    var toastr;

    beforeEach(module('KnowledgePortal'));
    beforeEach(inject(function(_$controller_, _$timeout_, _webDevTec_, _toastr_) {
      spyOn(_webDevTec_, 'getTec').and.returnValue([{}, {}, {}, {}, {}]);
      spyOn(_toastr_, 'info').and.callThrough();

      uc = _$controller_('UsersController');
      $timeout = _$timeout_;
      toastr = _toastr_;
    }));

    it('should have a timestamp creation date', function() {
      expect(uc.creationDate).toEqual(jasmine.any(Number));
    });

    it('should define animate class after delaying timeout ', function() {
      $timeout.flush();
      expect(uc.classAnimation).toEqual('rubberBand');
    });

    it('should show a Toastr info and stop animation when invoke showToastr()', function() {
      uc.showToastr();
      expect(toastr.info).toHaveBeenCalled();
      expect(uc.classAnimation).toEqual('');
    });

    it('should define more than 5 awesome things', function() {
      expect(angular.isArray(uc.awesomeThings)).toBeTruthy();
      expect(uc.awesomeThings.length === 5).toBeTruthy();
    });
  });
})();
