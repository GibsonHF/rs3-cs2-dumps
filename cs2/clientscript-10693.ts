//
function script10693(int0: number): void {
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = 12;
    switch (int0) {
        case 101253121: {
            if (((varbitplayer_25557 == 0) || (IF_GETHIDE(comp(1545, 28)) == false))) {
                return;
            };
            int1 = comp(706, 5);
            int2 = comp(1545, 28);
            int3 = comp(1545, 30);
            int4 = 24;
            break;
        }
        case 101253123: {
            if (((varbitplayer_25558 == 0) || (IF_GETHIDE(comp(1545, 35)) == false))) {
                return;
            };
            int1 = comp(706, 4);
            int2 = comp(1545, 35);
            int3 = comp(1545, 44);
            break;
        }
        case 101253125: {
            if (((varbitplayer_25559 == 0) || (IF_GETHIDE(comp(1545, 39)) == false))) {
                return;
            };
            int1 = comp(706, 3);
            int2 = comp(1545, 39);
            int3 = comp(1545, 46);
            break;
        }
        default: {
            return;
        }
    };
    IF_SETHIDE(false, int2);
    IF_SETTEXT(inttostring(int4, 10), int3);
    IF_SETONTIMER(callback(script10694, int1, int2, int3, int4, 1), int1);
    return;
}