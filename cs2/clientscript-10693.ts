//
function script10693(int0: number): void {
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = 12;
    switch (int0) {
        case 101253121: {
            if (((varbitplayer_25557 == 0) || (IF_GETHIDE(101253148) == 0))) {
                return;
            };
            int1 = 46268421;
            int2 = 101253148;
            int3 = 101253150;
            int4 = 24;
            break;
        }
        case 101253123: {
            if (((varbitplayer_25558 == 0) || (IF_GETHIDE(101253155) == 0))) {
                return;
            };
            int1 = 46268420;
            int2 = 101253155;
            int3 = 101253164;
            break;
        }
        case 101253125: {
            if (((varbitplayer_25559 == 0) || (IF_GETHIDE(101253159) == 0))) {
                return;
            };
            int1 = 46268419;
            int2 = 101253159;
            int3 = 101253166;
            break;
        }
        default: {
            return;
        }
    };
    IF_SETHIDE(0, int2);
    IF_SETTEXT(inttostring(int4, 10), int3);
    IF_SETONTIMER(callback(script10694, int1, int2, int3, int4, 1), int1);
    return;
}