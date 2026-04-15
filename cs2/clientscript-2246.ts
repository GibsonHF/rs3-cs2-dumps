//
function script2246(int0: component, int1: component, int2: inv, int3: int): void {
    var int4 = INV_GETOBJ(int2, int3);
    if ((int4 == -1 as obj)) {
        IF_SETHIDE(true, int0);
        IF_SETHIDE(false, int1);
    };
    IF_SETHIDE(false, int0);
    IF_SETHIDE(true, int1);
    IF_SETOBJECT(int4, INV_GETNUM(94 as inv, int3), int0);
    IF_CLEAROPS(int0);
    IF_SETONOP(callback(script1620, -2147483645, -1, 100, 0, 8), int0);
    if ((item_getparam(int4, 1047) > 0)) {
        if (((item_getparam(int4, 1050) > 0) || (item_getparam(int4, 1051) > 0))) {
            IF_SETOP(3, "Destroy", int0);
        } else {
            IF_SETOP(3, "Bind", int0);
        };
    };
    IF_SETOP(10, "Examine", int0);
    IF_SETOPBASE(`<col=ff9040>${OC_NAME(int4)}`, int0);
    return;
}