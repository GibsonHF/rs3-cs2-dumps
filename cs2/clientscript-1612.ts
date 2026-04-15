//[clientscript,wornitems_slot]
function script1612(int0: component, int1: int): void {
    var int2 = INV_GETOBJ(94 as inv, int1);
    if ((int2 == -1 as obj)) {
        IF_SETOBJECT(-1 as obj, 0, int0);
        IF_SETSIZE(32, 32, 0, 0, int0);
        IF_SETPOSITION(0, 0, 1, 1, int0);
        stack(enum_getvalue(0, 23, 796 as cs2enum, int1));
        stack(int0);
        IF_SETGRAPHIC();
        IF_SETOUTLINE(0, int0);
        IF_SETGRAPHICSHADOW(0, int0);
        IF_SETONOP(callback(), int0);
        IF_CLEAROPS(int0);
        return;
    };
    IF_SETSIZE(36, 32, 0, 0, int0);
    IF_SETPOSITION(2, 0, 0, 1, int0);
    IF_SETOBJECT(int2, INV_GETNUM(94 as inv, int1), int0);
    IF_SETOUTLINE(1, int0);
    IF_SETGRAPHICSHADOW(3153952, int0);
    IF_SETONOP(callback(script1620, -2147483645, -1, 100, 0, 8), int0);
    IF_CLEAROPS(int0);
    if ((item_getparam(int2, 2091) == 1)) {
    } else {
        IF_SETOP(1, "Remove", int0);
    };
    var int3 = 1;
    var int4 = 0;
    var string0 = "";
    while ((int3 <= 8)) {
        [int4, string0] = script3290(int2, int3, 0, -1);
        if ((((int3 == 1) && (HAS_NXT() == 1)) && (int2 == 15484 as obj))) {
            int4 = 0;
        };
        if ((int4 == 1)) {
            IF_SETOP((int3 + 1), string0, int0);
        };
        int3 = (int3 + 1);
    };
    IF_SETOP(10, "Examine", int0);
    IF_SETOPBASE(`<col=ff9040>${OC_NAME(int2)}`, int0);
    IF_SETONMOUSEREPEAT(callback(script12093, int2, 94, int1), int0);
    IF_SETONMOUSELEAVE(callback(script5495, -1), int0);
    return;
}