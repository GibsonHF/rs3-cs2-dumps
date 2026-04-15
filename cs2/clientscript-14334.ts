//
function script14334(int0: obj, int1: component, int2: component): void {
    var int3 = INV_TOTAL(93 as inv, int0);
    if (((int0 == 28084 as obj) || (int0 == 19808 as obj))) {
        int3 = (int3 + INV_TOTAL(94 as inv, int0));
    };
    var int4 = enum_getvalue(33, 0, 7432 as cs2enum, int0);
    if ((int3 == 0)) {
        IF_SETOBJECT_ALWAYSNUM(int0, int3, int2);
        IF_SETTRANS(128, int2);
    } else {
        IF_SETOBJECT(int0, int3, int2);
        IF_SETTRANS(0, int2);
    };
    IF_SETOPBASE(`<col=ff9040>${OC_NAME(int0)}`, int1);
    IF_SETONMOUSEREPEAT(callback(script9564, int0, int1, -1), int1);
    return;
}