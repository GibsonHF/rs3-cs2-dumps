//
function script3503(int0: int, int1: int, int2: int, int3: int, int4: unknown_int, int5: unknown_int, int6: int, int7: int, int8: unknown_int, int9: unknown_int): void {
    if ((varclient_1963 == 0)) {
        return;
    };
    var int10 = 0;
    if ((varclient_1968 == 1)) {
        var int3 = 200;
        int10 = 850;
        var int1 = 80;
    } else {
        int10 = (300 + int0);
        if ((varclient_1963 != 5)) {
            int1 = (100 + int1);
        } else {
            int1 = (60 + int1);
        };
    };
    if (((CC_FIND(comp(1311, 343), 0) == 1) && (int4 == 0))) {
        int3 = CC_GETMODELANGLE_Y();
        int10 = CC_GETMODELZOOM();
        int1 = CC_GETMODELYOF();
    };
    if ((int5 == 1)) {
        CC_DELETEALL(comp(1311, 343));
    };
    CC_CREATE(comp(1311, 343), 6, IF_GETNEXTSUBID(comp(1311, 343)));
    if ((varclient_1963 != 5)) {
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETPOSITION(0, 0, 1, 1);
    } else {
        IF_SETHIDE(false, comp(1311, 382));
        CC_SETSIZE(8, 70, 1, 1);
        if ((varclient_2699 == 3)) {
            CC_SETPOSITION(0, 0, 1, 1);
        } else {
            CC_SETPOSITION(0, -15, 1, 1);
        };
    };
    if ((varclient_1963 != 5)) {
        if ((varclient_1968 == 1)) {
            unk11106();
            if ((int3 > 1024)) {
                int3 = MAX(int3, 1572);
            } else {
                int3 = MIN(int3, 512);
            };
        } else {
            CC_SETPLAYERMODEL_SELF();
        };
    } else {
        CC_SETNPCMODEL(varclient_2692);
        if ((int7 == -1)) {
            var int7 = script1530(varclient_6714);
        };
        if ((struct_getparam(varclient_6714, 3847) == 1)) {
            script2738(varclient_6714, int6, int7);
        };
        if (((varclient_2692 != -1 as npc) && (npc_getparam(varclient_2692, 477) == 0))) {
            script7411(varclient_3756);
        };
    };
    CC_SETMODELANGLE(0, int1, int2, int3, 10, int10);
    if ((varclient_1963 != 5)) {
        if ((varclient_1968 == 1)) {
            CC_SETMODELANIM(12287 as seq);
        } else {
            if ((varclient_779 != -1 as bas)) {
                CC_SETMODELANIM(BAS_GETANIM_READY(varclient_779));
            } else {
                CC_SETMODELANIM(BAS_GETANIM_READY(1426 as bas));
            };
            CC_SETONVARCTRANSMIT(callback(script1517, -2147483645, -2147483643, 779, 1));
        };
        IF_SETHIDE(false, comp(1311, 469));
    } else {
        if ((varclient_2693 != -1 as seq)) {
            CC_SETMODELANIM(varclient_2693);
        };
        if ((npc_getparam(varclient_2692, 4813) == true)) {
            CC_SETMODELANIM(21964 as seq);
        };
    };
    var int11 = 85918039;
    var int12 = comp(1311, 362);
    if (((varclient_1963 == 5) && (varclient_2692 == -1 as npc))) {
        IF_SETONDRAG(callback(), int12);
        IF_SETMOUSEOVERCURSOR(-1, int12);
    } else {
        IF_SETONDRAG(callback(script9319, -2147483645, int11, 0, 1), int12);
        IF_SETMOUSEOVERCURSOR(188, int12);
    };
    return;
}