//
function script10399(int0: unknown_int): void {
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    if (((IF_HASSUB(script8072()) == 1) && (IF_HASSUB(script8073()) == 1))) {
        int1 = script14197();
        int2 = script12922();
    } else if (((IF_HASSUB(script8074()) == 1) && (IF_HASSUB(script8073()) == 1))) {
        int1 = script12923();
        int2 = script12922();
        if ((IF_HASSUBMODAL(script8074(), 1148 as interface) == 1)) {
            int3 = comp(1148, 37);
        };
    };
    if ((varbitplayer_38842 == 1)) {
        script13894(int0, int1, int3);
    } else if ((varbitplayer_27169 == 0)) {
        if ((int0 == 1)) {
            if (((int1 != comp(-1, 65535)) && (int2 != comp(-1, 65535)))) {
                if ((int3 != comp(-1, 65535))) {
                    int4 = (IF_GETX(int1) + IF_GETX(int3));
                    int6 = IF_GETWIDTH(int3);
                } else {
                    int4 = IF_GETX(int1);
                    int6 = IF_GETWIDTH(int1);
                };
                if ((int4 > (IF_GETWIDTH(comp(1477, 27)) - (int4 + int6)))) {
                    int4 = (int4 - IF_GETWIDTH(int2));
                } else {
                    int4 = (int4 + int6);
                };
                int5 = ((IF_GETY(int1) + (IF_GETHEIGHT(int1) / 2)) - (IF_GETHEIGHT(int2) / 2));
                IF_SETPOSITION(int4, int5, 0, 0, int2);
                script8387(int4, int5, IF_GETWIDTH(int2), IF_GETHEIGHT(int2), 1008);
            };
        } else {
            [int4, int5, int6, int7, int8] = script8382(script8717(1008), 1008, 0, 0);
            script8387(int4, int5, int6, int7, 1008);
        };
    } else {
        script9951();
    };
    return;
}