//
function script4133(int0: component, int1: int, int2: int, int3: unknown_int, int4: int, int5: int, int6: int, int7: int, int8: vorbis): void {
    var int9 = 0;
    var int10 = 0;
    if ((((int1 == -1) && (IF_FIND(int0) == 1)) || (CC_FIND(int0, int1) == 1))) {
        if ((int7 > 0)) {
            CC_SETONTIMER(callback(script4133, int0, int1, int2, int3, int4, int5, int6, (int7 - 1), int8));
            return;
        };
        int9 = CC_GETTRANS();
        int10 = MIN(MAX((int9 + int2), int4), int5);
        if (((int10 == int4) || (int10 == int5))) {
            if ((int10 == int5)) {
                var int7 = int6;
            };
            if (((int10 == int4) && (int8 != -1 as vorbis))) {
                SOUND_VORBIS_VOLUME(int8, 1, 50, 255);
            };
            CC_SETONTIMER(callback(script4133, int0, int1, int3, int2, int4, int5, int6, int7, int8));
        };
        CC_SETTRANS(int10);
    };
    return;
}