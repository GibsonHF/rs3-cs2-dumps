//
function script9131(int0: component, int1: int, int2: int, int3: int, int4: achievement): void {
    var int5 = script9535(int2, int3, int4);
    var int6 = (int1 + 3);
    var int7 = false;
    if ((int5 == -1)) {
        int7 = true;
    };
    var int8 = int1;
    var int9 = 0;
    while ((int8 < int6)) {
        if ((CC_FIND(int0, int8) == 1)) {
            if ((int8 == (int1 + 2))) {
                int9 = (CC_GETX() + 4);
            };
            CC_SETHIDE(int7);
        };
        int8 = (int8 + 1);
    };
    if ((int7 == true)) {
        return;
    };
    int5 = script12377(int5, 0, 100);
    int5 = ((int5 * int9) / 100);
    if ((CC_FIND(int0, (int1 + 3)) == 1)) {
        CC_SETSIZE(int5, (5 - 2), 0, 0);
    };
    return;
}