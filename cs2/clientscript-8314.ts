//
function script8314(int0: int): int {
    var int1 = script10405(int0);
    if ((int1 == -1 as struct)) {
        return -1;
    };
    if ((IF_GETHIDE(struct_getparam(int1, 3503)) == false)) {
        return int0;
    };
    if ((varbitplayer_27169 == 1)) {
        return -1;
    };
    if ((varbitplayer_38842 == 1)) {
        return -1;
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1 as struct;
    if ((script12612(int1) == true)) {
        [int4, int5] = script8718(int0);
        if (((int4 != -1) || (int5 != -1))) {
            int6 = int0;
            while ((int4 != -1)) {
                [int7, int5] = script8718(int4);
                if ((int6 != int5)) {
                    int4 = -1;
                } else {
                    int8 = script10405(int4);
                    if ((IF_GETHIDE(struct_getparam(int8, 3503)) == false)) {
                        return int4;
                    };
                    int6 = int4;
                    int4 = int7;
                };
            };
            [int4, int5] = script8718(int0);
            int6 = int0;
            while ((int5 != -1)) {
                [int4, int7] = script8718(int5);
                if ((int6 != int4)) {
                    int5 = -1;
                } else {
                    int8 = script10405(int5);
                    if ((IF_GETHIDE(struct_getparam(int8, 3503)) == false)) {
                        return int5;
                    };
                    int6 = int5;
                    int5 = int7;
                };
            };
        };
    };
    return -1;
}