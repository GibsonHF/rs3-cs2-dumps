//
function script6620(int0: component): void {
    CC_DELETEALL(int0);
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 100;
    var int7 = 0;
    var int8 = 0;
    if ((IF_FIND(int0) == 1)) {
        int8 = ((CC_GETWIDTH() / 10) - 1);
    };
    while ((int5 < int6)) {
        CC_CREATE(int0, 5, int5);
        CC_SETSIZE(21, 21, 0, 0);
        CC_SETPOSITION(int1, int2, 0, 0);
        if ((int0 == comp(1323, 45))) {
            CC_SETOP(1, "Select");
        };
        if ((MODULO(++int5, 10) == 0)) {
            int1 = int3;
            int2 = (int2 + (1 + int8));
        } else {
            int1 = ((1 + int8) + int1);
        };
    };
    return;
}