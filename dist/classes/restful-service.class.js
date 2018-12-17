"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class RestfulService {
    constructor() { }
    throwBadRequestException(msg) {
        throw new common_1.BadRequestException(msg);
    }
    throwNotFoundException(name) {
        const msg = name ? `${name} not found` : `Not found`;
        throw new common_1.NotFoundException(msg);
    }
}
exports.RestfulService = RestfulService;
//# sourceMappingURL=restful-service.class.js.map