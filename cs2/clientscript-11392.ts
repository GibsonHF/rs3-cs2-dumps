//
function script11392(int0: component, int1: int, int2: obj, int3: unknown_int): void {
    var int4 = 0;
    var int5 = script11404(int2);
    if ((int5 != -1 as obj)) {
        var int2 = int5;
    };
    var int6 = -1 as obj;
    var int7 = -1 as obj;
    var int8 = -1 as obj;
    var int9 = -1 as obj;
    var int10 = -1 as obj;
    var int11 = -1 as obj;
    var int12 = -1 as obj;
    var int13 = -1 as obj;
    var int14 = -1 as obj;
    [int6, int7, int8, int9, int10, int11, int12, int13, int14] = script11405(int2);
    var int15 = -1 as obj;
    var string0 = "";
    var int16 = 1;
    if ((CC_FIND(int0, int1) == 1)) {
        while (((int4 < 9) && (int16 == 1))) {
            switch (int4) {
                case 0: {
                    int15 = int6;
                    break;
                }
                case 1: {
                    int15 = int7;
                    break;
                }
                case 2: {
                    int15 = int8;
                    break;
                }
                case 3: {
                    int15 = int9;
                    break;
                }
                case 4: {
                    int15 = int10;
                    break;
                }
                case 5: {
                    int15 = int11;
                    break;
                }
                case 6: {
                    int15 = int12;
                    break;
                }
                case 7: {
                    int15 = int13;
                    break;
                }
                case 8: {
                    int15 = int14;
                    break;
                }
            };
            if ((int15 != -1 as obj)) {
                int5 = script11404(int15);
                if ((int5 != -1 as obj)) {
                    int15 = int5;
                };
                if ((INV_TOTAL(93 as inv, int15) == 0)) {
                    int16 = 0;
                };
            };
            int4 = (int4 + 1);
        };
        if (((int16 == 1) && (varbitplayer_27926 == 1))) {
            CC_SETTRANS(varclient_4797);
            CC_SETONTIMER(callback(script11395, -2147483645, -2147483643));
            script11394(int2, int3, 2);
        } else {
            CC_SETONTIMER(callback());
            CC_SETTRANS(210);
            script11394(int2, int3, 0);
        };
    };
    var int17 = -1 as graphic;
    var int18 = -1 as graphic;
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    if ((varbitplayer_22875 != 1)) {
        int17 = 18266 as graphic;
        int18 = 24427 as graphic;
    };
    if ((CC_FIND(comp(1621, 20), int1) == 1)) {
        if (((int16 == 1) && (varbitplayer_27926 == 1))) {
            CC_SETGRAPHIC(int18);
            CC_SETTRANS(int20);
            CC_SETCOLOUR(int21);
        } else {
            CC_SETGRAPHIC(int17);
            CC_SETTRANS(int19);
        };
    };
    return;
}