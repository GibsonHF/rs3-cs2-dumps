//
function script459(int0: int, int1: int, int2: int, int3: component, int4: component): void {
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var string0 = "";
    var string1 = "";
    var int8 = 0;
    var int9 = 0;
    if ((int2 < 300)) {
        string0 = inttostring(int2, 10);
        string1 = `RuneScape ${string0}`;
        int5 = 28;
        [string1, int8, int9] = script6305(string1, int2);
    } else if (((int2 >= 300) && (int2 < 600))) {
        string0 = inttostring(int2, 10);
        string1 = `Old School ${inttostring(int2, 10)}`;
        int5 = 28;
    } else if (((int2 < 1100) || (int2 > 6000))) {
        string0 = `World ${inttostring(int2, 10)}`;
        string1 = string0;
        int5 = 0;
    } else if (((int2 >= 1100) && (int2 <= 5000))) {
        string0 = "Lobby";
        string1 = "Lobby";
        int5 = 0;
    } else {
        string0 = `Classic ${inttostring((int2 - 5000), 10)}`;
        string1 = string0;
        int5 = 0;
    };
    int6 = STRINGWIDTH(string0, 26 as fontmetrics);
    if (((int5 == 0) || (int0 < (int6 + int5)))) {
        int7 = 0;
        CC_SETHIDE(true);
    } else {
        int7 = int5;
        if (((int2 >= 300) && (int2 < 600))) {
            CC_SETGRAPHIC(131 as graphic);
        } else if ((int8 == -1)) {
            if ((int9 >= 0)) {
                CC_SETGRAPHIC(enum_getvalue(0, 23, 1810 as cs2enum, int9));
            } else {
                CC_SETGRAPHIC(23848 as graphic);
            };
        } else if ((TESTBIT(int8, 24) == 1)) {
            CC_SETGRAPHIC(35198 as graphic);
        } else if ((TESTBIT(int8, 16) == 1)) {
            CC_SETGRAPHIC(23849 as graphic);
        } else {
            CC_SETGRAPHIC(enum_getvalue(0, 23, 1810 as cs2enum, int9));
        };
        if ((script6431() == true)) {
            var int1 = (int1 + ((27 / 2) - (CC_GETHEIGHT() / 2)));
        } else {
            int1 = (int1 + ((19 / 2) - (CC_GETHEIGHT() / 2)));
        };
        CC_SETPOSITION(2, int1, 0, 0);
        if ((script6431() == false)) {
            CC_SETONMOUSEREPEAT(callback(script3125, string1, -2147483645, -2147483643, int3, int4));
        } else {
            CC_SETONCLICK(callback(script3125, string1, -2147483645, -2147483643, int3, int4));
        };
        CC_SETHIDE(false);
    };
    if ((int0 < int6)) {
        string0 = "...";
    };
    if ((int2 == MAP_WORLD())) {
        CC_SETCOLOUR[1](3979038);
    } else {
        CC_SETCOLOUR[1](16777060);
    };
    CC_SETMAXLINES[1](1);
    CC_SETTEXT[1](string0);
    CC_SETSIZE[1](int0, 19, 0, 0);
    CC_SETPOSITION[1](int7, int1, 0, 0);
    if ((script6431() == false)) {
        CC_SETONMOUSEREPEAT[1](callback(script3125, string1, -2147483645, -2147483643, int3, int4));
    } else {
        CC_SETONCLICK[1](callback(script3125, string1, -2147483645, -2147483643, int3, int4));
    };
    CC_SETHIDE[1](false);
    return;
}