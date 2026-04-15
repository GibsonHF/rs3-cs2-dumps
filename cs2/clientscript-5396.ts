//
function script5396(int0: struct): string {
    var int1 = struct_getparam(int0, 7678);
    if ((int1 > 0)) {
        return `Restores <col=00ff00>${inttostring(int1, 10)}% run energy</col>.`;
    };
    if ((int1 < 0)) {
        return `Removes <col=ff0000>${inttostring(ABS(int1), 10)}% run energy</col>.`;
    };
    return "";
}