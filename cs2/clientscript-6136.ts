//
function script6136(): void {
    CC_SETFILL(1);
    CC_SETTRANS(255);
    CC_SETONOP(callback(script6135));
    if ((script6431() == 1)) {
        CC_SETONCLICK(callback(script6131, -2147483647, -2147483646));
    } else {
        CC_SETOP(1, "Place beacon");
    };
    CC_SETNOCLICKTHROUGH(true);
    return;
}