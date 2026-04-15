//
function script13859(int0: int, int1: unknown_int, int2: int, int3: unknown_int): int {
    if ((int3 == 3)) {
        return 1;
    };
    if ((varbitplayer_27169 == 1)) {
        if (((int1 == 1) || (((varbitclient_22877 - 1) != int0) && ((varbitclient_60444 - 1) != int0)))) {
            if ((((int0 == 32) && (script20117(-1) != -1 as dbrow)) && (IF_GETHIDE(struct_getparam(37398, 3503)) == false))) {
                return 4;
            };
            return 1;
        };
        return 4;
    };
    if ((int1 == 1)) {
        if ((script8285(int2) == 1)) {
            if ((script8292(int2, -1) == 1)) {
                return 4;
            };
            return 1;
        };
        return 5;
    };
    if ((script8314(int0) == int0)) {
        return 4;
    };
    return 1;
}