//
function script20522(): void {
    var int0 = IF_GETWIDTH(96796698);
    var int1 = IF_GETHEIGHT(96796698);
    var int2 = 0;
    var int3 = 0;
    if ((IF_FIND(96665652) == 1)) {
        int2 = CC_GETX();
        int3 = CC_GETY();
        if (((CC_GETX() + CC_GETWIDTH()) > int0)) {
            int2 = (int0 - CC_GETWIDTH());
        };
        if ((((CC_GETY() + CC_GETHEIGHT()) + IF_GETHEIGHT(96665653)) > int1)) {
            int3 = (int1 - CC_GETHEIGHT());
        };
        CC_SETPOSITION(int2, int3, 0, 0);
    };
    return;
}