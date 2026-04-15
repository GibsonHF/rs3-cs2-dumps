//
function script7131(int0: obj, int1: int, int2: int, int3: int, int4: int, int5: obj, int6: struct, int7: int, int8: int, int9: int, int10: unknown_int, int11: component, int12: int): [int, int] {
    var int13 = 0;
    var int14 = ((32 * int3) / int4);
    var int15 = ((36 * int3) / int4);
    var int16 = int12;
    var int12 = script7132(int11, int12);
    var string0 = "null";
    var int17 = -1 as graphic;
    var int18 = -1 as obj;
    [string0, int17, int18] = script12103(int5, int7);
    if ((int6 != -1 as struct)) {
        if ((STRING_LENGTH(struct_getparam(int6, 7762)) > 1)) {
            string0 = struct_getparam(int6, 7762);
        };
        if ((struct_getparam(int6, 7763) != -1 as obj)) {
            int18 = struct_getparam(int6, 7763);
            if ((int18 != -1 as obj)) {
                int17 = -1 as graphic;
            };
        };
        if ((int5 == -1 as obj)) {
            string0 = OC_NAME(struct_getparam(int6, 2655));
        };
        if (((int17 == -1 as graphic) && (int18 == -1 as obj))) {
            int18 = struct_getparam(int6, 2655);
        };
    };
    var string1 = "";
    var int19 = 1;
    if ((int10 == 1)) {
        string1 = inttostring(int8, 10);
        int19 = 3;
    } else {
        string1 = inttostring(int8, 10);
        int19 = 2;
    };
    script7134(int11, string0, 26, 1, int2, ((int1 + int15) + 5), ((IF_GETWIDTH(int11) - ((int1 + int15) + 5)) - (((20 + 5) + STRINGWIDTH(string1, 26 as fontmetrics)) + 5)), int12);
    int13 = MAX(int13, (CC_GETY() + CC_GETHEIGHT()));
    int12 = (int12 + 1);
    CC_CREATE[1](int11, 5, int12);
    CC_SETSIZE[1](int15, int14, 0, 0);
    CC_SETPOSITION[1](int1, MAX(int2, ((CC_GETY() + (CC_GETHEIGHT() / 2)) - (CC_GETHEIGHT[1]() / 2))), 0, 0);
    if ((int17 != -1 as graphic)) {
        CC_SETGRAPHIC[1](int17);
        if ((int5 == 37411 as obj)) {
            CC_SETCOLOUR[1](13107200);
        };
    } else if ((int18 != -1 as obj)) {
        CC_SETOBJECT_NONUM[1](int18, 0);
        if (((int6 != -1 as struct) && (struct_getparam(int6, 7763) == -1 as obj))) {
            CC_SETONTIMER[1](callback(script2577, -2147483645, -2147483643, int6, 1));
        };
    };
    int13 = MAX(int13, (CC_GETY[1]() + CC_GETHEIGHT[1]()));
    int12 = (int12 + 1);
    script7134(int11, string1, 26, int19, 0, 0, STRINGWIDTH(string1, 26 as fontmetrics), int12);
    CC_SETPOSITION((((IF_GETWIDTH(int11) - 20) - 5) - CC_GETWIDTH()), MAX(int2, ((CC_GETY[1]() + (CC_GETHEIGHT[1]() / 2)) - (CC_GETHEIGHT() / 2))), 0, 0);
    int13 = MAX(int13, (CC_GETY() + CC_GETHEIGHT()));
    int12 = (int12 + 1);
    CC_CREATE[1](int11, 5, int12);
    CC_SETSIZE[1](15, 15, 0, 0);
    CC_SETPOSITION[1]((IF_GETWIDTH(int11) - 20), MAX(int2, ((CC_GETY() + (CC_GETHEIGHT() / 2)) - (CC_GETHEIGHT[1]() / 2))), 0, 0);
    if ((int10 == 0)) {
        CC_SETGRAPHIC[1](13166 as graphic);
    } else {
        CC_SETGRAPHIC[1](13165 as graphic);
    };
    int13 = MAX(int13, (CC_GETY() + CC_GETHEIGHT()));
    int12 = (int12 + 1);
    CC_CREATE(int11, 5, int12);
    CC_SETPOSITION(0, (int2 - 1), 0, 0);
    CC_SETSIZE(IF_GETWIDTH(int11), ((int13 - int2) + 3), 0, 0);
    if ((int9 >= 0)) {
        string1 = `Currently have: <col=ffffff>${inttostring(int9, 10)}</col>`;
    } else {
        string1 = "Currently have: <col=ffffff>Unlimited</col>";
    };
    if ((item_getparam(int5, 5774) == 1)) {
        string1 = `${string1}<br>This item must have no charges used.`;
    };
    var string2 = "";
    switch (OC_CATEGORY(int5)) {
        case 4603: {
            string2 = script14694(int11);
            break;
        }
        case 4602: {
            string2 = script14684(int11);
            break;
        }
    };
    if ((STRING_LENGTH(string2) > 0)) {
        string1 = `${string1}<br><br>${string2}`;
    };
    var string3 = "";
    if ((int5 == 36365 as obj)) {
        string3 = script12161(int7);
        if ((STRING_LENGTH(string3) > 0)) {
            string1 = strconcat(string1, "<br><br>To collect this material, disassemble:<br>");
            string1 = strconcat(string1, `<col=ffffff>${string3}</col>`);
        };
    };
    if ((int6 != -1 as struct)) {
        string1 = `${string1}<br><br>You can use any of the following:${script12101(int6, int0)}`;
    };
    script3537(string1);
    int12 = (int12 + 1);
    script7133(0, (int2 - 1), IF_GETWIDTH(int11), ((int13 - int2) + 3), int11, int16);
    return [int12, int13];
}