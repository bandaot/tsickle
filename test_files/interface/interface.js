/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
goog.module('test_files.interface.interface');
var module = module || { id: 'test_files/interface/interface.ts' };
/**
 * Used by implement_import.ts
 * @record
 */
function Point() { }
exports.Point = Point;
/** @type {number} */
Point.prototype.x;
/** @type {number} */
Point.prototype.y;
/**
 * Used by implement_import.ts
 */
class User {
}
exports.User = User;
if (false) {
    /** @type {number} */
    User.prototype.shoeSize;
}
/**
 * @param {!Point} p
 * @return {number}
 */
function usePoint(p) {
    return p.x + p.y;
}
/** @type {!Point} */
let p = { x: 1, y: 1 };
usePoint(p);
usePoint({ x: 1, y: 1 });
/**
 * @record
 */
function TrickyInterface() { }
/* TODO: handle strange member:
[offset: number]: number;
*/
/** @type {number} */
TrickyInterface.prototype.foo;
/* TODO: handle strange member:
(x: number): __ yuck __
      number;
*/
/** @type {(undefined|string)} */
TrickyInterface.prototype.foobar;
/** @type {?|undefined} */
TrickyInterface.prototype.optAny;
/**
 * \@param a some string value
 * \@return some number value
 * @override
 * @type {function(string): number}
 */
TrickyInterface.prototype.hasSomeParamJsDoc;
