//
function script137(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int0, int1, int2, int3] = script14244();
    if (((CC_GETX() + CC_GETWIDTH()) > int2)) {
        CC_SETPOSITION((int2 - CC_GETWIDTH()), CC_GETY(), 0, 0);
    };
    return;
}