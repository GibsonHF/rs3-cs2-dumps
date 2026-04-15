//
function script16234(int0: struct, int1: int, int2: struct, int3: int, int4: component, int5: unknown_int, int6: unknown_int, int7: unknown_int, int8: int): void {
    if ((int7 == 1)) {
        script18127(int0, int1, int4, int2, int8);
        return;
    };
    var int9 = 1;
    var int10 = 0;
    var string0 = "";
    var string1 = "";
    var int11 = 0;
    var int12 = 0;
    var string2 = "";
    var int13 = 0;
    var int14 = 19110 as graphic;
    var int15 = 0;
    if ((int0 == 37717 as struct)) {
        int14 = 11711 as graphic;
        int15 = (script16237(int1, 0, int0) + 1);
    };
    [string0, string1, string2, int9, int10, int12, int11] = script11532(int0, int2, 1, int5, int6, int8);
    if (((STRING_LENGTH(string0) > 0) && (CC_FIND(int4, script16237(int1, 4, int0)) == 1))) {
        CC_SETTEXT(string0);
    };
    if ((((int5 == 1) || (int5 == 2)) && (CC_FIND(int4, script16237(int1, 5, int0)) == 1))) {
        CC_SETHIDE(true);
    };
    if ((((int5 != 2) && (STRING_LENGTH(string2) == 0)) && (int3 != -1))) {
        string2 = `${TOSTRING_LOCALISED(int3, 1)} left`;
    };
    if ((STRING_LENGTH(string2) > 0)) {
        int13 = PARAWIDTH(string2, 512, 57 as fontmetrics);
        if ((CC_FIND(int4, script16237(int1, 6, int0)) == 1)) {
            CC_SETPOSITION((CC_GETX() - int13), CC_GETY(), 0, 0);
            CC_SETHIDE(false);
        };
        if ((CC_FIND(int4, script16237(int1, 7, int0)) == 1)) {
            CC_SETPOSITION((CC_GETX() - int13), CC_GETY(), 0, 0);
            CC_SETSIZE(int13, CC_GETHEIGHT(), 0, 0);
            CC_SETHIDE(false);
        };
        if ((CC_FIND(int4, script16237(int1, 8, int0)) == 1)) {
            CC_SETHIDE(false);
            CC_SENDTOFRONT();
        };
        if ((CC_FIND(int4, script16237(int1, 9, int0)) == 1)) {
            CC_SETPOSITION((CC_GETX() - int13), CC_GETY(), 0, 0);
            CC_SETSIZE(int13, CC_GETHEIGHT(), 0, 0);
            CC_SETTEXT(string2);
            CC_SETTEXTALIGN(1, 1, 0);
            CC_SETHIDE(false);
        };
    };
    if ((CC_FIND(int4, script16237(int1, 0, int0)) == 1)) {
        if ((int9 == 0)) {
            CC_SETOP(1, script12793(int2, struct_getparam(int2, 4854), 0));
            CC_SETOPCURSOR(1, 46);
            if ((((struct_getparam(int2, 4855) != -1) || (struct_getparam(int2, 4856) != -1)) || (struct_getparam(int2, 4857) != -1))) {
                if ((script6431() == true)) {
                    string1 = "There are more buy options if you tap and hold.";
                } else {
                    string1 = "There are more buy options if you right-click.";
                };
                if ((struct_getparam(int2, 4855) != -1)) {
                    CC_SETOP(2, script12793(int2, struct_getparam(int2, 4855), 0));
                };
                if ((struct_getparam(int2, 4856) != -1)) {
                    CC_SETOP(3, script12793(int2, struct_getparam(int2, 4856), 0));
                    CC_SETOP(4, script12793(int2, -1, 1));
                };
                if ((struct_getparam(int2, 4857) != -1)) {
                    CC_SETOP(4, script12793(int2, struct_getparam(int2, 4857), 0));
                    CC_SETOP(5, script12793(int2, -1, 1));
                };
            };
            if ((int10 == 1)) {
                if ((int0 == 37717 as struct)) {
                    if ((CC_FIND[1](int4, int15) == 1)) {
                        CC_SETGRAPHIC[1](int14);
                        CC_SETONMOUSEOVER[1](callback());
                        CC_SETONMOUSELEAVE[1](callback());
                        CC_SETONCLICK[1](callback(script688, int4, int15, 11712));
                        CC_SETONRELEASE[1](callback(script688, int4, int15, int14));
                    };
                } else {
                    CC_SETGRAPHIC(int14);
                };
            };
        } else {
            CC_CLEAROPS();
            if ((int0 == 37717 as struct)) {
                if ((CC_FIND[1](int4, int15) == 1)) {
                    CC_SETGRAPHIC[1](int14);
                    CC_SETONMOUSEOVER[1](callback());
                    CC_SETONMOUSELEAVE[1](callback());
                    CC_SETONCLICK[1](callback());
                    CC_SETONRELEASE[1](callback());
                };
            } else {
                CC_SETGRAPHIC(int14);
            };
        };
        if ((script6431() == true)) {
            if (((int9 == 1) && (STRING_LENGTH(string1) > 0))) {
                CC_SETONCLICK(callback(script16235, string1, -2147483645, -2147483643, int11));
            } else {
                CC_SETONCLICK(callback());
            };
        };
        CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
        CC_SENDTOBACK();
    };
    return;
}