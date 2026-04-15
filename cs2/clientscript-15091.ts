//
function script15091(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component, int6: struct): void {
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 1;
    var int13 = 0;
    var int14 = script12869(int6);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    var int15 = (IF_GETWIDTH(int5) - 50);
    var int16 = (IF_GETWIDTH(int0) / 100);
    var int17 = struct_getparam(int6, 9245);
    var int18 = struct_getparam(int6, 6146);
    var int19 = 0;
    if ((int17 != -1 as dbrow)) {
        int19 = DB_GETFIELDCOUNT(int17, 1294352);
    } else if ((int18 != -1 as cs2enum)) {
        int19 = ENUM_GETOUTPUTCOUNT(int18);
    } else {
        script12478("No valid data.");
        return;
    };
    var int20 = -1 as obj;
    var int21 = -1;
    var int22 = -1;
    var int23 = -1 as graphic;
    var int24 = -1 as model;
    var int25 = -1 as cs2enum;
    var int26 = -1 as cs2enum;
    if ((int18 != -1 as cs2enum)) {
        int25 = struct_getparam(int6, 6147);
        int26 = struct_getparam(int6, 6148);
    };
    var int27 = -1 as struct;
    CC_DELETEALL(int5);
    CC_DELETEALL(int4);
    var int28 = MIN(SCALE(int14, (struct_getparam(int6, 6142) * struct_getparam(int6, 6144)), IF_GETWIDTH(int0)), IF_GETWIDTH(int0));
    if ((IF_GETNEXTSUBID(int0) == 0)) {
        CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
        CC_SETTEXTFONT(31 as fontmetrics);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETCOLOUR(16777215);
        CC_SETTEXTSHADOW(true);
    };
    if (((CC_FIND(int0, 0) == 1) && (struct_getparam(int6, 78) == false))) {
        if ((struct_getparam(int6, 4926) == 1)) {
            CC_SETTEXT(`${TOSTRING_LOCALISED(int14, 1)}/${TOSTRING_LOCALISED((struct_getparam(int6, 6142) * struct_getparam(int6, 6144)), 1)}`);
        } else {
            CC_SETTEXT(`${TOSTRING_LOCALISED((int14 / struct_getparam(int6, 4926)), 1)}/${TOSTRING_LOCALISED(((struct_getparam(int6, 6142) * struct_getparam(int6, 6144)) / struct_getparam(int6, 4926)), 1)}`);
        };
    };
    if ((IF_GETNEXTSUBID(int1) == 0)) {
        CC_CREATE(int1, 5, IF_GETNEXTSUBID(int1));
        CC_SETGRAPHIC(31695 as graphic);
        CC_SETSIZE(12, 0, 0, 1);
        CC_SETPOSITION(int8, int9, 0, 0);
        CC_SETONVARTRANSMIT(callback(script12874, int6, 6626, 1));
        CC_CREATE(int1, 5, IF_GETNEXTSUBID(int1));
        CC_SETGRAPHIC(31696);
        CC_SETPOSITION((int8 + 12), int9, 0, 0);
        CC_SETSIZE(0, 19, 1, 0);
        CC_CREATE(int1, 5, IF_GETNEXTSUBID(int1));
        CC_SETGRAPHIC(31697);
        CC_SETSIZE(12, 0, 0, 1);
        CC_SETPOSITION(0, int9, 2, 0);
    };
    IF_SETONTIMER(callback(script12886, int1, int2, int3, int28), int1);
    if ((IF_GETNEXTSUBID(int5) == 0)) {
        CC_CREATE(int5, 5, IF_GETNEXTSUBID(int5));
        CC_SETGRAPHIC(18062 as graphic);
        CC_SETPOSITION(int8, int9, 2, 0);
        CC_SETSIZE(25, 25, 0, 0);
        CC_CREATE(int5, 5, IF_GETNEXTSUBID(int5));
        CC_SETGRAPHIC(14796 as graphic);
        CC_SETPOSITION(int8, int9, 0, 0);
        CC_SETSIZE(25, 25, 0, 0);
        CC_CREATE(int5, 5, IF_GETNEXTSUBID(int5));
        CC_SETGRAPHIC(18055 as graphic);
        CC_SETPOSITION((int8 + 25), int9, 0, 0);
        CC_SETSIZE(int15, 25, 0, 0);
    };
    while ((int7 < int19)) {
        if ((int17 != -1 as dbrow)) {
            [int20, int12, int11] = script19880(int17, int7);
        } else {
            int20 = enum_getvalue(0, 33, int18, int7);
            int11 = enum_getvalue(0, 0, int25, int7);
            int12 = enum_getvalue(0, 0, int26, int7);
        };
        int23 = item_getparam(int20, 6276);
        int24 = item_getparam(int20, 4916);
        int13 = script12879(int6, int7);
        int8 = int16;
        int8 = (int8 * SCALE(int11, (struct_getparam(int6, 6142) * struct_getparam(int6, 6144)), 100));
        if (((int7 != (int19 - 1)) && (IF_GETNEXTSUBID(int5) != (int19 + 2)))) {
            CC_CREATE(int5, 5, IF_GETNEXTSUBID(int5));
            CC_SETGRAPHIC(18061 as graphic);
            CC_SETPOSITION((int8 - 7), int9, 0, 0);
            CC_SETSIZE(25, 25, 0, 0);
        };
        if (((IF_GETNEXTSUBID(int2) == int7) && (IF_GETNEXTSUBID(int3) == int7))) {
            CC_CREATE(int2, 5, IF_GETNEXTSUBID(int2));
            CC_SETGRAPHIC(18068 as graphic);
            CC_SETPOSITION((int8 - 9), int9, 0, 0);
            CC_SETSIZE(15, 19, 0, 0);
            CC_CREATE(int3, 3, IF_GETNEXTSUBID(int3));
            CC_SETCOLOUR(23599);
            CC_SETFILL(1);
            CC_SETPOSITION((int8 - 3), int9, 0, 0);
            CC_SETSIZE(3, 1, 0, 0);
            CC_SETHIDE(true);
        };
        if ((IF_GETNEXTSUBID(int4) == int10)) {
            if (((int14 >= int11) && (int13 == 0))) {
                int27 = 28303 as struct;
                if ((item_getparam(int20, 4909) != -1 as graphic)) {
                    int23 = item_getparam(int20, 4909);
                };
                int24 = item_getparam(int20, 4915);
            } else {
                int27 = 29356 as struct;
                if ((int14 < int11)) {
                    int27 = 21363 as struct;
                    int13 = 2;
                    if ((item_getparam(int20, 4912) != -1 as graphic)) {
                        int23 = item_getparam(int20, 4912);
                    };
                    int24 = item_getparam(int20, 4917);
                };
            };
            if (((struct_getparam(int6, 4927) == true) && (item_getparam(int20, 4927) == true))) {
                script10764(int4, int27, (int8 - 20), int9, (36 + 4), (32 + 4), -1);
            };
            if ((int24 == -1 as model)) {
                CC_CREATE(int4, 5, IF_GETNEXTSUBID(int4));
                CC_SETSIZE(item_getparam(int20, 4913), item_getparam(int20, 4914), 0, 0);
                if ((int23 == -1 as graphic)) {
                    CC_SETOBJECT(int20, int12);
                    CC_SETPOSITION((int8 - 16), (int9 + 2), 0, 0);
                } else {
                    CC_SETGRAPHIC(int23);
                    CC_SETPOSITION((int8 + item_getparam(int20, 4924)), (int9 + item_getparam(int20, 4925)), 0, 0);
                    CC_SETSIZE(item_getparam(int20, 4913), item_getparam(int20, 4914), 0, 0);
                };
                int10 = script15824(int6, int4, int23, int20, int12, int11, int13);
            } else {
                CC_CREATE(int4, 6, IF_GETNEXTSUBID(int4));
                CC_SETSIZE(40, 44, 0, 0);
                CC_SETPOSITION((int8 + item_getparam(int20, 4924)), (int9 + item_getparam(int20, 4925)), 0, 2);
                CC_SETMODEL(int24);
                CC_SETMODELANGLE(0, item_getparam(int20, 4925), item_getparam(int20, 4918), item_getparam(int20, 4919), item_getparam(int20, 4922), item_getparam(int20, 4923));
                int10 = script15824(int6, int4, int23, int20, int12, int11, int13);
            };
        };
        int7 = (int7 + 1);
    };
    return;
}