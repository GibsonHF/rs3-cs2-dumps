//
function script5517(int0: struct): string {
    var int1 = struct_getparam(int0, 7683);
    if ((int1 <= 0)) {
        return "";
    };
    return `Grants tier ${inttostring(int1, 10)} <col=00ffff>luck</col>, which improves your chances to receive rare rewards from various activities.`;
}