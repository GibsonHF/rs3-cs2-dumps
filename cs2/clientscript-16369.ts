//
function script16369(int0: component): void {
    var int1 = enum_getvalue(0, 26, 10994 as cs2enum, varclient_5185);
    if ((int1 == -1 as cs2enum)) {
        return;
    };
    var int2 = enum_getvalue(9, 0, 11001 as cs2enum, int0);
    var string0 = enum_getvalue(0, 36, 10993 as cs2enum, int2);
    var string1 = enum_getvalue(9, 36, int1, int0);
    IF_SETCOLOUR(13158600, int0);
    IF_SETHIDE(false, comp(1747, 4));
    IF_SETTEXT(string0, comp(1747, 1));
    IF_SETTEXT(string1, comp(1747, 2));
    return;
}