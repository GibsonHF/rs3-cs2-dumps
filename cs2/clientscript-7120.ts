//
function script7120(int0: int): int {
    var int1 = 0;
    var int2 = 1;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = -1 as obj;
    var int9 = -1 as obj;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = (46 - 6);
    var string0 = "";
    define_array[23](3);
    pop_array(0, 13987);
    pop_array(1, 13988);
    pop_array(2, 13989);
    define_array[65559](3);
    pop_array[1](0, 15199);
    pop_array[1](1, 15200);
    pop_array[1](2, 15201);
    var int14 = 0;
    while ((int1 < int0)) {
        if ((varplayer_1169 != -1 as cs2enum)) {
            int8 = enum_getvalue(0, 33, varplayer_1169, int1);
        } else {
            return 0;
        };
        int9 = item_getparam(int8, 2989);
        if ((int9 == -1 as obj)) {
            int9 = int8;
        };
        int10 = script7105(int8);
        int11 = script7108(int8);
        int2 = script13570(int8);
        int4 = MODULO(int3, 4);
        int5 = (int3 / 4);
        if ((int2 == 1)) {
            int3 = (int3 + 1);
        };
        int7 = (5 + ((int4 * 10) + (int4 * int13)));
        int6 = (((int5 * 10) + (int5 * int13)) + int14);
        CC_CREATE(comp(1371, 22), 5, int12);
        if ((int2 == 0)) {
            CC_SETHIDE(true);
        } else {
            CC_SETPOSITION(int7, int6, 0, 0);
            CC_SETSIZE(46, 46, 0, 0);
            CC_SETALPHA(1);
            if (((int10 == 0) || (int11 == 0))) {
                CC_SETGRAPHIC(push_array(0));
                CC_SETONMOUSEOVER(callback(script7142, -2147483643, push_array(1)));
                CC_SETONMOUSELEAVE(callback(script7142, -2147483643, push_array(0)));
            } else {
                CC_SETGRAPHIC(push_array[1](0));
                CC_SETONMOUSEOVER(callback(script7142, -2147483643, push_array[1](1)));
                CC_SETONMOUSELEAVE(callback(script7142, -2147483643, push_array[1](0)));
            };
        };
        int12 = (int12 + 1);
        CC_CREATE(comp(1371, 22), 5, int12);
        if ((int2 == 0)) {
            CC_SETHIDE(true);
        } else {
            CC_SETPOSITION(int7, int6, 0, 0);
            CC_SETSIZE(46, 46, 0, 0);
            CC_SETALPHA(1);
            string0 = "";
            if (((int10 == 0) || (int11 == 0))) {
                CC_SETONOP(callback(script7121, int8, -2147483643, push_array(2)));
                if ((int8 == varplayer_1170)) {
                    CC_SETGRAPHIC(push_array(2));
                };
                if (((MAP_MEMBERS() == 0) && (script7116(int8) == 1))) {
                    string0 = strconcat(string0, "<br>Members only");
                };
                if ((int10 == 0)) {
                    string0 = strconcat(string0, "<br>Requirements not met");
                };
                if ((((int11 == 0) && (item_getparam(int8, 5450) > 0)) && (INV_FREESPACE(93 as inv) == 0))) {
                    string0 = strconcat(string0, "<br>No free space");
                } else {
                    string0 = strconcat(string0, "<br>Ingredients missing");
                };
            } else {
                CC_SETONOP(callback(script7121, int8, -2147483643, push_array[1](2)));
                if ((int8 == varplayer_1170)) {
                    CC_SETGRAPHIC(push_array[1](2));
                };
            };
            if (((STRING_LENGTH(item_getparam(int8, 3859)) > 0) && (item_getparam(int8, 2989) != -1 as obj))) {
                CC_SETONMOUSEREPEAT(callback(script3584, item_getparam(int8, 2989), item_getparam(int8, 2989), -1, -2147483645, -2147483643, 0, 1, string0));
            } else {
                CC_SETONMOUSEREPEAT(callback(script14193, string0, int8, -2147483645, -2147483643));
            };
            CC_SETOP(1, "Select");
        };
        int12 = (int12 + 1);
        CC_CREATE(comp(1371, 22), 5, int12);
        if ((int2 == 0)) {
            CC_SETHIDE(true);
        } else {
            CC_SETPOSITION(((int7 + ((46 - 36) / 2)) + 2), (int6 + ((46 - 32) / 2)), 0, 0);
            CC_SETSIZE(36, 32, 0, 0);
            if ((item_getparam(int8, 5491) != -1 as graphic)) {
                CC_SETSIZE(32, 32, 0, 0);
                CC_SETGRAPHIC(item_getparam(int8, 5491));
            } else if ((item_getparam(int8, 2653) > 1)) {
                CC_SETOBJECT(int9, script18374(int8));
            } else if ((item_getparam(int8, 3860) > 1)) {
                CC_SETOBJECT(int9, item_getparam(int8, 3860));
            } else {
                CC_SETOBJECT_NONUM(int9, -1);
            };
            if (((((MAP_MEMBERS() == 0) && (script7116(int8) == 1)) || (int10 == 0)) || (int11 == 0))) {
                CC_SETTRANS(175);
            };
        };
        int12 = (int12 + 1);
        CC_CREATE(comp(1371, 22), 5, int12);
        if ((int2 == 0)) {
            CC_SETHIDE(true);
        } else {
            CC_SETPOSITION(((int7 + 46) - 18), ((int6 + 46) - 18), 0, 0);
            CC_SETSIZE(18, 18, 0, 0);
            if (((MAP_MEMBERS() == 0) && (script7116(int8) == 1))) {
                CC_SETGRAPHIC(13164 as graphic);
            } else if ((int10 == 0)) {
                CC_SETGRAPHIC(13163 as graphic);
            };
        };
        int12 = (int12 + 1);
        int1 = (int1 + 1);
    };
    if ((int3 == 0)) {
        CC_CREATE(comp(1371, 22), 4, int12);
        CC_SETTEXT("There is nothing in this category available for you to work on at this time.");
        script11024(3);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETPOSITION(5, 5, 0, 0);
        CC_SETSIZE(10, 10, 1, 1);
    };
    return ((int6 + int13) + 6);
}