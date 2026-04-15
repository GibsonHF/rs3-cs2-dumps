//[proc,worldmap_arrow_update]
function script4(int0: component, int1: coordgrid, int2: struct, int3: component, int4: int, int5: int, int6: int, int7: int, string0: string): void {
    if (((int1 == -1 as coordgrid) || (int1 == pos(0,0,0,0,0)))) {
        CC_DELETEALL(int0);
        IF_SETHIDE(true, int0);
        return;
    };
    var int8 = 0;
    var int9 = 0;
    [int8, int9] = WORLDMAP_GETDISPLAYCOORD(int1);
    if (((int8 < 0) || (int9 < 0))) {
        var int1 = MOVECOORD(pos(0,0,0,0,0), COORDX(int1), script686((COORDY(int1) - 1), 4), COORDZ(int1));
        [int8, int9] = WORLDMAP_GETDISPLAYCOORD(int1);
        if (((int8 < 0) || (int9 < 0))) {
            int1 = MOVECOORD(pos(0,0,0,0,0), COORDX(int1), script686((COORDY(int1) - 1), 4), COORDZ(int1));
            [int8, int9] = WORLDMAP_GETDISPLAYCOORD(int1);
            if (((int8 < 0) || (int9 < 0))) {
                int1 = MOVECOORD(pos(0,0,0,0,0), COORDX(int1), script686((COORDY(int1) - 1), 4), COORDZ(int1));
                [int8, int9] = WORLDMAP_GETDISPLAYCOORD(int1);
                if (((int8 < 0) || (int9 < 0))) {
                    CC_DELETEALL(int0);
                    IF_SETHIDE(true, int0);
                    return;
                };
            };
        };
    };
    IF_SETHIDE(false, int0);
    var int10 = IF_GETWIDTH(int3);
    var int11 = IF_GETHEIGHT(int3);
    if ((int2 == -1 as struct)) {
        var int2 = 280 as struct;
    };
    int8 = SCALE(int10, (int6 - int7), (int8 - int7));
    int9 = SCALE(int11, (int4 - int5), (int9 - int5));
    int8 = MAX(MIN(int8, int10), 0);
    int9 = MAX(MIN(int9, int11), 0);
    int8 = (int8 - (int10 / 2));
    int9 = ((int11 / 2) - int9);
    IF_SETPOSITION(int8, int9, 1, 1, int0);
    var int12 = struct_getparam(int2, 132);
    var int13 = struct_getparam(int2, 133);
    var int14 = -1;
    if ((int8 <= (0 - (int10 / 2)))) {
        if ((int9 <= (0 - (int11 / 2)))) {
            int14 = 3;
        } else if ((int9 >= (int11 / 2))) {
            int14 = 1;
        } else {
            int14 = 2;
        };
    } else if ((int8 >= (int10 / 2))) {
        if ((int9 <= (0 - (int11 / 2)))) {
            int14 = 5;
        } else if ((int9 >= (int11 / 2))) {
            int14 = 7;
        } else {
            int14 = 6;
        };
    } else if ((int9 <= (0 - (int11 / 2)))) {
        int14 = 4;
    } else if ((int9 >= (int11 / 2))) {
        int14 = 0;
    };
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var string1 = "Scroll map";
    var string2 = "";
    if ((STRING_LENGTH(string0) > 0)) {
        if ((int0 == comp(1422, 5))) {
            string2 = "Your position";
        } else {
            string2 = REMOVETAGS(script2332(string0, "<br>", " "));
        };
        string1 = "Scroll map:";
    };
    if ((int14 == -1)) {
        script2048(int0, 0, struct_getparam(int2, 130), int12, int13, 0, 0, 0, false, false, false, 0, string2, string1, int1);
        int15 = (int13 / 2);
        int16 = (int13 / 2);
        int17 = (int12 / 2);
        int18 = (int12 / 2);
        script2048(int0, 1, struct_getparam(int2, 131), int12, int13, 0, 0, 0, false, false, false, 1, "", "", -1 as coordgrid);
    } else if (((int0 != comp(1422, 13)) && (int0 != comp(1422, 16)))) {
        int12 = struct_getparam(int2, 136);
        int13 = struct_getparam(int2, 645);
        switch (int14) {
            case 0: {
                script2048(int0, 0, struct_getparam(int2, 134), int12, int13, 0, (0 - (int13 / 2)), 49152, false, false, false, 0, string2, string1, int1);
                int15 = int13;
                int16 = 0;
                int17 = (int12 / 2);
                int18 = (int12 / 2);
                break;
            }
            case 1: {
                script2048(int0, 0, struct_getparam(int2, 135), int12, int13, (int12 / 2), (0 - (int13 / 2)), 32768, false, false, false, 0, string2, string1, int1);
                int15 = int13;
                int16 = 0;
                int17 = 0;
                int18 = int12;
                break;
            }
            case 2: {
                script2048(int0, 0, struct_getparam(int2, 134), int12, int13, (int12 / 2), 0, 32768, false, false, false, 0, string2, string1, int1);
                int15 = (int13 / 2);
                int16 = (int13 / 2);
                int17 = 0;
                int18 = int12;
                break;
            }
            case 3: {
                script2048(int0, 0, struct_getparam(int2, 135), int12, int13, (int12 / 2), (int13 / 2), 16384, false, false, false, 0, string2, string1, int1);
                int15 = 0;
                int16 = int13;
                int17 = 0;
                int18 = int12;
                break;
            }
            case 4: {
                script2048(int0, 0, struct_getparam(int2, 134), int12, int13, 0, (int13 / 2), 16384, false, false, false, 0, string2, string1, int1);
                int15 = 0;
                int16 = int13;
                int17 = (int12 / 2);
                int18 = (int12 / 2);
                break;
            }
            case 5: {
                script2048(int0, 0, struct_getparam(int2, 135), int12, int13, (0 - (int12 / 2)), (int13 / 2), 0, false, false, false, 0, string2, string1, int1);
                int15 = 0;
                int16 = int13;
                int17 = int12;
                int18 = 0;
                break;
            }
            case 6: {
                script2048(int0, 0, struct_getparam(int2, 134), int12, int13, (0 - (int12 / 2)), 0, 0, false, false, false, 0, string2, string1, int1);
                int15 = (int13 / 2);
                int16 = (int13 / 2);
                int17 = int12;
                int18 = 0;
                break;
            }
            case 7: {
                script2048(int0, 0, struct_getparam(int2, 135), int12, int13, (0 - (int12 / 2)), (0 - (int13 / 2)), 49152, false, false, false, 0, string2, string1, int1);
                int15 = int13;
                int16 = 0;
                int17 = int12;
                int18 = 0;
                break;
            }
        };
        script2050(int0, 1);
    };
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    var int25 = 0;
    var int26 = 0;
    var int27 = -1 as graphic;
    var int28 = -1 as graphic;
    var int29 = -1 as graphic;
    var int30 = 0;
    if (((STRING_LENGTH(string0) > 0) && (int0 != comp(1422, 16)))) {
        int23 = struct_getparam(int2, 650);
        int24 = struct_getparam(int2, 651);
        int27 = struct_getparam(int2, 647);
        int28 = struct_getparam(int2, 648);
        int29 = struct_getparam(int2, 649);
        int19 = ((PARAWIDTH(string0, int10, 32 as fontmetrics) + int23) + int23);
        int20 = ((((PARAHEIGHT(string0, int19, 32 as fontmetrics) * 17) + 2) + int24) + int24);
        if (((int15 + int20) < (int9 + (int11 / 2)))) {
            int22 = (0 - (int15 + (int20 / 2)));
        } else {
            int22 = (int16 + (int20 / 2));
        };
        int30 = ((int8 + (int10 / 2)) - (int19 / 2));
        if ((int30 <= 0)) {
            int21 = (0 - int30);
        } else {
            int30 = ((int8 + (int10 / 2)) + (int19 / 2));
            if ((int30 >= int10)) {
                int21 = (int10 - int30);
            };
        };
        int25 = ((int19 - int23) / 2);
        int26 = ((int20 - int24) / 2);
        script2048(int0, 2, struct_getparam(int2, 646), (int19 - (int23 * 2)), (int20 - (int24 * 2)), int21, int22, 0, true, false, false, 0, "", "", -1 as coordgrid);
        script2048(int0, 3, int28, (int19 - (int23 * 2)), int24, int21, (int22 - int26), 0, true, false, false, 0, "", "", -1 as coordgrid);
        script2048(int0, 4, int28, (int19 - (int23 * 2)), int24, int21, (int22 + int26), 0, true, false, true, 0, "", "", -1 as coordgrid);
        script2048(int0, 5, int29, int23, (int20 - (int24 * 2)), (int21 - int25), int22, 0, true, false, false, 0, "", "", -1 as coordgrid);
        script2048(int0, 6, int29, int23, (int20 - (int24 * 2)), (int21 + int25), int22, 0, true, true, false, 0, "", "", -1 as coordgrid);
        script2048(int0, 7, int27, int23, int24, (int21 - int25), (int22 - int26), 0, false, false, false, 0, "", "", -1 as coordgrid);
        script2048(int0, 8, int27, int23, int24, (int21 + int25), (int22 - int26), 0, false, true, false, 0, "", "", -1 as coordgrid);
        script2048(int0, 9, int27, int23, int24, (int21 - int25), (int22 + int26), 0, false, false, true, 0, "", "", -1 as coordgrid);
        script2048(int0, 10, int27, int23, int24, (int21 + int25), (int22 + int26), 0, false, true, true, 0, "", "", -1 as coordgrid);
        script2051(int0, 11, string0, int19, int20, (int21 + 1), (int22 + 1), struct_getparam(int2, 653), "", "", -1 as coordgrid);
        script2051(int0, 12, string0, int19, int20, int21, int22, struct_getparam(int2, 652), string2, string1, int1);
    } else {
        if ((CC_FIND(int0, 2) == 1)) {
            CC_DELETE();
        };
        if ((CC_FIND(int0, 3) == 1)) {
            CC_DELETE();
        };
        if ((CC_FIND(int0, 4) == 1)) {
            CC_DELETE();
        };
        if ((CC_FIND(int0, 5) == 1)) {
            CC_DELETE();
        };
        if ((CC_FIND(int0, 6) == 1)) {
            CC_DELETE();
        };
        if ((CC_FIND(int0, 7) == 1)) {
            CC_DELETE();
        };
        if ((CC_FIND(int0, 8) == 1)) {
            CC_DELETE();
        };
        if ((CC_FIND(int0, 9) == 1)) {
            CC_DELETE();
        };
        if ((CC_FIND(int0, 10) == 1)) {
            CC_DELETE();
        };
        if ((CC_FIND(int0, 11) == 1)) {
            CC_DELETE();
        };
        if ((CC_FIND(int0, 12) == 1)) {
            CC_DELETE();
        };
    };
    var int31 = 0;
    var int32 = 0;
    if ((int21 < 0)) {
        int31 = MAX((0 - (int21 - (int19 / 2))), int17);
    } else if ((int19 > 0)) {
        int31 = MAX((int21 + (int19 / 2)), int18);
    } else {
        int31 = MAX(int17, int18);
    };
    if ((int22 <= 0)) {
        int32 = MAX((int15 + int20), int16);
    } else {
        int32 = (int16 + int20);
    };
    [int31, int32] = [((int31 * 2) + 2), ((int32 * 2) + 2)];
    IF_SETSIZE(int31, int32, 0, 0, int0);
    return;
}