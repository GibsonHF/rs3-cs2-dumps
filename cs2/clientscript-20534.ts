//
function script20534(int0: component, int1: int, int2: int, int3: int, int4: int, int5: int): void {
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    while ((int6 < int1)) {
        int9 = (int7 * int3);
        int10 = (int8 * int4);
        int11 = (int6 * 4);
        if ((CC_FIND(int0, int11) == 1)) {
            CC_SETPOSITION(int9, int10, 0, 0);
        };
        if ((CC_FIND(int0, (int11 + 1)) == 1)) {
            CC_SETPOSITION((int9 + int5), (int10 + ((int4 - CC_GETHEIGHT()) / 2)), 0, 0);
            if ((CC_FIND[1](int0, (int11 + 2)) == 1)) {
                CC_SETPOSITION[1]((int9 + (MIN(CC_GETWIDTH(), CC_GETHEIGHT()) / 2)), (int10 + (CC_GETHEIGHT() / 2)), 0, 0);
            };
            if ((CC_FIND[1](int0, (int11 + 3)) == 1)) {
                CC_SETPOSITION[1]((int9 + (MIN(CC_GETWIDTH(), CC_GETHEIGHT()) / 2)), (int10 + (CC_GETHEIGHT() / 2)), 0, 0);
            };
        };
        if ((++int7 >= int2)) {
            int7 = 0;
            int8 = (int8 + 1);
        };
        int6 = (int6 + 1);
    };
    return;
}