//
function script6087(int0: inv, int1: inv, int2: int, int3: int): void {
    if ((script4550(1265 as interface) == 0)) {
        return;
    };
    script6082();
    if ((int2 == -1)) {
        var int2 = 0;
    };
    varplayer_303 = int2;
    var int4 = 82903052;
    var int5 = 82903051;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = -1 as obj;
    [int12, int13] = script6095(int3);
    var int15 = (IF_GETWIDTH(comp(1265, 12)) / int12);
    if ((int2 == 1)) {
        var int0 = 93 as inv;
        var int1 = -1 as inv;
        IF_SETONINVTRANSMIT(callback(), comp(1265, 6));
    } else if ((int1 != -1 as inv)) {
        int6 = 0;
        int7 = INV_SIZE(int1);
        int8 = 0;
        while ((int6 < int7)) {
            int14 = INV_GETOBJ(int1, int6);
            if (((MAP_MEMBERS() == 0) && (OC_MEMBERS(int14) == 1))) {
                script6088(int6, 1);
            } else if ((int14 == -1 as obj)) {
                script6088(int6, 1);
            } else {
                script6089(int1, int6, int8, int3);
                int8 = (int8 + 1);
            };
            int6 = (int6 + 1);
        };
        int9 = (int8 / int15);
        if ((MODULO(int8, int15) != 0)) {
            int9 = (int9 + 1);
        };
        int11 = (int9 * int13);
        IF_SETONINVTRANSMIT(callback(script6092, varplayer_305, int1, 1), comp(1265, 6));
    };
    int9 = 0;
    int6 = 0;
    int8 = 0;
    if ((int0 != -1 as inv)) {
        int7 = INV_SIZE(int0);
        while ((int6 < int7)) {
            int14 = INV_GETOBJ(int0, int6);
            if (((MAP_MEMBERS() == 0) && (OC_MEMBERS(int14) == 1))) {
                script6088(int6, 0);
            } else if ((int14 == -1 as obj)) {
                script6088(int6, 0);
            } else if ((script16928(int14) == 1)) {
                script6088(int6, 0);
            } else if (((((script12649(varplayer_306) == 1) && (varplayer_303 == 0)) && (item_getparam(OC_UNCERT(int14), 5850) == 0)) && (item_getparam(OC_UNCERT(int14), 5783) == 0))) {
                script6088(int6, 0);
            } else if (((((script12649(varplayer_306) == 1) && (varplayer_303 == 1)) && (item_getparam(OC_UNCERT(int14), 5850) == 0)) && (item_getparam(OC_UNCERT(int14), 5783) == 0))) {
                script6088(int6, 0);
            } else {
                script6089(int0, int6, int8, int3);
                int8 = (int8 + 1);
            };
            int6 = (int6 + 1);
        };
    };
    if ((enum_getvalue(39, 0, 921 as cs2enum, varplayer_304) == 1)) {
        IF_SETHIDE(false, comp(1265, 50));
    } else {
        IF_SETHIDE(true, comp(1265, 50));
    };
    script17395();
    int9 = (int8 / int15);
    if ((MODULO(int8, int15) != 0)) {
        int9 = (int9 + 1);
    };
    int10 = (int9 * int13);
    IF_SETSIZE(0, int11, 1, 0, comp(1265, 13));
    IF_SETPOSITION(0, int11, 1, 0, comp(1265, 19));
    IF_SETSIZE(0, int10, 1, 0, comp(1265, 19));
    var int16 = (int11 + int10);
    if ((int16 > IF_GETHEIGHT(comp(1265, 12)))) {
        IF_SETSCROLLSIZE(0, int16, comp(1265, 12));
    } else {
        IF_SETSCROLLSIZE(0, IF_GETHEIGHT(comp(1265, 12)), comp(1265, 12));
    };
    script31(comp(1265, 11), comp(1265, 12), 5666 as graphic, 5663 as graphic, 5664 as graphic, 5665 as graphic, 5686 as graphic, 5685 as graphic);
    if ((int2 == 1)) {
        IF_SETONINVTRANSMIT(callback(script6092, 93, 93, 1), comp(1265, 5));
        script6093(93);
        script6097(1);
    } else {
        IF_SETONINVTRANSMIT(callback(script6092, varplayer_304, int0, 1), comp(1265, 5));
        script6093(varplayer_304);
        script6097(0);
    };
    if ((int1 == -1 as inv)) {
        IF_SETONINVTRANSMIT(callback(), comp(1265, 6));
    };
    return;
}