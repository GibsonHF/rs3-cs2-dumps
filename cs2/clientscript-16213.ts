//
function script16213(int0: struct, int1: component, int2: int, int3: int, int4: unknown_int): void {
    var int5 = -1 as graphic;
    var int6 = 0;
    var long0 = 0n;
    if (((int0 == -1 as struct) || (int0 == 45918 as struct))) {
        return;
    };
    int5 = struct_getparam(int0, 8655);
    var string0 = `${script17940(int0)} - ${script17941(int0)}`;
    var int7 = -1 as obj;
    var int8 = -1 as struct;
    var string1 = "";
    var int9 = 0;
    if ((CC_FIND(int1, int3) == 1)) {
        switch (int0) {
            case 45919: {
                int6 = script11434();
                CC_SETONVARTRANSMIT(callback(script16212, int0, int1, int2, int3, 0, 9781, 9782, 2));
                break;
            }
            case 45920: {
                int6 = varclient_4659;
                CC_SETONVARCTRANSMIT(callback(script16212, int0, int1, int2, int3, 0, 4659, 1));
                break;
            }
            case 45921: {
                int6 = script6950();
                CC_SETONVARTRANSMIT(callback(script16212, int0, int1, int2, int3, 0, 1448, 1448, 1448, 3));
                CC_SETONVARCTRANSMIT(callback(script16212, int0, int1, int2, int3, 0, 1800, 1));
                break;
            }
            case 45922: {
                long0 = script17400();
                CC_SETONINVTRANSMIT(callback(script16212, int0, int1, int2, int3, 0, 623, 1));
                break;
            }
            case 45923: {
                int9 = 1;
                long0 = script18491(40932 as obj, 1, 1);
                CC_SETONINVTRANSMIT(callback(script16212, int0, int1, int2, int3, 0, 93, 795, 2));
                break;
            }
            case 45924:
            case 46571: {
                int8 = script11212();
                if ((int8 != -1 as struct)) {
                    int7 = struct_getparam(int8, 4866);
                    if ((int7 != -1 as obj)) {
                        long0 = script18491(int7, 1, 1);
                        int9 = 1;
                    };
                };
                CC_SETONINVTRANSMIT(callback(script16212, int0, int1, int2, int3, 0, 93, 795, 2));
                break;
            }
            case 47039: {
                int6 = (INV_TOTAL(93 as inv, 54031 as obj) + INV_TOTAL(795 as inv, 54031 as obj));
                CC_SETONINVTRANSMIT(callback(script16212, int0, int1, int2, int3, 0, 93, 795, 2));
                break;
            }
            case 48778: {
                script17927();
                string1 = script17929(varplayer_11339);
                int6 = script17928(varplayer_11339);
                if ((varplayer_11339 == script17853())) {
                    if ((script13749() == true)) {
                        string0 = `${string1} - You can earn ${string1} via ${script17888(varplayer_11339)}, or via Bond / In-app purchase. You spend them within the Hero Store.`;
                    } else {
                        string0 = `${string1} - You can earn ${string1} via ${script17888(varplayer_11339)}, or via Bond purchase. You spend them within the Hero Store.`;
                    };
                } else {
                    string0 = `You can no longer earn ${string1} as ${script17888(varplayer_11339)} has ended. You can still spend any you've got remaining in the Hero Store.`;
                };
                CC_SETONVARTRANSMIT(callback(script16212, int0, int1, int2, int3, 0, 11346, 1));
                break;
            }
        };
        CC_SETGRAPHIC(int5);
        CC_SETSIZE(45, 45, 0, 0);
        script3537(string0);
    };
    var int10 = 1;
    var int11 = 0;
    if (((CC_FINDBYCATEGORY(int1, int2, 0) == 1) && branch_eq_long[256](long0, 0n))) {
        int11 = cc_getparam(6408);
        if (((int4 == 1) || (int6 < int11))) {
            cc_setparam(6408, int6);
            cc_setparam(6409, int6);
            cc_setparam(5945, 0);
        } else if ((cc_getparam(6408) < int6)) {
            script17927();
            if (((int6 - int11) > 15)) {
                int10 = MAX(2, ((int6 - int11) / 15));
            };
            cc_setparam(6409, int6);
            CC_SETONTIMER(callback(script16214, -2147483645, -2147483643, int5, (int3 + 1), int10, 0, 1));
            return;
        };
    };
    if ((CC_FIND(int1, (int3 + 1)) == 1)) {
        if (branch_gt_long[324](long0, 0n)) {
            if ((int9 == 1)) {
                CC_SETTEXT(script12971(long0));
            } else {
                CC_SETTEXT(script17372(long0, 3, 1));
            };
        } else {
            CC_SETTEXT(script361(int6, 0));
        };
    };
    return;
}