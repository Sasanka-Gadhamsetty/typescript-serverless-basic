"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = authorize;
function authorize(user, requiredRole) {
    return user.roles.includes(requiredRole);
}
