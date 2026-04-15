//
function script12575(int0: component): void {
    var int1 = 0;
    var int2 = IF_GETWIDTH(int0);
    var int3 = 0;
    var int4 = 10;
    if ((varbitclient_32658 > 0)) {
        if ((CC_FIND(int0, varbitclient_32657) == 1)) {
            int1 = CC_GETX();
        };
        int4 = script12577(int4, varbitclient_32658, int1);
        if ((int4 < 1)) {
            return;
        };
    };
    while ((CC_FIND(int0, int3++) == 1)) {
        int1 = (CC_GETX() + int4);
        if ((int1 > int2)) {
            int1 = ((-150 + int1) - int2);
        };
        CC_SETPOSITION(int1, CC_GETY(), 0, 4);
    };
    return;
}