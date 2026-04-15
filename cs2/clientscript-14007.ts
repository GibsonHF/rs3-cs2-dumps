//
function script14007(int0: component, int1: component, int2: component, int3: struct): void {
    var string0 = enum_getvalue(0, 36, 12860 as cs2enum, varbitplayer_27925);
    if ((STRING_LENGTH(string0) > 0)) {
        string0 = `Costume Room Storage - ${string0}`;
    } else {
        string0 = "Costume Room Storage";
    };
    script9554(int0, int1, int2, string0, int3);
    return;
}