/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/platform.png":
/*!*********************************!*\
  !*** ./src/assets/platform.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/platform.png */ "./src/assets/platform.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


console.log(_assets_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]); //Set the stage...

var canvas = document.querySelector('canvas');
var c = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576; // Set gravity strength

var gravity = .5;
var movementSpeed = 2; // Classes 

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 100
    };
    this.width = 30;
    this.height = 30;
    this.velocity = {
      x: 0,
      y: 0
    };
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.fillStyle = "blue";
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      } else this.velocity.y = 0;
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}(); // Create class  instances


var player = new Player();
var image = new Image();
image.src = _assets_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"];
var platforms = [new Platform({
  x: -1,
  y: 450,
  image: image
}), new Platform({
  x: 500,
  y: 450,
  image: image
})]; // State to manage left and right movement

var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
}; // Win scenario

var scrollOffset = 0; // Animation loop

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "skyblue";
  c.fillRect(0, 0, canvas.width, canvas.height);

  for (var _i = 0, _platforms = platforms; _i < _platforms.length; _i++) {
    var _platform = _platforms[_i];

    _platform.draw();
  }

  player.update(); // Movement on x-axis and side-scrolling behavior

  if (keys.right.pressed && player.position.x < 450) player.velocity.x = movementSpeed;else if (keys.left.pressed && player.position.x > 0) player.velocity.x = -movementSpeed;else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += movementSpeed;

      for (var _i2 = 0, _platforms2 = platforms; _i2 < _platforms2.length; _i2++) {
        var _platform2 = _platforms2[_i2];
        _platform2.position.x -= movementSpeed;
      }
    }
  } //Platform collision detection

  for (var _i3 = 0, _platforms3 = platforms; _i3 < _platforms3.length; _i3++) {
    var _platform3 = _platforms3[_i3];

    _platform3.draw();

    if (player.position.y + player.height <= _platform3.position.y && player.position.y + player.height + player.velocity.y >= _platform3.position.y && player.position.x + player.width >= _platform3.position.x && player.position.x <= _platform3.position.x + _platform3.width) {
      player.velocity.y = 0;
    }
  }

  if (scrollOffset > 2000) {
    console.log("You win!");
  }
}

animate(); // Event handling for WASD and arrow keydowns

window.addEventListener('keydown', function (_ref2) {
  var keyCode = _ref2.keyCode;
  console.log(keyCode);

  switch (keyCode) {
    // Move up
    case 87:
    case 38:
      player.velocity.y -= 20;
      break;
    // Move down

    case 83:
    case 40:
      player.velocity.y += 20;
      break;
    // Move left

    case 65:
    case 37:
      keys.left.pressed = true;
      break;
    // Move right

    case 68:
    case 39:
      keys.right.pressed = true;
      break;
  }
}); // Event handling for WASD and arrow keyups

window.addEventListener('keyup', function (_ref3) {
  var keyCode = _ref3.keyCode;

  switch (keyCode) {
    // Move up
    case 87:
    case 38:
      break;
    // Move down

    case 83:
    case 40:
      break;
    // Move left

    case 65:
    case 37:
      keys.left.pressed = false;
      break;
    // Move right

    case 68:
    case 39:
      keys.right.pressed = false;
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map