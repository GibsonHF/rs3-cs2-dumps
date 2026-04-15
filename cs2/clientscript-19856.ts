//
function script19856(int0: obj, int1: component): void {
    IF_SETOBJECT_NONUM(int0, 1, int1);
    IF_SETOPBASE(`${script4033(int0)}${OC_NAME(int0)}`, int1);
    IF_SETOPCURSOR(1, 172 as cursor, int1);
    IF_SETONMOUSEREPEAT(callback(script9564, int0, -2147483645, -1), int1);
    IF_SETONOP(callback(script19857, int0), int1);
    return;
}