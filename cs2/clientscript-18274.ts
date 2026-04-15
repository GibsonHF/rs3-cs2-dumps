//
function script18274(int0: struct, int1: int): void {
    var int2 = -1 as npc;
    var int3 = -1 as seq;
    var int4 = -1 as seq;
    var int5 = -1 as model;
    var int6 = -1 as seq;
    var int7 = -1 as model;
    var int8 = -1 as seq;
    var int9 = -1 as model;
    var int10 = comp(1311, 343);
    var int11 = comp(1311, 362);
    var int12 = -1 as cs2enum;
    var int13 = 0;
    var int14 = 0;
    var int15 = 10;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    CC_DELETEALL(comp(1311, 371));
    if ((int0 != -1 as struct)) {
        int2 = struct_getparam(int0, 9201);
        if (((varbitplayer_55451 == 1) && (struct_getparam(int0, 3752) != -1 as seq))) {
            int3 = struct_getparam(int0, 3752);
        } else {
            int3 = struct_getparam(int0, 2535);
        };
        if (((GENDER() == 1) && (struct_getparam(int0, 3752) != -1 as seq))) {
            if ((struct_getparam(int0, 4796) == 1)) {
                int3 = script10996(int0, 0);
            };
            int4 = struct_getparam(int0, 3753);
            int5 = struct_getparam(int0, 3754);
            int6 = struct_getparam(int0, 3755);
            int7 = struct_getparam(int0, 3756);
            int8 = struct_getparam(int0, 4297);
            int9 = struct_getparam(int0, 4298);
        } else {
            if ((struct_getparam(int0, 4796) == 1)) {
                int3 = script10996(int0, 0);
            };
            int4 = struct_getparam(int0, 2536);
            int5 = struct_getparam(int0, 2537);
            int6 = struct_getparam(int0, 2538);
            int7 = struct_getparam(int0, 2539);
            int8 = struct_getparam(int0, 4295);
            int9 = struct_getparam(int0, 4296);
        };
        int13 = struct_getparam(int0, 2540);
        int14 = struct_getparam(int0, 2541);
        int16 = struct_getparam(int0, 8546);
        int15 = script16639(int0);
        int17 = struct_getparam(int0, 3363);
        int20 = struct_getparam(int0, 4267);
        int12 = struct_getparam(int0, 5166);
    };
    if (((int17 == 0) && (int12 == -1 as cs2enum))) {
        script6443(int13, int14, int15, int16, 1, 1);
        if (((int2 != -1 as npc) && (CC_FIND(int10, 0) == 1))) {
            CC_SETNPCMODEL(int2);
        };
        if ((int3 == -1 as seq)) {
            if ((((varbitplayer_673 == 4) && (varbitplayer_675 == 5)) && (script10996(int0, 1) != -1 as seq))) {
                int3 = script10996(int0, 1);
            } else if ((varclient_779 != -1 as bas)) {
                int3 = BAS_GETANIM_READY(varclient_779);
            } else {
                int3 = BAS_GETANIM_READY(1426 as bas);
            };
            if ((varclient_1968 == 1)) {
                int3 = 12287 as seq;
            };
            IF_SETONTIMER(callback(script6449, -2147483645, int10, 0, 0), 85918353);
        } else {
            IF_SETONTIMER(callback(), comp(1311, 657));
        };
        if ((CC_FIND(int10, 0) == 1)) {
            CC_SETONVARCTRANSMIT(callback());
            CC_SETMODELANIM(int3);
        };
        int19 = (int19 + 1);
    } else {
        CC_DELETEALL(comp(1311, 343));
    };
    if (((int4 != -1 as seq) && (int5 != -1 as model))) {
        script6446(int10, 300, int13, int15, int16, int14, int5, int4);
        int18 = (int18 + 1);
        int19 = (int19 + 1);
    };
    if (((int6 != -1 as seq) && (int7 != -1 as model))) {
        script6446(int10, 300, int13, int15, int16, int14, int7, int6);
        int18 = (int18 + 1);
        int19 = (int19 + 1);
    };
    if (((int8 != -1 as seq) && (int9 != -1 as model))) {
        script6446(int10, 300, int13, int15, int16, int14, int9, int8);
        int18 = (int18 + 1);
        int19 = (int19 + 1);
    };
    if ((int12 != -1 as cs2enum)) {
        script18116(int0, int1, int13, int14, int15, int16, 1, 0);
        int19 = (int19 + 1);
    } else if ((int17 == 1)) {
        script6443(int13, int14, int15, int16, 1, 0);
        if (((int2 != -1 as npc) && (CC_FIND(int10, 0) == 1))) {
            CC_SETNPCMODEL(int2);
        };
        if ((int3 == -1 as seq)) {
            if ((((struct_getparam(int0, 2531) == 4) && (struct_getparam(int0, 2532) == 5)) && (script10996(int0, 1) != -1 as seq))) {
                int3 = script10996(int0, 1);
            } else if ((varclient_779 != -1 as bas)) {
                int3 = BAS_GETANIM_READY(varclient_779);
            } else {
                int3 = BAS_GETANIM_READY(1426 as bas);
            };
            if ((varclient_1968 == 1)) {
                int3 = 12287 as seq;
            };
            IF_SETONTIMER(callback(script6449, -2147483645, int10, 0, 0), 85918353);
        } else {
            IF_SETONTIMER(callback(), comp(1311, 657));
        };
        if ((CC_FIND(int10, int18) == 1)) {
            CC_SETONVARCTRANSMIT(callback());
            CC_SETMODELANIM(int3);
        };
        int19 = (int19 + 1);
    };
    if ((int20 == 1)) {
        IF_SETONDRAG(callback(), int11);
        IF_SETONDRAGCOMPLETE(callback(), int11);
        IF_SETMOUSEOVERCURSOR(-1, int11);
    } else {
        IF_SETONDRAG(callback(script9319, -2147483645, int10, 0, int19), int11);
        IF_SETMOUSEOVERCURSOR(188, int11);
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
        case 47048:
        case 47046:
        case 47187:
        case 47085:
        case 52413:
        case 47049:
        case 47047:
        case 49181:
        case 47184:
        case 2963:
        case 51282:
        case 2961:
        case 2964:
        case 51283:
        case 2962:
        case 51607: {
            IF_SETONTIMER(callback(script18275, int0, int1, (SEQLENGTH(struct_getparam(int0, 2535)) + 1)), 85918353);
            break;
        }
        case 47045:
        case 47044:
        case 52412:
        case 47185:
        case 47186:
        case 52414: {
            IF_SETONTIMER(callback(script18275, int0, int1, 240), 85918353);
            break;
        }
    };
    return;
}