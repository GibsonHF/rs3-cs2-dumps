//
function script16005(int0: cs2enum, int1: int): string {
    var string0 = "";
    if ((int1 > 0)) {
        string0 = script16004(int1);
    } else {
        string0 = enum_getvalue(0, 36, int0, int1);
    };
    return string0;
}