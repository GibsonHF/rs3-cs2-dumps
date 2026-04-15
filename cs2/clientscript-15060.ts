//
function script15060(int0: obj, int1: unknown_int, string0: string): void {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = 0;
    switch (varbitplayer_19000) {
        case 1: {
            int2 = comp(105, 342);
            int3 = comp(105, 343);
            int4 = comp(105, 345);
            int5 = IF_GETSCROLLY(comp(105, 340));
            break;
        }
        case 4: {
            int2 = comp(707, 22);
            int3 = comp(707, 23);
            int4 = comp(707, 25);
            break;
        }
    };
    if ((((int2 != comp(-1, 65535)) && (int3 != comp(-1, 65535))) && (int4 != comp(-1, 65535)))) {
        CC_DELETEALL(int2);
        CC_DELETEALL(int3);
        if ((STRING_LENGTH(string0) > 0)) {
            script11701(string0, int0, int2, int3, int1, int5);
            IF_SETHIDE(true, int4);
        } else {
            script11702(0, 0);
            IF_SETHIDE(false, int4);
        };
    };
    return;
}