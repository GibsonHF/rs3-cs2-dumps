//
function script13845(int0: component, int1: component, int2: cs2enum, int3: unknown_int, int4: int, int5: int): void {
    var int6 = -1;
    var int7 = -1;
    var int8 = 0;
    var int9 = 32;
    var int10 = -1;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = -1 as struct;
    var int15 = -1 as struct;
    var int16 = -1 as struct;
    var int17 = script14441();
    var string0 = "";
    var int18 = script6431();
    while ((int4 <= int5)) {
        int6 = enum_getvalue(0, 0, int2, int4);
        int7 = script13857(int6);
        int13 = script13856(int6);
        int8 = script13859(int6, int13, int7, int3);
        int15 = script13415(int7);
        if ((int15 != -1 as struct)) {
            int16 = struct_getparam(int15, 5146);
        };
        if ((varbitplayer_22875 == 0)) {
            int9 = 24;
        } else if ((varbitplayer_22875 == 1)) {
            int9 = 22;
        } else if (((varbitplayer_22875 == 2) && (int18 == true))) {
            int9 = 50;
        };
        if ((int13 == 0)) {
            int14 = script10405(int6);
            if (((int3 != 3) && (varbitplayer_22875 == 0))) {
                int12 = script8314(int6);
                if (((int12 == -1) || (int12 != int6))) {
                    int11 = 1;
                } else {
                    int11 = 0;
                };
            } else {
                int11 = 1;
            };
        } else {
            int14 = int15;
            if ((((int7 == 4) && (int17 != -1 as struct)) && (struct_getparam(int17, 6285) != -1 as struct))) {
                int16 = struct_getparam(int17, 6285);
            };
            int11 = script8285(int7);
        };
        string0 = struct_getparam(int14, 3493);
        if (((varbitplayer_27169 == 1) && (strcmp(struct_getparam(int14, 4471), "") != 0))) {
            string0 = struct_getparam(int14, 4471);
        };
        if ((int18 == false)) {
            if ((CC_FIND(int0, int4) == 1)) {
                script723(int0, int16, int8, int4);
            } else {
                script11625(int0, comp(-1, 65535), int16, 0, 0, int4, int8);
            };
        } else {
            if ((CC_FIND(int0, int4) == 1)) {
                CC_SETSIZE(50, 50, 0, 0);
            } else {
                CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
                CC_SETSIZE(50, 50, 0, 0);
            };
            if ((strcmp(struct_getparam(int14, 8095), "") != 0)) {
                string0 = struct_getparam(int14, 8095);
            };
        };
        if (((varplayer_12314 > 0) && (int14 == 37398 as struct))) {
            string0 = script20128();
        };
        if ((CC_FIND(int0, int4) == 1)) {
            cc_setparam(3536, int6);
            CC_SETOPBASE(string0);
            CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
            switch (int3) {
                case 0:
                case 1:
                case 2:
                case 4: {
                    CC_SETNOCLICKTHROUGH(true);
                    if ((int13 == 0)) {
                        CC_SETONOP(callback(script8146, int6));
                        if ((((int6 == 17) || (int8 == 1)) || ((varbitplayer_36885 == 1) && (int18 == false)))) {
                            CC_SETOP(1, "Open");
                        } else {
                            CC_SETOP(1, "Close");
                        };
                        if ((varbitplayer_27169 == 1)) {
                            CC_SETMOUSEOVERCURSOR(49);
                        } else {
                            CC_SETMOUSEOVERCURSOR(194);
                        };
                    } else {
                        CC_SETONOP(callback(script8146, int6));
                        if ((int8 == 1)) {
                            CC_SETOP(1, "Open");
                        } else {
                            CC_SETOP(1, "Close");
                        };
                        if (((((varbitplayer_38842 == 0) && (varbitplayer_27169 == 0)) && (int3 != 2)) && (int3 != 1))) {
                            CC_SETONMOUSEREPEAT(callback(script15978, -2147483645, -2147483643, int15, int3, string0));
                        };
                    };
                    break;
                }
                case 3: {
                    CC_SETONOP(callback(script2396, int6, -2147483645, -2147483643));
                    if ((CC_FIND[1](int1, int4) == 1)) {
                        CC_SETONDRAGCOMPLETE[1](callback(script2395, int6, -2147483645, -2147483643, -2147483642));
                        CC_SETMOUSEOVERCURSOR[1](194);
                        CC_SETDRAGGABLE[1](37158919, -1);
                        if ((script13749() == 0)) {
                            CC_SETDRAGDEADZONE[1](5);
                            CC_SETDRAGDEADTIME[1](5);
                        } else {
                            CC_SETDRAGDEADZONE[1](20);
                            CC_SETDRAGDEADTIME[1](5);
                        };
                        CC_SETDRAGRENDERBEHAVIOUR[1](2);
                    };
                    int10 = script2385(int6, 1);
                    if ((int10 == -1)) {
                        CC_SETOP(1, "Add");
                    } else {
                        CC_SETOP(1, "Remove");
                    };
                    break;
                }
            };
        };
        if ((CC_FIND(int1, int4) == 0)) {
            CC_CREATE(int1, 5, int4);
        };
        if ((CC_FIND(int1, int4) == 1)) {
            CC_SETSIZE(int9, int9, 0, 0);
            CC_SETGRAPHIC(script13858(int14, int11, 0, int8, 0));
            if ((int8 == 1)) {
                CC_SETTRANS(0);
            } else {
                CC_SETTRANS(0);
            };
            if (((int14 == 21186 as struct) && (script3609() != -1 as dbrow))) {
                CC_SETONVARTRANSMIT(callback(script13833, 93782016, 93782028, 9062, 9078, 9080, 9081, 9082, 5));
            };
        };
        var int4 = (int4 + 1);
    };
    return;
}