//
function script13851(int0: component, int1: component, int2: unknown_int): void {
    if ((((int0 == comp(-1, 65535)) || (int1 == comp(-1, 65535))) || (int2 == -1))) {
        return;
    };
    var int3 = 0;
    var int4 = 0;
    var int5 = 37;
    var int6 = 2;
    var int7 = ENUM_GETOUTPUTCOUNT(13320 as cs2enum);
    if ((varbitplayer_22875 == 1)) {
        int4 = -75;
        int5 = 30;
        int6 = 1;
    };
    while ((int3 < int7)) {
        if (((CC_FIND(int0, int3) == 1) && (CC_FIND[1](int1, int3) == 1))) {
            CC_SETPOSITION(int4, 0, 0, 2);
            CC_SETPOSITION[1]((int4 + 4), 4, 0, int6);
            int4 = (int4 + int5);
        };
        int3 = (int3 + 1);
    };
    return;
}