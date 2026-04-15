//
function script11060(): void {
    var int0 = struct_getparam(varclient_4485, 4831);
    var int1 = -1 as struct;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var string0 = "";
    var int5 = 0;
    var string1 = "Show attack";
    if ((strcmp(IF_GETTEXT(comp(753, 50)), "Learn") == 0)) {
        IF_SETHIDE(true, comp(753, 118));
        IF_SETTEXT("Hide", comp(753, 50));
        IF_SETHIDE(true, comp(753, 32));
        IF_SETHIDE(true, comp(753, 2));
        IF_SETSIZE(744, 0, 0, 1, comp(753, 7));
        IF_SETSIZE(20, 185, 1, 0, comp(753, 27));
        if ((script5864() == 1)) {
            IF_SETHIDE(false, comp(753, 20));
            IF_SETSIZE(8192, 25, 2, 0, comp(753, 15));
            IF_SETSIZE(8192, 25, 2, 0, comp(753, 17));
            IF_SETSIZE(8192, 25, 2, 0, comp(753, 19));
        };
        IF_SETTEXT("", comp(753, 29));
        CC_DELETEALL(comp(753, 27));
        CC_DELETEALL(comp(753, 38));
        CC_DELETEALL(comp(753, 28));
        CC_DELETEALL(comp(753, 31));
        if ((int0 != -1 as cs2enum)) {
            CC_CREATE(comp(753, 38), 6, 0);
            CC_SETSIZE(0, 0, 1, 1);
            CC_SETPOSITION(0, 0, 0, 0);
            CC_SETMODELANGLE(0, IF_GETMODELYOF(comp(753, 40)), IF_GETMODELANGLE_X(comp(753, 40)), IF_GETMODELANGLE_Y(comp(753, 40)), IF_GETMODELANGLE_Z(comp(753, 40)), IF_GETMODELZOOM(comp(753, 40)));
            CC_SETONMOUSEOVER(callback(script1165, -2147483645, -2147483643));
            CC_SETHIDE(1);
            while ((int2 < ENUM_GETOUTPUTCOUNT(int0))) {
                int1 = enum_getvalue(0, 73, int0, int2);
                if ((int1 != -1 as struct)) {
                    string0 = struct_getparam(int1, 4832);
                    CC_CREATE(comp(753, 27), 4, IF_GETNEXTSUBID(comp(753, 27)));
                    CC_SETPOSITION(0, int3, 0, 0);
                    CC_SETTEXTFONT(55 as fontmetrics);
                    CC_SETTEXTSHADOW(true);
                    CC_SETCOLOUR(16777215);
                    CC_SETTEXT(string0);
                    CC_SETTEXTALIGN(0, 0, 0);
                    CC_SETSIZE(5, 20, 1, 0);
                    int3 = (int3 + 20);
                    string0 = struct_getparam(int1, 4833);
                    if ((struct_getparam(int1, 4835) != -1 as seq)) {
                        int5 = 50;
                    } else {
                        int5 = 25;
                    };
                    int4 = (15 * PARAHEIGHT(string0, (479 - int5), 26 as fontmetrics));
                    CC_CREATE(comp(753, 27), 4, IF_GETNEXTSUBID(comp(753, 27)));
                    CC_SETPOSITION(0, int3, 0, 0);
                    CC_SETTEXTFONT(26 as fontmetrics);
                    CC_SETTEXTSHADOW(true);
                    CC_SETCOLOUR(script10495(3));
                    CC_SETTEXT(string0);
                    CC_SETTEXTALIGN(0, 0, 0);
                    CC_SETSIZE(int5, int4, 1, 0);
                    int3 = ((int3 + int4) + 5);
                    if ((struct_getparam(int1, 4835) != -1 as seq)) {
                        CC_CREATE(comp(753, 27), 5, IF_GETNEXTSUBID(comp(753, 27)));
                        CC_SETGRAPHIC(8321 as graphic);
                        CC_SETSIZE(45, 30, 0, 0);
                        CC_SETPOSITION(10, (int3 - int4), 2, 0);
                        CC_SETONMOUSEOVER(callback(script11061, 1, -2147483643, -1, -1, -1, -1));
                        CC_SETONMOUSELEAVE(callback(script11061, 0, -2147483643, -1, -1, -1, -1));
                        CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
                        CC_SETOP(1, "Show Attack");
                        if ((struct_getparam(int1, 4836) != -1)) {
                            CC_SETONOP(callback(script11061, 2, -2147483643, struct_getparam(int1, 4835), struct_getparam(int1, 4836), struct_getparam(int1, 4837), struct_getparam(int1, 4834)));
                        } else {
                            CC_SETONOP(callback(script11061, 2, -2147483643, struct_getparam(int1, 4835), -1, -1, struct_getparam(int1, 4834)));
                        };
                    };
                };
                int2 = (int2 + 1);
            };
            if ((int3 > IF_GETHEIGHT(comp(753, 27)))) {
                IF_SETSCROLLSIZE(479, int3, comp(753, 27));
                IF_SETHIDE(false, comp(753, 36));
                script7791(comp(753, 36), comp(753, 27));
            };
        };
    } else {
        script11081();
    };
    CC_DELETEALL(comp(753, 94));
    script10498(comp(753, 94), comp(753, 95), comp(753, 93), varclient_4485, 0, 0, 0);
    return;
}