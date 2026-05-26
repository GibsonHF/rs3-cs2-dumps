//
function script13325(int0: number, int1: number, int2: number): void {
    CC_DELETEALL(85918227);
    CC_DELETEALL(85918228);
    IF_SETHIDE(0, 85918226);
    var int3 = IF_GETNEXTSUBID(85918226);
    var int4 = 1;
    var int5 = 1;
    var int6 = 0;
    var int7 = 1;
    var int8 = 5;
    while ((int5 <= 7)) {
        IF_SETHIDE(1, script13631(int5));
        int5 = (int5 + 1);
    };
    int5 = 1;
    while ((int5 <= struct_getparam(int0, 3850))) {
        if ((int1 == int5)) {
            IF_SETHIDE(0, script13631(int5));
            int4 = 4;
        } else {
            int4 = 1;
        };
        int3 = script11605(85918227, 85918228, 28222, 0, int8, int3, int4, "Select", "Unselect", script2412(int5, int0));
        if ((CC_FIND(85918228, int5) == 1)) {
            CC_SETOPCURSOR(1, 46);
        };
        script4512(85918227, (30 - (2 * 2)), (30 - (2 * 2)), 2, (int8 + 2), script2679(int0, int5));
        int7 = (int7 + 1);
        int8 = (int8 + (30 + 4));
        int5 = (int5 + 1);
        int6 = (int6 + 1);
    };
    CC_DELETEALL(85918251);
    CC_DELETEALL(85918252);
    if ((struct_getparam(int0, 3849) > 1)) {
        IF_SETHIDE(0, 85918250);
        int3 = IF_GETNEXTSUBID(85918250);
        int8 = 5;
        int5 = 1;
        while ((int5 <= struct_getparam(int0, 3849))) {
            if ((int2 == int5)) {
                int4 = 4;
            } else {
                int4 = 1;
            };
            script11605(85918251, 85918252, 28222, 0, int8, int3++, int4, "Select", "Unselect", script2431(int0, int5));
            if ((CC_FIND(85918252, int5) == 1)) {
                CC_SETOPCURSOR(1, 46);
            };
            script4512(85918251, (30 - 8), (30 - 8), 4, (int8 + 4), script2737(int0, int5));
            if ((script1529(int0, int5) == 0)) {
                script4512(85918251, 14, 18, 18, (int8 + 15), 10983);
            };
            int5 = (int5 + 1);
            int8 = (int8 + (30 + 4));
        };
    };
    return;
}