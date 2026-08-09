//
function script18274(int0: number, int1: number): void {
    var int2 = -1 as npc;
    var int3 = -1 as seq;
    var int4 = -1 as seq;
    var int5 = -1 as model;
    var int6 = struct_getparam(int0, 8677);
    var int7 = struct_getparam(int0, 8678);
    var int8 = struct_getparam(int0, 1073);
    var int9 = struct_getparam(int0, 1074);
    var int10 = struct_getparam(int0, 1075);
    var int11 = struct_getparam(int0, 1076);
    var int12 = -1 as seq;
    var int13 = -1 as model;
    var int14 = -1 as seq;
    var int15 = -1 as model;
    var int16 = comp(1311, 343);
    var int17 = comp(1311, 362);
    var int18 = -1 as cs2enum;
    var int19 = 0;
    var int20 = 0;
    var int21 = 10;
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    var int25 = 0;
    var int26 = 0;
    CC_DELETEALL(comp(1311, 371));
    if ((int0 != -1)) {
        int2 = struct_getparam(int0, 9201);
        if ((varbitplayer_55451 == 1)) {
            if ((struct_getparam(int0, 3752) != -1 as seq)) {
                int3 = struct_getparam(int0, 3752);
            } else {
                int3 = struct_getparam(int0, 2535);
            };
        } else {
            int3 = struct_getparam(int0, 2535);
        };
        if ((GENDER() == 1)) {
            if ((struct_getparam(int0, 3752) != -1 as seq)) {
                if ((struct_getparam(int0, 4796) == 1)) {
                    int3 = script10996(int0, 0);
                };
                int4 = struct_getparam(int0, 3753);
                int5 = struct_getparam(int0, 3754);
                int12 = struct_getparam(int0, 3755);
                int13 = struct_getparam(int0, 3756);
                int14 = struct_getparam(int0, 4297);
                int15 = struct_getparam(int0, 4298);
            } else {
                if ((struct_getparam(int0, 4796) == 1)) {
                    int3 = script10996(int0, 0);
                };
                int4 = struct_getparam(int0, 2536);
                int5 = struct_getparam(int0, 2537);
                int12 = struct_getparam(int0, 2538);
                int13 = struct_getparam(int0, 2539);
                int14 = struct_getparam(int0, 4295);
                int15 = struct_getparam(int0, 4296);
            };
        } else {
            if ((struct_getparam(int0, 4796) == 1)) {
                int3 = script10996(int0, 0);
            };
            int4 = struct_getparam(int0, 2536);
            int5 = struct_getparam(int0, 2537);
            int12 = struct_getparam(int0, 2538);
            int13 = struct_getparam(int0, 2539);
            int14 = struct_getparam(int0, 4295);
            int15 = struct_getparam(int0, 4296);
        };
        int19 = struct_getparam(int0, 2540);
        int20 = struct_getparam(int0, 2541);
        int22 = struct_getparam(int0, 8546);
        int21 = script16639(int0);
        int23 = struct_getparam(int0, 3363);
        int26 = struct_getparam(int0, 4267);
        int18 = struct_getparam(int0, 5166);
    };
    if ((int23 == 0)) {
        if ((int18 == -1 as cs2enum)) {
            script6443(int19, int20, int21, int22, 1, 1);
            if (((int2 != -1 as npc) && (CC_FIND(int16, 0) == 1))) {
                CC_SETNPCMODEL(int2);
            };
            if ((int3 == -1 as seq)) {
                if ((varbitplayer_673 == 4)) {
                    if ((varbitplayer_675 == 5)) {
                        if ((script10996(int0, 1) != -1)) {
                            int3 = script10996(int0, 1);
                        } else if ((varclient_779 != -1 as bas)) {
                            int3 = BAS_GETANIM_READY(varclient_779);
                        } else {
                            int3 = BAS_GETANIM_READY(1426 as bas);
                        };
                    } else if ((varclient_779 != -1 as bas)) {
                        int3 = BAS_GETANIM_READY(varclient_779);
                    } else {
                        int3 = BAS_GETANIM_READY(1426 as bas);
                    };
                } else if ((varclient_779 != -1 as bas)) {
                    int3 = BAS_GETANIM_READY(varclient_779);
                } else {
                    int3 = BAS_GETANIM_READY(1426 as bas);
                };
                if ((varclient_1968 == 1)) {
                    int3 = 37903 as seq;
                };
                IF_SETONTIMER(callback(script6449, -2147483645, int16, 0, 0), comp(1311, 657));
            } else {
                IF_SETONTIMER(callback(), comp(1311, 657));
            };
            if ((CC_FIND(int16, 0) == 1)) {
                CC_SETONVARCTRANSMIT(callback());
                CC_SETMODELANIM(int3);
            };
            int25 = (int25 + 1);
        } else {
            CC_DELETEALL(comp(1311, 343));
        };
    } else {
        CC_DELETEALL(comp(1311, 343));
    };
    if (((int4 != -1 as seq) && (int5 != -1 as model))) {
        script6446(int16, 300, int19, int21, int22, int20, int5, int4, int6, int7, int8, int9, int10, int11);
        int24 = (int24 + 1);
        int25 = (int25 + 1);
    };
    if (((int12 != -1 as seq) && (int13 != -1 as model))) {
        script6446(int16, 300, int19, int21, int22, int20, int13, int12, -1, -1, -1, -1, -1, -1);
        int24 = (int24 + 1);
        int25 = (int25 + 1);
    };
    if (((int14 != -1 as seq) && (int15 != -1 as model))) {
        script6446(int16, 300, int19, int21, int22, int20, int15, int14, -1, -1, -1, -1, -1, -1);
        int24 = (int24 + 1);
        int25 = (int25 + 1);
    };
    if ((int18 != -1 as cs2enum)) {
        script18116(int0, int1, int19, int20, int21, int22, 1, 0);
        int25 = (int25 + 1);
    } else if ((int23 == 1)) {
        script6443(int19, int20, int21, int22, 1, 0);
        if (((int2 != -1 as npc) && (CC_FIND(int16, 0) == 1))) {
            CC_SETNPCMODEL(int2);
        };
        if ((int3 == -1 as seq)) {
            if ((struct_getparam(int0, 2531) == 4)) {
                if ((struct_getparam(int0, 2532) == 5)) {
                    if ((script10996(int0, 1) != -1)) {
                        int3 = script10996(int0, 1);
                    } else if ((varclient_779 != -1 as bas)) {
                        int3 = BAS_GETANIM_READY(varclient_779);
                    } else {
                        int3 = BAS_GETANIM_READY(1426 as bas);
                    };
                } else if ((varclient_779 != -1 as bas)) {
                    int3 = BAS_GETANIM_READY(varclient_779);
                } else {
                    int3 = BAS_GETANIM_READY(1426 as bas);
                };
            } else if ((varclient_779 != -1 as bas)) {
                int3 = BAS_GETANIM_READY(varclient_779);
            } else {
                int3 = BAS_GETANIM_READY(1426 as bas);
            };
            if ((varclient_1968 == 1)) {
                int3 = 37903 as seq;
            };
            IF_SETONTIMER(callback(script6449, -2147483645, int16, 0, 0), comp(1311, 657));
        } else {
            IF_SETONTIMER(callback(), comp(1311, 657));
        };
        if ((CC_FIND(int16, int24) == 1)) {
            CC_SETONVARCTRANSMIT(callback());
            CC_SETMODELANIM(int3);
        };
        int25 = (int25 + 1);
    };
    if ((int26 == 1)) {
        IF_SETONDRAG(callback(), int17);
        IF_SETONDRAGCOMPLETE(callback(), int17);
        IF_SETMOUSEOVERCURSOR(-1, int17);
    } else {
        IF_SETONDRAG(callback(script9319, -2147483645, int16, 0, int25), int17);
        IF_SETMOUSEOVERCURSOR(188, int17);
    };
    switch (int0) {
        case 48842:
        case 48843:
        case 52364:
        case 49609:
        case 32394:
        case 49876:
        case 50571:
        case 50572:
        case 50573:
        case 50574:
        case 50575:
        case 50576:
        case 50577:
        case 50578:
        case 50579:
        case 50580:
        case 987:
        case 988:
        case 989:
        case 990:
        case 991:
        case 47048:
        case 47046:
        case 47187:
        case 47085:
        case 52413:
        case 47049:
        case 47047:
        case 49181:
        case 47184:
        case 982:
        case 981:
        case 986:
        case 984:
        case 2963:
        case 51282:
        case 2961:
        case 2964:
        case 51283:
        case 2962:
        case 51607:
        case 985:
        case 980: {
            IF_SETONTIMER(callback(script18275, int0, int1, (SEQLENGTH(struct_getparam(int0, 2535)) + 1)), comp(1311, 657));
            break;
        }
        case 47045:
        case 47044:
        case 52412:
        case 47185:
        case 47186:
        case 52414: {
            IF_SETONTIMER(callback(script18275, int0, int1, 240), comp(1311, 657));
            break;
        }
    };
    return;
}