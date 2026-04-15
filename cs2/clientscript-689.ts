//
function script689(int0: component, int1: int): void {
    var int2 = INV_GETOBJ(573 as inv, int1);
    var int3 = INV_GETNUM(573 as inv, int1);
    if ((int2 != -1 as obj)) {
        IF_SETOBJECT(int2, int3, int0);
        IF_SETOPBASE(`<col=ff9040>${OC_NAME(int2)}`, int0);
        if ((int1 >= 12)) {
            IF_SETOP(1, "Clear", int0);
        } else {
            IF_SETOP(10, "Examine", int0);
        };
    } else {
        IF_SETOBJECT(-1 as obj, 0, int0);
        IF_CLEAROPS(int0);
    };
    if ((script6712(int1) == 0)) {
        script3497(int1, false);
    } else {
        script3497(int1, true);
    };
    return;
}