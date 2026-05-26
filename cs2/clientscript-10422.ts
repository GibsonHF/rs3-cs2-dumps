//
function script10422(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, string0: string, string1: string): void {
    var int4 = (1 - int4);
    var int6 = struct_getparam(int5, 7526);
    if ((int4 >= 1)) {
        int6 = struct_getparam(int5, 7525);
    };
    var int7 = struct_getparam(int6, 4405);
    if ((int7 != -1 as struct)) {
        int6 = int7;
    };
    var int8 = script9984(int6, 1);
    var int9 = script9984(int6, 2);
    var int10 = int8;
    if ((CC_FIND(int2, int3) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int10, 3909));
        if ((int1 == -1)) {
            IF_SETONMOUSEOVER(callback(script6265, int2, int3, int9), int0);
            IF_SETONMOUSELEAVE(callback(script6265, int2, int3, int8), int0);
        } else if ((((int0 != -1) && (CC_FIND[1](int0, int1) == 1)) || (CC_FIND[1](int2, int3) == 1))) {
            CC_SETONMOUSEOVER[1](callback(script6265, int2, int3, int9));
            CC_SETONMOUSELEAVE[1](callback(script6265, int2, int3, int8));
        };
        if ((int4 == 0)) {
            if ((STRING_LENGTH(string1) > 0)) {
                CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
            };
        } else if ((STRING_LENGTH(string0) > 0)) {
            CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        };
        if ((((int1 == -1) && (IF_FIND(int0) == 1)) || (CC_FIND(int0, int1) == 1))) {
            CC_SETONOP(callback(script10422, -2147483645, -2147483643, int2, int3, string0, string1, int4, int5));
        };
        switch (int0) {
            case 110231556:
            case 113836036: {
                script12342(int0, int1);
                break;
            }
            case 121700437: {
                script13625();
                break;
            }
            case 99156092: {
                script13739(int4, 10849, int1);
                break;
            }
            case 21233694: {
                script2789(1292, int1, int4);
                script2684();
                break;
            }
            case 21233712: {
                script2789(1293, int1, int4);
                script2684();
                break;
            }
            case 21233684: {
                SOUND_VORBIS_VOLUME(36961, 1, 0, 120);
                script2736(int4);
                break;
            }
            case 38928400:
            case 38928448: {
                script7818(int0);
                break;
            }
            case 37158917: {
                script2755();
                break;
            }
            case 121307173:
            case 121307181:
            case 121307183: {
                script15369();
                break;
            }
        };
    };
    return;
}