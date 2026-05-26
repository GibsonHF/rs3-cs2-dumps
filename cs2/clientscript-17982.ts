//
function script17982(int0: number): void {
    var int1 = -1;
    switch (int0) {
        case 0: {
            int1 = 80412674;
            break;
        }
        case 1: {
            int1 = 80347140;
            break;
        }
        case 3: {
            int1 = 26411011;
            break;
        }
        case 2: {
            int1 = 55246850;
            IF_SETHIDE(1, 55246851);
            break;
        }
        case 100: {
            int1 = 80412735;
            break;
        }
        default: {
            script12478(`Missing plugin for index ${inttostring(int0, 10)}`);
            return;
        }
    };
    CC_DELETEALL(int1);
    script2994(int1, 0, 0, 0, 0, 0, 0, 0, 1, 1, script17991());
    script17927();
    var int2 = 0;
    var int3 = 0;
    int2 = 529;
    int3 = 1920;
    script4264(int1, 2, 2);
    script1636(int1, 4313, int2, int3, 2, 25, 1, 0);
    if ((int0 != 0)) {
        return;
    };
    var int4 = 80412677;
    var int5 = 15;
    var int6 = 0;
    var int7 = 1;
    script2994(int4, int7, int5, int6, 1, 1, 650, 650, 0, 0, 4437);
    CC_ANIM_PLAY(10, 5000, 0, 2147483647, 0, 0);
    CC_SETONTIMER(callback(script17942, int4, int7, -2000));
    int7 = (int7 + 1);
    script2994(int4, int7, int5, int6, 1, 1, 650, 650, 0, 0, 4437);
    CC_SET2DANGLE(32768);
    CC_SETTRANS(128);
    CC_ANIM_PLAY(11, 5000, 0, 2147483647, 0, 0);
    CC_SETONTIMER(callback(script17942, int4, int7, -2000));
    int7 = (int7 + 1);
    script2994(int4, 6000, int5, int6, 1, 1, 700, 700, 0, 0, 4312);
    CC_SETONTIMER(callback(script17942, int4, 6000, -1500));
    CC_SETTRANS(255);
    CC_SET2DANGLE(16384);
    script2994(int4, 6001, int5, int6, 1, 1, 700, 700, 0, 0, 4312);
    CC_SETONTIMER(callback(script17942, int4, 6001, -1500));
    CC_SETTRANS(255);
    CC_SET2DANGLE(49152);
    script2994(int4, 6002, int5, int6, 1, 1, 550, 550, 0, 0, 4307);
    CC_SETTRANS(255);
    return;
}