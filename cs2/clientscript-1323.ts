//
function script1323(int0: number, int1: number, int2: number, int3: number): void {
    if ((INV_GETOBJ(439, 0) != -1)) {
        IF_SETHIDE(0, int0);
        IF_SETOBJECT_NONUM(INV_GETOBJ(439, 0), 1, int0);
        IF_SETOPBASE(`<col=ff9040>${OC_NAME(INV_GETOBJ(439, 0))}`, int0);
    } else {
        IF_SETHIDE(1, int0);
    };
    if ((INV_GETOBJ(439, 1) != -1)) {
        IF_SETHIDE(0, int1);
        IF_SETOBJECT_NONUM(INV_GETOBJ(439, 1), 1, int1);
        IF_SETOPBASE(`<col=ff9040>${OC_NAME(INV_GETOBJ(439, 1))}`, int1);
    } else {
        IF_SETHIDE(1, int1);
    };
    if ((INV_GETOBJ(439, 2) != -1)) {
        IF_SETHIDE(0, int2);
        IF_SETOBJECT_NONUM(INV_GETOBJ(439, 2), 1, int2);
        IF_SETOPBASE(`<col=ff9040>${OC_NAME(INV_GETOBJ(439, 2))}`, int2);
    } else {
        IF_SETHIDE(1, int2);
    };
    if ((INV_GETOBJ(439, 3) != -1)) {
        IF_SETHIDE(0, int3);
        IF_SETOBJECT_NONUM(INV_GETOBJ(439, 3), 1, int3);
        IF_SETOPBASE(`<col=ff9040>${OC_NAME(INV_GETOBJ(439, 3))}`, int3);
    } else {
        IF_SETHIDE(1, int3);
    };
    return;
}