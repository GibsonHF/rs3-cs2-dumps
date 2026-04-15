//
function script398(): void {
    IF_CLEAROPS(comp(306, 29));
    varclient_767 = 0;
    varclient_761 = -1 as model;
    varclient_762 = -1 as model;
    varclient_763 = -1 as model;
    varclient_764 = -1 as model;
    varclient_765 = 0;
    varclient_766 = 0;
    IF_SETONTIMER(callback(), comp(306, 20));
    IF_SETONTIMER(callback(), 20054037);
    IF_SETONTIMER(callback(), 20054038);
    IF_SETONTIMER(callback(), 20054039);
    IF_SETONTIMER(callback(), 20054027);
    IF_SETONTIMER(callback(), 20054041);
    IF_SETTEXT(`Correct: ${inttostring(varclient_767, 10)}/${inttostring(10, 10)}`, 20054020);
    varclient_761 = enum_getvalue(0, 31, 208, 1);
    if ((varclient_761 != -1)) {
        IF_SETMODEL(varclient_761, comp(306, 7));
        IF_SETMODELANGLE(0, 0, 512, 0, 0, 800, comp(306, 7));
    };
    varclient_762 = enum_getvalue(0, 31, 208 as cs2enum, 2);
    if ((varclient_762 != -1 as model)) {
        IF_SETMODEL(varclient_762, comp(306, 8));
        IF_SETMODELANGLE(0, 0, 512, 0, 0, 800, comp(306, 8));
    };
    varclient_763 = enum_getvalue(0, 31, 208 as cs2enum, 3);
    if ((varclient_763 != -1 as model)) {
        IF_SETMODEL(varclient_763, comp(306, 9));
        IF_SETMODELANGLE(0, 0, 512, 0, 0, 800, comp(306, 9));
    };
    varclient_764 = enum_getvalue(0, 31, 208 as cs2enum, 4);
    if ((varclient_764 != -1 as model)) {
        IF_SETMODEL(varclient_764, comp(306, 10));
        IF_SETMODELANGLE(0, 0, 512, 0, 0, 800, comp(306, 10));
    };
    IF_SETPOSITION((0 - IF_GETWIDTH(comp(306, 7))), IF_GETY(comp(306, 7)), 0, 0, comp(306, 7));
    IF_SETPOSITION((0 - IF_GETWIDTH(comp(306, 8))), IF_GETY(comp(306, 8)), 0, 0, comp(306, 8));
    IF_SETPOSITION((0 - IF_GETWIDTH(comp(306, 9))), IF_GETY(comp(306, 9)), 0, 0, comp(306, 9));
    IF_SETPOSITION((0 - IF_GETWIDTH(comp(306, 10))), IF_GETY(comp(306, 10)), 0, 0, comp(306, 10));
    IF_SETPOSITION(IF_GETX(comp(306, 6)), 200, 0, 0, comp(306, 11));
    IF_SETONTIMER(callback(script399, 20054023), comp(306, 20));
    return;
}