//
function script1045(int0: int, int1: component, int2: int, int3: int): void {
    if ((CC_FIND(int1, int0) == 1)) {
        script8618(int3, int2);
        if ((CC_FIND[1](int1, 0) == 1)) {
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
            CC_SETCOLOUR[1](5733957);
            CC_SETFILL[1](1);
        };
    };
    return;
}