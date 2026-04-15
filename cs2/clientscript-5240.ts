//
function script5240(int0: struct, int1: unknown_int): string {
    var string0 = "";
    var int2 = script5241(int0);
    var int3 = script5242(int0);
    var string1 = "";
    var string2 = "";
    if ((int1 == 1)) {
        string1 = inttostring(ABS(int2), 10);
        string2 = inttostring(ABS(int3), 10);
    } else {
        string1 = script17274(int0);
        string2 = script17275(int0);
    };
    if ((int2 > 0)) {
        string0 = `Restores <col=00ff00>${string1}</col> prayer points`;
    } else if ((int2 < 0)) {
        string0 = `Removes <col=ff0000>${string1}</col> prayer points`;
    };
    if ((int3 > 0)) {
        if ((STRING_LENGTH(string0) > 0)) {
            string0 = strconcat(string0, `, and renews <col=00ff00>${string2} prayer points</col> over the duration`);
        } else {
            string0 = strconcat(string0, `Renews <col=00ff00>${string2} prayer points</col> over the duration`);
        };
    } else if ((int3 < 0)) {
        if ((STRING_LENGTH(string0) > 0)) {
            string0 = strconcat(string0, `, and drains <col=ff0000>${string2} prayer points</col> over the duration`);
        } else {
            string0 = strconcat(string0, `Drains <col=ff0000>${string2} prayer points</col> over the duration`);
        };
    };
    if ((STRING_LENGTH(string0) > 0)) {
        string0 = strconcat(string0, ".");
    };
    return string0;
}