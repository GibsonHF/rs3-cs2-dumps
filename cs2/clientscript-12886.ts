//
function script12886(int0: component, int1: component, int2: component, int3: int): void {
    var int4 = IF_GETWIDTH(int0);
    var int5 = (int3 - int4);
    if ((int5 < 0)) {
        int5 = (int5 * -1);
    };
    var int6 = 0;
    if ((int4 < int3)) {
        int6 = (int4 + 2);
    } else {
        int6 = int3;
    };
    int6 = MAX(1, MIN(int3, int6));
    IF_SETSIZE(int6, 19, 0, 0, int0);
    var int7 = 0;
    var int8 = 0;
    while ((int7 < IF_GETNEXTSUBID(int1))) {
        if (((CC_FIND(int1, int7) == 1) && (CC_FIND[1](int2, int7) == 1))) {
            int8 = ((CC_GETX() + CC_GETWIDTH()) - 6);
            if ((int4 >= int8)) {
                CC_SETONTIMER(callback(script12887, int2, int7));
            };
        };
        int7 = (int7 + 1);
    };
    if ((int4 == int3)) {
        IF_SETONTIMER(callback(), int0);
        return;
    };
    return;
}