//
function script689(int0: number, int1: number): void {
    var int2 = INV_GETOBJ(573, int1);
    var int3 = INV_GETNUM(573, int1);
    if ((int2 != -1)) {
        IF_SETOBJECT(int2, int3, int0);
        IF_SETOPBASE(`<col=ff9040>${OC_NAME(int2)}`, int0);
        if (((int1 >= 16) && (int1 < 40))) {
            IF_SETOP(1, "Clear", int0);
        } else {
            IF_SETOP(10, "Examine", int0);
        };
    } else {
        IF_SETOBJECT(-1, 0, int0);
        IF_CLEAROPS(int0);
    };
    if ((script6712(int1) == 0)) {
        script3497(int1, 0);
    } else {
        script3497(int1, 1);
    };
    return;
}