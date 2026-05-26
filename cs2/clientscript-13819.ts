//
function script13819(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    var int6 = (IF_GETWIDTH(int0) - IF_GETWIDTH(int1));
    var int7 = 0;
    if ((int3 == -1)) {
        var int3 = int6;
    };
    int3 = MAX(int3, 0);
    int3 = MIN(int3, int6);
    switch (int4) {
        case 0: {
            varbitclient_38833 = SCALE(int3, int6, 255);
            int7 = SCALE(varbitclient_38833, 255, int6);
            break;
        }
        case 1: {
            varbitclient_38834 = SCALE(int3, int6, 127);
            int7 = SCALE(varbitclient_38834, 127, int6);
            break;
        }
        case 2: {
            varbitclient_38835 = SCALE(int3, int6, 127);
            int7 = SCALE(varbitclient_38835, 127, int6);
            break;
        }
        case 3: {
            varbitclient_38836 = SCALE(int3, int6, 127);
            int7 = SCALE(varbitclient_38836, 127, int6);
            break;
        }
    };
    IF_SETSIZE(int7, 7, 0, 0, int2);
    if ((int5 == 1)) {
        IF_SETPOSITION(int7, 0, 0, 0, int1);
        script13816();
    };
    return;
}