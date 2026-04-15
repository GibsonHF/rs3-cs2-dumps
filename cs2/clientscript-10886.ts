//
function script10886(int0: component, int1: struct): void {
    var string0 = "";
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var int5 = 0;
    var int6 = script11296(int1);
    if ((struct_getparam(int1, 8113) == true)) {
        string1 = script11086(int1);
    } else {
        if ((struct_getparam(int1, 8112) == true)) {
            int2 = script11073(int1);
            int3 = (1 + ((int2 - CLIENTCLOCK()) / 50));
            if ((int3 > 0)) {
                if ((int3 > 86400)) {
                    string2 = `${inttostring((int3 / 86400), 10)}d`;
                } else if ((int3 > 14400)) {
                    string2 = `${inttostring((int3 / 3600), 10)}hr`;
                } else if ((int3 > 60)) {
                    string2 = `${inttostring((int3 / 60), 10)}m`;
                } else {
                    string2 = inttostring(int3, 10);
                };
            };
        };
        if ((struct_getparam(int1, 8110) == true)) {
            int4 = script11077(int1);
            if ((int4 > 0)) {
                string3 = script15116(int4, 3);
                if ((strcmp(string2, "") == 0)) {
                    string3 = string3;
                    if ((struct_getparam(int1, 8111) == true)) {
                        string3 = `${string3}%`;
                    };
                } else {
                    string3 = `(${string3})`;
                    if ((struct_getparam(int1, 8111) == true)) {
                        string3 = `(${string3}%)`;
                    };
                };
            };
        };
    };
    if ((CC_FIND[1](int0, 1) == 1)) {
        if (((((struct_getparam(int1, 8112) == true) && (int3 > 0)) && (struct_getparam(int1, 8110) == true)) && (int4 > 0))) {
            string1 = `${string2} ${string3}`;
            if ((script11319() != 29)) {
                string1 = `${string2}<br>${string3}`;
                CC_SETTEXTFONT[1](script12028(274 as fontmetrics, 65 as fontmetrics, 41 as fontmetrics, string1, CC_GETWIDTH[1](), CC_GETHEIGHT[1]()));
                CC_SETTEXTALIGN[1](1, 1, 15);
            } else {
                CC_SETTEXTFONT[1](270 as fontmetrics);
                CC_SETTEXTALIGN[1](0, 2, 12);
                if ((CC_GETHEIGHT[1]() < script15891(string1, CC_GETWIDTH[1](), CC_GETFONTMETRICS[1](), 12))) {
                    string1 = inttostring(int4, 10);
                    if ((struct_getparam(int1, 8111) == true)) {
                        string1 = `${inttostring(int4, 10)}%`;
                    };
                };
            };
        } else {
            if (((struct_getparam(int1, 8112) == true) && (int3 > 0))) {
                string1 = string2;
            } else if (((struct_getparam(int1, 8110) == true) && (int4 > 0))) {
                string1 = string3;
            };
            switch (script11319()) {
                case 34: {
                    int5 = 3;
                    break;
                }
                case 38: {
                    int5 = 9;
                    break;
                }
            };
            if (((int5 != 0) && (STRING_LENGTH(string1) > int5))) {
                CC_SETTEXTFONT[1](script12028(31 as fontmetrics, 31 as fontmetrics, 26 as fontmetrics, string1, CC_GETWIDTH[1](), CC_GETHEIGHT[1]()));
            };
        };
        CC_SETTEXT[1](string1);
    };
    return;
}