//
function script11003(int0: int, int1: struct, int2: int, int3: int, int4: int, int5: unknown_int): void {
    if ((int0 == 22)) {
        var int0 = struct_getparam(int1, 2532);
    };
    IF_SETHIDE(false, comp(1311, 518));
    IF_SETHIDE(false, comp(1311, 588));
    IF_SETHIDE(false, comp(1311, 593));
    IF_SETHIDE(false, comp(1311, 380));
    IF_SETHIDE(true, comp(1311, 560));
    IF_SETHIDE(true, comp(1311, 557));
    IF_SETHIDE(true, comp(1311, 541));
    IF_SETHIDE(true, comp(1311, 533));
    if ((int0 != 1)) {
        IF_SETHIDE(true, comp(1311, 386));
        IF_SETHIDE(true, comp(1311, 383));
        IF_SETHIDE(true, comp(1311, 384));
        IF_SETPOSITION(0, 0, 1, 1, comp(1311, 385));
        IF_SETHIDE(false, comp(1311, 603));
    } else {
        IF_SETHIDE(false, comp(1311, 383));
        IF_SETHIDE(false, comp(1311, 384));
        IF_SETHIDE(false, comp(1311, 386));
        IF_SETPOSITION(((IF_GETX(comp(1311, 384)) + IF_GETWIDTH(comp(1311, 384))) + 5), 0, 0, 0, comp(1311, 385));
        IF_SETHIDE(true, comp(1311, 603));
    };
    if (((int0 != 3) && ((struct_getparam(int1, 477) == 0) || (struct_getparam(int1, 477) == -1)))) {
        IF_SETHIDE(false, comp(1311, 363));
    } else {
        IF_SETHIDE(true, comp(1311, 363));
    };
    IF_SETHIDE(false, comp(1311, 580));
    if (((struct_getparam(int1, 4420) == 0) || (script6488(int1) == 0))) {
        IF_SETHIDE(false, comp(1311, 582));
    } else {
        IF_SETHIDE(true, comp(1311, 582));
    };
    var int6 = 0;
    var int7 = -1;
    var int8 = 0;
    var int9 = 1;
    var int10 = 0;
    var int11 = -1 as cs2enum;
    var int12 = -1 as cs2enum;
    if (((int1 == 6865 as struct) && (int5 == 0))) {
        IF_SETHIDE(false, comp(1311, 520));
    } else {
        IF_SETHIDE(true, comp(1311, 520));
    };
    if ((struct_getparam(int1, 3847) == 1)) {
        IF_SETHIDE(false, comp(1311, 530));
        IF_SETHIDE(false, comp(1311, 554));
    } else {
        IF_SETHIDE(true, comp(1311, 530));
        IF_SETHIDE(true, comp(1311, 554));
    };
    if (((((int0 == 2) || (int0 == 3)) || (int0 == 5)) || (int0 == 4))) {
        IF_SETHIDE(true, comp(1311, 560));
        IF_SETHIDE(false, comp(1311, 581));
        if ((struct_getparam(int1, 7494) == 1)) {
            int11 = struct_getparam(int1, 8212);
            int12 = struct_getparam(int1, 8213);
            if ((int12 == -1 as cs2enum)) {
                return;
            };
            IF_SETHIDE(false, comp(1311, 557));
            CC_DELETEALL(comp(1311, 558));
            CC_DELETEALL(comp(1311, 559));
            int10 = ENUM_GETOUTPUTCOUNT(struct_getparam(int1, 8210));
            while ((++int7 < int10)) {
                script11605(comp(1311, 558), comp(1311, 559), 28749 as struct, 0, ((24 + 5) * int7), int7, 1, "Select", "Unselect", enum_getvalue(0, 36, int12, int7));
                if ((CC_FIND(comp(1311, 559), int7) == 1)) {
                    CC_SETOPCURSOR(1, 46);
                };
                if ((int11 != -1 as cs2enum)) {
                    script4512(comp(1311, 558), 24, 24, 0, ((24 + 5) * int7), enum_getvalue(0, 23, int11, int7));
                } else {
                    script152(comp(1311, 558), 24, 24, 0, ((24 + 5) * int7), 26 as fontmetrics, inttostring((int7 + 1), 10), 16777215);
                    CC_SETTEXTALIGN(1, 1, 0);
                };
            };
        } else if ((struct_getparam(int1, 3847) == 1)) {
            script3836(int1, int2, int3, int4);
        };
    } else if ((int0 == 1)) {
        if ((struct_getparam(int1, 8705) == false)) {
            IF_SETHIDE(false, comp(1311, 560));
        };
        if (((script6488(int1) == 0) || (script11005(int1) == 24000))) {
            IF_SETHIDE(false, comp(1311, 581));
        } else {
            IF_SETHIDE(true, comp(1311, 581));
        };
        if ((script6488(int1) == 1)) {
            IF_SETHIDE(false, comp(1311, 386));
        } else {
            IF_SETHIDE(true, comp(1311, 386));
        };
    };
    return;
}