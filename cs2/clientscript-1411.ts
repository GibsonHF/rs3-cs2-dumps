//
function script1411(): void {
    var int0 = comp(306, 7);
    varclient_761 = enum_getvalue(0, 31, 208 as cs2enum, RANDOM(ENUM_GETOUTPUTCOUNT(208 as cs2enum)));
    if ((varclient_761 != -1 as model)) {
        IF_SETMODEL(varclient_761, int0);
    };
    IF_SETPOSITION((0 - IF_GETWIDTH(int0)), 120, 0, 0, int0);
    IF_SETONTIMER(callback(), comp(306, 20));
    return;
}