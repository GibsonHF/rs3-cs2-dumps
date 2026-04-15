//
function script10761(int0: obj, int1: inv, int2: struct, int3: struct, int4: component, int5: component, int6: int): int {
    var string0 = GET_COL_TAG(script10495(0));
    var string1 = GET_COL_TAG(script10495(0));
    var string2 = GET_COL_TAG(script10495(3));
    var string3 = GET_COL_TAG(16777215);
    var string4 = string2;
    var string5 = string1;
    var string6 = GET_COL_TAG(script10495(6));
    var int7 = struct_getparam(int3, 4202);
    var int8 = 16777215;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = -1 as obj;
    var int15 = -1 as struct;
    var int16 = -1 as struct;
    var int17 = -1;
    var int18 = -1;
    var int19 = -1;
    var int20 = OC_WEARPOS(int0);
    var int21 = item_getparam(int0, 4414);
    var int22 = script15769(int21);
    var int23 = -1 as struct;
    var int24 = -1;
    var int25 = 0;
    var int26 = 0;
    var int27 = 10;
    var int28 = 34;
    var int29 = 35;
    var int30 = -1;
    var int31 = 0;
    var string7 = "";
    if (((int21 != -1 as struct) || (int0 != -1 as obj))) {
        var int0 = script13427(int0, 818 as inv);
        if ((int5 != comp(1322, 7))) {
            var int6 = script7235("Cosmetic Appearance", string0, int3, int4, int5, int6);
        };
        if ((int21 == -1 as struct)) {
            if (((int1 == 818 as inv) && (TESTBIT(varplayer_6870, OC_WEARPOS(int0)) == 1))) {
                int10 = 1;
                int6 = script7235(OC_NAME(int0), string1, int2, int4, int5, int6);
                if ((INV_TOTAL(675 as inv, int0) > 0)) {
                    int12 = 1;
                    int6 = script7235("You have this item keepsaked.", string5, int3, int4, int5, int6);
                } else {
                    int6 = script7235("You don't have this item keepsaked.", string6, int3, int4, int5, int6);
                };
            } else {
                int6 = script7235(OC_NAME(int0), string1, int2, int4, int5, int6);
                if ((int0 == 39752 as obj)) {
                    int6 = script7235("This slot won't be affected.", string5, int3, int4, int5, int6);
                    return int6;
                };
            };
        } else {
            int10 = 1;
            int6 = script7235(struct_getparam(int21, 2533), string1, int2, int4, int5, int6);
            int23 = struct_getparam(int21, 4419);
            if ((int23 != -1 as struct)) {
                int6 = script7235(`part of '${struct_getparam(int23, 2533)}'`, string2, int3, int4, int5, int6);
            } else {
                int23 = int21;
            };
            if (((script6488(int21) == 1) && (script12779(int21, int0, script13103(int1, int20)) == 1))) {
                int12 = 1;
                if (((int1 == 743 as inv) || (int1 == 818 as inv))) {
                    int6 = script7235("You already own this override.", string5, int3, int4, int5, int6);
                };
            };
        };
        if (((int12 == 0) && (int23 != -1 as struct))) {
            if (((int6 > 0) && (CC_FIND(int5, (int6 - 1)) == 1))) {
                int9 = (CC_GETY() + CC_GETHEIGHT());
            };
            if ((int1 == 743 as inv)) {
                [int18, int19] = script10780(int20);
            } else if ((int1 == 818 as inv)) {
                [int18, int19] = script13110(int20);
            };
            if ((((int1 == 818 as inv) || (int1 == 819 as inv)) && (int12 == 0))) {
                string7 = script13099(int21);
                if ((STRING_LENGTH(string7) > 0)) {
                    int6 = script7235(string7, string6, int3, int4, int5, int6);
                } else {
                    int6 = script7235("You do not own this override.", string6, int3, int4, int5, int6);
                };
            };
        };
        if (((int1 == 818 as inv) && (int10 == 1))) {
            if ((int20 == 3)) {
                int16 = item_getparam(int0, 686);
                if ((script7602(int16) != int0)) {
                    int11 = 1;
                };
                int17 = enum_getvalue(73, 0, 7365 as cs2enum, int16);
                int14 = INV_GETOBJ(94 as inv, int20);
                if ((int14 != -1 as obj)) {
                    int15 = item_getparam(int14, 686);
                };
            } else if ((int20 == 5)) {
                int16 = item_getparam(int0, 686);
                if ((script7603(int16) != int0)) {
                    int11 = 1;
                };
                int17 = enum_getvalue(73, 0, 7366 as cs2enum, int16);
                int14 = INV_GETOBJ(94 as inv, int20);
                if ((int14 != -1 as obj)) {
                    int15 = item_getparam(int14, 686);
                };
            } else if ((int0 != INV_GETOBJ(817 as inv, int20))) {
                int11 = 1;
            };
            if ((int17 != -1)) {
                int31 = enum_getreversecount(0, 7365 as cs2enum, int17);
                int30 = -1;
                while ((++int30 < int31)) {
                    int16 = enum_getreverseindex(0, 73, 7365 as cs2enum, int17, int30);
                    if ((int16 == int15)) {
                        int13 = 1;
                    };
                };
                int31 = enum_getreversecount(0, 7366 as cs2enum, int17);
                int30 = -1;
                while ((++int30 < int31)) {
                    int16 = enum_getreverseindex(0, 73, 7366 as cs2enum, int17, int30);
                    if ((int16 == int15)) {
                        int13 = 1;
                    };
                };
                if ((int13 == 0)) {
                    int6 = script7235(" ", string5, int3, int4, int5, int6);
                    int6 = script7235("This customisation requires a different weapon type equipped.", string5, int3, int4, int5, int6);
                };
            };
        };
    };
    return int6;
}