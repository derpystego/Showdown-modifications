"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var rulesets_exports = {};
__export(rulesets_exports, {
  Rulesets: () => Rulesets
});
module.exports = __toCommonJS(rulesets_exports);
const Rulesets = {
  obtainablemoves: {
    inherit: true,
    banlist: [
      // No valid fathers and can't get in Grand Underground
      "Taillow + Boomburst",
      "Swellow + Boomburst",
      "Plusle + Tearful Look",
      "Minun + Tearful Look",
      "Luvdisc + Heal Pulse",
      "Starly + Detect",
      "Staravia + Detect",
      "Staraptor + Detect",
      "Chatot + Boomburst",
      "Chatot + Encore",
      "Spiritomb + Foul Play",
      "Munchlax + Power-Up Punch",
      "Snorlax + Power-Up Punch"
    ]
  }
};
//# sourceMappingURL=rulesets.js.map
