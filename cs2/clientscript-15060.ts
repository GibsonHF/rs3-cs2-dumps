//
function script15060(int0: number, int1: number, string0: string): void {
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = 0;
    switch (varbitplayer_19000) {
        case 1: {
            int2 = 6881622;
            int3 = 6881623;
            int4 = 6881625;
            int5 = IF_GETSCROLLY(6881620);
            break;
        }
        case 4: {
            int2 = 46333974;
            int3 = 46333975;
            int4 = 46333977;
            break;
        }
    };
    if ((((int2 != -1) && (int3 != -1)) && (int4 != -1))) {
        CC_DELETEALL(int2);
        CC_DELETEALL(int3);
        if ((STRING_LENGTH(string0) > 0)) {
            script11701(string0, int0, int2, int3, int1, int5);
            IF_SETHIDE(1, int4);
        } else {
            script11702(0, 0);
            IF_SETHIDE(0, int4);
        };
    };
    return;
}