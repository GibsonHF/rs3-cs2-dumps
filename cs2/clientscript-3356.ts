//
function script3356(int0: component, int1: int, int2: inv): void {
    var int3 = INVOTHER_GETOBJ(int2, int1);
    if ((int3 == -1 as obj)) {
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
    IF_SETOBJECT(int3, INVOTHER_GETNUM(int2, int1), int0);
    IF_SETOUTLINE(1, int0);
    IF_SETGRAPHICSHADOW(3153952, int0);
    IF_CLEAROPS(int0);
    IF_SETOP(10, "Examine<col=ff9040>", int0);
    IF_SETOPBASE(`<col=ff9040>${OC_NAME(int3)}`, int0);
    IF_SETONMOUSEREPEAT(callback(script5495, int3), int0);
    IF_SETONMOUSELEAVE(callback(script5495, -1), int0);
    return;
}