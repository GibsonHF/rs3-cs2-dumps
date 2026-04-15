//
function script16835(int0: quest): string {
    if (((script249() == 0) || (script16823() == false))) {
        return "";
    };
    if ((int0 == -1 as quest)) {
        return "";
    };
    if ((script3980(int0) == 1)) {
        return "";
    };
    var int1 = -1;
    var string0 = "";
    [string0, int1] = script2133(int0);
    if ((int1 <= 0)) {
        return "";
    };
    var int2 = (int1 * 25);
    return `${TOSTRING_LOCALISED(int2, 1)} Fresh Start Worlds progress points`;
}