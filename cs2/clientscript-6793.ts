//
function script6793(int0: number, int1: number): void {
    var int2 = script14344(int1);
    var int3 = script14345(int1);
    var int4 = -1;
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
    var int5 = 0;
    var int6 = script5731();
    var int7 = 0;
    var int8 = 0;
    var string0 = "";
    if ((int0 == 1)) {
        if ((varbitplayer_45140 == 1)) {
            int4 = script8232(int2);
            if (((int4 != 5) && (int4 != 6))) {
                if ((int4 != -1)) {
                    if ((item_getparam(int2, 1989) == true)) {
                        script1296("This item cannot be destroyed from the bank.");
                        return;
                    };
                    [int8, string0] = script4009(int2, 95, int1);
                    if ((script8919(int2, 95, "Destroy Item", string0, "Destroy") == 1)) {
                        script14289(int2, int3, int1);
                    };
                };
                return;
            };
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
            if ((OC_HASVAROBJ(int2) == 1)) {
                int5 = script14338(int2);
            } else {
                int5 = int3;
            };
            break;
        }
        case 8: {
            int5 = int3;
            int7 = 1;
            break;
        }
        case 9: {
            if ((varbitplayer_45139 == 2)) {
                int6 = 93;
                int5 = 1;
            } else {
                int6 = 94;
                if ((OC_STACKABLE(int2) == 1)) {
                    int5 = MAX(1, (int3 - 1));
                } else {
                    int5 = 1;
                };
            };
            break;
        }
        default: {
            return;
        }
    };
    script6794(int2, int5, int1, int6, -1, int3, int7);
    return;
}