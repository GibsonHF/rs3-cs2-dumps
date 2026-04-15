//
function script6796(int0: obj, int1: int, int2: int, int3: int, int4: unknown_int): [unknown_int, int] {
    if ((item_getparam(int0, 3845) == true)) {
        return [9, int1];
    };
    var int5 = OC_WEARPOS(int0);
    if ((int5 == -1)) {
        return [2, int1];
    };
    var int6 = script14346(94 as inv, int5);
    if ((int6 == int0)) {
        if ((OC_STACKABLE(int0) == 1)) {
            return [8, int1];
        };
        if ((OC_HASVAROBJ(int0) == 0)) {
            return [7, int1];
        };
    };
    switch (script3848(int0, 95 as inv)) {
        case 0: {
            break;
        }
        case 4: {
            return [1, int1];
        }
        case 3: {
            return [2, int1];
        }
        case 5: {
            return [10, int1];
        }
        default: {
            return [2, int1];
        }
    };
    if (((int1 > 1) && (OC_STACKABLE(int0) == 0))) {
        var int1 = 1;
    };
    var int7 = OC_WEARPOS2(int0);
    var int8 = -1 as obj;
    var int9 = -1;
    var int10 = 0;
    if ((int5 == 3)) {
        int8 = script14346(94 as inv, 5);
        if (((int7 == 5) && (int8 != -1 as obj))) {
            int9 = 5;
        };
    } else if ((int5 == 5)) {
        int8 = script14346(94 as inv, 3);
        if (((int8 != -1 as obj) && ((int7 == 3) || (OC_WEARPOS2(int8) == 5)))) {
            int9 = 3;
        };
    } else if (((int5 == 4) && (int0 == 284 as obj))) {
        int8 = script14346(94 as inv, 9);
        if ((int8 != -1 as obj)) {
            int9 = 9;
        };
    };
    var int11 = 0;
    var int12 = 0;
    var int13 = -1;
    if ((int6 != -1 as obj)) {
        int13 = script14347(94 as inv, int5);
        int11 = script6797(int6, int13);
    };
    if ((int9 != -1)) {
        int10 = script14347(94 as inv, int9);
        int12 = script6797(int8, int10);
    };
    var int14 = (int11 + int12);
    if ((((int14 > 0) && (int4 == 0)) && (((int3 - int1) == 0) || (script3802(int0) == true)))) {
        int14 = (int14 - 1);
    };
    if ((((int11 == -1) || (int12 == -1)) || ((int14 > 0) && (script5774() < int14)))) {
        script14152("You do not have enough bank space to store the items which would be unequipped.");
        return [3, int1];
    };
    var int15 = 0;
    if ((int9 != -1)) {
        if (((int6 == -1 as obj) && (int4 == 0))) {
            if ((script5786(int2, 94 as inv, int5, int9, int4) == 1)) {
                return [5, int1];
            };
            return [6, int1];
        };
        varbitplayer_45912 = 1;
        if ((((int6 != -1 as obj) && (int11 == 0)) && (int12 == 1))) {
            int15 = script2294(94 as inv, int6, int13, int5);
            if ((script14344(int2) != int0)) {
                return [6, int1];
            };
            if ((int15 != 0)) {
                if ((script5786(int2, 94 as inv, int5, int9, int4) == 1)) {
                    varbitplayer_45912 = 0;
                    return [5, int1];
                };
                varbitplayer_45912 = 0;
                return [6, int1];
            };
        } else if ((script3802(int8) == true)) {
            int15 = script2347(int8, OC_UNCERT(int8), script14340(int8, 0, script14337()), script14347(94 as inv, int9), (int2 + 1), script5798(int2), 94 as inv, int9, 1, 1);
        } else {
            int15 = script2347(int8, OC_UNCERT(int8), script14342(int8, 0, 1), script14347(94 as inv, int9), (int2 + 1), script5798(int2), 94 as inv, int9, 1, 1);
        };
        varbitplayer_45912 = 0;
        if ((int15 == 0)) {
            return [4, int1];
        };
    };
    if (((int6 != -1 as obj) && ((int6 != int0) || (script3802(int6) == true)))) {
        if ((((int3 - int1) > 0) && (int14 == 0))) {
            varbitplayer_45912 = 1;
            int15 = script2294(94 as inv, int6, int13, int5);
            varbitplayer_45912 = 0;
            if ((int15 == 0)) {
                return [4, int1];
            };
            return [0, int1];
        };
        if ((script14344(int2) != int0)) {
            return [6, int1];
        };
        if ((script5786(int2, 94 as inv, int5, int5, int4) == 1)) {
            return [5, int1];
        };
        return [6, int1];
    };
    return [0, int1];
}