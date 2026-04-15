//
function script1322(int0: component, int1: component, int2: component): void {
    if ((INV_GETOBJ(438 as inv, 0) != -1 as obj)) {
        IF_SETHIDE(false, int0);
        IF_SETOBJECT_NONUM(INV_GETOBJ(438 as inv, 0), 1, int0);
        IF_SETOPBASE(`<col=ff9040>${OC_NAME(INV_GETOBJ(438 as inv, 0))}`, int0);
    } else {
        IF_SETHIDE(true, int0);
    };
    if ((INV_GETOBJ(438 as inv, 1) != -1 as obj)) {
        IF_SETHIDE(false, int1);
        IF_SETOBJECT_NONUM(INV_GETOBJ(438 as inv, 1), 1, int1);
        IF_SETOPBASE(`<col=ff9040>${OC_NAME(INV_GETOBJ(438 as inv, 1))}`, int1);
    } else {
        IF_SETHIDE(true, int1);
    };
    if ((INV_GETOBJ(438 as inv, 2) != -1 as obj)) {
        IF_SETHIDE(false, int2);
        IF_SETOBJECT_NONUM(INV_GETOBJ(438 as inv, 2), 1, int2);
        IF_SETOPBASE(`<col=ff9040>${OC_NAME(INV_GETOBJ(438 as inv, 2))}`, int2);
    } else {
        IF_SETHIDE(true, int2);
    };
    return;
}