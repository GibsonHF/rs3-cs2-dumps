//[proc,scrollbar_resize]
function script72(int0: component, int1: component, int2: int): void {
    var int3 = script9984(28551 as struct, -1);
    if ((int3 == -1 as struct)) {
        int3 = 28551 as struct;
    };
    var int4 = IF_GETSCROLLHEIGHT(int1);
    var int5 = IF_GETHEIGHT(int1);
    var int6 = IF_GETHEIGHT(int0);
    var int7 = int6;
    if ((varbitplayer_22875 != 2)) {
        int7 = (int7 - 32);
    };
    var int8 = 0;
    if ((int4 > 0)) {
        int8 = MIN(SCALE(int5, int4, int7), int7);
    } else {
        int8 = int7;
    };
    int8 = MAX(int8, struct_getparam(int3, 4406));
    if ((struct_getparam(int3, 4407) != -1)) {
        int8 = MIN(int8, struct_getparam(int3, 4407));
    };
    if ((CC_FIND(int0, 1) == 1)) {
        if ((varbitplayer_22875 == 2)) {
            CC_SETSIZE(8, int8, 0, 0);
        } else {
            CC_SETSIZE(16, (int8 - 10), 0, 0);
        };
        script37(int0, int1, int2, 1);
    };
    return;
}