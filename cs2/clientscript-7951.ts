//
function script7951(int0: int, int1: int): void {
    if ((WORLDMAP_ISLOADED() == 0)) {
        return;
    };
    if (((int0 == varclient_3526) && (int1 == varclient_3527))) {
        return;
    };
    WORLDMAP_3DVIEW_GETCOORDFINE(varclient_3526, varclient_3527, 0);
    var string0 = stack();
    WORLDMAP_3DVIEW_GETCOORDFINE(int0, int1, 0);
    var string1 = stack();
    varclient_3526 = int0;
    varclient_3527 = int1;
    COORDX_FINE(string0);
    COORDX_FINE(string1);
    var int2 = operator("-", stack());
    stack(string0);
    stack(COORDZ_FINE());
    stack(string1);
    var int3 = (stack() - COORDZ_FINE());
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 1;
    if (((int2 != 0) || (int3 != 0))) {
        [int4, int5, int6, int7] = WORLDMAP_GETCONFIGBOUNDS(WORLDMAP_GETCURRENTMAP());
        int4 = (int4 * 512);
        int5 = (int5 * 512);
        int6 = (int6 * 512);
        int7 = (int7 * 512);
        if (((int2 < 0) && (int4 < varclient_3524))) {
            int2 = MAX((int4 - varclient_3524), int2);
            varclient_3524 = (varclient_3524 + int2);
            int8 = 0;
        } else if (((int2 > 0) && (int6 > varclient_3524))) {
            int2 = MIN((int6 - varclient_3524), int2);
            varclient_3524 = (varclient_3524 + int2);
            int8 = 0;
        } else {
            int2 = 0;
        };
        if (((int3 < 0) && (int5 < varclient_3525))) {
            int3 = MAX((int5 - varclient_3525), int3);
            varclient_3525 = (varclient_3525 + int3);
            int8 = 0;
        } else if (((int3 > 0) && (int7 > varclient_3525))) {
            int3 = MIN((int7 - varclient_3525), int3);
            varclient_3525 = (varclient_3525 + int3);
            int8 = 0;
        } else {
            int3 = 0;
        };
        if ((int8 == 1)) {
            return;
        };
        script7952();
    };
    return;
}