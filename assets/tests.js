'use strict';

define("covid-19-dashboard/tests/acceptance/location-search-test", ["qunit", "@ember/test-helpers", "ember-qunit", "ember-cli-mirage/test-support/setup-mirage", "ember-power-select/test-support", "ember-cli-mirage", "covid-19-dashboard/tests/helpers/dashboard-asserts"], function (_qunit, _testHelpers, _emberQunit, _setupMirage, _testSupport, _emberCliMirage, _dashboardAsserts) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Acceptance | location search', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _setupMirage.default)(hooks);
    (0, _qunit.test)('search for locations', /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var locations;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.visit)('/');

              case 2:
                _context.next = 4;
                return (0, _testHelpers.settled)();

              case 4:
                _context.next = 6;
                return (0, _testSupport.selectSearch)('.search-bar', 'z');

              case 6:
                assert.dom('.ember-power-select-option--no-matches-message').hasText('No matches found', 'Search needs at least two characters');
                _context.next = 9;
                return (0, _testSupport.selectSearch)('.search-bar', 'zo');

              case 9:
                assert.dom('.ember-power-select-option').hasText('Arizona', 'Search can find a location with two characters');
                _context.next = 12;
                return (0, _testSupport.selectSearch)('.search-bar', 'Col');

              case 12:
                locations = (0, _testHelpers.findAll)('.ember-power-select-option').map(function (e) {
                  return e.textContent.trim();
                });
                assert.deepEqual(locations, ['Colombia', 'Colorado', 'District of Columbia', 'Colbert County, Alabama'], 'Search can find counties, states, and countries');

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('search api failure', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.visit)('/');

              case 2:
                this.server.get('/states', function () {
                  return new _emberCliMirage.Response(401);
                });
                _context2.next = 5;
                return (0, _testSupport.selectSearch)('.search-bar', 'Alab');

              case 5:
                assert.dom('.ember-power-select-option--no-matches-message').hasText('No matches found', 'A search error message is displayed if the api returns an error');

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('search and navigate to a location', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.visit)('/Illinois');

              case 2:
                _context3.next = 4;
                return (0, _testHelpers.settled)();

              case 4:
                assert.equal((0, _testHelpers.currentURL)(), '/Illinois', 'Start off at the default route');
                (0, _dashboardAsserts.assertTitle)(assert, 'Illinois');
                _context3.next = 8;
                return (0, _testSupport.selectSearch)('.search-bar', 'Alab');

              case 8:
                _context3.next = 10;
                return (0, _testSupport.selectChoose)('.search-bar', 'Alabama');

              case 10:
                _context3.next = 12;
                return (0, _testHelpers.settled)();

              case 12:
                assert.equal((0, _testHelpers.currentURL)(), '/Alabama', 'Selecting `Alabama` from the results transitions to the correct location');
                (0, _dashboardAsserts.assertTitle)(assert, 'Alabama');
                (0, _dashboardAsserts.assertGlobalDetails)(assert);
                (0, _dashboardAsserts.assertBreakdownTable)(assert, {
                  title: 'Confirmed Cases by County',
                  rows: [{
                    title: 'Jefferson County, Alabama',
                    value: '345'
                  }, {
                    title: 'Madison County, Alabama',
                    value: '119'
                  }]
                });
                (0, _dashboardAsserts.assertBreadCrumb)(assert, [{
                  title: 'Global',
                  href: '/'
                }, {
                  title: 'United States',
                  href: '/United_States'
                }, {
                  title: 'Alabama',
                  href: '/Alabama'
                }]);
                (0, _dashboardAsserts.assertMap)(assert, {
                  markerCount: 284,
                  showPin: true
                });
                (0, _dashboardAsserts.assertLocationDetails)(assert, {
                  title: 'Alabama Details',
                  population: '4,486,508',
                  wikiId: 'Alabama'
                });
                (0, _dashboardAsserts.assertLocationCaseDetails)(assert, {
                  casesTotal: '1,315',
                  casesChange: '-- | --',
                  activeTotal: '0',
                  activeChange: '--',
                  fatalTotal: '32',
                  fatalChange: '0',
                  recoveredTotal: '0',
                  recoveredChange: '0'
                });

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());
  });
});
define("covid-19-dashboard/tests/acceptance/mobile-test", ["qunit", "@ember/test-helpers", "ember-qunit", "ember-cli-mirage/test-support/setup-mirage", "covid-19-dashboard/tests/helpers/dashboard-asserts"], function (_qunit, _testHelpers, _emberQunit, _setupMirage, _dashboardAsserts) {
  "use strict";

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  (0, _qunit.module)('Acceptance | mobile', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _setupMirage.default)(hooks);
    hooks.beforeEach(function () {
      var _temp;

      this.owner.register('service:screen', (_temp = /*#__PURE__*/function (_EmberService) {
        _inherits(_temp, _EmberService);

        var _super = _createSuper(_temp);

        function _temp() {
          var _this;

          _classCallCheck(this, _temp);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(args));

          _defineProperty(_assertThisInitialized(_this), "isMobile", true);

          return _this;
        }

        return _temp;
      }(Ember.Service), _temp));
    });
    (0, _qunit.test)('visiting /Earth', /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.visit)('/Earth');

              case 2:
                assert.equal((0, _testHelpers.currentURL)(), '/Earth', '/Earth loads the Earth location');
                _context.next = 5;
                return (0, _testHelpers.settled)();

              case 5:
                assert.dom('.dashboard__global-case-details').doesNotExist('The mobile view does not display global case details');
                (0, _dashboardAsserts.assertBreadCrumb)(assert, [{
                  title: 'Global',
                  href: '/'
                }]);
                (0, _dashboardAsserts.assertMap)(assert, {
                  markerCount: 221,
                  showPin: false
                });
                (0, _dashboardAsserts.assertLocationDetails)(assert, {
                  title: 'Earth Details',
                  population: '--',
                  wikiId: 'Earth'
                });
                _context.next = 11;
                return (0, _testHelpers.settled)();

              case 11:
                (0, _dashboardAsserts.assertGlobalDetails)(assert, '.dashboard__location-case-details');
                assert.dom('.location-table').doesNotExist('Location table is not displayed in details view');
                assert.dom('.mobile-tabs__tab.is-active').hasText('Details', 'Details view is active');
                _context.next = 16;
                return (0, _testHelpers.click)('.mobile-tabs__tab:not(.is-active)');

              case 16:
                _context.next = 18;
                return (0, _testHelpers.settled)();

              case 18:
                assert.dom('.mobile-tabs__tab.is-active').hasText('Confirmed Cases by Country', 'Case breakdown view is active after clicking the tab');
                (0, _dashboardAsserts.assertBreakdownTable)(assert, {
                  title: 'Confirmed Cases by Country',
                  rows: [{
                    title: 'United States',
                    value: '261,438'
                  }, {
                    title: 'Italy',
                    value: '119,827'
                  }]
                });

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('visiting a country - /United_States', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.visit)('/United_States');

              case 2:
                assert.equal((0, _testHelpers.currentURL)(), '/United_States', '/United_States loads the United States location');
                _context2.next = 5;
                return (0, _testHelpers.settled)();

              case 5:
                assert.dom('.dashboard__global-case-details').doesNotExist('The mobile view does not display global case details');
                (0, _dashboardAsserts.assertBreadCrumb)(assert, [{
                  title: 'Global',
                  href: '/'
                }, {
                  title: 'United States',
                  href: '/United_States'
                }]);
                (0, _dashboardAsserts.assertMap)(assert, {
                  markerCount: 221,
                  showPin: true
                });
                (0, _dashboardAsserts.assertLocationDetails)(assert, {
                  title: 'United States Details',
                  population: '328,239,523',
                  wikiId: 'United_States'
                });
                _context2.next = 11;
                return (0, _testHelpers.settled)();

              case 11:
                (0, _dashboardAsserts.assertLocationCaseDetails)(assert, {
                  casesTotal: '261,438',
                  casesChange: '-- | --',
                  activeTotal: '0',
                  activeChange: '--',
                  fatalTotal: '6,699',
                  fatalChange: '0',
                  recoveredTotal: '0',
                  recoveredChange: '0'
                });
                assert.dom('.location-table').doesNotExist('Location table is not displayed in details view');
                assert.dom('.mobile-tabs__tab.is-active').hasText('Details', 'Details view is active');
                _context2.next = 16;
                return (0, _testHelpers.click)('.mobile-tabs__tab:not(.is-active)');

              case 16:
                _context2.next = 18;
                return (0, _testHelpers.settled)();

              case 18:
                assert.dom('.mobile-tabs__tab.is-active').hasText('Confirmed Cases by State', 'Case breakdown view is active after clicking the tab');
                (0, _dashboardAsserts.assertBreakdownTable)(assert, {
                  title: 'Confirmed Cases by State',
                  rows: [{
                    title: 'New York (state)',
                    value: '102,863'
                  }, {
                    title: 'New Jersey',
                    value: '25,590'
                  }]
                });

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('visiting a state - /Alabama', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.visit)('/Alabama');

              case 2:
                assert.equal((0, _testHelpers.currentURL)(), '/Alabama', '/Alabama loads the Alabama location');
                _context3.next = 5;
                return (0, _testHelpers.settled)();

              case 5:
                assert.dom('.dashboard__global-case-details').doesNotExist('The mobile view does not display global case details');
                (0, _dashboardAsserts.assertBreadCrumb)(assert, [{
                  title: 'Global',
                  href: '/'
                }, {
                  title: 'United States',
                  href: '/United_States'
                }, {
                  title: 'Alabama',
                  href: '/Alabama'
                }]);
                (0, _dashboardAsserts.assertMap)(assert, {
                  markerCount: 284,
                  showPin: true
                });
                (0, _dashboardAsserts.assertLocationDetails)(assert, {
                  title: 'Alabama Details',
                  population: '4,486,508',
                  wikiId: 'Alabama'
                });
                (0, _dashboardAsserts.assertLocationCaseDetails)(assert, {
                  casesTotal: '1,315',
                  casesChange: '-- | --',
                  activeTotal: '0',
                  activeChange: '--',
                  fatalTotal: '32',
                  fatalChange: '0',
                  recoveredTotal: '0',
                  recoveredChange: '0'
                });
                assert.dom('.location-table').doesNotExist('Location table is not displayed in details view');
                assert.dom('.mobile-tabs__tab.is-active').hasText('Details', 'Details view is active');
                _context3.next = 14;
                return (0, _testHelpers.click)('.mobile-tabs__tab:not(.is-active)');

              case 14:
                _context3.next = 16;
                return (0, _testHelpers.settled)();

              case 16:
                assert.dom('.mobile-tabs__tab.is-active').hasText('Confirmed Cases by County', 'Case breakdown view is active after clicking the tab');
                (0, _dashboardAsserts.assertBreakdownTable)(assert, {
                  title: 'Confirmed Cases by County',
                  rows: [{
                    title: 'Jefferson County, Alabama',
                    value: '345'
                  }, {
                    title: 'Madison County, Alabama',
                    value: '119'
                  }]
                });

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('visiting a county - /Jefferson_County,_Alabama', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.visit)('/Jefferson_County,_Alabama');

              case 2:
                assert.equal((0, _testHelpers.currentURL)(), '/Jefferson_County,_Alabama', '/Jefferson_County,_Alabama loads the Jefferson County, Alabama location');
                _context4.next = 5;
                return (0, _testHelpers.settled)();

              case 5:
                assert.dom('.dashboard__global-case-details').doesNotExist('The mobile view does not display global case details');
                (0, _dashboardAsserts.assertBreadCrumb)(assert, [{
                  title: 'Global',
                  href: '/'
                }, {
                  title: 'United States',
                  href: '/United_States'
                }, {
                  title: 'Alabama',
                  href: '/Alabama'
                }, {
                  title: 'Jefferson County, Alabama',
                  href: '/Jefferson_County,_Alabama'
                }]);
                (0, _dashboardAsserts.assertMap)(assert, {
                  markerCount: 284,
                  showPin: true
                });
                (0, _dashboardAsserts.assertLocationDetails)(assert, {
                  title: 'Jefferson County, Alabama Details',
                  population: '662,047',
                  wikiId: 'Jefferson_County,_Alabama'
                });
                (0, _dashboardAsserts.assertLocationCaseDetails)(assert, {
                  casesTotal: '345',
                  casesChange: '-- | --',
                  activeTotal: '0',
                  activeChange: '--',
                  fatalTotal: '0',
                  fatalChange: '0',
                  recoveredTotal: '0',
                  recoveredChange: '0'
                });
                assert.dom('.location-table').doesNotExist('Location table is not displayed in details view');
                assert.dom('.mobile-tabs__tab.is-active').hasText('Details', 'Details view is active');
                _context4.next = 14;
                return (0, _testHelpers.click)('.mobile-tabs__tab:not(.is-active)');

              case 14:
                _context4.next = 16;
                return (0, _testHelpers.settled)();

              case 16:
                assert.dom('.mobile-tabs__tab.is-active').hasText('Confirmed Cases by County', 'Case breakdown view is active after clicking the tab');
                (0, _dashboardAsserts.assertBreakdownTable)(assert, {
                  title: 'Confirmed Cases by County',
                  rows: [{
                    title: 'Jefferson County, Alabama',
                    value: '345'
                  }, {
                    title: 'Madison County, Alabama',
                    value: '119'
                  }]
                });

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('visiting a location resets to detail view', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.visit)('/United_States');

              case 2:
                assert.equal((0, _testHelpers.currentURL)(), '/United_States', '/United_States loads the United States location');
                _context5.next = 5;
                return (0, _testHelpers.settled)();

              case 5:
                assert.dom('.location-table').doesNotExist('Location table is not displayed in details view');
                assert.dom('.mobile-tabs__tab.is-active').hasText('Details', 'Details view is active');
                _context5.next = 9;
                return (0, _testHelpers.click)('.mobile-tabs__tab:not(.is-active)');

              case 9:
                _context5.next = 11;
                return (0, _testHelpers.settled)();

              case 11:
                assert.dom('.mobile-tabs__tab.is-active').hasText('Confirmed Cases by State', 'Case breakdown view is active after clicking the tab');
                _context5.next = 14;
                return (0, _testHelpers.click)(".location-table__list li:nth-of-type(1) div");

              case 14:
                assert.equal((0, _testHelpers.currentURL)(), '/New_York_(state)', 'Clicking `New York (state)` loads the correct location');
                _context5.next = 17;
                return (0, _testHelpers.settled)();

              case 17:
                assert.dom('.mobile-tabs__tab.is-active').hasText('Details', 'Details view is active when visiting a new location');
                assert.dom('.dashboard__map-details-header__title').hasText('New York (state) Details', 'Detail view is displayed');
                assert.dom('.location-table').doesNotExist('Location table is not displayed in details view');

              case 20:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }());
  });
});
define("covid-19-dashboard/tests/acceptance/table-navigation-test", ["qunit", "@ember/test-helpers", "ember-qunit", "ember-cli-mirage/test-support/setup-mirage", "covid-19-dashboard/tests/helpers/dashboard-asserts"], function (_qunit, _testHelpers, _emberQunit, _setupMirage, _dashboardAsserts) {
  "use strict";

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Acceptance | table navigation', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _setupMirage.default)(hooks);
    (0, _qunit.test)('navigating to a location via the table - desktop', /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.visit)('/California');

              case 2:
                _context.next = 4;
                return (0, _testHelpers.settled)();

              case 4:
                assert.equal((0, _testHelpers.currentURL)(), '/California', 'Start off at a location');
                (0, _dashboardAsserts.assertTitle)(assert, 'California');
                _context.next = 8;
                return (0, _testHelpers.click)(".location-table__list li:nth-of-type(1) div");

              case 8:
                _context.next = 10;
                return (0, _testHelpers.settled)();

              case 10:
                assert.equal((0, _testHelpers.currentURL)(), '/New_York_(state)', 'Clicking on a table location transitions to that location');
                (0, _dashboardAsserts.assertTitle)(assert, 'New York (state)');
                (0, _dashboardAsserts.assertBreadCrumb)(assert, [{
                  title: 'Global',
                  href: '/'
                }, {
                  title: 'United States',
                  href: '/United_States'
                }, {
                  title: 'New York (state)',
                  href: '/New_York_(state)'
                }]);
                (0, _dashboardAsserts.assertLocationDetails)(assert, {
                  title: 'New York (state) Details',
                  population: '19,157,532',
                  wikiId: 'New_York_(state)'
                });
                _context.next = 16;
                return (0, _testHelpers.settled)();

              case 16:
                (0, _dashboardAsserts.assertLocationCaseDetails)(assert, {
                  casesTotal: '102,863',
                  casesChange: '-- | --',
                  activeTotal: '0',
                  activeChange: '--',
                  fatalTotal: '2,935',
                  fatalChange: '0',
                  recoveredTotal: '0',
                  recoveredChange: '0'
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('navigating to a location via the table - mobile', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        var _temp;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.owner.register('service:screen', (_temp = /*#__PURE__*/function (_EmberService) {
                  _inherits(_temp, _EmberService);

                  var _super = _createSuper(_temp);

                  function _temp() {
                    var _this;

                    _classCallCheck(this, _temp);

                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                      args[_key] = arguments[_key];
                    }

                    _this = _super.call.apply(_super, [this].concat(args));

                    _defineProperty(_assertThisInitialized(_this), "isMobile", true);

                    return _this;
                  }

                  return _temp;
                }(Ember.Service), _temp));
                _context2.next = 3;
                return (0, _testHelpers.visit)('/California');

              case 3:
                _context2.next = 5;
                return (0, _testHelpers.settled)();

              case 5:
                assert.equal((0, _testHelpers.currentURL)(), '/California', 'Start off at a location');
                (0, _dashboardAsserts.assertTitle)(assert, 'California');
                _context2.next = 9;
                return (0, _testHelpers.click)('.mobile-tabs__tab:not(.is-active)');

              case 9:
                _context2.next = 11;
                return (0, _testHelpers.settled)();

              case 11:
                _context2.next = 13;
                return (0, _testHelpers.click)(".location-table__list li:nth-of-type(1) div");

              case 13:
                _context2.next = 15;
                return (0, _testHelpers.settled)();

              case 15:
                assert.equal((0, _testHelpers.currentURL)(), '/New_York_(state)', 'Clicking on a table location transitions to that location');
                (0, _dashboardAsserts.assertTitle)(assert, 'New York (state)');
                (0, _dashboardAsserts.assertBreadCrumb)(assert, [{
                  title: 'Global',
                  href: '/'
                }, {
                  title: 'United States',
                  href: '/United_States'
                }, {
                  title: 'New York (state)',
                  href: '/New_York_(state)'
                }]);
                (0, _dashboardAsserts.assertLocationDetails)(assert, {
                  title: 'New York (state) Details',
                  population: '19,157,532',
                  wikiId: 'New_York_(state)'
                });
                _context2.next = 21;
                return (0, _testHelpers.settled)();

              case 21:
                (0, _dashboardAsserts.assertLocationCaseDetails)(assert, {
                  casesTotal: '102,863',
                  casesChange: '-- | --',
                  activeTotal: '0',
                  activeChange: '--',
                  fatalTotal: '2,935',
                  fatalChange: '0',
                  recoveredTotal: '0',
                  recoveredChange: '0'
                });

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("covid-19-dashboard/tests/acceptance/visit-location-test", ["qunit", "@ember/test-helpers", "ember-qunit", "ember-cli-mirage/test-support/setup-mirage", "covid-19-dashboard/tests/helpers/dashboard-asserts"], function (_qunit, _testHelpers, _emberQunit, _setupMirage, _dashboardAsserts) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Acceptance | visit location', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _setupMirage.default)(hooks);
    (0, _qunit.test)('visiting /', /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.visit)('/');

              case 2:
                assert.equal((0, _testHelpers.currentURL)(), '/Earth', 'The index route redirects to Earth location');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('visiting /Not-A-Location redirect to /Earth', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.visit)('/Not-A-Location');

              case 2:
                assert.equal((0, _testHelpers.currentURL)(), '/Earth', 'An invalid location redirects to Earth location');

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('visiting /Earth', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.visit)('/Earth');

              case 2:
                _context3.next = 4;
                return (0, _testHelpers.settled)();

              case 4:
                assert.equal((0, _testHelpers.currentURL)(), '/Earth', '/Earth loads the Earth location');
                (0, _dashboardAsserts.assertTitle)(assert, 'Earth');
                (0, _dashboardAsserts.assertGlobalDetails)(assert);
                (0, _dashboardAsserts.assertBreakdownTable)(assert, {
                  title: 'Confirmed Cases by Country',
                  rows: [{
                    title: 'United States',
                    value: '261,438'
                  }, {
                    title: 'Italy',
                    value: '119,827'
                  }]
                });
                (0, _dashboardAsserts.assertBreadCrumb)(assert, [{
                  title: 'Global',
                  href: '/'
                }]);
                (0, _dashboardAsserts.assertMap)(assert, {
                  markerCount: 221,
                  showPin: false
                });
                (0, _dashboardAsserts.assertLocationDetails)(assert, {
                  title: 'Earth Details',
                  population: '--',
                  wikiId: 'Earth'
                });
                assert.dom('.dashboard__location-case-details').doesNotExist('Earth location does not show location specific case details');

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('visiting a country - /United_States', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.visit)('/United_States');

              case 2:
                assert.equal((0, _testHelpers.currentURL)(), '/United_States', '/United_States loads the United States location');
                _context4.next = 5;
                return (0, _testHelpers.settled)();

              case 5:
                (0, _dashboardAsserts.assertTitle)(assert, 'United States');
                (0, _dashboardAsserts.assertGlobalDetails)(assert);
                (0, _dashboardAsserts.assertBreakdownTable)(assert, {
                  title: 'Confirmed Cases by State',
                  rows: [{
                    title: 'New York (state)',
                    value: '102,863'
                  }, {
                    title: 'New Jersey',
                    value: '25,590'
                  }]
                });
                (0, _dashboardAsserts.assertBreadCrumb)(assert, [{
                  title: 'Global',
                  href: '/'
                }, {
                  title: 'United States',
                  href: '/United_States'
                }]);
                (0, _dashboardAsserts.assertMap)(assert, {
                  markerCount: 221,
                  showPin: true
                });
                (0, _dashboardAsserts.assertLocationDetails)(assert, {
                  title: 'United States Details',
                  population: '328,239,523',
                  wikiId: 'United_States'
                });
                (0, _dashboardAsserts.assertLocationCaseDetails)(assert, {
                  casesTotal: '261,438',
                  casesChange: '-- | --',
                  activeTotal: '0',
                  activeChange: '--',
                  fatalTotal: '6,699',
                  fatalChange: '0',
                  recoveredTotal: '0',
                  recoveredChange: '0'
                });

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('visiting a state - /Alabama', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.visit)('/Alabama');

              case 2:
                assert.equal((0, _testHelpers.currentURL)(), '/Alabama', '/Alabama loads the Alabama location');
                _context5.next = 5;
                return (0, _testHelpers.settled)();

              case 5:
                (0, _dashboardAsserts.assertTitle)(assert, 'Alabama');
                (0, _dashboardAsserts.assertGlobalDetails)(assert);
                (0, _dashboardAsserts.assertBreakdownTable)(assert, {
                  title: 'Confirmed Cases by County',
                  rows: [{
                    title: 'Jefferson County, Alabama',
                    value: '345'
                  }, {
                    title: 'Madison County, Alabama',
                    value: '119'
                  }]
                });
                (0, _dashboardAsserts.assertBreadCrumb)(assert, [{
                  title: 'Global',
                  href: '/'
                }, {
                  title: 'United States',
                  href: '/United_States'
                }, {
                  title: 'Alabama',
                  href: '/Alabama'
                }]);
                (0, _dashboardAsserts.assertMap)(assert, {
                  markerCount: 284,
                  showPin: true
                });
                (0, _dashboardAsserts.assertLocationDetails)(assert, {
                  title: 'Alabama Details',
                  population: '4,486,508',
                  wikiId: 'Alabama'
                });
                (0, _dashboardAsserts.assertLocationCaseDetails)(assert, {
                  casesTotal: '1,315',
                  casesChange: '-- | --',
                  activeTotal: '0',
                  activeChange: '--',
                  fatalTotal: '32',
                  fatalChange: '0',
                  recoveredTotal: '0',
                  recoveredChange: '0'
                });

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('visiting a county - /Jefferson_County,_Alabama', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _testHelpers.visit)('/Jefferson_County,_Alabama');

              case 2:
                assert.equal((0, _testHelpers.currentURL)(), '/Jefferson_County,_Alabama', '/Jefferson_County,_Alabama loads the Jefferson County, Alabama location');
                _context6.next = 5;
                return (0, _testHelpers.settled)();

              case 5:
                (0, _dashboardAsserts.assertTitle)(assert, 'Jefferson County, Alabama');
                (0, _dashboardAsserts.assertGlobalDetails)(assert);
                (0, _dashboardAsserts.assertBreakdownTable)(assert, {
                  title: 'Confirmed Cases by County',
                  rows: [{
                    title: 'Jefferson County, Alabama',
                    value: '345'
                  }, {
                    title: 'Madison County, Alabama',
                    value: '119'
                  }]
                });
                (0, _dashboardAsserts.assertBreadCrumb)(assert, [{
                  title: 'Global',
                  href: '/'
                }, {
                  title: 'United States',
                  href: '/United_States'
                }, {
                  title: 'Alabama',
                  href: '/Alabama'
                }, {
                  title: 'Jefferson County, Alabama',
                  href: '/Jefferson_County,_Alabama'
                }]);
                (0, _dashboardAsserts.assertMap)(assert, {
                  markerCount: 284,
                  showPin: true
                });
                (0, _dashboardAsserts.assertLocationDetails)(assert, {
                  title: 'Jefferson County, Alabama Details',
                  population: '662,047',
                  wikiId: 'Jefferson_County,_Alabama'
                });
                (0, _dashboardAsserts.assertLocationCaseDetails)(assert, {
                  casesTotal: '345',
                  casesChange: '-- | --',
                  activeTotal: '0',
                  activeChange: '--',
                  fatalTotal: '0',
                  fatalChange: '0',
                  recoveredTotal: '0',
                  recoveredChange: '0'
                });

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }());
  });
});
define("covid-19-dashboard/tests/helpers/dashboard-asserts", ["exports", "@ember/test-helpers"], function (_exports, _testHelpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.assertTitle = _exports.assertLocationCaseDetails = _exports.assertLocationDetails = _exports.assertMap = _exports.assertBreadCrumb = _exports.assertBreakdownTable = _exports.assertGlobalDetails = void 0;

  var assertGlobalDetails = function assertGlobalDetails(assert) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.dashboard__global-case-details';
    var casesTotal = '1,076,017',
        casesChange = '+1,000 | +0.1%',
        fatalTotal = '58,004',
        fatalChange = '0';
    assert.dom("".concat(parent, " .case-details__cases-total")).hasText(casesTotal, 'Case details are correct for total cases');
    assert.dom("".concat(parent, " .case-details__cases-change")).hasText(casesChange, 'Case details are correct for daily total cases');
    assert.dom("".concat(parent, " .case-details__table-total")).hasText(fatalTotal, 'Case details are correct for total fatal cases');
    assert.dom("".concat(parent, " .case-details__table-change")).hasText(fatalChange, 'Case details are correct for daily fatal cases');
  };

  _exports.assertGlobalDetails = assertGlobalDetails;

  var assertBreakdownTable = function assertBreakdownTable(assert, values) {
    var title = values.title,
        rows = values.rows;
    assert.dom('.location-table__title').hasText(title, 'Location shows correct breakdown table title');
    rows.forEach(function (_ref, idx) {
      var title = _ref.title,
          value = _ref.value;
      var row = idx + 1;
      assert.dom(".location-table__list li:nth-of-type(".concat(row, ") div")).hasText(title, "Breakdown table shows the correct title in row ".concat(row));
      assert.dom(".location-table__list li:nth-of-type(".concat(row, ") span")).hasText(value, "Breakdown table shows the correct value in row ".concat(row));
    });
  };

  _exports.assertBreakdownTable = assertBreakdownTable;

  var assertBreadCrumb = function assertBreadCrumb(assert, values) {
    var anchors = (0, _testHelpers.findAll)('.breadcrumb a');
    assert.equal(anchors.length, values.length, 'Number of breadcrumb items is correct');
    values.forEach(function (_ref2, idx) {
      var title = _ref2.title,
          href = _ref2.href;
      assert.dom(anchors[idx]).hasText(title, 'Breadcrumb has the correct display text');
      assert.dom(anchors[idx]).hasAttribute('href', href, 'Breadcrumb has the correct href');
    });
    assert.dom(anchors[anchors.length - 1]).hasClass('active', 'Right most breadcrumb is displayed as active');
  };

  _exports.assertBreadCrumb = assertBreadCrumb;

  var assertMap = function assertMap(assert, values) {
    var markerCount = values.markerCount,
        showPin = values.showPin;
    assert.dom('.location-marker').exists({
      count: markerCount
    }, 'A location displays correct number of location markers on the map');
    assert.dom('.map__marker-icon').exists({
      count: showPin ? 1 : 0
    }, 'A location displays the correct number of pins on the map');
  };

  _exports.assertMap = assertMap;

  var assertLocationDetails = function assertLocationDetails(assert, values) {
    var title = values.title,
        population = values.population,
        wikiId = values.wikiId;
    assert.dom('.dashboard__map-details-header__title').hasText(title, 'A location shows correct details title');
    assert.dom('.dashboard__map-details__population-count').hasText(population, 'A location shows correct population value');
    assert.dom('.dashboard__map-details-header__wiki-link').hasAttribute('href', "https://en.wikipedia.org/wiki/".concat(wikiId), 'A location has the correct wiki link');
  };

  _exports.assertLocationDetails = assertLocationDetails;

  var assertLocationCaseDetails = function assertLocationCaseDetails(assert, values) {
    var casesTotal = values.casesTotal,
        casesChange = values.casesChange,
        activeTotal = values.activeTotal,
        activeChange = values.activeChange,
        fatalTotal = values.fatalTotal,
        fatalChange = values.fatalChange,
        recoveredTotal = values.recoveredTotal,
        recoveredChange = values.recoveredChange;
    var parent = '.dashboard__location-case-details';
    assert.dom("".concat(parent, " .case-details__cases-total")).hasText(casesTotal, 'Case details are correct for total cases');
    assert.dom("".concat(parent, " .case-details__cases-change")).hasText(casesChange, 'Case details are correct for daily total cases');
    assert.dom("".concat(parent, " .case-details__table-col--active .case-details__table-total")).hasText(activeTotal, 'Case details are correct for total active cases');
    assert.dom("".concat(parent, " .case-details__table-col--active .case-details__table-change")).hasText(activeChange, 'Case details are correct for daily active cases');
    assert.dom("".concat(parent, " .case-details__table-col--fatal .case-details__table-total")).hasText(fatalTotal, 'Case details are correct for total fatal cases');
    assert.dom("".concat(parent, " .case-details__table-col--fatal .case-details__table-change")).hasText(fatalChange, 'Case details are correct for daily fatal cases');
    assert.dom("".concat(parent, " .case-details__table-col--recovered .case-details__table-total")).hasText(recoveredTotal, 'Case details are correct for total recovered cases');
    assert.dom("".concat(parent, " .case-details__table-col--recovered .case-details__table-change")).hasText(recoveredChange, 'Case details are correct for daily recovered cases');
  };

  _exports.assertLocationCaseDetails = assertLocationCaseDetails;

  var assertTitle = function assertTitle(assert, location) {
    var title = document.querySelector('head title').textContent;
    assert.equal(title, "".concat(location, " - Covid-19 Tracker - Yahoo Knowledge Graph"), 'Page title matches the expected title');
  };

  _exports.assertTitle = assertTitle;
});
define("covid-19-dashboard/tests/helpers/ember-power-select", ["exports", "ember-power-select/test-support/helpers"], function (_exports, _helpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = deprecatedRegisterHelpers;
  _exports.selectChoose = _exports.touchTrigger = _exports.nativeTouch = _exports.clickTrigger = _exports.typeInSearch = _exports.triggerKeydown = _exports.nativeMouseUp = _exports.nativeMouseDown = _exports.findContains = void 0;

  function deprecateHelper(fn, name) {
    return function () {
      (true && !(false) && Ember.deprecate("DEPRECATED `import { ".concat(name, " } from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import { ").concat(name, " } from 'ember-power-select/test-support/helpers';`"), false, {
        until: '1.11.0',
        id: "ember-power-select-test-support-".concat(name)
      }));
      return fn.apply(void 0, arguments);
    };
  }

  var findContains = deprecateHelper(_helpers.findContains, 'findContains');
  _exports.findContains = findContains;
  var nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  _exports.nativeMouseDown = nativeMouseDown;
  var nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  _exports.nativeMouseUp = nativeMouseUp;
  var triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  _exports.triggerKeydown = triggerKeydown;
  var typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  _exports.typeInSearch = typeInSearch;
  var clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  _exports.clickTrigger = clickTrigger;
  var nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  _exports.nativeTouch = nativeTouch;
  var touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  _exports.touchTrigger = touchTrigger;
  var selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');
  _exports.selectChoose = selectChoose;

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, {
      until: '1.11.0',
      id: 'ember-power-select-test-support-register-helpers'
    }));
    return (0, _helpers.default)();
  }
});
define("covid-19-dashboard/tests/helpers/setup-router", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default(hooks) {
    hooks.beforeEach(function () {
      var router = this.owner.lookup('router:main');
      router.initialURL = '/missing';
      router.startRouting();
    });
  }
});
define("covid-19-dashboard/tests/integration/components/location-table-test", ["qunit", "ember-qunit", "@ember/test-helpers", "ember-cli-mirage/test-support/setup-mirage", "covid-19-dashboard/tests/helpers/setup-router"], function (_qunit, _emberQunit, _testHelpers, _setupMirage, _setupRouter) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | location-table', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _setupMirage.default)(hooks);
    (0, _setupRouter.default)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var location;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.owner.lookup('service:location').fetch('Earth');

              case 2:
                location = _context.sent;
                this.set('location', location);
                this.set('date', '2020-04-03T00:00Z');
                this.set('fieldToShow', 'totalConfirmedCases');
                _context.next = 8;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <LocationTable @location={{this.location}} @publishedDate={{this.date}} @fieldToShow={{this.fieldToShow}} />
                */
                {
                  id: "dnEmD+s9",
                  block: "{\"symbols\":[],\"statements\":[[7,\"location-table\",[],[[\"@location\",\"@publishedDate\",\"@fieldToShow\"],[[27,[24,0],[\"location\"]],[27,[24,0],[\"date\"]],[27,[24,0],[\"fieldToShow\"]]]],null]],\"hasEval\":false,\"upvars\":[]}",
                  meta: {}
                }));

              case 8:
                _context.next = 10;
                return (0, _testHelpers.waitFor)('.location-table__list-item');

              case 10:
                assert.dom('.location-table__list').exists('The list is rendered');
                assert.dom('.location-table__list-item').exists('The list is populated');
                assert.dom('.location-table__list-item').hasText('United States 261,438', 'The list item fields are populated');

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("covid-19-dashboard/tests/integration/components/map-test", ["qunit", "ember-qunit", "@ember/test-helpers", "ember-cli-mirage/test-support/setup-mirage"], function (_qunit, _emberQunit, _testHelpers, _setupMirage) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | map', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _setupMirage.default)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.set('location', {
                  attributes: {
                    latitude: 0,
                    longitude: 0
                  }
                });
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <Map @location={{this.location}}/>
                */
                {
                  id: "St6bZ1jh",
                  block: "{\"symbols\":[],\"statements\":[[7,\"map\",[],[[\"@location\"],[[27,[24,0],[\"location\"]]]],null]],\"hasEval\":false,\"upvars\":[]}",
                  meta: {}
                }));

              case 3:
                assert.dom('.map').exists('Map component can render');
                _context.next = 6;
                return (0, _testHelpers.settled)();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("covid-19-dashboard/tests/integration/components/search-bar-test", ["qunit", "ember-qunit", "@ember/test-helpers", "ember-cli-mirage/test-support/setup-mirage"], function (_qunit, _emberQunit, _testHelpers, _setupMirage) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | search-bar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _setupMirage.default)(hooks);
    (0, _qunit.test)('search bar rendered', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assert.expect(4);
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <SearchBar />
                */
                {
                  id: "Un3ZuBxw",
                  block: "{\"symbols\":[],\"statements\":[[7,\"search-bar\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
                  meta: {}
                }));

              case 3:
                assert.dom('.search-bar__trigger').exists('A search input is rendered');
                _context.next = 6;
                return (0, _testHelpers.click)('.search-bar__trigger');

              case 6:
                _context.next = 8;
                return (0, _testHelpers.fillIn)('.search-bar__trigger-input', 'cha');

              case 8:
                assert.dom('.search-bar .ember-power-select-option--loading-message').exists('While data loads a loading message is rendered');
                _context.next = 11;
                return (0, _testHelpers.waitFor)('.search-bar .ember-power-select-option');

              case 11:
                assert.dom('.search-bar .ember-power-select-option').exists({
                  count: 3
                }, 'Three items are rendered');
                _context.next = 14;
                return (0, _testHelpers.fillIn)('.search-bar__trigger-input', 'states');

              case 14:
                _context.next = 16;
                return (0, _testHelpers.waitFor)('.search-bar .ember-power-select-option');

              case 16:
                assert.dom('.search-bar .ember-power-select-option').hasText('United States', 'Search also looks for countries');

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("covid-19-dashboard/tests/integration/helpers/eq-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Helper | eq', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{eq 1 2}}
                */
                {
                  id: "KWXzdlJy",
                  block: "{\"symbols\":[],\"statements\":[[1,0,0,0,[31,2,2,[27,[26,0,\"CallHead\"],[]],[1,2],null]]],\"hasEval\":false,\"upvars\":[\"eq\"]}",
                  meta: {}
                }));

              case 2:
                assert.dom().hasText('false', 'eq return false when to numbers are not the same');
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{eq "1" "1"}}
                */
                {
                  id: "6Ttozw6t",
                  block: "{\"symbols\":[],\"statements\":[[1,0,0,0,[31,2,2,[27,[26,0,\"CallHead\"],[]],[\"1\",\"1\"],null]]],\"hasEval\":false,\"upvars\":[\"eq\"]}",
                  meta: {}
                }));

              case 5:
                assert.dom().hasText('true', 'eq return true when to numbers are the same');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("covid-19-dashboard/tests/integration/helpers/format-mins-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Helper | format-mins', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assert.expect(3);
                this.set('inputValue', '34');
                _context.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{format-mins inputValue}}
                */
                {
                  id: "Of5uwOIV",
                  block: "{\"symbols\":[],\"statements\":[[1,0,0,0,[31,2,11,[27,[26,1,\"CallHead\"],[]],[[27,[26,0,\"Expression\"],[]]],null]]],\"hasEval\":false,\"upvars\":[\"inputValue\",\"format-mins\"]}",
                  meta: {}
                }));

              case 4:
                assert.dom().hasText('34 mins');
                this.set('inputValue', '834');
                assert.dom().hasText('13h 54m');
                this.set('inputValue', '67834');
                assert.dom().hasText('47d 2h 34m');

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can handle empty values', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.set('inputValue', undefined);
                _context2.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{format-mins inputValue}}
                */
                {
                  id: "Of5uwOIV",
                  block: "{\"symbols\":[],\"statements\":[[1,0,0,0,[31,2,11,[27,[26,1,\"CallHead\"],[]],[[27,[26,0,\"Expression\"],[]]],null]]],\"hasEval\":false,\"upvars\":[\"inputValue\",\"format-mins\"]}",
                  meta: {}
                }));

              case 3:
                assert.dom().hasText('--', 'format helper renders `--` when given undefined');
                this.set('inputValue', null);
                _context2.next = 7;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{format-mins inputValue}}
                */
                {
                  id: "Of5uwOIV",
                  block: "{\"symbols\":[],\"statements\":[[1,0,0,0,[31,2,11,[27,[26,1,\"CallHead\"],[]],[[27,[26,0,\"Expression\"],[]]],null]]],\"hasEval\":false,\"upvars\":[\"inputValue\",\"format-mins\"]}",
                  meta: {}
                }));

              case 7:
                assert.dom().hasText('--', 'format helper renders `--` when given null');

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
  });
});
define("covid-19-dashboard/tests/integration/helpers/format-number-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Helper | format-number', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it formats a number', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.set('inputValue', '1234');
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{format-number inputValue}}
                */
                {
                  id: "cuNHadL3",
                  block: "{\"symbols\":[],\"statements\":[[1,0,0,0,[31,2,13,[27,[26,1,\"CallHead\"],[]],[[27,[26,0,\"Expression\"],[]]],null]]],\"hasEval\":false,\"upvars\":[\"inputValue\",\"format-number\"]}",
                  meta: {}
                }));

              case 3:
                assert.dom().hasText('1,234');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it can handle empty values', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.set('inputValue', undefined);
                _context2.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{format-number inputValue}}
                */
                {
                  id: "cuNHadL3",
                  block: "{\"symbols\":[],\"statements\":[[1,0,0,0,[31,2,13,[27,[26,1,\"CallHead\"],[]],[[27,[26,0,\"Expression\"],[]]],null]]],\"hasEval\":false,\"upvars\":[\"inputValue\",\"format-number\"]}",
                  meta: {}
                }));

              case 3:
                assert.dom().hasText('--', 'format helper renders `--` when given undefined');
                this.set('inputValue', null);
                _context2.next = 7;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{format-number inputValue}}
                */
                {
                  id: "cuNHadL3",
                  block: "{\"symbols\":[],\"statements\":[[1,0,0,0,[31,2,13,[27,[26,1,\"CallHead\"],[]],[[27,[26,0,\"Expression\"],[]]],null]]],\"hasEval\":false,\"upvars\":[\"inputValue\",\"format-number\"]}",
                  meta: {}
                }));

              case 7:
                assert.dom().hasText('--', 'format helper renders `--` when given null');

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
  });
});
define("covid-19-dashboard/tests/integration/helpers/get-radius-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Helper | get-radius', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.set('inputValue', '1234');
                this.set('zoom', 1);
                _context.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{get-radius number=100 zoom=this.zoom}}
                */
                {
                  id: "1mFaRPhj",
                  block: "{\"symbols\":[],\"statements\":[[1,0,0,0,[31,2,10,[27,[26,0,\"CallHead\"],[]],null,[[\"number\",\"zoom\"],[100,[27,[24,0],[\"zoom\"]]]]]]],\"hasEval\":false,\"upvars\":[\"get-radius\"]}",
                  meta: {}
                }));

              case 4:
                assert.dom().hasText('20000', 'get-radius can calculate the radius with a zoom value');
                this.set('zoom', 7);
                _context.next = 8;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{get-radius number=100 zoom=this.zoom}}
                */
                {
                  id: "1mFaRPhj",
                  block: "{\"symbols\":[],\"statements\":[[1,0,0,0,[31,2,10,[27,[26,0,\"CallHead\"],[]],null,[[\"number\",\"zoom\"],[100,[27,[24,0],[\"zoom\"]]]]]]],\"hasEval\":false,\"upvars\":[\"get-radius\"]}",
                  meta: {}
                }));

              case 8:
                assert.dom().hasText('10000', 'get-radius can calculate the radius with a zoom value');

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("covid-19-dashboard/tests/integration/helpers/neq-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Helper | neq', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{neq 1 2}}
                */
                {
                  id: "zm6d8K99",
                  block: "{\"symbols\":[],\"statements\":[[1,0,0,0,[31,2,3,[27,[26,0,\"CallHead\"],[]],[1,2],null]]],\"hasEval\":false,\"upvars\":[\"neq\"]}",
                  meta: {}
                }));

              case 2:
                assert.dom().hasText('true', 'neq return true when to numbers are not the same');
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{neq "1" "1"}}
                */
                {
                  id: "/huseLVs",
                  block: "{\"symbols\":[],\"statements\":[[1,0,0,0,[31,2,3,[27,[26,0,\"CallHead\"],[]],[\"1\",\"1\"],null]]],\"hasEval\":false,\"upvars\":[\"neq\"]}",
                  meta: {}
                }));

              case 5:
                assert.dom().hasText('false', 'neq return false when to numbers are the same');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("covid-19-dashboard/tests/test-helper", ["covid-19-dashboard/app", "covid-19-dashboard/config/environment", "@ember/test-helpers", "ember-qunit", "ember-raf-scheduler/test-support/register-waiter"], function (_app, _environment, _testHelpers, _emberQunit, _registerWaiter) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _registerWaiter.default)();
  (0, _emberQunit.start)();
});
define("covid-19-dashboard/tests/unit/controllers/dashboard/location-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | dashboard/location', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:dashboard/location');
      assert.ok(controller);
    });
  });
});
define("covid-19-dashboard/tests/unit/routes/dashboard/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | dashboard/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:dashboard/index');
      assert.ok(route);
    });
  });
});
define("covid-19-dashboard/tests/unit/routes/dashboard/location-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | dashboard/location', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:dashboard/location');
      assert.ok(route);
    });
  });
});
define("covid-19-dashboard/tests/unit/routes/four-oh-four-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | four-oh-four', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:four-oh-four');
      assert.ok(route);
    });
  });
});
define("covid-19-dashboard/tests/unit/services/elide-test", ["qunit", "ember-qunit", "ember-cli-mirage/test-support/setup-mirage"], function (_qunit, _emberQunit, _setupMirage) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Unit | Service | elide', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _setupMirage.default)(hooks);
    hooks.beforeEach(function () {
      this.service = this.owner.lookup('service:elide');
    });
    (0, _qunit.test)('it exists', function (assert) {
      assert.ok(this.service);
    });
    (0, _qunit.test)('_buildUrl - search', function (assert) {
      var service = this.service;

      var actualUrl = service._buildUrl('counties', {
        search: {
          label: 'Cham'
        },
        fields: {
          counties: ['id', 'label'],
          states: ['label']
        },
        include: ['states']
      });

      assert.equal(actualUrl.toString(), 'https://covid19.knowledge.yahoo.com/api/json/v1/counties?fields%5Bcounties%5D=id%2Clabel&fields%5Bstates%5D=label&filter=label%3D%3D%27*Cham*%27&include=states&page%5Boffset%5D=0&page%5Blimit%5D=4000', '_buildSearchUrl build a url given a request');
    });
    (0, _qunit.test)('_buildFetchUrl - in list', function (assert) {
      var service = this.service;

      var actualUrl = service._buildUrl('counties', {
        isIn: {
          label: ['Champaign County, Illinois'],
          'state.id': [123]
        },
        fields: {
          counties: ['id', 'label'],
          states: ['label']
        },
        include: ['states']
      });

      assert.equal(actualUrl.toString(), 'https://covid19.knowledge.yahoo.com/api/json/v1/counties?fields%5Bcounties%5D=id%2Clabel&fields%5Bstates%5D=label&filter=label%3Din%3D%28%27Champaign+County%5C%2C+Illinois%27%29%3Bstate.id%3Din%3D%28%27123%27%29&include=states&page%5Boffset%5D=0&page%5Blimit%5D=4000', '_buildSearchUrl build a url given a request');
    });
    (0, _qunit.test)('_buildFetchUrl - null & eq', function (assert) {
      var service = this.service;

      var actualUrl = service._buildUrl('healthRecords', {
        eq: {
          referenceDate: '2020-04-03T00:00Z'
        },
        isNull: ['county', 'state', 'country']
      });

      assert.equal(actualUrl.toString(), 'https://covid19.knowledge.yahoo.com/api/json/v1/healthRecords?filter=referenceDate%3D%3D%272020-04-03T00%3A00Z%27%3Bcounty%3Disnull%3Dtrue%3Bstate%3Disnull%3Dtrue%3Bcountry%3Disnull%3Dtrue&page%5Boffset%5D=0&page%5Blimit%5D=4000', '_buildSearchUrl build a url given a request');
    });
    (0, _qunit.test)('fetch - counties', /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var service, actualData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                service = this.service;
                _context.next = 3;
                return service.fetch.perform('counties', {
                  isIn: {
                    id: ['40e54368289c4795f51747e131d408bd']
                  },
                  include: ['state']
                });

              case 3:
                actualData = _context.sent;
                assert.deepEqual(actualData, {
                  data: [{
                    type: 'counties',
                    id: '40e54368289c4795f51747e131d408bd',
                    attributes: {
                      label: 'Champaign County, Illinois',
                      latitude: 40.13986,
                      longitude: -88.19619,
                      population: 201081,
                      wikiId: 'Champaign_County,_Illinois'
                    },
                    relationships: {
                      state: {
                        data: {
                          type: 'states',
                          id: '66c2b329479ee151b4c6b257c0b7a9b7'
                        }
                      }
                    }
                  }],
                  included: [{
                    type: 'states',
                    id: '66c2b329479ee151b4c6b257c0b7a9b7',
                    attributes: {
                      label: 'Illinois',
                      latitude: 40.06446,
                      longitude: -89.19884,
                      population: 12600620,
                      wikiId: 'Illinois'
                    },
                    relationships: {
                      country: {
                        data: {
                          type: 'countries',
                          id: '09d4bca31e2fd8b0f57f79f85ed42bd8'
                        }
                      },
                      counties: {
                        data: [] // Only Alabama has county relationships in the fixture data

                      }
                    }
                  }]
                }, 'fetch can return data for a request');

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('fetch - search states', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        var service, actualData;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                service = this.service;
                _context2.next = 3;
                return service.fetch.perform('states', {
                  search: {
                    label: ['Ill']
                  }
                });

              case 3:
                actualData = _context2.sent;
                assert.deepEqual(actualData, {
                  data: [{
                    type: 'states',
                    id: '66c2b329479ee151b4c6b257c0b7a9b7',
                    attributes: {
                      label: 'Illinois',
                      latitude: 40.06446,
                      longitude: -89.19884,
                      population: 12600620,
                      wikiId: 'Illinois'
                    },
                    relationships: {
                      country: {
                        data: {
                          type: 'countries',
                          id: '09d4bca31e2fd8b0f57f79f85ed42bd8'
                        }
                      },
                      counties: {
                        data: []
                      }
                    }
                  }]
                }, 'fetch can return data for a search request');

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('fetch - no options', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        var service, actualData;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                service = this.service;
                _context3.next = 3;
                return service.fetch.perform('metadata');

              case 3:
                actualData = _context3.sent;
                assert.deepEqual(actualData, {
                  data: [{
                    attributes: {
                      healthRecordsEndDate: '2020-04-03T00:00Z',
                      healthRecordsStartDate: '2020-04-03T00:00Z',
                      publishedDate: '2020-04-03T03:00Z'
                    },
                    id: 'info',
                    type: 'metadata'
                  }]
                }, 'fetch can return data with no request options');

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('fetch - relationship field filter', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        var service, actualData;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                service = this.service;
                _context4.next = 3;
                return service.fetch.perform('healthRecords', {
                  eq: {
                    'country.wikiId': 'Italy'
                  }
                });

              case 3:
                actualData = _context4.sent;
                assert.deepEqual(actualData, {
                  data: [{
                    attributes: {
                      label: 'Italy',
                      dataSource: 'https://news.yahoo.com/coronavirus',
                      latitude: 42.50382,
                      longitude: 12.57347,
                      numActiveCases: 85388,
                      numDeaths: 0,
                      numPendingTests: 0,
                      numRecoveredCases: 0,
                      numTested: 0,
                      referenceDate: '2020-04-03T00:00Z',
                      totalConfirmedCases: 119827,
                      totalDeaths: 14681,
                      totalRecoveredCases: 0,
                      totalTestedCases: 0,
                      type: 'healthRecords',
                      wikiId: 'Italy'
                    },
                    id: '9025bd9a-6e24-35d7-a90e-e1a47eb409ff',
                    relationships: {
                      country: {
                        data: {
                          id: '1007e1b7f894dfbf72a0eaa80f3bc57e',
                          type: 'countries'
                        }
                      },
                      county: {
                        data: null
                      },
                      state: {
                        data: null
                      }
                    },
                    type: 'health-records'
                  }]
                }, 'fetch can filter on relationship fields');

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('fetch - escaped filter values', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        var service, actualData;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                service = this.service;
                _context5.next = 3;
                return service.fetch.perform('counties', {
                  eq: {
                    wikiId: 'Autauga_County,_Alabama'
                  }
                });

              case 3:
                actualData = _context5.sent;
                assert.deepEqual(actualData, {
                  data: [{
                    attributes: {
                      label: 'Autauga County, Alabama',
                      latitude: 32.50771,
                      longitude: -86.66611,
                      population: 54571,
                      wikiId: 'Autauga_County,_Alabama'
                    },
                    id: '78fb973e0330b5bef80178cb2ee15544',
                    relationships: {
                      state: {
                        data: {
                          type: 'states',
                          id: '213fe69502445ed67ae8b99d22838802'
                        }
                      }
                    },
                    type: 'counties'
                  }]
                }, 'fetch can return data with escaped filter values');

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('trace id', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        var service, stateTraceID, countyTraceID;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                assert.expect(3);
                service = this.service;
                this.server.get('https://covid19.knowledge.yahoo.com/api/json/v1/counties', function (db, req) {
                  countyTraceID = req.requestHeaders['x-trace-id'];
                  assert.ok(countyTraceID, 'A unique id is generated per request');
                });
                this.server.get('https://covid19.knowledge.yahoo.com/api/json/v1/states', function (db, req) {
                  stateTraceID = req.requestHeaders['x-trace-id'];
                  assert.ok(stateTraceID, 'A unique id is generated per request');
                });
                _context6.next = 6;
                return service.fetch.perform('counties', {
                  eq: {
                    wikiId: 'Autauga_County,_Alabama'
                  }
                });

              case 6:
                _context6.next = 8;
                return service.fetch.perform('states', {
                  eq: {
                    wikiId: 'Alabama'
                  }
                });

              case 8:
                assert.notEqual(stateTraceID, countyTraceID, 'The headers have unique ids');

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }());
  });
});
define("covid-19-dashboard/tests/unit/services/location-test", ["qunit", "ember-qunit", "ember-cli-mirage/test-support/setup-mirage"], function (_qunit, _emberQunit, _setupMirage) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Unit | Service | location', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _setupMirage.default)(hooks);
    (0, _qunit.test)('it can fetch a location', /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var service, earth, country, state, county, missingLocation;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                service = this.owner.lookup('service:location');
                _context.next = 3;
                return service.fetch('Earth');

              case 3:
                earth = _context.sent;
                assert.equal(earth.id, '5cdd21c97f86686cc505e02fd32a7523', '`fetch` can return Earth location');
                assert.equal(earth.type, 'global', '`fetch` can return Earth location');
                assert.equal(earth.country, undefined, '`fetch` can return Earth location');
                assert.equal(earth.state, undefined, '`fetch` can return Earth location');
                assert.equal(earth.county, undefined, '`fetch` can return Earth location');
                _context.next = 11;
                return service.fetch('Italy');

              case 11:
                country = _context.sent;
                assert.equal(country.id, '1007e1b7f894dfbf72a0eaa80f3bc57e', '`fetch` can return a country location');
                assert.equal(country.type, 'countries', '`fetch` can return a country location');
                assert.equal(country.country, undefined, '`fetch` can return a country location');
                assert.equal(country.state, undefined, '`fetch` can return a country location');
                assert.equal(country.county, undefined, '`fetch` can return a country location');
                _context.next = 19;
                return service.fetch('Florida');

              case 19:
                state = _context.sent;
                assert.equal(state.id, 'eeaca0ed2f6a35370c77de30792debb8', '`fetch` can return a state location');
                assert.equal(state.type, 'states', '`fetch` can return a state location');
                assert.equal(state.country.id, '09d4bca31e2fd8b0f57f79f85ed42bd8', '`fetch` can return a state location');
                assert.equal(state.state, undefined, '`fetch` can return a state location');
                assert.equal(state.county, undefined, '`fetch` can return a state location');
                _context.next = 27;
                return service.fetch('Autauga_County,_Alabama');

              case 27:
                county = _context.sent;
                assert.equal(county.id, '78fb973e0330b5bef80178cb2ee15544', '`fetch` can return a county location');
                assert.equal(county.type, 'counties', '`fetch` can return a county location');
                assert.equal(county.country.id, '09d4bca31e2fd8b0f57f79f85ed42bd8', '`fetch` can return a county location');
                assert.equal(county.county, undefined, '`fetch` can return a county location');
                _context.next = 34;
                return service.fetch('Not_A_Location');

              case 34:
                missingLocation = _context.sent;
                assert.equal(missingLocation, undefined, '`fetch` returns undefined when a location is missing');

              case 36:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  });
});
define("covid-19-dashboard/tests/unit/services/metadata-test", ["qunit", "ember-qunit", "ember-cli-mirage/test-support/setup-mirage"], function (_qunit, _emberQunit, _setupMirage) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Unit | Service | metadata', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _setupMirage.default)(hooks);
    (0, _qunit.test)('it can fetch metadata', /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var service, metadata;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                service = this.owner.lookup('service:metadata');
                assert.equal(service.metadata, undefined, '`metadata` property is initially undefined');
                _context.next = 4;
                return service.fetch();

              case 4:
                metadata = _context.sent;
                assert.deepEqual(metadata, {
                  healthRecordsStartDate: '2020-04-03T00:00Z',
                  healthRecordsEndDate: '2020-04-03T00:00Z',
                  publishedDate: '2020-04-03T03:00Z'
                }, '`fetch` returns api metadata');
                assert.equal(metadata, service.metadata, '`metadata` property is populated after fetch');

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('healthRecordsEndDate', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        var service;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                service = this.owner.lookup('service:metadata');
                assert.equal(service.healthRecordsEndDate, undefined, '`healthRecordsEndDate` property is initially undefined');
                _context2.next = 4;
                return service.fetch();

              case 4:
                assert.equal(service.healthRecordsEndDate, '2020-04-03T00:00Z', '`healthRecordsEndDate` property is populated after fetch');

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('timeSinceRefresh', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        var service;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                service = this.owner.lookup('service:metadata');
                assert.equal(service.timeSinceRefresh, null, '`timeSinceRefresh` property is initially null');
                _context3.next = 4;
                return service.fetch();

              case 4:
                assert.notOk(isNaN(service.timeSinceRefresh), '`timeSinceRefresh` property is populated after fetch');

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());
  });
});
define("covid-19-dashboard/tests/unit/utils/inflector-test", ["covid-19-dashboard/utils/inflector", "qunit"], function (_inflector, _qunit) {
  "use strict";

  /**
   * Copyright 2020, Verizon Media.
   * Licensed under the terms of the Apache License, Version 2.0. See accompanying LICENSE.md file for terms.
   */
  (0, _qunit.module)('Unit | Utility | inflector', function () {
    (0, _qunit.test)('singularize', function (assert) {
      assert.equal((0, _inflector.singularize)('counties'), 'county', 'singularize can singularize counties');
      assert.equal((0, _inflector.singularize)('states'), 'state', 'singularize can singularize states');
      assert.equal((0, _inflector.singularize)('countries'), 'country', 'singularize can singularize countries');
      assert.equal((0, _inflector.singularize)('foo'), 'foo', 'singularize returns the given word if missing from its map');
    });
    (0, _qunit.test)('pluralize', function (assert) {
      assert.equal((0, _inflector.pluralize)('county'), 'counties', 'pluralize can pluralize county');
      assert.equal((0, _inflector.pluralize)('state'), 'states', 'pluralize can pluralize state');
      assert.equal((0, _inflector.pluralize)('country'), 'countries', 'pluralize can pluralize country');
      assert.equal((0, _inflector.pluralize)('foo'), 'foo', 'pluralize returns the given word if missing from its map');
    });
  });
});
define("covid-19-dashboard/tests/unit/utils/location-test", ["covid-19-dashboard/utils/location", "qunit", "ember-qunit", "ember-cli-mirage/test-support/setup-mirage"], function (_location, _qunit, _emberQunit, _setupMirage) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Unit | Utility | location', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _setupMirage.default)(hooks);
    (0, _qunit.test)('breakdownLocationType', /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var service, location;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                service = this.owner.lookup('service:location');
                assert.equal((0, _location.breakdownLocationType)(location), undefined, '`breakdownLocationType` property is initially undefined');
                _context.next = 4;
                return service.fetch('Earth');

              case 4:
                location = _context.sent;
                assert.equal((0, _location.breakdownLocationType)(location), 'country', '`breakdownLocationType` property is `country` when location is Earth');
                _context.next = 8;
                return service.fetch('United_States');

              case 8:
                location = _context.sent;
                assert.equal((0, _location.breakdownLocationType)(location), 'state', '`breakdownLocationType` property is `state` when country location has states');
                _context.next = 12;
                return service.fetch('Italy');

              case 12:
                location = _context.sent;
                assert.equal((0, _location.breakdownLocationType)(location), 'country', '`breakdownLocationType` property is `state` when country location does not have states');
                _context.next = 16;
                return service.fetch('Alabama');

              case 16:
                location = _context.sent;
                assert.equal((0, _location.breakdownLocationType)(location), 'county', '`breakdownLocationType` property is `county` when state location has counties');
                _context.next = 20;
                return service.fetch('Florida');

              case 20:
                location = _context.sent;
                assert.equal((0, _location.breakdownLocationType)(location), 'state', '`breakdownLocationType` property is `state` when state location does not have counties');
                _context.next = 24;
                return service.fetch('Autauga_County,_Alabama');

              case 24:
                location = _context.sent;
                assert.equal((0, _location.breakdownLocationType)(location), 'county', '`breakdownLocationType` property is `county` when location is a county');

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  });
});
define('covid-19-dashboard/config/environment', [], function() {
  var prefix = 'covid-19-dashboard';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('covid-19-dashboard/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
