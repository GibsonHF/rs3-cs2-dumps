//
function script5412(int0: struct): string {
    var int1 = struct_getparam(int0, 7680);
    var string0 = "adrenaline";
    if ((varbitplayer_27168 == 1)) {
        string0 = "special attack points";
    };
    if ((int1 > 0)) {
        return `</col>Provides <col=00ff00>${inttostring(int1, 10)}% ${string0}</col>.`;
    };
    if ((int1 < 0)) {
        return `</col>Removes <col=ff0000>${inttostring(ABS(int1), 10)}% ${string0}</col>.`;
    };
    return "";
}