//
function script1169(int0: unknown_int, int1: int, string0: unknown_string): void {
    var int2 = enum_getvalue(0, 9, 737 as cs2enum, int1);
    IF_SETONTIMER(callback(script1168, int0, string0, int2), int2);
    return;
}