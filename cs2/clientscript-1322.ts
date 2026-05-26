//
function script1322(int0: number, int1: number, int2: number): void {
    if ((INV_GETOBJ(438, 0) != -1)) {
        IF_SETHIDE(0, int0);
        IF_SETOBJECT_NONUM(INV_GETOBJ(438, 0), 1, int0);
        IF_SETOPBASE(`<col=ff9040>${OC_NAME(INV_GETOBJ(438, 0))}`, int0);
    } else {
        IF_SETHIDE(1, int0);
    };
    if ((INV_GETOBJ(438, 1) != -1)) {
        IF_SETHIDE(0, int1);
        IF_SETOBJECT_NONUM(INV_GETOBJ(438, 1), 1, int1);
        IF_SETOPBASE(`<col=ff9040>${OC_NAME(INV_GETOBJ(438, 1))}`, int1);
    } else {
        IF_SETHIDE(1, int1);
    };
    if ((INV_GETOBJ(438, 2) != -1)) {
        IF_SETHIDE(0, int2);
        IF_SETOBJECT_NONUM(INV_GETOBJ(438, 2), 1, int2);
        IF_SETOPBASE(`<col=ff9040>${OC_NAME(INV_GETOBJ(438, 2))}`, int2);
    } else {
        IF_SETHIDE(1, int2);
    };
    return;
}