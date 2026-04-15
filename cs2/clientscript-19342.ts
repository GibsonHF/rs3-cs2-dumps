//
function script19342(int0: inv, int1: int, int2: int): void {
    var int3 = script19588(int0, int2);
    var int4 = script19589(int0, int2);
    if (((int3 == -1 as obj) || (int4 < 1))) {
        return;
    };
    var int5 = 0;
    if ((int1 == 1)) {
        var int1 = varbitplayer_45189;
    };
    switch (int1) {
        case 2: {
            int5 = 1;
            break;
        }
        case 3: {
            int5 = 5;
            break;
        }
        case 4: {
            int5 = 10;
            break;
        }
        case 5: {
            int5 = varplayer_111;
            break;
        }
        case 6: {
            int5 = script14234();
            break;
        }
        case 7: {
            int5 = -1;
            break;
        }
        default: {
            return;
        }
    };
    script19568();
    script19344(int0, int3, int5, int2, 1, 1);
    return;
}