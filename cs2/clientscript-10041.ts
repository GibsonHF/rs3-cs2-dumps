//
function script10041(int0: component, int1: component, int2: component, int3: component, int4: int): void {
    var string0 = "";
    IF_SETHIDE(false, int3);
    IF_CLEAROPS(int0);
    IF_SETONOP(callback(), int0);
    IF_SETONCLICK(callback(), int0);
    script13264(-1, 0, int4);
    var int5 = -1;
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var int6 = 0;
    int5 = script15487(varplayer_6601);
    if ((script20055() == 1)) {
        int5 = 51828 as struct;
    } else {
        if (((script16823() == true) && ((script10946() == 1) || (RANDOM(100) < 50)))) {
            int5 = 25707 as struct;
        };
        if ((script5751() == 1)) {
            int5 = 47068 as struct;
        };
        if ((int5 == -1 as struct)) {
            int5 = 33620 as struct;
        };
    };
    switch (MAP_LANG()) {
        case 1: {
            string2 = struct_getparam(int5, 6962);
            string3 = struct_getparam(int5, 5558);
            string1 = struct_getparam(int5, 7961);
            break;
        }
        case 2: {
            string2 = struct_getparam(int5, 6963);
            string3 = struct_getparam(int5, 7892);
            string1 = struct_getparam(int5, 7962);
            break;
        }
        case 3: {
            string2 = struct_getparam(int5, 6964);
            string3 = struct_getparam(int5, 7893);
            string1 = struct_getparam(int5, 7963);
            break;
        }
    };
    if ((STRING_LENGTH(string2) == 0)) {
        string2 = struct_getparam(int5, 6394);
    };
    if ((STRING_LENGTH(string3) == 0)) {
        string3 = struct_getparam(int5, 65);
    };
    if ((STRING_LENGTH(string1) == 0)) {
        string1 = struct_getparam(int5, 6393);
    };
    string0 = struct_getparam(int5, 6391);
    stack(script19254(int5, MAP_LANG()));
    stack(int0);
    IF_SETGRAPHIC();
    stack(int5);
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
                string0 = "Treasure Hunter";
            };
            int6 = 1;
            IF_SETOP(1, "Select", int0);
            IF_SETONOP(callback(script13252), int0);
            break;
        }
        case 3: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Treasure Hunter";
            };
            int6 = 1;
            IF_SETOP(1, "Select", int0);
            IF_SETONOP(callback(script12374, string1, string2, string2, struct_getparam(int5, 6395)), int0);
            IF_SETONCLICK(callback(script9036), int0);
            break;
        }
        case 9: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Treasure Hunter";
            };
            int6 = 1;
            IF_SETOP(1, "Select", int0);
            IF_SETONOP(callback(script2827, string3, 0), int0);
            IF_SETONCLICK(callback(script9036), int0);
            break;
        }
        case 4: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Treasure Hunter";
            };
            int6 = 1;
            IF_SETOP(1, "Select", int0);
            IF_SETONOP(callback(script13252), int0);
            break;
        }
        case 5: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Treasure Hunter";
            };
            int6 = 1;
            script13264(5, 1, int4);
            break;
        }
        case 8: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Runecoins";
            };
            int6 = 1;
            script13264(8, 1, int4);
            break;
        }
        case 10: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Bonds";
            };
            int6 = 1;
            script13264(10, 1, int4);
            break;
        }
        case 12: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Hero Pass";
            };
            int6 = 1;
            script13264(12, 1, int4);
            break;
        }
        case 13: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Treasure Hunter";
            };
            int6 = 1;
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
            int6 = 1;
            script13264(14, 1, int4);
            break;
        }
        case 19: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Marketplace";
            };
            int6 = 1;
            script13264(19, 1, int4);
            break;
        }
        case 15: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Treasure Hunter";
            };
            int6 = 1;
            script13264(15, 1, int4);
            break;
        }
        case 16: {
            int6 = 1;
            script13264(16, 1, int4);
            break;
        }
        case 17: {
            int6 = 1;
            script13264(17, 1, int4);
            break;
        }
        default: {
            if ((STRING_LENGTH(string0) == 0)) {
                string0 = "Treasure Hunter";
            };
            break;
        }
    };
    if ((STRING_LENGTH(string0) > 0)) {
        IF_SETTEXT(string0, int1);
    };
    CC_DELETEALL(int2);
    return;
}