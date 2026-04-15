//
function script6793(int0: int, int1: int): void {
    var int2 = script14344(int1);
    var int3 = script14345(int1);
    if ((int2 == -1 as obj)) {
        return;
    };
    if ((int3 == 0)) {
        if ((int0 == 8)) {
            script14290(int1, int2);
        };
        return;
    };
    script14186();
    var int4 = 0;
    var int5 = script5731();
    var int6 = 0;
    var int7 = 0;
    var string0 = "";
    if ((int0 == 1)) {
        if ((varbitplayer_45140 == 1)) {
            if ((script8232(int2) != -1)) {
                [int7, string0] = script4009(int2, 95 as inv, int1);
                if (((int7 == 1) || (script8919(int2, 95, "Destroy Item", string0, "Destroy") == 1))) {
                    script14289(int2, int3, int1);
                };
            };
            return;
        };
        var int0 = varbitplayer_45189;
    };
    if ((script16797(int2) == 0)) {
        return;
    };
    if ((OC_HASVAROBJ(int2) == 1)) {
        int3 = script14338(int2);
    };
    switch (int0) {
        case 0:
        case 2: {
            int4 = 1;
            break;
        }
        case 3: {
            int4 = 5;
            break;
        }
        case 4: {
            int4 = 10;
            break;
        }
        case 5: {
            int4 = varplayer_111;
            break;
        }
        case 6: {
            int4 = script14234();
            break;
        }
        case 7: {
            if ((OC_HASVAROBJ(int2) == 1)) {
                int4 = script14338(int2);
            } else {
                int4 = int3;
            };
            break;
        }
        case 8: {
            int4 = int3;
            int6 = 1;
            break;
        }
        case 9: {
            if ((varbitplayer_45139 == 2)) {
                int5 = 93 as inv;
                int4 = 1;
            } else {
                int5 = 94 as inv;
                if ((OC_STACKABLE(int2) == 1)) {
                    int4 = MAX(1, (int3 - 1));
                } else {
                    int4 = 1;
                };
            };
            break;
        }
        default: {
            return;
        }
    };
    script6794(int2, int4, int1, int5, -1, int3, int6);
    return;
}