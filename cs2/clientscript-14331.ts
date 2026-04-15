//
function script14331(int0: int, int1: obj, int2: component, int3: component): void {
    var int4 = enum_getvalue(33, 0, 7432 as cs2enum, int1);
    IF_SETOBJECT_ALWAYSNUM(int1, int0, int3);
    if ((int0 == 0)) {
        IF_SETOBJECT_ALWAYSNUM(int1, int0, int3);
        IF_SETTRANS(128, int3);
    } else {
        IF_SETOBJECT(int1, int0, int3);
        IF_SETTRANS(0, int3);
    };
    IF_SETOPBASE(`<col=ff9040>${OC_NAME(int1)}`, int2);
    IF_SETONMOUSEREPEAT(callback(script9564, int1, int2, -1), int2);
    return;
}