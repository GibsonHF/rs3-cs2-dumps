//
function script12002(int0: struct, int1: int, int2: boolean): void {
    if ((IF_FIND(struct_getparam(int0, 8125)) == 1)) {
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETSIZE(0, 0, 1, 1);
    };
    var int3 = 33;
    if ((int2 == true)) {
        int3 = 42;
    };
    if ((struct_getparam(int0, 8125) == comp(1890, 0))) {
        int3 = 0;
    };
    CC_DELETEALL(struct_getparam(int0, 8130));
    if ((IF_FIND(struct_getparam(int0, 8130)) == 1)) {
        CC_SETPOSITION(0, 0, 1, 2);
        CC_SETSIZE(0, int3, 1, 0);
        if ((varbitplayer_27169 == 1)) {
            script75(struct_getparam(int0, 8130));
        } else {
            script79(struct_getparam(int0, 8130));
        };
    };
    if ((IF_FIND(struct_getparam(int0, 8123)) == 1)) {
        CC_SETPOSITION(0, int1, 2, 0);
        CC_SETSIZE(16, (int3 + int1), 0, 1);
    };
    if ((IF_FIND(struct_getparam(int0, 8122)) == 1)) {
        CC_SETPOSITION(0, int1, 0, 0);
        if (((varbitplayer_27169 == 1) && (int2 == false))) {
            CC_SETSIZE(0, (int3 + int1), 1, 1);
        } else {
            CC_SETSIZE(16, (int3 + int1), 1, 1);
        };
    };
    return;
}