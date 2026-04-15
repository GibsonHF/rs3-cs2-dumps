//
function script2322(): void {
    var int0 = comp(306, 9);
    varclient_763 = enum_getvalue(0, 31, 208 as cs2enum, RANDOM(ENUM_GETOUTPUTCOUNT(208 as cs2enum)));
    if ((varclient_763 != -1 as model)) {
        IF_SETMODEL(varclient_763, int0);
    };
    IF_SETPOSITION((0 - IF_GETWIDTH(int0)), 120, 0, 0, int0);
    IF_SETONTIMER(callback(), comp(306, 22));
    return;
}