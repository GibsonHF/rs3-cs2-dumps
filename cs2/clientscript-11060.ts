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
    if ((strcmp(IF_GETTEXT(49348658), "Learn") == 0)) {
        IF_SETHIDE(1, 49348726);
        IF_SETTEXT("Hide", 49348658);
        IF_SETHIDE(1, 49348640);
        IF_SETHIDE(1, 49348610);
        IF_SETSIZE(744, 0, 0, 1, 49348615);
        IF_SETSIZE(20, 185, 1, 0, 49348635);
        if ((script5864() == 1)) {
            IF_SETHIDE(0, 49348628);
            IF_SETSIZE(8192, 25, 2, 0, 49348623);
            IF_SETSIZE(8192, 25, 2, 0, 49348625);
            IF_SETSIZE(8192, 25, 2, 0, 49348627);
        };
        IF_SETTEXT("", 49348637);
        CC_DELETEALL(49348635);
        CC_DELETEALL(49348646);
        CC_DELETEALL(49348636);
        CC_DELETEALL(49348639);
        if ((int0 != -1 as cs2enum)) {
            CC_CREATE(49348646, 6, 0);
            CC_SETSIZE(0, 0, 1, 1);
            CC_SETPOSITION(0, 0, 0, 0);
            CC_SETMODELANGLE(0, IF_GETMODELYOF(49348648), IF_GETMODELANGLE_X(49348648), IF_GETMODELANGLE_Y(49348648), IF_GETMODELANGLE_Z(49348648), IF_GETMODELZOOM(49348648));
            CC_SETONMOUSEOVER(callback(script1165, -2147483645, -2147483643));
            CC_SETHIDE(1);
            while ((int2 < ENUM_GETOUTPUTCOUNT(int0))) {
                int1 = enum_getvalue(0, 73, int0, int2);
                if ((int1 != -1 as struct)) {
                    string0 = struct_getparam(int1, 4832);
                    CC_CREATE(49348635, 4, IF_GETNEXTSUBID(49348635));
                    CC_SETPOSITION(0, int3, 0, 0);
                    CC_SETTEXTFONT(55);
                    CC_SETTEXTSHADOW(1);
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
                    int4 = (15 * PARAHEIGHT(string0, (479 - int5), 26));
                    CC_CREATE(49348635, 4, IF_GETNEXTSUBID(49348635));
                    CC_SETPOSITION(0, int3, 0, 0);
                    CC_SETTEXTFONT(26);
                    CC_SETTEXTSHADOW(1);
                    CC_SETCOLOUR(script10495(3));
                    CC_SETTEXT(string0);
                    CC_SETTEXTALIGN(0, 0, 0);
                    CC_SETSIZE(int5, int4, 1, 0);
                    int3 = ((int3 + int4) + 5);
                    if ((struct_getparam(int1, 4835) != -1 as seq)) {
                        CC_CREATE(49348635, 5, IF_GETNEXTSUBID(49348635));
                        CC_SETGRAPHIC(8321);
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
            if ((int3 > IF_GETHEIGHT(49348635))) {
                IF_SETSCROLLSIZE(479, int3, 49348635);
                IF_SETHIDE(0, 49348644);
                script7791(49348644, 49348635);
            };
        };
    } else {
        script11081();
    };
    CC_DELETEALL(49348702);
    script10498(49348702, 49348703, 49348701, varclient_4485, 0, 0, 0);
    return;
}