"use strict";
/**
 * This function will make you an alco!
 * @param {string} drink - Your favorite drink
 * @param {string} food - Favorite Food
 */
Object.defineProperty(exports, "__esModule", { value: true });
function enjoy(drink, food) {
    return `${drink} - ${food}`;
}
exports.enjoy = enjoy;
function makeMeRich(tradingBotOn) {
    if (tradingBotOn) {
        return '100000bitcoin';
    }
    else {
        return '100000000bitcoin';
    }
}
exports.makeMeRich = makeMeRich;
class Bot {
    constructor() {
        this.money = 0;
    }
    buy(amount) {
        return amount;
    }
}
exports.Bot = Bot;
//# sourceMappingURL=main.js.map