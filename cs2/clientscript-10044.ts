//
function script10044(int0: component, int1: component, int2: component, int3: component, int4: int): void {
    var string0 = "";
    IF_SETHIDE(false, int3);
    IF_CLEAROPS(int0);
    IF_SETONOP(callback(), int0);
    IF_SETONCLICK(callback(), int0);
    IF_SETONMOUSEREPEAT(callback(), int0);
    script13264(-1, 0, int4);
    var int5 = ENUM_GETOUTPUTCOUNT(6177);
    define_array[73](int5);
    var int6 = -1;
    var int7 = -1;
    var int8 = 0;
    var int9 = 0;
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "";
    while ((int8 < int5)) {
        int6 = enum_getvalue(0, 73, 6177 as cs2enum, int8);
        if ((script17266(int6) == true)) {
            pop_array(int9, int6);
            int9 = (int9 + 1);
        };
        int8 = (int8 + 1);
    };
    if ((int9 == 0)) {
        int6 = enum_getvalue(0, 73, 6177 as cs2enum, -1);
    } else {
        int6 = push_array(RANDOM(int9));
    };
    if ((int6 == 11515 as struct)) {
        int6 = script6341();
    };
    switch (MAP_LANG()) {
        case 1: {
            string2 = struct_getparam(int6, 6962);
            string3 = struct_getparam(int6, 5558);
            string1 = struct_getparam(int6, 7961);
            break;
        }
        case 2: {
            string2 = struct_getparam(int6, 6963);
            string3 = struct_getparam(int6, 7892);
            string1 = struct_getparam(int6, 7962);
            break;
        }
        case 3: {
            string2 = struct_getparam(int6, 6964);
            string3 = struct_getparam(int6, 7893);
            string1 = struct_getparam(int6, 7963);
            break;
        }
    };
    if ((STRING_LENGTH(string2) == 0)) {
        string2 = struct_getparam(int6, 6394);
    };
    if ((STRING_LENGTH(string3) == 0)) {
        string3 = struct_getparam(int6, 65);
    };
    if ((STRING_LENGTH(string1) == 0)) {
        string1 = struct_getparam(int6, 6393);
    };
    string0 = struct_getparam(int6, 6391);
    stack(script19254(int6, MAP_LANG()));
    stack(int0);
    IF_SETGRAPHIC();
    stack(int6);
    stack(6392);
    struct_getparam();
    switch (stack()) {
        case 1: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Treasure Hunter";
            };
            script13264(1, 1, int4);
            break;
        }
        case 2:
        case 18: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "New Content";
            };
            IF_SETOP(1, "Select", int0);
            IF_SETONOP(callback(script13252), int0);
            break;
        }
        case 3: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "New Content";
            };
            IF_SETOP(1, "Select", int0);
            IF_SETONOP(callback(script12374, string1, string2, string2, struct_getparam(int6, 6395)), int0);
            IF_SETONCLICK(callback(script9036), int0);
            break;
        }
        case 9: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "New Content";
            };
            IF_SETOP(1, "Select", int0);
            IF_SETONOP(callback(script2827, string3, 0), int0);
            IF_SETONCLICK(callback(script9036), int0);
            break;
        }
        case 4: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "New Content";
            };
            IF_SETOP(1, "Select", int0);
            IF_SETONOP(callback(script13252), int0);
            break;
        }
        case 5: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "New Content";
            };
            script13264(5, 1, int4);
            break;
        }
        case 8: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Runecoins";
            };
            script13264(8, 1, int4);
            break;
        }
        case 10: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Bonds";
            };
            script13264(10, 1, int4);
            break;
        }
        case 11: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "New Content";
            };
            script13264(11, 1, int4);
            if ((struct_getparam(int6, 1345) > 0)) {
                int7 = enum_getvalue(0, 3, 2252 as cs2enum, struct_getparam(int6, 1345));
            };
            if ((int7 != -1 as quest)) {
                string5 = quest_getparam(int7, 5968);
            } else {
                string5 = struct_getparam(int6, 1273);
            };
            break;
        }
        case 12: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Hero Pass";
            };
            script13264(12, 1, int4);
            break;
        }
        case 13: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "New Content";
            };
            if (((PLATFORMTYPE() != 0) && (PLATFORMTYPE() != 5))) {
                script13264(14, 1, int4);
            } else {
                IF_SETOP(1, "Select", int0);
                IF_SETONOP(callback(script15228, 19), int0);
            };
            IF_SETONCLICK(callback(script9036), int0);
            break;
        }
        case 14: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Marketplace";
            };
            script13264(14, 1, int4);
            break;
        }
        case 15: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Treasure Hunter";
            };
            script13264(15, 1, int4);
            break;
        }
        case 19: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Marketplace";
            };
            script13264(19, 1, int4);
            break;
        }
        default: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "New Content";
            };
            IF_SETOP(1, "Select", int0);
            IF_SETONOP(callback(script13252), int0);
            break;
        }
    };
    if ((STRING_LENGTH(string0) > 0)) {
        IF_SETTEXT(string0, int1);
    };
    if ((strcmp(string5, "") != 0)) {
        IF_SETONMOUSEREPEAT(callback(script10070, string5, 400, -2147483645, -2147483643), int0);
    };
    CC_DELETEALL(int2);
    if ((strcmp(string4, "") == 0)) {
        return;
    };
    var int10 = 0;
    script10047(int2, int10++);
    CC_CREATE(int2, 4, int10);
    CC_SETTEXT(string4);
    CC_SETPOSITION(0, 0, 0, 2);
    CC_SETSIZE(0, 32, 1, 0);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETTEXTFONT(28 as fontmetrics);
    CC_SETCOLOUR(15777401);
    CC_SETTEXTSHADOW(true);
    return;
}