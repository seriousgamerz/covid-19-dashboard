'use strict';



;define("covid-19-dashboard/app", ["exports", "ember-resolver", "ember-load-initializers", "covid-19-dashboard/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

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

  var App = /*#__PURE__*/function (_EmberApplication) {
    _inherits(App, _EmberApplication);

    var _super = _createSuper(App);

    function App() {
      var _this;

      _classCallCheck(this, App);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(_assertThisInitialized(_this), "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(_assertThisInitialized(_this), "Resolver", _emberResolver.default);

      return _this;
    }

    return App;
  }(Ember.Application);

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("covid-19-dashboard/cldrs/en", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*jslint eqeq: true*/
  var _default = [{
    "locale": "en-US",
    "parentLocale": "en"
  }, {
    "locale": "en",
    "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1],
          t0 = Number(s[0]) == n,
          n10 = t0 && s[0].slice(-1),
          n100 = t0 && s[0].slice(-2);
      if (ord) return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";
      return n == 1 && v0 ? "one" : "other";
    },
    "fields": {
      "year": {
        "displayName": "year",
        "relative": {
          "0": "this year",
          "1": "next year",
          "-1": "last year"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} year",
            "other": "in {0} years"
          },
          "past": {
            "one": "{0} year ago",
            "other": "{0} years ago"
          }
        }
      },
      "year-short": {
        "displayName": "yr.",
        "relative": {
          "0": "this yr.",
          "1": "next yr.",
          "-1": "last yr."
        },
        "relativeTime": {
          "future": {
            "one": "in {0} yr.",
            "other": "in {0} yr."
          },
          "past": {
            "one": "{0} yr. ago",
            "other": "{0} yr. ago"
          }
        }
      },
      "month": {
        "displayName": "month",
        "relative": {
          "0": "this month",
          "1": "next month",
          "-1": "last month"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} month",
            "other": "in {0} months"
          },
          "past": {
            "one": "{0} month ago",
            "other": "{0} months ago"
          }
        }
      },
      "month-short": {
        "displayName": "mo.",
        "relative": {
          "0": "this mo.",
          "1": "next mo.",
          "-1": "last mo."
        },
        "relativeTime": {
          "future": {
            "one": "in {0} mo.",
            "other": "in {0} mo."
          },
          "past": {
            "one": "{0} mo. ago",
            "other": "{0} mo. ago"
          }
        }
      },
      "day": {
        "displayName": "day",
        "relative": {
          "0": "today",
          "1": "tomorrow",
          "-1": "yesterday"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} day",
            "other": "in {0} days"
          },
          "past": {
            "one": "{0} day ago",
            "other": "{0} days ago"
          }
        }
      },
      "day-short": {
        "displayName": "day",
        "relative": {
          "0": "today",
          "1": "tomorrow",
          "-1": "yesterday"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} day",
            "other": "in {0} days"
          },
          "past": {
            "one": "{0} day ago",
            "other": "{0} days ago"
          }
        }
      },
      "hour": {
        "displayName": "hour",
        "relative": {
          "0": "this hour"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} hour",
            "other": "in {0} hours"
          },
          "past": {
            "one": "{0} hour ago",
            "other": "{0} hours ago"
          }
        }
      },
      "hour-short": {
        "displayName": "hr.",
        "relative": {
          "0": "this hour"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} hr.",
            "other": "in {0} hr."
          },
          "past": {
            "one": "{0} hr. ago",
            "other": "{0} hr. ago"
          }
        }
      },
      "minute": {
        "displayName": "minute",
        "relative": {
          "0": "this minute"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} minute",
            "other": "in {0} minutes"
          },
          "past": {
            "one": "{0} minute ago",
            "other": "{0} minutes ago"
          }
        }
      },
      "minute-short": {
        "displayName": "min.",
        "relative": {
          "0": "this minute"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} min.",
            "other": "in {0} min."
          },
          "past": {
            "one": "{0} min. ago",
            "other": "{0} min. ago"
          }
        }
      },
      "second": {
        "displayName": "second",
        "relative": {
          "0": "now"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} second",
            "other": "in {0} seconds"
          },
          "past": {
            "one": "{0} second ago",
            "other": "{0} seconds ago"
          }
        }
      },
      "second-short": {
        "displayName": "sec.",
        "relative": {
          "0": "now"
        },
        "relativeTime": {
          "future": {
            "one": "in {0} sec.",
            "other": "in {0} sec."
          },
          "past": {
            "one": "{0} sec. ago",
            "other": "{0} sec. ago"
          }
        }
      }
    },
    "numbers": {
      "decimal": {
        "long": [[1000, {
          "one": ["0 thousand", 1],
          "other": ["0 thousand", 1]
        }], [10000, {
          "one": ["00 thousand", 2],
          "other": ["00 thousand", 2]
        }], [100000, {
          "one": ["000 thousand", 3],
          "other": ["000 thousand", 3]
        }], [1000000, {
          "one": ["0 million", 1],
          "other": ["0 million", 1]
        }], [10000000, {
          "one": ["00 million", 2],
          "other": ["00 million", 2]
        }], [100000000, {
          "one": ["000 million", 3],
          "other": ["000 million", 3]
        }], [1000000000, {
          "one": ["0 billion", 1],
          "other": ["0 billion", 1]
        }], [10000000000, {
          "one": ["00 billion", 2],
          "other": ["00 billion", 2]
        }], [100000000000, {
          "one": ["000 billion", 3],
          "other": ["000 billion", 3]
        }], [1000000000000, {
          "one": ["0 trillion", 1],
          "other": ["0 trillion", 1]
        }], [10000000000000, {
          "one": ["00 trillion", 2],
          "other": ["00 trillion", 2]
        }], [100000000000000, {
          "one": ["000 trillion", 3],
          "other": ["000 trillion", 3]
        }]],
        "short": [[1000, {
          "one": ["0K", 1],
          "other": ["0K", 1]
        }], [10000, {
          "one": ["00K", 2],
          "other": ["00K", 2]
        }], [100000, {
          "one": ["000K", 3],
          "other": ["000K", 3]
        }], [1000000, {
          "one": ["0M", 1],
          "other": ["0M", 1]
        }], [10000000, {
          "one": ["00M", 2],
          "other": ["00M", 2]
        }], [100000000, {
          "one": ["000M", 3],
          "other": ["000M", 3]
        }], [1000000000, {
          "one": ["0B", 1],
          "other": ["0B", 1]
        }], [10000000000, {
          "one": ["00B", 2],
          "other": ["00B", 2]
        }], [100000000000, {
          "one": ["000B", 3],
          "other": ["000B", 3]
        }], [1000000000000, {
          "one": ["0T", 1],
          "other": ["0T", 1]
        }], [10000000000000, {
          "one": ["00T", 2],
          "other": ["00T", 2]
        }], [100000000000000, {
          "one": ["000T", 3],
          "other": ["000T", 3]
        }]]
      }
    }
  }];
  _exports.default = _default;
});
;define("covid-19-dashboard/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberComponentManager.default;
    }
  });
});
;define("covid-19-dashboard/components/-dynamic-element-alt", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // avoiding reexport directly here because in some circumstances (ember-engines
  // for example) a simple reexport is transformed to `define.alias`,
  // unfortunately at the moment (ember-source@3.13) there is no _actual_
  // `@ember/component` module to alias so this causes issues
  //
  // tldr; we can replace this with a simple reexport when we can rely on Ember
  // actually providing a `@ember/component` module
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
;define("covid-19-dashboard/components/-dynamic-element", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // avoiding reexport directly here because in some circumstances (ember-engines
  // for example) a simple reexport is transformed to `define.alias`,
  // unfortunately at the moment (ember-source@3.13) there is no _actual_
  // `@ember/component` module to alias so this causes issues
  //
  // tldr; we can replace this with a simple reexport when we can rely on Ember
  // actually providing a `@ember/component` module
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
;define("covid-19-dashboard/components/apex-chart", ["exports", "ember-apexchartsjs/components/apex-chart"], function (_exports, _apexChart) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _apexChart.default;
    }
  });
});
;define("covid-19-dashboard/components/array-path-layer", ["exports", "ember-leaflet/components/array-path-layer"], function (_exports, _arrayPathLayer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _arrayPathLayer.default;
    }
  });
});
;define("covid-19-dashboard/components/base-layer", ["exports", "ember-leaflet/components/base-layer"], function (_exports, _baseLayer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _baseLayer.default;
    }
  });
});
;define("covid-19-dashboard/components/basic-dropdown-content", ["exports", "ember-basic-dropdown/components/basic-dropdown-content"], function (_exports, _basicDropdownContent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _basicDropdownContent.default;
    }
  });
});
;define("covid-19-dashboard/components/basic-dropdown-trigger", ["exports", "ember-basic-dropdown/components/basic-dropdown-trigger"], function (_exports, _basicDropdownTrigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _basicDropdownTrigger.default;
    }
  });
});
;define("covid-19-dashboard/components/basic-dropdown", ["exports", "ember-basic-dropdown/components/basic-dropdown"], function (_exports, _basicDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _basicDropdown.default;
    }
  });
});
;define("covid-19-dashboard/components/breadcrumb", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{!-- Copyright 2020, Verizon Media. Licensed under the Apache License, Version 2.0. See accompanying LICENSE file for terms. --}}
  <div class="breadcrumb p-x-30" ...attributes>
    <LinkTo
      @route="dashboard"
    >
      <span class="breadcrumb__label">{{t "global"}}</span>
    </LinkTo>
    {{#each this.locations as | location |}}
      <span class="breadcrumb__delimiter m-x-10">/</span>
      <LinkTo
        class="breadcrumb__link"
        @route="dashboard.location"
        @model={{location.attributes.wikiId}}
      >
        <span class="breadcrumb__label">{{location.attributes.label}}</span>
      </LinkTo>
    {{/each}}
  </div>
  
  */
  {
    id: "o0CGEidF",
    block: "{\"symbols\":[\"location\",\"&attrs\"],\"statements\":[[9,\"div\",false],[23,\"class\",\"breadcrumb p-x-30\",null],[15,2],[10],[1,1,0,0,\"\\n  \"],[7,\"link-to\",[],[[\"@route\"],[\"dashboard\"]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"\\n    \"],[9,\"span\",true],[12,\"class\",\"breadcrumb__label\",null],[10],[1,0,0,0,[31,252,1,[27,[26,0,\"CallHead\"],[]],[\"global\"],null]],[11],[1,1,0,0,\"\\n  \"]],\"parameters\":[]}]]],[1,1,0,0,\"\\n\"],[5,[27,[26,2,\"BlockHead\"],[]],[[31,0,0,[27,[26,1,\"CallHead\"],[]],[[31,0,0,[27,[26,1,\"CallHead\"],[]],[[27,[24,0],[\"locations\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"    \"],[9,\"span\",true],[12,\"class\",\"breadcrumb__delimiter m-x-10\",null],[10],[1,1,0,0,\"/\"],[11],[1,1,0,0,\"\\n    \"],[7,\"link-to\",[[23,\"class\",\"breadcrumb__link\",null]],[[\"@route\",\"@model\"],[\"dashboard.location\",[27,[24,1],[\"attributes\",\"wikiId\"]]]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"\\n      \"],[9,\"span\",true],[12,\"class\",\"breadcrumb__label\",null],[10],[1,0,0,0,[27,[24,1],[\"attributes\",\"label\"]]],[11],[1,1,0,0,\"\\n    \"]],\"parameters\":[]}]]],[1,1,0,0,\"\\n\"]],\"parameters\":[1]}]]],[11],[1,1,0,0,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\",\"-track-array\",\"each\"]}",
    meta: {
      moduleName: "covid-19-dashboard/components/breadcrumb.hbs"
    }
  });
  /**
   * Copyright 2020, Verizon Media.
   * Licensed under the Apache License, Version 2.0. See accompanying LICENSE file for terms.
   */


  var BreadcrumbComponent = /*#__PURE__*/function (_Component) {
    _inherits(BreadcrumbComponent, _Component);

    var _super = _createSuper(BreadcrumbComponent);

    function BreadcrumbComponent() {
      _classCallCheck(this, BreadcrumbComponent);

      return _super.apply(this, arguments);
    }

    _createClass(BreadcrumbComponent, [{
      key: "locations",
      get: function get() {
        var location = this.args.location;

        switch (location === null || location === void 0 ? void 0 : location.type) {
          case 'counties':
            return [location.country, location.state, location];

          case 'states':
            return [location.country, location];

          case 'countries':
            return [location];

          default:
            return [];
        }
      }
    }]);

    return BreadcrumbComponent;
  }(_component.default);

  _exports.default = BreadcrumbComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, BreadcrumbComponent);
});
;define("covid-19-dashboard/components/case-details", ["exports", "@glimmer/component", "ember-concurrency", "covid-19-dashboard/services/location"], function (_exports, _component, _emberConcurrency, _location) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  var __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{!-- Copyright 2020, Verizon Media. Licensed under the Apache License, Version 2.0. See accompanying LICENSE file for terms. --}}
  <div
    class="case-details"
    ...attributes
    {{did-insert this.fetchData @location @publishedDate}}
    {{did-update this.fetchData @location @publishedDate}}
  >
    <h4 class="case-details__title">{{@title}}</h4>
    <div class="case-details__cases m-t-5">
      <h2 class="case-details__cases-total m-r-10">{{format-number this.summaryRecord.totalConfirmedCases}}</h2>
      <h6 
        class="case-details__cases-change is-grey-600 d-tooltip" 
        data-tooltip={{t "label.dod.totalConfirmedCases"}} 
        aria-label={{t "label.dod.totalConfirmedCases"}} 
        tabindex="0"
      >
        {{format-number this.totalConfirmedCasesDiff showPlus=true}} |
        {{format-number this.totalConfirmedCasesDiffPercent style="percent" maximumFractionDigits=1 minimumFractionDigits=1 showPlus=true}}
      </h6>
    </div>
  
    <DistributionChart
      class="case-details__distribution-chart"
      @height="80px"
      @series={{this.series}}
    />
  
    {{#if this.isGlobal}}
      <div class="case-details__table case-details__global flex align-items-center">
        <div class="case-details__table-label tag">
          <div class="case-details__table-dot case-details__table-dot-fatal"></div>
          <div class="case-details__table-label-text">{{t "fatal"}}</div>
        </div>
        <div class="case-details__table-total" aria-label={{t "label.total.totalDeaths"}}>{{format-number this.summaryRecord.totalDeaths}}</div>
        <div class="case-details__table-change d-tooltip" data-tooltip={{t "label.dod.numDeaths"}} aria-label={{t "label.dod.numDeaths"}}>
          {{format-number this.summaryRecord.numDeaths showPlus=true}}
        </div>
      </div>
    {{else}}
      <div class="case-details__table flex">
        <div class="case-details__table-col case-details__table-col--active">
          <div class="case-details__table-label tag">
            <div class="case-details__table-dot case-details__table-dot-active"></div>
            <h6 class="case-details__table-label-text">{{t "active"}}</h6>
          </div>
          <div class="case-details__table-total" aria-label={{t "label.total.numActiveCases"}}>
            {{format-number this.summaryRecord.numActiveCases}}
          </div>
          <span class="case-details__table-change case-details__table-change--active d-tooltip" data-tooltip={{t "label.dod.numActiveCases"}} aria-label={{t "label.dod.numActiveCases"}}>
            {{format-number this.dailyActiveCasesDiff showPlus=true}}
          </span>
        </div>
  
        <div class="case-details__table-col case-details__table-col--fatal">
          <div class="case-details__table-label tag">
            <div class="case-details__table-dot case-details__table-dot-fatal"></div>
            <h6 class="case-details__table-label-text">{{t "fatal"}}</h6>
          </div>
          <div class="case-details__table-total" aria-label={{t "label.total.totalDeaths"}}>
            {{format-number this.summaryRecord.totalDeaths}}
          </div>
          <span class="case-details__table-change case-details__table-change--fatal d-tooltip" data-tooltip={{t "label.dod.numDeaths"}} aria-label={{t "label.dod.numDeaths"}}>
            {{format-number this.summaryRecord.numDeaths showPlus=true}}
          </span>
        </div>
  
        <div class="case-details__table-col case-details__table-col--recovered">
          <div class="case-details__table-label tag">
            <div class="case-details__table-dot case-details__table-dot-recovered"></div>
            <h6 class="case-details__table-label-text">{{t "recovered"}}</h6>
          </div>
          <div class="case-details__table-total" aria-label={{t "label.total.totalRecoveredCases"}}>
            {{format-number this.summaryRecord.totalRecoveredCases}}
          </div>
          <span class="case-details__table-change case-details__table-change--recovered d-tooltip" data-tooltip={{t "label.dod.numRecoveredCases"}} aria-label={{t "label.dod.numRecoveredCases"}}>
            {{format-number this.summaryRecord.numRecoveredCases showPlus=true}}
          </span>
        </div>
      </div>
    {{/if}}
    {{#if this.summaryRecord.dataSource}}
      <a
        class="case-details__datasource-link m-t-10"
        href={{this.summaryRecord.dataSource}}
        target="_blank"
        rel="noopener noreferrer"
        title={{t "datasourceTitle"}}
      >
        {{svg-jar "data-source" class="case-details__datasource-icon m-r-3" width="10px" height="10px"}}
        <div class="case-details__datasource-link-text">{{this.summaryRecord.dataSource}}</div>
      </a>
    {{/if}}
  </div>
  
  */
  {
    id: "llrFYZg5",
    block: "{\"symbols\":[\"&attrs\",\"@publishedDate\",\"@location\",\"@title\"],\"statements\":[[9,\"div\",false],[23,\"class\",\"case-details\",null],[15,1],[3,0,0,[27,[26,3,\"ModifierHead\"],[]],[[27,[24,0],[\"fetchData\"]],[27,[24,3],[]],[27,[24,2],[]]],null],[3,0,0,[27,[26,4,\"ModifierHead\"],[]],[[27,[24,0],[\"fetchData\"]],[27,[24,3],[]],[27,[24,2],[]]],null],[10],[1,1,0,0,\"\\n  \"],[9,\"h4\",true],[12,\"class\",\"case-details__title\",null],[10],[1,0,0,0,[27,[24,4],[]]],[11],[1,1,0,0,\"\\n  \"],[9,\"div\",true],[12,\"class\",\"case-details__cases m-t-5\",null],[10],[1,1,0,0,\"\\n    \"],[9,\"h2\",true],[12,\"class\",\"case-details__cases-total m-r-10\",null],[10],[1,0,0,0,[31,434,13,[27,[26,2,\"CallHead\"],[]],[[27,[24,0],[\"summaryRecord\",\"totalConfirmedCases\"]]],null]],[11],[1,1,0,0,\"\\n    \"],[9,\"h6\",true],[12,\"class\",\"case-details__cases-change is-grey-600 d-tooltip\",null],[13,\"data-tooltip\",[31,588,1,[27,[26,0,\"CallHead\"],[]],[\"label.dod.totalConfirmedCases\"],null],null],[13,\"aria-label\",[31,644,1,[27,[26,0,\"CallHead\"],[]],[\"label.dod.totalConfirmedCases\"],null],null],[12,\"tabindex\",\"0\",null],[10],[1,1,0,0,\"\\n      \"],[1,0,0,0,[31,714,13,[27,[26,2,\"CallHead\"],[]],[[27,[24,0],[\"totalConfirmedCasesDiff\"]]],[[\"showPlus\"],[true]]]],[1,1,0,0,\" |\\n      \"],[1,0,0,0,[31,783,13,[27,[26,2,\"CallHead\"],[]],[[27,[24,0],[\"totalConfirmedCasesDiffPercent\"]]],[[\"style\",\"maximumFractionDigits\",\"minimumFractionDigits\",\"showPlus\"],[\"percent\",1,1,true]]]],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n\\n  \"],[7,\"distribution-chart\",[[23,\"class\",\"case-details__distribution-chart\",null]],[[\"@height\",\"@series\"],[\"80px\",[27,[24,0],[\"series\"]]]],null],[1,1,0,0,\"\\n\\n\"],[5,[27,[26,5,\"BlockHead\"],[]],[[27,[24,0],[\"isGlobal\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[1,1,0,0,\"    \"],[9,\"div\",true],[12,\"class\",\"case-details__table case-details__global flex align-items-center\",null],[10],[1,1,0,0,\"\\n      \"],[9,\"div\",true],[12,\"class\",\"case-details__table-label tag\",null],[10],[1,1,0,0,\"\\n        \"],[9,\"div\",true],[12,\"class\",\"case-details__table-dot case-details__table-dot-fatal\",null],[10],[11],[1,1,0,0,\"\\n        \"],[9,\"div\",true],[12,\"class\",\"case-details__table-label-text\",null],[10],[1,0,0,0,[31,1345,1,[27,[26,0,\"CallHead\"],[]],[\"fatal\"],null]],[11],[1,1,0,0,\"\\n      \"],[11],[1,1,0,0,\"\\n      \"],[9,\"div\",true],[12,\"class\",\"case-details__table-total\",null],[13,\"aria-label\",[31,1434,1,[27,[26,0,\"CallHead\"],[]],[\"label.total.totalDeaths\"],null],null],[10],[1,0,0,0,[31,1466,13,[27,[26,2,\"CallHead\"],[]],[[27,[24,0],[\"summaryRecord\",\"totalDeaths\"]]],null]],[11],[1,1,0,0,\"\\n      \"],[9,\"div\",true],[12,\"class\",\"case-details__table-change d-tooltip\",null],[13,\"data-tooltip\",[31,1590,1,[27,[26,0,\"CallHead\"],[]],[\"label.dod.numDeaths\"],null],null],[13,\"aria-label\",[31,1629,1,[27,[26,0,\"CallHead\"],[]],[\"label.dod.numDeaths\"],null],null],[10],[1,1,0,0,\"\\n        \"],[1,0,0,0,[31,1666,13,[27,[26,2,\"CallHead\"],[]],[[27,[24,0],[\"summaryRecord\",\"numDeaths\"]]],[[\"showPlus\"],[true]]]],[1,1,0,0,\"\\n      \"],[11],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[1,1,0,0,\"    \"],[9,\"div\",true],[12,\"class\",\"case-details__table flex\",null],[10],[1,1,0,0,\"\\n      \"],[9,\"div\",true],[12,\"class\",\"case-details__table-col case-details__table-col--active\",null],[10],[1,1,0,0,\"\\n        \"],[9,\"div\",true],[12,\"class\",\"case-details__table-label tag\",null],[10],[1,1,0,0,\"\\n          \"],[9,\"div\",true],[12,\"class\",\"case-details__table-dot case-details__table-dot-active\",null],[10],[11],[1,1,0,0,\"\\n          \"],[9,\"h6\",true],[12,\"class\",\"case-details__table-label-text\",null],[10],[1,0,0,0,[31,2071,1,[27,[26,0,\"CallHead\"],[]],[\"active\"],null]],[11],[1,1,0,0,\"\\n        \"],[11],[1,1,0,0,\"\\n        \"],[9,\"div\",true],[12,\"class\",\"case-details__table-total\",null],[13,\"aria-label\",[31,2164,1,[27,[26,0,\"CallHead\"],[]],[\"label.total.numActiveCases\"],null],null],[10],[1,1,0,0,\"\\n          \"],[1,0,0,0,[31,2210,13,[27,[26,2,\"CallHead\"],[]],[[27,[24,0],[\"summaryRecord\",\"numActiveCases\"]]],null]],[1,1,0,0,\"\\n        \"],[11],[1,1,0,0,\"\\n        \"],[9,\"span\",true],[12,\"class\",\"case-details__table-change case-details__table-change--active d-tooltip\",null],[13,\"data-tooltip\",[31,2384,1,[27,[26,0,\"CallHead\"],[]],[\"label.dod.numActiveCases\"],null],null],[13,\"aria-label\",[31,2428,1,[27,[26,0,\"CallHead\"],[]],[\"label.dod.numActiveCases\"],null],null],[10],[1,1,0,0,\"\\n          \"],[1,0,0,0,[31,2472,13,[27,[26,2,\"CallHead\"],[]],[[27,[24,0],[\"dailyActiveCasesDiff\"]]],[[\"showPlus\"],[true]]]],[1,1,0,0,\"\\n        \"],[11],[1,1,0,0,\"\\n      \"],[11],[1,1,0,0,\"\\n\\n      \"],[9,\"div\",true],[12,\"class\",\"case-details__table-col case-details__table-col--fatal\",null],[10],[1,1,0,0,\"\\n        \"],[9,\"div\",true],[12,\"class\",\"case-details__table-label tag\",null],[10],[1,1,0,0,\"\\n          \"],[9,\"div\",true],[12,\"class\",\"case-details__table-dot case-details__table-dot-fatal\",null],[10],[11],[1,1,0,0,\"\\n          \"],[9,\"h6\",true],[12,\"class\",\"case-details__table-label-text\",null],[10],[1,0,0,0,[31,2824,1,[27,[26,0,\"CallHead\"],[]],[\"fatal\"],null]],[11],[1,1,0,0,\"\\n        \"],[11],[1,1,0,0,\"\\n        \"],[9,\"div\",true],[12,\"class\",\"case-details__table-total\",null],[13,\"aria-label\",[31,2916,1,[27,[26,0,\"CallHead\"],[]],[\"label.total.totalDeaths\"],null],null],[10],[1,1,0,0,\"\\n          \"],[1,0,0,0,[31,2959,13,[27,[26,2,\"CallHead\"],[]],[[27,[24,0],[\"summaryRecord\",\"totalDeaths\"]]],null]],[1,1,0,0,\"\\n        \"],[11],[1,1,0,0,\"\\n        \"],[9,\"span\",true],[12,\"class\",\"case-details__table-change case-details__table-change--fatal d-tooltip\",null],[13,\"data-tooltip\",[31,3129,1,[27,[26,0,\"CallHead\"],[]],[\"label.dod.numDeaths\"],null],null],[13,\"aria-label\",[31,3168,1,[27,[26,0,\"CallHead\"],[]],[\"label.dod.numDeaths\"],null],null],[10],[1,1,0,0,\"\\n          \"],[1,0,0,0,[31,3207,13,[27,[26,2,\"CallHead\"],[]],[[27,[24,0],[\"summaryRecord\",\"numDeaths\"]]],[[\"showPlus\"],[true]]]],[1,1,0,0,\"\\n        \"],[11],[1,1,0,0,\"\\n      \"],[11],[1,1,0,0,\"\\n\\n      \"],[9,\"div\",true],[12,\"class\",\"case-details__table-col case-details__table-col--recovered\",null],[10],[1,1,0,0,\"\\n        \"],[9,\"div\",true],[12,\"class\",\"case-details__table-label tag\",null],[10],[1,1,0,0,\"\\n          \"],[9,\"div\",true],[12,\"class\",\"case-details__table-dot case-details__table-dot-recovered\",null],[10],[11],[1,1,0,0,\"\\n          \"],[9,\"h6\",true],[12,\"class\",\"case-details__table-label-text\",null],[10],[1,0,0,0,[31,3570,1,[27,[26,0,\"CallHead\"],[]],[\"recovered\"],null]],[11],[1,1,0,0,\"\\n        \"],[11],[1,1,0,0,\"\\n        \"],[9,\"div\",true],[12,\"class\",\"case-details__table-total\",null],[13,\"aria-label\",[31,3666,1,[27,[26,0,\"CallHead\"],[]],[\"label.total.totalRecoveredCases\"],null],null],[10],[1,1,0,0,\"\\n          \"],[1,0,0,0,[31,3717,13,[27,[26,2,\"CallHead\"],[]],[[27,[24,0],[\"summaryRecord\",\"totalRecoveredCases\"]]],null]],[1,1,0,0,\"\\n        \"],[11],[1,1,0,0,\"\\n        \"],[9,\"span\",true],[12,\"class\",\"case-details__table-change case-details__table-change--recovered d-tooltip\",null],[13,\"data-tooltip\",[31,3899,1,[27,[26,0,\"CallHead\"],[]],[\"label.dod.numRecoveredCases\"],null],null],[13,\"aria-label\",[31,3946,1,[27,[26,0,\"CallHead\"],[]],[\"label.dod.numRecoveredCases\"],null],null],[10],[1,1,0,0,\"\\n          \"],[1,0,0,0,[31,3993,13,[27,[26,2,\"CallHead\"],[]],[[27,[24,0],[\"summaryRecord\",\"numRecoveredCases\"]]],[[\"showPlus\"],[true]]]],[1,1,0,0,\"\\n        \"],[11],[1,1,0,0,\"\\n      \"],[11],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]],[5,[27,[26,5,\"BlockHead\"],[]],[[27,[24,0],[\"summaryRecord\",\"dataSource\"]]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"    \"],[9,\"a\",true],[12,\"class\",\"case-details__datasource-link m-t-10\",null],[13,\"href\",[27,[24,0],[\"summaryRecord\",\"dataSource\"]],null],[12,\"target\",\"_blank\",null],[12,\"rel\",\"noopener noreferrer\",null],[13,\"title\",[31,4321,1,[27,[26,0,\"CallHead\"],[]],[\"datasourceTitle\"],null],null],[10],[1,1,0,0,\"\\n      \"],[1,0,0,0,[31,4357,7,[27,[26,1,\"CallHead\"],[]],[\"data-source\"],[[\"class\",\"width\",\"height\"],[\"case-details__datasource-icon m-r-3\",\"10px\",\"10px\"]]]],[1,1,0,0,\"\\n      \"],[9,\"div\",true],[12,\"class\",\"case-details__datasource-link-text\",null],[10],[1,0,0,0,[27,[24,0],[\"summaryRecord\",\"dataSource\"]]],[11],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]],[11],[1,1,0,0,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\",\"svg-jar\",\"format-number\",\"did-insert\",\"did-update\",\"if\"]}",
    meta: {
      moduleName: "covid-19-dashboard/components/case-details.hbs"
    }
  });
  /**
   * Copyright 2020, Verizon Media.
   * Licensed under the Apache License, Version 2.0. See accompanying LICENSE file for terms.
   */


  var CaseDetailsComponent = (_dec = (0, _emberConcurrency.task)( /*#__PURE__*/regeneratorRuntime.mark(function _callee(location) {
    var _todayHealthRecords$, _yesterdayHealthRecor;

    var _yield$this$elide$fet, todayHealthRecords, todayRecord, yesterday, yesterdayString, _yield$this$elide$fet2, yesterdayHealthRecords, yesterdayRecord;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            this.loading = true;
            _context.next = 3;
            return this.elide.fetch.perform('latestHealthRecords', {
              eq: {
                wikiId: location.attributes.wikiId
              },
              fields: {
                latestHealthRecords: ['totalConfirmedCases', 'numActiveCases', 'totalDeaths', 'numDeaths', 'totalRecoveredCases', 'numRecoveredCases', 'dataSource', 'referenceDate']
              },
              limit: 1
            });

          case 3:
            _yield$this$elide$fet = _context.sent;
            todayHealthRecords = _yield$this$elide$fet.data;
            todayRecord = (_todayHealthRecords$ = todayHealthRecords[0]) === null || _todayHealthRecords$ === void 0 ? void 0 : _todayHealthRecords$.attributes;
            this.summaryRecord = todayRecord;
            yesterday = new Date(this.summaryRecord.referenceDate);
            yesterday.setDate(yesterday.getDate() - 1);
            yesterdayString = "".concat(yesterday.toISOString().slice(0, 16), "Z");
            _context.next = 12;
            return this.elide.fetch.perform('healthRecords', {
              eq: {
                wikiId: location.attributes.wikiId
              },
              isIn: {
                referenceDate: [yesterdayString]
              },
              fields: {
                healthRecords: ['totalConfirmedCases', 'numActiveCases']
              },
              limit: 1
            });

          case 12:
            _yield$this$elide$fet2 = _context.sent;
            yesterdayHealthRecords = _yield$this$elide$fet2.data;
            yesterdayRecord = (_yesterdayHealthRecor = yesterdayHealthRecords[0]) === null || _yesterdayHealthRecor === void 0 ? void 0 : _yesterdayHealthRecor.attributes;
            this.updateDailyNumbers(todayRecord, yesterdayRecord);
            this.loading = false;

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })).restartable(), (_class = (_temp = /*#__PURE__*/function (_Component) {
    _inherits(CaseDetailsComponent, _Component);

    var _super = _createSuper(CaseDetailsComponent);

    function CaseDetailsComponent() {
      var _this;

      _classCallCheck(this, CaseDetailsComponent);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _initializerDefineProperty(_assertThisInitialized(_this), "elide", _descriptor, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "summaryRecord", _descriptor2, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "loading", _descriptor3, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "dailyActiveCasesDiff", _descriptor4, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "totalConfirmedCasesDiff", _descriptor5, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "totalConfirmedCasesDiffPercent", _descriptor6, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "fetchSummaryRecord", _descriptor7, _assertThisInitialized(_this));

      return _this;
    }

    _createClass(CaseDetailsComponent, [{
      key: "fetchData",
      value: function fetchData() {
        var _this$args = this.args,
            location = _this$args.location,
            publishedDate = _this$args.publishedDate;

        if (location && publishedDate) {
          this.fetchSummaryRecord.perform(location);
        }
      }
    }, {
      key: "updateDailyNumbers",
      value: function updateDailyNumbers(todayRecord, yesterdayRecord) {
        if (!todayRecord || !yesterdayRecord) return;
        this.dailyActiveCasesDiff = null;
        this.totalConfirmedCasesDiff = null;
        this.totalConfirmedCasesDiffPercent = null;

        if (todayRecord.numActiveCases !== null && yesterdayRecord.numActiveCases !== null) {
          this.dailyActiveCasesDiff = todayRecord.numActiveCases - yesterdayRecord.numActiveCases;
        }

        if (todayRecord.totalConfirmedCases !== null && yesterdayRecord.totalConfirmedCases !== null) {
          this.totalConfirmedCasesDiff = todayRecord.totalConfirmedCases - yesterdayRecord.totalConfirmedCases;
          this.totalConfirmedCasesDiffPercent = todayRecord.totalConfirmedCases / yesterdayRecord.totalConfirmedCases - 1;
        }
      }
    }, {
      key: "isGlobal",
      get: function get() {
        var _this$args$location;

        return ((_this$args$location = this.args.location) === null || _this$args$location === void 0 ? void 0 : _this$args$location.attributes.wikiId) === _location.GLOBAL_ID;
      }
    }, {
      key: "series",
      get: function get() {
        if (this.loading || !this.summaryRecord) {
          return [];
        }

        var _this$summaryRecord = this.summaryRecord,
            _this$summaryRecord$n = _this$summaryRecord.numActiveCases,
            numActiveCases = _this$summaryRecord$n === void 0 ? 0 : _this$summaryRecord$n,
            _this$summaryRecord$t = _this$summaryRecord.totalDeaths,
            totalDeaths = _this$summaryRecord$t === void 0 ? 0 : _this$summaryRecord$t,
            _this$summaryRecord$t2 = _this$summaryRecord.totalRecoveredCases,
            totalRecoveredCases = _this$summaryRecord$t2 === void 0 ? 0 : _this$summaryRecord$t2,
            _this$summaryRecord$t3 = _this$summaryRecord.totalConfirmedCases,
            totalConfirmedCases = _this$summaryRecord$t3 === void 0 ? 0 : _this$summaryRecord$t3;
        var unknown = totalConfirmedCases - (numActiveCases + totalDeaths + totalRecoveredCases);
        return [{
          name: 'Active',
          data: [numActiveCases]
        }, {
          name: 'Fatal',
          data: [totalDeaths]
        }, {
          name: 'Recovered',
          data: [totalRecoveredCases]
        }, {
          name: 'Unknown',
          data: [unknown]
        }];
      }
    }]);

    return CaseDetailsComponent;
  }(_component.default), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "elide", [Ember.inject.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "summaryRecord", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "loading", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "dailyActiveCasesDiff", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "totalConfirmedCasesDiff", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "totalConfirmedCasesDiffPercent", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "fetchData", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "fetchData"), _class.prototype), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "fetchSummaryRecord", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = CaseDetailsComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, CaseDetailsComponent);
});
;define("covid-19-dashboard/components/circle-layer", ["exports", "ember-leaflet/components/circle-layer"], function (_exports, _circleLayer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _circleLayer.default;
    }
  });
});
;define("covid-19-dashboard/components/circle-marker-layer", ["exports", "ember-leaflet/components/circle-marker-layer"], function (_exports, _circleMarkerLayer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _circleMarkerLayer.default;
    }
  });
});
;define("covid-19-dashboard/components/container-layer", ["exports", "ember-leaflet/components/container-layer"], function (_exports, _containerLayer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _containerLayer.default;
    }
  });
});
;define("covid-19-dashboard/components/distribution-chart", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{!-- Copyright 2020, Verizon Media. Licensed under the Apache License, Version 2.0. See accompanying LICENSE file for terms. --}}
  <ApexChart
    class="distribution-chart"
    @chartOptions={{this.options}}
    @height={{@height}}
    @series={{@series}}
    @type="bar"
    @width={{@width}}
    ...attributes
  />
  
  */
  {
    id: "Rdrzp4rx",
    block: "{\"symbols\":[\"@height\",\"@series\",\"@width\",\"&attrs\"],\"statements\":[[7,\"apex-chart\",[[23,\"class\",\"distribution-chart\",null],[15,4]],[[\"@chartOptions\",\"@height\",\"@series\",\"@type\",\"@width\"],[[27,[24,0],[\"options\"]],[27,[24,1],[]],[27,[24,2],[]],\"bar\",[27,[24,3],[]]]],null],[1,1,0,0,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    meta: {
      moduleName: "covid-19-dashboard/components/distribution-chart.hbs"
    }
  });
  /**
   * Copyright 2020, Verizon Media.
   * Licensed under the Apache License, Version 2.0. See accompanying LICENSE file for terms.
   */


  var DistributionChartComponent = /*#__PURE__*/function (_Component) {
    _inherits(DistributionChartComponent, _Component);

    var _super = _createSuper(DistributionChartComponent);

    function DistributionChartComponent() {
      _classCallCheck(this, DistributionChartComponent);

      return _super.apply(this, arguments);
    }

    _createClass(DistributionChartComponent, [{
      key: "options",
      get: function get() {
        var labels = this.args.labels;
        var options = {
          chart: {
            stacked: true,
            toolbar: {
              show: false
            }
          },
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: '50%'
            }
          },
          colors: ['#19c6f4', '#fed800', '#87d812', '#f2f2f2'],
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false
          },
          xaxis: {
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            labels: {
              show: false
            },
            max: this.args.series.reduce(function (acc, _ref2) {
              var data = _ref2.data;
              return acc + data;
            }, 0)
          },
          grid: {
            show: false,
            padding: {
              left: 0,
              right: 0
            }
          },
          tooltip: {
            enabled: false
          }
        };

        if (labels) {
          options.xaxis.categories = labels;
        } else {
          options.yaxis = {
            show: false
          };
        }

        return options;
      }
    }]);

    return DistributionChartComponent;
  }(_component.default);

  _exports.default = DistributionChartComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, DistributionChartComponent);
});
;define("covid-19-dashboard/components/div-overlay-layer", ["exports", "ember-leaflet/components/div-overlay-layer"], function (_exports, _divOverlayLayer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _divOverlayLayer.default;
    }
  });
});
;define("covid-19-dashboard/components/geojson-layer", ["exports", "ember-leaflet/components/geojson-layer"], function (_exports, _geojsonLayer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _geojsonLayer.default;
    }
  });
});
;define("covid-19-dashboard/components/help-links", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{!-- Copyright 2020, Verizon Media. Licensed under the Apache License, Version 2.0. See accompanying LICENSE file for terms. --}}
  <div class="help-links" ...attributes>
    <h5 class="help-links__title p-b-10">
      {{t "helpTitle"}}
    </h5>
    <div class="help-links__links flex flex-column">
      <a
        class="help-links__link p-y-5 has-icon-back"
        href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
        target="_blank"
        rel="noopener noreferrer"
        title={{t "cdcTitle"}}
      >
        <span>{{t "cdc"}}</span>
        {{svg-jar "external"
          class="help-links__external-icon"
          width="10px"
          height="10px"
        }}
      </a>
      <a
        class="help-links__link p-y-5 has-icon-back"
        href="https://www.who.int/health-topics/coronavirus"
        target="_blank"
        rel="noopener noreferrer"
        title={{t "whoTitle"}}
      >
        <span>{{t "who"}}</span>
        {{svg-jar "external"
          class="help-links__external-icon"
          width="10px"
          height="10px"
        }}
      </a>
      <a
        class="help-links__link p-y-5 has-icon-back"
        href="https://news.yahoo.com/coronavirus"
        target="_blank"
        rel="noopener noreferrer"
        title={{t "yahooNewsTitle"}}
      >
        <span>{{t "yahooNews"}}</span>
        {{svg-jar "external"
          class="help-links__external-icon"
          width="10px"
          height="10px"
        }}
      </a>
    </div>
  </div>
  */
  {
    id: "rO0oRVfv",
    block: "{\"symbols\":[\"&attrs\"],\"statements\":[[9,\"div\",false],[23,\"class\",\"help-links\",null],[15,1],[10],[1,1,0,0,\"\\n  \"],[9,\"h5\",true],[12,\"class\",\"help-links__title p-b-10\",null],[10],[1,1,0,0,\"\\n    \"],[1,0,0,0,[31,216,1,[27,[26,0,\"CallHead\"],[]],[\"helpTitle\"],null]],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n  \"],[9,\"div\",true],[12,\"class\",\"help-links__links flex flex-column\",null],[10],[1,1,0,0,\"\\n    \"],[9,\"a\",true],[12,\"class\",\"help-links__link p-y-5 has-icon-back\",null],[12,\"href\",\"https://www.cdc.gov/coronavirus/2019-ncov/index.html\",null],[12,\"target\",\"_blank\",null],[12,\"rel\",\"noopener noreferrer\",null],[13,\"title\",[31,483,1,[27,[26,0,\"CallHead\"],[]],[\"cdcTitle\"],null],null],[10],[1,1,0,0,\"\\n      \"],[9,\"span\",true],[10],[1,0,0,0,[31,518,1,[27,[26,0,\"CallHead\"],[]],[\"cdc\"],null]],[11],[1,1,0,0,\"\\n      \"],[1,0,0,0,[31,543,7,[27,[26,1,\"CallHead\"],[]],[\"external\"],[[\"class\",\"width\",\"height\"],[\"help-links__external-icon\",\"10px\",\"10px\"]]]],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n    \"],[9,\"a\",true],[12,\"class\",\"help-links__link p-y-5 has-icon-back\",null],[12,\"href\",\"https://www.who.int/health-topics/coronavirus\",null],[12,\"target\",\"_blank\",null],[12,\"rel\",\"noopener noreferrer\",null],[13,\"title\",[31,850,1,[27,[26,0,\"CallHead\"],[]],[\"whoTitle\"],null],null],[10],[1,1,0,0,\"\\n      \"],[9,\"span\",true],[10],[1,0,0,0,[31,885,1,[27,[26,0,\"CallHead\"],[]],[\"who\"],null]],[11],[1,1,0,0,\"\\n      \"],[1,0,0,0,[31,910,7,[27,[26,1,\"CallHead\"],[]],[\"external\"],[[\"class\",\"width\",\"height\"],[\"help-links__external-icon\",\"10px\",\"10px\"]]]],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n    \"],[9,\"a\",true],[12,\"class\",\"help-links__link p-y-5 has-icon-back\",null],[12,\"href\",\"https://news.yahoo.com/coronavirus\",null],[12,\"target\",\"_blank\",null],[12,\"rel\",\"noopener noreferrer\",null],[13,\"title\",[31,1206,1,[27,[26,0,\"CallHead\"],[]],[\"yahooNewsTitle\"],null],null],[10],[1,1,0,0,\"\\n      \"],[9,\"span\",true],[10],[1,0,0,0,[31,1247,1,[27,[26,0,\"CallHead\"],[]],[\"yahooNews\"],null]],[11],[1,1,0,0,\"\\n      \"],[1,0,0,0,[31,1278,7,[27,[26,1,\"CallHead\"],[]],[\"external\"],[[\"class\",\"width\",\"height\"],[\"help-links__external-icon\",\"10px\",\"10px\"]]]],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n\"],[11]],\"hasEval\":false,\"upvars\":[\"t\",\"svg-jar\"]}",
    meta: {
      moduleName: "covid-19-dashboard/components/help-links.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("covid-19-dashboard/components/image-layer", ["exports", "ember-leaflet/components/image-layer"], function (_exports, _imageLayer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _imageLayer.default;
    }
  });
});
;define("covid-19-dashboard/components/interactive-layer", ["exports", "ember-leaflet/components/interactive-layer"], function (_exports, _interactiveLayer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _interactiveLayer.default;
    }
  });
});
;define("covid-19-dashboard/components/leaflet-map", ["exports", "ember-leaflet/components/leaflet-map"], function (_exports, _leafletMap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _leafletMap.default;
    }
  });
});
;define("covid-19-dashboard/components/list-iterator", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{!-- Copyright 2020, Verizon Media. Licensed under the Apache License, Version 2.0. See accompanying LICENSE file for terms. --}}
  {{#if @occlusion}}
    <VerticalCollection
       @items={{@locations}}
       @estimateHeight={{31}}
       @staticHeight={{false}}
       @key="attributes.wikiId"
       @idForFirstItem={{@selectedLocationId}}
       @bufferSize={{5}}
       as |location|
    >
      {{yield location}}
    </VerticalCollection>
  {{else}}
    {{#each @locations as |location|}}
      {{yield location}}
    {{/each}}
  {{/if}}
  */
  {
    id: "DV7ND9Uw",
    block: "{\"symbols\":[\"location\",\"location\",\"&default\",\"@locations\",\"@selectedLocationId\",\"@occlusion\"],\"statements\":[[5,[27,[26,2,\"BlockHead\"],[]],[[27,[24,6],[]]],null,[[\"default\",\"else\"],[{\"statements\":[[1,1,0,0,\"  \"],[7,\"vertical-collection\",[],[[\"@items\",\"@estimateHeight\",\"@staticHeight\",\"@key\",\"@idForFirstItem\",\"@bufferSize\"],[[27,[24,4],[]],31,false,\"attributes.wikiId\",[27,[24,5],[]],5]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"\\n    \"],[16,3,[[27,[24,2],[]]]],[1,1,0,0,\"\\n  \"]],\"parameters\":[2]}]]],[1,1,0,0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[5,[27,[26,1,\"BlockHead\"],[]],[[31,0,0,[27,[26,0,\"CallHead\"],[]],[[31,0,0,[27,[26,0,\"CallHead\"],[]],[[27,[24,4],[]]],null]],null]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"    \"],[16,3,[[27,[24,1],[]]]],[1,1,0,0,\"\\n\"]],\"parameters\":[1]}]]]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"-track-array\",\"each\",\"if\"]}",
    meta: {
      moduleName: "covid-19-dashboard/components/list-iterator.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("covid-19-dashboard/components/location-info", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{!-- Copyright 2020, Verizon Media. Licensed under the Apache License, Version 2.0. See accompanying LICENSE file for terms. --}}
  <div class="dashboard__map-details-header flex align-items-center">
    <h4 class="dashboard__map-details-header__title flex-1">{{t "locationDetails" location=@location.attributes.label}}</h4>
    <a
      class="dashboard__map-details-header__wiki-link"
      href="https://en.wikipedia.org/wiki/{{@location.attributes.wikiId}}"
      title={{t "wikiLinkTitle"}}
      target="_blank"
      rel="noopener noreferrer"
    >
      {{svg-jar "domain" title=(t "wikiLinkTitle") class="dashboard__map-details-header__wiki-icon" width="16px" height="16px"}}
    </a>
  </div>
  <div class="dashboard__map-details__population m-y-10 flex space-between is-grey-700">
    <div class="dashboard__map-details__population-label">{{t "population"}}</div>
    <div class="dashboard__map-details__population-count">{{format-number @location.attributes.population}}</div>
  </div>
  */
  {
    id: "gu4NUbNc",
    block: "{\"symbols\":[\"@location\"],\"statements\":[[9,\"div\",true],[12,\"class\",\"dashboard__map-details-header flex align-items-center\",null],[10],[1,1,0,0,\"\\n  \"],[9,\"h4\",true],[12,\"class\",\"dashboard__map-details-header__title flex-1\",null],[10],[1,0,0,0,[31,259,1,[27,[26,0,\"CallHead\"],[]],[\"locationDetails\"],[[\"location\"],[[27,[24,1],[\"attributes\",\"label\"]]]]]],[11],[1,1,0,0,\"\\n  \"],[9,\"a\",true],[12,\"class\",\"dashboard__map-details-header__wiki-link\",null],[13,\"href\",[32,[\"https://en.wikipedia.org/wiki/\",[27,[24,1],[\"attributes\",\"wikiId\"]]]],null],[13,\"title\",[31,465,1,[27,[26,0,\"CallHead\"],[]],[\"wikiLinkTitle\"],null],null],[12,\"target\",\"_blank\",null],[12,\"rel\",\"noopener noreferrer\",null],[10],[1,1,0,0,\"\\n    \"],[1,0,0,0,[31,545,7,[27,[26,1,\"CallHead\"],[]],[\"domain\"],[[\"title\",\"class\",\"width\",\"height\"],[[31,569,1,[27,[26,0,\"CallHead\"],[]],[\"wikiLinkTitle\"],null],\"dashboard__map-details-header__wiki-icon\",\"16px\",\"16px\"]]]],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n\"],[11],[1,1,0,0,\"\\n\"],[9,\"div\",true],[12,\"class\",\"dashboard__map-details__population m-y-10 flex space-between is-grey-700\",null],[10],[1,1,0,0,\"\\n  \"],[9,\"div\",true],[12,\"class\",\"dashboard__map-details__population-label\",null],[10],[1,0,0,0,[31,825,1,[27,[26,0,\"CallHead\"],[]],[\"population\"],null]],[11],[1,1,0,0,\"\\n  \"],[9,\"div\",true],[12,\"class\",\"dashboard__map-details__population-count\",null],[10],[1,0,0,0,[31,906,13,[27,[26,2,\"CallHead\"],[]],[[27,[24,1],[\"attributes\",\"population\"]]],null]],[11],[1,1,0,0,\"\\n\"],[11]],\"hasEval\":false,\"upvars\":[\"t\",\"svg-jar\",\"format-number\"]}",
    meta: {
      moduleName: "covid-19-dashboard/components/location-info.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("covid-19-dashboard/components/location-marker", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{!-- Copyright 2020, Verizon Media. Licensed under the Apache License, Version 2.0. See accompanying LICENSE file for terms. --}}
  {{#let @layer as |layer|}}
    <layer.circle
      @className="location-marker"
      @lat={{@rec.attributes.latitude}}
      @lng={{@rec.attributes.longitude}}
      @radius={{get-radius number=(get @rec.attributes @fieldToShow) zoom=@zoom}}
      @color="#1bc6f3"
      @bubblingMouseEvents={{true}}
      @center={{true}}
      @onClick={{fn @onLocationClick @rec.attributes.wikiId}} as |marker|>
      <marker.tooltip>
        <div class="map__tooltip">
          <div class="map__tooltip-header">{{@rec.attributes.label}}</div>
          <div class="map__tooltip-metric-header p-y-8">
            <div class="map__tooltip-metric-label">{{t "total"}}</div>
            <div class="map__tooltip-metric-count">{{format-number @rec.attributes.totalConfirmedCases}}</div>
          </div>
          <div class="map__tooltip-breakdown m-t-5">
            <div class="map__tooltip-metric">
              <div class="map__tooltip-metric-label">
                <div class="map__tooltip-dot map__tooltip-dot-active"></div>
                {{t "active"}}
              </div>
              <div class="map__tooltip-metric-count">{{format-number @rec.attributes.numActiveCases}}</div>
            </div>
            <div class="map__tooltip-metric">
              <div class="map__tooltip-metric-label">
                <div class="map__tooltip-dot map__tooltip-dot-fatal"></div>
                {{t "fatal"}}
              </div>
              <div class="map__tooltip-metric-count">{{format-number @rec.attributes.totalDeaths}}</div>
            </div>
            <div class="map__tooltip-metric">
              <div class="map__tooltip-metric-label">
                <div class="map__tooltip-dot map__tooltip-dot-recovered"></div>
                {{t "recovered"}}
              </div>
              <div class="map__tooltip-metric-count">{{format-number @rec.attributes.totalRecoveredCases}}</div>
            </div>
          </div>
        </div>
      </marker.tooltip>
    </layer.circle>
  {{/let}}
  
  */
  {
    id: "Bx/UEtSe",
    block: "{\"symbols\":[\"layer\",\"marker\",\"@rec\",\"@zoom\",\"@fieldToShow\",\"@onLocationClick\",\"@layer\"],\"statements\":[[5,[27,[26,5,\"BlockHead\"],[]],[[27,[24,7],[]]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"  \"],[7,[27,[24,1],[\"circle\"]],[],[[\"@className\",\"@lat\",\"@lng\",\"@radius\",\"@color\",\"@bubblingMouseEvents\",\"@center\",\"@onClick\"],[\"location-marker\",[27,[24,3],[\"attributes\",\"latitude\"]],[27,[24,3],[\"attributes\",\"longitude\"]],[31,298,10,[27,[26,1,\"CallHead\"],[]],null,[[\"number\",\"zoom\"],[[31,317,3,[27,[26,0,\"CallHead\"],[]],[[27,[24,3],[\"attributes\"]],[27,[24,5],[]]],null],[27,[24,4],[]]]]],\"#1bc6f3\",true,true,[31,455,2,[27,[26,2,\"CallHead\"],[]],[[27,[24,6],[]],[27,[24,3],[\"attributes\",\"wikiId\"]]],null]]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"\\n    \"],[7,[27,[24,2],[\"tooltip\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"\\n      \"],[9,\"div\",true],[12,\"class\",\"map__tooltip\",null],[10],[1,1,0,0,\"\\n        \"],[9,\"div\",true],[12,\"class\",\"map__tooltip-header\",null],[10],[1,0,0,0,[27,[24,3],[\"attributes\",\"label\"]]],[11],[1,1,0,0,\"\\n        \"],[9,\"div\",true],[12,\"class\",\"map__tooltip-metric-header p-y-8\",null],[10],[1,1,0,0,\"\\n          \"],[9,\"div\",true],[12,\"class\",\"map__tooltip-metric-label\",null],[10],[1,0,0,0,[31,746,1,[27,[26,3,\"CallHead\"],[]],[\"total\"],null]],[11],[1,1,0,0,\"\\n          \"],[9,\"div\",true],[12,\"class\",\"map__tooltip-metric-count\",null],[10],[1,0,0,0,[31,815,13,[27,[26,4,\"CallHead\"],[]],[[27,[24,3],[\"attributes\",\"totalConfirmedCases\"]]],null]],[11],[1,1,0,0,\"\\n        \"],[11],[1,1,0,0,\"\\n        \"],[9,\"div\",true],[12,\"class\",\"map__tooltip-breakdown m-t-5\",null],[10],[1,1,0,0,\"\\n          \"],[9,\"div\",true],[12,\"class\",\"map__tooltip-metric\",null],[10],[1,1,0,0,\"\\n            \"],[9,\"div\",true],[12,\"class\",\"map__tooltip-metric-label\",null],[10],[1,1,0,0,\"\\n              \"],[9,\"div\",true],[12,\"class\",\"map__tooltip-dot map__tooltip-dot-active\",null],[10],[11],[1,1,0,0,\"\\n              \"],[1,0,0,0,[31,1126,1,[27,[26,3,\"CallHead\"],[]],[\"active\"],null]],[1,1,0,0,\"\\n            \"],[11],[1,1,0,0,\"\\n            \"],[9,\"div\",true],[12,\"class\",\"map__tooltip-metric-count\",null],[10],[1,0,0,0,[31,1211,13,[27,[26,4,\"CallHead\"],[]],[[27,[24,3],[\"attributes\",\"numActiveCases\"]]],null]],[11],[1,1,0,0,\"\\n          \"],[11],[1,1,0,0,\"\\n          \"],[9,\"div\",true],[12,\"class\",\"map__tooltip-metric\",null],[10],[1,1,0,0,\"\\n            \"],[9,\"div\",true],[12,\"class\",\"map__tooltip-metric-label\",null],[10],[1,1,0,0,\"\\n              \"],[9,\"div\",true],[12,\"class\",\"map__tooltip-dot map__tooltip-dot-fatal\",null],[10],[11],[1,1,0,0,\"\\n              \"],[1,0,0,0,[31,1467,1,[27,[26,3,\"CallHead\"],[]],[\"fatal\"],null]],[1,1,0,0,\"\\n            \"],[11],[1,1,0,0,\"\\n            \"],[9,\"div\",true],[12,\"class\",\"map__tooltip-metric-count\",null],[10],[1,0,0,0,[31,1551,13,[27,[26,4,\"CallHead\"],[]],[[27,[24,3],[\"attributes\",\"totalDeaths\"]]],null]],[11],[1,1,0,0,\"\\n          \"],[11],[1,1,0,0,\"\\n          \"],[9,\"div\",true],[12,\"class\",\"map__tooltip-metric\",null],[10],[1,1,0,0,\"\\n            \"],[9,\"div\",true],[12,\"class\",\"map__tooltip-metric-label\",null],[10],[1,1,0,0,\"\\n              \"],[9,\"div\",true],[12,\"class\",\"map__tooltip-dot map__tooltip-dot-recovered\",null],[10],[11],[1,1,0,0,\"\\n              \"],[1,0,0,0,[31,1808,1,[27,[26,3,\"CallHead\"],[]],[\"recovered\"],null]],[1,1,0,0,\"\\n            \"],[11],[1,1,0,0,\"\\n            \"],[9,\"div\",true],[12,\"class\",\"map__tooltip-metric-count\",null],[10],[1,0,0,0,[31,1896,13,[27,[26,4,\"CallHead\"],[]],[[27,[24,3],[\"attributes\",\"totalRecoveredCases\"]]],null]],[11],[1,1,0,0,\"\\n          \"],[11],[1,1,0,0,\"\\n        \"],[11],[1,1,0,0,\"\\n      \"],[11],[1,1,0,0,\"\\n    \"]],\"parameters\":[]}]]],[1,1,0,0,\"\\n  \"]],\"parameters\":[2]}]]],[1,1,0,0,\"\\n\"]],\"parameters\":[1]}]]]],\"hasEval\":false,\"upvars\":[\"get\",\"get-radius\",\"fn\",\"t\",\"format-number\",\"let\"]}",
    meta: {
      moduleName: "covid-19-dashboard/components/location-marker.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("covid-19-dashboard/components/location-table", ["exports", "@glimmer/component", "ember-concurrency", "covid-19-dashboard/utils/inflector", "covid-19-dashboard/utils/location"], function (_exports, _component, _emberConcurrency, _inflector, _location) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{!-- Copyright 2020, Verizon Media. Licensed under the terms of the Apache License, Version 2.0. See accompanying LICENSE.md file for terms. --}}
  <div
    class="location-table"
    ...attributes
    {{did-insert this.fetchData @location @publishedDate}}
    {{did-update this.fetchData @location @publishedDate}}
  >
    <div class="flex align-items-center p-l-20 p-b-10">
      {{#if this.parentLocationId}}
        <LinkTo class="p-r-10 flex align-items-center" @route="dashboard.location" @model={{this.parentLocationId}}>
          {{svg-jar "arrowhead-left-circle"
            class="location-table__title__up"
            width="18px"
            height="18px"
          }}
        </LinkTo>
      {{/if}}
      <h4 class="location-table__title flex-1">{{t this.title}}</h4>
    </div>
  
    {{#if this.loading}}
      <div class="location-table__loader">
        <div class="loader is-medium"></div>
      </div>
    {{else}}
      {{#if this.locations}}
        <ul class="location-table__list p-l-20 p-b-10">
          <ListIterator
            @occlusion={{@occlusion}}
            @locations={{this.locations}}
            @idForFirstItem={{this.selectedLocationId}}
            as |location|
          >
            {{#let (get location 'attributes.wikiId') as | locationId |}}
              <li class="location-table__list-item p-y-5 p-x-10 {{if (eq locationId this.selectedLocationId) "active"}}">
                <div
                  role="button"
                  class="location-table__list-item__place"
                  {{on "click" (fn @onLocationSelect locationId)}}
                >
                  {{location.attributes.label}}
                </div>
                <span class="location-table__list-item__total-confirmed-cases" aria-label={{t (concat "label.total." @fieldToShow)}}>
                  {{format-number (get location.attributes @fieldToShow)}}
                </span>
              </li>
            {{/let}}
          </ListIterator>
        </ul>
      {{else}}
        <div class="location-table__empty p-t-80">
          <div class="location-table__empty__icon-bg flex align-items-center justify-content-center p-y-5">
            {{svg-jar "microscope" class="location-table__empty__icon" width="64px" height="64px" }}
          </div>
          <h5 class="location-table__empty__title is-grey-600 p-t-15">{{t "noData.title"}}</h5>
          <p class="location-table__empty__text is-grey-600 p-x-40">{{t "noData.description"}}</p>
        </div>
      {{/if}}
    {{/if}}
  </div>
  
  */
  {
    id: "AXGbkTal",
    block: "{\"symbols\":[\"location\",\"locationId\",\"@onLocationSelect\",\"@fieldToShow\",\"@occlusion\",\"&attrs\",\"@publishedDate\",\"@location\"],\"statements\":[[9,\"div\",false],[23,\"class\",\"location-table\",null],[15,6],[3,0,0,[27,[26,10,\"ModifierHead\"],[]],[[27,[24,0],[\"fetchData\"]],[27,[24,8],[]],[27,[24,7],[]]],null],[3,0,0,[27,[26,11,\"ModifierHead\"],[]],[[27,[24,0],[\"fetchData\"]],[27,[24,8],[]],[27,[24,7],[]]],null],[10],[1,1,0,0,\"\\n  \"],[9,\"div\",true],[12,\"class\",\"flex align-items-center p-l-20 p-b-10\",null],[10],[1,1,0,0,\"\\n\"],[5,[27,[26,3,\"BlockHead\"],[]],[[27,[24,0],[\"parentLocationId\"]]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"      \"],[7,\"link-to\",[[23,\"class\",\"p-r-10 flex align-items-center\",null]],[[\"@route\",\"@model\"],[\"dashboard.location\",[27,[24,0],[\"parentLocationId\"]]]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"\\n        \"],[1,0,0,0,[31,522,7,[27,[26,0,\"CallHead\"],[]],[\"arrowhead-left-circle\"],[[\"class\",\"width\",\"height\"],[\"location-table__title__up\",\"18px\",\"18px\"]]]],[1,1,0,0,\"\\n      \"]],\"parameters\":[]}]]],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]],[1,1,0,0,\"    \"],[9,\"h4\",true],[12,\"class\",\"location-table__title flex-1\",null],[10],[1,0,0,0,[31,731,1,[27,[26,1,\"CallHead\"],[]],[[27,[24,0],[\"title\"]]],null]],[11],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n\\n\"],[5,[27,[26,3,\"BlockHead\"],[]],[[27,[24,0],[\"loading\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[1,1,0,0,\"    \"],[9,\"div\",true],[12,\"class\",\"location-table__loader\",null],[10],[1,1,0,0,\"\\n      \"],[9,\"div\",true],[12,\"class\",\"loader is-medium\",null],[10],[11],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[5,[27,[26,3,\"BlockHead\"],[]],[[27,[24,0],[\"locations\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[1,1,0,0,\"      \"],[9,\"ul\",true],[12,\"class\",\"location-table__list p-l-20 p-b-10\",null],[10],[1,1,0,0,\"\\n        \"],[7,\"list-iterator\",[],[[\"@occlusion\",\"@locations\",\"@idForFirstItem\"],[[27,[24,5],[]],[27,[24,0],[\"locations\"]],[27,[24,0],[\"selectedLocationId\"]]]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"\\n\"],[5,[27,[26,9,\"BlockHead\"],[]],[[31,1175,3,[27,[26,7,\"CallHead\"],[]],[[27,[24,1],[]],\"attributes.wikiId\"],null]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"            \"],[9,\"li\",true],[13,\"class\",[32,[\"location-table__list-item p-y-5 p-x-10 \",[31,1293,2,[27,[26,3,\"CallHead\"],[]],[[31,1297,2,[27,[26,2,\"CallHead\"],[]],[[27,[24,2],[]],[27,[24,0],[\"selectedLocationId\"]]],null],\"active\"],null]]],null],[10],[1,1,0,0,\"\\n              \"],[9,\"div\",false],[23,\"role\",\"button\",null],[23,\"class\",\"location-table__list-item__place\",null],[3,0,0,[27,[26,5,\"ModifierHead\"],[]],[\"click\",[31,1485,2,[27,[26,4,\"CallHead\"],[]],[[27,[24,3],[]],[27,[24,2],[]]],null]],null],[10],[1,1,0,0,\"\\n                \"],[1,0,0,0,[27,[24,1],[\"attributes\",\"label\"]]],[1,1,0,0,\"\\n              \"],[11],[1,1,0,0,\"\\n              \"],[9,\"span\",true],[12,\"class\",\"location-table__list-item__total-confirmed-cases\",null],[13,\"aria-label\",[31,1693,1,[27,[26,1,\"CallHead\"],[]],[[31,1696,6,[27,[26,6,\"CallHead\"],[]],[\"label.total.\",[27,[24,4],[]]],null]],null],null],[10],[1,1,0,0,\"\\n                \"],[1,0,0,0,[31,1753,13,[27,[26,8,\"CallHead\"],[]],[[31,1768,3,[27,[26,7,\"CallHead\"],[]],[[27,[24,1],[\"attributes\"]],[27,[24,4],[]]],null]],null]],[1,1,0,0,\"\\n              \"],[11],[1,1,0,0,\"\\n            \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[2]}]]],[1,1,0,0,\"        \"]],\"parameters\":[1]}]]],[1,1,0,0,\"\\n      \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[1,1,0,0,\"      \"],[9,\"div\",true],[12,\"class\",\"location-table__empty p-t-80\",null],[10],[1,1,0,0,\"\\n        \"],[9,\"div\",true],[12,\"class\",\"location-table__empty__icon-bg flex align-items-center justify-content-center p-y-5\",null],[10],[1,1,0,0,\"\\n          \"],[1,0,0,0,[31,2083,7,[27,[26,0,\"CallHead\"],[]],[\"microscope\"],[[\"class\",\"width\",\"height\"],[\"location-table__empty__icon\",\"64px\",\"64px\"]]]],[1,1,0,0,\"\\n        \"],[11],[1,1,0,0,\"\\n        \"],[9,\"h5\",true],[12,\"class\",\"location-table__empty__title is-grey-600 p-t-15\",null],[10],[1,0,0,0,[31,2255,1,[27,[26,1,\"CallHead\"],[]],[\"noData.title\"],null]],[11],[1,1,0,0,\"\\n        \"],[9,\"p\",true],[12,\"class\",\"location-table__empty__text is-grey-600 p-x-40\",null],[10],[1,0,0,0,[31,2347,1,[27,[26,1,\"CallHead\"],[]],[\"noData.description\"],null]],[11],[1,1,0,0,\"\\n      \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[11],[1,1,0,0,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"svg-jar\",\"t\",\"eq\",\"if\",\"fn\",\"on\",\"concat\",\"get\",\"format-number\",\"let\",\"did-insert\",\"did-update\"]}",
    meta: {
      moduleName: "covid-19-dashboard/components/location-table.hbs"
    }
  });
  /**
   * Copyright 2020, Verizon Media.
   * Licensed under the terms of the Apache License, Version 2.0. See accompanying LICENSE.md file for terms.
   */


  var locationFilters = {
    countries: function countries() {
      return {
        notNull: ['country'],
        isNull: ['county', 'state']
      };
    },
    states: function states(_ref2) {
      var wikiId = _ref2.attributes.wikiId;
      return {
        eq: {
          'country.wikiId': wikiId
        },
        notNull: ['state'],
        isNull: ['county']
      };
    },
    counties: function counties(_ref3) {
      var wikiId = _ref3.attributes.wikiId;
      return {
        eq: {
          'state.wikiId': wikiId
        },
        notNull: ['county']
      };
    }
  };
  var LocationTableComponent = (_dec = (0, _emberConcurrency.task)( /*#__PURE__*/regeneratorRuntime.mark(function _callee(location, breakdownLocationType, fieldToShow) {
    var req, _yield$this$elide$fet, _yield$this$elide$fet2, healthRecords;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            this.loading = true;
            req = _objectSpread({
              fields: {
                latestHealthRecords: [fieldToShow, 'label', 'wikiId']
              }
            }, locationFilters[(0, _inflector.pluralize)(breakdownLocationType)](location), {
              sort: "-".concat(fieldToShow)
            });
            _context.next = 4;
            return this.elide.fetch.perform('latestHealthRecords', req);

          case 4:
            _yield$this$elide$fet = _context.sent;
            _yield$this$elide$fet2 = _yield$this$elide$fet.data;
            healthRecords = _yield$this$elide$fet2 === void 0 ? [] : _yield$this$elide$fet2;
            this.locations = healthRecords;
            this.loading = false;

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })).restartable(), (_class = (_temp = /*#__PURE__*/function (_Component) {
    _inherits(LocationTableComponent, _Component);

    var _super = _createSuper(LocationTableComponent);

    function LocationTableComponent() {
      var _this;

      _classCallCheck(this, LocationTableComponent);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _initializerDefineProperty(_assertThisInitialized(_this), "elide", _descriptor, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "locations", _descriptor2, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "loading", _descriptor3, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "fetchDataTask", _descriptor4, _assertThisInitialized(_this));

      return _this;
    }

    _createClass(LocationTableComponent, [{
      key: "fetchData",
      value: function fetchData() {
        var fetchDataTask = this.fetchDataTask,
            breakdownLocationType = this.breakdownLocationType,
            breakdownLocation = this.breakdownLocation,
            _this$args = this.args,
            fieldToShow = _this$args.fieldToShow,
            publishedDate = _this$args.publishedDate;

        if (breakdownLocationType && fieldToShow && publishedDate) {
          fetchDataTask.perform(breakdownLocation, breakdownLocationType, fieldToShow);
        }
      }
    }, {
      key: "title",
      get: function get() {
        var breakdownLocationType = this.breakdownLocationType;

        if (breakdownLocationType) {
          return "casesBy.".concat(breakdownLocationType);
        }

        return 'empty';
      }
    }, {
      key: "breakdownLocation",
      get: function get() {
        var breakdownLocationType = this.breakdownLocationType,
            location = this.args.location;
        if (!location || !breakdownLocationType) return undefined;

        switch (breakdownLocationType) {
          case 'county':
            return location.state || location;

          case 'state':
            return location.country || location;

          default:
            return undefined;
        }
      }
    }, {
      key: "breakdownLocationType",
      get: function get() {
        var location = this.args.location;
        return (0, _location.breakdownLocationType)(location);
      }
    }, {
      key: "parentLocationId",
      get: function get() {
        var location = this.args.location;
        var breakdownLocationType = this.breakdownLocationType;

        if (breakdownLocationType === 'country') {
          return undefined;
        } else if (breakdownLocationType === 'state') {
          return 'Earth';
        } else if (breakdownLocationType === 'county' && (location === null || location === void 0 ? void 0 : location.country)) {
          return location.country.attributes.wikiId;
        }

        return undefined;
      }
    }, {
      key: "selectedLocationId",
      get: function get() {
        return this.args.location.attributes.wikiId;
      }
    }]);

    return LocationTableComponent;
  }(_component.default), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "elide", [Ember.inject.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "locations", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "loading", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return true;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "fetchData", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "fetchData"), _class.prototype), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "fetchDataTask", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = LocationTableComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, LocationTableComponent);
});
;define("covid-19-dashboard/components/map-header", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{!-- Copyright 2020, Verizon Media. Licensed under the Apache License, Version 2.0. See accompanying LICENSE file for terms. --}}
  <div class="map-header" ...attributes>
    <Breadcrumb @location={{@location}} />
  </div>
  */
  {
    id: "0GfmGO25",
    block: "{\"symbols\":[\"&attrs\",\"@location\"],\"statements\":[[9,\"div\",false],[23,\"class\",\"map-header\",null],[15,1],[10],[1,1,0,0,\"\\n  \"],[7,\"breadcrumb\",[],[[\"@location\"],[[27,[24,2],[]]]],null],[1,1,0,0,\"\\n\"],[11]],\"hasEval\":false,\"upvars\":[]}",
    meta: {
      moduleName: "covid-19-dashboard/components/map-header.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("covid-19-dashboard/components/map", ["exports", "@glimmer/component", "covid-19-dashboard/config/environment", "ember-concurrency"], function (_exports, _component, _environment, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  var __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{!-- Copyright 2020, Verizon Media. Licensed under the Apache License, Version 2.0. See accompanying LICENSE file for terms. --}}
  {{#if this.centerLocation}}
    <LeafletMap
      class="map"
      @center={{this.centerLocation}}
      @zoom={{this.zoom}}
      @minZoom={{1}}
      @maxZoom={{10}}
      @onMoveend={{this.setZoom}}
      @onZoomend={{this.setCurrentZoom}}
      {{did-insert this.fetchGlobalRecords @publishedDate}}
      {{did-update this.fetchGlobalRecords @publishedDate}}
      {{did-insert this.fetchCountyRecords @location @publishedDate}}
      {{did-update this.fetchCountyRecords @location @publishedDate}}
      ...attributes
      as |layers|
    >
      <layers.tile @attribution={{t this.tileServerAttribution}} @url={{this.tileUrl}} />
      {{#if this.showMarker}}
        <layers.marker
          @location={{this.centerLocation}}
          @icon={{icon className="map__marker-icon" iconUrl="location.svg" iconSize=(array 32 32)}}
        />
      {{/if}}
      {{#each this.countryRecords as |rec|}}
        <LocationMarker @rec={{rec}} @layer={{layers}} @fieldToShow={{@fieldToShow}} @onLocationClick={{@onLocationClick}}  @zoom={{this.currentZoom}}/>
      {{/each}}
      {{#each this.stateRecords as |rec|}}
        {{#if (or (not this.countyRecords.length) (neq rec.attributes.wikiId this.focusedState.attributes.wikiId))}}
          <LocationMarker @rec={{rec}} @layer={{layers}} @fieldToShow={{@fieldToShow}} @onLocationClick={{@onLocationClick}}  @zoom={{this.currentZoom}}/>
        {{/if}}
      {{/each}}
      {{#each this.countyRecords as |rec|}}
        {{#if (eq rec.relationships.state.data.id this.focusedState.id)}}
          <LocationMarker @rec={{rec}} @layer={{layers}} @fieldToShow={{@fieldToShow}} @onLocationClick={{@onLocationClick}} @zoom={{this.currentZoom}} />
        {{/if}}
      {{/each}}
    </LeafletMap>
  {{else}}
    <div class="map__placeholder" ...attributes></div>
  {{/if}}
  
  */
  {
    id: "OTYuLLNr",
    block: "{\"symbols\":[\"layers\",\"rec\",\"rec\",\"rec\",\"&attrs\",\"@fieldToShow\",\"@onLocationClick\",\"@publishedDate\",\"@location\"],\"statements\":[[5,[27,[26,1,\"BlockHead\"],[]],[[27,[24,0],[\"centerLocation\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[1,1,0,0,\"  \"],[7,\"leaflet-map\",[[23,\"class\",\"map\",null],[15,5],[3,0,0,[27,[26,7,\"ModifierHead\"],[]],[[27,[24,0],[\"fetchGlobalRecords\"]],[27,[24,8],[]]],null],[3,0,0,[27,[26,8,\"ModifierHead\"],[]],[[27,[24,0],[\"fetchGlobalRecords\"]],[27,[24,8],[]]],null],[3,0,0,[27,[26,7,\"ModifierHead\"],[]],[[27,[24,0],[\"fetchCountyRecords\"]],[27,[24,9],[]],[27,[24,8],[]]],null],[3,0,0,[27,[26,8,\"ModifierHead\"],[]],[[27,[24,0],[\"fetchCountyRecords\"]],[27,[24,9],[]],[27,[24,8],[]]],null]],[[\"@center\",\"@zoom\",\"@minZoom\",\"@maxZoom\",\"@onMoveend\",\"@onZoomend\"],[[27,[24,0],[\"centerLocation\"]],[27,[24,0],[\"zoom\"]],1,10,[27,[24,0],[\"setZoom\"]],[27,[24,0],[\"setCurrentZoom\"]]]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"\\n    \"],[7,[27,[24,1],[\"tile\"]],[],[[\"@attribution\",\"@url\"],[[31,681,1,[27,[26,9,\"CallHead\"],[]],[[27,[24,0],[\"tileServerAttribution\"]]],null],[27,[24,0],[\"tileUrl\"]]]],null],[1,1,0,0,\"\\n\"],[5,[27,[26,1,\"BlockHead\"],[]],[[27,[24,0],[\"showMarker\"]]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"      \"],[7,[27,[24,1],[\"marker\"]],[],[[\"@location\",\"@icon\"],[[27,[24,0],[\"centerLocation\"]],[31,844,4,[27,[26,6,\"CallHead\"],[]],null,[[\"className\",\"iconUrl\",\"iconSize\"],[\"map__marker-icon\",\"location.svg\",[31,911,5,[27,[26,5,\"CallHead\"],[]],[32,32],null]]]]]],null],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]],[5,[27,[26,11,\"BlockHead\"],[]],[[31,0,0,[27,[26,10,\"CallHead\"],[]],[[31,0,0,[27,[26,10,\"CallHead\"],[]],[[27,[24,0],[\"countryRecords\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"      \"],[7,\"location-marker\",[],[[\"@rec\",\"@layer\",\"@fieldToShow\",\"@onLocationClick\",\"@zoom\"],[[27,[24,4],[]],[27,[24,1],[]],[27,[24,6],[]],[27,[24,7],[]],[27,[24,0],[\"currentZoom\"]]]],null],[1,1,0,0,\"\\n\"]],\"parameters\":[4]}]]],[5,[27,[26,11,\"BlockHead\"],[]],[[31,0,0,[27,[26,10,\"CallHead\"],[]],[[31,0,0,[27,[26,10,\"CallHead\"],[]],[[27,[24,0],[\"stateRecords\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[5,[27,[26,1,\"BlockHead\"],[]],[[31,1209,2,[27,[26,4,\"CallHead\"],[]],[[31,1213,3,[27,[26,3,\"CallHead\"],[]],[[27,[24,0],[\"countyRecords\",\"length\"]]],null],[31,1245,3,[27,[26,2,\"CallHead\"],[]],[[27,[24,3],[\"attributes\",\"wikiId\"]],[27,[24,0],[\"focusedState\",\"attributes\",\"wikiId\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"        \"],[7,\"location-marker\",[],[[\"@rec\",\"@layer\",\"@fieldToShow\",\"@onLocationClick\",\"@zoom\"],[[27,[24,3],[]],[27,[24,1],[]],[27,[24,6],[]],[27,[24,7],[]],[27,[24,0],[\"currentZoom\"]]]],null],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[3]}]]],[5,[27,[26,11,\"BlockHead\"],[]],[[31,0,0,[27,[26,10,\"CallHead\"],[]],[[31,0,0,[27,[26,10,\"CallHead\"],[]],[[27,[24,0],[\"countyRecords\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[5,[27,[26,1,\"BlockHead\"],[]],[[31,1547,2,[27,[26,0,\"CallHead\"],[]],[[27,[24,2],[\"relationships\",\"state\",\"data\",\"id\"]],[27,[24,0],[\"focusedState\",\"id\"]]],null]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"        \"],[7,\"location-marker\",[],[[\"@rec\",\"@layer\",\"@fieldToShow\",\"@onLocationClick\",\"@zoom\"],[[27,[24,2],[]],[27,[24,1],[]],[27,[24,6],[]],[27,[24,7],[]],[27,[24,0],[\"currentZoom\"]]]],null],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[2]}]]],[1,1,0,0,\"  \"]],\"parameters\":[1]}]]],[1,1,0,0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[1,1,0,0,\"  \"],[9,\"div\",false],[23,\"class\",\"map__placeholder\",null],[15,5],[10],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"eq\",\"if\",\"neq\",\"not\",\"or\",\"array\",\"icon\",\"did-insert\",\"did-update\",\"t\",\"-track-array\",\"each\"]}",
    meta: {
      moduleName: "covid-19-dashboard/components/map.hbs"
    }
  });
  /**
   * Copyright 2020, Verizon Media.
   * Licensed under the Apache License, Version 2.0. See accompanying LICENSE file for terms.
   */


  var _ENV$APP = _environment.default.APP,
      tileServer = _ENV$APP.tileServer,
      tileServerAttribution = _ENV$APP.tileServerAttribution;
  var ZOOM_LEVELS = {
    global: 3,
    countries: 4,
    states: 7,
    counties: 9
  };
  var MOBILE_ZOOM_LEVELS = {
    global: 1,
    countries: 3,
    states: 7,
    counties: 8
  };
  var REQUEST_FIELDS = ['id', 'label', 'wikiId', 'latitude', 'longitude', 'numActiveCases', 'totalConfirmedCases', 'totalDeaths', 'totalRecoveredCases'];
  var MapComponent = (_dec = (0, _emberConcurrency.task)( /*#__PURE__*/regeneratorRuntime.mark(function _callee(location) {
    var _this = this;

    var _location$state, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!['states', 'counties'].includes(location.type)) {
              _context.next = 7;
              break;
            }

            _context.next = 3;
            return this.elide.fetch.perform('latestHealthRecords', {
              fields: {
                latestHealthRecords: [].concat(REQUEST_FIELDS, ['state'])
              },
              eq: {
                'state.id': ((_location$state = location.state) === null || _location$state === void 0 ? void 0 : _location$state.id) || location.id
              },
              notNull: ['county'],
              include: ['state']
            }) || {};

          case 3:
            data = _context.sent;

            if (data.data) {
              this.countyRecords = data.data.filter(function (r) {
                return r.attributes[_this.args.fieldToShow];
              });
            }

            _context.next = 8;
            break;

          case 7:
            this.countyRecords = [];

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })), _dec2 = (0, _emberConcurrency.task)( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var _this2 = this;

    var states, countries, _yield$hash, stateRecords, countryRecords, countryHasStates;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            states = this.elide.fetch.perform('latestHealthRecords', {
              fields: {
                latestHealthRecords: [].concat(REQUEST_FIELDS, ['country'])
              },
              isNull: ['county'],
              notNull: ['state']
            }) || {};
            countries = this.elide.fetch.perform('latestHealthRecords', {
              fields: {
                latestHealthRecords: [REQUEST_FIELDS, 'country']
              },
              isNull: ['county', 'state'],
              notNull: ['country']
            }) || {};
            _context2.next = 4;
            return (0, _emberConcurrency.hash)({
              states: states,
              countries: countries
            });

          case 4:
            _yield$hash = _context2.sent;
            stateRecords = _yield$hash.states;
            countryRecords = _yield$hash.countries;

            if (stateRecords.data) {
              this.stateRecords = stateRecords.data.filter(function (r) {
                return r.attributes[_this2.args.fieldToShow];
              });
            }

            countryHasStates = this.stateRecords.reduce(function (acc, state) {
              var country = state.relationships.country.data.id;
              acc[country] = true;
              return acc;
            }, {});

            if (countryRecords.data) {
              this.countryRecords = countryRecords.data.filter(function (r) {
                return r.attributes[_this2.args.fieldToShow];
              }).filter(function (r) {
                return !countryHasStates[r.relationships.country.data.id];
              });
            }

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })), (_class = (_temp = /*#__PURE__*/function (_Component) {
    _inherits(MapComponent, _Component);

    var _super = _createSuper(MapComponent);

    function MapComponent() {
      var _this3;

      _classCallCheck(this, MapComponent);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this3 = _super.call.apply(_super, [this].concat(args));

      _initializerDefineProperty(_assertThisInitialized(_this3), "elide", _descriptor, _assertThisInitialized(_this3));

      _initializerDefineProperty(_assertThisInitialized(_this3), "screen", _descriptor2, _assertThisInitialized(_this3));

      _initializerDefineProperty(_assertThisInitialized(_this3), "countyRecords", _descriptor3, _assertThisInitialized(_this3));

      _initializerDefineProperty(_assertThisInitialized(_this3), "countryRecords", _descriptor4, _assertThisInitialized(_this3));

      _initializerDefineProperty(_assertThisInitialized(_this3), "stateRecords", _descriptor5, _assertThisInitialized(_this3));

      _initializerDefineProperty(_assertThisInitialized(_this3), "zoom", _descriptor6, _assertThisInitialized(_this3));

      _initializerDefineProperty(_assertThisInitialized(_this3), "currentZoom", _descriptor7, _assertThisInitialized(_this3));

      _defineProperty(_assertThisInitialized(_this3), "tileServerAttribution", tileServerAttribution);

      _defineProperty(_assertThisInitialized(_this3), "tileUrl", tileServer);

      _initializerDefineProperty(_assertThisInitialized(_this3), "fetchCountyData", _descriptor8, _assertThisInitialized(_this3));

      _initializerDefineProperty(_assertThisInitialized(_this3), "fetchGlobalData", _descriptor9, _assertThisInitialized(_this3));

      return _this3;
    }

    _createClass(MapComponent, [{
      key: "fetchCountyRecords",
      value: function fetchCountyRecords() {
        var _this$args = this.args,
            location = _this$args.location,
            publishedDate = _this$args.publishedDate;
        this.countyRecords = [];

        if (location && publishedDate) {
          this.fetchCountyData.perform(location);
        }
      }
    }, {
      key: "fetchGlobalRecords",
      value: function fetchGlobalRecords() {
        if (this.args.publishedDate) {
          this.fetchGlobalData.perform();
        }
      }
    }, {
      key: "setCurrentZoom",
      value: function setCurrentZoom(_ref2) {
        var target = _ref2.target;
        this.currentZoom = target.getZoom();
      }
    }, {
      key: "setZoom",
      value: function setZoom() {
        var isMobile = this.screen.isMobile;
        var location = this.args.location;
        var levels = isMobile ? MOBILE_ZOOM_LEVELS : ZOOM_LEVELS;
        var zoom = levels.global;

        if (location) {
          zoom = levels[location.type];
        }

        this.zoom = zoom;
      }
    }, {
      key: "centerLocation",
      get: function get() {
        var location = this.args.location;
        if (!location) return null;

        if (location.type === 'global') {
          return [40, 0];
        }

        return [location.attributes.latitude, location.attributes.longitude];
      }
    }, {
      key: "showMarker",
      get: function get() {
        var location = this.args.location;
        if (!location) return false;

        if (location.type === 'global') {
          return false;
        }

        return true;
      }
    }, {
      key: "focusedState",
      get: function get() {
        var location = this.args.location;
        var state = null;

        if ((location === null || location === void 0 ? void 0 : location.type) === 'states') {
          state = location;
        } else if ((location === null || location === void 0 ? void 0 : location.type) === 'counties') {
          state = location.state;
        }

        return state;
      }
    }]);

    return MapComponent;
  }(_component.default), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "elide", [Ember.inject.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "screen", [Ember.inject.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "countyRecords", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return [];
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "countryRecords", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return [];
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "stateRecords", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return [];
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "zoom", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return ZOOM_LEVELS.global;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "currentZoom", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return ZOOM_LEVELS.global;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "fetchCountyRecords", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "fetchCountyRecords"), _class.prototype), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "fetchCountyData", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "fetchGlobalRecords", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "fetchGlobalRecords"), _class.prototype), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "fetchGlobalData", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "setCurrentZoom", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "setCurrentZoom"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setZoom", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "setZoom"), _class.prototype)), _class));
  _exports.default = MapComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, MapComponent);
});
;define("covid-19-dashboard/components/marker-layer", ["exports", "ember-leaflet/components/marker-layer"], function (_exports, _markerLayer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _markerLayer.default;
    }
  });
});
;define("covid-19-dashboard/components/mobile-tabs", ["exports", "@glimmer/component", "covid-19-dashboard/utils/location"], function (_exports, _component, _location) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{!-- Copyright 2020, Verizon Media. Licensed under the Apache License, Version 2.0. See accompanying LICENSE file for terms. --}}
  <div class="mobile-tabs tabs is-secondary">
    <ul>
      <li
        class="{{if (eq @view "details") "is-active"}} mobile-tabs__tab"
        role="button"
        {{on "click" (fn @onChange "details")}}
      >
        {{!-- template-lint-disable link-href-attributes --}}
        <a>{{t "details"}}</a>
      </li>
      <li
        class="{{if (eq @view "breakdown") "is-active"}} mobile-tabs__tab"
        role="button"
        {{on "click" (fn @onChange "breakdown")}}
      >
        {{!-- template-lint-disable link-href-attributes --}}
        <a>{{t (concat 'casesBy.' this.breakdownLocationType) default="empty"}}</a>
      </li>
    </ul>
  </div>
  */
  {
    id: "m6itawnt",
    block: "{\"symbols\":[\"@view\",\"@onChange\"],\"statements\":[[9,\"div\",true],[12,\"class\",\"mobile-tabs tabs is-secondary\",null],[10],[1,1,0,0,\"\\n  \"],[9,\"ul\",true],[10],[1,1,0,0,\"\\n    \"],[9,\"li\",false],[14,\"class\",[32,[[31,205,2,[27,[26,1,\"CallHead\"],[]],[[31,209,2,[27,[26,0,\"CallHead\"],[]],[[27,[24,1],[]],\"details\"],null],\"is-active\"],null],\" mobile-tabs__tab\"]],null],[23,\"role\",\"button\",null],[3,0,0,[27,[26,3,\"ModifierHead\"],[]],[\"click\",[31,301,2,[27,[26,2,\"CallHead\"],[]],[[27,[24,2],[]],\"details\"],null]],null],[10],[1,1,0,0,\"\\n\"],[1,1,0,0,\"      \"],[9,\"a\",true],[10],[1,0,0,0,[31,404,1,[27,[26,4,\"CallHead\"],[]],[\"details\"],null]],[11],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n    \"],[9,\"li\",false],[14,\"class\",[32,[[31,455,2,[27,[26,1,\"CallHead\"],[]],[[31,459,2,[27,[26,0,\"CallHead\"],[]],[[27,[24,1],[]],\"breakdown\"],null],\"is-active\"],null],\" mobile-tabs__tab\"]],null],[23,\"role\",\"button\",null],[3,0,0,[27,[26,3,\"ModifierHead\"],[]],[\"click\",[31,553,2,[27,[26,2,\"CallHead\"],[]],[[27,[24,2],[]],\"breakdown\"],null]],null],[10],[1,1,0,0,\"\\n\"],[1,1,0,0,\"      \"],[9,\"a\",true],[10],[1,0,0,0,[31,658,1,[27,[26,4,\"CallHead\"],[]],[[31,661,6,[27,[26,5,\"CallHead\"],[]],[\"casesBy.\",[27,[24,0],[\"breakdownLocationType\"]]],null]],[[\"default\"],[\"empty\"]]]],[11],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n\"],[11]],\"hasEval\":false,\"upvars\":[\"eq\",\"if\",\"fn\",\"on\",\"t\",\"concat\"]}",
    meta: {
      moduleName: "covid-19-dashboard/components/mobile-tabs.hbs"
    }
  });
  /**
   * Copyright 2020, Verizon Media.
   * Licensed under the terms of the Apache License, Version 2.0. See accompanying LICENSE.md file for terms.
   */


  var MobileTabsComponent = /*#__PURE__*/function (_Component) {
    _inherits(MobileTabsComponent, _Component);

    var _super = _createSuper(MobileTabsComponent);

    function MobileTabsComponent() {
      _classCallCheck(this, MobileTabsComponent);

      return _super.apply(this, arguments);
    }

    _createClass(MobileTabsComponent, [{
      key: "breakdownLocationType",
      get: function get() {
        var location = this.args.location;
        return (0, _location.breakdownLocationType)(location);
      }
    }]);

    return MobileTabsComponent;
  }(_component.default);

  _exports.default = MobileTabsComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, MobileTabsComponent);
});
;define("covid-19-dashboard/components/nav", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{!-- Copyright 2020, Verizon Media. Licensed under the Apache License, Version 2.0. See accompanying LICENSE file for terms. --}}
  <nav class="nav" ...attributes>
    <LinkTo @route="dashboard" class="nav-left">
      <img class="nav__title m-r-15 is-purple-500" alt="Yahoo Knowledge" src="assets/images/yk-logo.svg" />
      <div class="nav__badge chips has-bg-purple-100 is-purple-500">{{t "covidBadge"}}</div>
    </LinkTo>
    <div class="nav-right p-y-12">
      <SearchBar class="nav__search-bar" />
  
      {{!-- Enable when refresh is possible --}}
      <button type="button" class="nav__button button p-x-10 m-r-10 hide-tablet-down" disabled>
        {{svg-jar "sync" class="nav__button-icon m-r-10" width="20px" height="20px"}}
        <div class="nav__button-label">
          <span>{{t "updated"}}</span>
          <span>{{t "ago" relativeTime=(format-mins @timeSinceRefresh)}}</span>
        </div>
      </button>
  
      <div class="nav__menu menu is-right hide-tablet-down">
        {{!-- template-lint-disable link-href-attributes  --}}
        <a class="nav__menu-trigger menu-trigger p-r-8">
          {{svg-jar "github" class="nav__menu-trigger-icon" width="28px" height="28px"}}
        </a>
        {{!-- template-lint-enable link-href-attributes  --}}
        <div class="nav__menu-content menu-content">
          <a
            href="https://github.com/yahoo/covid-19-api"
            class="nav__menu-link"
            target="_blank"
            rel="noopener noreferrer"
            title={{t "repoTitle.api"}}
          >
            {{svg-jar "code" class="nav__menu-icon" width="14px" height="14px"}}
            {{t "repoText.api"}}
          </a>
          <a
            href="https://github.com/yahoo/covid-19-dashboard"
            class="nav__menu-link"
            target="_blank"
            rel="noopener noreferrer"
            title={{t "repoTitle.dashboard"}}
          >
            {{svg-jar "browser-bar-chart" class="nav__menu-icon" width="14px" height="14px"}}
            {{t "repoText.dashboard"}}
          </a>
          <a
            href="https://github.com/yahoo/covid-19-data"
            class="nav__menu-link"
            target="_blank"
            rel="noopener noreferrer"
            title={{t "repoTitle.data"}}
          >
            {{svg-jar "data-source" class="nav__menu-icon" width="14px" height="14px"}}
            {{t "repoText.data"}}
          </a>
        </div>
      </div>
    </div>
  </nav>
  
  */
  {
    id: "G4Gh85Jf",
    block: "{\"symbols\":[\"&attrs\",\"@timeSinceRefresh\"],\"statements\":[[9,\"nav\",false],[23,\"class\",\"nav\",null],[15,1],[10],[1,1,0,0,\"\\n  \"],[7,\"link-to\",[[23,\"class\",\"nav-left\",null]],[[\"@route\"],[\"dashboard\"]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"\\n    \"],[9,\"img\",true],[12,\"class\",\"nav__title m-r-15 is-purple-500\",null],[12,\"alt\",\"Yahoo Knowledge\",null],[12,\"src\",\"assets/images/yk-logo.svg\",null],[10],[11],[1,1,0,0,\"\\n    \"],[9,\"div\",true],[12,\"class\",\"nav__badge chips has-bg-purple-100 is-purple-500\",null],[10],[1,0,0,0,[31,384,1,[27,[26,0,\"CallHead\"],[]],[\"covidBadge\"],null]],[11],[1,1,0,0,\"\\n  \"]],\"parameters\":[]}]]],[1,1,0,0,\"\\n  \"],[9,\"div\",true],[12,\"class\",\"nav-right p-y-12\",null],[10],[1,1,0,0,\"\\n    \"],[7,\"search-bar\",[[23,\"class\",\"nav__search-bar\",null]],[[],[]],null],[1,1,0,0,\"\\n\\n\"],[1,1,0,0,\"    \"],[9,\"button\",true],[12,\"class\",\"nav__button button p-x-10 m-r-10 hide-tablet-down\",null],[12,\"disabled\",\"\",null],[12,\"type\",\"button\",null],[10],[1,1,0,0,\"\\n      \"],[1,0,0,0,[31,644,7,[27,[26,1,\"CallHead\"],[]],[\"sync\"],[[\"class\",\"width\",\"height\"],[\"nav__button-icon m-r-10\",\"20px\",\"20px\"]]]],[1,1,0,0,\"\\n      \"],[9,\"div\",true],[12,\"class\",\"nav__button-label\",null],[10],[1,1,0,0,\"\\n        \"],[9,\"span\",true],[10],[1,0,0,0,[31,774,1,[27,[26,0,\"CallHead\"],[]],[\"updated\"],null]],[11],[1,1,0,0,\"\\n        \"],[9,\"span\",true],[10],[1,0,0,0,[31,811,1,[27,[26,0,\"CallHead\"],[]],[\"ago\"],[[\"relativeTime\"],[[31,833,11,[27,[26,2,\"CallHead\"],[]],[[27,[24,2],[]]],null]]]]],[11],[1,1,0,0,\"\\n      \"],[11],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n\\n    \"],[9,\"div\",true],[12,\"class\",\"nav__menu menu is-right hide-tablet-down\",null],[10],[1,1,0,0,\"\\n\"],[1,1,0,0,\"      \"],[9,\"a\",true],[12,\"class\",\"nav__menu-trigger menu-trigger p-r-8\",null],[10],[1,1,0,0,\"\\n        \"],[1,0,0,0,[31,1086,7,[27,[26,1,\"CallHead\"],[]],[\"github\"],[[\"class\",\"width\",\"height\"],[\"nav__menu-trigger-icon\",\"28px\",\"28px\"]]]],[1,1,0,0,\"\\n      \"],[11],[1,1,0,0,\"\\n\"],[1,1,0,0,\"      \"],[9,\"div\",true],[12,\"class\",\"nav__menu-content menu-content\",null],[10],[1,1,0,0,\"\\n        \"],[9,\"a\",true],[12,\"href\",\"https://github.com/yahoo/covid-19-api\",null],[12,\"class\",\"nav__menu-link\",null],[12,\"target\",\"_blank\",null],[12,\"rel\",\"noopener noreferrer\",null],[13,\"title\",[31,1464,1,[27,[26,0,\"CallHead\"],[]],[\"repoTitle.api\"],null],null],[10],[1,1,0,0,\"\\n          \"],[1,0,0,0,[31,1506,7,[27,[26,1,\"CallHead\"],[]],[\"code\"],[[\"class\",\"width\",\"height\"],[\"nav__menu-icon\",\"14px\",\"14px\"]]]],[1,1,0,0,\"\\n          \"],[1,0,0,0,[31,1585,1,[27,[26,0,\"CallHead\"],[]],[\"repoText.api\"],null]],[1,1,0,0,\"\\n        \"],[11],[1,1,0,0,\"\\n        \"],[9,\"a\",true],[12,\"href\",\"https://github.com/yahoo/covid-19-dashboard\",null],[12,\"class\",\"nav__menu-link\",null],[12,\"target\",\"_blank\",null],[12,\"rel\",\"noopener noreferrer\",null],[13,\"title\",[31,1802,1,[27,[26,0,\"CallHead\"],[]],[\"repoTitle.dashboard\"],null],null],[10],[1,1,0,0,\"\\n          \"],[1,0,0,0,[31,1850,7,[27,[26,1,\"CallHead\"],[]],[\"browser-bar-chart\"],[[\"class\",\"width\",\"height\"],[\"nav__menu-icon\",\"14px\",\"14px\"]]]],[1,1,0,0,\"\\n          \"],[1,0,0,0,[31,1942,1,[27,[26,0,\"CallHead\"],[]],[\"repoText.dashboard\"],null]],[1,1,0,0,\"\\n        \"],[11],[1,1,0,0,\"\\n        \"],[9,\"a\",true],[12,\"href\",\"https://github.com/yahoo/covid-19-data\",null],[12,\"class\",\"nav__menu-link\",null],[12,\"target\",\"_blank\",null],[12,\"rel\",\"noopener noreferrer\",null],[13,\"title\",[31,2160,1,[27,[26,0,\"CallHead\"],[]],[\"repoTitle.data\"],null],null],[10],[1,1,0,0,\"\\n          \"],[1,0,0,0,[31,2203,7,[27,[26,1,\"CallHead\"],[]],[\"data-source\"],[[\"class\",\"width\",\"height\"],[\"nav__menu-icon\",\"14px\",\"14px\"]]]],[1,1,0,0,\"\\n          \"],[1,0,0,0,[31,2289,1,[27,[26,0,\"CallHead\"],[]],[\"repoText.data\"],null]],[1,1,0,0,\"\\n        \"],[11],[1,1,0,0,\"\\n      \"],[11],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n\"],[11],[1,1,0,0,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\",\"svg-jar\",\"format-mins\"]}",
    meta: {
      moduleName: "covid-19-dashboard/components/nav.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("covid-19-dashboard/components/path-layer", ["exports", "ember-leaflet/components/path-layer"], function (_exports, _pathLayer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _pathLayer.default;
    }
  });
});
;define("covid-19-dashboard/components/point-path-layer", ["exports", "ember-leaflet/components/point-path-layer"], function (_exports, _pointPathLayer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _pointPathLayer.default;
    }
  });
});
;define("covid-19-dashboard/components/polygon-layer", ["exports", "ember-leaflet/components/polygon-layer"], function (_exports, _polygonLayer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _polygonLayer.default;
    }
  });
});
;define("covid-19-dashboard/components/polyline-layer", ["exports", "ember-leaflet/components/polyline-layer"], function (_exports, _polylineLayer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _polylineLayer.default;
    }
  });
});
;define("covid-19-dashboard/components/popup-layer", ["exports", "ember-leaflet/components/popup-layer"], function (_exports, _popupLayer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _popupLayer.default;
    }
  });
});
;define("covid-19-dashboard/components/power-select-multiple", ["exports", "ember-power-select/components/power-select-multiple"], function (_exports, _powerSelectMultiple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _powerSelectMultiple.default;
    }
  });
});
;define("covid-19-dashboard/components/power-select-multiple/trigger", ["exports", "ember-power-select/components/power-select-multiple/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _trigger.default;
    }
  });
});
;define("covid-19-dashboard/components/power-select", ["exports", "ember-power-select/components/power-select"], function (_exports, _powerSelect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _powerSelect.default;
    }
  });
});
;define("covid-19-dashboard/components/power-select/before-options", ["exports", "ember-power-select/components/power-select/before-options"], function (_exports, _beforeOptions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _beforeOptions.default;
    }
  });
});
;define("covid-19-dashboard/components/power-select/options", ["exports", "ember-power-select/components/power-select/options"], function (_exports, _options) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _options.default;
    }
  });
});
;define("covid-19-dashboard/components/power-select/trigger", ["exports", "ember-power-select/components/power-select/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _trigger.default;
    }
  });
});
;define("covid-19-dashboard/components/rectangle-layer", ["exports", "ember-leaflet/components/rectangle-layer"], function (_exports, _rectangleLayer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _rectangleLayer.default;
    }
  });
});
;define("covid-19-dashboard/components/search-bar-trigger", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  var __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{!-- Copyright 2020, Verizon Media. Licensed under the Apache License, Version 2.0. See accompanying LICENSE file for terms. --}}
  <input type="input" autocomplete="off"
    autocorrect="off" autocapitalize="off"
    spellcheck={{false}} role="combobox"
    class="search-bar__trigger-input input ember-power-select-search-input"
    value={{@select.searchText}}
    aria-controls={{@listboxId}}
    placeholder={{@placeholder}}
    {{on "input" @onInput}}
    {{on "focus" @onFocus}}
    {{on "blur" @onBlur}}
    {{on "keydown" this.handleKeydown}}
  >
  {{svg-jar "location" class="search-bar__loc-icon" width="24px"}}
  
  */
  {
    id: "viFBzc6V",
    block: "{\"symbols\":[\"@select\",\"@listboxId\",\"@placeholder\",\"@onInput\",\"@onFocus\",\"@onBlur\"],\"statements\":[[9,\"input\",false],[23,\"autocomplete\",\"off\",null],[23,\"autocorrect\",\"off\",null],[23,\"autocapitalize\",\"off\",null],[14,\"spellcheck\",false,null],[23,\"role\",\"combobox\",null],[23,\"class\",\"search-bar__trigger-input input ember-power-select-search-input\",null],[14,\"value\",[27,[24,1],[\"searchText\"]],null],[14,\"aria-controls\",[27,[24,2],[]],null],[14,\"placeholder\",[27,[24,3],[]],null],[23,\"type\",\"input\",null],[3,0,0,[27,[26,0,\"ModifierHead\"],[]],[\"input\",[27,[24,4],[]]],null],[3,0,0,[27,[26,0,\"ModifierHead\"],[]],[\"focus\",[27,[24,5],[]]],null],[3,0,0,[27,[26,0,\"ModifierHead\"],[]],[\"blur\",[27,[24,6],[]]],null],[3,0,0,[27,[26,0,\"ModifierHead\"],[]],[\"keydown\",[27,[24,0],[\"handleKeydown\"]]],null],[10],[11],[1,1,0,0,\"\\n\"],[1,0,0,0,[31,535,7,[27,[26,1,\"CallHead\"],[]],[\"location\"],[[\"class\",\"width\"],[\"search-bar__loc-icon\",\"24px\"]]]],[1,1,0,0,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"on\",\"svg-jar\"]}",
    meta: {
      moduleName: "covid-19-dashboard/components/search-bar-trigger.hbs"
    }
  });
  /**
   * Copyright 2020, Verizon Media.
   * Licensed under the Apache License, Version 2.0. See accompanying LICENSE file for terms.
   */


  var SearchBarTriggerComponent = (_class = /*#__PURE__*/function (_Component) {
    _inherits(SearchBarTriggerComponent, _Component);

    var _super = _createSuper(SearchBarTriggerComponent);

    function SearchBarTriggerComponent() {
      _classCallCheck(this, SearchBarTriggerComponent);

      return _super.apply(this, arguments);
    }

    _createClass(SearchBarTriggerComponent, [{
      key: "handleKeydown",
      value: function handleKeydown(e) {
        if (this.args.onKeydown(e) === false) {
          return false;
        }

        if (e.keyCode === 13) {
          this.args.select.actions.close(e);
        }
      }
    }]);

    return SearchBarTriggerComponent;
  }(_component.default), (_applyDecoratedDescriptor(_class.prototype, "handleKeydown", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "handleKeydown"), _class.prototype)), _class);
  _exports.default = SearchBarTriggerComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, SearchBarTriggerComponent);
});
;define("covid-19-dashboard/components/search-bar", ["exports", "@glimmer/component", "ember-concurrency"], function (_exports, _component, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  var __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{!-- Copyright 2020, Verizon Media. Licensed under the Apache License, Version 2.0. See accompanying LICENSE file for terms. --}}
  <PowerSelect
    @tagName="div"
    class="search-bar"
    @triggerClass="search-bar__trigger"
    @triggerComponent="search-bar-trigger"
    @dropdownClass="search-bar__content"
    @loadingMessage={{t "searchBar.loadingMsg"}}
    @noMatchesMessage={{t "searchBar.noMatches"}}
    @renderInPlace={{true}}
    @search={{perform this.searchLocation}}
    @onChange={{this.handleSelect}}
    @registerAPI={{this.handleRegister}}
    @placeholder={{t "searchBar.triggerPlaceholder"}}
    as | location |
  >
    {{location.label}}
  </PowerSelect>
  
  */
  {
    id: "9IxnJ75+",
    block: "{\"symbols\":[\"location\"],\"statements\":[[7,\"power-select\",[[23,\"class\",\"search-bar\",null]],[[\"@tagName\",\"@triggerClass\",\"@triggerComponent\",\"@dropdownClass\",\"@loadingMessage\",\"@noMatchesMessage\",\"@renderInPlace\",\"@search\",\"@onChange\",\"@registerAPI\",\"@placeholder\"],[\"div\",\"search-bar__trigger\",\"search-bar-trigger\",\"search-bar__content\",[31,320,1,[27,[26,0,\"CallHead\"],[]],[\"searchBar.loadingMsg\"],null],[31,369,1,[27,[26,0,\"CallHead\"],[]],[\"searchBar.noMatches\"],null],true,[31,433,7,[27,[26,1,\"CallHead\"],[]],[[27,[24,0],[\"searchLocation\"]]],null],[27,[24,0],[\"handleSelect\"]],[27,[24,0],[\"handleRegister\"]],[31,553,1,[27,[26,0,\"CallHead\"],[]],[\"searchBar.triggerPlaceholder\"],null]]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"\\n  \"],[1,0,0,0,[27,[24,1],[\"label\"]]],[1,1,0,0,\"\\n\"]],\"parameters\":[1]}]]],[1,1,0,0,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\",\"perform\"]}",
    meta: {
      moduleName: "covid-19-dashboard/components/search-bar.hbs"
    }
  });
  /**
   * Copyright 2020, Verizon Media.
   * Licensed under the Apache License, Version 2.0. See accompanying LICENSE file for terms.
   */


  var SearchBarComponent = (_dec = (0, _emberConcurrency.task)( /*#__PURE__*/regeneratorRuntime.mark(function _callee(value) {
    var normalizeRecords, countiesReq, statesReq, countriesReq, requests, records;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!((value === null || value === void 0 ? void 0 : value.length) < 2)) {
              _context.next = 4;
              break;
            }

            this.loading = false;
            this.locations = [];
            return _context.abrupt("return");

          case 4:
            normalizeRecords = this.normalizeRecords;
            _context.next = 7;
            return (0, _emberConcurrency.timeout)(50);

          case 7:
            countiesReq = this.elide.fetch.perform('counties', {
              search: {
                label: [value]
              },
              fields: {
                counties: ['id', 'label', 'wikiId']
              },
              limit: 100
            });
            statesReq = this.elide.fetch.perform('states', {
              search: {
                label: [value]
              },
              fields: {
                states: ['id', 'label', 'wikiId']
              },
              limit: 100
            });
            countriesReq = this.elide.fetch.perform('countries', {
              search: {
                label: [value]
              },
              fields: {
                countries: ['id', 'label', 'wikiId']
              },
              limit: 100
            });
            _context.next = 12;
            return (0, _emberConcurrency.all)([countriesReq, statesReq, countiesReq]);

          case 12:
            requests = _context.sent;
            records = requests.map(function (_ref2) {
              var data = _ref2.data;
              return normalizeRecords(data);
            });
            return _context.abrupt("return", [].concat(_toConsumableArray(records[0]), _toConsumableArray(records[1]), _toConsumableArray(records[2])));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })).restartable(), (_class = (_temp = /*#__PURE__*/function (_Component) {
    _inherits(SearchBarComponent, _Component);

    var _super = _createSuper(SearchBarComponent);

    function SearchBarComponent() {
      var _this;

      _classCallCheck(this, SearchBarComponent);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _initializerDefineProperty(_assertThisInitialized(_this), "elide", _descriptor, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "router", _descriptor2, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "locations", _descriptor3, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "loading", _descriptor4, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "searchLocation", _descriptor5, _assertThisInitialized(_this));

      return _this;
    }

    _createClass(SearchBarComponent, [{
      key: "normalizeRecords",
      value: function normalizeRecords(rows) {
        return rows.map(function (row) {
          return {
            id: row.id,
            label: row.attributes.label,
            wikiId: row.attributes.wikiId
          };
        });
      }
    }, {
      key: "handleSelect",
      value: function handleSelect(location) {
        Ember.run.scheduleOnce('actions', this.select.actions, 'search', '');
        this.router.transitionTo('dashboard.location', location.wikiId);
      }
    }, {
      key: "handleRegister",
      value: function handleRegister(select) {
        this.select = select;
      }
    }]);

    return SearchBarComponent;
  }(_component.default), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "elide", [Ember.inject.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [Ember.inject.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "locations", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "loading", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "searchLocation", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "handleSelect", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "handleSelect"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleRegister", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "handleRegister"), _class.prototype)), _class));
  _exports.default = SearchBarComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, SearchBarComponent);
});
;define("covid-19-dashboard/components/tile-layer", ["exports", "ember-leaflet/components/tile-layer"], function (_exports, _tileLayer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _tileLayer.default;
    }
  });
});
;define("covid-19-dashboard/components/tooltip-layer", ["exports", "ember-leaflet/components/tooltip-layer"], function (_exports, _tooltipLayer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _tooltipLayer.default;
    }
  });
});
;define("covid-19-dashboard/components/vertical-collection", ["exports", "@html-next/vertical-collection/components/vertical-collection/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _component.default;
    }
  });
});
;define("covid-19-dashboard/components/video-layer", ["exports", "ember-leaflet/components/video-layer"], function (_exports, _videoLayer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _videoLayer.default;
    }
  });
});
;define("covid-19-dashboard/components/wms-tile-layer", ["exports", "ember-leaflet/components/wms-tile-layer"], function (_exports, _wmsTileLayer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _wmsTileLayer.default;
    }
  });
});
;define("covid-19-dashboard/controllers/dashboard/location", ["exports", "ember-concurrency"], function (_exports, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  var DashboardLocationController = (_dec = (0, _emberConcurrency.task)( /*#__PURE__*/regeneratorRuntime.mark(function _callee(wikiId) {
    var currentLocation;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this.location.fetch(wikiId);

          case 2:
            currentLocation = _context.sent;
            return _context.abrupt("return", this.currentLocation = currentLocation);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })).restartable(), (_class = (_temp = /*#__PURE__*/function (_EmberController) {
    _inherits(DashboardLocationController, _EmberController);

    var _super = _createSuper(DashboardLocationController);

    function DashboardLocationController() {
      var _this;

      _classCallCheck(this, DashboardLocationController);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _initializerDefineProperty(_assertThisInitialized(_this), "elide", _descriptor, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "location", _descriptor2, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "metadata", _descriptor3, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "screen", _descriptor4, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "router", _descriptor5, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "currentLocation", _descriptor6, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "mobileView", _descriptor7, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "fetchLocationTask", _descriptor8, _assertThisInitialized(_this));

      return _this;
    }

    _createClass(DashboardLocationController, [{
      key: "onLocationSelect",
      value: function onLocationSelect(location) {
        this.router.transitionTo('dashboard.location', location);
        this.mobileView = 'details';
      }
    }, {
      key: "fetchLocation",
      value: function fetchLocation(wikiId) {
        return this.fetchLocationTask.perform(wikiId);
      }
    }, {
      key: "showLocationCaseDetails",
      get: function get() {
        var screen = this.screen,
            currentLocation = this.currentLocation;
        return screen.isMobile || (currentLocation === null || currentLocation === void 0 ? void 0 : currentLocation.type) && currentLocation.type !== 'global';
      }
    }]);

    return DashboardLocationController;
  }(Ember.Controller), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "elide", [Ember.inject.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "location", [Ember.inject.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "metadata", [Ember.inject.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "screen", [Ember.inject.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "router", [Ember.inject.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "currentLocation", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "mobileView", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return 'details';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "onLocationSelect", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "onLocationSelect"), _class.prototype), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "fetchLocationTask", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = DashboardLocationController;
});
;define("covid-19-dashboard/formats", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    time: {
      hhmmss: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }
    },
    date: {
      hhmmss: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }
    },
    number: {
      EUR: {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      },
      USD: {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
    }
  };
  _exports.default = _default;
});
;define("covid-19-dashboard/helpers/-clear-element", ["exports", "ember-in-element-polyfill/helpers/-clear-element"], function (_exports, _clearElement) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _clearElement.default;
    }
  });
  Object.defineProperty(_exports, "clearElement", {
    enumerable: true,
    get: function get() {
      return _clearElement.clearElement;
    }
  });
});
;define("covid-19-dashboard/helpers/-element", ["exports", "ember-element-helper/helpers/-element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _element.default;
    }
  });
});
;define("covid-19-dashboard/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _and.default;
    }
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function get() {
      return _and.and;
    }
  });
});
;define("covid-19-dashboard/helpers/app-version", ["exports", "covid-19-dashboard/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;
    var match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("covid-19-dashboard/helpers/assign", ["exports", "ember-assign-helper/helpers/assign"], function (_exports, _assign) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _assign.default;
    }
  });
  Object.defineProperty(_exports, "assign", {
    enumerable: true,
    get: function get() {
      return _assign.assign;
    }
  });
});
;define("covid-19-dashboard/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _cancelAll.default;
    }
  });
});
;define("covid-19-dashboard/helpers/div-icon", ["exports", "ember-leaflet/helpers/div-icon"], function (_exports, _divIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _divIcon.default;
    }
  });
  Object.defineProperty(_exports, "divIcon", {
    enumerable: true,
    get: function get() {
      return _divIcon.divIcon;
    }
  });
});
;define("covid-19-dashboard/helpers/ember-leaflet-assign-to", ["exports", "ember-leaflet/helpers/ember-leaflet-assign-to"], function (_exports, _emberLeafletAssignTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberLeafletAssignTo.default;
    }
  });
  Object.defineProperty(_exports, "emberLeafletAssignTo", {
    enumerable: true,
    get: function get() {
      return _emberLeafletAssignTo.emberLeafletAssignTo;
    }
  });
});
;define("covid-19-dashboard/helpers/ember-power-select-is-group", ["exports", "ember-power-select/helpers/ember-power-select-is-group"], function (_exports, _emberPowerSelectIsGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectIsGroup.default;
    }
  });
  Object.defineProperty(_exports, "emberPowerSelectIsGroup", {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
;define("covid-19-dashboard/helpers/ember-power-select-is-selected", ["exports", "ember-power-select/helpers/ember-power-select-is-selected"], function (_exports, _emberPowerSelectIsSelected) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectIsSelected.default;
    }
  });
  Object.defineProperty(_exports, "emberPowerSelectIsSelected", {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
;define("covid-19-dashboard/helpers/eq", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  var _default = Ember.Helper.helper(function neq(_ref
  /*, hash*/
  ) {
    var _ref2 = _slicedToArray(_ref, 2),
        left = _ref2[0],
        right = _ref2[1];

    return left === right;
  });

  _exports.default = _default;
});
;define("covid-19-dashboard/helpers/format-date", ["exports", "ember-intl/helpers/format-date"], function (_exports, _formatDate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _formatDate.default;
    }
  });
});
;define("covid-19-dashboard/helpers/format-message", ["exports", "ember-intl/helpers/format-message"], function (_exports, _formatMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _formatMessage.default;
    }
  });
});
;define("covid-19-dashboard/helpers/format-mins", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  var _default = Ember.Helper.helper(function formatTime(_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        timeInMins = _ref2[0];

    if (Ember.isNone(timeInMins)) return '--';
    if (timeInMins < 60) return "".concat(timeInMins, " mins");else {
      var mins = timeInMins % 60;
      var hrs = Math.floor(timeInMins / 60);
      var days = Math.floor(hrs / 24);
      if (hrs > 24) hrs = Math.floor(hrs % 24);
      return days ? "".concat(days, "d ").concat(hrs, "h ").concat(mins, "m") : "".concat(hrs, "h ").concat(mins, "m");
    }
  });

  _exports.default = _default;
});
;define("covid-19-dashboard/helpers/format-number", ["exports", "ember-intl/helpers/format-number"], function (_exports, _formatNumber) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var FormatHelper = /*#__PURE__*/function (_BaseHelper) {
    _inherits(FormatHelper, _BaseHelper);

    var _super = _createSuper(FormatHelper);

    function FormatHelper() {
      _classCallCheck(this, FormatHelper);

      return _super.apply(this, arguments);
    }

    _createClass(FormatHelper, [{
      key: "compute",
      value: function compute(_ref, options) {
        var _ref2 = _slicedToArray(_ref, 1),
            value = _ref2[0];

        if (Ember.isEmpty(value)) {
          return '--';
        }

        var formatted = this.format(value, options);

        if (value > 0 && options.showPlus === true) {
          return "+".concat(formatted);
        }

        return formatted;
      }
    }]);

    return FormatHelper;
  }(_formatNumber.default);

  _exports.default = FormatHelper;
});
;define("covid-19-dashboard/helpers/format-relative", ["exports", "ember-intl/helpers/format-relative"], function (_exports, _formatRelative) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _formatRelative.default;
    }
  });
});
;define("covid-19-dashboard/helpers/format-time", ["exports", "ember-intl/helpers/format-time"], function (_exports, _formatTime) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _formatTime.default;
    }
  });
});
;define("covid-19-dashboard/helpers/get-radius", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Helper.helper(function getRadius(param, _ref) {
    var number = _ref.number,
        zoom = _ref.zoom;
    var value = Math.max(Math.min(number, 30000), 2000);
    return zoom > 5 ? value * 5 : value * 10;
  });

  _exports.default = _default;
});
;define("covid-19-dashboard/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function get() {
      return _gt.gt;
    }
  });
});
;define("covid-19-dashboard/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function get() {
      return _gte.gte;
    }
  });
});
;define("covid-19-dashboard/helpers/icon", ["exports", "ember-leaflet/helpers/icon"], function (_exports, _icon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _icon.default;
    }
  });
  Object.defineProperty(_exports, "icon", {
    enumerable: true,
    get: function get() {
      return _icon.icon;
    }
  });
});
;define("covid-19-dashboard/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function get() {
      return _isArray.isArray;
    }
  });
});
;define("covid-19-dashboard/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _isEmpty.default;
    }
  });
});
;define("covid-19-dashboard/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function get() {
      return _isEqual.isEqual;
    }
  });
});
;define("covid-19-dashboard/helpers/lat-lng-bounds", ["exports", "ember-leaflet/helpers/lat-lng-bounds"], function (_exports, _latLngBounds) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _latLngBounds.default;
    }
  });
  Object.defineProperty(_exports, "latLngBounds", {
    enumerable: true,
    get: function get() {
      return _latLngBounds.latLngBounds;
    }
  });
});
;define("covid-19-dashboard/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function get() {
      return _lt.lt;
    }
  });
});
;define("covid-19-dashboard/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function get() {
      return _lte.lte;
    }
  });
});
;define("covid-19-dashboard/helpers/neq", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  var _default = Ember.Helper.helper(function neq(_ref
  /*, hash*/
  ) {
    var _ref2 = _slicedToArray(_ref, 2),
        left = _ref2[0],
        right = _ref2[1];

    return left !== right;
  });

  _exports.default = _default;
});
;define("covid-19-dashboard/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEq", {
    enumerable: true,
    get: function get() {
      return _notEqual.notEq;
    }
  });
});
;define("covid-19-dashboard/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function get() {
      return _not.not;
    }
  });
});
;define("covid-19-dashboard/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function get() {
      return _or.or;
    }
  });
});
;define("covid-19-dashboard/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _perform.default;
    }
  });
});
;define("covid-19-dashboard/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("covid-19-dashboard/helpers/point", ["exports", "ember-leaflet/helpers/point"], function (_exports, _point) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _point.default;
    }
  });
  Object.defineProperty(_exports, "point", {
    enumerable: true,
    get: function get() {
      return _point.point;
    }
  });
});
;define("covid-19-dashboard/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("covid-19-dashboard/helpers/svg-jar", ["exports", "ember-svg-jar/utils/make-helper", "ember-svg-jar/utils/make-svg"], function (_exports, _makeHelper, _makeSvg) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.svgJar = svgJar;
  _exports.default = void 0;

  function getInlineAsset(assetId) {
    try {
      /* eslint-disable global-require */
      return require("ember-svg-jar/inlined/".concat(assetId)).default;
    } catch (err) {
      return null;
    }
  }

  function svgJar(assetId, svgAttrs) {
    return (0, _makeSvg.default)(assetId, svgAttrs, getInlineAsset);
  }

  var _default = (0, _makeHelper.default)(svgJar);

  _exports.default = _default;
});
;define("covid-19-dashboard/helpers/t", ["exports", "ember-intl/helpers/t"], function (_exports, _t) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _t.default;
    }
  });
});
;define("covid-19-dashboard/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _task.default;
    }
  });
});
;define("covid-19-dashboard/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function get() {
      return _xor.xor;
    }
  });
});
;define("covid-19-dashboard/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "covid-19-dashboard/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("covid-19-dashboard/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',
    initialize: function initialize() {
      var app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
  _exports.default = _default;
});
;define("covid-19-dashboard/initializers/debug", ["exports", "@html-next/vertical-collection/-debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'vertical-collection-debug',
    initialize: function initialize() {}
  };
  _exports.default = _default;
});
;define("covid-19-dashboard/initializers/ember-cli-mirage", ["exports", "covid-19-dashboard/config/environment", "covid-19-dashboard/mirage/config", "ember-cli-mirage/get-rfc232-test-context", "ember-cli-mirage/start-mirage"], function (_exports, _environment, _config, _getRfc232TestContext, _startMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.startMirage = startMirage;
  _exports.default = void 0;
  //
  // This initializer does two things:
  //
  // 1. Pulls the mirage config objects from the application's config and
  //    registers them in the container so `ember-cli-mirage/start-mirage` can
  //    find them (since it doesn't have access to the app's namespace).
  // 2. Provides legacy support for auto-starting mirage in pre-rfc268 acceptance
  //    tests.
  //
  var _default = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (_config.default) {
        application.register('mirage:base-config', _config.default, {
          instantiate: false
        });
      }

      if (_config.testConfig) {
        application.register('mirage:test-config', _config.testConfig, {
          instantiate: false
        });
      }

      _environment.default['ember-cli-mirage'] = _environment.default['ember-cli-mirage'] || {};

      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }
  };
  _exports.default = _default;

  function startMirage() {
    var env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _environment.default;
    return (0, _startMirage.default)(null, {
      env: env,
      baseConfig: _config.default,
      testConfig: _config.testConfig
    });
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }

    if ((0, _getRfc232TestContext.default)()) {
      return false;
    }

    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';

    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }
  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */


  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';
    return usingInDev || usingInTest;
  }
});
;define("covid-19-dashboard/initializers/ember-concurrency", ["exports", "ember-concurrency/initializers/ember-concurrency"], function (_exports, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberConcurrency.default;
    }
  });
});
;define("covid-19-dashboard/initializers/export-application-global", ["exports", "covid-19-dashboard/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("covid-19-dashboard/initializers/leaflet-assets", ["exports", "ember-leaflet/initializers/leaflet-assets"], function (_exports, _leafletAssets) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _leafletAssets.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function get() {
      return _leafletAssets.initialize;
    }
  });
});
;define("covid-19-dashboard/initializers/metrics", ["exports", "covid-19-dashboard/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];
    var _config$metricsAdapte = _environment.default.metricsAdapters,
        metricsAdapters = _config$metricsAdapte === void 0 ? [] : _config$metricsAdapte;
    var _config$environment = _environment.default.environment,
        environment = _config$environment === void 0 ? 'development' : _config$environment;
    var options = {
      metricsAdapters: metricsAdapters,
      environment: environment
    };
    application.register('config:metrics', options, {
      instantiate: false
    });
    application.inject('service:metrics', 'options', 'config:metrics');
  }

  var _default = {
    name: 'metrics',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("covid-19-dashboard/instance-initializers/ember-cli-mirage-autostart", ["exports", "ember-cli-mirage/instance-initializers/ember-cli-mirage-autostart"], function (_exports, _emberCliMirageAutostart) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberCliMirageAutostart.default;
    }
  });
});
;define("covid-19-dashboard/instance-initializers/on-error", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize(appInstance) {
    var metrics = appInstance.lookup('service:metrics');

    Ember.onerror = function (error) {
      metrics.invoke('trackException', {
        exDescription: error.message
      });
    };
  }

  var _default = {
    initialize: initialize
  };
  _exports.default = _default;
});
;define("covid-19-dashboard/metrics-adapters/covid-ga", ["exports", "ember-metrics/metrics-adapters/google-analytics"], function (_exports, _googleAnalytics) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   * Copyright 2020, Verizon Media.
   * Licensed under the Apache License, Version 2.0. See accompanying LICENSE file for terms.
   */
  var _default = _googleAnalytics.default.extend({
    toStringExtension: function toStringExtension() {
      return 'covid-ga';
    },
    trackException: function trackException() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      window.ga('send', 'exception', options);
    }
  });

  _exports.default = _default;
});
;define("covid-19-dashboard/mirage/config", ["exports", "covid-19-dashboard/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  var _filterOperations;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  var _ENV$APP = _environment.default.APP,
      host = _ENV$APP.host,
      namespace = _ENV$APP.namespace;
  var operators = {
    eq: '==',
    isIn: '=in=',
    isNull: '=isnull=true',
    notNull: '=isnull=false',
    lt: '=lt=',
    gt: '=gt=',
    le: '=le=',
    ge: '=ge='
  };
  var filterRegex = new RegExp("(.*)(".concat(Object.values(operators).join('|'), ")(.*)"));

  var unEscapeValue = function unEscapeValue(v) {
    return v.replace(/\\'/g, "'").replace(/\\,/g, ',');
  };

  var filterOperations = (_filterOperations = {}, _defineProperty(_filterOperations, operators.eq, function (recValue, filterValue) {
    var unEscapedValue = unEscapeValue(filterValue);

    var _ref = unEscapedValue.match(/\*(.*)\*/) || [],
        _ref2 = _slicedToArray(_ref, 2),
        like = _ref2[1];

    return like ? recValue.toLowerCase().includes(like.toLowerCase()) : "'".concat(recValue, "'") === unEscapedValue;
  }), _defineProperty(_filterOperations, operators.isIn, function (recValue, filterValue) {
    var _filterValue$match = filterValue.match(/^\((.*)\)$/),
        _filterValue$match2 = _slicedToArray(_filterValue$match, 2),
        value = _filterValue$match2[1];

    return unEscapeValue(value).split(',').map(function (v) {
      return (v.match(/^'(.*)'$/) || [])[1];
    }).some(function (v) {
      return v === recValue;
    });
  }), _defineProperty(_filterOperations, operators.isNull, function (recValue) {
    return recValue === null || recValue === undefined;
  }), _defineProperty(_filterOperations, operators.notNull, function (recValue) {
    return recValue !== null && recValue !== undefined;
  }), _defineProperty(_filterOperations, operators.lt, function (recValue, filterValue) {
    return recValue < filterValue;
  }), _defineProperty(_filterOperations, operators.gt, function (recValue, filterValue) {
    return recValue > filterValue;
  }), _defineProperty(_filterOperations, operators.le, function (recValue, filterValue) {
    return recValue <= filterValue;
  }), _defineProperty(_filterOperations, operators.ge, function (recValue, filterValue) {
    return recValue >= filterValue;
  }), _filterOperations);

  var getColumn = function getColumn(schema, model, fieldName) {
    var column = {
      field: fieldName,
      relationship: null
    };
    var relationship = schema.associationsFor(model)[fieldName];

    if (relationship) {
      column.field = relationship.foreignKey;
    }

    if (fieldName.includes('.')) {
      var _fieldName$split = fieldName.split('.'),
          _fieldName$split2 = _slicedToArray(_fieldName$split, 2),
          _relationship = _fieldName$split2[0],
          field = _fieldName$split2[1];

      Object.assign(column, {
        relationship: _relationship,
        field: field
      });
    }

    return column;
  };

  var getValue = function getValue(rec, column, schema, model) {
    if (column.relationship) {
      var _schema$find;

      var _schema$associationsF = schema.associationsFor(model)[column.relationship],
          modelName = _schema$associationsF.modelName,
          foreignKey = _schema$associationsF.foreignKey;
      var foreignKeyValue = rec[foreignKey];
      return foreignKeyValue ? (_schema$find = schema.find(modelName, rec[foreignKey])) === null || _schema$find === void 0 ? void 0 : _schema$find[column.field] : undefined;
    } else {
      return rec[column.field];
    }
  };

  function _default() {
    this.urlPrefix = host;
    this.namespace = namespace;
    this.get('/:type', function (schema, req) {
      var type = req.params.type,
          _req$queryParams = req.queryParams,
          queryParams = _req$queryParams === void 0 ? {} : _req$queryParams;
      var filterParam = queryParams.filter || '';
      var filters = filterParam.split(';').filter(function (filter) {
        return filter;
      }).map(function (filter) {
        var _filter$match = filter.match(filterRegex),
            _filter$match2 = _slicedToArray(_filter$match, 4),
            field = _filter$match2[1],
            operator = _filter$match2[2],
            value = _filter$match2[3];

        return {
          field: field,
          operator: operator,
          value: value
        };
      });
      var model = schema.toModelName(type);
      var response = schema[type].where(function (rec) {
        return filters.every(function (filter) {
          var field = filter.field,
              operator = filter.operator,
              filterValue = filter.value;
          var column = getColumn(schema, model, field);
          var recValue = getValue(rec, column, schema, model);
          return filterOperations[operator](recValue, filterValue);
        });
      });
      var sort = queryParams.sort;

      if (sort) {
        var isDescending = sort.startsWith('-');
        var sortOrder = isDescending ? -1 : 1;
        var field = isDescending ? sort.substring(1) : sort;
        response = response.sort(function (l, r) {
          return sortOrder * (l[field] - r[field]);
        });
      }

      return response;
    });
  }
});
;define("covid-19-dashboard/mirage/fixtures/counties", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = [{
    id: '78fb973e0330b5bef80178cb2ee15544',
    label: 'Autauga County, Alabama',
    latitude: 32.50771,
    longitude: -86.66611,
    population: 54571,
    wikiId: 'Autauga_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '43e6b42296ad36c2ff19f0233559e2e7',
    label: 'Baldwin County, Alabama',
    latitude: 30.7698,
    longitude: -87.70876,
    population: 182265,
    wikiId: 'Baldwin_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: 'd7f34c76271abd72a4b8041d74c47677',
    label: 'Barbour County, Alabama',
    latitude: 31.88278,
    longitude: -85.39843,
    population: 29038,
    wikiId: 'Barbour_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '5e61bbc0f70c87b7d49969d45dc9d665',
    label: 'Bibb County, Alabama',
    latitude: 33.03914,
    longitude: -87.14917,
    population: 22915,
    wikiId: 'Bibb_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '037a13cc1e282b176a0b6414b41cc98d',
    label: 'Blount County, Alabama',
    latitude: 34.01276,
    longitude: -86.63345,
    population: 57322,
    wikiId: 'Blount_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '9b2bde169e2daa168fa213290d4bf3c9',
    label: 'Bullock County, Alabama',
    latitude: 32.09272,
    longitude: -85.70465,
    population: 11714,
    wikiId: 'Bullock_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '0ccae1c8732add5b6badd0935710a4b2',
    label: 'Butler County, Alabama',
    latitude: 31.74421,
    longitude: -86.67338,
    population: 21399,
    wikiId: 'Butler_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '555ba6ccd9f3e05f5debbca3c4c37478',
    label: 'Calhoun County, Alabama',
    latitude: 33.76226,
    longitude: -85.83777,
    population: 118572,
    wikiId: 'Calhoun_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '054290337334a77761a253a70bfc7fb6',
    label: 'Chambers County, Alabama',
    latitude: 32.91879,
    longitude: -85.35803,
    population: 36583,
    wikiId: 'Chambers_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '1f3319584eca4062759843e936929fc4',
    label: 'Cherokee County, Alabama',
    latitude: 34.23394,
    longitude: -85.62135,
    population: 25989,
    wikiId: 'Cherokee_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '22ee1b39473ed75b3baca3e89be181a8',
    label: 'Chilton County, Alabama',
    latitude: 32.86599,
    longitude: -86.69548,
    population: 43643,
    wikiId: 'Chilton_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: 'b1851629065196b075d2c54eef8bb668',
    label: 'Choctaw County, Alabama',
    latitude: 32.00402,
    longitude: -88.20052,
    population: 15922,
    wikiId: 'Choctaw_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: 'bf5fb0dffbd6660abd15196324e008a8',
    label: 'Clarke County, Alabama',
    latitude: 31.58842,
    longitude: -87.84078,
    population: 27867,
    wikiId: 'Clarke_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '82b6fad209177a89ed55c406ce1eb32d',
    label: 'Clay County, Alabama',
    latitude: 33.29451,
    longitude: -85.90771,
    population: 14254,
    wikiId: 'Clay_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '6fd4ce998e97183d7529ebb7b64a0908',
    label: 'Cleburne County, Alabama',
    latitude: 33.71663,
    longitude: -85.59616,
    population: 14972,
    wikiId: 'Cleburne_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '3d7af055e9b1d42a93ed8d4879d123a6',
    label: 'Coffee County, Alabama',
    latitude: 31.40063,
    longitude: -85.99258,
    population: 49948,
    wikiId: 'Coffee_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '51335878ca8d2276027e97dc9957ab9d',
    label: 'Colbert County, Alabama',
    latitude: 34.73638,
    longitude: -87.59561,
    population: 54984,
    wikiId: 'Colbert_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '8e2f5bcc36efeb53a174979103e9a3e6',
    label: 'Conecuh County, Alabama',
    latitude: 31.46714,
    longitude: -87.04464,
    population: 14089,
    wikiId: 'Conecuh_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '3ccc194192cd7f04a9d7ec90c0002cfe',
    label: 'Coosa County, Alabama',
    latitude: 32.92921,
    longitude: -86.26081,
    population: 12202,
    wikiId: 'Coosa_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: 'ca44cc9de34d9fd68a1a540d8dd92e92',
    label: 'Covington County, Alabama',
    latitude: 31.26102,
    longitude: -86.44469,
    population: 37765,
    wikiId: 'Covington_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '96f8be6753733997c8239f2863fbe8d8',
    label: 'Crenshaw County, Alabama',
    latitude: 31.74577,
    longitude: -86.32374,
    population: 13906,
    wikiId: 'Crenshaw_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '0deac4a0500288dfa2ff1c6077fd4afb',
    label: 'Cullman County, Alabama',
    latitude: 34.08588,
    longitude: -86.80095,
    population: 80406,
    wikiId: 'Cullman_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '712406df4fcf9a8a437067968812a622',
    label: 'Dale County, Alabama',
    latitude: 31.4079,
    longitude: -85.6033,
    population: 50251,
    wikiId: 'Dale_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: 'e6fb887875b7d810f82cece691937d30',
    label: 'Dallas County, Alabama',
    latitude: 32.38799,
    longitude: -87.14006,
    population: 46365,
    wikiId: 'Dallas_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: 'a1bd26ff0bc0ab67c37e726191ccdc2e',
    label: 'DeKalb County, Alabama',
    latitude: 34.52982,
    longitude: -85.81614,
    population: 71109,
    wikiId: 'DeKalb_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '1fdace681a9994552f11ecfa40b34eaa',
    label: 'Elmore County, Alabama',
    latitude: 32.58757,
    longitude: -86.1333,
    population: 79303,
    wikiId: 'Elmore_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '4382846735e1d2b8987a3b6e34734fbb',
    label: 'Escambia County, Alabama',
    latitude: 31.1284,
    longitude: -87.15194,
    population: 38440,
    wikiId: 'Escambia_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '2b7ccc9bc0690ac2ddc25a4145a6ced9',
    label: 'Etowah County, Alabama',
    latitude: 34.02113,
    longitude: -86.05351,
    population: 104430,
    wikiId: 'Etowah_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: 'aeb6358eab9eabeba46c635f24ee9140',
    label: 'Fayette County, Alabama',
    latitude: 33.71988,
    longitude: -87.6879,
    population: 18495,
    wikiId: 'Fayette_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '94369cd5664b13b93225ad29adeef8a0',
    label: 'Franklin County, Alabama',
    latitude: 34.44324,
    longitude: -87.85165,
    population: 31704,
    wikiId: 'Franklin_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: 'e62208aa9ae5e323dd722eef5f5e1066',
    label: 'Geneva County, Alabama',
    latitude: 31.09642,
    longitude: -85.83932,
    population: 26790,
    wikiId: 'Geneva_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '7198e291897cffe741f9f80a1a722c0f',
    label: 'Greene County, Alabama',
    latitude: 32.83585,
    longitude: -87.95635,
    population: 9974,
    wikiId: 'Greene_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '351242f5cb73a16710a5ea867dd38d4e',
    label: 'Hale County, Alabama',
    latitude: 32.74381,
    longitude: -87.64552,
    population: 17185,
    wikiId: 'Hale_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '6458c33b1f9d82ad6bec2e12e4511e93',
    label: 'Henry County, Alabama',
    latitude: 31.54105,
    longitude: -85.22955,
    population: 17302,
    wikiId: 'Henry_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '20910aa784850b384530f4f316c957df',
    label: 'Houston County, Alabama',
    latitude: 31.15596,
    longitude: -85.35591,
    population: 88787,
    wikiId: 'Houston_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '9f02992736c51f11d3eb22a7b688505d',
    label: 'Jackson County, Alabama',
    latitude: 34.72778,
    longitude: -85.97115,
    population: 53926,
    wikiId: 'Jackson_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '5739115715feb6cfca4b49f0c779bee8',
    label: 'Jefferson County, Alabama',
    latitude: 33.54448,
    longitude: -86.9292,
    population: 662047,
    wikiId: 'Jefferson_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: 'ed9a383ec4385ddc91bc4fb04763b6f3',
    label: 'Lamar County, Alabama',
    latitude: 33.79147,
    longitude: -88.11022,
    population: 15904,
    wikiId: 'Lamar_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '54ac91661ab493c7834d22e2d6d1250a',
    label: 'Lauderdale County, Alabama',
    latitude: 34.86992,
    longitude: -87.70666,
    population: 92709,
    wikiId: 'Lauderdale_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '48c77846a72ddc9507e0b458509fe2fb',
    label: 'Lawrence County, Alabama',
    latitude: 34.55201,
    longitude: -87.31825,
    population: 34803,
    wikiId: 'Lawrence_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '2665b233c5c4092d108a034aa62fe596',
    label: 'Lee County, Alabama',
    latitude: 32.57819,
    longitude: -85.34894,
    population: 140247,
    wikiId: 'Lee_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: 'b685338cfc9d4cfe9db875026ee519d0',
    label: 'Limestone County, Alabama',
    latitude: 34.77504,
    longitude: -87.03236,
    population: 82782,
    wikiId: 'Limestone_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '014ec7cedf31ffeb697c41225fd6c839',
    label: 'Lowndes County, Alabama',
    latitude: 32.18431,
    longitude: -86.65243,
    population: 13473,
    wikiId: 'Lowndes_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '3433c89192102177725a8095a408bd28',
    label: 'Macon, Alabama',
    latitude: 32.4139,
    longitude: -85.72846,
    population: 24105,
    wikiId: 'Macon,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '5196ca064ada8e4bf642e1a9baa4570a',
    label: 'Madison County, Alabama',
    latitude: 34.73392,
    longitude: -86.52295,
    population: 334811,
    wikiId: 'Madison_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '53166dfe18f78edeebebf155212b0518',
    label: 'Marengo County, Alabama',
    latitude: 32.26852,
    longitude: -87.79526,
    population: 22539,
    wikiId: 'Marengo_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '5a1f2372194bef03bd01aa9da438fcaa',
    label: 'Marion County, Alabama',
    latitude: 34.11785,
    longitude: -87.92081,
    population: 31214,
    wikiId: 'Marion_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: 'd72542e15a37de8ad0cb97a1e395043e',
    label: 'Marshall County, Alabama',
    latitude: 34.34962,
    longitude: -86.31986,
    population: 93019,
    wikiId: 'Marshall_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '5f03e0239c83d6f53b9e111f54505b13',
    label: 'Mobile County, Alabama',
    latitude: 30.70034,
    longitude: -88.17812,
    population: 412992,
    wikiId: 'Mobile_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: 'c0507a92e8446ed7d6ae03c0d3b5b625',
    label: 'Monroe County, Alabama',
    latitude: 31.5291,
    longitude: -87.34523,
    population: 24324,
    wikiId: 'Monroe_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: 'fc42790a0bf3093a5aba63b01f23586e',
    label: 'Montgomery County, Alabama',
    latitude: 32.23342,
    longitude: -86.20862,
    population: 229363,
    wikiId: 'Montgomery_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: 'c912a3d93f51fb76fe1744f6aca14818',
    label: 'Morgan County, Alabama',
    latitude: 34.49531,
    longitude: -86.83024,
    population: 119490,
    wikiId: 'Morgan_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '348ffcbe99a3606ef95778c5f6738997',
    label: 'Perry County, Alabama',
    latitude: 32.5912,
    longitude: -87.27166,
    population: 11861,
    wikiId: 'Perry_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: 'f27ab286a23fa10294c895d1cba6cbf5',
    label: 'Pickens County, Alabama',
    latitude: 33.26278,
    longitude: -88.08869,
    population: 20949,
    wikiId: 'Pickens_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '305a0b2da81bf82a36855edefb8beaa4',
    label: 'Pike County, Alabama',
    latitude: 31.83908,
    longitude: -85.92852,
    population: 32899,
    wikiId: 'Pike_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '930cd3597c2350242752c7ee2b7c2aca',
    label: 'Randolph County, Alabama',
    latitude: 33.304,
    longitude: -85.44331,
    population: 22913,
    wikiId: 'Randolph_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '49ecdb290ab7810af97ae5d9353c2cc2',
    label: 'Russell County, Alabama',
    latitude: 32.28585,
    longitude: -85.16153,
    population: 52947,
    wikiId: 'Russell_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '3d14de9ffc1e063b03810721cf17b389',
    label: 'Shelby County, Alabama',
    latitude: 33.2824,
    longitude: -86.68359,
    population: 195085,
    wikiId: 'Shelby_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: 'd7254532adea9b2a346ed9b621de71b6',
    label: 'St. Clair County, Alabama',
    latitude: 33.69021,
    longitude: -86.31076,
    population: 83593,
    wikiId: 'St._Clair_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: 'e3a9b7faea716a481da18262ba19ad67',
    label: 'Sumter County, Alabama',
    latitude: 32.65149,
    longitude: -88.13106,
    population: 14798,
    wikiId: 'Sumter_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '23300529b55d787822cd0b7361ee2fc0',
    label: 'Talladega County, Alabama',
    latitude: 33.40126,
    longitude: -86.14896,
    population: 82291,
    wikiId: 'Talladega_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '07e8a9956b8bb32553f17aa97c0e536e',
    label: 'Tallapoosa County, Alabama',
    latitude: 32.79993,
    longitude: -85.80335,
    population: 41616,
    wikiId: 'Tallapoosa_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '628f40d4370ffb6a766eddeaab4c85e5',
    label: 'Tuscaloosa County, Alabama',
    latitude: 33.30667,
    longitude: -87.45317,
    population: 194656,
    wikiId: 'Tuscaloosa_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '0f3218584ce9c67fa8fbd8cba917e67c',
    label: 'Walker County, Alabama',
    latitude: 33.75914,
    longitude: -87.29501,
    population: 70713,
    wikiId: 'Walker_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '71166edd2e7ae2e306f8d415bdb5c843',
    label: 'Washington County, Alabama',
    latitude: 31.40602,
    longitude: -88.17585,
    population: 18097,
    wikiId: 'Washington_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: 'f0484de2735469c614c84a49ab8602b1',
    label: 'Wilcox County, Alabama',
    latitude: 32.04816,
    longitude: -87.26157,
    population: 13183,
    wikiId: 'Wilcox_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '71c9e63b89a22315f4f249848cab712b',
    label: 'Winston County, Alabama',
    latitude: 34.14589,
    longitude: -87.3733,
    population: 24843,
    wikiId: 'Winston_County,_Alabama',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: '40e54368289c4795f51747e131d408bd',
    label: 'Champaign County, Illinois',
    latitude: 40.13986,
    longitude: -88.19619,
    population: 201081,
    wikiId: 'Champaign_County,_Illinois',
    stateId: '66c2b329479ee151b4c6b257c0b7a9b7'
  }];
  _exports.default = _default;
});
;define("covid-19-dashboard/mirage/fixtures/countries", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = [{
    id: '5cdd21c97f86686cc505e02fd32a7523',
    label: 'Earth',
    latitude: 0,
    longitude: 0,
    population: null,
    wikiId: 'Earth',
    stateIds: []
  }, {
    id: '6e9767f4f15357401b148b9a8ced14ef',
    label: 'Afghanistan',
    latitude: 33.93045,
    longitude: 67.67894,
    population: 32225560,
    wikiId: 'Afghanistan',
    stateIds: []
  }, {
    id: 'c420ddff824a5c0eec70dd23d62496bc',
    label: 'Albania',
    latitude: 41.15265,
    longitude: 20.17001,
    population: 3079100,
    wikiId: 'Albania',
    stateIds: []
  }, {
    id: '575b9408b6daa2ddcefbcf6d81c9b4c9',
    label: 'Algeria',
    latitude: 28.02688,
    longitude: 1.65284,
    population: 43000000,
    wikiId: 'Algeria',
    stateIds: []
  }, {
    id: '68746a7280b143cfc01f967610d3e86d',
    label: 'Andorra',
    latitude: 42.54237,
    longitude: 1.60021,
    population: 65971,
    wikiId: 'Andorra',
    stateIds: []
  }, {
    id: '232bf11cb81bcdb269f76a08fde8b947',
    label: 'Angola',
    latitude: -11.94184,
    longitude: 17.90721,
    population: 13036300,
    wikiId: 'Angola',
    stateIds: []
  }, {
    id: 'cedfc05affe8143cc552076e77407863',
    label: 'Anguilla',
    latitude: 18.22512,
    longitude: -63.07213,
    population: 12300,
    wikiId: 'Anguilla',
    stateIds: []
  }, {
    id: '79f96d084a36450dd126ddb451f53c90',
    label: 'Antigua and Barbuda',
    latitude: 17.08602,
    longitude: -61.78942,
    population: 70100,
    wikiId: 'Antigua_and_Barbuda',
    stateIds: []
  }, {
    id: '3536be57ce0713954e454ae6c53ec023',
    label: 'Argentina',
    latitude: -37.0907,
    longitude: -63.5848,
    population: 44938712,
    wikiId: 'Argentina',
    stateIds: []
  }, {
    id: 'a00c273f0f497484093fa94865cf5ca5',
    label: 'Armenia',
    latitude: 40.06617,
    longitude: 45.03989,
    population: 3912600,
    wikiId: 'Armenia',
    stateIds: []
  }, {
    id: '4893b64051cf425047ddd8606dae25f4',
    label: 'Aruba',
    latitude: 12.51835,
    longitude: -69.96399,
    population: 69200,
    wikiId: 'Aruba',
    stateIds: []
  }, {
    id: '4442e4af0916f53a07fb8ca9a49b98ed',
    label: 'Australia',
    latitude: -24.9121,
    longitude: 133.398,
    population: 19978100,
    wikiId: 'Australia',
    stateIds: []
  }, {
    id: '9891739094756d2605946c867b32ad28',
    label: 'Austria',
    latitude: 47.69651,
    longitude: 13.34577,
    population: 8902600,
    wikiId: 'Austria',
    stateIds: []
  }, {
    id: '7176f8c3bccfdf02322c73f7a0bc9688',
    label: 'Azerbaijan',
    latitude: 40.15134,
    longitude: 47.68707,
    population: 8239200,
    wikiId: 'Azerbaijan',
    stateIds: []
  }, {
    id: '6ddecd8ccd9f648d19dc02c7a566cb4f',
    label: 'Bahrain',
    latitude: 26.02475,
    longitude: 50.5485,
    population: 730500,
    wikiId: 'Bahrain',
    stateIds: []
  }, {
    id: 'f78a77f631d275aac6a914a17fe1b885',
    label: 'Bangladesh',
    latitude: 23.68745,
    longitude: 90.3509,
    population: 138900600,
    wikiId: 'Bangladesh',
    stateIds: []
  }, {
    id: '3214c0f21d200a1dae4eb83a53ec2730',
    label: 'Barbados',
    latitude: 13.18355,
    longitude: -59.53465,
    population: 264300,
    wikiId: 'Barbados',
    stateIds: []
  }, {
    id: '6542f875eaa09a5c550e5f3986400ad9',
    label: 'Belarus',
    latitude: 53.71105,
    longitude: 27.97375,
    population: 9491800,
    wikiId: 'Belarus',
    stateIds: []
  }, {
    id: '6c1674d14bf5f95742f572cddb0641a7',
    label: 'Belgium',
    latitude: 50.50101,
    longitude: 4.47684,
    population: 10339300,
    wikiId: 'Belgium',
    stateIds: []
  }, {
    id: '20bca6785240fa722edb5c85d055a93d',
    label: 'Belize',
    latitude: 17.19292,
    longitude: -88.65284,
    population: 408487,
    wikiId: 'Belize',
    stateIds: []
  }, {
    id: '9e7002d53d4db7bfad4f5cf419b0c126',
    label: 'Benin',
    latitude: 9.32204,
    longitude: 2.31313,
    population: 6738600,
    wikiId: 'Benin',
    stateIds: []
  }, {
    id: '6653bea16d7ac8a266d752e9a0176c4f',
    label: 'Bermuda',
    latitude: 32.3031,
    longitude: -64.78547,
    population: 64500,
    wikiId: 'Bermuda',
    stateIds: []
  }, {
    id: 'e65a0ed0e39dd14a9e5af441efb09b37',
    label: 'Bhutan',
    latitude: 27.5155,
    longitude: 90.44227,
    population: 741700,
    wikiId: 'Bhutan',
    stateIds: []
  }, {
    id: '28aaafc355915903ce4a7e1d3af3bc4e',
    label: 'Bolivia',
    latitude: -16.28835,
    longitude: -63.54942,
    population: 8676000,
    wikiId: 'Bolivia',
    stateIds: []
  }, {
    id: 'c758f309604eaea62c3c519cb2d6d5e3',
    label: 'Bosnia and Herzegovina',
    latitude: 43.9201,
    longitude: 17.67696,
    population: 4207300,
    wikiId: 'Bosnia_and_Herzegovina',
    stateIds: []
  }, {
    id: '6cd50fb3091b0a9d3c1ac2cf52441390',
    label: 'Botswana',
    latitude: -22.34403,
    longitude: 24.68016,
    population: 1762100,
    wikiId: 'Botswana',
    stateIds: []
  }, {
    id: '42537f0fb56e31e20ab9c2305752087d',
    label: 'Brazil',
    latitude: -14.2429,
    longitude: -54.3878,
    population: 210147125,
    wikiId: 'Brazil',
    stateIds: []
  }, {
    id: '8844a70fd7c52028649497f726e7982f',
    label: 'British Virgin Islands',
    latitude: 18.42682,
    longitude: -64.63549,
    population: 2200,
    wikiId: 'British_Virgin_Islands',
    stateIds: []
  }, {
    id: 'd3f5841f04ba23bb90e1b9f4256cea70',
    label: 'Brunei',
    latitude: 4.52513,
    longitude: 114.59897,
    population: 442400,
    wikiId: 'Brunei',
    stateIds: []
  }, {
    id: '01a151debf2bfee8906f43f4342eb10b',
    label: 'Bulgaria',
    latitude: 42.7316,
    longitude: 25.48312,
    population: 7917600,
    wikiId: 'Bulgaria',
    stateIds: []
  }, {
    id: 'dfc4327c51fe1e82827c1eb7b0d23a42',
    label: 'Burkina Faso',
    latitude: 12.24184,
    longitude: -1.55676,
    population: 20107509,
    wikiId: 'Burkina_Faso',
    stateIds: []
  }, {
    id: '28765464efe1b6583610335965b4d75a',
    label: 'Burundi',
    latitude: -3.38791,
    longitude: 29.92039,
    population: 7596700,
    wikiId: 'Burundi',
    stateIds: []
  }, {
    id: '06c7a3c3a3344a62864b951aec4df830',
    label: 'Cambodia',
    latitude: 12.54773,
    longitude: 104.98386,
    population: 13382400,
    wikiId: 'Cambodia',
    stateIds: []
  }, {
    id: '4be25f9d27da71d4e98775668b5b12af',
    label: 'Cameroon',
    latitude: 7.36529,
    longitude: 12.34344,
    population: 16341000,
    wikiId: 'Cameroon',
    stateIds: []
  }, {
    id: '445d337b5cd5de476f99333df6b0c2a7',
    label: 'Canada',
    latitude: 56.95468,
    longitude: -98.30897,
    population: 37894799,
    wikiId: 'Canada',
    stateIds: []
  }, {
    id: 'a290b08603974f521042309b441b5aeb',
    label: 'Cape Verde',
    latitude: 15.1123,
    longitude: -23.61476,
    population: 456300,
    wikiId: 'Cape_Verde',
    stateIds: []
  }, {
    id: '679af7e84ba599d665a130429c3ab3e6',
    label: 'Caribbean Netherlands',
    latitude: 12.16084,
    longitude: -68.24336,
    population: 25157,
    wikiId: 'Caribbean_Netherlands',
    stateIds: []
  }, {
    id: '08a3abb86ae944b6f2d92c7c1d02d50e',
    label: 'Cayman Islands',
    latitude: 19.33002,
    longitude: -81.25216,
    population: 46800,
    wikiId: 'Cayman_Islands',
    stateIds: []
  }, {
    id: 'e03653dedd6f4e142f4aca131995964f',
    label: 'Chad',
    latitude: 15.4603,
    longitude: 18.73877,
    population: 13670084,
    wikiId: 'Chad',
    stateIds: []
  }, {
    id: '2e6507f70a9cc26fb50f5fd82a83c7ef',
    label: 'Chile',
    latitude: -35.70522,
    longitude: -71.34109,
    population: 15265600,
    wikiId: 'Chile',
    stateIds: []
  }, {
    id: 'ae54a5c026f31ada088992587d92cb3a',
    label: 'China',
    latitude: 36.8944,
    longitude: 104.166,
    population: 1319132500,
    wikiId: 'China',
    stateIds: []
  }, {
    id: 'ef3388cc5659bccb742fb8af762f1bfd',
    label: 'Colombia',
    latitude: 4.11641,
    longitude: -72.95853,
    population: 50372424,
    wikiId: 'Colombia',
    stateIds: []
  }, {
    id: '4234d1794dd33c1b6ed975eab5148040',
    label: 'Comoros',
    latitude: -11.65158,
    longitude: 43.35997,
    population: 850688,
    wikiId: 'Comoros',
    stateIds: []
  }, {
    id: '1c394afdd7149549f6e0060783b1404f',
    label: 'Cook Islands',
    latitude: -21.22734,
    longitude: -159.7713,
    population: 17600,
    wikiId: 'Cook_Islands',
    stateIds: []
  }, {
    id: 'e226fbb7731da90173e60cdd1704481c',
    label: 'Costa Rica',
    latitude: 9.62489,
    longitude: -84.25331,
    population: 4148500,
    wikiId: 'Costa_Rica',
    stateIds: []
  }, {
    id: '560d4c6ff431c86546f3fcec72c748c7',
    label: 'Croatia',
    latitude: 44.74671,
    longitude: 15.3408,
    population: 4397400,
    wikiId: 'Croatia',
    stateIds: []
  }, {
    id: '33cac763789c407f405b2cf0dce7df89',
    label: 'Cuba',
    latitude: 21.51102,
    longitude: -77.80679,
    population: 11822800,
    wikiId: 'Cuba',
    stateIds: []
  }, {
    id: 'fb37b6378a6bd62f68890f3025a0c752',
    label: 'Curacao',
    latitude: 12.20921,
    longitude: -69.03941,
    population: 133000,
    wikiId: 'Cura%C3%A7ao',
    stateIds: []
  }, {
    id: 'ea2ba3f8011e19e3101ce65fdcefbcc4',
    label: 'Cyprus',
    latitude: 35.13252,
    longitude: 33.4355,
    population: 935400,
    wikiId: 'Cyprus',
    stateIds: []
  }, {
    id: '12a4359f3d8a4a2db61f4d040edb73ed',
    label: 'Czech Republic',
    latitude: 49.80388,
    longitude: 15.47491,
    population: 10649800,
    wikiId: 'Czech_Republic',
    stateIds: []
  }, {
    id: '424214945ba5615eca039bfe5d731c09',
    label: 'Denmark',
    latitude: 56.27609,
    longitude: 9.51695,
    population: 5822763,
    wikiId: 'Denmark',
    stateIds: []
  }, {
    id: '902f92c09660b797958acb27421fd9ac',
    label: 'Djibouti',
    latitude: 11.80837,
    longitude: 42.59521,
    population: 921804,
    wikiId: 'Djibouti',
    stateIds: []
  }, {
    id: '531c552093668f148d3c826fca6e3cc8',
    label: 'Dominica',
    latitude: 15.41674,
    longitude: -61.36413,
    population: 70500,
    wikiId: 'Dominica',
    stateIds: []
  }, {
    id: '1b44cfe344fa1ed289752f66791b7dd6',
    label: 'Dominican Republic',
    latitude: 18.7679,
    longitude: -70.16174,
    population: 9219800,
    wikiId: 'Dominican_Republic',
    stateIds: []
  }, {
    id: 'c0fb49777c3f63b7bf4e61c7f7aa5144',
    label: 'East Timor',
    latitude: -8.89403,
    longitude: 126.11955,
    population: 965300,
    wikiId: 'East_Timor',
    stateIds: []
  }, {
    id: '4d5d85af33ec2aaedb674d2d6a7d53b6',
    label: 'Ecuador',
    latitude: -1.78156,
    longitude: -78.10667,
    population: 12471600,
    wikiId: 'Ecuador',
    stateIds: []
  }, {
    id: 'e31959fe2842dacea4d16d36e9813620',
    label: 'Egypt',
    latitude: 26.83709,
    longitude: 30.79639,
    population: 69296000,
    wikiId: 'Egypt',
    stateIds: []
  }, {
    id: '2636ae11dc797b834da1f78f47132ff1',
    label: 'El Salvador',
    latitude: 13.79687,
    longitude: -88.91879,
    population: 6178700,
    wikiId: 'El_Salvador',
    stateIds: []
  }, {
    id: '93822d1b60a0942da695950bed9442ea',
    label: 'Equatorial Guinea',
    latitude: 1.63392,
    longitude: 10.34129,
    population: 476200,
    wikiId: 'Equatorial_Guinea',
    stateIds: []
  }, {
    id: 'c9c9f116f74ac9d7e60dc415523dfeff',
    label: 'Eritrea',
    latitude: 15.18132,
    longitude: 39.95086,
    population: 5750433,
    wikiId: 'Eritrea',
    stateIds: []
  }, {
    id: '7755415a9fe7022060b98a689236ccd2',
    label: 'Estonia',
    latitude: 58.59232,
    longitude: 25.80695,
    population: 1328360,
    wikiId: 'Estonia',
    stateIds: []
  }, {
    id: '5b6c44e2e66685a59e42673eff6d5f17',
    label: 'Swaziland',
    latitude: -26.51837,
    longitude: 31.46568,
    population: 1068600,
    wikiId: 'Eswatini',
    stateIds: []
  }, {
    id: 'e299d7cb0f7866cce7d90da2af14047c',
    label: 'Ethiopia',
    latitude: 9.1473,
    longitude: 40.49305,
    population: 69981800,
    wikiId: 'Ethiopia',
    stateIds: []
  }, {
    id: '2644c9525b473b5ad66de817564bb3bc',
    label: 'Falkland Islands',
    latitude: -51.80058,
    longitude: -58.72104,
    population: 2300,
    wikiId: 'Falkland_Islands',
    stateIds: []
  }, {
    id: '62a31ae99f39c3703156dff0fb70ec15',
    label: 'Faroe Islands',
    latitude: 62.12691,
    longitude: -6.98953,
    population: 47600,
    wikiId: 'Faroe_Islands',
    stateIds: []
  }, {
    id: '55b0c4d4efa00b59643b2e6a6e7c18c0',
    label: 'Fiji',
    latitude: -17.79099,
    longitude: 177.9734,
    population: 926276,
    wikiId: 'Fiji',
    stateIds: []
  }, {
    id: '6f781c6559a0c605da918096bdb69edf',
    label: 'Finland',
    latitude: 64.95014,
    longitude: 26.06739,
    population: 5521158,
    wikiId: 'Finland',
    stateIds: []
  }, {
    id: '0309a6c666a7a803fdb9db95de71cf01',
    label: 'France',
    latitude: 46.71067,
    longitude: 1.71819,
    population: 67022000,
    wikiId: 'France',
    stateIds: []
  }, {
    id: 'f759cc253e82d5acc22a83374fae2818',
    label: 'French Guiana',
    latitude: 3.95179,
    longitude: -53.07823,
    population: 290691,
    wikiId: 'French_Guiana',
    stateIds: []
  }, {
    id: '9f565d21ab70afde5aca88d6e7174b9e',
    label: 'French Polynesia',
    latitude: -17.69017,
    longitude: -149.376,
    population: 253700,
    wikiId: 'French_Polynesia',
    stateIds: []
  }, {
    id: 'fceb5af40df295d85851f390f4f8d78d',
    label: 'Gabon',
    latitude: -0.82809,
    longitude: 11.59891,
    population: 1345300,
    wikiId: 'Gabon',
    stateIds: []
  }, {
    id: 'b3c6f07b0e6e5acb9e98e10378649de9',
    label: 'Georgia (country)',
    latitude: 42.31152,
    longitude: 43.36579,
    population: 5334800,
    wikiId: 'Georgia_(country)',
    stateIds: []
  }, {
    id: 'd8b00929dec65d422303256336ada04f',
    label: 'Germany',
    latitude: 51.16418,
    longitude: 10.45415,
    population: 83149300,
    wikiId: 'Germany',
    stateIds: []
  }, {
    id: 'e7400496f1ce70cb62c2c44ca2ddc469',
    label: 'Ghana',
    latitude: 7.95501,
    longitude: -1.03182,
    population: 31072940,
    wikiId: 'Ghana',
    stateIds: []
  }, {
    id: '672566a43483aa8212cb365658600b99',
    label: 'Gibraltar',
    latitude: 36.13208,
    longitude: -5.34829,
    population: 29400,
    wikiId: 'Gibraltar',
    stateIds: []
  }, {
    id: '6b718641741f992e68ec3712718561b8',
    label: 'Greece',
    latitude: 39.07245,
    longitude: 21.84556,
    population: 11100200,
    wikiId: 'Greece',
    stateIds: []
  }, {
    id: '583eda79d32f7c1cb0840862787a73ca',
    label: 'Greenland',
    latitude: 71.80207,
    longitude: -42.17718,
    population: 56500,
    wikiId: 'Greenland',
    stateIds: []
  }, {
    id: '45b1cb9a558807139085c645d2f47f07',
    label: 'Grenada',
    latitude: 12.11267,
    longitude: -61.69894,
    population: 94000,
    wikiId: 'Grenada',
    stateIds: []
  }, {
    id: '0dc81c66d1c08d6ca64c7e8b60ae78fb',
    label: 'Guadeloupe',
    latitude: 16.15784,
    longitude: -61.67671,
    population: 440400,
    wikiId: 'Guadeloupe',
    stateIds: []
  }, {
    id: '948b13d5a3e11e21baadc349e199020e',
    label: 'Guatemala',
    latitude: 15.77625,
    longitude: -90.23231,
    population: 17263239,
    wikiId: 'Guatemala',
    stateIds: []
  }, {
    id: '8e4d9eeed250a9d065ac2bb8bdc67b30',
    label: 'Guinea',
    latitude: 9.93488,
    longitude: -9.66063,
    population: 1346800,
    wikiId: 'Guinea',
    stateIds: []
  }, {
    id: '2d65f5236205dd23c6a8212627568fb8',
    label: 'Guinea-Bissau',
    latitude: 11.80252,
    longitude: -15.17702,
    population: 1346800,
    wikiId: 'Guinea-Bissau',
    stateIds: []
  }, {
    id: 'cf4c7e1169281886577940e361854a84',
    label: 'Guyana',
    latitude: 4.86632,
    longitude: -58.93826,
    population: 865200,
    wikiId: 'Guyana',
    stateIds: []
  }, {
    id: 'b88959cb7d907d91065ac7ec19eb0b44',
    label: 'Haiti',
    latitude: 18.98606,
    longitude: -72.29226,
    population: 8490200,
    wikiId: 'Haiti',
    stateIds: []
  }, {
    id: 'f4270ce39e7e926052e097a0e4e63bde',
    label: 'Honduras',
    latitude: 14.50472,
    longitude: -86.2531,
    population: 6606100,
    wikiId: 'Honduras',
    stateIds: []
  }, {
    id: '6282fc2a9210d51f678502cfaba1661c',
    label: 'Hong Kong',
    latitude: 22.4112,
    longitude: 114.15872,
    population: 6826500,
    wikiId: 'Hong_Kong',
    stateIds: []
  }, {
    id: 'fa79c3005daec47ecff84a116a0927a1',
    label: 'Hungary',
    latitude: 47.16116,
    longitude: 19.50496,
    population: 9772756,
    wikiId: 'Hungary',
    stateIds: []
  }, {
    id: 'b78edab0f52e0d6c195fd0d8c5709d26',
    label: 'Iceland',
    latitude: 64.96394,
    longitude: -19.02116,
    population: 364260,
    wikiId: 'Iceland',
    stateIds: []
  }, {
    id: '7d31e0da1ab99fe8b08a22118e2f402b',
    label: 'India',
    latitude: 21.7866,
    longitude: 82.79476,
    population: 1067421100,
    wikiId: 'India',
    stateIds: []
  }, {
    id: '4647d00cf81f8fb0ab80f753320d0fc9',
    label: 'Indonesia',
    latitude: 0.10974,
    longitude: 113.9174,
    population: 217825400,
    wikiId: 'Indonesia',
    stateIds: []
  }, {
    id: '21fc68909a9eb8692e84cf64e495213e',
    label: 'Iran',
    latitude: 32.42065,
    longitude: 53.68236,
    population: 83183741,
    wikiId: 'Iran',
    stateIds: []
  }, {
    id: '5ae2ff99743a8487c917e98bbf3db2d3',
    label: 'Iraq',
    latitude: 33.24052,
    longitude: 43.68985,
    population: 26298900,
    wikiId: 'Iraq',
    stateIds: []
  }, {
    id: '5a548c2f5875f10bf5614b7c258876cf',
    label: 'Israel',
    latitude: 31.3893,
    longitude: 35.36124,
    population: 6556000,
    wikiId: 'Israel',
    stateIds: []
  }, {
    id: '1007e1b7f894dfbf72a0eaa80f3bc57e',
    label: 'Italy',
    latitude: 42.50382,
    longitude: 12.57347,
    population: 60317546,
    wikiId: 'Italy',
    stateIds: []
  }, {
    id: '4413f999927923b7c6fd336d7cdbabeb',
    label: 'Ivory Coast',
    latitude: 7.54685,
    longitude: -5.54709,
    population: 23740424,
    wikiId: 'Ivory_Coast',
    stateIds: []
  }, {
    id: '53a577bb3bc587b0c28ab808390f1c9b',
    label: 'Japan',
    latitude: 37.4876,
    longitude: 139.83829,
    population: 127708000,
    wikiId: 'Japan',
    stateIds: []
  }, {
    id: '6ea1e24d60afddf388b06f8243c45b70',
    label: 'Jordan',
    latitude: 31.27946,
    longitude: 37.13068,
    population: 6269285,
    wikiId: 'Jordan',
    stateIds: []
  }, {
    id: '7c1a943bf29d2c753fb935e99428482c',
    label: 'Kazakhstan',
    latitude: 48,
    longitude: 68,
    population: 18448600,
    wikiId: 'Kazakhstan',
    stateIds: []
  }, {
    id: '94984a8c4896946d9bafd24959cb6181',
    label: 'Kenya',
    latitude: -0.02435,
    longitude: 37.90395,
    population: 32499100,
    wikiId: 'Kenya',
    stateIds: []
  }, {
    id: '5445aab1db1bff113667140ec2e95742',
    label: 'Kiribati',
    latitude: -8.0455,
    longitude: 159.16138,
    population: 9700,
    wikiId: 'Kiribati',
    stateIds: []
  }, {
    id: '05387f3ca38d7bd84ae35f31f2899ecf',
    label: 'Kuwait',
    latitude: 29.31015,
    longitude: 47.49445,
    population: 4621638,
    wikiId: 'Kuwait',
    stateIds: []
  }, {
    id: '5e4a24f76c22f03700b283dfbdf6eec1',
    label: 'Kyrgyzstan',
    latitude: 41.20554,
    longitude: 74.7799,
    population: 6389500,
    wikiId: 'Kyrgyzstan',
    stateIds: []
  }, {
    id: '601aebf4afb1db3fdb5c88f3cdda23ef',
    label: 'Laos',
    latitude: 18.20521,
    longitude: 105.45118,
    population: 5559200,
    wikiId: 'Laos',
    stateIds: []
  }, {
    id: 'a09f4b2ae67f0a63ab8912047a1a1b55',
    label: 'Latvia',
    latitude: 56.88011,
    longitude: 24.60524,
    population: 2290100,
    wikiId: 'Latvia',
    stateIds: []
  }, {
    id: 'b45ff92cc522bb89bfc3b8ef3fc21b7d',
    label: 'Lebanon',
    latitude: 33.8708,
    longitude: 35.86324,
    population: 4376900,
    wikiId: 'Lebanon',
    stateIds: []
  }, {
    id: 'e99bb6b91ef51dbe4eec9340dc7c68cf',
    label: 'Lesotho',
    latitude: -29.62051,
    longitude: 28.24742,
    population: 2523400,
    wikiId: 'Lesotho',
    stateIds: []
  }, {
    id: '642cab67fc263bb61ae4ccbd577c8aa4',
    label: 'Liberia',
    latitude: 6.45242,
    longitude: -9.42859,
    population: 4809768,
    wikiId: 'Liberia',
    stateIds: []
  }, {
    id: '742b8abe5776a6d942a92ce7dc7d84a0',
    label: 'Libya',
    latitude: 26.33852,
    longitude: 17.26882,
    population: 7250800,
    wikiId: 'Libya',
    stateIds: []
  }, {
    id: 'da4e3775bd2de6c37fadd9b0188f7a4e',
    label: 'Liechtenstein',
    latitude: 47.1595,
    longitude: 9.5538,
    population: 38557,
    wikiId: 'Liechtenstein',
    stateIds: []
  }, {
    id: 'd9051e0b77f8bb5521389618e70e2ada',
    label: 'Lithuania',
    latitude: 55.17396,
    longitude: 23.89439,
    population: 3491500,
    wikiId: 'Lithuania',
    stateIds: []
  }, {
    id: '06630c890abadde9228ea818ce52b621',
    label: 'Luxembourg',
    latitude: 49.81522,
    longitude: 6.13348,
    population: 613894,
    wikiId: 'Luxembourg',
    stateIds: []
  }, {
    id: '9d6c9d893aa285a736aeabb2b66b316f',
    label: 'Macau',
    latitude: 22.201,
    longitude: 113.547,
    population: 271476,
    wikiId: 'Macau',
    stateIds: []
  }, {
    id: 'b5bcce260d9e303ca0e63f055187ed28',
    label: 'Madagascar',
    latitude: -18.77718,
    longitude: 46.85432,
    population: 15243100,
    wikiId: 'Madagascar',
    stateIds: []
  }, {
    id: '70965feb0441ff7fc1982fc5c509136e',
    label: 'Malawi',
    latitude: -13.24707,
    longitude: 34.29471,
    population: 13066320,
    wikiId: 'Malawi',
    stateIds: []
  }, {
    id: '3f0e49c46cbde0c7adf5ea04a97ab261',
    label: 'Malaysia',
    latitude: 3.94515,
    longitude: 114.40166,
    population: 32772100,
    wikiId: 'Malaysia',
    stateIds: []
  }, {
    id: '62235142f3fca96e1f2cd0ed4a7de48d',
    label: 'Maldives',
    latitude: 6.75785,
    longitude: 73.15476,
    population: 392473,
    wikiId: 'Maldives',
    stateIds: []
  }, {
    id: 'e90c93ceb8ccdcdf3b797f47edee866d',
    label: 'Mali',
    latitude: 17.57975,
    longitude: -3.99883,
    population: 10441300,
    wikiId: 'Mali',
    stateIds: []
  }, {
    id: '92468e8a62373add2b9caefddbcf1303',
    label: 'Malta',
    latitude: 35.90209,
    longitude: 14.44812,
    population: 383000,
    wikiId: 'Malta',
    stateIds: []
  }, {
    id: '94eec18a76781c101392889999634e8e',
    label: 'Marshall Islands',
    latitude: 7.11046,
    longitude: 171.08179,
    population: 53800,
    wikiId: 'Marshall_Islands',
    stateIds: []
  }, {
    id: '899c4b2a0d41d5b86e2dbc3b2f5380cf',
    label: 'Martinique',
    latitude: 14.63554,
    longitude: -61.02281,
    population: 391000,
    wikiId: 'Martinique',
    stateIds: []
  }, {
    id: 'd7fe73b6846dfc672236e636aa2cf6b5',
    label: 'Mauritania',
    latitude: 21.00681,
    longitude: -10.95086,
    population: 2754400,
    wikiId: 'Mauritania',
    stateIds: []
  }, {
    id: '07f3ca235faaa1c9ad16facef5526d8b',
    label: 'Mauritius',
    latitude: -20.25541,
    longitude: 57.55174,
    population: 1265985,
    wikiId: 'Mauritius',
    stateIds: []
  }, {
    id: '9c05c40b81fd906b1585e231c0d896f1',
    label: 'Mayotte',
    latitude: -12.82451,
    longitude: 45.13678,
    population: 279471,
    wikiId: 'Mayotte',
    stateIds: []
  }, {
    id: '8dbb07a18d46f63d8b3c8994d5ccc351',
    label: 'Mexico',
    latitude: 23.62574,
    longitude: -101.95625,
    population: 126577691,
    wikiId: 'Mexico',
    stateIds: []
  }, {
    id: '0c12f5495afe76d9242ed25668979de9',
    label: 'Moldova',
    latitude: 46.97933,
    longitude: 28.39131,
    population: 4229700,
    wikiId: 'Moldova',
    stateIds: []
  }, {
    id: 'd6a297c6193fd59309453a0db7a51b90',
    label: 'Monaco',
    latitude: 43.73835,
    longitude: 7.42429,
    population: 38300,
    wikiId: 'Monaco',
    stateIds: []
  }, {
    id: 'bb6a72b6a93150d4181e50496fc15f5a',
    label: 'Mongolia',
    latitude: 46.8608,
    longitude: 103.83681,
    population: 3278290,
    wikiId: 'Mongolia',
    stateIds: []
  }, {
    id: '4e92f9d2cdf0b8eb493ae3a19709d121',
    label: 'Montenegro',
    latitude: 42.69755,
    longitude: 19.43227,
    population: 684736,
    wikiId: 'Montenegro',
    stateIds: []
  }, {
    id: '3bac87d64d97e96d0e935628a9383379',
    label: 'Montserrat',
    latitude: 16.74416,
    longitude: -62.1945,
    population: 7300,
    wikiId: 'Montserrat',
    stateIds: []
  }, {
    id: '4d4a1722d8e85909a576da2c42878ff0',
    label: 'Morocco',
    latitude: 31.4342,
    longitude: -6.40245,
    population: 35581294,
    wikiId: 'Morocco',
    stateIds: []
  }, {
    id: 'a6d3bea3fa66775952e080b90bb0c4f1',
    label: 'Mozambique',
    latitude: -18.67028,
    longitude: 35.53015,
    population: 18151100,
    wikiId: 'Mozambique',
    stateIds: []
  }, {
    id: '217fa54cc9351504fcde32147bff005d',
    label: 'Myanmar',
    latitude: 19.25796,
    longitude: 96.683,
    population: 51853100,
    wikiId: 'Myanmar',
    stateIds: []
  }, {
    id: '69f4287626aee77f93e2c891b518838b',
    label: 'Namibia',
    latitude: -22.96566,
    longitude: 18.48617,
    population: 2606971,
    wikiId: 'Namibia',
    stateIds: []
  }, {
    id: 'd0c5ab6bebe308a495693e990a2947bc',
    label: 'Nauru',
    latitude: -0.5283,
    longitude: 166.92215,
    population: 11500,
    wikiId: 'Nauru',
    stateIds: []
  }, {
    id: '7fef6b003c726890ea5ca3708fe8ff56',
    label: 'Nepal',
    latitude: 28.39475,
    longitude: 84.12777,
    population: 25836100,
    wikiId: 'Nepal',
    stateIds: []
  }, {
    id: 'a67d4cbdd1b59e0ffccc6bafc83eb033',
    label: 'Netherlands',
    latitude: 52.1082,
    longitude: 5.32986,
    population: 17424978,
    wikiId: 'Netherlands',
    stateIds: []
  }, {
    id: 'bdb7b03ad8b440ad8af6b2e386198c69',
    label: 'New Caledonia',
    latitude: -21.24204,
    longitude: 165.50674,
    population: 222900,
    wikiId: null,
    stateIds: []
  }, {
    id: '23113b12a9d8135100497751756d4bee',
    label: 'New Zealand',
    latitude: -43.58678,
    longitude: 170.37099,
    population: 3785600,
    wikiId: 'New_Zealand',
    stateIds: []
  }, {
    id: '3bfe17f6c2d1b8941df303de7aec2eb0',
    label: 'Nicaragua',
    latitude: 12.86672,
    longitude: -85.42405,
    population: 5777700,
    wikiId: 'Nicaragua',
    stateIds: []
  }, {
    id: 'bf2ec44b27fc25c6fd8a38792b9ef2a8',
    label: 'Niger',
    latitude: 17.61099,
    longitude: 8.08094,
    population: 12241700,
    wikiId: 'Niger',
    stateIds: []
  }, {
    id: '5d839147c83e283c1d1bb705dc50586f',
    label: 'Nigeria',
    latitude: 9.08457,
    longitude: 8.67425,
    population: 204630242,
    wikiId: 'Nigeria',
    stateIds: []
  }, {
    id: 'de48fee9c7511bf7158b1e28b3d0baec',
    label: 'Niue',
    latitude: -19.05162,
    longitude: -169.86308,
    population: 1700,
    wikiId: 'Niue',
    stateIds: []
  }, {
    id: '2774a96195d99e4f645ecf7b7ab4b312',
    label: 'North Korea',
    latitude: 40.3396,
    longitude: 127.49522,
    population: 25191700,
    wikiId: 'North_Korea',
    stateIds: []
  }, {
    id: '28f9f2e9021c7754f9968e027d577267',
    label: 'Republic of Macedonia',
    latitude: 41.60281,
    longitude: 21.75129,
    population: 2114500,
    wikiId: 'North_Macedonia',
    stateIds: []
  }, {
    id: 'd5b9290a0b67727d4ba1ca6059dc31a6',
    label: 'Norway',
    latitude: 64.55653,
    longitude: 12.66617,
    population: 5367580,
    wikiId: 'Norway',
    stateIds: []
  }, {
    id: '1c77b9733832da9d1ffac66620f3c006',
    label: 'Oman',
    latitude: 20.81435,
    longitude: 55.85926,
    population: 3100300,
    wikiId: 'Oman',
    stateIds: []
  }, {
    id: 'b9698b8546220246fe600a949db326bf',
    label: 'Pakistan',
    latitude: 30.44185,
    longitude: 69.3597,
    population: 153124800,
    wikiId: 'Pakistan',
    stateIds: []
  }, {
    id: '46096bb96824852d15ce4fa5ba4bf58e',
    label: 'Palau',
    latitude: 7.53053,
    longitude: 134.56392,
    population: 20400,
    wikiId: 'Palau',
    stateIds: []
  }, {
    id: '6bec347f256837d3539ad619bd489de7',
    label: 'Panama',
    latitude: 8.4177,
    longitude: -80.11278,
    population: 700,
    wikiId: 'Panama',
    stateIds: []
  }, {
    id: 'eb0d4e456fe36b15e8f1667652266f59',
    label: 'Papua New Guinea',
    latitude: -6.65619,
    longitude: 145.85931,
    population: 8606323,
    wikiId: 'Papua_New_Guinea',
    stateIds: []
  }, {
    id: '73101738da81e5cbb87b64cd400a4405',
    label: 'Paraguay',
    latitude: -23.4514,
    longitude: -58.4532,
    population: 7152703,
    wikiId: 'Paraguay',
    stateIds: []
  }, {
    id: '84c8fa2341f7d052a1ee3a36ff043798',
    label: 'Peru',
    latitude: -9.18134,
    longitude: -75.00236,
    population: 32824358,
    wikiId: 'Peru',
    stateIds: []
  }, {
    id: '77dab2f81a6c8c9136efba7ab2c4c0f2',
    label: 'Philippines',
    latitude: 15.59305,
    longitude: 120.73907,
    population: 81636000,
    wikiId: 'Philippines',
    stateIds: []
  }, {
    id: '94880bda83bda77c5692876700711f15',
    label: 'Poland',
    latitude: 51.91892,
    longitude: 19.1343,
    population: 38576700,
    wikiId: 'Poland',
    stateIds: []
  }, {
    id: 'ea71b362e3ea9969db085abfccdeb10d',
    label: 'Portugal',
    latitude: 39.55792,
    longitude: -7.84481,
    population: 10366900,
    wikiId: 'Portugal',
    stateIds: []
  }, {
    id: '7cc7ef17c45527cf90fcf27516794d21',
    label: 'Qatar',
    latitude: 25.3188,
    longitude: 51.19676,
    population: 629800,
    wikiId: 'Qatar',
    stateIds: []
  }, {
    id: '6e764233fcc5cba5aca191a931b7348a',
    label: 'Réunion',
    latitude: -21.11453,
    longitude: 55.53206,
    population: 859959,
    wikiId: 'R%C3%A9union',
    stateIds: []
  }, {
    id: '10e71bd23d3dea9ac62d72d53e2ab9f0',
    label: 'Republic of Ireland',
    latitude: 53.17551,
    longitude: -8.15203,
    population: 4921500,
    wikiId: 'Republic_of_Ireland',
    stateIds: []
  }, {
    id: '91e413e69786750ed24de784189fcb4d',
    label: 'Republic of the Congo',
    latitude: -0.66262,
    longitude: 14.92741,
    population: 3362200,
    wikiId: 'Republic_of_the_Congo',
    stateIds: []
  }, {
    id: '0c7d5ae44b2a0be9ebd7d6b9f7d60f20',
    label: 'Romania',
    latitude: 45.94695,
    longitude: 24.9804,
    population: 21590000,
    wikiId: 'Romania',
    stateIds: []
  }, {
    id: '5feb168ca8fb495dcc89b1208cdeb919',
    label: 'Russia',
    latitude: 59.45375,
    longitude: 108.83072,
    population: 145166731,
    wikiId: 'Russia',
    stateIds: []
  }, {
    id: '9d7ed5d77d647e89c3cc11757d651dc2',
    label: 'Rwanda',
    latitude: -1.94707,
    longitude: 29.87638,
    population: 8379800,
    wikiId: 'Rwanda',
    stateIds: []
  }, {
    id: 'a5c8a719698619d78137f873432fa91d',
    label: 'Saint Kitts and Nevis',
    latitude: 17.3181,
    longitude: -62.74637,
    population: 38500,
    wikiId: 'Saint_Kitts_and_Nevis',
    stateIds: []
  }, {
    id: '02d848ec22375579f19438265ed082d1',
    label: 'Saint Lucia',
    latitude: 13.904,
    longitude: -60.97418,
    population: 158400,
    wikiId: 'Saint_Lucia',
    stateIds: []
  }, {
    id: '0861134397888c470803c77fb6cd2943',
    label: 'Samoa',
    latitude: -13.61712,
    longitude: -172.48244,
    population: 171000,
    wikiId: 'Samoa',
    stateIds: []
  }, {
    id: '54a0d1f73c3bf9eb699b7f36d90260fd',
    label: 'San Marino',
    latitude: 43.94273,
    longitude: 12.45979,
    population: 33344,
    wikiId: 'San_Marino',
    stateIds: []
  }, {
    id: '53d2fba69d071e53f12b61227d3d30de',
    label: 'Saudi Arabia',
    latitude: 24.26119,
    longitude: 45.12033,
    population: 34218169,
    wikiId: 'Saudi_Arabia',
    stateIds: []
  }, {
    id: '9986531359550785caffb2032622437f',
    label: 'Senegal',
    latitude: 14.49945,
    longitude: -14.44555,
    population: 10317100,
    wikiId: 'Senegal',
    stateIds: []
  }, {
    id: '2ff6e535bd2f100979a171ad430e642b',
    label: 'Serbia',
    latitude: 44.04981,
    longitude: 20.91079,
    population: 6963764,
    wikiId: 'Serbia',
    stateIds: []
  }, {
    id: 'd2e4449b45608e33e472d939a73868f7',
    label: 'Seychelles',
    latitude: -4.68444,
    longitude: 55.48732,
    population: 82000,
    wikiId: 'Seychelles',
    stateIds: []
  }, {
    id: '81712886563356568e6e0f70703552c2',
    label: 'Sierra Leone',
    latitude: 8.46502,
    longitude: -11.79593,
    population: 4850800,
    wikiId: 'Sierra_Leone',
    stateIds: []
  }, {
    id: '8ca8538934d7cc39911bbb28dbb9d350',
    label: 'Sint Maarten',
    latitude: 18.04097,
    longitude: -63.07851,
    population: null,
    wikiId: 'Sint_Maarten',
    stateIds: []
  }, {
    id: '88a392b5a8d8f73986d83a2deefb0472',
    label: 'Slovakia',
    latitude: 48.6655,
    longitude: 19.70174,
    population: 5450421,
    wikiId: 'Slovakia',
    stateIds: []
  }, {
    id: '00247297c394dd443dc97067830c35f4',
    label: 'Slovenia',
    latitude: 46.14694,
    longitude: 14.95505,
    population: 2094060,
    wikiId: 'Slovenia',
    stateIds: []
  }, {
    id: 'abc358e41dbb56ce66b0e003c1727fe4',
    label: 'Solomon Islands',
    latitude: -9.59581,
    longitude: 160.20901,
    population: 496200,
    wikiId: 'Solomon_Islands',
    stateIds: []
  }, {
    id: '921855f753932de762b780405a50bdf7',
    label: 'Somalia',
    latitude: 5.16158,
    longitude: 46.20083,
    population: 11326800,
    wikiId: 'Somalia',
    stateIds: []
  }, {
    id: '1287b11a755a7d660aa421359e6d24d0',
    label: 'South Africa',
    latitude: -28.47933,
    longitude: 24.67993,
    population: 58775022,
    wikiId: 'South_Africa',
    stateIds: []
  }, {
    id: 'aa292756f481473cfd6a988c22d480b1',
    label: 'South Korea',
    latitude: 36.44815,
    longitude: 127.85017,
    population: 51709098,
    wikiId: 'South_Korea',
    stateIds: []
  }, {
    id: 'f511f3f7973ce5a11d4b97dbdf11146b',
    label: 'South Sudan',
    latitude: 7.85099,
    longitude: 30.04981,
    population: 8260490,
    wikiId: 'South_Sudan',
    stateIds: []
  }, {
    id: '907eba32d950bfab68227fd7ea22999b',
    label: 'Spain',
    latitude: 39.89489,
    longitude: -2.98831,
    population: 46733038,
    wikiId: 'Spain',
    stateIds: []
  }, {
    id: '999309971ba0008ba9f444f6df579961',
    label: 'Sri Lanka',
    latitude: 7.87395,
    longitude: 80.78971,
    population: 21670000,
    wikiId: 'Sri_Lanka',
    stateIds: []
  }, {
    id: '74458a3d3e5f3074226b1f9fa23c9163',
    label: 'Sudan',
    latitude: 13.31664,
    longitude: 30.20949,
    population: 41592539,
    wikiId: 'Sudan',
    stateIds: []
  }, {
    id: '64446ac025106d201779cb4bf5ab6b2e',
    label: 'Suriname',
    latitude: 3.91784,
    longitude: -56.03203,
    population: 456900,
    wikiId: 'Suriname',
    stateIds: []
  }, {
    id: 'c8f4261f9f46e6465709e17ebea7a92b',
    label: 'Sweden',
    latitude: 62.19845,
    longitude: 17.55142,
    population: 8872600,
    wikiId: 'Sweden',
    stateIds: []
  }, {
    id: '3ad08396dc5afa78f34f548eea3c1d64',
    label: 'Switzerland',
    latitude: 46.8132,
    longitude: 8.22395,
    population: 8570146,
    wikiId: 'Switzerland',
    stateIds: []
  }, {
    id: '465718d0a1bc8363ad01390923fad5d1',
    label: 'Syria',
    latitude: 34.8148,
    longitude: 39.056,
    population: 18444400,
    wikiId: 'Syria',
    stateIds: []
  }, {
    id: '551fe18ef47d4e6e9d943b9a68ada21d',
    label: 'Taiwan',
    latitude: 23.5984,
    longitude: 121.018,
    population: 23780452,
    wikiId: 'Taiwan',
    stateIds: []
  }, {
    id: 'b5a9722262bbb7a7449ebc0f4394c901',
    label: 'Tajikistan',
    latitude: 38.85819,
    longitude: 71.26218,
    population: 9275827,
    wikiId: 'Tajikistan',
    stateIds: []
  }, {
    id: 'c03b1123e45fa00da3142e0424ee5eec',
    label: 'Tanzania',
    latitude: -6.36821,
    longitude: 34.88519,
    population: 34827600,
    wikiId: 'Tanzania',
    stateIds: []
  }, {
    id: '103357e3e40a9c0e4e9d36110f7bbc7a',
    label: 'Thailand',
    latitude: 13.03659,
    longitude: 101.4925,
    population: 63393600,
    wikiId: 'Thailand',
    stateIds: []
  }, {
    id: '9041ceec600555da84f553ca8e98fc9f',
    label: 'The Bahamas',
    latitude: 24.74142,
    longitude: -78.08002,
    population: 320000,
    wikiId: 'The_Bahamas',
    stateIds: []
  }, {
    id: 'f6b90d77186b4566084a7a7cc13a9985',
    label: 'The Gambia',
    latitude: 13.44541,
    longitude: -15.31143,
    population: 2051363,
    wikiId: 'The_Gambia',
    stateIds: []
  }, {
    id: '1e746c5c85c4c0de3a0858b0dd047476',
    label: 'Togo',
    latitude: 8.62169,
    longitude: 0.82969,
    population: 7965055,
    wikiId: 'Togo',
    stateIds: []
  }, {
    id: 'a5b0ca0a4bed12b928061e17d453bf13',
    label: 'Tokelau',
    latitude: -9.38318,
    longitude: -171.25015,
    population: 1400,
    wikiId: 'Tokelau',
    stateIds: []
  }, {
    id: 'dd5cb49bc56af9d53f9f9e1e5b425ab0',
    label: 'Tonga',
    latitude: -21.16793,
    longitude: -175.196,
    population: 99200,
    wikiId: 'Tonga',
    stateIds: []
  }, {
    id: '6d196050243a291b44c87f63346173dd',
    label: 'Trinidad and Tobago',
    latitude: 10.43443,
    longitude: -61.41808,
    population: 1363985,
    wikiId: 'Trinidad_and_Tobago',
    stateIds: []
  }, {
    id: 'd6dacba23ab4a1d5b72f223bfb010a05',
    label: 'Tunisia',
    latitude: 33.79502,
    longitude: 9.56154,
    population: 9879600,
    wikiId: 'Tunisia',
    stateIds: []
  }, {
    id: '221cdfb73049678e244380b45872cbb2',
    label: 'Turkey',
    latitude: 38.95774,
    longitude: 35.4317,
    population: 82003882,
    wikiId: 'Turkey',
    stateIds: []
  }, {
    id: 'f5d993d8e89c037d614ec8dc2559e4b7',
    label: 'Turkmenistan',
    latitude: 38.96832,
    longitude: 59.56287,
    population: 5650400,
    wikiId: 'Turkmenistan',
    stateIds: []
  }, {
    id: '4e18c1e699d8abc3422d67f2ff82c56b',
    label: 'Tuvalu',
    latitude: -7.47153,
    longitude: 178.69096,
    population: 11400,
    wikiId: 'Tuvalu',
    stateIds: []
  }, {
    id: '53b3c88ea00c4f0e137b4e6fe7bd23f1',
    label: 'Uganda',
    latitude: 1.37777,
    longitude: 32.2874,
    population: 32369558,
    wikiId: 'Uganda',
    stateIds: []
  }, {
    id: 'f01fc92b23faa973f3492a23d5a705c5',
    label: 'Ukraine',
    latitude: 48.38288,
    longitude: 31.17344,
    population: 47637300,
    wikiId: 'Ukraine',
    stateIds: []
  }, {
    id: 'edab6ab6fad43f4911b41103922c3e9e',
    label: 'United Arab Emirates',
    latitude: 24.01438,
    longitude: 53.9769,
    population: 9599353,
    wikiId: 'United_Arab_Emirates',
    stateIds: []
  }, {
    id: '5ad75a758f27c089b52a1eac8dca7e0d',
    label: 'United Kingdom',
    latitude: 54.31407,
    longitude: -2.23001,
    population: 67545757,
    wikiId: 'United_Kingdom',
    stateIds: ['10ef5754c533385d817f2fbd0d742f64']
  }, {
    id: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    label: 'United States',
    latitude: 37.16793,
    longitude: -95.84502,
    population: 328239523,
    wikiId: 'United_States',
    stateIds: ['06fa309b609b7c8f7c39a88abe2d507c', '0daaf4a9abe3920c453a7f1f82a9bb19', '11d9591c9feee10969173c347e551a9a', '11ea71f253acf02a2d126a0901e765a7', '14c5492ce2fe855f408481fdbd13f7a6', '15e49475e42539feed93fc5cce25d3cb', '20639b767478006218447b27e4b853cb', '213fe69502445ed67ae8b99d22838802', '2a18ef32f87bb40c0d17130828cfb473', '356779a9a1696714480f57fa3fb66d4c', '3971735868c1886348955beb9c7d72bd', '39da6b7e3479522718668deaf7e6f304', '3fe5003edc0cb6c83962dbd74d35dd50', '40165c0d1d578a7bbded085c5def3f48', '41695c8c512c53044b7b787368687ac8', '45009b4a16ef03ba8bb5b15665ef4469', '46aaf459104e9ce5d45eaa017ac349c2', '47b231eae4bf87fa405e34eb9273b741', '4ec96adb9cc39333f3d2024b28f2503f', '5ac9ad692818005c50aae8afe95861d6', '5aeb407b7ca7f3fe0dc50003b1e0712f', '5c520b852c5d7c99a71f1635ae84e1d2', '66c2b329479ee151b4c6b257c0b7a9b7', '6a382f5bfa3db109c81ec4adbf70ff26', '7c0e2b92f76ed5847aa48a3a1e70ae7d', '7f3097563d468719d72c6df98a69f6de', '823ee6401883db6f9e5865f51c77d97c', '86871c416a7dbed7e5cc229d143d8d82', '86db7eb10eb3963430f2f777499fe29a', '8eadc5d3e1f1919c527b6d865e226a88', '8fcebe1ce891c49c60a3c26b317ebafb', '92aec0ba411203aa3a57aec94b108ed6', '980ceec1dba2d36c2ba867f683b47838', '988e1885f34fc9058049b872a11236c5', '9ac31dfb3a2f5b994f4009eb0a3c0949', '9b0faa6c816be68592b17dae38fd88b3', 'a5c53b081bf565526eb3779db999becf', 'a8088b760fb315d2964735686800b203', 'a85df3d66bde576d3b62caaf527f2daa', 'aeb264fc98dd9ebbcefe8d1eafee79f9', 'aeeb87d118446317ff4f4d5e8d19283f', 'ba290ff950475708a10987cb31e6274c', 'c5376d00573c5858adf7ed894d0491b9', 'c8b287075ce4f11c834d2a0ada967ddc', 'ccc6ba7bbaddba7b96a9973da17b4e47', 'da4d1129a255f83fb03bf32fde034ecc', 'de30bd840230da1493819f803aff6e9e', 'e15997c74a71c5d9263df6f7a21bc191', 'eeaca0ed2f6a35370c77de30792debb8', 'f7529880ccaf91ff331809e9fe98f883', 'fede9f03ea10983a84201b04a1453558']
  }, {
    id: '75497a22409db78dcc52c291e078bc10',
    label: 'Uruguay',
    latitude: -32.53151,
    longitude: -55.75833,
    population: 3452600,
    wikiId: 'Uruguay',
    stateIds: []
  }, {
    id: 'a0a3e881895e46eb96218f0988d405b9',
    label: 'Uzbekistan',
    latitude: 41.39476,
    longitude: 64.56445,
    population: 33961708,
    wikiId: 'Uzbekistan',
    stateIds: []
  }, {
    id: 'fe07e488fe56260f45240c1c8a8882a8',
    label: 'Vanuatu',
    latitude: -15.14676,
    longitude: 167.03804,
    population: 188700,
    wikiId: 'Vanuatu',
    stateIds: []
  }, {
    id: 'edb3fc76459aacac8c76607a4da9188e',
    label: 'Vatican City',
    latitude: 41.9038,
    longitude: 12.4525,
    population: 842,
    wikiId: 'Vatican_City',
    stateIds: []
  }, {
    id: 'e95294b730f61c8175550ec244bfcb50',
    label: 'Venezuela',
    latitude: 6.47279,
    longitude: -66.58904,
    population: 28067000,
    wikiId: 'Venezuela',
    stateIds: []
  }, {
    id: 'fdef6daa799e80dbce1b561577b21181',
    label: 'Vietnam',
    latitude: 15.9742,
    longitude: 107.868,
    population: 81660400,
    wikiId: 'Vietnam',
    stateIds: []
  }, {
    id: 'ceabd4a512215171bb98e503e91dc882',
    label: 'Wallis and Futuna',
    latitude: -13.28338,
    longitude: -176.17319,
    population: 15200,
    wikiId: 'Wallis_and_Futuna',
    stateIds: []
  }, {
    id: '6e35afe82372f88af43ea2ad031b16b8',
    label: 'Western Sahara',
    latitude: 24.49666,
    longitude: -12.8863,
    population: 288000,
    wikiId: 'Western_Sahara',
    stateIds: []
  }, {
    id: '724bf4ca11a567636547a92a37e397b7',
    label: 'Yemen',
    latitude: 15.79666,
    longitude: 47.85068,
    population: 22230531,
    wikiId: 'Yemen',
    stateIds: []
  }, {
    id: 'b0aa0804e676a38255af4fd70236af7c',
    label: 'Zambia',
    latitude: -13.15192,
    longitude: 27.85254,
    population: 11193900,
    wikiId: 'Zambia',
    stateIds: []
  }, {
    id: '9d5116a2451bc98c2b46b93acbc1b4f0',
    label: 'Zimbabwe',
    latitude: -19.01328,
    longitude: 29.14666,
    population: 14300700,
    wikiId: 'Zimbabwe',
    stateIds: []
  }];
  _exports.default = _default;
});
;define("covid-19-dashboard/mirage/fixtures/health-records", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = [{
    id: 'za130f87-cd92-3d0b-be82-2dca3c7a3561',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Earth',
    latitude: 0,
    longitude: 0,
    numActiveCases: 537737,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-02T00:00Z',
    totalConfirmedCases: 1075017,
    totalDeaths: 57904,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Earth'
  }, {
    id: 'ba130f87-cd92-3d0b-be82-2dca3c7a3561',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Earth',
    latitude: 0,
    longitude: 0,
    numActiveCases: null,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: null,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1076017,
    totalDeaths: 58004,
    totalRecoveredCases: null,
    totalTestedCases: 0,
    wikiId: 'Earth'
  }, {
    id: '91754e48-4f43-3381-a120-6b0c12fe5acc',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Afghanistan',
    latitude: 33.93045,
    longitude: 67.67894,
    numActiveCases: 265,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 281,
    totalDeaths: 6,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Afghanistan',
    countryId: '6e9767f4f15357401b148b9a8ced14ef'
  }, {
    id: '6c49c672-2cdb-3d06-8e18-c5344de057d3',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Albania',
    latitude: 41.15265,
    longitude: 20.17001,
    numActiveCases: 198,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 304,
    totalDeaths: 17,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Albania',
    countryId: 'c420ddff824a5c0eec70dd23d62496bc'
  }, {
    id: '5b71f16d-c621-36a4-a222-8b10705db5c4',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Algeria',
    latitude: 28.02688,
    longitude: 1.65284,
    numActiveCases: 1004,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1171,
    totalDeaths: 105,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Algeria',
    countryId: '575b9408b6daa2ddcefbcf6d81c9b4c9'
  }, {
    id: 'd66c534c-c366-3148-9b0a-af5b207332c4',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Andorra',
    latitude: 42.54237,
    longitude: 1.60021,
    numActiveCases: 407,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 439,
    totalDeaths: 16,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Andorra',
    countryId: '68746a7280b143cfc01f967610d3e86d'
  }, {
    id: '0dd71cf9-7035-3cfd-ae92-3db5cd62e127',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Angola',
    latitude: -11.94184,
    longitude: 17.90721,
    numActiveCases: 5,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 8,
    totalDeaths: 2,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Angola',
    countryId: '232bf11cb81bcdb269f76a08fde8b947'
  }, {
    id: '93b97f3a-07a7-3e56-94c5-c08e8be3c489',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Antigua and Barbuda',
    latitude: 17.08602,
    longitude: -61.78942,
    numActiveCases: 9,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 9,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Antigua_and_Barbuda',
    countryId: '79f96d084a36450dd126ddb451f53c90'
  }, {
    id: 'c138bd39-456a-39ee-843c-d57707143a45',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Argentina',
    latitude: -37.0907,
    longitude: -63.5848,
    numActiveCases: 960,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1265,
    totalDeaths: 39,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Argentina',
    countryId: '3536be57ce0713954e454ae6c53ec023'
  }, {
    id: '700c608c-b95e-385c-a956-0cbd84935637',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Armenia',
    latitude: 40.06617,
    longitude: 45.03989,
    numActiveCases: 686,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 736,
    totalDeaths: 7,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Armenia',
    countryId: 'a00c273f0f497484093fa94865cf5ca5'
  }, {
    id: '6a445b08-e77a-3325-80e4-ddefe49166f0',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Australia',
    latitude: -24.9121,
    longitude: 133.398,
    numActiveCases: 4653,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 5330,
    totalDeaths: 28,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Australia',
    countryId: '4442e4af0916f53a07fb8ca9a49b98ed'
  }, {
    id: '46eaa272-7c00-3f79-8488-c9169f62ddc1',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Austria',
    latitude: 47.69651,
    longitude: 13.34577,
    numActiveCases: 9316,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 11506,
    totalDeaths: 168,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Austria',
    countryId: '9891739094756d2605946c867b32ad28'
  }, {
    id: 'ac5f37ac-2511-3133-9673-8f8925df5f24',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Azerbaijan',
    latitude: 40.15134,
    longitude: 47.68707,
    numActiveCases: 406,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 443,
    totalDeaths: 5,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Azerbaijan',
    countryId: '7176f8c3bccfdf02322c73f7a0bc9688'
  }, {
    id: '10269402-8eaa-369c-a4a2-512104c364d3',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Bahrain',
    latitude: 26.02475,
    longitude: 50.5485,
    numActiveCases: 286,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 672,
    totalDeaths: 4,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Bahrain',
    countryId: '6ddecd8ccd9f648d19dc02c7a566cb4f'
  }, {
    id: '2acb8571-0643-3bc2-bfc8-ff446b6076e7',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Bangladesh',
    latitude: 23.68745,
    longitude: 90.3509,
    numActiveCases: 29,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 61,
    totalDeaths: 6,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Bangladesh',
    countryId: 'f78a77f631d275aac6a914a17fe1b885'
  }, {
    id: '4b97ce5b-8206-399a-b8ce-ab255d041c0d',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Barbados',
    latitude: 13.18355,
    longitude: -59.53465,
    numActiveCases: 51,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 51,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Barbados',
    countryId: '3214c0f21d200a1dae4eb83a53ec2730'
  }, {
    id: 'ae6e71e5-0dad-3083-b18d-2dcb15fd6c6d',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Belarus',
    latitude: 53.71105,
    longitude: 27.97375,
    numActiveCases: 294,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 351,
    totalDeaths: 4,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Belarus',
    countryId: '6542f875eaa09a5c550e5f3986400ad9'
  }, {
    id: '3a7519b3-d432-3eb4-81c5-ea8180ffdda4',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Belgium',
    latitude: 50.50101,
    longitude: 4.47684,
    numActiveCases: 12755,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 16770,
    totalDeaths: 1143,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Belgium',
    countryId: '6c1674d14bf5f95742f572cddb0641a7'
  }, {
    id: '7af95c59-b73b-32f4-a00c-fca9a7dc7516',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Belize',
    latitude: 17.19292,
    longitude: -88.65284,
    numActiveCases: 4,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Belize',
    countryId: '20bca6785240fa722edb5c85d055a93d'
  }, {
    id: '2d4db1ff-92bc-3a57-8de0-9088a8e4fad3',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Benin',
    latitude: 9.32204,
    longitude: 2.31313,
    numActiveCases: 12,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 13,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Benin',
    countryId: '9e7002d53d4db7bfad4f5cf419b0c126'
  }, {
    id: '2dd016f4-a3d1-35f7-96b5-be9cbd24aae2',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Bhutan',
    latitude: 27.5155,
    longitude: 90.44227,
    numActiveCases: 3,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 5,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Bhutan',
    countryId: 'e65a0ed0e39dd14a9e5af441efb09b37'
  }, {
    id: '7fcbf347-4efe-306c-81c5-20a37ade25d3',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Bolivia',
    latitude: -16.28835,
    longitude: -63.54942,
    numActiveCases: 122,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 132,
    totalDeaths: 9,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Bolivia',
    countryId: '28aaafc355915903ce4a7e1d3af3bc4e'
  }, {
    id: '9bf8911a-1ca1-3c55-89e6-121c375ec8b3',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Bosnia and Herzegovina',
    latitude: 43.9201,
    longitude: 17.67696,
    numActiveCases: 531,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 575,
    totalDeaths: 17,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Bosnia_and_Herzegovina',
    countryId: 'c758f309604eaea62c3c519cb2d6d5e3'
  }, {
    id: '09fd6f3a-fa44-3b75-b48c-82b578c8ed55',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Botswana',
    latitude: -22.34403,
    longitude: 24.68016,
    numActiveCases: 3,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Botswana',
    countryId: '6cd50fb3091b0a9d3c1ac2cf52441390'
  }, {
    id: 'db1ab067-56dd-33f3-b130-f14a09334797',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Brazil',
    latitude: -14.2429,
    longitude: -54.3878,
    numActiveCases: 7759,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 8229,
    totalDeaths: 343,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Brazil',
    countryId: '42537f0fb56e31e20ab9c2305752087d'
  }, {
    id: '37129728-4e6c-348b-9f0a-5f0945d229d9',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Brunei',
    latitude: 4.52513,
    longitude: 114.59897,
    numActiveCases: 68,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 134,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Brunei',
    countryId: 'd3f5841f04ba23bb90e1b9f4256cea70'
  }, {
    id: 'f3eee161-9c48-31a3-995b-ef833b4adbfd',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Bulgaria',
    latitude: 42.7316,
    longitude: 25.48312,
    numActiveCases: 441,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 485,
    totalDeaths: 14,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Bulgaria',
    countryId: '01a151debf2bfee8906f43f4342eb10b'
  }, {
    id: 'ffafc9a7-3ab9-301b-8984-64eb8b79adad',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Burkina Faso',
    latitude: 12.24184,
    longitude: -1.55676,
    numActiveCases: 236,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 302,
    totalDeaths: 16,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Burkina_Faso',
    countryId: 'dfc4327c51fe1e82827c1eb7b0d23a42'
  }, {
    id: 'a27a2efd-3795-394a-ba98-2bbadf4226af',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Burundi',
    latitude: -3.38791,
    longitude: 29.92039,
    numActiveCases: 3,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Burundi',
    countryId: '28765464efe1b6583610335965b4d75a'
  }, {
    id: '4f36bc11-feca-38dc-ab72-70f5db3f08a8',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Cambodia',
    latitude: 12.54773,
    longitude: 104.98386,
    numActiveCases: 79,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 114,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Cambodia',
    countryId: '06c7a3c3a3344a62864b951aec4df830'
  }, {
    id: 'a024f18c-c36a-36bc-ad1f-89285ad11346',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Cameroon',
    latitude: 7.36529,
    longitude: 12.34344,
    numActiveCases: 289,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 306,
    totalDeaths: 7,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Cameroon',
    countryId: '4be25f9d27da71d4e98775668b5b12af'
  }, {
    id: '2ece857d-4b0e-3906-a2fb-9999f8a04978',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Canada',
    latitude: 56.95468,
    longitude: -98.30897,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 11746,
    totalDeaths: 153,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Canada',
    countryId: '445d337b5cd5de476f99333df6b0c2a7'
  }, {
    id: '03c50a64-089e-3056-a89f-a454d7c11dd6',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Cape Verde',
    latitude: 15.1123,
    longitude: -23.61476,
    numActiveCases: 5,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 6,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Cape_Verde',
    countryId: 'a290b08603974f521042309b441b5aeb'
  }, {
    id: '0cb71349-09d7-3cb0-93c3-87bacfbfc980',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Chad',
    latitude: 15.4603,
    longitude: 18.73877,
    numActiveCases: 8,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 8,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Chad',
    countryId: 'e03653dedd6f4e142f4aca131995964f'
  }, {
    id: '1f48355e-ee9d-31e5-9fc2-dd60e2ae343f',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Chile',
    latitude: -35.70522,
    longitude: -71.34109,
    numActiveCases: 3288,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3737,
    totalDeaths: 22,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Chile',
    countryId: '2e6507f70a9cc26fb50f5fd82a83c7ef'
  }, {
    id: '8050487d-2372-385a-9134-a03f6032daec',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'China',
    latitude: 36.8944,
    longitude: 104.166,
    numActiveCases: 2423,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 82509,
    totalDeaths: 3326,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'China',
    countryId: 'ae54a5c026f31ada088992587d92cb3a'
  }, {
    id: '501e00ff-e71f-3a43-808c-deed478e1b0c',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Colombia',
    latitude: 4.11641,
    longitude: -72.95853,
    numActiveCases: 1087,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1161,
    totalDeaths: 19,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Colombia',
    countryId: 'ef3388cc5659bccb742fb8af762f1bfd'
  }, {
    id: '513468d5-1747-315c-be60-5beb2c76d893',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Costa Rica',
    latitude: 9.62489,
    longitude: -84.25331,
    numActiveCases: 388,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 396,
    totalDeaths: 2,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Costa_Rica',
    countryId: 'e226fbb7731da90173e60cdd1704481c'
  }, {
    id: 'bd12eade-9308-3e37-8bd0-d0e29f53bb01',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Croatia',
    latitude: 44.74671,
    longitude: 15.3408,
    numActiveCases: 979,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1079,
    totalDeaths: 8,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Croatia',
    countryId: '560d4c6ff431c86546f3fcec72c748c7'
  }, {
    id: 'ff0b9a8d-1cb7-3a51-98f7-a31b301ac030',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Cuba',
    latitude: 21.51102,
    longitude: -77.80679,
    numActiveCases: 248,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 269,
    totalDeaths: 6,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Cuba',
    countryId: '33cac763789c407f405b2cf0dce7df89'
  }, {
    id: 'a3f05d5d-4914-37e7-9def-df6178833901',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Cyprus',
    latitude: 35.13252,
    longitude: 33.4355,
    numActiveCases: 357,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 396,
    totalDeaths: 11,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Cyprus',
    countryId: 'ea2ba3f8011e19e3101ce65fdcefbcc4'
  }, {
    id: 'd6c5b87d-d601-3d5c-92dc-77ff01f07c85',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Czech Republic',
    latitude: 49.80388,
    longitude: 15.47491,
    numActiveCases: 3966,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4091,
    totalDeaths: 53,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Czech_Republic',
    countryId: '12a4359f3d8a4a2db61f4d040edb73ed'
  }, {
    id: 'ef02768e-e205-3b74-a48c-045973fcf519',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Denmark',
    latitude: 56.27609,
    longitude: 9.51695,
    numActiveCases: 2520,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3946,
    totalDeaths: 139,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Denmark',
    countryId: '424214945ba5615eca039bfe5d731c09'
  }, {
    id: 'cc517963-7fc5-3ea0-b520-663fadfe163e',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Djibouti',
    latitude: 11.80837,
    longitude: 42.59521,
    numActiveCases: 41,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 49,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Djibouti',
    countryId: '902f92c09660b797958acb27421fd9ac'
  }, {
    id: 'f2b93251-fc8f-3b84-b772-7db8e170adfe',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Dominica',
    latitude: 15.41674,
    longitude: -61.36413,
    numActiveCases: 12,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 12,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Dominica',
    countryId: '531c552093668f148d3c826fca6e3cc8'
  }, {
    id: '793fd052-2384-3b13-ba30-fd3585edc7d6',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Dominican Republic',
    latitude: 18.7679,
    longitude: -70.16174,
    numActiveCases: 1404,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1488,
    totalDeaths: 68,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Dominican_Republic',
    countryId: '1b44cfe344fa1ed289752f66791b7dd6'
  }, {
    id: '8a37c96d-5ce0-37d5-943c-7e52c2fa2c94',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'East Timor',
    latitude: -8.89403,
    longitude: 126.11955,
    numActiveCases: 1,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'East_Timor',
    countryId: 'c0fb49777c3f63b7bf4e61c7f7aa5144'
  }, {
    id: 'f4641a86-0724-322b-a00f-aa993630dc19',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Ecuador',
    latitude: -1.78156,
    longitude: -78.10667,
    numActiveCases: 3158,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3368,
    totalDeaths: 145,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Ecuador',
    countryId: '4d5d85af33ec2aaedb674d2d6a7d53b6'
  }, {
    id: '07c0a197-356f-3dd5-9297-e4b7d32b727c',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Egypt',
    latitude: 26.83709,
    longitude: 30.79639,
    numActiveCases: 606,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 865,
    totalDeaths: 58,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Egypt',
    countryId: 'e31959fe2842dacea4d16d36e9813620'
  }, {
    id: 'bf724215-9abb-3157-8414-a67859b7ba75',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'El Salvador',
    latitude: 13.79687,
    longitude: -88.91879,
    numActiveCases: 44,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 46,
    totalDeaths: 2,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'El_Salvador',
    countryId: '2636ae11dc797b834da1f78f47132ff1'
  }, {
    id: '9e80ef02-d8f5-3764-a40c-0786875111b5',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Equatorial Guinea',
    latitude: 1.63392,
    longitude: 10.34129,
    numActiveCases: 15,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 16,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Equatorial_Guinea',
    countryId: '93822d1b60a0942da695950bed9442ea'
  }, {
    id: '83c9b697-7644-3354-a621-a5f596e3ed8a',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Eritrea',
    latitude: 15.18132,
    longitude: 39.95086,
    numActiveCases: 22,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 22,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Eritrea',
    countryId: 'c9c9f116f74ac9d7e60dc415523dfeff'
  }, {
    id: '7487d3d0-6652-3acb-8d58-7523c2247d65',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Estonia',
    latitude: 58.59232,
    longitude: 25.80695,
    numActiveCases: 901,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 961,
    totalDeaths: 12,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Estonia',
    countryId: '7755415a9fe7022060b98a689236ccd2'
  }, {
    id: 'fba70532-38cd-322b-a960-4aef07242c42',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Swaziland',
    latitude: -26.51837,
    longitude: 31.46568,
    numActiveCases: 9,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 9,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Eswatini',
    countryId: '5b6c44e2e66685a59e42673eff6d5f17'
  }, {
    id: '123d6f81-4db3-31bd-9ba9-569794d147b1',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Ethiopia',
    latitude: 9.1473,
    longitude: 40.49305,
    numActiveCases: 32,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 35,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Ethiopia',
    countryId: 'e299d7cb0f7866cce7d90da2af14047c'
  }, {
    id: 'aa2fe83f-248f-32e7-8abb-457140cb50a0',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Fiji',
    latitude: -17.79099,
    longitude: 177.9734,
    numActiveCases: 7,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 7,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Fiji',
    countryId: '55b0c4d4efa00b59643b2e6a6e7c18c0'
  }, {
    id: '7c5a6f97-b637-352f-a105-bbb6cbfcd8c3',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Finland',
    latitude: 64.95014,
    longitude: 26.06739,
    numActiveCases: 1295,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1615,
    totalDeaths: 20,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Finland',
    countryId: '6f781c6559a0c605da918096bdb69edf'
  }, {
    id: 'be950425-7740-340b-8acc-6ff1f1c4f547',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'France',
    latitude: 46.71067,
    longitude: 1.71819,
    numActiveCases: 44528,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 65181,
    totalDeaths: 6518,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'France',
    countryId: '0309a6c666a7a803fdb9db95de71cf01'
  }, {
    id: '954454be-40e7-3d03-bb04-a9715f864e83',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Gabon',
    latitude: -0.82809,
    longitude: 11.59891,
    numActiveCases: 19,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 21,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Gabon',
    countryId: 'fceb5af40df295d85851f390f4f8d78d'
  }, {
    id: 'ee72c012-099d-37e6-9d21-8f82189f6563',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Georgia (country)',
    latitude: 42.31152,
    longitude: 43.36579,
    numActiveCases: 121,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 148,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Georgia_(country)',
    countryId: 'b3c6f07b0e6e5acb9e98e10378649de9'
  }, {
    id: 'e4bea167-8f79-391c-8020-4719461fc685',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Germany',
    latitude: 51.16418,
    longitude: 10.45415,
    numActiveCases: 64033,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 89838,
    totalDeaths: 1230,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Germany',
    countryId: 'd8b00929dec65d422303256336ada04f'
  }, {
    id: '9411f95d-ce6c-34fc-9dc0-a34511a5ee5d',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Ghana',
    latitude: 7.95501,
    longitude: -1.03182,
    numActiveCases: 169,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 205,
    totalDeaths: 5,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Ghana',
    countryId: 'e7400496f1ce70cb62c2c44ca2ddc469'
  }, {
    id: 'db3281aa-ef8b-37dd-9118-e161acbb8887',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Greece',
    latitude: 39.07245,
    longitude: 21.84556,
    numActiveCases: 1493,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1613,
    totalDeaths: 59,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Greece',
    countryId: '6b718641741f992e68ec3712718561b8'
  }, {
    id: '295d7457-57fd-3a12-b97f-15da79046f38',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Grenada',
    latitude: 12.11267,
    longitude: -61.69894,
    numActiveCases: 10,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 10,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Grenada',
    countryId: '45b1cb9a558807139085c645d2f47f07'
  }, {
    id: 'f3f65db6-6f7a-37c9-84cf-a6e15c9f2579',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Guatemala',
    latitude: 15.77625,
    longitude: -90.23231,
    numActiveCases: 37,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 50,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Guatemala',
    countryId: '948b13d5a3e11e21baadc349e199020e'
  }, {
    id: 'd8c22257-5c04-3204-87b4-78afff34859b',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Guinea',
    latitude: 9.93488,
    longitude: -9.66063,
    numActiveCases: 71,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 73,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Guinea',
    countryId: '8e4d9eeed250a9d065ac2bb8bdc67b30'
  }, {
    id: 'd6e2c50b-103f-3789-8bb1-061166aa0f2a',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Guinea-Bissau',
    latitude: 11.80252,
    longitude: -15.17702,
    numActiveCases: 9,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 9,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Guinea-Bissau',
    countryId: '2d65f5236205dd23c6a8212627568fb8'
  }, {
    id: '1230b54d-b04d-350a-9a3a-39392a4d8e11',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Guyana',
    latitude: 4.86632,
    longitude: -58.93826,
    numActiveCases: 15,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 19,
    totalDeaths: 4,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Guyana',
    countryId: 'cf4c7e1169281886577940e361854a84'
  }, {
    id: '6ed43a80-9be6-382f-a162-fc8b146b5c85',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Haiti',
    latitude: 18.98606,
    longitude: -72.29226,
    numActiveCases: 17,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 18,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Haiti',
    countryId: 'b88959cb7d907d91065ac7ec19eb0b44'
  }, {
    id: '687b745f-e67c-3316-826e-65fc8d9e7497',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Honduras',
    latitude: 14.50472,
    longitude: -86.2531,
    numActiveCases: 204,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 222,
    totalDeaths: 15,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Honduras',
    countryId: 'f4270ce39e7e926052e097a0e4e63bde'
  }, {
    id: '6052fbdb-76fa-392d-bfaf-08c5ffa90184',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Hungary',
    latitude: 47.16116,
    longitude: 19.50496,
    numActiveCases: 554,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 623,
    totalDeaths: 26,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Hungary',
    countryId: 'fa79c3005daec47ecff84a116a0927a1'
  }, {
    id: 'f80a15e9-626e-3578-8de0-072e58af6329',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Iceland',
    latitude: 64.96394,
    longitude: -19.02116,
    numActiveCases: 1051,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1364,
    totalDeaths: 4,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Iceland',
    countryId: 'b78edab0f52e0d6c195fd0d8c5709d26'
  }, {
    id: '542c9aa4-14f5-3409-9aea-5958affe25c3',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'India',
    latitude: 21.7866,
    longitude: 82.79476,
    numActiveCases: 2303,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2567,
    totalDeaths: 72,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'India',
    countryId: '7d31e0da1ab99fe8b08a22118e2f402b'
  }, {
    id: '8f0d38c2-897c-3e9a-a6fa-f2727534f982',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Indonesia',
    latitude: 0.10974,
    longitude: 113.9174,
    numActiveCases: 1671,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1986,
    totalDeaths: 181,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Indonesia',
    countryId: '4647d00cf81f8fb0ab80f753320d0fc9'
  }, {
    id: 'f362348b-0d23-3d2d-9055-c1a69fb52122',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Iran',
    latitude: 32.42065,
    longitude: 53.68236,
    numActiveCases: 31954,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 53183,
    totalDeaths: 3294,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Iran',
    countryId: '21fc68909a9eb8692e84cf64e495213e'
  }, {
    id: '21297d9a-9dc7-374a-8476-979e9837fc97',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Iraq',
    latitude: 33.24052,
    longitude: 43.68985,
    numActiveCases: 540,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 820,
    totalDeaths: 54,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Iraq',
    countryId: '5ae2ff99743a8487c917e98bbf3db2d3'
  }, {
    id: '1ea9be97-611a-3fe2-a714-8b5482ca6c99',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Israel',
    latitude: 31.3893,
    longitude: 35.36124,
    numActiveCases: 6652,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 7030,
    totalDeaths: 40,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Israel',
    countryId: '5a548c2f5875f10bf5614b7c258876cf'
  }, {
    id: '9025bd9a-6e24-35d7-a90e-e1a47eb409ff',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Italy',
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
    wikiId: 'Italy',
    countryId: '1007e1b7f894dfbf72a0eaa80f3bc57e'
  }, {
    id: '26a41625-3b95-31fa-851a-56484e766d0c',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Ivory Coast',
    latitude: 7.54685,
    longitude: -5.54709,
    numActiveCases: 178,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 194,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Ivory_Coast',
    countryId: '4413f999927923b7c6fd336d7cdbabeb'
  }, {
    id: '98cb42de-1d8e-3f4e-a193-14ed1e2820ae',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Japan',
    latitude: 37.4876,
    longitude: 139.83829,
    numActiveCases: 2040,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2617,
    totalDeaths: 63,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Japan',
    countryId: '53a577bb3bc587b0c28ab808390f1c9b'
  }, {
    id: 'e42f58ed-d918-3e01-9ea6-9e020f342848',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Jordan',
    latitude: 31.27946,
    longitude: 37.13068,
    numActiveCases: 247,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 310,
    totalDeaths: 5,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Jordan',
    countryId: '6ea1e24d60afddf388b06f8243c45b70'
  }, {
    id: '1e7a5516-aca7-3b60-abd7-1cf5d03e7ab6',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Kazakhstan',
    latitude: 48,
    longitude: 68,
    numActiveCases: 425,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 460,
    totalDeaths: 6,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Kazakhstan',
    countryId: '7c1a943bf29d2c753fb935e99428482c'
  }, {
    id: 'c44532ae-c4ee-356a-b590-132221a662b8',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Kenya',
    latitude: -0.02435,
    longitude: 37.90395,
    numActiveCases: 114,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 122,
    totalDeaths: 4,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Kenya',
    countryId: '94984a8c4896946d9bafd24959cb6181'
  }, {
    id: '4e64fc0a-6899-3c63-9912-a359b6a9cd2f',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Kuwait',
    latitude: 29.31015,
    longitude: 47.49445,
    numActiveCases: 335,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 417,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Kuwait',
    countryId: '05387f3ca38d7bd84ae35f31f2899ecf'
  }, {
    id: '47382c14-fdde-33f7-9279-5db0920ad488',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Kyrgyzstan',
    latitude: 41.20554,
    longitude: 74.7799,
    numActiveCases: 123,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 130,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Kyrgyzstan',
    countryId: '5e4a24f76c22f03700b283dfbdf6eec1'
  }, {
    id: '92bf6cc7-f0e1-31c3-9fce-c1302282e838',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Laos',
    latitude: 18.20521,
    longitude: 105.45118,
    numActiveCases: 10,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 10,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Laos',
    countryId: '601aebf4afb1db3fdb5c88f3cdda23ef'
  }, {
    id: '097e6b8d-1248-33e1-bda1-0eef9d27cd34',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Latvia',
    latitude: 56.88011,
    longitude: 24.60524,
    numActiveCases: 491,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 493,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Latvia',
    countryId: 'a09f4b2ae67f0a63ab8912047a1a1b55'
  }, {
    id: '26f3a6c5-788a-3db6-ba3f-3ab3219c5e7b',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Lebanon',
    latitude: 33.8708,
    longitude: 35.86324,
    numActiveCases: 441,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 508,
    totalDeaths: 17,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Lebanon',
    countryId: 'b45ff92cc522bb89bfc3b8ef3fc21b7d'
  }, {
    id: 'f2983a88-5975-35ac-bca6-e455d85d2b49',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Liberia',
    latitude: 6.45242,
    longitude: -9.42859,
    numActiveCases: 7,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 7,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Liberia',
    countryId: '642cab67fc263bb61ae4ccbd577c8aa4'
  }, {
    id: '3adc10f9-1466-3da2-82d8-a21b686e6c7a',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Libya',
    latitude: 26.33852,
    longitude: 17.26882,
    numActiveCases: 10,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 11,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Libya',
    countryId: '742b8abe5776a6d942a92ce7dc7d84a0'
  }, {
    id: 'a546fec5-d681-3ca7-92e3-971b9b2b8546',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Liechtenstein',
    latitude: 47.1595,
    longitude: 9.5538,
    numActiveCases: 75,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 75,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Liechtenstein',
    countryId: 'da4e3775bd2de6c37fadd9b0188f7a4e'
  }, {
    id: 'b7a2c4a8-9b7f-3d44-8bc3-081d01eda311',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Lithuania',
    latitude: 55.17396,
    longitude: 23.89439,
    numActiveCases: 680,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 696,
    totalDeaths: 9,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Lithuania',
    countryId: 'd9051e0b77f8bb5521389618e70e2ada'
  }, {
    id: 'df833c1a-7188-3a7e-aafb-7894aa274f76',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Luxembourg',
    latitude: 49.81522,
    longitude: 6.13348,
    numActiveCases: 2081,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2612,
    totalDeaths: 31,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Luxembourg',
    countryId: '06630c890abadde9228ea818ce52b621'
  }, {
    id: '804ac8f5-8b6b-3708-ac17-902da1f92420',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Madagascar',
    latitude: -18.77718,
    longitude: 46.85432,
    numActiveCases: 65,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 65,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Madagascar',
    countryId: 'b5bcce260d9e303ca0e63f055187ed28'
  }, {
    id: '0e133a7b-1b64-3455-9105-25133e0f67c8',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Malawi',
    latitude: -13.24707,
    longitude: 34.29471,
    numActiveCases: 3,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Malawi',
    countryId: '70965feb0441ff7fc1982fc5c509136e'
  }, {
    id: '15eb97fe-6506-3aff-9859-2075ee7c7cca',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Malaysia',
    latitude: 3.94515,
    longitude: 114.40166,
    numActiveCases: 2453,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3333,
    totalDeaths: 53,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Malaysia',
    countryId: '3f0e49c46cbde0c7adf5ea04a97ab261'
  }, {
    id: '1ad14bcb-bc0a-3617-b4b2-0581d46193b9',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Maldives',
    latitude: 6.75785,
    longitude: 73.15476,
    numActiveCases: 6,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 19,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Maldives',
    countryId: '62235142f3fca96e1f2cd0ed4a7de48d'
  }, {
    id: '5194497c-bd14-3939-bce0-f520258f3ef6',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Mali',
    latitude: 17.57975,
    longitude: -3.99883,
    numActiveCases: 33,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 36,
    totalDeaths: 3,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Mali',
    countryId: 'e90c93ceb8ccdcdf3b797f47edee866d'
  }, {
    id: '3d249029-2ef5-324e-ada6-78682a3bd719',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Malta',
    latitude: 35.90209,
    longitude: 14.44812,
    numActiveCases: 200,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 202,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Malta',
    countryId: '92468e8a62373add2b9caefddbcf1303'
  }, {
    id: 'bcaa1f8f-61c9-3c9e-8aaa-bed4d6226cb8',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Mauritania',
    latitude: 21.00681,
    longitude: -10.95086,
    numActiveCases: 3,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 6,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Mauritania',
    countryId: 'd7fe73b6846dfc672236e636aa2cf6b5'
  }, {
    id: '49bc6359-25eb-38cf-9bbf-aff418116772',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Mauritius',
    latitude: -20.25541,
    longitude: 57.55174,
    numActiveCases: 179,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 186,
    totalDeaths: 7,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Mauritius',
    countryId: '07f3ca235faaa1c9ad16facef5526d8b'
  }, {
    id: '5efde8c9-e860-3d2a-bb31-3cdf8d747fd1',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Mexico',
    latitude: 23.62574,
    longitude: -101.95625,
    numActiveCases: 827,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1510,
    totalDeaths: 50,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Mexico',
    countryId: '8dbb07a18d46f63d8b3c8994d5ccc351'
  }, {
    id: '53f5344b-f8d7-3989-8e71-aa8e382db5a5',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Moldova',
    latitude: 46.97933,
    longitude: 28.39131,
    numActiveCases: 557,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 591,
    totalDeaths: 8,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Moldova',
    countryId: '0c12f5495afe76d9242ed25668979de9'
  }, {
    id: '0710df8f-5ea1-3295-8793-017c4e6db221',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Monaco',
    latitude: 43.73835,
    longitude: 7.42429,
    numActiveCases: 60,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 64,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Monaco',
    countryId: 'd6a297c6193fd59309453a0db7a51b90'
  }, {
    id: '589f3c84-5b19-3117-a876-8f3523ca7985',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Mongolia',
    latitude: 46.8608,
    longitude: 103.83681,
    numActiveCases: 12,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 14,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Mongolia',
    countryId: 'bb6a72b6a93150d4181e50496fc15f5a'
  }, {
    id: 'ecf80702-6e0a-3a61-88fd-63301c21e312',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Montenegro',
    latitude: 42.69755,
    longitude: 19.43227,
    numActiveCases: 171,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 174,
    totalDeaths: 2,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Montenegro',
    countryId: '4e92f9d2cdf0b8eb493ae3a19709d121'
  }, {
    id: 'a9380fc3-43cf-3426-8d91-10fede4943b9',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Morocco',
    latitude: 31.4342,
    longitude: -6.40245,
    numActiveCases: 658,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 761,
    totalDeaths: 47,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Morocco',
    countryId: '4d4a1722d8e85909a576da2c42878ff0'
  }, {
    id: 'f5207cee-f1b4-319f-b54b-d89601898f60',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Mozambique',
    latitude: -18.67028,
    longitude: 35.53015,
    numActiveCases: 10,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 10,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Mozambique',
    countryId: 'a6d3bea3fa66775952e080b90bb0c4f1'
  }, {
    id: '0c4e1fe1-9625-31b1-856d-fb0e6231c3f5',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Myanmar',
    latitude: 19.25796,
    longitude: 96.683,
    numActiveCases: 19,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 20,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Myanmar',
    countryId: '217fa54cc9351504fcde32147bff005d'
  }, {
    id: '70875e4f-dd1a-3d4b-94b9-7787e092b2af',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Namibia',
    latitude: -22.96566,
    longitude: 18.48617,
    numActiveCases: 11,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 14,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Namibia',
    countryId: '69f4287626aee77f93e2c891b518838b'
  }, {
    id: 'a5b38f8f-c6a8-3475-bcca-41d43fe3d0da',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Nepal',
    latitude: 28.39475,
    longitude: 84.12777,
    numActiveCases: 5,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 6,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Nepal',
    countryId: '7fef6b003c726890ea5ca3708fe8ff56'
  }, {
    id: '4af81724-a92d-36bc-8b9c-4f79e4214cd0',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Netherlands',
    latitude: 52.1082,
    longitude: 5.32986,
    numActiveCases: 14071,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 15821,
    totalDeaths: 1490,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Netherlands',
    countryId: 'a67d4cbdd1b59e0ffccc6bafc83eb033'
  }, {
    id: 'aae4176a-3f4a-310a-b9c0-dafff808279a',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'New Zealand',
    latitude: -43.58678,
    longitude: 170.37099,
    numActiveCases: 764,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 868,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'New_Zealand',
    countryId: '23113b12a9d8135100497751756d4bee'
  }, {
    id: '5317e1f2-558d-3ab4-961f-80c7bd520f42',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Nicaragua',
    latitude: 12.86672,
    longitude: -85.42405,
    numActiveCases: 4,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 5,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Nicaragua',
    countryId: '3bfe17f6c2d1b8941df303de7aec2eb0'
  }, {
    id: '20c77933-a502-3e2a-923c-0dbaec3e341d',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Niger',
    latitude: 17.61099,
    longitude: 8.08094,
    numActiveCases: 93,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 98,
    totalDeaths: 5,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Niger',
    countryId: 'bf2ec44b27fc25c6fd8a38792b9ef2a8'
  }, {
    id: '83a72a2d-d48d-3873-8a44-4834ef200939',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Nigeria',
    latitude: 9.08457,
    longitude: 8.67425,
    numActiveCases: 168,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 190,
    totalDeaths: 2,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Nigeria',
    countryId: '5d839147c83e283c1d1bb705dc50586f'
  }, {
    id: '257e238b-1db3-39ff-b318-81d40a4f9ff2',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Republic of Macedonia',
    latitude: 41.60281,
    longitude: 21.75129,
    numActiveCases: 402,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 430,
    totalDeaths: 11,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'North_Macedonia',
    countryId: '28f9f2e9021c7754f9968e027d577267'
  }, {
    id: '37dbeacb-3c77-30c6-8e6c-20f725a64d44',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Norway',
    latitude: 64.55653,
    longitude: 12.66617,
    numActiveCases: 5207,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 5296,
    totalDeaths: 57,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Norway',
    countryId: 'd5b9290a0b67727d4ba1ca6059dc31a6'
  }, {
    id: 'df24b61b-9fb1-3c6f-87ac-0560259fa43e',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Oman',
    latitude: 20.81435,
    longitude: 55.85926,
    numActiveCases: 194,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 252,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Oman',
    countryId: '1c77b9733832da9d1ffac66620f3c006'
  }, {
    id: 'b4a42b6b-8318-3487-b505-3bcd711e2c39',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Pakistan',
    latitude: 30.44185,
    longitude: 69.3597,
    numActiveCases: 2471,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2637,
    totalDeaths: 40,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Pakistan',
    countryId: 'b9698b8546220246fe600a949db326bf'
  }, {
    id: '2d6ed70a-943d-3917-ac22-c48ccd0ecf40',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Panama',
    latitude: 8.4177,
    longitude: -80.11278,
    numActiveCases: 1428,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1475,
    totalDeaths: 37,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Panama',
    countryId: '6bec347f256837d3539ad619bd489de7'
  }, {
    id: '540b6d94-850c-3617-bd02-600e299d0ca2',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Papua New Guinea',
    latitude: -6.65619,
    longitude: 145.85931,
    numActiveCases: 1,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Papua_New_Guinea',
    countryId: 'eb0d4e456fe36b15e8f1667652266f59'
  }, {
    id: 'f3157c61-faf0-360b-aad6-4c710be4b56f',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Paraguay',
    latitude: -23.4514,
    longitude: -58.4532,
    numActiveCases: 83,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 92,
    totalDeaths: 3,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Paraguay',
    countryId: '73101738da81e5cbb87b64cd400a4405'
  }, {
    id: '042c88d5-9b2d-3c9a-bc80-e21864bc953c',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Peru',
    latitude: -9.18134,
    longitude: -75.00236,
    numActiveCases: 1003,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1595,
    totalDeaths: 55,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Peru',
    countryId: '84c8fa2341f7d052a1ee3a36ff043798'
  }, {
    id: 'f27d399d-8abf-3308-ae38-eef2de6142a7',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Philippines',
    latitude: 15.59305,
    longitude: 120.73907,
    numActiveCases: 2830,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3018,
    totalDeaths: 136,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Philippines',
    countryId: '77dab2f81a6c8c9136efba7ab2c4c0f2'
  }, {
    id: '2d531b10-319d-3fc3-bead-fb5274cf2bfe',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Poland',
    latitude: 51.91892,
    longitude: 19.1343,
    numActiveCases: 3145,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3266,
    totalDeaths: 65,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Poland',
    countryId: '94880bda83bda77c5692876700711f15'
  }, {
    id: 'a63627d0-0a44-3e55-95c2-3fcc538edd55',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Portugal',
    latitude: 39.55792,
    longitude: -7.84481,
    numActiveCases: 9572,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 9886,
    totalDeaths: 246,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Portugal',
    countryId: 'ea71b362e3ea9969db085abfccdeb10d'
  }, {
    id: 'ebcdfcf9-5c66-3bb2-8034-9ded369962e9',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Qatar',
    latitude: 25.3188,
    longitude: 51.19676,
    numActiveCases: 979,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1075,
    totalDeaths: 3,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Qatar',
    countryId: '7cc7ef17c45527cf90fcf27516794d21'
  }, {
    id: 'aca7f7d7-0020-3134-b91f-9010ca6cbcbb',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Republic of Ireland',
    latitude: 53.17551,
    longitude: -8.15203,
    numActiveCases: 4148,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4273,
    totalDeaths: 120,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Republic_of_Ireland',
    countryId: '10e71bd23d3dea9ac62d72d53e2ab9f0'
  }, {
    id: '5b79a40e-ce8f-31b0-a2b8-189d0452bed2',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Republic of the Congo',
    latitude: -0.66262,
    longitude: 14.92741,
    numActiveCases: 18,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 22,
    totalDeaths: 2,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Republic_of_the_Congo',
    countryId: '91e413e69786750ed24de784189fcb4d'
  }, {
    id: '8b5c7444-39ef-3116-9e6e-fc226388cc2a',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Romania',
    latitude: 45.94695,
    longitude: 24.9804,
    numActiveCases: 2767,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3183,
    totalDeaths: 133,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Romania',
    countryId: '0c7d5ae44b2a0be9ebd7d6b9f7d60f20'
  }, {
    id: '60c5e90f-3c1d-38a5-928a-ab3c7cba74b3',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Russia',
    latitude: 59.45375,
    longitude: 108.83072,
    numActiveCases: 3834,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4149,
    totalDeaths: 34,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Russia',
    countryId: '5feb168ca8fb495dcc89b1208cdeb919'
  }, {
    id: 'aa03371f-133f-34bd-82b0-a8e0dd7c08fd',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Rwanda',
    latitude: -1.94707,
    longitude: 29.87638,
    numActiveCases: 84,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 84,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Rwanda',
    countryId: '9d7ed5d77d647e89c3cc11757d651dc2'
  }, {
    id: '5488ae38-5760-3539-8d39-f0a015d6bbe5',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Saint Kitts and Nevis',
    latitude: 17.3181,
    longitude: -62.74637,
    numActiveCases: 9,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 9,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Saint_Kitts_and_Nevis',
    countryId: 'a5c8a719698619d78137f873432fa91d'
  }, {
    id: 'cc454b11-b3a1-316b-a2d6-aec265cf5c34',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Saint Lucia',
    latitude: 13.904,
    longitude: -60.97418,
    numActiveCases: 12,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 13,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Saint_Lucia',
    countryId: '02d848ec22375579f19438265ed082d1'
  }, {
    id: '65b9c56d-cfdd-3a2e-9eea-92fb2523cfc9',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'San Marino',
    latitude: 43.94273,
    longitude: 12.45979,
    numActiveCases: 194,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 245,
    totalDeaths: 30,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'San_Marino',
    countryId: '54a0d1f73c3bf9eb699b7f36d90260fd'
  }, {
    id: 'd92f2d2e-a42a-37a1-a840-8f3d2819e2ee',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Saudi Arabia',
    latitude: 24.26119,
    longitude: 45.12033,
    numActiveCases: 1663,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2039,
    totalDeaths: 25,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Saudi_Arabia',
    countryId: '53d2fba69d071e53f12b61227d3d30de'
  }, {
    id: 'ac8f1584-8219-37e8-9ef2-54652c385a2b',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Senegal',
    latitude: 14.49945,
    longitude: -14.44555,
    numActiveCases: 140,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 207,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Senegal',
    countryId: '9986531359550785caffb2032622437f'
  }, {
    id: '8d843ad0-abf7-37cb-9288-4ef249e417ca',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Serbia',
    latitude: 44.04981,
    longitude: 20.91079,
    numActiveCases: 1437,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1476,
    totalDeaths: 39,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Serbia',
    countryId: '2ff6e535bd2f100979a171ad430e642b'
  }, {
    id: '4a49d29c-0dc4-330c-8939-7bb0d283a8fc',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Seychelles',
    latitude: -4.68444,
    longitude: 55.48732,
    numActiveCases: 10,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 10,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Seychelles',
    countryId: 'd2e4449b45608e33e472d939a73868f7'
  }, {
    id: '699bfb58-2929-3305-91f4-b0ea2c474d7c',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Sierra Leone',
    latitude: 8.46502,
    longitude: -11.79593,
    numActiveCases: 2,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Sierra_Leone',
    countryId: '81712886563356568e6e0f70703552c2'
  }, {
    id: '9ff20727-f392-3d38-a7d7-911a08ffb916',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Slovakia',
    latitude: 48.6655,
    longitude: 19.70174,
    numActiveCases: 439,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 450,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Slovakia',
    countryId: '88a392b5a8d8f73986d83a2deefb0472'
  }, {
    id: '2733e57e-7eb4-3f4e-b9bd-d3fa4b2c761c',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Slovenia',
    latitude: 46.14694,
    longitude: 14.95505,
    numActiveCases: 844,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 934,
    totalDeaths: 20,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Slovenia',
    countryId: '00247297c394dd443dc97067830c35f4'
  }, {
    id: '0025612c-f7ed-31ec-a9b0-fe70a3b9e991',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Somalia',
    latitude: 5.16158,
    longitude: 46.20083,
    numActiveCases: 4,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 5,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Somalia',
    countryId: '921855f753932de762b780405a50bdf7'
  }, {
    id: 'fb593ae6-da29-3b41-b270-29a30c454fda',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'South Africa',
    latitude: -28.47933,
    longitude: 24.67993,
    numActiveCases: 1401,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1505,
    totalDeaths: 9,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'South_Africa',
    countryId: '1287b11a755a7d660aa421359e6d24d0'
  }, {
    id: '12d8c81d-ad0f-3eea-a036-9c250a1399eb',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'South Korea',
    latitude: 36.44815,
    longitude: 127.85017,
    numActiveCases: 3867,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 10062,
    totalDeaths: 174,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'South_Korea',
    countryId: 'aa292756f481473cfd6a988c22d480b1'
  }, {
    id: '44f7e7d5-2405-326e-8c1c-61fe39fed36f',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Spain',
    latitude: 39.89489,
    longitude: -2.98831,
    numActiveCases: 76262,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 117710,
    totalDeaths: 10935,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Spain',
    countryId: '907eba32d950bfab68227fd7ea22999b'
  }, {
    id: 'f63d4694-1ff7-3686-ada6-372670496731',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Sri Lanka',
    latitude: 7.87395,
    longitude: 80.78971,
    numActiveCases: 131,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 159,
    totalDeaths: 4,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Sri_Lanka',
    countryId: '999309971ba0008ba9f444f6df579961'
  }, {
    id: '0276f7ac-9a3b-3762-9e7c-126bececc71a',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Sudan',
    latitude: 13.31664,
    longitude: 30.20949,
    numActiveCases: 6,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 10,
    totalDeaths: 2,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Sudan',
    countryId: '74458a3d3e5f3074226b1f9fa23c9163'
  }, {
    id: 'c032ebdd-9d40-36af-84fa-3d3cfcd2655f',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Suriname',
    latitude: 3.91784,
    longitude: -56.03203,
    numActiveCases: 9,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 10,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Suriname',
    countryId: '64446ac025106d201779cb4bf5ab6b2e'
  }, {
    id: 'd12892ec-e99f-3107-b34a-285ce269406a',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Sweden',
    latitude: 62.19845,
    longitude: 17.55142,
    numActiveCases: 5568,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 6131,
    totalDeaths: 358,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Sweden',
    countryId: 'c8f4261f9f46e6465709e17ebea7a92b'
  }, {
    id: '310ccca6-0645-3ab4-b38d-51a7b3d840cc',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Switzerland',
    latitude: 46.8132,
    longitude: 8.22395,
    numActiveCases: 14169,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 19606,
    totalDeaths: 591,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Switzerland',
    countryId: '3ad08396dc5afa78f34f548eea3c1d64'
  }, {
    id: '66785f6a-b948-3b1e-b664-5ca012e601f1',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Syria',
    latitude: 34.8148,
    longitude: 39.056,
    numActiveCases: 14,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 16,
    totalDeaths: 2,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Syria',
    countryId: '465718d0a1bc8363ad01390923fad5d1'
  }, {
    id: '399823ad-c91c-3a4e-b79e-7422dc03c49d',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Taiwan',
    latitude: 23.5984,
    longitude: 121.018,
    numActiveCases: 293,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 348,
    totalDeaths: 5,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Taiwan',
    countryId: '551fe18ef47d4e6e9d943b9a68ada21d'
  }, {
    id: '128f7d36-e458-39d0-8a24-84f90a8530bf',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Tanzania',
    latitude: -6.36821,
    longitude: 34.88519,
    numActiveCases: 16,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 20,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Tanzania',
    countryId: 'c03b1123e45fa00da3142e0424ee5eec'
  }, {
    id: '7eb27990-613f-3cf5-9ef0-ac89778dac28',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Thailand',
    latitude: 13.03659,
    longitude: 101.4925,
    numActiveCases: 1378,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1978,
    totalDeaths: 19,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Thailand',
    countryId: '103357e3e40a9c0e4e9d36110f7bbc7a'
  }, {
    id: '2caf1e38-7322-3ac8-9706-2a8647c6f52b',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'The Bahamas',
    latitude: 24.74142,
    longitude: -78.08002,
    numActiveCases: 22,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 24,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'The_Bahamas',
    countryId: '9041ceec600555da84f553ca8e98fc9f'
  }, {
    id: '8b83adb1-3d70-3704-9b5e-a1fc25c1e798',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'The Gambia',
    latitude: 13.44541,
    longitude: -15.31143,
    numActiveCases: 1,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'The_Gambia',
    countryId: 'f6b90d77186b4566084a7a7cc13a9985'
  }, {
    id: '5a83cf2b-e0bd-394f-b8b0-fcd7f9cc9b12',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Togo',
    latitude: 8.62169,
    longitude: 0.82969,
    numActiveCases: 20,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 40,
    totalDeaths: 3,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Togo',
    countryId: '1e746c5c85c4c0de3a0858b0dd047476'
  }, {
    id: '441dcf90-7b5b-3962-a132-6cc05f12738d',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Trinidad and Tobago',
    latitude: 10.43443,
    longitude: -61.41808,
    numActiveCases: 90,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 97,
    totalDeaths: 6,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Trinidad_and_Tobago',
    countryId: '6d196050243a291b44c87f63346173dd'
  }, {
    id: '027f91ea-ad3e-329f-b063-3cb9a7dc8bc1',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Tunisia',
    latitude: 33.79502,
    longitude: 9.56154,
    numActiveCases: 472,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 495,
    totalDeaths: 18,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Tunisia',
    countryId: 'd6dacba23ab4a1d5b72f223bfb010a05'
  }, {
    id: '65b6540f-d0d0-3c57-8bf7-ed496aa048d6',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Turkey',
    latitude: 38.95774,
    longitude: 35.4317,
    numActiveCases: 20012,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 20921,
    totalDeaths: 425,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Turkey',
    countryId: '221cdfb73049678e244380b45872cbb2'
  }, {
    id: 'b2f27cda-c83b-3988-842c-c04c78cbedab',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Uganda',
    latitude: 1.37777,
    longitude: 32.2874,
    numActiveCases: 45,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 45,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Uganda',
    countryId: '53b3c88ea00c4f0e137b4e6fe7bd23f1'
  }, {
    id: '27293927-6f1e-3bb6-a6ca-777d4da32fd1',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Ukraine',
    latitude: 48.38288,
    longitude: 31.17344,
    numActiveCases: 900,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 942,
    totalDeaths: 23,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Ukraine',
    countryId: 'f01fc92b23faa973f3492a23d5a705c5'
  }, {
    id: 'ce2bddea-53a5-36a8-b84d-98ddc3ce4c6b',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'United Arab Emirates',
    latitude: 24.01438,
    longitude: 53.9769,
    numActiveCases: 1147,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1264,
    totalDeaths: 9,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'United_Arab_Emirates',
    countryId: 'edab6ab6fad43f4911b41103922c3e9e'
  }, {
    id: 'cde6a1dd-92f2-3c1a-b1b7-b4daba48badd',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'United Kingdom',
    latitude: 54.31407,
    longitude: -2.23001,
    numActiveCases: 34872,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 38688,
    totalDeaths: 3611,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'United_Kingdom',
    countryId: '5ad75a758f27c089b52a1eac8dca7e0d'
  }, {
    id: '8f551e2f-3cbc-34e2-b334-9d57631bbba4',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'United States',
    latitude: 37.16793,
    longitude: -95.84502,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 261438,
    totalDeaths: 6699,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'United_States',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '77e5ed77-579e-3973-ad10-2e8a670126f9',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Uruguay',
    latitude: -32.53151,
    longitude: -55.75833,
    numActiveCases: 297,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 369,
    totalDeaths: 4,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Uruguay',
    countryId: '75497a22409db78dcc52c291e078bc10'
  }, {
    id: 'a454057f-3e0e-3b5c-9587-2e0e8ca63b77',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Uzbekistan',
    latitude: 41.39476,
    longitude: 64.56445,
    numActiveCases: 194,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 221,
    totalDeaths: 2,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Uzbekistan',
    countryId: 'a0a3e881895e46eb96218f0988d405b9'
  }, {
    id: '70251932-da36-31b4-bc72-c13a2e731a21',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Vatican City',
    latitude: 41.9038,
    longitude: 12.4525,
    numActiveCases: 7,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 7,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Vatican_City',
    countryId: 'edb3fc76459aacac8c76607a4da9188e'
  }, {
    id: 'f8e0fb33-6333-3074-beae-3d65974fafbb',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Venezuela',
    latitude: 6.47279,
    longitude: -66.58904,
    numActiveCases: 98,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 146,
    totalDeaths: 5,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Venezuela',
    countryId: 'e95294b730f61c8175550ec244bfcb50'
  }, {
    id: '494626b5-91d4-3cc3-bdda-d7ea263312b4',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Vietnam',
    latitude: 15.9742,
    longitude: 107.868,
    numActiveCases: 152,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 237,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Vietnam',
    countryId: 'fdef6daa799e80dbce1b561577b21181'
  }, {
    id: 'c26d2fda-5dc8-3a80-b429-e9d1239fd585',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Zambia',
    latitude: -13.15192,
    longitude: 27.85254,
    numActiveCases: 36,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 39,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Zambia',
    countryId: 'b0aa0804e676a38255af4fd70236af7c'
  }, {
    id: '9fde0253-79fe-3e96-be6d-5dea3a270ce1',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Zimbabwe',
    latitude: -19.01328,
    longitude: 29.14666,
    numActiveCases: 8,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 9,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Zimbabwe',
    countryId: '9d5116a2451bc98c2b46b93acbc1b4f0'
  }, {
    id: '7be8222c-bc4d-38c7-a5e4-3c3a3b2f13ea',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Alabama',
    latitude: 32.78488,
    longitude: -86.83158,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1315,
    totalDeaths: 32,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: 'e6a31992-efe3-301e-bcff-b7f67ba215fa',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Alaska',
    latitude: 63.0365,
    longitude: -149.106,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 147,
    totalDeaths: 3,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Alaska',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'e15997c74a71c5d9263df6f7a21bc191'
  }, {
    id: '168c2efe-289b-38a9-9114-98a071dcd13c',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Arizona',
    latitude: 34.29302,
    longitude: -111.66473,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1937,
    totalDeaths: 41,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Arizona',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '3fe5003edc0cb6c83962dbd74d35dd50'
  }, {
    id: 'b72ad432-84e8-392c-b110-665be126331b',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Arkansas',
    latitude: 34.89978,
    longitude: -92.43864,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 683,
    totalDeaths: 12,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Arkansas',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '46aaf459104e9ce5d45eaa017ac349c2'
  }, {
    id: 'b3e478c3-51c9-3117-b4a4-974a5d4fdc9f',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'California',
    latitude: 37.24609,
    longitude: -119.61038,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 11206,
    totalDeaths: 249,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'California',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '356779a9a1696714480f57fa3fb66d4c'
  }, {
    id: '83265a68-bf9f-3bbf-9a41-d63165122c0c',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Colorado',
    latitude: 38.99854,
    longitude: -105.54781,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3742,
    totalDeaths: 97,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Colorado',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '15e49475e42539feed93fc5cce25d3cb'
  }, {
    id: 'b8c2167f-b278-34df-99fe-4a3466d93ef0',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Connecticut',
    latitude: 41.62107,
    longitude: -72.72539,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3824,
    totalDeaths: 112,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Connecticut',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'f7529880ccaf91ff331809e9fe98f883'
  }, {
    id: 'ae854296-e32b-32e5-89fd-c678361611df',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Delaware',
    latitude: 38.99291,
    longitude: -75.50646,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 393,
    totalDeaths: 12,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Delaware',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'ba290ff950475708a10987cb31e6274c'
  }, {
    id: 'aa47bb73-317f-3f42-aaa1-732cba23fa8b',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Florida',
    latitude: 28.63187,
    longitude: -82.47139,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 9585,
    totalDeaths: 163,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Florida',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'eeaca0ed2f6a35370c77de30792debb8'
  }, {
    id: 'a9a68dad-679d-3011-afc3-d7cac70062b7',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Georgia',
    latitude: 32.64933,
    longitude: -83.44672,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 5831,
    totalDeaths: 183,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Georgia_(U.S._state)',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '7f3097563d468719d72c6df98a69f6de'
  }, {
    id: 'a0429292-b9d3-3839-b27c-4d36fc3c3097',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Hawaii',
    latitude: 20.25382,
    longitude: -156.35411,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 283,
    totalDeaths: 2,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Hawaii',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'a85df3d66bde576d3b62caaf527f2daa'
  }, {
    id: '3bb86e87-9022-3949-a90c-6e8b14098190',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Idaho',
    latitude: 44.38899,
    longitude: -114.65945,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 891,
    totalDeaths: 9,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Idaho',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '47b231eae4bf87fa405e34eb9273b741'
  }, {
    id: 'f09d9ee1-d62e-3276-9c4f-5869a435c47f',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Illinois',
    latitude: 40.06446,
    longitude: -89.19884,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 7697,
    totalDeaths: 167,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Illinois',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '66c2b329479ee151b4c6b257c0b7a9b7'
  }, {
    id: 'b5943d07-1437-3d4a-8254-68807b203020',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Indiana',
    latitude: 39.90805,
    longitude: -86.27552,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3435,
    totalDeaths: 102,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Indiana',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'c5376d00573c5858adf7ed894d0491b9'
  }, {
    id: '2f131867-3095-3479-8a4a-fa10fbf9b8a9',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Iowa',
    latitude: 42.07477,
    longitude: -93.49931,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 699,
    totalDeaths: 11,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Iowa',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '0daaf4a9abe3920c453a7f1f82a9bb19'
  }, {
    id: '8385f5b3-d7d2-363e-a08d-cd36e75c7a77',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Kansas',
    latitude: 38.48473,
    longitude: -98.38016,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 620,
    totalDeaths: 13,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Kansas',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '7c0e2b92f76ed5847aa48a3a1e70ae7d'
  }, {
    id: '929be9bf-053f-366b-89eb-e5706c107276',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Kentucky',
    latitude: 37.52728,
    longitude: -85.2876,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 770,
    totalDeaths: 31,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Kentucky',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '980ceec1dba2d36c2ba867f683b47838'
  }, {
    id: '043a2c55-8316-30ac-be24-f4852f34bd60',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Louisiana',
    latitude: 31.08061,
    longitude: -92.01531,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 10297,
    totalDeaths: 370,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Louisiana',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '39da6b7e3479522718668deaf7e6f304'
  }, {
    id: '68f35d3b-62c7-3da3-8c0e-7aac484fdf54',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Maine',
    latitude: 45.35342,
    longitude: -69.2224,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 432,
    totalDeaths: 9,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Maine',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '41695c8c512c53044b7b787368687ac8'
  }, {
    id: '46662e92-544c-3c69-9281-6e968d6294e6',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Maryland',
    latitude: 39.04657,
    longitude: -76.79495,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2758,
    totalDeaths: 43,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Maryland',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '11ea71f253acf02a2d126a0901e765a7'
  }, {
    id: '0ae43a6b-282e-3d70-bf83-a55285c63669',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Massachusetts Bay',
    latitude: 42.1842,
    longitude: -71.71818,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 8966,
    totalDeaths: 154,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Massachusetts_Bay',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'aeb264fc98dd9ebbcefe8d1eafee79f9'
  }, {
    id: '11cdd197-a103-3cc1-ae6d-dfa294ead299',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Michigan',
    latitude: 43.7427,
    longitude: -84.62167,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 10791,
    totalDeaths: 417,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Michigan',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '8eadc5d3e1f1919c527b6d865e226a88'
  }, {
    id: '76eb5921-9055-394e-851b-fdaff9eff89c',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Minnesota',
    latitude: 46.31668,
    longitude: -94.30921,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 788,
    totalDeaths: 22,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Minnesota',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '45009b4a16ef03ba8bb5b15665ef4469'
  }, {
    id: '5b1b6ef6-8cfa-3404-ac2f-a52b5dd8243f',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Mississippi',
    latitude: 32.722,
    longitude: -89.65551,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1358,
    totalDeaths: 29,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Mississippi',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '14c5492ce2fe855f408481fdbd13f7a6'
  }, {
    id: 'a9af1953-16d4-37fe-92ff-a28ab4930dfa',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Missouri',
    latitude: 38.2589,
    longitude: -92.43659,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1863,
    totalDeaths: 22,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Missouri',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '06fa309b609b7c8f7c39a88abe2d507c'
  }, {
    id: '4e6a8948-3b72-3256-93fd-14528ce659fd',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Montana',
    latitude: 47.03349,
    longitude: -109.64506,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 243,
    totalDeaths: 5,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Montana',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'a8088b760fb315d2964735686800b203'
  }, {
    id: '43146bd4-ec2b-3e21-a559-539d9ae37e53',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Nebraska',
    latitude: 41.50075,
    longitude: -99.68095,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 278,
    totalDeaths: 6,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Nebraska',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '20639b767478006218447b27e4b853cb'
  }, {
    id: '9b25ad4d-ae10-3d82-a0ca-5779f1a40478',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Nevada',
    latitude: 39.35649,
    longitude: -116.65543,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1484,
    totalDeaths: 38,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Nevada',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '8fcebe1ce891c49c60a3c26b317ebafb'
  }, {
    id: 'e86d9d3f-dcb7-3296-9f07-ca689dad2f56',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'New Hampshire',
    latitude: 44.00118,
    longitude: -71.6342,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 479,
    totalDeaths: 5,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'New_Hampshire',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '86db7eb10eb3963430f2f777499fe29a'
  }, {
    id: 'b3941ab9-faaf-3dc2-82ee-f1bb2797cbb1',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'New Jersey',
    latitude: 40.14323,
    longitude: -74.72671,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 25590,
    totalDeaths: 537,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'New_Jersey',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '5ac9ad692818005c50aae8afe95861d6'
  }, {
    id: '8e491a33-4899-3760-99a4-4d918e3e6cb7',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'New Mexico',
    latitude: 34.42132,
    longitude: -106.1084,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 442,
    totalDeaths: 7,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'New_Mexico',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '2a18ef32f87bb40c0d17130828cfb473'
  }, {
    id: '0777750f-7c33-377e-989f-f9ec7a22c41b',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'New York (state)',
    latitude: 42.85535,
    longitude: -76.50167,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 102863,
    totalDeaths: 2935,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'New_York_(state)',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'fede9f03ea10983a84201b04a1453558'
  }, {
    id: '3bb9a477-4ab5-3c05-8a0d-895ecbd94a27',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'North Carolina',
    latitude: 35.21962,
    longitude: -80.01955,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2147,
    totalDeaths: 22,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'North_Carolina',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '5c520b852c5d7c99a71f1635ae84e1d2'
  }, {
    id: '65937723-4cde-3253-9174-026e3333717d',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'North Dakota',
    latitude: 47.44626,
    longitude: -100.46933,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 173,
    totalDeaths: 3,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'North_Dakota',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '3971735868c1886348955beb9c7d72bd'
  }, {
    id: '2e680ca5-808b-32c8-a039-b701e8ad9862',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Ohio',
    latitude: 40.29147,
    longitude: -82.78995,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2902,
    totalDeaths: 81,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Ohio',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '4ec96adb9cc39333f3d2024b28f2503f'
  }, {
    id: '7831e449-e406-35f4-9f61-09dc588e290d',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Oklahoma',
    latitude: 35.58344,
    longitude: -97.50821,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 990,
    totalDeaths: 38,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Oklahoma',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '92aec0ba411203aa3a57aec94b108ed6'
  }, {
    id: 'd4a4486f-f82c-3cbd-94a1-8718cf4a2c53',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Oregon',
    latitude: 44.11559,
    longitude: -120.51484,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 826,
    totalDeaths: 21,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Oregon',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'da4d1129a255f83fb03bf32fde034ecc'
  }, {
    id: 'eff128a6-717f-3420-a2ab-617f1f9f52e2',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Pennsylvania',
    latitude: 40.87366,
    longitude: -77.79939,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 8570,
    totalDeaths: 102,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Pennsylvania',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '9ac31dfb3a2f5b994f4009eb0a3c0949'
  }, {
    id: '87e2b347-55b8-34cd-b4f1-99e25fedea65',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Rhode Island',
    latitude: 41.67588,
    longitude: -71.55475,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 657,
    totalDeaths: 12,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Rhode_Island',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '988e1885f34fc9058049b872a11236c5'
  }, {
    id: 'dd731293-9d3a-38f0-99b4-1f4f82f6ec9b',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'South Carolina',
    latitude: 33.62646,
    longitude: -80.9474,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1554,
    totalDeaths: 31,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'South_Carolina',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'aeeb87d118446317ff4f4d5e8d19283f'
  }, {
    id: 'a4e3d962-142f-3462-88df-82fe69bab808',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'South Dakota',
    latitude: 44.43555,
    longitude: -100.22959,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 187,
    totalDeaths: 2,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'South_Dakota',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '9b0faa6c816be68592b17dae38fd88b3'
  }, {
    id: '46e3f481-ec47-3c4e-9f3a-5edb071f3e39',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Tennessee',
    latitude: 35.84337,
    longitude: -86.34375,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2845,
    totalDeaths: 36,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Tennessee',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'a5c53b081bf565526eb3779db999becf'
  }, {
    id: '205a8c5c-6fa8-3896-b0f0-40e78ccdbdc2',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Texas',
    latitude: 31.48821,
    longitude: -99.35343,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 5368,
    totalDeaths: 92,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Texas',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '86871c416a7dbed7e5cc229d143d8d82'
  }, {
    id: 'f03d1214-833e-34f2-af1b-a76c53fa0d1c',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Utah',
    latitude: 39.32372,
    longitude: -111.67824,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1095,
    totalDeaths: 7,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Utah',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '6a382f5bfa3db109c81ec4adbf70ff26'
  }, {
    id: '7081f32e-3132-3673-b400-be3e9c4ced58',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Vermont',
    latitude: 43.87165,
    longitude: -72.45165,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 338,
    totalDeaths: 17,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Vermont',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'de30bd840230da1493819f803aff6e9e'
  }, {
    id: 'd76bdb79-591a-3298-bd41-fb12fca8da62',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Virginia',
    latitude: 37.51638,
    longitude: -78.83044,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2012,
    totalDeaths: 46,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Virginia',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'c8b287075ce4f11c834d2a0ada967ddc'
  }, {
    id: '96b2f8f2-3030-3c31-993b-3aeaa6f4d58e',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Washington',
    latitude: 47.40403,
    longitude: -120.50621,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 6597,
    totalDeaths: 272,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Washington_(state)',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '11d9591c9feee10969173c347e551a9a'
  }, {
    id: 'fba460ca-2f2e-3a91-a93d-6a87759f984a',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'West Virginia',
    latitude: 38.64249,
    longitude: -80.61351,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 217,
    totalDeaths: 2,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'West_Virginia',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '40165c0d1d578a7bbded085c5def3f48'
  }, {
    id: '3212b5b8-f60e-3faf-b7dd-630c031df616',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Wisconsin',
    latitude: 44.63824,
    longitude: -90.01202,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1756,
    totalDeaths: 39,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Wisconsin',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '5aeb407b7ca7f3fe0dc50003b1e0712f'
  }, {
    id: 'd2dd6b2c-9183-312c-8e73-30458b932e2c',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Wyoming',
    latitude: 42.9996,
    longitude: -107.5516,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 162,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Wyoming',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '823ee6401883db6f9e5865f51c77d97c'
  }, {
    id: '25427f52-24ca-39b9-b251-a542b255ffe8',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Autauga County, Alabama',
    latitude: 32.50771,
    longitude: -86.66611,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 12,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Autauga_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '78fb973e0330b5bef80178cb2ee15544'
  }, {
    id: 'e86f98c7-21a9-33fa-a495-b0e9bc6b8ca9',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Baldwin County, Alabama',
    latitude: 30.7698,
    longitude: -87.70876,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 26,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Baldwin_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '43e6b42296ad36c2ff19f0233559e2e7'
  }, {
    id: '84d1f727-05af-37bb-bb3c-dd9138ae74b1',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Barbour County, Alabama',
    latitude: 31.88278,
    longitude: -85.39843,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Barbour_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'd7f34c76271abd72a4b8041d74c47677'
  }, {
    id: 'a7a1b23d-c0a5-3976-afa4-22026bd64526',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Bibb County, Alabama',
    latitude: 33.03914,
    longitude: -87.14917,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Bibb_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '5e61bbc0f70c87b7d49969d45dc9d665'
  }, {
    id: '2030e7ec-98ae-3441-8bd8-055db36200f9',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Blount County, Alabama',
    latitude: 34.01276,
    longitude: -86.63345,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 8,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Blount_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '037a13cc1e282b176a0b6414b41cc98d'
  }, {
    id: '5dee0b1c-a5cf-36aa-a6d9-a033a1af75c4',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Bullock County, Alabama',
    latitude: 32.09272,
    longitude: -85.70465,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Bullock_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '9b2bde169e2daa168fa213290d4bf3c9'
  }, {
    id: '5e38e7ee-577f-35bd-ad83-acedc809998b',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Butler County, Alabama',
    latitude: 31.74421,
    longitude: -86.67338,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Butler_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '0ccae1c8732add5b6badd0935710a4b2'
  }, {
    id: 'f1696e5f-dc0a-3d78-83b3-f6494a115dc0',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Calhoun County, Alabama',
    latitude: 33.76226,
    longitude: -85.83777,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 16,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Calhoun_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '555ba6ccd9f3e05f5debbca3c4c37478'
  }, {
    id: '8709e1f8-8b4c-37b6-9e05-7acbf718d4de',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Chambers County, Alabama',
    latitude: 32.91879,
    longitude: -85.35803,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 80,
    totalDeaths: 4,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Chambers_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '054290337334a77761a253a70bfc7fb6'
  }, {
    id: 'a996403c-91e3-3a83-842f-3019709fdbfe',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Cherokee County, Alabama',
    latitude: 34.23394,
    longitude: -85.62135,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Cherokee_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '1f3319584eca4062759843e936929fc4'
  }, {
    id: '1e0cd838-6edd-31c9-b05b-9eb846050a07',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Chilton County, Alabama',
    latitude: 32.86599,
    longitude: -86.69548,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 15,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Chilton_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '22ee1b39473ed75b3baca3e89be181a8'
  }, {
    id: '184e1436-744b-386d-aba6-91fe931b67f8',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Choctaw County, Alabama',
    latitude: 32.00402,
    longitude: -88.20052,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Choctaw_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'b1851629065196b075d2c54eef8bb668'
  }, {
    id: 'c09be6d3-10bb-38bb-a62e-a980b4153047',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Clarke County, Alabama',
    latitude: 31.58842,
    longitude: -87.84078,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Clarke_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'bf5fb0dffbd6660abd15196324e008a8'
  }, {
    id: '212ea562-0179-3532-8ddb-86fd020a5b61',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Clay County, Alabama',
    latitude: 33.29451,
    longitude: -85.90771,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 8,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Clay_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '82b6fad209177a89ed55c406ce1eb32d'
  }, {
    id: 'a3c9eeb9-24b8-389d-8244-24b6fce71986',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Cleburne County, Alabama',
    latitude: 33.71663,
    longitude: -85.59616,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 6,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Cleburne_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '6fd4ce998e97183d7529ebb7b64a0908'
  }, {
    id: 'b4beb740-05d1-340c-9414-2e454de0a957',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Coffee County, Alabama',
    latitude: 31.40063,
    longitude: -85.99258,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Coffee_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '3d7af055e9b1d42a93ed8d4879d123a6'
  }, {
    id: '97ec1dba-0fca-399a-971e-9a51b923e989',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Colbert County, Alabama',
    latitude: 34.73638,
    longitude: -87.59561,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 5,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Colbert_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '51335878ca8d2276027e97dc9957ab9d'
  }, {
    id: 'f7b54b93-5a9f-3c34-899f-62fe4f2495de',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Conecuh County, Alabama',
    latitude: 31.46714,
    longitude: -87.04464,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Conecuh_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '8e2f5bcc36efeb53a174979103e9a3e6'
  }, {
    id: 'fad453c3-f540-3f5b-a8db-fdac44aacdc3',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Coosa County, Alabama',
    latitude: 32.92921,
    longitude: -86.26081,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 6,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Coosa_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '3ccc194192cd7f04a9d7ec90c0002cfe'
  }, {
    id: '84cb4f34-030c-349f-8d27-248889400ec8',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Covington County, Alabama',
    latitude: 31.26102,
    longitude: -86.44469,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Covington_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'ca44cc9de34d9fd68a1a540d8dd92e92'
  }, {
    id: '314e78f3-45db-3aca-a3e3-0533f572ad89',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Crenshaw County, Alabama',
    latitude: 31.74577,
    longitude: -86.32374,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Crenshaw_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '96f8be6753733997c8239f2863fbe8d8'
  }, {
    id: 'fb8afd57-9eab-3cad-b93f-12587e7f725d',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Cullman County, Alabama',
    latitude: 34.08588,
    longitude: -86.80095,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 14,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Cullman_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '0deac4a0500288dfa2ff1c6077fd4afb'
  }, {
    id: '28c6aa89-ebb1-3668-b1fc-d8794e8e2ab4',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Dale County, Alabama',
    latitude: 31.4079,
    longitude: -85.6033,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Dale_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '712406df4fcf9a8a437067968812a622'
  }, {
    id: '60d4cd92-91f3-38c9-abed-b16546af627a',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Dallas County, Alabama',
    latitude: 32.38799,
    longitude: -87.14006,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Dallas_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'e6fb887875b7d810f82cece691937d30'
  }, {
    id: '173d9679-189c-3e0f-8f94-3dd67c8e3e69',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'DeKalb County, Alabama',
    latitude: 34.52982,
    longitude: -85.81614,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 10,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'DeKalb_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'a1bd26ff0bc0ab67c37e726191ccdc2e'
  }, {
    id: 'c4ad7d04-d50c-322a-bc20-4f5f9979bafa',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Elmore County, Alabama',
    latitude: 32.58757,
    longitude: -86.1333,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 18,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Elmore_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '1fdace681a9994552f11ecfa40b34eaa'
  }, {
    id: 'e0b66bfb-4ad9-34d8-916f-b4c1545e5ac3',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Escambia County, Alabama',
    latitude: 31.1284,
    longitude: -87.15194,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Escambia_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '4382846735e1d2b8987a3b6e34734fbb'
  }, {
    id: '43fb61b5-7d8c-3bf5-9fba-07d23f215741',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Etowah County, Alabama',
    latitude: 34.02113,
    longitude: -86.05351,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 15,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Etowah_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '2b7ccc9bc0690ac2ddc25a4145a6ced9'
  }, {
    id: '19aa41ce-5976-3c12-a559-4f06de261191',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Fayette County, Alabama',
    latitude: 33.71988,
    longitude: -87.6879,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Fayette_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'aeb6358eab9eabeba46c635f24ee9140'
  }, {
    id: 'fc3f87f7-7d44-36ac-a6c6-b8141afec933',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Franklin County, Alabama',
    latitude: 34.44324,
    longitude: -87.85165,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Franklin_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '94369cd5664b13b93225ad29adeef8a0'
  }, {
    id: '3f00acce-25bd-31c8-92b4-799d42a28757',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Geneva County, Alabama',
    latitude: 31.09642,
    longitude: -85.83932,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 0,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Geneva_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'e62208aa9ae5e323dd722eef5f5e1066'
  }, {
    id: '3726930b-99b1-3b33-905e-b90d6a61692f',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Greene County, Alabama',
    latitude: 32.83585,
    longitude: -87.95635,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 5,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Greene_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '7198e291897cffe741f9f80a1a722c0f'
  }, {
    id: 'faf93a39-f787-3dd6-9b5f-e6b58bee0133',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Hale County, Alabama',
    latitude: 32.74381,
    longitude: -87.64552,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Hale_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '351242f5cb73a16710a5ea867dd38d4e'
  }, {
    id: 'ddbb6822-79ca-3cf7-81f2-511705c52b97',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Henry County, Alabama',
    latitude: 31.54105,
    longitude: -85.22955,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 0,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Henry_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '6458c33b1f9d82ad6bec2e12e4511e93'
  }, {
    id: '1d1ecb44-6c82-341b-819b-b34cb8fa5b4c',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Houston County, Alabama',
    latitude: 31.15596,
    longitude: -85.35591,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 11,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Houston_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '20910aa784850b384530f4f316c957df'
  }, {
    id: '24fc1696-a026-3e5f-bc72-bf218024a144',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Jackson County, Alabama',
    latitude: 34.72778,
    longitude: -85.97115,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 12,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Jackson_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '9f02992736c51f11d3eb22a7b688505d'
  }, {
    id: '00bd26ad-821d-3abd-861a-42fb9c237d24',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Jefferson County, Alabama',
    latitude: 33.54448,
    longitude: -86.9292,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 345,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Jefferson_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '5739115715feb6cfca4b49f0c779bee8'
  }, {
    id: 'fc779a9d-a7e1-3491-a07e-f15b83e34ca1',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Lamar County, Alabama',
    latitude: 33.79147,
    longitude: -88.11022,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Lamar_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'ed9a383ec4385ddc91bc4fb04763b6f3'
  }, {
    id: '9a080ffe-18af-32e4-ac9f-7ab4a0f2f816',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Lauderdale County, Alabama',
    latitude: 34.86992,
    longitude: -87.70666,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 13,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Lauderdale_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '54ac91661ab493c7834d22e2d6d1250a'
  }, {
    id: '9ebb5d60-bb0f-3dd0-bbf1-d8bed67c0990',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Lawrence County, Alabama',
    latitude: 34.55201,
    longitude: -87.31825,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Lawrence_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '48c77846a72ddc9507e0b458509fe2fb'
  }, {
    id: 'e61271a6-c4dd-3eae-8f9c-e62c2432a595',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Lee County, Alabama',
    latitude: 32.57819,
    longitude: -85.34894,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 97,
    totalDeaths: 2,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Lee_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '2665b233c5c4092d108a034aa62fe596'
  }, {
    id: 'e366ac0f-e062-3807-8ebf-4e4daf7ee02c',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Limestone County, Alabama',
    latitude: 34.77504,
    longitude: -87.03236,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 26,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Limestone_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'b685338cfc9d4cfe9db875026ee519d0'
  }, {
    id: '8dfd8ec1-31fb-3b39-8acb-14505f8cce73',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Lowndes County, Alabama',
    latitude: 32.18431,
    longitude: -86.65243,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Lowndes_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '014ec7cedf31ffeb697c41225fd6c839'
  }, {
    id: 'bc8c0005-956e-3364-ac65-f7a2265ecfba',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Macon, Alabama',
    latitude: 32.4139,
    longitude: -85.72846,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 5,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Macon,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '3433c89192102177725a8095a408bd28'
  }, {
    id: '50d3b905-9095-3f0e-bd3c-f11fcb1783f3',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Madison County, Alabama',
    latitude: 34.73392,
    longitude: -86.52295,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 119,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Madison_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '5196ca064ada8e4bf642e1a9baa4570a'
  }, {
    id: 'afad8ab0-8117-3b26-ba9f-1bfab07374b4',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Marengo County, Alabama',
    latitude: 32.26852,
    longitude: -87.79526,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 7,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Marengo_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '53166dfe18f78edeebebf155212b0518'
  }, {
    id: '75689496-b606-325f-b3a1-b5b57a92225c',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Marion County, Alabama',
    latitude: 34.11785,
    longitude: -87.92081,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 13,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Marion_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '5a1f2372194bef03bd01aa9da438fcaa'
  }, {
    id: '17a124ca-6020-3b0c-a2d3-f08abfed6213',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Marshall County, Alabama',
    latitude: 34.34962,
    longitude: -86.31986,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 15,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Marshall_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'd72542e15a37de8ad0cb97a1e395043e'
  }, {
    id: 'c0d809df-e64e-3ad2-865c-32a848ebcb72',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Mobile County, Alabama',
    latitude: 30.70034,
    longitude: -88.17812,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 84,
    totalDeaths: 4,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Mobile_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '5f03e0239c83d6f53b9e111f54505b13'
  }, {
    id: 'ae7ddc0c-5475-3d99-8272-fc13c768eaf8',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Monroe County, Alabama',
    latitude: 31.5291,
    longitude: -87.34523,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Monroe_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'c0507a92e8446ed7d6ae03c0d3b5b625'
  }, {
    id: '28f98973-88b7-32f0-b83a-176448066fcf',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Montgomery County, Alabama',
    latitude: 32.23342,
    longitude: -86.20862,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 52,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Montgomery_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'fc42790a0bf3093a5aba63b01f23586e'
  }, {
    id: '1455cb2d-d8b5-3f67-b1c9-eb5f41c4c890',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Morgan County, Alabama',
    latitude: 34.49531,
    longitude: -86.83024,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 23,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Morgan_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'c912a3d93f51fb76fe1744f6aca14818'
  }, {
    id: '6d2eb26a-c141-384f-b1c9-b1e43c2e928c',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Perry County, Alabama',
    latitude: 32.5912,
    longitude: -87.27166,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 0,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Perry_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '348ffcbe99a3606ef95778c5f6738997'
  }, {
    id: '01b54aa2-4589-3a57-abb3-884fe88ea851',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Pickens County, Alabama',
    latitude: 33.26278,
    longitude: -88.08869,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 9,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Pickens_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'f27ab286a23fa10294c895d1cba6cbf5'
  }, {
    id: 'b1dcd8c4-7c38-3a2e-9402-6e18d65b9dca',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Pike County, Alabama',
    latitude: 31.83908,
    longitude: -85.92852,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 10,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Pike_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '305a0b2da81bf82a36855edefb8beaa4'
  }, {
    id: 'a68fe64c-3f99-30c6-9a07-515068280ddf',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Randolph County, Alabama',
    latitude: 33.304,
    longitude: -85.44331,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 9,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Randolph_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '930cd3597c2350242752c7ee2b7c2aca'
  }, {
    id: 'dfbbd7f3-479a-3f37-8d59-db1c8e89e878',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Russell County, Alabama',
    latitude: 32.28585,
    longitude: -85.16153,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Russell_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '49ecdb290ab7810af97ae5d9353c2cc2'
  }, {
    id: '113b1f16-d17a-3cf1-b525-386f1af2271f',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Shelby County, Alabama',
    latitude: 33.2824,
    longitude: -86.68359,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 104,
    totalDeaths: 3,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Shelby_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '3d14de9ffc1e063b03810721cf17b389'
  }, {
    id: '35b27272-cb17-342c-98ce-900246bd39f8',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'St. Clair County, Alabama',
    latitude: 33.69021,
    longitude: -86.31076,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 22,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'St._Clair_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'd7254532adea9b2a346ed9b621de71b6'
  }, {
    id: '61fe3414-ae68-37b9-be10-39ef511aa8d7',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Sumter County, Alabama',
    latitude: 32.65149,
    longitude: -88.13106,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 7,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Sumter_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'e3a9b7faea716a481da18262ba19ad67'
  }, {
    id: '8c6c5be7-0671-3d6a-9106-68c8ec53c2a7',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Talladega County, Alabama',
    latitude: 33.40126,
    longitude: -86.14896,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 11,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Talladega_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '23300529b55d787822cd0b7361ee2fc0'
  }, {
    id: '950093c3-0628-3c0a-9972-f703730d8429',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Tallapoosa County, Alabama',
    latitude: 32.79993,
    longitude: -85.80335,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 18,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Tallapoosa_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '07e8a9956b8bb32553f17aa97c0e536e'
  }, {
    id: 'cae35198-7d81-3a1b-b4bd-9bfd06636de3',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Tuscaloosa County, Alabama',
    latitude: 33.30667,
    longitude: -87.45317,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 41,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Tuscaloosa_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '628f40d4370ffb6a766eddeaab4c85e5'
  }, {
    id: '46a7f4a8-85a0-3c55-ab55-e076340aecd4',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Walker County, Alabama',
    latitude: 33.75914,
    longitude: -87.29501,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 48,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Walker_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '0f3218584ce9c67fa8fbd8cba917e67c'
  }, {
    id: 'bfedb847-a98f-3ded-878e-5c662ddedf5a',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Washington County, Alabama',
    latitude: 31.40602,
    longitude: -88.17585,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Washington_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '71166edd2e7ae2e306f8d415bdb5c843'
  }, {
    id: '7efa42ab-38af-3c3e-b581-9312525a008e',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Wilcox County, Alabama',
    latitude: 32.04816,
    longitude: -87.26157,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 5,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Wilcox_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'f0484de2735469c614c84a49ab8602b1'
  }, {
    id: '5bbfbd9f-2cf2-31b6-8726-3f930e836351',
    type: 'healthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Winston County, Alabama',
    latitude: 34.14589,
    longitude: -87.3733,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Winston_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '71c9e63b89a22315f4f249848cab712b'
  }];
  _exports.default = _default;
});
;define("covid-19-dashboard/mirage/fixtures/latest-health-records", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = [{
    id: 'ba130f87-cd92-3d0b-be82-2dca3c7a3561',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Earth',
    latitude: 0,
    longitude: 0,
    numActiveCases: null,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: null,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1076017,
    totalDeaths: 58004,
    totalRecoveredCases: null,
    totalTestedCases: 0,
    wikiId: 'Earth'
  }, {
    id: '91754e48-4f43-3381-a120-6b0c12fe5acc',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Afghanistan',
    latitude: 33.93045,
    longitude: 67.67894,
    numActiveCases: 265,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 281,
    totalDeaths: 6,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Afghanistan',
    countryId: '6e9767f4f15357401b148b9a8ced14ef'
  }, {
    id: '6c49c672-2cdb-3d06-8e18-c5344de057d3',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Albania',
    latitude: 41.15265,
    longitude: 20.17001,
    numActiveCases: 198,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 304,
    totalDeaths: 17,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Albania',
    countryId: 'c420ddff824a5c0eec70dd23d62496bc'
  }, {
    id: '5b71f16d-c621-36a4-a222-8b10705db5c4',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Algeria',
    latitude: 28.02688,
    longitude: 1.65284,
    numActiveCases: 1004,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1171,
    totalDeaths: 105,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Algeria',
    countryId: '575b9408b6daa2ddcefbcf6d81c9b4c9'
  }, {
    id: 'd66c534c-c366-3148-9b0a-af5b207332c4',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Andorra',
    latitude: 42.54237,
    longitude: 1.60021,
    numActiveCases: 407,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 439,
    totalDeaths: 16,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Andorra',
    countryId: '68746a7280b143cfc01f967610d3e86d'
  }, {
    id: '0dd71cf9-7035-3cfd-ae92-3db5cd62e127',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Angola',
    latitude: -11.94184,
    longitude: 17.90721,
    numActiveCases: 5,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 8,
    totalDeaths: 2,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Angola',
    countryId: '232bf11cb81bcdb269f76a08fde8b947'
  }, {
    id: '93b97f3a-07a7-3e56-94c5-c08e8be3c489',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Antigua and Barbuda',
    latitude: 17.08602,
    longitude: -61.78942,
    numActiveCases: 9,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 9,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Antigua_and_Barbuda',
    countryId: '79f96d084a36450dd126ddb451f53c90'
  }, {
    id: 'c138bd39-456a-39ee-843c-d57707143a45',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Argentina',
    latitude: -37.0907,
    longitude: -63.5848,
    numActiveCases: 960,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1265,
    totalDeaths: 39,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Argentina',
    countryId: '3536be57ce0713954e454ae6c53ec023'
  }, {
    id: '700c608c-b95e-385c-a956-0cbd84935637',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Armenia',
    latitude: 40.06617,
    longitude: 45.03989,
    numActiveCases: 686,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 736,
    totalDeaths: 7,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Armenia',
    countryId: 'a00c273f0f497484093fa94865cf5ca5'
  }, {
    id: '6a445b08-e77a-3325-80e4-ddefe49166f0',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Australia',
    latitude: -24.9121,
    longitude: 133.398,
    numActiveCases: 4653,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 5330,
    totalDeaths: 28,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Australia',
    countryId: '4442e4af0916f53a07fb8ca9a49b98ed'
  }, {
    id: '46eaa272-7c00-3f79-8488-c9169f62ddc1',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Austria',
    latitude: 47.69651,
    longitude: 13.34577,
    numActiveCases: 9316,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 11506,
    totalDeaths: 168,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Austria',
    countryId: '9891739094756d2605946c867b32ad28'
  }, {
    id: 'ac5f37ac-2511-3133-9673-8f8925df5f24',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Azerbaijan',
    latitude: 40.15134,
    longitude: 47.68707,
    numActiveCases: 406,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 443,
    totalDeaths: 5,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Azerbaijan',
    countryId: '7176f8c3bccfdf02322c73f7a0bc9688'
  }, {
    id: '10269402-8eaa-369c-a4a2-512104c364d3',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Bahrain',
    latitude: 26.02475,
    longitude: 50.5485,
    numActiveCases: 286,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 672,
    totalDeaths: 4,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Bahrain',
    countryId: '6ddecd8ccd9f648d19dc02c7a566cb4f'
  }, {
    id: '2acb8571-0643-3bc2-bfc8-ff446b6076e7',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Bangladesh',
    latitude: 23.68745,
    longitude: 90.3509,
    numActiveCases: 29,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 61,
    totalDeaths: 6,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Bangladesh',
    countryId: 'f78a77f631d275aac6a914a17fe1b885'
  }, {
    id: '4b97ce5b-8206-399a-b8ce-ab255d041c0d',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Barbados',
    latitude: 13.18355,
    longitude: -59.53465,
    numActiveCases: 51,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 51,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Barbados',
    countryId: '3214c0f21d200a1dae4eb83a53ec2730'
  }, {
    id: 'ae6e71e5-0dad-3083-b18d-2dcb15fd6c6d',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Belarus',
    latitude: 53.71105,
    longitude: 27.97375,
    numActiveCases: 294,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 351,
    totalDeaths: 4,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Belarus',
    countryId: '6542f875eaa09a5c550e5f3986400ad9'
  }, {
    id: '3a7519b3-d432-3eb4-81c5-ea8180ffdda4',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Belgium',
    latitude: 50.50101,
    longitude: 4.47684,
    numActiveCases: 12755,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 16770,
    totalDeaths: 1143,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Belgium',
    countryId: '6c1674d14bf5f95742f572cddb0641a7'
  }, {
    id: '7af95c59-b73b-32f4-a00c-fca9a7dc7516',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Belize',
    latitude: 17.19292,
    longitude: -88.65284,
    numActiveCases: 4,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Belize',
    countryId: '20bca6785240fa722edb5c85d055a93d'
  }, {
    id: '2d4db1ff-92bc-3a57-8de0-9088a8e4fad3',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Benin',
    latitude: 9.32204,
    longitude: 2.31313,
    numActiveCases: 12,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 13,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Benin',
    countryId: '9e7002d53d4db7bfad4f5cf419b0c126'
  }, {
    id: '2dd016f4-a3d1-35f7-96b5-be9cbd24aae2',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Bhutan',
    latitude: 27.5155,
    longitude: 90.44227,
    numActiveCases: 3,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 5,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Bhutan',
    countryId: 'e65a0ed0e39dd14a9e5af441efb09b37'
  }, {
    id: '7fcbf347-4efe-306c-81c5-20a37ade25d3',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Bolivia',
    latitude: -16.28835,
    longitude: -63.54942,
    numActiveCases: 122,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 132,
    totalDeaths: 9,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Bolivia',
    countryId: '28aaafc355915903ce4a7e1d3af3bc4e'
  }, {
    id: '9bf8911a-1ca1-3c55-89e6-121c375ec8b3',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Bosnia and Herzegovina',
    latitude: 43.9201,
    longitude: 17.67696,
    numActiveCases: 531,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 575,
    totalDeaths: 17,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Bosnia_and_Herzegovina',
    countryId: 'c758f309604eaea62c3c519cb2d6d5e3'
  }, {
    id: '09fd6f3a-fa44-3b75-b48c-82b578c8ed55',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Botswana',
    latitude: -22.34403,
    longitude: 24.68016,
    numActiveCases: 3,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Botswana',
    countryId: '6cd50fb3091b0a9d3c1ac2cf52441390'
  }, {
    id: 'db1ab067-56dd-33f3-b130-f14a09334797',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Brazil',
    latitude: -14.2429,
    longitude: -54.3878,
    numActiveCases: 7759,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 8229,
    totalDeaths: 343,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Brazil',
    countryId: '42537f0fb56e31e20ab9c2305752087d'
  }, {
    id: '37129728-4e6c-348b-9f0a-5f0945d229d9',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Brunei',
    latitude: 4.52513,
    longitude: 114.59897,
    numActiveCases: 68,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 134,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Brunei',
    countryId: 'd3f5841f04ba23bb90e1b9f4256cea70'
  }, {
    id: 'f3eee161-9c48-31a3-995b-ef833b4adbfd',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Bulgaria',
    latitude: 42.7316,
    longitude: 25.48312,
    numActiveCases: 441,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 485,
    totalDeaths: 14,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Bulgaria',
    countryId: '01a151debf2bfee8906f43f4342eb10b'
  }, {
    id: 'ffafc9a7-3ab9-301b-8984-64eb8b79adad',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Burkina Faso',
    latitude: 12.24184,
    longitude: -1.55676,
    numActiveCases: 236,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 302,
    totalDeaths: 16,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Burkina_Faso',
    countryId: 'dfc4327c51fe1e82827c1eb7b0d23a42'
  }, {
    id: 'a27a2efd-3795-394a-ba98-2bbadf4226af',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Burundi',
    latitude: -3.38791,
    longitude: 29.92039,
    numActiveCases: 3,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Burundi',
    countryId: '28765464efe1b6583610335965b4d75a'
  }, {
    id: '4f36bc11-feca-38dc-ab72-70f5db3f08a8',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Cambodia',
    latitude: 12.54773,
    longitude: 104.98386,
    numActiveCases: 79,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 114,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Cambodia',
    countryId: '06c7a3c3a3344a62864b951aec4df830'
  }, {
    id: 'a024f18c-c36a-36bc-ad1f-89285ad11346',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Cameroon',
    latitude: 7.36529,
    longitude: 12.34344,
    numActiveCases: 289,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 306,
    totalDeaths: 7,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Cameroon',
    countryId: '4be25f9d27da71d4e98775668b5b12af'
  }, {
    id: '2ece857d-4b0e-3906-a2fb-9999f8a04978',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Canada',
    latitude: 56.95468,
    longitude: -98.30897,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 11746,
    totalDeaths: 153,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Canada',
    countryId: '445d337b5cd5de476f99333df6b0c2a7'
  }, {
    id: '03c50a64-089e-3056-a89f-a454d7c11dd6',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Cape Verde',
    latitude: 15.1123,
    longitude: -23.61476,
    numActiveCases: 5,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 6,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Cape_Verde',
    countryId: 'a290b08603974f521042309b441b5aeb'
  }, {
    id: '0cb71349-09d7-3cb0-93c3-87bacfbfc980',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Chad',
    latitude: 15.4603,
    longitude: 18.73877,
    numActiveCases: 8,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 8,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Chad',
    countryId: 'e03653dedd6f4e142f4aca131995964f'
  }, {
    id: '1f48355e-ee9d-31e5-9fc2-dd60e2ae343f',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Chile',
    latitude: -35.70522,
    longitude: -71.34109,
    numActiveCases: 3288,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3737,
    totalDeaths: 22,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Chile',
    countryId: '2e6507f70a9cc26fb50f5fd82a83c7ef'
  }, {
    id: '8050487d-2372-385a-9134-a03f6032daec',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'China',
    latitude: 36.8944,
    longitude: 104.166,
    numActiveCases: 2423,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 82509,
    totalDeaths: 3326,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'China',
    countryId: 'ae54a5c026f31ada088992587d92cb3a'
  }, {
    id: '501e00ff-e71f-3a43-808c-deed478e1b0c',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Colombia',
    latitude: 4.11641,
    longitude: -72.95853,
    numActiveCases: 1087,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1161,
    totalDeaths: 19,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Colombia',
    countryId: 'ef3388cc5659bccb742fb8af762f1bfd'
  }, {
    id: '513468d5-1747-315c-be60-5beb2c76d893',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Costa Rica',
    latitude: 9.62489,
    longitude: -84.25331,
    numActiveCases: 388,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 396,
    totalDeaths: 2,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Costa_Rica',
    countryId: 'e226fbb7731da90173e60cdd1704481c'
  }, {
    id: 'bd12eade-9308-3e37-8bd0-d0e29f53bb01',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Croatia',
    latitude: 44.74671,
    longitude: 15.3408,
    numActiveCases: 979,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1079,
    totalDeaths: 8,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Croatia',
    countryId: '560d4c6ff431c86546f3fcec72c748c7'
  }, {
    id: 'ff0b9a8d-1cb7-3a51-98f7-a31b301ac030',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Cuba',
    latitude: 21.51102,
    longitude: -77.80679,
    numActiveCases: 248,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 269,
    totalDeaths: 6,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Cuba',
    countryId: '33cac763789c407f405b2cf0dce7df89'
  }, {
    id: 'a3f05d5d-4914-37e7-9def-df6178833901',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Cyprus',
    latitude: 35.13252,
    longitude: 33.4355,
    numActiveCases: 357,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 396,
    totalDeaths: 11,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Cyprus',
    countryId: 'ea2ba3f8011e19e3101ce65fdcefbcc4'
  }, {
    id: 'd6c5b87d-d601-3d5c-92dc-77ff01f07c85',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Czech Republic',
    latitude: 49.80388,
    longitude: 15.47491,
    numActiveCases: 3966,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4091,
    totalDeaths: 53,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Czech_Republic',
    countryId: '12a4359f3d8a4a2db61f4d040edb73ed'
  }, {
    id: 'ef02768e-e205-3b74-a48c-045973fcf519',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Denmark',
    latitude: 56.27609,
    longitude: 9.51695,
    numActiveCases: 2520,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3946,
    totalDeaths: 139,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Denmark',
    countryId: '424214945ba5615eca039bfe5d731c09'
  }, {
    id: 'cc517963-7fc5-3ea0-b520-663fadfe163e',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Djibouti',
    latitude: 11.80837,
    longitude: 42.59521,
    numActiveCases: 41,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 49,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Djibouti',
    countryId: '902f92c09660b797958acb27421fd9ac'
  }, {
    id: 'f2b93251-fc8f-3b84-b772-7db8e170adfe',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Dominica',
    latitude: 15.41674,
    longitude: -61.36413,
    numActiveCases: 12,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 12,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Dominica',
    countryId: '531c552093668f148d3c826fca6e3cc8'
  }, {
    id: '793fd052-2384-3b13-ba30-fd3585edc7d6',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Dominican Republic',
    latitude: 18.7679,
    longitude: -70.16174,
    numActiveCases: 1404,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1488,
    totalDeaths: 68,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Dominican_Republic',
    countryId: '1b44cfe344fa1ed289752f66791b7dd6'
  }, {
    id: '8a37c96d-5ce0-37d5-943c-7e52c2fa2c94',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'East Timor',
    latitude: -8.89403,
    longitude: 126.11955,
    numActiveCases: 1,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'East_Timor',
    countryId: 'c0fb49777c3f63b7bf4e61c7f7aa5144'
  }, {
    id: 'f4641a86-0724-322b-a00f-aa993630dc19',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Ecuador',
    latitude: -1.78156,
    longitude: -78.10667,
    numActiveCases: 3158,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3368,
    totalDeaths: 145,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Ecuador',
    countryId: '4d5d85af33ec2aaedb674d2d6a7d53b6'
  }, {
    id: '07c0a197-356f-3dd5-9297-e4b7d32b727c',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Egypt',
    latitude: 26.83709,
    longitude: 30.79639,
    numActiveCases: 606,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 865,
    totalDeaths: 58,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Egypt',
    countryId: 'e31959fe2842dacea4d16d36e9813620'
  }, {
    id: 'bf724215-9abb-3157-8414-a67859b7ba75',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'El Salvador',
    latitude: 13.79687,
    longitude: -88.91879,
    numActiveCases: 44,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 46,
    totalDeaths: 2,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'El_Salvador',
    countryId: '2636ae11dc797b834da1f78f47132ff1'
  }, {
    id: '9e80ef02-d8f5-3764-a40c-0786875111b5',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Equatorial Guinea',
    latitude: 1.63392,
    longitude: 10.34129,
    numActiveCases: 15,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 16,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Equatorial_Guinea',
    countryId: '93822d1b60a0942da695950bed9442ea'
  }, {
    id: '83c9b697-7644-3354-a621-a5f596e3ed8a',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Eritrea',
    latitude: 15.18132,
    longitude: 39.95086,
    numActiveCases: 22,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 22,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Eritrea',
    countryId: 'c9c9f116f74ac9d7e60dc415523dfeff'
  }, {
    id: '7487d3d0-6652-3acb-8d58-7523c2247d65',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Estonia',
    latitude: 58.59232,
    longitude: 25.80695,
    numActiveCases: 901,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 961,
    totalDeaths: 12,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Estonia',
    countryId: '7755415a9fe7022060b98a689236ccd2'
  }, {
    id: 'fba70532-38cd-322b-a960-4aef07242c42',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Swaziland',
    latitude: -26.51837,
    longitude: 31.46568,
    numActiveCases: 9,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 9,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Eswatini',
    countryId: '5b6c44e2e66685a59e42673eff6d5f17'
  }, {
    id: '123d6f81-4db3-31bd-9ba9-569794d147b1',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Ethiopia',
    latitude: 9.1473,
    longitude: 40.49305,
    numActiveCases: 32,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 35,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Ethiopia',
    countryId: 'e299d7cb0f7866cce7d90da2af14047c'
  }, {
    id: 'aa2fe83f-248f-32e7-8abb-457140cb50a0',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Fiji',
    latitude: -17.79099,
    longitude: 177.9734,
    numActiveCases: 7,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 7,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Fiji',
    countryId: '55b0c4d4efa00b59643b2e6a6e7c18c0'
  }, {
    id: '7c5a6f97-b637-352f-a105-bbb6cbfcd8c3',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Finland',
    latitude: 64.95014,
    longitude: 26.06739,
    numActiveCases: 1295,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1615,
    totalDeaths: 20,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Finland',
    countryId: '6f781c6559a0c605da918096bdb69edf'
  }, {
    id: 'be950425-7740-340b-8acc-6ff1f1c4f547',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'France',
    latitude: 46.71067,
    longitude: 1.71819,
    numActiveCases: 44528,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 65181,
    totalDeaths: 6518,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'France',
    countryId: '0309a6c666a7a803fdb9db95de71cf01'
  }, {
    id: '954454be-40e7-3d03-bb04-a9715f864e83',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Gabon',
    latitude: -0.82809,
    longitude: 11.59891,
    numActiveCases: 19,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 21,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Gabon',
    countryId: 'fceb5af40df295d85851f390f4f8d78d'
  }, {
    id: 'ee72c012-099d-37e6-9d21-8f82189f6563',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Georgia (country)',
    latitude: 42.31152,
    longitude: 43.36579,
    numActiveCases: 121,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 148,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Georgia_(country)',
    countryId: 'b3c6f07b0e6e5acb9e98e10378649de9'
  }, {
    id: 'e4bea167-8f79-391c-8020-4719461fc685',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Germany',
    latitude: 51.16418,
    longitude: 10.45415,
    numActiveCases: 64033,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 89838,
    totalDeaths: 1230,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Germany',
    countryId: 'd8b00929dec65d422303256336ada04f'
  }, {
    id: '9411f95d-ce6c-34fc-9dc0-a34511a5ee5d',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Ghana',
    latitude: 7.95501,
    longitude: -1.03182,
    numActiveCases: 169,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 205,
    totalDeaths: 5,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Ghana',
    countryId: 'e7400496f1ce70cb62c2c44ca2ddc469'
  }, {
    id: 'db3281aa-ef8b-37dd-9118-e161acbb8887',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Greece',
    latitude: 39.07245,
    longitude: 21.84556,
    numActiveCases: 1493,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1613,
    totalDeaths: 59,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Greece',
    countryId: '6b718641741f992e68ec3712718561b8'
  }, {
    id: '295d7457-57fd-3a12-b97f-15da79046f38',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Grenada',
    latitude: 12.11267,
    longitude: -61.69894,
    numActiveCases: 10,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 10,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Grenada',
    countryId: '45b1cb9a558807139085c645d2f47f07'
  }, {
    id: 'f3f65db6-6f7a-37c9-84cf-a6e15c9f2579',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Guatemala',
    latitude: 15.77625,
    longitude: -90.23231,
    numActiveCases: 37,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 50,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Guatemala',
    countryId: '948b13d5a3e11e21baadc349e199020e'
  }, {
    id: 'd8c22257-5c04-3204-87b4-78afff34859b',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Guinea',
    latitude: 9.93488,
    longitude: -9.66063,
    numActiveCases: 71,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 73,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Guinea',
    countryId: '8e4d9eeed250a9d065ac2bb8bdc67b30'
  }, {
    id: 'd6e2c50b-103f-3789-8bb1-061166aa0f2a',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Guinea-Bissau',
    latitude: 11.80252,
    longitude: -15.17702,
    numActiveCases: 9,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 9,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Guinea-Bissau',
    countryId: '2d65f5236205dd23c6a8212627568fb8'
  }, {
    id: '1230b54d-b04d-350a-9a3a-39392a4d8e11',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Guyana',
    latitude: 4.86632,
    longitude: -58.93826,
    numActiveCases: 15,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 19,
    totalDeaths: 4,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Guyana',
    countryId: 'cf4c7e1169281886577940e361854a84'
  }, {
    id: '6ed43a80-9be6-382f-a162-fc8b146b5c85',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Haiti',
    latitude: 18.98606,
    longitude: -72.29226,
    numActiveCases: 17,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 18,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Haiti',
    countryId: 'b88959cb7d907d91065ac7ec19eb0b44'
  }, {
    id: '687b745f-e67c-3316-826e-65fc8d9e7497',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Honduras',
    latitude: 14.50472,
    longitude: -86.2531,
    numActiveCases: 204,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 222,
    totalDeaths: 15,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Honduras',
    countryId: 'f4270ce39e7e926052e097a0e4e63bde'
  }, {
    id: '6052fbdb-76fa-392d-bfaf-08c5ffa90184',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Hungary',
    latitude: 47.16116,
    longitude: 19.50496,
    numActiveCases: 554,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 623,
    totalDeaths: 26,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Hungary',
    countryId: 'fa79c3005daec47ecff84a116a0927a1'
  }, {
    id: 'f80a15e9-626e-3578-8de0-072e58af6329',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Iceland',
    latitude: 64.96394,
    longitude: -19.02116,
    numActiveCases: 1051,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1364,
    totalDeaths: 4,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Iceland',
    countryId: 'b78edab0f52e0d6c195fd0d8c5709d26'
  }, {
    id: '542c9aa4-14f5-3409-9aea-5958affe25c3',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'India',
    latitude: 21.7866,
    longitude: 82.79476,
    numActiveCases: 2303,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2567,
    totalDeaths: 72,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'India',
    countryId: '7d31e0da1ab99fe8b08a22118e2f402b'
  }, {
    id: '8f0d38c2-897c-3e9a-a6fa-f2727534f982',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Indonesia',
    latitude: 0.10974,
    longitude: 113.9174,
    numActiveCases: 1671,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1986,
    totalDeaths: 181,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Indonesia',
    countryId: '4647d00cf81f8fb0ab80f753320d0fc9'
  }, {
    id: 'f362348b-0d23-3d2d-9055-c1a69fb52122',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Iran',
    latitude: 32.42065,
    longitude: 53.68236,
    numActiveCases: 31954,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 53183,
    totalDeaths: 3294,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Iran',
    countryId: '21fc68909a9eb8692e84cf64e495213e'
  }, {
    id: '21297d9a-9dc7-374a-8476-979e9837fc97',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Iraq',
    latitude: 33.24052,
    longitude: 43.68985,
    numActiveCases: 540,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 820,
    totalDeaths: 54,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Iraq',
    countryId: '5ae2ff99743a8487c917e98bbf3db2d3'
  }, {
    id: '1ea9be97-611a-3fe2-a714-8b5482ca6c99',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Israel',
    latitude: 31.3893,
    longitude: 35.36124,
    numActiveCases: 6652,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 7030,
    totalDeaths: 40,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Israel',
    countryId: '5a548c2f5875f10bf5614b7c258876cf'
  }, {
    id: '9025bd9a-6e24-35d7-a90e-e1a47eb409ff',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Italy',
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
    wikiId: 'Italy',
    countryId: '1007e1b7f894dfbf72a0eaa80f3bc57e'
  }, {
    id: '26a41625-3b95-31fa-851a-56484e766d0c',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Ivory Coast',
    latitude: 7.54685,
    longitude: -5.54709,
    numActiveCases: 178,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 194,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Ivory_Coast',
    countryId: '4413f999927923b7c6fd336d7cdbabeb'
  }, {
    id: '98cb42de-1d8e-3f4e-a193-14ed1e2820ae',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Japan',
    latitude: 37.4876,
    longitude: 139.83829,
    numActiveCases: 2040,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2617,
    totalDeaths: 63,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Japan',
    countryId: '53a577bb3bc587b0c28ab808390f1c9b'
  }, {
    id: 'e42f58ed-d918-3e01-9ea6-9e020f342848',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Jordan',
    latitude: 31.27946,
    longitude: 37.13068,
    numActiveCases: 247,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 310,
    totalDeaths: 5,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Jordan',
    countryId: '6ea1e24d60afddf388b06f8243c45b70'
  }, {
    id: '1e7a5516-aca7-3b60-abd7-1cf5d03e7ab6',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Kazakhstan',
    latitude: 48,
    longitude: 68,
    numActiveCases: 425,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 460,
    totalDeaths: 6,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Kazakhstan',
    countryId: '7c1a943bf29d2c753fb935e99428482c'
  }, {
    id: 'c44532ae-c4ee-356a-b590-132221a662b8',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Kenya',
    latitude: -0.02435,
    longitude: 37.90395,
    numActiveCases: 114,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 122,
    totalDeaths: 4,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Kenya',
    countryId: '94984a8c4896946d9bafd24959cb6181'
  }, {
    id: '4e64fc0a-6899-3c63-9912-a359b6a9cd2f',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Kuwait',
    latitude: 29.31015,
    longitude: 47.49445,
    numActiveCases: 335,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 417,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Kuwait',
    countryId: '05387f3ca38d7bd84ae35f31f2899ecf'
  }, {
    id: '47382c14-fdde-33f7-9279-5db0920ad488',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Kyrgyzstan',
    latitude: 41.20554,
    longitude: 74.7799,
    numActiveCases: 123,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 130,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Kyrgyzstan',
    countryId: '5e4a24f76c22f03700b283dfbdf6eec1'
  }, {
    id: '92bf6cc7-f0e1-31c3-9fce-c1302282e838',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Laos',
    latitude: 18.20521,
    longitude: 105.45118,
    numActiveCases: 10,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 10,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Laos',
    countryId: '601aebf4afb1db3fdb5c88f3cdda23ef'
  }, {
    id: '097e6b8d-1248-33e1-bda1-0eef9d27cd34',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Latvia',
    latitude: 56.88011,
    longitude: 24.60524,
    numActiveCases: 491,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 493,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Latvia',
    countryId: 'a09f4b2ae67f0a63ab8912047a1a1b55'
  }, {
    id: '26f3a6c5-788a-3db6-ba3f-3ab3219c5e7b',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Lebanon',
    latitude: 33.8708,
    longitude: 35.86324,
    numActiveCases: 441,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 508,
    totalDeaths: 17,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Lebanon',
    countryId: 'b45ff92cc522bb89bfc3b8ef3fc21b7d'
  }, {
    id: 'f2983a88-5975-35ac-bca6-e455d85d2b49',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Liberia',
    latitude: 6.45242,
    longitude: -9.42859,
    numActiveCases: 7,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 7,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Liberia',
    countryId: '642cab67fc263bb61ae4ccbd577c8aa4'
  }, {
    id: '3adc10f9-1466-3da2-82d8-a21b686e6c7a',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Libya',
    latitude: 26.33852,
    longitude: 17.26882,
    numActiveCases: 10,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 11,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Libya',
    countryId: '742b8abe5776a6d942a92ce7dc7d84a0'
  }, {
    id: 'a546fec5-d681-3ca7-92e3-971b9b2b8546',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Liechtenstein',
    latitude: 47.1595,
    longitude: 9.5538,
    numActiveCases: 75,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 75,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Liechtenstein',
    countryId: 'da4e3775bd2de6c37fadd9b0188f7a4e'
  }, {
    id: 'b7a2c4a8-9b7f-3d44-8bc3-081d01eda311',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Lithuania',
    latitude: 55.17396,
    longitude: 23.89439,
    numActiveCases: 680,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 696,
    totalDeaths: 9,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Lithuania',
    countryId: 'd9051e0b77f8bb5521389618e70e2ada'
  }, {
    id: 'df833c1a-7188-3a7e-aafb-7894aa274f76',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Luxembourg',
    latitude: 49.81522,
    longitude: 6.13348,
    numActiveCases: 2081,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2612,
    totalDeaths: 31,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Luxembourg',
    countryId: '06630c890abadde9228ea818ce52b621'
  }, {
    id: '804ac8f5-8b6b-3708-ac17-902da1f92420',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Madagascar',
    latitude: -18.77718,
    longitude: 46.85432,
    numActiveCases: 65,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 65,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Madagascar',
    countryId: 'b5bcce260d9e303ca0e63f055187ed28'
  }, {
    id: '0e133a7b-1b64-3455-9105-25133e0f67c8',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Malawi',
    latitude: -13.24707,
    longitude: 34.29471,
    numActiveCases: 3,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Malawi',
    countryId: '70965feb0441ff7fc1982fc5c509136e'
  }, {
    id: '15eb97fe-6506-3aff-9859-2075ee7c7cca',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Malaysia',
    latitude: 3.94515,
    longitude: 114.40166,
    numActiveCases: 2453,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3333,
    totalDeaths: 53,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Malaysia',
    countryId: '3f0e49c46cbde0c7adf5ea04a97ab261'
  }, {
    id: '1ad14bcb-bc0a-3617-b4b2-0581d46193b9',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Maldives',
    latitude: 6.75785,
    longitude: 73.15476,
    numActiveCases: 6,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 19,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Maldives',
    countryId: '62235142f3fca96e1f2cd0ed4a7de48d'
  }, {
    id: '5194497c-bd14-3939-bce0-f520258f3ef6',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Mali',
    latitude: 17.57975,
    longitude: -3.99883,
    numActiveCases: 33,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 36,
    totalDeaths: 3,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Mali',
    countryId: 'e90c93ceb8ccdcdf3b797f47edee866d'
  }, {
    id: '3d249029-2ef5-324e-ada6-78682a3bd719',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Malta',
    latitude: 35.90209,
    longitude: 14.44812,
    numActiveCases: 200,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 202,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Malta',
    countryId: '92468e8a62373add2b9caefddbcf1303'
  }, {
    id: 'bcaa1f8f-61c9-3c9e-8aaa-bed4d6226cb8',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Mauritania',
    latitude: 21.00681,
    longitude: -10.95086,
    numActiveCases: 3,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 6,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Mauritania',
    countryId: 'd7fe73b6846dfc672236e636aa2cf6b5'
  }, {
    id: '49bc6359-25eb-38cf-9bbf-aff418116772',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Mauritius',
    latitude: -20.25541,
    longitude: 57.55174,
    numActiveCases: 179,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 186,
    totalDeaths: 7,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Mauritius',
    countryId: '07f3ca235faaa1c9ad16facef5526d8b'
  }, {
    id: '5efde8c9-e860-3d2a-bb31-3cdf8d747fd1',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Mexico',
    latitude: 23.62574,
    longitude: -101.95625,
    numActiveCases: 827,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1510,
    totalDeaths: 50,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Mexico',
    countryId: '8dbb07a18d46f63d8b3c8994d5ccc351'
  }, {
    id: '53f5344b-f8d7-3989-8e71-aa8e382db5a5',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Moldova',
    latitude: 46.97933,
    longitude: 28.39131,
    numActiveCases: 557,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 591,
    totalDeaths: 8,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Moldova',
    countryId: '0c12f5495afe76d9242ed25668979de9'
  }, {
    id: '0710df8f-5ea1-3295-8793-017c4e6db221',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Monaco',
    latitude: 43.73835,
    longitude: 7.42429,
    numActiveCases: 60,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 64,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Monaco',
    countryId: 'd6a297c6193fd59309453a0db7a51b90'
  }, {
    id: '589f3c84-5b19-3117-a876-8f3523ca7985',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Mongolia',
    latitude: 46.8608,
    longitude: 103.83681,
    numActiveCases: 12,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 14,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Mongolia',
    countryId: 'bb6a72b6a93150d4181e50496fc15f5a'
  }, {
    id: 'ecf80702-6e0a-3a61-88fd-63301c21e312',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Montenegro',
    latitude: 42.69755,
    longitude: 19.43227,
    numActiveCases: 171,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 174,
    totalDeaths: 2,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Montenegro',
    countryId: '4e92f9d2cdf0b8eb493ae3a19709d121'
  }, {
    id: 'a9380fc3-43cf-3426-8d91-10fede4943b9',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Morocco',
    latitude: 31.4342,
    longitude: -6.40245,
    numActiveCases: 658,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 761,
    totalDeaths: 47,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Morocco',
    countryId: '4d4a1722d8e85909a576da2c42878ff0'
  }, {
    id: 'f5207cee-f1b4-319f-b54b-d89601898f60',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Mozambique',
    latitude: -18.67028,
    longitude: 35.53015,
    numActiveCases: 10,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 10,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Mozambique',
    countryId: 'a6d3bea3fa66775952e080b90bb0c4f1'
  }, {
    id: '0c4e1fe1-9625-31b1-856d-fb0e6231c3f5',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Myanmar',
    latitude: 19.25796,
    longitude: 96.683,
    numActiveCases: 19,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 20,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Myanmar',
    countryId: '217fa54cc9351504fcde32147bff005d'
  }, {
    id: '70875e4f-dd1a-3d4b-94b9-7787e092b2af',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Namibia',
    latitude: -22.96566,
    longitude: 18.48617,
    numActiveCases: 11,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 14,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Namibia',
    countryId: '69f4287626aee77f93e2c891b518838b'
  }, {
    id: 'a5b38f8f-c6a8-3475-bcca-41d43fe3d0da',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Nepal',
    latitude: 28.39475,
    longitude: 84.12777,
    numActiveCases: 5,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 6,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Nepal',
    countryId: '7fef6b003c726890ea5ca3708fe8ff56'
  }, {
    id: '4af81724-a92d-36bc-8b9c-4f79e4214cd0',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Netherlands',
    latitude: 52.1082,
    longitude: 5.32986,
    numActiveCases: 14071,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 15821,
    totalDeaths: 1490,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Netherlands',
    countryId: 'a67d4cbdd1b59e0ffccc6bafc83eb033'
  }, {
    id: 'aae4176a-3f4a-310a-b9c0-dafff808279a',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'New Zealand',
    latitude: -43.58678,
    longitude: 170.37099,
    numActiveCases: 764,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 868,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'New_Zealand',
    countryId: '23113b12a9d8135100497751756d4bee'
  }, {
    id: '5317e1f2-558d-3ab4-961f-80c7bd520f42',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Nicaragua',
    latitude: 12.86672,
    longitude: -85.42405,
    numActiveCases: 4,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 5,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Nicaragua',
    countryId: '3bfe17f6c2d1b8941df303de7aec2eb0'
  }, {
    id: '20c77933-a502-3e2a-923c-0dbaec3e341d',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Niger',
    latitude: 17.61099,
    longitude: 8.08094,
    numActiveCases: 93,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 98,
    totalDeaths: 5,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Niger',
    countryId: 'bf2ec44b27fc25c6fd8a38792b9ef2a8'
  }, {
    id: '83a72a2d-d48d-3873-8a44-4834ef200939',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Nigeria',
    latitude: 9.08457,
    longitude: 8.67425,
    numActiveCases: 168,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 190,
    totalDeaths: 2,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Nigeria',
    countryId: '5d839147c83e283c1d1bb705dc50586f'
  }, {
    id: '257e238b-1db3-39ff-b318-81d40a4f9ff2',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Republic of Macedonia',
    latitude: 41.60281,
    longitude: 21.75129,
    numActiveCases: 402,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 430,
    totalDeaths: 11,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'North_Macedonia',
    countryId: '28f9f2e9021c7754f9968e027d577267'
  }, {
    id: '37dbeacb-3c77-30c6-8e6c-20f725a64d44',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Norway',
    latitude: 64.55653,
    longitude: 12.66617,
    numActiveCases: 5207,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 5296,
    totalDeaths: 57,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Norway',
    countryId: 'd5b9290a0b67727d4ba1ca6059dc31a6'
  }, {
    id: 'df24b61b-9fb1-3c6f-87ac-0560259fa43e',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Oman',
    latitude: 20.81435,
    longitude: 55.85926,
    numActiveCases: 194,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 252,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Oman',
    countryId: '1c77b9733832da9d1ffac66620f3c006'
  }, {
    id: 'b4a42b6b-8318-3487-b505-3bcd711e2c39',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Pakistan',
    latitude: 30.44185,
    longitude: 69.3597,
    numActiveCases: 2471,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2637,
    totalDeaths: 40,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Pakistan',
    countryId: 'b9698b8546220246fe600a949db326bf'
  }, {
    id: '2d6ed70a-943d-3917-ac22-c48ccd0ecf40',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Panama',
    latitude: 8.4177,
    longitude: -80.11278,
    numActiveCases: 1428,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1475,
    totalDeaths: 37,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Panama',
    countryId: '6bec347f256837d3539ad619bd489de7'
  }, {
    id: '540b6d94-850c-3617-bd02-600e299d0ca2',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Papua New Guinea',
    latitude: -6.65619,
    longitude: 145.85931,
    numActiveCases: 1,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Papua_New_Guinea',
    countryId: 'eb0d4e456fe36b15e8f1667652266f59'
  }, {
    id: 'f3157c61-faf0-360b-aad6-4c710be4b56f',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Paraguay',
    latitude: -23.4514,
    longitude: -58.4532,
    numActiveCases: 83,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 92,
    totalDeaths: 3,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Paraguay',
    countryId: '73101738da81e5cbb87b64cd400a4405'
  }, {
    id: '042c88d5-9b2d-3c9a-bc80-e21864bc953c',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Peru',
    latitude: -9.18134,
    longitude: -75.00236,
    numActiveCases: 1003,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1595,
    totalDeaths: 55,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Peru',
    countryId: '84c8fa2341f7d052a1ee3a36ff043798'
  }, {
    id: 'f27d399d-8abf-3308-ae38-eef2de6142a7',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Philippines',
    latitude: 15.59305,
    longitude: 120.73907,
    numActiveCases: 2830,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3018,
    totalDeaths: 136,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Philippines',
    countryId: '77dab2f81a6c8c9136efba7ab2c4c0f2'
  }, {
    id: '2d531b10-319d-3fc3-bead-fb5274cf2bfe',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Poland',
    latitude: 51.91892,
    longitude: 19.1343,
    numActiveCases: 3145,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3266,
    totalDeaths: 65,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Poland',
    countryId: '94880bda83bda77c5692876700711f15'
  }, {
    id: 'a63627d0-0a44-3e55-95c2-3fcc538edd55',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Portugal',
    latitude: 39.55792,
    longitude: -7.84481,
    numActiveCases: 9572,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 9886,
    totalDeaths: 246,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Portugal',
    countryId: 'ea71b362e3ea9969db085abfccdeb10d'
  }, {
    id: 'ebcdfcf9-5c66-3bb2-8034-9ded369962e9',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Qatar',
    latitude: 25.3188,
    longitude: 51.19676,
    numActiveCases: 979,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1075,
    totalDeaths: 3,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Qatar',
    countryId: '7cc7ef17c45527cf90fcf27516794d21'
  }, {
    id: 'aca7f7d7-0020-3134-b91f-9010ca6cbcbb',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Republic of Ireland',
    latitude: 53.17551,
    longitude: -8.15203,
    numActiveCases: 4148,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4273,
    totalDeaths: 120,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Republic_of_Ireland',
    countryId: '10e71bd23d3dea9ac62d72d53e2ab9f0'
  }, {
    id: '5b79a40e-ce8f-31b0-a2b8-189d0452bed2',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Republic of the Congo',
    latitude: -0.66262,
    longitude: 14.92741,
    numActiveCases: 18,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 22,
    totalDeaths: 2,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Republic_of_the_Congo',
    countryId: '91e413e69786750ed24de784189fcb4d'
  }, {
    id: '8b5c7444-39ef-3116-9e6e-fc226388cc2a',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Romania',
    latitude: 45.94695,
    longitude: 24.9804,
    numActiveCases: 2767,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3183,
    totalDeaths: 133,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Romania',
    countryId: '0c7d5ae44b2a0be9ebd7d6b9f7d60f20'
  }, {
    id: '60c5e90f-3c1d-38a5-928a-ab3c7cba74b3',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Russia',
    latitude: 59.45375,
    longitude: 108.83072,
    numActiveCases: 3834,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4149,
    totalDeaths: 34,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Russia',
    countryId: '5feb168ca8fb495dcc89b1208cdeb919'
  }, {
    id: 'aa03371f-133f-34bd-82b0-a8e0dd7c08fd',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Rwanda',
    latitude: -1.94707,
    longitude: 29.87638,
    numActiveCases: 84,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 84,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Rwanda',
    countryId: '9d7ed5d77d647e89c3cc11757d651dc2'
  }, {
    id: '5488ae38-5760-3539-8d39-f0a015d6bbe5',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Saint Kitts and Nevis',
    latitude: 17.3181,
    longitude: -62.74637,
    numActiveCases: 9,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 9,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Saint_Kitts_and_Nevis',
    countryId: 'a5c8a719698619d78137f873432fa91d'
  }, {
    id: 'cc454b11-b3a1-316b-a2d6-aec265cf5c34',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Saint Lucia',
    latitude: 13.904,
    longitude: -60.97418,
    numActiveCases: 12,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 13,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Saint_Lucia',
    countryId: '02d848ec22375579f19438265ed082d1'
  }, {
    id: '65b9c56d-cfdd-3a2e-9eea-92fb2523cfc9',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'San Marino',
    latitude: 43.94273,
    longitude: 12.45979,
    numActiveCases: 194,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 245,
    totalDeaths: 30,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'San_Marino',
    countryId: '54a0d1f73c3bf9eb699b7f36d90260fd'
  }, {
    id: 'd92f2d2e-a42a-37a1-a840-8f3d2819e2ee',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Saudi Arabia',
    latitude: 24.26119,
    longitude: 45.12033,
    numActiveCases: 1663,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2039,
    totalDeaths: 25,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Saudi_Arabia',
    countryId: '53d2fba69d071e53f12b61227d3d30de'
  }, {
    id: 'ac8f1584-8219-37e8-9ef2-54652c385a2b',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Senegal',
    latitude: 14.49945,
    longitude: -14.44555,
    numActiveCases: 140,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 207,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Senegal',
    countryId: '9986531359550785caffb2032622437f'
  }, {
    id: '8d843ad0-abf7-37cb-9288-4ef249e417ca',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Serbia',
    latitude: 44.04981,
    longitude: 20.91079,
    numActiveCases: 1437,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1476,
    totalDeaths: 39,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Serbia',
    countryId: '2ff6e535bd2f100979a171ad430e642b'
  }, {
    id: '4a49d29c-0dc4-330c-8939-7bb0d283a8fc',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Seychelles',
    latitude: -4.68444,
    longitude: 55.48732,
    numActiveCases: 10,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 10,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Seychelles',
    countryId: 'd2e4449b45608e33e472d939a73868f7'
  }, {
    id: '699bfb58-2929-3305-91f4-b0ea2c474d7c',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Sierra Leone',
    latitude: 8.46502,
    longitude: -11.79593,
    numActiveCases: 2,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Sierra_Leone',
    countryId: '81712886563356568e6e0f70703552c2'
  }, {
    id: '9ff20727-f392-3d38-a7d7-911a08ffb916',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Slovakia',
    latitude: 48.6655,
    longitude: 19.70174,
    numActiveCases: 439,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 450,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Slovakia',
    countryId: '88a392b5a8d8f73986d83a2deefb0472'
  }, {
    id: '2733e57e-7eb4-3f4e-b9bd-d3fa4b2c761c',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Slovenia',
    latitude: 46.14694,
    longitude: 14.95505,
    numActiveCases: 844,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 934,
    totalDeaths: 20,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Slovenia',
    countryId: '00247297c394dd443dc97067830c35f4'
  }, {
    id: '0025612c-f7ed-31ec-a9b0-fe70a3b9e991',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Somalia',
    latitude: 5.16158,
    longitude: 46.20083,
    numActiveCases: 4,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 5,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Somalia',
    countryId: '921855f753932de762b780405a50bdf7'
  }, {
    id: 'fb593ae6-da29-3b41-b270-29a30c454fda',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'South Africa',
    latitude: -28.47933,
    longitude: 24.67993,
    numActiveCases: 1401,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1505,
    totalDeaths: 9,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'South_Africa',
    countryId: '1287b11a755a7d660aa421359e6d24d0'
  }, {
    id: '12d8c81d-ad0f-3eea-a036-9c250a1399eb',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'South Korea',
    latitude: 36.44815,
    longitude: 127.85017,
    numActiveCases: 3867,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 10062,
    totalDeaths: 174,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'South_Korea',
    countryId: 'aa292756f481473cfd6a988c22d480b1'
  }, {
    id: '44f7e7d5-2405-326e-8c1c-61fe39fed36f',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Spain',
    latitude: 39.89489,
    longitude: -2.98831,
    numActiveCases: 76262,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 117710,
    totalDeaths: 10935,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Spain',
    countryId: '907eba32d950bfab68227fd7ea22999b'
  }, {
    id: 'f63d4694-1ff7-3686-ada6-372670496731',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Sri Lanka',
    latitude: 7.87395,
    longitude: 80.78971,
    numActiveCases: 131,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 159,
    totalDeaths: 4,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Sri_Lanka',
    countryId: '999309971ba0008ba9f444f6df579961'
  }, {
    id: '0276f7ac-9a3b-3762-9e7c-126bececc71a',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Sudan',
    latitude: 13.31664,
    longitude: 30.20949,
    numActiveCases: 6,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 10,
    totalDeaths: 2,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Sudan',
    countryId: '74458a3d3e5f3074226b1f9fa23c9163'
  }, {
    id: 'c032ebdd-9d40-36af-84fa-3d3cfcd2655f',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Suriname',
    latitude: 3.91784,
    longitude: -56.03203,
    numActiveCases: 9,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 10,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Suriname',
    countryId: '64446ac025106d201779cb4bf5ab6b2e'
  }, {
    id: 'd12892ec-e99f-3107-b34a-285ce269406a',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Sweden',
    latitude: 62.19845,
    longitude: 17.55142,
    numActiveCases: 5568,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 6131,
    totalDeaths: 358,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Sweden',
    countryId: 'c8f4261f9f46e6465709e17ebea7a92b'
  }, {
    id: '310ccca6-0645-3ab4-b38d-51a7b3d840cc',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Switzerland',
    latitude: 46.8132,
    longitude: 8.22395,
    numActiveCases: 14169,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 19606,
    totalDeaths: 591,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Switzerland',
    countryId: '3ad08396dc5afa78f34f548eea3c1d64'
  }, {
    id: '66785f6a-b948-3b1e-b664-5ca012e601f1',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Syria',
    latitude: 34.8148,
    longitude: 39.056,
    numActiveCases: 14,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 16,
    totalDeaths: 2,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Syria',
    countryId: '465718d0a1bc8363ad01390923fad5d1'
  }, {
    id: '399823ad-c91c-3a4e-b79e-7422dc03c49d',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Taiwan',
    latitude: 23.5984,
    longitude: 121.018,
    numActiveCases: 293,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 348,
    totalDeaths: 5,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Taiwan',
    countryId: '551fe18ef47d4e6e9d943b9a68ada21d'
  }, {
    id: '128f7d36-e458-39d0-8a24-84f90a8530bf',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Tanzania',
    latitude: -6.36821,
    longitude: 34.88519,
    numActiveCases: 16,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 20,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Tanzania',
    countryId: 'c03b1123e45fa00da3142e0424ee5eec'
  }, {
    id: '7eb27990-613f-3cf5-9ef0-ac89778dac28',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Thailand',
    latitude: 13.03659,
    longitude: 101.4925,
    numActiveCases: 1378,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1978,
    totalDeaths: 19,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Thailand',
    countryId: '103357e3e40a9c0e4e9d36110f7bbc7a'
  }, {
    id: '2caf1e38-7322-3ac8-9706-2a8647c6f52b',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'The Bahamas',
    latitude: 24.74142,
    longitude: -78.08002,
    numActiveCases: 22,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 24,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'The_Bahamas',
    countryId: '9041ceec600555da84f553ca8e98fc9f'
  }, {
    id: '8b83adb1-3d70-3704-9b5e-a1fc25c1e798',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'The Gambia',
    latitude: 13.44541,
    longitude: -15.31143,
    numActiveCases: 1,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'The_Gambia',
    countryId: 'f6b90d77186b4566084a7a7cc13a9985'
  }, {
    id: '5a83cf2b-e0bd-394f-b8b0-fcd7f9cc9b12',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Togo',
    latitude: 8.62169,
    longitude: 0.82969,
    numActiveCases: 20,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 40,
    totalDeaths: 3,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Togo',
    countryId: '1e746c5c85c4c0de3a0858b0dd047476'
  }, {
    id: '441dcf90-7b5b-3962-a132-6cc05f12738d',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Trinidad and Tobago',
    latitude: 10.43443,
    longitude: -61.41808,
    numActiveCases: 90,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 97,
    totalDeaths: 6,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Trinidad_and_Tobago',
    countryId: '6d196050243a291b44c87f63346173dd'
  }, {
    id: '027f91ea-ad3e-329f-b063-3cb9a7dc8bc1',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Tunisia',
    latitude: 33.79502,
    longitude: 9.56154,
    numActiveCases: 472,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 495,
    totalDeaths: 18,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Tunisia',
    countryId: 'd6dacba23ab4a1d5b72f223bfb010a05'
  }, {
    id: '65b6540f-d0d0-3c57-8bf7-ed496aa048d6',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Turkey',
    latitude: 38.95774,
    longitude: 35.4317,
    numActiveCases: 20012,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 20921,
    totalDeaths: 425,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Turkey',
    countryId: '221cdfb73049678e244380b45872cbb2'
  }, {
    id: 'b2f27cda-c83b-3988-842c-c04c78cbedab',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Uganda',
    latitude: 1.37777,
    longitude: 32.2874,
    numActiveCases: 45,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 45,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Uganda',
    countryId: '53b3c88ea00c4f0e137b4e6fe7bd23f1'
  }, {
    id: '27293927-6f1e-3bb6-a6ca-777d4da32fd1',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Ukraine',
    latitude: 48.38288,
    longitude: 31.17344,
    numActiveCases: 900,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 942,
    totalDeaths: 23,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Ukraine',
    countryId: 'f01fc92b23faa973f3492a23d5a705c5'
  }, {
    id: 'ce2bddea-53a5-36a8-b84d-98ddc3ce4c6b',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'United Arab Emirates',
    latitude: 24.01438,
    longitude: 53.9769,
    numActiveCases: 1147,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1264,
    totalDeaths: 9,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'United_Arab_Emirates',
    countryId: 'edab6ab6fad43f4911b41103922c3e9e'
  }, {
    id: 'cde6a1dd-92f2-3c1a-b1b7-b4daba48badd',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'United Kingdom',
    latitude: 54.31407,
    longitude: -2.23001,
    numActiveCases: 34872,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 38688,
    totalDeaths: 3611,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'United_Kingdom',
    countryId: '5ad75a758f27c089b52a1eac8dca7e0d'
  }, {
    id: '8f551e2f-3cbc-34e2-b334-9d57631bbba4',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'United States',
    latitude: 37.16793,
    longitude: -95.84502,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 261438,
    totalDeaths: 6699,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'United_States',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '77e5ed77-579e-3973-ad10-2e8a670126f9',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Uruguay',
    latitude: -32.53151,
    longitude: -55.75833,
    numActiveCases: 297,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 369,
    totalDeaths: 4,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Uruguay',
    countryId: '75497a22409db78dcc52c291e078bc10'
  }, {
    id: 'a454057f-3e0e-3b5c-9587-2e0e8ca63b77',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Uzbekistan',
    latitude: 41.39476,
    longitude: 64.56445,
    numActiveCases: 194,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 221,
    totalDeaths: 2,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Uzbekistan',
    countryId: 'a0a3e881895e46eb96218f0988d405b9'
  }, {
    id: '70251932-da36-31b4-bc72-c13a2e731a21',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Vatican City',
    latitude: 41.9038,
    longitude: 12.4525,
    numActiveCases: 7,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 7,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Vatican_City',
    countryId: 'edb3fc76459aacac8c76607a4da9188e'
  }, {
    id: 'f8e0fb33-6333-3074-beae-3d65974fafbb',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Venezuela',
    latitude: 6.47279,
    longitude: -66.58904,
    numActiveCases: 98,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 146,
    totalDeaths: 5,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Venezuela',
    countryId: 'e95294b730f61c8175550ec244bfcb50'
  }, {
    id: '494626b5-91d4-3cc3-bdda-d7ea263312b4',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Vietnam',
    latitude: 15.9742,
    longitude: 107.868,
    numActiveCases: 152,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 237,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Vietnam',
    countryId: 'fdef6daa799e80dbce1b561577b21181'
  }, {
    id: 'c26d2fda-5dc8-3a80-b429-e9d1239fd585',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Zambia',
    latitude: -13.15192,
    longitude: 27.85254,
    numActiveCases: 36,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 39,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Zambia',
    countryId: 'b0aa0804e676a38255af4fd70236af7c'
  }, {
    id: '9fde0253-79fe-3e96-be6d-5dea3a270ce1',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Zimbabwe',
    latitude: -19.01328,
    longitude: 29.14666,
    numActiveCases: 8,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 9,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Zimbabwe',
    countryId: '9d5116a2451bc98c2b46b93acbc1b4f0'
  }, {
    id: '7be8222c-bc4d-38c7-a5e4-3c3a3b2f13ea',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Alabama',
    latitude: 32.78488,
    longitude: -86.83158,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1315,
    totalDeaths: 32,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802'
  }, {
    id: 'e6a31992-efe3-301e-bcff-b7f67ba215fa',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Alaska',
    latitude: 63.0365,
    longitude: -149.106,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 147,
    totalDeaths: 3,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Alaska',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'e15997c74a71c5d9263df6f7a21bc191'
  }, {
    id: '168c2efe-289b-38a9-9114-98a071dcd13c',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Arizona',
    latitude: 34.29302,
    longitude: -111.66473,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1937,
    totalDeaths: 41,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Arizona',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '3fe5003edc0cb6c83962dbd74d35dd50'
  }, {
    id: 'b72ad432-84e8-392c-b110-665be126331b',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Arkansas',
    latitude: 34.89978,
    longitude: -92.43864,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 683,
    totalDeaths: 12,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Arkansas',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '46aaf459104e9ce5d45eaa017ac349c2'
  }, {
    id: 'b3e478c3-51c9-3117-b4a4-974a5d4fdc9f',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'California',
    latitude: 37.24609,
    longitude: -119.61038,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 11206,
    totalDeaths: 249,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'California',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '356779a9a1696714480f57fa3fb66d4c'
  }, {
    id: '83265a68-bf9f-3bbf-9a41-d63165122c0c',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Colorado',
    latitude: 38.99854,
    longitude: -105.54781,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3742,
    totalDeaths: 97,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Colorado',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '15e49475e42539feed93fc5cce25d3cb'
  }, {
    id: 'b8c2167f-b278-34df-99fe-4a3466d93ef0',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Connecticut',
    latitude: 41.62107,
    longitude: -72.72539,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3824,
    totalDeaths: 112,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Connecticut',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'f7529880ccaf91ff331809e9fe98f883'
  }, {
    id: 'ae854296-e32b-32e5-89fd-c678361611df',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Delaware',
    latitude: 38.99291,
    longitude: -75.50646,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 393,
    totalDeaths: 12,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Delaware',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'ba290ff950475708a10987cb31e6274c'
  }, {
    id: 'aa47bb73-317f-3f42-aaa1-732cba23fa8b',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Florida',
    latitude: 28.63187,
    longitude: -82.47139,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 9585,
    totalDeaths: 163,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Florida',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'eeaca0ed2f6a35370c77de30792debb8'
  }, {
    id: 'a9a68dad-679d-3011-afc3-d7cac70062b7',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Georgia',
    latitude: 32.64933,
    longitude: -83.44672,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 5831,
    totalDeaths: 183,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Georgia_(U.S._state)',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '7f3097563d468719d72c6df98a69f6de'
  }, {
    id: 'a0429292-b9d3-3839-b27c-4d36fc3c3097',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Hawaii',
    latitude: 20.25382,
    longitude: -156.35411,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 283,
    totalDeaths: 2,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Hawaii',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'a85df3d66bde576d3b62caaf527f2daa'
  }, {
    id: '3bb86e87-9022-3949-a90c-6e8b14098190',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Idaho',
    latitude: 44.38899,
    longitude: -114.65945,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 891,
    totalDeaths: 9,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Idaho',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '47b231eae4bf87fa405e34eb9273b741'
  }, {
    id: 'f09d9ee1-d62e-3276-9c4f-5869a435c47f',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Illinois',
    latitude: 40.06446,
    longitude: -89.19884,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 7697,
    totalDeaths: 167,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Illinois',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '66c2b329479ee151b4c6b257c0b7a9b7'
  }, {
    id: 'b5943d07-1437-3d4a-8254-68807b203020',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Indiana',
    latitude: 39.90805,
    longitude: -86.27552,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3435,
    totalDeaths: 102,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Indiana',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'c5376d00573c5858adf7ed894d0491b9'
  }, {
    id: '2f131867-3095-3479-8a4a-fa10fbf9b8a9',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Iowa',
    latitude: 42.07477,
    longitude: -93.49931,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 699,
    totalDeaths: 11,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Iowa',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '0daaf4a9abe3920c453a7f1f82a9bb19'
  }, {
    id: '8385f5b3-d7d2-363e-a08d-cd36e75c7a77',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Kansas',
    latitude: 38.48473,
    longitude: -98.38016,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 620,
    totalDeaths: 13,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Kansas',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '7c0e2b92f76ed5847aa48a3a1e70ae7d'
  }, {
    id: '929be9bf-053f-366b-89eb-e5706c107276',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Kentucky',
    latitude: 37.52728,
    longitude: -85.2876,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 770,
    totalDeaths: 31,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Kentucky',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '980ceec1dba2d36c2ba867f683b47838'
  }, {
    id: '043a2c55-8316-30ac-be24-f4852f34bd60',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Louisiana',
    latitude: 31.08061,
    longitude: -92.01531,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 10297,
    totalDeaths: 370,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Louisiana',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '39da6b7e3479522718668deaf7e6f304'
  }, {
    id: '68f35d3b-62c7-3da3-8c0e-7aac484fdf54',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Maine',
    latitude: 45.35342,
    longitude: -69.2224,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 432,
    totalDeaths: 9,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Maine',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '41695c8c512c53044b7b787368687ac8'
  }, {
    id: '46662e92-544c-3c69-9281-6e968d6294e6',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Maryland',
    latitude: 39.04657,
    longitude: -76.79495,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2758,
    totalDeaths: 43,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Maryland',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '11ea71f253acf02a2d126a0901e765a7'
  }, {
    id: '0ae43a6b-282e-3d70-bf83-a55285c63669',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Massachusetts Bay',
    latitude: 42.1842,
    longitude: -71.71818,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 8966,
    totalDeaths: 154,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Massachusetts_Bay',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'aeb264fc98dd9ebbcefe8d1eafee79f9'
  }, {
    id: '11cdd197-a103-3cc1-ae6d-dfa294ead299',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Michigan',
    latitude: 43.7427,
    longitude: -84.62167,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 10791,
    totalDeaths: 417,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Michigan',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '8eadc5d3e1f1919c527b6d865e226a88'
  }, {
    id: '76eb5921-9055-394e-851b-fdaff9eff89c',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Minnesota',
    latitude: 46.31668,
    longitude: -94.30921,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 788,
    totalDeaths: 22,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Minnesota',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '45009b4a16ef03ba8bb5b15665ef4469'
  }, {
    id: '5b1b6ef6-8cfa-3404-ac2f-a52b5dd8243f',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Mississippi',
    latitude: 32.722,
    longitude: -89.65551,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1358,
    totalDeaths: 29,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Mississippi',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '14c5492ce2fe855f408481fdbd13f7a6'
  }, {
    id: 'a9af1953-16d4-37fe-92ff-a28ab4930dfa',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Missouri',
    latitude: 38.2589,
    longitude: -92.43659,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1863,
    totalDeaths: 22,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Missouri',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '06fa309b609b7c8f7c39a88abe2d507c'
  }, {
    id: '4e6a8948-3b72-3256-93fd-14528ce659fd',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Montana',
    latitude: 47.03349,
    longitude: -109.64506,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 243,
    totalDeaths: 5,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Montana',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'a8088b760fb315d2964735686800b203'
  }, {
    id: '43146bd4-ec2b-3e21-a559-539d9ae37e53',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Nebraska',
    latitude: 41.50075,
    longitude: -99.68095,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 278,
    totalDeaths: 6,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Nebraska',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '20639b767478006218447b27e4b853cb'
  }, {
    id: '9b25ad4d-ae10-3d82-a0ca-5779f1a40478',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Nevada',
    latitude: 39.35649,
    longitude: -116.65543,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1484,
    totalDeaths: 38,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Nevada',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '8fcebe1ce891c49c60a3c26b317ebafb'
  }, {
    id: 'e86d9d3f-dcb7-3296-9f07-ca689dad2f56',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'New Hampshire',
    latitude: 44.00118,
    longitude: -71.6342,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 479,
    totalDeaths: 5,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'New_Hampshire',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '86db7eb10eb3963430f2f777499fe29a'
  }, {
    id: 'b3941ab9-faaf-3dc2-82ee-f1bb2797cbb1',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'New Jersey',
    latitude: 40.14323,
    longitude: -74.72671,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 25590,
    totalDeaths: 537,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'New_Jersey',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '5ac9ad692818005c50aae8afe95861d6'
  }, {
    id: '8e491a33-4899-3760-99a4-4d918e3e6cb7',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'New Mexico',
    latitude: 34.42132,
    longitude: -106.1084,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 442,
    totalDeaths: 7,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'New_Mexico',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '2a18ef32f87bb40c0d17130828cfb473'
  }, {
    id: '0777750f-7c33-377e-989f-f9ec7a22c41b',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'New York (state)',
    latitude: 42.85535,
    longitude: -76.50167,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 102863,
    totalDeaths: 2935,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'New_York_(state)',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'fede9f03ea10983a84201b04a1453558'
  }, {
    id: '3bb9a477-4ab5-3c05-8a0d-895ecbd94a27',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'North Carolina',
    latitude: 35.21962,
    longitude: -80.01955,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2147,
    totalDeaths: 22,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'North_Carolina',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '5c520b852c5d7c99a71f1635ae84e1d2'
  }, {
    id: '65937723-4cde-3253-9174-026e3333717d',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'North Dakota',
    latitude: 47.44626,
    longitude: -100.46933,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 173,
    totalDeaths: 3,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'North_Dakota',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '3971735868c1886348955beb9c7d72bd'
  }, {
    id: '2e680ca5-808b-32c8-a039-b701e8ad9862',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Ohio',
    latitude: 40.29147,
    longitude: -82.78995,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2902,
    totalDeaths: 81,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Ohio',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '4ec96adb9cc39333f3d2024b28f2503f'
  }, {
    id: '7831e449-e406-35f4-9f61-09dc588e290d',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Oklahoma',
    latitude: 35.58344,
    longitude: -97.50821,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 990,
    totalDeaths: 38,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Oklahoma',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '92aec0ba411203aa3a57aec94b108ed6'
  }, {
    id: 'd4a4486f-f82c-3cbd-94a1-8718cf4a2c53',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Oregon',
    latitude: 44.11559,
    longitude: -120.51484,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 826,
    totalDeaths: 21,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Oregon',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'da4d1129a255f83fb03bf32fde034ecc'
  }, {
    id: 'eff128a6-717f-3420-a2ab-617f1f9f52e2',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Pennsylvania',
    latitude: 40.87366,
    longitude: -77.79939,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 8570,
    totalDeaths: 102,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Pennsylvania',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '9ac31dfb3a2f5b994f4009eb0a3c0949'
  }, {
    id: '87e2b347-55b8-34cd-b4f1-99e25fedea65',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Rhode Island',
    latitude: 41.67588,
    longitude: -71.55475,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 657,
    totalDeaths: 12,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Rhode_Island',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '988e1885f34fc9058049b872a11236c5'
  }, {
    id: 'dd731293-9d3a-38f0-99b4-1f4f82f6ec9b',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'South Carolina',
    latitude: 33.62646,
    longitude: -80.9474,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1554,
    totalDeaths: 31,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'South_Carolina',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'aeeb87d118446317ff4f4d5e8d19283f'
  }, {
    id: 'a4e3d962-142f-3462-88df-82fe69bab808',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'South Dakota',
    latitude: 44.43555,
    longitude: -100.22959,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 187,
    totalDeaths: 2,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'South_Dakota',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '9b0faa6c816be68592b17dae38fd88b3'
  }, {
    id: '46e3f481-ec47-3c4e-9f3a-5edb071f3e39',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Tennessee',
    latitude: 35.84337,
    longitude: -86.34375,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2845,
    totalDeaths: 36,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Tennessee',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'a5c53b081bf565526eb3779db999becf'
  }, {
    id: '205a8c5c-6fa8-3896-b0f0-40e78ccdbdc2',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Texas',
    latitude: 31.48821,
    longitude: -99.35343,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 5368,
    totalDeaths: 92,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Texas',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '86871c416a7dbed7e5cc229d143d8d82'
  }, {
    id: 'f03d1214-833e-34f2-af1b-a76c53fa0d1c',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Utah',
    latitude: 39.32372,
    longitude: -111.67824,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1095,
    totalDeaths: 7,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Utah',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '6a382f5bfa3db109c81ec4adbf70ff26'
  }, {
    id: '7081f32e-3132-3673-b400-be3e9c4ced58',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Vermont',
    latitude: 43.87165,
    longitude: -72.45165,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 338,
    totalDeaths: 17,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Vermont',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'de30bd840230da1493819f803aff6e9e'
  }, {
    id: 'd76bdb79-591a-3298-bd41-fb12fca8da62',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Virginia',
    latitude: 37.51638,
    longitude: -78.83044,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2012,
    totalDeaths: 46,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Virginia',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: 'c8b287075ce4f11c834d2a0ada967ddc'
  }, {
    id: '96b2f8f2-3030-3c31-993b-3aeaa6f4d58e',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Washington',
    latitude: 47.40403,
    longitude: -120.50621,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 6597,
    totalDeaths: 272,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Washington_(state)',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '11d9591c9feee10969173c347e551a9a'
  }, {
    id: 'fba460ca-2f2e-3a91-a93d-6a87759f984a',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'West Virginia',
    latitude: 38.64249,
    longitude: -80.61351,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 217,
    totalDeaths: 2,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'West_Virginia',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '40165c0d1d578a7bbded085c5def3f48'
  }, {
    id: '3212b5b8-f60e-3faf-b7dd-630c031df616',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Wisconsin',
    latitude: 44.63824,
    longitude: -90.01202,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1756,
    totalDeaths: 39,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Wisconsin',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '5aeb407b7ca7f3fe0dc50003b1e0712f'
  }, {
    id: 'd2dd6b2c-9183-312c-8e73-30458b932e2c',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Wyoming',
    latitude: 42.9996,
    longitude: -107.5516,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 162,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Wyoming',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '823ee6401883db6f9e5865f51c77d97c'
  }, {
    id: '25427f52-24ca-39b9-b251-a542b255ffe8',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Autauga County, Alabama',
    latitude: 32.50771,
    longitude: -86.66611,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 12,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Autauga_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '78fb973e0330b5bef80178cb2ee15544'
  }, {
    id: 'e86f98c7-21a9-33fa-a495-b0e9bc6b8ca9',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Baldwin County, Alabama',
    latitude: 30.7698,
    longitude: -87.70876,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 26,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Baldwin_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '43e6b42296ad36c2ff19f0233559e2e7'
  }, {
    id: '84d1f727-05af-37bb-bb3c-dd9138ae74b1',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Barbour County, Alabama',
    latitude: 31.88278,
    longitude: -85.39843,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Barbour_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'd7f34c76271abd72a4b8041d74c47677'
  }, {
    id: 'a7a1b23d-c0a5-3976-afa4-22026bd64526',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Bibb County, Alabama',
    latitude: 33.03914,
    longitude: -87.14917,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Bibb_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '5e61bbc0f70c87b7d49969d45dc9d665'
  }, {
    id: '2030e7ec-98ae-3441-8bd8-055db36200f9',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Blount County, Alabama',
    latitude: 34.01276,
    longitude: -86.63345,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 8,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Blount_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '037a13cc1e282b176a0b6414b41cc98d'
  }, {
    id: '5dee0b1c-a5cf-36aa-a6d9-a033a1af75c4',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Bullock County, Alabama',
    latitude: 32.09272,
    longitude: -85.70465,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Bullock_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '9b2bde169e2daa168fa213290d4bf3c9'
  }, {
    id: '5e38e7ee-577f-35bd-ad83-acedc809998b',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Butler County, Alabama',
    latitude: 31.74421,
    longitude: -86.67338,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Butler_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '0ccae1c8732add5b6badd0935710a4b2'
  }, {
    id: 'f1696e5f-dc0a-3d78-83b3-f6494a115dc0',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Calhoun County, Alabama',
    latitude: 33.76226,
    longitude: -85.83777,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 16,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Calhoun_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '555ba6ccd9f3e05f5debbca3c4c37478'
  }, {
    id: '8709e1f8-8b4c-37b6-9e05-7acbf718d4de',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Chambers County, Alabama',
    latitude: 32.91879,
    longitude: -85.35803,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 80,
    totalDeaths: 4,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Chambers_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '054290337334a77761a253a70bfc7fb6'
  }, {
    id: 'a996403c-91e3-3a83-842f-3019709fdbfe',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Cherokee County, Alabama',
    latitude: 34.23394,
    longitude: -85.62135,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Cherokee_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '1f3319584eca4062759843e936929fc4'
  }, {
    id: '1e0cd838-6edd-31c9-b05b-9eb846050a07',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Chilton County, Alabama',
    latitude: 32.86599,
    longitude: -86.69548,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 15,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Chilton_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '22ee1b39473ed75b3baca3e89be181a8'
  }, {
    id: '184e1436-744b-386d-aba6-91fe931b67f8',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Choctaw County, Alabama',
    latitude: 32.00402,
    longitude: -88.20052,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Choctaw_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'b1851629065196b075d2c54eef8bb668'
  }, {
    id: 'c09be6d3-10bb-38bb-a62e-a980b4153047',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Clarke County, Alabama',
    latitude: 31.58842,
    longitude: -87.84078,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Clarke_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'bf5fb0dffbd6660abd15196324e008a8'
  }, {
    id: '212ea562-0179-3532-8ddb-86fd020a5b61',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Clay County, Alabama',
    latitude: 33.29451,
    longitude: -85.90771,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 8,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Clay_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '82b6fad209177a89ed55c406ce1eb32d'
  }, {
    id: 'a3c9eeb9-24b8-389d-8244-24b6fce71986',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Cleburne County, Alabama',
    latitude: 33.71663,
    longitude: -85.59616,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 6,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Cleburne_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '6fd4ce998e97183d7529ebb7b64a0908'
  }, {
    id: 'b4beb740-05d1-340c-9414-2e454de0a957',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Coffee County, Alabama',
    latitude: 31.40063,
    longitude: -85.99258,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Coffee_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '3d7af055e9b1d42a93ed8d4879d123a6'
  }, {
    id: '97ec1dba-0fca-399a-971e-9a51b923e989',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Colbert County, Alabama',
    latitude: 34.73638,
    longitude: -87.59561,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 5,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Colbert_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '51335878ca8d2276027e97dc9957ab9d'
  }, {
    id: 'f7b54b93-5a9f-3c34-899f-62fe4f2495de',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Conecuh County, Alabama',
    latitude: 31.46714,
    longitude: -87.04464,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Conecuh_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '8e2f5bcc36efeb53a174979103e9a3e6'
  }, {
    id: 'fad453c3-f540-3f5b-a8db-fdac44aacdc3',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Coosa County, Alabama',
    latitude: 32.92921,
    longitude: -86.26081,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 6,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Coosa_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '3ccc194192cd7f04a9d7ec90c0002cfe'
  }, {
    id: '84cb4f34-030c-349f-8d27-248889400ec8',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Covington County, Alabama',
    latitude: 31.26102,
    longitude: -86.44469,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Covington_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'ca44cc9de34d9fd68a1a540d8dd92e92'
  }, {
    id: '314e78f3-45db-3aca-a3e3-0533f572ad89',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Crenshaw County, Alabama',
    latitude: 31.74577,
    longitude: -86.32374,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Crenshaw_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '96f8be6753733997c8239f2863fbe8d8'
  }, {
    id: 'fb8afd57-9eab-3cad-b93f-12587e7f725d',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Cullman County, Alabama',
    latitude: 34.08588,
    longitude: -86.80095,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 14,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Cullman_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '0deac4a0500288dfa2ff1c6077fd4afb'
  }, {
    id: '28c6aa89-ebb1-3668-b1fc-d8794e8e2ab4',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Dale County, Alabama',
    latitude: 31.4079,
    longitude: -85.6033,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Dale_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '712406df4fcf9a8a437067968812a622'
  }, {
    id: '60d4cd92-91f3-38c9-abed-b16546af627a',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Dallas County, Alabama',
    latitude: 32.38799,
    longitude: -87.14006,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Dallas_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'e6fb887875b7d810f82cece691937d30'
  }, {
    id: '173d9679-189c-3e0f-8f94-3dd67c8e3e69',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'DeKalb County, Alabama',
    latitude: 34.52982,
    longitude: -85.81614,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 10,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'DeKalb_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'a1bd26ff0bc0ab67c37e726191ccdc2e'
  }, {
    id: 'c4ad7d04-d50c-322a-bc20-4f5f9979bafa',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Elmore County, Alabama',
    latitude: 32.58757,
    longitude: -86.1333,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 18,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Elmore_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '1fdace681a9994552f11ecfa40b34eaa'
  }, {
    id: 'e0b66bfb-4ad9-34d8-916f-b4c1545e5ac3',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Escambia County, Alabama',
    latitude: 31.1284,
    longitude: -87.15194,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Escambia_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '4382846735e1d2b8987a3b6e34734fbb'
  }, {
    id: '43fb61b5-7d8c-3bf5-9fba-07d23f215741',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Etowah County, Alabama',
    latitude: 34.02113,
    longitude: -86.05351,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 15,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Etowah_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '2b7ccc9bc0690ac2ddc25a4145a6ced9'
  }, {
    id: '19aa41ce-5976-3c12-a559-4f06de261191',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Fayette County, Alabama',
    latitude: 33.71988,
    longitude: -87.6879,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Fayette_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'aeb6358eab9eabeba46c635f24ee9140'
  }, {
    id: 'fc3f87f7-7d44-36ac-a6c6-b8141afec933',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Franklin County, Alabama',
    latitude: 34.44324,
    longitude: -87.85165,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Franklin_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '94369cd5664b13b93225ad29adeef8a0'
  }, {
    id: '3f00acce-25bd-31c8-92b4-799d42a28757',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Geneva County, Alabama',
    latitude: 31.09642,
    longitude: -85.83932,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 0,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Geneva_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'e62208aa9ae5e323dd722eef5f5e1066'
  }, {
    id: '3726930b-99b1-3b33-905e-b90d6a61692f',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Greene County, Alabama',
    latitude: 32.83585,
    longitude: -87.95635,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 5,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Greene_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '7198e291897cffe741f9f80a1a722c0f'
  }, {
    id: 'faf93a39-f787-3dd6-9b5f-e6b58bee0133',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Hale County, Alabama',
    latitude: 32.74381,
    longitude: -87.64552,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Hale_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '351242f5cb73a16710a5ea867dd38d4e'
  }, {
    id: 'ddbb6822-79ca-3cf7-81f2-511705c52b97',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Henry County, Alabama',
    latitude: 31.54105,
    longitude: -85.22955,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 0,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Henry_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '6458c33b1f9d82ad6bec2e12e4511e93'
  }, {
    id: '1d1ecb44-6c82-341b-819b-b34cb8fa5b4c',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Houston County, Alabama',
    latitude: 31.15596,
    longitude: -85.35591,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 11,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Houston_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '20910aa784850b384530f4f316c957df'
  }, {
    id: '24fc1696-a026-3e5f-bc72-bf218024a144',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Jackson County, Alabama',
    latitude: 34.72778,
    longitude: -85.97115,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 12,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Jackson_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '9f02992736c51f11d3eb22a7b688505d'
  }, {
    id: '00bd26ad-821d-3abd-861a-42fb9c237d24',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Jefferson County, Alabama',
    latitude: 33.54448,
    longitude: -86.9292,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 345,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Jefferson_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '5739115715feb6cfca4b49f0c779bee8'
  }, {
    id: 'fc779a9d-a7e1-3491-a07e-f15b83e34ca1',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Lamar County, Alabama',
    latitude: 33.79147,
    longitude: -88.11022,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 1,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Lamar_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'ed9a383ec4385ddc91bc4fb04763b6f3'
  }, {
    id: '9a080ffe-18af-32e4-ac9f-7ab4a0f2f816',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Lauderdale County, Alabama',
    latitude: 34.86992,
    longitude: -87.70666,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 13,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Lauderdale_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '54ac91661ab493c7834d22e2d6d1250a'
  }, {
    id: '9ebb5d60-bb0f-3dd0-bbf1-d8bed67c0990',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Lawrence County, Alabama',
    latitude: 34.55201,
    longitude: -87.31825,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Lawrence_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '48c77846a72ddc9507e0b458509fe2fb'
  }, {
    id: 'e61271a6-c4dd-3eae-8f9c-e62c2432a595',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Lee County, Alabama',
    latitude: 32.57819,
    longitude: -85.34894,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 97,
    totalDeaths: 2,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Lee_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '2665b233c5c4092d108a034aa62fe596'
  }, {
    id: 'e366ac0f-e062-3807-8ebf-4e4daf7ee02c',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Limestone County, Alabama',
    latitude: 34.77504,
    longitude: -87.03236,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 26,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Limestone_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'b685338cfc9d4cfe9db875026ee519d0'
  }, {
    id: '8dfd8ec1-31fb-3b39-8acb-14505f8cce73',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Lowndes County, Alabama',
    latitude: 32.18431,
    longitude: -86.65243,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 2,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Lowndes_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '014ec7cedf31ffeb697c41225fd6c839'
  }, {
    id: 'bc8c0005-956e-3364-ac65-f7a2265ecfba',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Macon, Alabama',
    latitude: 32.4139,
    longitude: -85.72846,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 5,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Macon,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '3433c89192102177725a8095a408bd28'
  }, {
    id: '50d3b905-9095-3f0e-bd3c-f11fcb1783f3',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Madison County, Alabama',
    latitude: 34.73392,
    longitude: -86.52295,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 119,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Madison_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '5196ca064ada8e4bf642e1a9baa4570a'
  }, {
    id: 'afad8ab0-8117-3b26-ba9f-1bfab07374b4',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Marengo County, Alabama',
    latitude: 32.26852,
    longitude: -87.79526,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 7,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Marengo_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '53166dfe18f78edeebebf155212b0518'
  }, {
    id: '75689496-b606-325f-b3a1-b5b57a92225c',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Marion County, Alabama',
    latitude: 34.11785,
    longitude: -87.92081,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 13,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Marion_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '5a1f2372194bef03bd01aa9da438fcaa'
  }, {
    id: '17a124ca-6020-3b0c-a2d3-f08abfed6213',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Marshall County, Alabama',
    latitude: 34.34962,
    longitude: -86.31986,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 15,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Marshall_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'd72542e15a37de8ad0cb97a1e395043e'
  }, {
    id: 'c0d809df-e64e-3ad2-865c-32a848ebcb72',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Mobile County, Alabama',
    latitude: 30.70034,
    longitude: -88.17812,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 84,
    totalDeaths: 4,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Mobile_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '5f03e0239c83d6f53b9e111f54505b13'
  }, {
    id: 'ae7ddc0c-5475-3d99-8272-fc13c768eaf8',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Monroe County, Alabama',
    latitude: 31.5291,
    longitude: -87.34523,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Monroe_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'c0507a92e8446ed7d6ae03c0d3b5b625'
  }, {
    id: '28f98973-88b7-32f0-b83a-176448066fcf',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Montgomery County, Alabama',
    latitude: 32.23342,
    longitude: -86.20862,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 52,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Montgomery_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'fc42790a0bf3093a5aba63b01f23586e'
  }, {
    id: '1455cb2d-d8b5-3f67-b1c9-eb5f41c4c890',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Morgan County, Alabama',
    latitude: 34.49531,
    longitude: -86.83024,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 23,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Morgan_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'c912a3d93f51fb76fe1744f6aca14818'
  }, {
    id: '6d2eb26a-c141-384f-b1c9-b1e43c2e928c',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Perry County, Alabama',
    latitude: 32.5912,
    longitude: -87.27166,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 0,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Perry_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '348ffcbe99a3606ef95778c5f6738997'
  }, {
    id: '01b54aa2-4589-3a57-abb3-884fe88ea851',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Pickens County, Alabama',
    latitude: 33.26278,
    longitude: -88.08869,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 9,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Pickens_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'f27ab286a23fa10294c895d1cba6cbf5'
  }, {
    id: 'b1dcd8c4-7c38-3a2e-9402-6e18d65b9dca',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Pike County, Alabama',
    latitude: 31.83908,
    longitude: -85.92852,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 10,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Pike_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '305a0b2da81bf82a36855edefb8beaa4'
  }, {
    id: 'a68fe64c-3f99-30c6-9a07-515068280ddf',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Randolph County, Alabama',
    latitude: 33.304,
    longitude: -85.44331,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 9,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Randolph_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '930cd3597c2350242752c7ee2b7c2aca'
  }, {
    id: 'dfbbd7f3-479a-3f37-8d59-db1c8e89e878',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Russell County, Alabama',
    latitude: 32.28585,
    longitude: -85.16153,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Russell_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '49ecdb290ab7810af97ae5d9353c2cc2'
  }, {
    id: '113b1f16-d17a-3cf1-b525-386f1af2271f',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Shelby County, Alabama',
    latitude: 33.2824,
    longitude: -86.68359,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 104,
    totalDeaths: 3,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Shelby_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '3d14de9ffc1e063b03810721cf17b389'
  }, {
    id: '35b27272-cb17-342c-98ce-900246bd39f8',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'St. Clair County, Alabama',
    latitude: 33.69021,
    longitude: -86.31076,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 22,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'St._Clair_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'd7254532adea9b2a346ed9b621de71b6'
  }, {
    id: '61fe3414-ae68-37b9-be10-39ef511aa8d7',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Sumter County, Alabama',
    latitude: 32.65149,
    longitude: -88.13106,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 7,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Sumter_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'e3a9b7faea716a481da18262ba19ad67'
  }, {
    id: '8c6c5be7-0671-3d6a-9106-68c8ec53c2a7',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Talladega County, Alabama',
    latitude: 33.40126,
    longitude: -86.14896,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 11,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Talladega_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '23300529b55d787822cd0b7361ee2fc0'
  }, {
    id: '950093c3-0628-3c0a-9972-f703730d8429',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Tallapoosa County, Alabama',
    latitude: 32.79993,
    longitude: -85.80335,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 18,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Tallapoosa_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '07e8a9956b8bb32553f17aa97c0e536e'
  }, {
    id: 'cae35198-7d81-3a1b-b4bd-9bfd06636de3',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Tuscaloosa County, Alabama',
    latitude: 33.30667,
    longitude: -87.45317,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 41,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Tuscaloosa_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '628f40d4370ffb6a766eddeaab4c85e5'
  }, {
    id: '46a7f4a8-85a0-3c55-ab55-e076340aecd4',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Walker County, Alabama',
    latitude: 33.75914,
    longitude: -87.29501,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 48,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Walker_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '0f3218584ce9c67fa8fbd8cba917e67c'
  }, {
    id: 'bfedb847-a98f-3ded-878e-5c662ddedf5a',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Washington County, Alabama',
    latitude: 31.40602,
    longitude: -88.17585,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 4,
    totalDeaths: 1,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Washington_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '71166edd2e7ae2e306f8d415bdb5c843'
  }, {
    id: '7efa42ab-38af-3c3e-b581-9312525a008e',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Wilcox County, Alabama',
    latitude: 32.04816,
    longitude: -87.26157,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 5,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Wilcox_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: 'f0484de2735469c614c84a49ab8602b1'
  }, {
    id: '5bbfbd9f-2cf2-31b6-8726-3f930e836351',
    type: 'latestHealthRecords',
    dataSource: 'https://news.yahoo.com/coronavirus',
    label: 'Winston County, Alabama',
    latitude: 34.14589,
    longitude: -87.3733,
    numActiveCases: 0,
    numDeaths: 0,
    numPendingTests: 0,
    numRecoveredCases: 0,
    numTested: 0,
    referenceDate: '2020-04-03T00:00Z',
    totalConfirmedCases: 3,
    totalDeaths: 0,
    totalRecoveredCases: 0,
    totalTestedCases: 0,
    wikiId: 'Winston_County,_Alabama',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    stateId: '213fe69502445ed67ae8b99d22838802',
    countyId: '71c9e63b89a22315f4f249848cab712b'
  }];
  _exports.default = _default;
});
;define("covid-19-dashboard/mirage/fixtures/metadata", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = [{
    id: 'info',
    healthRecordsStartDate: '2020-04-03T00:00Z',
    healthRecordsEndDate: '2020-04-03T00:00Z',
    publishedDate: '2020-04-03T03:00Z'
  }];
  _exports.default = _default;
});
;define("covid-19-dashboard/mirage/fixtures/states", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = [{
    id: '213fe69502445ed67ae8b99d22838802',
    label: 'Alabama',
    latitude: 32.78488,
    longitude: -86.83158,
    population: 4486508,
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8',
    wikiId: 'Alabama',
    countyIds: ['014ec7cedf31ffeb697c41225fd6c839', '037a13cc1e282b176a0b6414b41cc98d', '054290337334a77761a253a70bfc7fb6', '07e8a9956b8bb32553f17aa97c0e536e', '0ccae1c8732add5b6badd0935710a4b2', '0deac4a0500288dfa2ff1c6077fd4afb', '0f3218584ce9c67fa8fbd8cba917e67c', '1f3319584eca4062759843e936929fc4', '1fdace681a9994552f11ecfa40b34eaa', '20910aa784850b384530f4f316c957df', '22ee1b39473ed75b3baca3e89be181a8', '23300529b55d787822cd0b7361ee2fc0', '2665b233c5c4092d108a034aa62fe596', '2b7ccc9bc0690ac2ddc25a4145a6ced9', '305a0b2da81bf82a36855edefb8beaa4', '3433c89192102177725a8095a408bd28', '348ffcbe99a3606ef95778c5f6738997', '351242f5cb73a16710a5ea867dd38d4e', '3ccc194192cd7f04a9d7ec90c0002cfe', '3d14de9ffc1e063b03810721cf17b389', '3d7af055e9b1d42a93ed8d4879d123a6', '4382846735e1d2b8987a3b6e34734fbb', '43e6b42296ad36c2ff19f0233559e2e7', '48c77846a72ddc9507e0b458509fe2fb', '49ecdb290ab7810af97ae5d9353c2cc2', '51335878ca8d2276027e97dc9957ab9d', '5196ca064ada8e4bf642e1a9baa4570a', '53166dfe18f78edeebebf155212b0518', '54ac91661ab493c7834d22e2d6d1250a', '555ba6ccd9f3e05f5debbca3c4c37478', '5739115715feb6cfca4b49f0c779bee8', '5a1f2372194bef03bd01aa9da438fcaa', '5e61bbc0f70c87b7d49969d45dc9d665', '5f03e0239c83d6f53b9e111f54505b13', '628f40d4370ffb6a766eddeaab4c85e5', '6458c33b1f9d82ad6bec2e12e4511e93', '6fd4ce998e97183d7529ebb7b64a0908', '71166edd2e7ae2e306f8d415bdb5c843', '712406df4fcf9a8a437067968812a622', '7198e291897cffe741f9f80a1a722c0f', '71c9e63b89a22315f4f249848cab712b', '78fb973e0330b5bef80178cb2ee15544', '82b6fad209177a89ed55c406ce1eb32d', '8e2f5bcc36efeb53a174979103e9a3e6', '930cd3597c2350242752c7ee2b7c2aca', '94369cd5664b13b93225ad29adeef8a0', '96f8be6753733997c8239f2863fbe8d8', '9b2bde169e2daa168fa213290d4bf3c9', '9f02992736c51f11d3eb22a7b688505d', 'a1bd26ff0bc0ab67c37e726191ccdc2e', 'aeb6358eab9eabeba46c635f24ee9140', 'b1851629065196b075d2c54eef8bb668', 'b685338cfc9d4cfe9db875026ee519d0', 'bf5fb0dffbd6660abd15196324e008a8', 'c0507a92e8446ed7d6ae03c0d3b5b625', 'c912a3d93f51fb76fe1744f6aca14818', 'ca44cc9de34d9fd68a1a540d8dd92e92', 'd72542e15a37de8ad0cb97a1e395043e', 'd7254532adea9b2a346ed9b621de71b6', 'd7f34c76271abd72a4b8041d74c47677', 'e3a9b7faea716a481da18262ba19ad67', 'e62208aa9ae5e323dd722eef5f5e1066', 'e6fb887875b7d810f82cece691937d30', 'ed9a383ec4385ddc91bc4fb04763b6f3', 'f0484de2735469c614c84a49ab8602b1', 'f27ab286a23fa10294c895d1cba6cbf5', 'fc42790a0bf3093a5aba63b01f23586e']
  }, {
    id: '10ef5754c533385d817f2fbd0d742f64',
    label: 'Isle of Man',
    latitude: 54.23738,
    longitude: -4.55439,
    population: null,
    wikiId: 'Isle_of_Man',
    countryId: '5ad75a758f27c089b52a1eac8dca7e0d'
  }, {
    id: 'e15997c74a71c5d9263df6f7a21bc191',
    label: 'Alaska',
    latitude: 63.0365,
    longitude: -149.106,
    population: 643786,
    wikiId: 'Alaska',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '3fe5003edc0cb6c83962dbd74d35dd50',
    label: 'Arizona',
    latitude: 34.29302,
    longitude: -111.66473,
    population: 5456453,
    wikiId: 'Arizona',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '46aaf459104e9ce5d45eaa017ac349c2',
    label: 'Arkansas',
    latitude: 34.89978,
    longitude: -92.43864,
    population: 2710079,
    wikiId: 'Arkansas',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '356779a9a1696714480f57fa3fb66d4c',
    label: 'California',
    latitude: 37.24609,
    longitude: -119.61038,
    population: 35116033,
    wikiId: 'California',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '15e49475e42539feed93fc5cce25d3cb',
    label: 'Colorado',
    latitude: 38.99854,
    longitude: -105.54781,
    population: 4506542,
    wikiId: 'Colorado',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: 'f7529880ccaf91ff331809e9fe98f883',
    label: 'Connecticut',
    latitude: 41.62107,
    longitude: -72.72539,
    population: 3460503,
    wikiId: 'Connecticut',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: 'ba290ff950475708a10987cb31e6274c',
    label: 'Delaware',
    latitude: 38.99291,
    longitude: -75.50646,
    population: 807385,
    wikiId: 'Delaware',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: 'ccc6ba7bbaddba7b96a9973da17b4e47',
    label: 'District of Columbia',
    latitude: 38.89381,
    longitude: -77.01465,
    population: 570898,
    wikiId: null,
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: 'eeaca0ed2f6a35370c77de30792debb8',
    label: 'Florida',
    latitude: 28.63187,
    longitude: -82.47139,
    population: 16713149,
    wikiId: 'Florida',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '7f3097563d468719d72c6df98a69f6de',
    label: 'Georgia',
    latitude: 32.64933,
    longitude: -83.44672,
    population: 8560310,
    wikiId: 'Georgia_(U.S._state)',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: 'a85df3d66bde576d3b62caaf527f2daa',
    label: 'Hawaii',
    latitude: 20.25382,
    longitude: -156.35411,
    population: 1244898,
    wikiId: 'Hawaii',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '47b231eae4bf87fa405e34eb9273b741',
    label: 'Idaho',
    latitude: 44.38899,
    longitude: -114.65945,
    population: 1341131,
    wikiId: 'Idaho',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '66c2b329479ee151b4c6b257c0b7a9b7',
    label: 'Illinois',
    latitude: 40.06446,
    longitude: -89.19884,
    population: 12600620,
    wikiId: 'Illinois',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: 'c5376d00573c5858adf7ed894d0491b9',
    label: 'Indiana',
    latitude: 39.90805,
    longitude: -86.27552,
    population: 6159068,
    wikiId: 'Indiana',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '0daaf4a9abe3920c453a7f1f82a9bb19',
    label: 'Iowa',
    latitude: 42.07477,
    longitude: -93.49931,
    population: 2936760,
    wikiId: 'Iowa',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '7c0e2b92f76ed5847aa48a3a1e70ae7d',
    label: 'Kansas',
    latitude: 38.48473,
    longitude: -98.38016,
    population: 2715884,
    wikiId: 'Kansas',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '980ceec1dba2d36c2ba867f683b47838',
    label: 'Kentucky',
    latitude: 37.52728,
    longitude: -85.2876,
    population: 4092891,
    wikiId: 'Kentucky',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '39da6b7e3479522718668deaf7e6f304',
    label: 'Louisiana',
    latitude: 31.08061,
    longitude: -92.01531,
    population: 4482646,
    wikiId: 'Louisiana',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '41695c8c512c53044b7b787368687ac8',
    label: 'Maine',
    latitude: 45.35342,
    longitude: -69.2224,
    population: 1294464,
    wikiId: 'Maine',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '11ea71f253acf02a2d126a0901e765a7',
    label: 'Maryland',
    latitude: 39.04657,
    longitude: -76.79495,
    population: 5458137,
    wikiId: 'Maryland',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: 'aeb264fc98dd9ebbcefe8d1eafee79f9',
    label: 'Massachusetts Bay',
    latitude: 42.1842,
    longitude: -71.71818,
    population: 6427801,
    wikiId: 'Massachusetts_Bay',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '8eadc5d3e1f1919c527b6d865e226a88',
    label: 'Michigan',
    latitude: 43.7427,
    longitude: -84.62167,
    population: 10050446,
    wikiId: 'Michigan',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '45009b4a16ef03ba8bb5b15665ef4469',
    label: 'Minnesota',
    latitude: 46.31668,
    longitude: -94.30921,
    population: 5019720,
    wikiId: 'Minnesota',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '14c5492ce2fe855f408481fdbd13f7a6',
    label: 'Mississippi',
    latitude: 32.722,
    longitude: -89.65551,
    population: 2871782,
    wikiId: 'Mississippi',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '06fa309b609b7c8f7c39a88abe2d507c',
    label: 'Missouri',
    latitude: 38.2589,
    longitude: -92.43659,
    population: 5672579,
    wikiId: 'Missouri',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: 'a8088b760fb315d2964735686800b203',
    label: 'Montana',
    latitude: 47.03349,
    longitude: -109.64506,
    population: 909453,
    wikiId: 'Montana',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '20639b767478006218447b27e4b853cb',
    label: 'Nebraska',
    latitude: 41.50075,
    longitude: -99.68095,
    population: 1729180,
    wikiId: 'Nebraska',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '8fcebe1ce891c49c60a3c26b317ebafb',
    label: 'Nevada',
    latitude: 39.35649,
    longitude: -116.65543,
    population: 2173491,
    wikiId: 'Nevada',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '86db7eb10eb3963430f2f777499fe29a',
    label: 'New Hampshire',
    latitude: 44.00118,
    longitude: -71.6342,
    population: 1275056,
    wikiId: 'New_Hampshire',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '5ac9ad692818005c50aae8afe95861d6',
    label: 'New Jersey',
    latitude: 40.14323,
    longitude: -74.72671,
    population: 8590300,
    wikiId: 'New_Jersey',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '2a18ef32f87bb40c0d17130828cfb473',
    label: 'New Mexico',
    latitude: 34.42132,
    longitude: -106.1084,
    population: 1855059,
    wikiId: 'New_Mexico',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: 'fede9f03ea10983a84201b04a1453558',
    label: 'New York (state)',
    latitude: 42.85535,
    longitude: -76.50167,
    population: 19157532,
    wikiId: 'New_York_(state)',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '5c520b852c5d7c99a71f1635ae84e1d2',
    label: 'North Carolina',
    latitude: 35.21962,
    longitude: -80.01955,
    population: 8320146,
    wikiId: 'North_Carolina',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '3971735868c1886348955beb9c7d72bd',
    label: 'North Dakota',
    latitude: 47.44626,
    longitude: -100.46933,
    population: 634110,
    wikiId: 'North_Dakota',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '4ec96adb9cc39333f3d2024b28f2503f',
    label: 'Ohio',
    latitude: 40.29147,
    longitude: -82.78995,
    population: 11421267,
    wikiId: 'Ohio',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '92aec0ba411203aa3a57aec94b108ed6',
    label: 'Oklahoma',
    latitude: 35.58344,
    longitude: -97.50821,
    population: 3493714,
    wikiId: 'Oklahoma',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: 'da4d1129a255f83fb03bf32fde034ecc',
    label: 'Oregon',
    latitude: 44.11559,
    longitude: -120.51484,
    population: 3521515,
    wikiId: 'Oregon',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '9ac31dfb3a2f5b994f4009eb0a3c0949',
    label: 'Pennsylvania',
    latitude: 40.87366,
    longitude: -77.79939,
    population: 12335091,
    wikiId: 'Pennsylvania',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '988e1885f34fc9058049b872a11236c5',
    label: 'Rhode Island',
    latitude: 41.67588,
    longitude: -71.55475,
    population: 1069725,
    wikiId: 'Rhode_Island',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: 'aeeb87d118446317ff4f4d5e8d19283f',
    label: 'South Carolina',
    latitude: 33.62646,
    longitude: -80.9474,
    population: 4107183,
    wikiId: 'South_Carolina',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '9b0faa6c816be68592b17dae38fd88b3',
    label: 'South Dakota',
    latitude: 44.43555,
    longitude: -100.22959,
    population: 761063,
    wikiId: 'South_Dakota',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: 'a5c53b081bf565526eb3779db999becf',
    label: 'Tennessee',
    latitude: 35.84337,
    longitude: -86.34375,
    population: 5797289,
    wikiId: 'Tennessee',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '86871c416a7dbed7e5cc229d143d8d82',
    label: 'Texas',
    latitude: 31.48821,
    longitude: -99.35343,
    population: 21779893,
    wikiId: 'Texas',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '6a382f5bfa3db109c81ec4adbf70ff26',
    label: 'Utah',
    latitude: 39.32372,
    longitude: -111.67824,
    population: 2316256,
    wikiId: 'Utah',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: 'de30bd840230da1493819f803aff6e9e',
    label: 'Vermont',
    latitude: 43.87165,
    longitude: -72.45165,
    population: 616592,
    wikiId: 'Vermont',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: 'c8b287075ce4f11c834d2a0ada967ddc',
    label: 'Virginia',
    latitude: 37.51638,
    longitude: -78.83044,
    population: 7293542,
    wikiId: 'Virginia',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '11d9591c9feee10969173c347e551a9a',
    label: 'Washington',
    latitude: 47.40403,
    longitude: -120.50621,
    population: 6068996,
    wikiId: 'Washington_(state)',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '40165c0d1d578a7bbded085c5def3f48',
    label: 'West Virginia',
    latitude: 38.64249,
    longitude: -80.61351,
    population: 1801873,
    wikiId: 'West_Virginia',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '5aeb407b7ca7f3fe0dc50003b1e0712f',
    label: 'Wisconsin',
    latitude: 44.63824,
    longitude: -90.01202,
    population: 5441196,
    wikiId: 'Wisconsin',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }, {
    id: '823ee6401883db6f9e5865f51c77d97c',
    label: 'Wyoming',
    latitude: 42.9996,
    longitude: -107.5516,
    population: 498703,
    wikiId: 'Wyoming',
    countryId: '09d4bca31e2fd8b0f57f79f85ed42bd8'
  }];
  _exports.default = _default;
});
;define("covid-19-dashboard/mirage/models/country", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.Model.extend({
    states: (0, _emberCliMirage.hasMany)(),
    counties: (0, _emberCliMirage.hasMany)()
  });

  _exports.default = _default;
});
;define("covid-19-dashboard/mirage/models/county", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.Model.extend({
    state: (0, _emberCliMirage.belongsTo)()
  });

  _exports.default = _default;
});
;define("covid-19-dashboard/mirage/models/health-record", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.Model.extend({
    county: (0, _emberCliMirage.belongsTo)(),
    state: (0, _emberCliMirage.belongsTo)(),
    country: (0, _emberCliMirage.belongsTo)()
  });

  _exports.default = _default;
});
;define("covid-19-dashboard/mirage/models/latest-health-record", ["exports", "covid-19-dashboard/mirage/models/health-record"], function (_exports, _healthRecord) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _healthRecord.default.extend();

  _exports.default = _default;
});
;define("covid-19-dashboard/mirage/models/metadata", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.Model.extend({});

  _exports.default = _default;
});
;define("covid-19-dashboard/mirage/models/state", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.Model.extend({
    country: (0, _emberCliMirage.belongsTo)(),
    counties: (0, _emberCliMirage.hasMany)()
  });

  _exports.default = _default;
});
;define("covid-19-dashboard/mirage/scenarios/default", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default(server) {
    server.loadFixtures();
  }
});
;define("covid-19-dashboard/mirage/serializers/application", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

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

  var _default = /*#__PURE__*/function (_JSONAPISerializer) {
    _inherits(_default, _JSONAPISerializer);

    var _super = _createSuper(_default);

    function _default() {
      var _this;

      _classCallCheck(this, _default);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "alwaysIncludeLinkageData", true);

      _defineProperty(_assertThisInitialized(_this), "keyForAttribute", function (attr) {
        return attr;
      });

      _defineProperty(_assertThisInitialized(_this), "keyForModel", function (attr) {
        return Ember.String.camelize(attr);
      });

      _defineProperty(_assertThisInitialized(_this), "keyForRelationship", function (attr) {
        return Ember.String.camelize(attr);
      });

      _defineProperty(_assertThisInitialized(_this), "serializeIds", 'always');

      return _this;
    }

    return _default;
  }(_emberCliMirage.JSONAPISerializer);

  _exports.default = _default;
});
;define("covid-19-dashboard/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _didInsert.default;
    }
  });
});
;define("covid-19-dashboard/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _didUpdate.default;
    }
  });
});
;define("covid-19-dashboard/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _willDestroy.default;
    }
  });
});
;define("covid-19-dashboard/router", ["exports", "covid-19-dashboard/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

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

  var Router = /*#__PURE__*/function (_EmberRouter) {
    _inherits(Router, _EmberRouter);

    var _super = _createSuper(Router);

    function Router() {
      var _this;

      _classCallCheck(this, Router);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "location", _environment.default.locationType);

      _defineProperty(_assertThisInitialized(_this), "rootURL", _environment.default.rootURL);

      return _this;
    }

    return Router;
  }(Ember.Router);

  _exports.default = Router;
  Router.map(function () {
    this.route('four-oh-four', {
      path: '/missing'
    });
    this.route('dashboard', {
      path: '/'
    }, function () {
      this.route('location', {
        path: '/:location_id'
      });
    });
  });
});
;define("covid-19-dashboard/routes/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  var ApplicationRoute = (_class = (_temp = /*#__PURE__*/function (_EmberRoute) {
    _inherits(ApplicationRoute, _EmberRoute);

    var _super = _createSuper(ApplicationRoute);

    function ApplicationRoute() {
      var _this;

      _classCallCheck(this, ApplicationRoute);

      _this = _super.apply(this, arguments);

      _initializerDefineProperty(_assertThisInitialized(_this), "metrics", _descriptor, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "router", _descriptor2, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "intl", _descriptor3, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "metadata", _descriptor4, _assertThisInitialized(_this));

      var _assertThisInitialize = _assertThisInitialized(_this),
          metrics = _assertThisInitialize.metrics,
          router = _assertThisInitialize.router;

      router.on('routeDidChange', function () {
        var page = router.currentURL;
        var title = router.currentRouteName || 'unknown';
        metrics.trackPage({
          page: page,
          title: title
        });
      });
      return _this;
    }

    _createClass(ApplicationRoute, [{
      key: "beforeModel",
      value: function beforeModel() {
        _get(_getPrototypeOf(ApplicationRoute.prototype), "beforeModel", this).apply(this, arguments);

        return this.intl.setLocale(['en-us']);
      }
    }, {
      key: "model",
      value: function model() {
        this.metadata.fetch();
      }
    }]);

    return ApplicationRoute;
  }(Ember.Route), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "metrics", [Ember.inject.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [Ember.inject.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "intl", [Ember.inject.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "metadata", [Ember.inject.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = ApplicationRoute;
});
;define("covid-19-dashboard/routes/dashboard", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var DashboardRoute = /*#__PURE__*/function (_EmberRoute) {
    _inherits(DashboardRoute, _EmberRoute);

    var _super = _createSuper(DashboardRoute);

    function DashboardRoute() {
      _classCallCheck(this, DashboardRoute);

      return _super.apply(this, arguments);
    }

    return DashboardRoute;
  }(Ember.Route);

  _exports.default = DashboardRoute;
});
;define("covid-19-dashboard/routes/dashboard/index", ["exports", "covid-19-dashboard/services/location"], function (_exports, _location) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var DashboardIndexRoute = /*#__PURE__*/function (_EmberRoute) {
    _inherits(DashboardIndexRoute, _EmberRoute);

    var _super = _createSuper(DashboardIndexRoute);

    function DashboardIndexRoute() {
      _classCallCheck(this, DashboardIndexRoute);

      return _super.apply(this, arguments);
    }

    _createClass(DashboardIndexRoute, [{
      key: "redirect",
      value: function redirect() {
        this.replaceWith('dashboard.location', _location.GLOBAL_ID);
      }
    }]);

    return DashboardIndexRoute;
  }(Ember.Route);

  _exports.default = DashboardIndexRoute;
});
;define("covid-19-dashboard/routes/dashboard/location", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2, _temp;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  var DashboardLocationRoute = (_class = (_temp = /*#__PURE__*/function (_EmberRoute) {
    _inherits(DashboardLocationRoute, _EmberRoute);

    var _super = _createSuper(DashboardLocationRoute);

    function DashboardLocationRoute() {
      var _this;

      _classCallCheck(this, DashboardLocationRoute);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _initializerDefineProperty(_assertThisInitialized(_this), "location", _descriptor, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "intl", _descriptor2, _assertThisInitialized(_this));

      return _this;
    }

    _createClass(DashboardLocationRoute, [{
      key: "model",
      value: function model(_ref) {
        var location_id = _ref.location_id;
        return location_id;
      }
    }, {
      key: "updateTitle",
      value: function updateTitle(_ref2) {
        var label = _ref2.attributes.label;
        document.title = this.intl.t('pageTitle', {
          label: label
        });
      }
    }, {
      key: "setupController",
      value: function setupController(controller, model) {
        var _this2 = this;

        _get(_getPrototypeOf(DashboardLocationRoute.prototype), "setupController", this).apply(this, arguments);

        controller.fetchLocation(model).then(function (location) {
          if (location) {
            _this2.updateTitle(location);
          } else {
            _this2.transitionTo('dashboard');
          }
        });
      }
    }]);

    return DashboardLocationRoute;
  }(Ember.Route), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "location", [Ember.inject.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "intl", [Ember.inject.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = DashboardLocationRoute;
});
;define("covid-19-dashboard/routes/four-oh-four", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var FourOhFourRoute = /*#__PURE__*/function (_EmberRoute) {
    _inherits(FourOhFourRoute, _EmberRoute);

    var _super = _createSuper(FourOhFourRoute);

    function FourOhFourRoute() {
      _classCallCheck(this, FourOhFourRoute);

      return _super.apply(this, arguments);
    }

    return FourOhFourRoute;
  }(Ember.Route);

  _exports.default = FourOhFourRoute;
});
;define("covid-19-dashboard/services/elide", ["exports", "covid-19-dashboard/config/environment", "ember-concurrency", "uuid"], function (_exports, _environment, _emberConcurrency, _uuid) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  var _ENV$APP = _environment.default.APP,
      host = _ENV$APP.host,
      _ENV$APP$namespace = _ENV$APP.namespace,
      namespace = _ENV$APP$namespace === void 0 ? '' : _ENV$APP$namespace;

  var escape = function escape(value) {
    var fn = function fn(v) {
      return "".concat(('' + v).replace(/'/g, "\\'").replace(/,/g, '\\,'));
    };

    if (Array.isArray(value)) {
      return value.map(fn);
    }

    return fn(value);
  };

  var operators = {
    eq: function eq(f, v) {
      return "".concat(f, "=='").concat(escape(v), "'");
    },
    isIn: function isIn(f, v) {
      return "".concat(f, "=in=(").concat(escape(v).map(function (e) {
        return "'".concat(e, "'");
      }).join(','), ")");
    },
    search: function search(f, v) {
      return "".concat(f, "=='*").concat(v, "*'");
    },
    isNull: function isNull(f, v) {
      return "".concat(v, "=isnull=true");
    },
    notNull: function notNull(f, v) {
      return "".concat(v, "=isnull=false");
    },
    lt: function lt(f, v) {
      return "".concat(f, "=lt=").concat(v);
    },
    gt: function gt(f, v) {
      return "".concat(f, "=gt=").concat(v);
    },
    le: function le(f, v) {
      return "".concat(f, "=le=").concat(v);
    },
    ge: function ge(f, v) {
      return "".concat(f, "=ge=").concat(v, ")");
    }
  };
  var ElideService = (_dec = (0, _emberConcurrency.task)( /*#__PURE__*/regeneratorRuntime.mark(function _callee(model, request) {
    var controller, signal, traceId, url, result, json;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            controller = new AbortController();
            signal = controller.signal;
            traceId = (0, _uuid.v1)();
            _context.prev = 3;
            url = this._buildUrl(model, request);
            _context.next = 7;
            return fetch(url, {
              headers: {
                'X-TRACE-ID': traceId
              },
              signal: signal
            });

          case 7:
            result = _context.sent;
            _context.next = 10;
            return result.json();

          case 10:
            json = _context.sent;
            return _context.abrupt("return", json);

          case 12:
            _context.prev = 12;
            controller.abort();
            return _context.finish(12);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[3,, 12, 15]]);
  })), (_class = (_temp = /*#__PURE__*/function (_EmberService) {
    _inherits(ElideService, _EmberService);

    var _super = _createSuper(ElideService);

    function ElideService() {
      var _this;

      _classCallCheck(this, ElideService);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _initializerDefineProperty(_assertThisInitialized(_this), "fetch", _descriptor, _assertThisInitialized(_this));

      return _this;
    }

    _createClass(ElideService, [{
      key: "_buildUrl",
      value: function _buildUrl(model) {
        var request = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _request$fields = request.fields,
            fields = _request$fields === void 0 ? {} : _request$fields,
            _request$sort = request.sort,
            sort = _request$sort === void 0 ? null : _request$sort,
            _request$include = request.include,
            include = _request$include === void 0 ? [] : _request$include,
            _request$offset = request.offset,
            offset = _request$offset === void 0 ? 0 : _request$offset,
            _request$limit = request.limit,
            limit = _request$limit === void 0 ? 4000 : _request$limit;
        var url = new URL("".concat(host).concat(namespace, "/").concat(model)); //fields

        Object.entries(fields).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              val = _ref2[1];

          return url.searchParams.append("fields[".concat(key, "]"), val.join(','));
        }); //filters

        var filters = Object.keys(operators).map(function (op) {
          var filter = request[op] || {};
          return Object.entries(filter).map(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                f = _ref4[0],
                v = _ref4[1];

            return operators[op](f, v);
          }).join(';');
        }).filter(function (f) {
          return f;
        }).join(';');

        if (filters.length) {
          url.searchParams.append('filter', filters);
        }

        if (sort) {
          url.searchParams.append('sort', sort);
        } //include


        if (include.length) {
          url.searchParams.append('include', include.join(','));
        } //pagination


        url.searchParams.append('page[offset]', offset);
        url.searchParams.append('page[limit]', limit);
        return url;
      }
    }]);

    return ElideService;
  }(Ember.Service), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "fetch", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ElideService;
});
;define("covid-19-dashboard/services/ember-leaflet", ["exports", "ember-leaflet/services/ember-leaflet"], function (_exports, _emberLeaflet) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberLeaflet.default;
    }
  });
});
;define("covid-19-dashboard/services/intl", ["exports", "ember-intl/services/intl"], function (_exports, _intl) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _intl.default;
    }
  });
});
;define("covid-19-dashboard/services/location", ["exports", "ember-concurrency"], function (_exports, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.GLOBAL_ID = void 0;

  var _dec, _class, _descriptor, _descriptor2, _temp;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  var GLOBAL_ID = 'Earth';
  _exports.GLOBAL_ID = GLOBAL_ID;
  var LocationService = (_dec = (0, _emberConcurrency.task)( /*#__PURE__*/regeneratorRuntime.mark(function _callee(wikiId) {
    var counties, states, countries, locations, location, _location$included, _location$included2, _location$data, selectedLocation, country, state, type;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            counties = this.elide.fetch.perform('counties', {
              eq: {
                wikiId: wikiId
              },
              fields: {
                counties: ['id', 'label', 'latitude', 'longitude', 'population', 'wikiId'],
                states: ['id', 'label', 'wikiId'],
                countries: ['id', 'label', 'wikiId']
              },
              include: ['state', 'state.country']
            });
            states = this.elide.fetch.perform('states', {
              eq: {
                wikiId: wikiId
              },
              fields: {
                states: ['id', 'label', 'latitude', 'longitude', 'population', 'wikiId', 'counties'],
                countries: ['id', 'label', 'wikiId']
              },
              include: ['country']
            });
            countries = this.elide.fetch.perform('countries', {
              eq: {
                wikiId: wikiId
              },
              fields: {
                countries: ['id', 'label', 'latitude', 'longitude', 'population', 'wikiId', 'states']
              }
            });
            _context.next = 5;
            return (0, _emberConcurrency.all)([counties, states, countries]);

          case 5:
            locations = _context.sent;
            location = locations.find(function (loc) {
              var _loc$data;

              return (_loc$data = loc.data) === null || _loc$data === void 0 ? void 0 : _loc$data.length;
            });

            if (!location) {
              _context.next = 15;
              break;
            }

            _location$data = _slicedToArray(location.data, 1), selectedLocation = _location$data[0];
            country = (_location$included = location.included) === null || _location$included === void 0 ? void 0 : _location$included.find(function (rel) {
              return rel.type === 'countries';
            });
            state = (_location$included2 = location.included) === null || _location$included2 === void 0 ? void 0 : _location$included2.find(function (rel) {
              return rel.type === 'states';
            });
            type = selectedLocation.attributes.wikiId === GLOBAL_ID ? 'global' : selectedLocation.type;
            return _context.abrupt("return", _objectSpread({}, selectedLocation, {
              country: country,
              state: state,
              type: type
            }));

          case 15:
            return _context.abrupt("return", undefined);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })), (_class = (_temp = /*#__PURE__*/function (_EmberService) {
    _inherits(LocationService, _EmberService);

    var _super = _createSuper(LocationService);

    function LocationService() {
      var _this;

      _classCallCheck(this, LocationService);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _initializerDefineProperty(_assertThisInitialized(_this), "elide", _descriptor, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "fetchTask", _descriptor2, _assertThisInitialized(_this));

      return _this;
    }

    _createClass(LocationService, [{
      key: "fetch",
      value: function fetch(wikiId) {
        return this.fetchTask.perform(wikiId);
      }
    }]);

    return LocationService;
  }(Ember.Service), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "elide", [Ember.inject.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "fetchTask", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = LocationService;
});
;define("covid-19-dashboard/services/metadata", ["exports", "ember-concurrency"], function (_exports, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _descriptor2, _descriptor3, _temp;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  var MetadataService = (_dec = (0, _emberConcurrency.task)( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var metadata;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this.elide.fetch.perform('metadata');

          case 2:
            metadata = _context.sent;
            this.metadata = metadata.data[0].attributes;
            return _context.abrupt("return", this.metadata);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })).restartable(), (_class = (_temp = /*#__PURE__*/function (_EmberService) {
    _inherits(MetadataService, _EmberService);

    var _super = _createSuper(MetadataService);

    function MetadataService() {
      var _this;

      _classCallCheck(this, MetadataService);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _initializerDefineProperty(_assertThisInitialized(_this), "elide", _descriptor, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "metadata", _descriptor2, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "fetchTask", _descriptor3, _assertThisInitialized(_this));

      return _this;
    }

    _createClass(MetadataService, [{
      key: "fetch",
      value: function fetch() {
        return this.fetchTask.perform();
      }
    }, {
      key: "publishedDate",
      get: function get() {
        var _this$metadata;

        return (_this$metadata = this.metadata) === null || _this$metadata === void 0 ? void 0 : _this$metadata.publishedDate;
      }
    }, {
      key: "healthRecordsEndDate",
      get: function get() {
        var _this$metadata2;

        return (_this$metadata2 = this.metadata) === null || _this$metadata2 === void 0 ? void 0 : _this$metadata2.healthRecordsEndDate;
      }
    }, {
      key: "timeSinceRefresh",
      get: function get() {
        var metadata = this.metadata;
        if (!metadata) return null;
        var publishedTime = Date.parse(metadata.publishedDate);
        var currentTime = new Date().getTime();
        return Math.round((currentTime - publishedTime) / (1000 * 60));
      }
    }]);

    return MetadataService;
  }(Ember.Service), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "elide", [Ember.inject.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "metadata", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "fetchTask", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = MetadataService;
});
;define("covid-19-dashboard/services/metrics", ["exports", "ember-metrics/services/metrics"], function (_exports, _metrics) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _metrics.default;
    }
  });
});
;define("covid-19-dashboard/services/screen", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _temp;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  var ScreenService = (_class = (_temp = /*#__PURE__*/function (_EmberService) {
    _inherits(ScreenService, _EmberService);

    var _super = _createSuper(ScreenService);

    function ScreenService() {
      var _this;

      _classCallCheck(this, ScreenService);

      _this = _super.apply(this, arguments);

      _initializerDefineProperty(_assertThisInitialized(_this), "isMobile", _descriptor, _assertThisInitialized(_this));

      var query = window.matchMedia('(max-width: 900px)');
      _this.isMobile = query.matches;
      query.addListener(function (e) {
        return _this.isMobile = e.matches;
      });
      return _this;
    }

    return ScreenService;
  }(Ember.Service), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "isMobile", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = ScreenService;
});
;define("covid-19-dashboard/services/text-measurer", ["exports", "ember-text-measurer/services/text-measurer"], function (_exports, _textMeasurer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _textMeasurer.default;
    }
  });
});
;define("covid-19-dashboard/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "+PpFwgiI",
    "block": "{\"symbols\":[],\"statements\":[[1,0,0,0,[31,0,0,[27,[26,1,\"CallHead\"],[]],[[31,0,0,[27,[26,0,\"CallHead\"],[]],null,null]],null]]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "covid-19-dashboard/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("covid-19-dashboard/templates/components/basic-dropdown-content", ["exports", "ember-basic-dropdown/templates/components/basic-dropdown-content"], function (_exports, _basicDropdownContent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _basicDropdownContent.default;
    }
  });
});
;define("covid-19-dashboard/templates/components/basic-dropdown-trigger", ["exports", "ember-basic-dropdown/templates/components/basic-dropdown-trigger"], function (_exports, _basicDropdownTrigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _basicDropdownTrigger.default;
    }
  });
});
;define("covid-19-dashboard/templates/components/basic-dropdown", ["exports", "ember-basic-dropdown/templates/components/basic-dropdown"], function (_exports, _basicDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _basicDropdown.default;
    }
  });
});
;define("covid-19-dashboard/templates/components/power-select-multiple", ["exports", "ember-power-select/templates/components/power-select-multiple"], function (_exports, _powerSelectMultiple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _powerSelectMultiple.default;
    }
  });
});
;define("covid-19-dashboard/templates/components/power-select-multiple/trigger", ["exports", "ember-power-select/templates/components/power-select-multiple/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _trigger.default;
    }
  });
});
;define("covid-19-dashboard/templates/components/power-select", ["exports", "ember-power-select/templates/components/power-select"], function (_exports, _powerSelect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _powerSelect.default;
    }
  });
});
;define("covid-19-dashboard/templates/components/power-select/before-options", ["exports", "ember-power-select/templates/components/power-select/before-options"], function (_exports, _beforeOptions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _beforeOptions.default;
    }
  });
});
;define("covid-19-dashboard/templates/components/power-select/options", ["exports", "ember-power-select/templates/components/power-select/options"], function (_exports, _options) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _options.default;
    }
  });
});
;define("covid-19-dashboard/templates/components/power-select/placeholder", ["exports", "ember-power-select/templates/components/power-select/placeholder"], function (_exports, _placeholder) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _placeholder.default;
    }
  });
});
;define("covid-19-dashboard/templates/components/power-select/power-select-group", ["exports", "ember-power-select/templates/components/power-select/power-select-group"], function (_exports, _powerSelectGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _powerSelectGroup.default;
    }
  });
});
;define("covid-19-dashboard/templates/components/power-select/search-message", ["exports", "ember-power-select/templates/components/power-select/search-message"], function (_exports, _searchMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _searchMessage.default;
    }
  });
});
;define("covid-19-dashboard/templates/components/power-select/trigger", ["exports", "ember-power-select/templates/components/power-select/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _trigger.default;
    }
  });
});
;define("covid-19-dashboard/templates/dashboard", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "IfGUPcYr",
    "block": "{\"symbols\":[],\"statements\":[[1,0,0,0,[31,0,0,[27,[26,1,\"CallHead\"],[]],[[31,0,0,[27,[26,0,\"CallHead\"],[]],null,null]],null]],[1,1,0,0,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "covid-19-dashboard/templates/dashboard.hbs"
    }
  });

  _exports.default = _default;
});
;define("covid-19-dashboard/templates/dashboard/location", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "uTMwOdZV",
    "block": "{\"symbols\":[],\"statements\":[[7,\"nav\",[],[[\"@timeSinceRefresh\"],[[27,[24,0],[\"metadata\",\"timeSinceRefresh\"]]]],null],[1,1,0,0,\"\\n\"],[9,\"main\",true],[12,\"class\",\"dashboard\",null],[10],[1,1,0,0,\"\\n\"],[5,[27,[26,5,\"BlockHead\"],[]],[[27,[24,0],[\"screen\",\"isMobile\"]]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"    \"],[9,\"aside\",true],[12,\"class\",\"dashboard__left\",null],[10],[1,1,0,0,\"\\n      \"],[7,\"case-details\",[[23,\"class\",\"dashboard__global-case-details p-20\",null]],[[\"@title\",\"@publishedDate\",\"@location\"],[[31,376,1,[27,[26,0,\"CallHead\"],[]],[\"globalConfirmedCases\"],null],[27,[24,0],[\"metadata\",\"publishedDate\"]],[31,478,4,[27,[26,4,\"CallHead\"],[]],null,[[\"attributes\"],[[31,495,4,[27,[26,4,\"CallHead\"],[]],null,[[\"wikiId\"],[\"Earth\"]]]]]]]],null],[1,1,0,0,\"\\n      \"],[7,\"location-table\",[[23,\"class\",\"p-t-20 dashboard__divider\",null]],[[\"@fieldToShow\",\"@publishedDate\",\"@location\",\"@occlusion\"],[\"totalConfirmedCases\",[27,[24,0],[\"metadata\",\"publishedDate\"]],[27,[24,0],[\"currentLocation\"]],true]],null],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]],[1,1,0,0,\"  \"],[9,\"section\",true],[12,\"class\",\"dashboard__map-container\",null],[10],[1,1,0,0,\"\\n    \"],[7,\"map-header\",[[23,\"class\",\"dashboard__map-header\",null]],[[\"@location\"],[[27,[24,0],[\"currentLocation\"]]]],null],[1,1,0,0,\"\\n    \"],[7,\"map\",[[23,\"class\",\"dashboard__map\",null]],[[\"@fieldToShow\",\"@publishedDate\",\"@location\",\"@onLocationClick\"],[\"totalConfirmedCases\",[27,[24,0],[\"metadata\",\"publishedDate\"]],[27,[24,0],[\"currentLocation\"]],[27,[24,0],[\"onLocationSelect\"]]]],null],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n\"],[5,[27,[26,1,\"BlockHead\"],[]],[[27,[24,0],[\"screen\",\"isMobile\"]]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"    \"],[7,\"mobile-tabs\",[],[[\"@view\",\"@location\",\"@onChange\"],[[27,[24,0],[\"mobileView\"]],[27,[24,0],[\"currentLocation\"]],[31,1297,2,[27,[26,3,\"CallHead\"],[]],[[31,1301,3,[27,[26,2,\"CallHead\"],[]],[[27,[24,0],[\"mobileView\"]]],null]],null]]],null],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]],[5,[27,[26,1,\"BlockHead\"],[]],[[31,1350,2,[27,[26,8,\"CallHead\"],[]],[[31,1354,3,[27,[26,7,\"CallHead\"],[]],[[27,[24,0],[\"screen\",\"isMobile\"]]],null],[31,1381,2,[27,[26,6,\"CallHead\"],[]],[[27,[24,0],[\"mobileView\"]],\"details\"],null]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[1,1,0,0,\"    \"],[9,\"section\",true],[12,\"class\",\"dashboard__map-details p-20\",null],[10],[1,1,0,0,\"\\n      \"],[7,\"location-info\",[],[[\"@location\"],[[27,[24,0],[\"currentLocation\"]]]],null],[1,1,0,0,\"\\n\"],[5,[27,[26,1,\"BlockHead\"],[]],[[27,[24,0],[\"showLocationCaseDetails\"]]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"        \"],[7,\"case-details\",[[23,\"class\",\"dashboard__location-case-details p-y-10\",null]],[[\"@title\",\"@publishedDate\",\"@location\"],[[31,1663,1,[27,[26,0,\"CallHead\"],[]],[\"confirmedCases\"],null],[27,[24,0],[\"metadata\",\"publishedDate\"]],[27,[24,0],[\"currentLocation\"]]]],null],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]],[1,1,0,0,\"      \"],[7,\"help-links\",[[23,\"class\",\"dashboard__divider p-t-10\",null]],[[],[]],null],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[1,1,0,0,\"    \"],[9,\"section\",true],[12,\"class\",\"dashboard__mobile-breakdown\",null],[10],[1,1,0,0,\"\\n      \"],[7,\"location-table\",[[23,\"class\",\"p-t-20\",null]],[[\"@fieldToShow\",\"@publishedDate\",\"@location\",\"@occlusion\",\"@onLocationSelect\"],[\"totalConfirmedCases\",[27,[24,0],[\"metadata\",\"publishedDate\"]],[27,[24,0],[\"currentLocation\"]],false,[27,[24,0],[\"onLocationSelect\"]]]],null],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]],[11],[1,1,0,0,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"t\",\"if\",\"mut\",\"fn\",\"hash\",\"unless\",\"eq\",\"not\",\"or\"]}",
    "meta": {
      "moduleName": "covid-19-dashboard/templates/dashboard/location.hbs"
    }
  });

  _exports.default = _default;
});
;define("covid-19-dashboard/templates/four-oh-four", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "kiOwdL7Y",
    "block": "{\"symbols\":[],\"statements\":[],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "covid-19-dashboard/templates/four-oh-four.hbs"
    }
  });

  _exports.default = _default;
});
;define("covid-19-dashboard/translations/en-us", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "active": "Active",
    "ago": "{relativeTime} ago",
    "casesBy": {
      "country": "Confirmed Cases by Country",
      "county": "Confirmed Cases by County",
      "state": "Confirmed Cases by State"
    },
    "cdc": "CDC",
    "cdcTitle": "CDC Coronavirus Home",
    "confirmedCases": "Confirmed Cases",
    "covidBadge": "COVID-19 Dashboard",
    "datasourceTitle": "Data source",
    "details": "Details",
    "empty": "",
    "fatal": "Fatal",
    "global": "Global",
    "globalConfirmedCases": "Global Confirmed Cases",
    "helpTitle": "Helpful Links and Information",
    "label": {
      "dod": {
        "numActiveCases": "Active Daily Change",
        "numDeaths": "Fatal Daily Change",
        "numRecoveredCases": "Recovered Daily Change",
        "totalConfirmedCases": "Confirmed Daily Change"
      },
      "total": {
        "numActiveCases": "Total Active",
        "totalConfirmedCases": "Total Confirmed",
        "totalDeaths": "Total Fatal",
        "totalRecoveredCases": "Total Recovered"
      }
    },
    "locationDetails": "{location} Details",
    "noData": {
      "description": "Hmm it doesn't look like there's anything down here",
      "title": "No Data"
    },
    "osmAttribution": "© <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
    "pageTitle": "{label} - Covid-19 Tracker - Yahoo Knowledge Graph",
    "population": "Population",
    "recovered": "Recovered",
    "repoText": {
      "api": "API",
      "dashboard": "Dashboard",
      "data": "Data"
    },
    "repoTitle": {
      "api": "YK Covid-19 API",
      "dashboard": "YK Covid-19 Dashboard",
      "data": "YK Covid-19 Data"
    },
    "searchBar": {
      "loadingMsg": "Loading Options...",
      "noMatches": "No matches found",
      "triggerPlaceholder": "Search by location"
    },
    "total": "Total",
    "updated": "Updated",
    "vzmAttribution": "© 2020 HERE, © 2020 Verizon <a href=\"https://policies.yahoo.com/us/en/yahoo/terms/index.htm\">Terms</a>",
    "who": "WHO",
    "whoTitle": "WHO Coronavirus Home",
    "wikiLinkTitle": "Wikipedia Article",
    "yahooNews": "Yahoo News",
    "yahooNewsTitle": "Yahoo News Coronavirus Home"
  };
  _exports.default = _default;
});
;define("covid-19-dashboard/utils/calculate-position", ["exports", "ember-basic-dropdown/utils/calculate-position"], function (_exports, _calculatePosition) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _calculatePosition.default;
    }
  });
});
;define("covid-19-dashboard/utils/can-use-dom", ["exports", "ember-metrics/utils/can-use-dom"], function (_exports, _canUseDom) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _canUseDom.default;
    }
  });
});
;define("covid-19-dashboard/utils/inflector", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.pluralize = _exports.singularize = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  /**
   * Copyright 2020, Verizon Media.
   * Licensed under the terms of the Apache License, Version 2.0. See accompanying LICENSE.md file for terms.
   */
  var toPlural = {
    county: 'counties',
    state: 'states',
    country: 'countries'
  };
  var toSingular = Object.entries(toPlural).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    return Object.assign(acc, _defineProperty({}, v, k));
  }, {});

  var singularize = function singularize(word) {
    return toSingular[word] || word;
  };

  _exports.singularize = singularize;

  var pluralize = function pluralize(word) {
    return toPlural[word] || word;
  };

  _exports.pluralize = pluralize;
});
;define("covid-19-dashboard/utils/intl/missing-message", ["exports", "ember-intl/utils/missing-message"], function (_exports, _missingMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _missingMessage.default;
    }
  });
});
;define("covid-19-dashboard/utils/location", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.breakdownLocationType = breakdownLocationType;

  /**
   * Copyright 2020, Verizon Media.
   * Licensed under the terms of the Apache License, Version 2.0. See accompanying LICENSE.md file for terms.
   */
  function breakdownLocationType(location) {
    if (!location) return undefined;
    var type = location.type,
        relationships = location.relationships;

    switch (type) {
      case 'global':
        return 'country';

      case 'countries':
        if (relationships.states.data.length > 0) {
          return 'state';
        }

        return 'country';

      case 'states':
        if (relationships.counties.data.length > 0) {
          return 'county';
        }

        return 'state';

      case 'counties':
        return 'county';
    }

    return undefined;
  }
});
;define("covid-19-dashboard/utils/object-transforms", ["exports", "ember-metrics/utils/object-transforms"], function (_exports, _objectTransforms) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _objectTransforms.default;
    }
  });
});
;define("covid-19-dashboard/utils/remove-from-dom", ["exports", "ember-metrics/utils/remove-from-dom"], function (_exports, _removeFromDom) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _removeFromDom.default;
    }
  });
});
;

;define('covid-19-dashboard/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("covid-19-dashboard/app")["default"].create({"host":"https://covid19.knowledge.yahoo.com","namespace":"/api/json/v1","tileServer":"https://api.location.verizon.com/here/maptile/2.1/maptile/newest/reduced.day/{z}/{x}/{y}/512/png8?key=mrL7urlhJhv0wAFJUXjtxKp0YqLrK40B","tileServerAttribution":"vzmAttribution","name":"covid-19-dashboard","version":"0.0.0+e0decaed"});
          }
        
//# sourceMappingURL=covid-19-dashboard.map
