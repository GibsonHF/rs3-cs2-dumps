//
function script7004(int0: component, int1: int, int2: unknown_int, int3: struct, int4: component, int5: unknown_int): void {
    var int6 = int3;
    var int3 = script8247(int3);
    var int7 = 0;
    var int8 = 0;
    var int9 = INV_GETOBJ(94 as inv, 3);
    var int10 = INV_GETOBJ(94 as inv, 5);
    var int11 = script15098(int9, int3);
    if ((((((int1 != -1) && (CC_FIND(int0, int1) == 1)) || (IF_FIND(int0) == 1)) && (struct_getparam(int6, 6527) == true)) && (int3 != int6))) {
        script6995(script11799(script11786(int0)), script7980(int0), 0, 0, 1, -1);
    };
    if ((((int1 != -1) && (CC_FIND(int0, int1) == 1)) || (IF_FIND(int0) == 1))) {
        if ((CC_GETGRAPHIC() != script11778(int3, int5))) {
            return;
        };
        switch (int2) {
            case 4: {
                int7 = script2936(int3);
                break;
            }
            case 3: {
                if ((varclient_6614 < CLIENTCLOCK())) {
                    int7 = 500;
                } else {
                    int7 = 150;
                };
                break;
            }
            case 5: {
                int7 = script9868(script15098(int9, int3));
                break;
            }
            case 2: {
                int7 = script17445(int3);
                break;
            }
        };
        if ((varplayer_679 < int7)) {
            int8 = 0;
        } else if ((int3 == 28430 as struct)) {
            if ((script9865(int9, int10) > 0)) {
                int8 = 1;
            } else {
                int8 = 0;
            };
        } else if ((int3 == 11748 as struct)) {
            if (((OC_CATEGORY(INV_GETOBJ(94 as inv, 2)) == 4700 as category) && (item_getparam(INV_GETOBJ(94 as inv, 2), 3793) == 0))) {
                if ((((OC_HASVAROBJ(INV_GETOBJ(94 as inv, 2)) == 1) && (INV_GETVAR(94 as inv, 2, 47702) > 0)) && (((item_getparam(int9, 2825) == 1) && (item_getparam(int11, 2825) == 1)) || (((item_getparam(int9, 2827) == 1) && (item_getparam(int11, 2827) == 1)) || (((item_getparam(int9, 2826) == 1) && (item_getparam(int11, 2826) == 1)) || ((item_getparam(int9, 8898) == 1) && (item_getparam(int11, 8898) == 1))))))) {
                    int8 = 1;
                } else {
                    int8 = 0;
                };
            } else {
                int8 = 0;
            };
        } else if ((int3 == 44225 as struct)) {
            if ((script17692() == 1)) {
                int8 = 1;
            };
        } else if (((script690(int3) != 0) && (script690(int3) != 3))) {
            int8 = 0;
        } else {
            int8 = script2660(int3);
        };
        if ((int8 == 1)) {
            CC_SETCOLOUR(16777215);
            script7968(int4, 1);
        } else {
            CC_SETCOLOUR(3355443);
            script7968(int4, 0);
        };
    };
    return;
}