//
function script6609(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    var int6 = 0;
    var int7 = 0;
    if ((int2 != -1)) {
        if ((int3 == -1)) {
            if (((IF_FIND(int2) == 1) && (int2 == 86769680))) {
                int6 = int4;
                int7 = int5;
                if ((CC_FIND[1](int0, int1) == 1)) {
                    CC_SETPOSITION[1](int6, int7, 0, 0);
                };
            };
        } else {
            if ((CC_FIND(int2, int3) == 1)) {
                int6 = CC_GETX();
                int7 = CC_GETY();
            };
            if ((CC_FIND[1](int0, int1) == 1)) {
                SOUND_VORBIS_VOLUME(16950, 1, 0, 120);
                CC_SETPOSITION[1](int6, int7, 0, 0);
            };
        };
    };
    return;
}