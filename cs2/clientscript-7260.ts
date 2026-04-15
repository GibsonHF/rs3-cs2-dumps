//
function script7260(): void {
    var int0 = 0;
    var string0 = "";
    var int1 = -1 as struct;
    var int2 = -1;
    var int3 = ENUM_GETOUTPUTCOUNT(7120 as cs2enum);
    IF_SETSCROLLSIZE(IF_GETWIDTH(comp(1378, 15)), (int3 * 50), comp(1378, 15));
    IF_SETSIZE(IF_GETWIDTH(comp(1378, 18)), (int3 * 50), 0, 0, comp(1378, 18));
    IF_SETSIZE(IF_GETWIDTH(comp(1378, 16)), (int3 * 50), 0, 0, comp(1378, 16));
    IF_SETSIZE(IF_GETWIDTH(comp(1378, 20)), (int3 * 50), 0, 0, comp(1378, 20));
    IF_SETSIZE(IF_GETWIDTH(comp(1378, 21)), (int3 * 50), 0, 0, comp(1378, 21));
    script31(comp(1378, 14), comp(1378, 15), 7900 as graphic, 7897 as graphic, 7898 as graphic, 7899 as graphic, 7902 as graphic, 7901 as graphic);
    while ((int0 < int3)) {
        int1 = enum_getvalue(0, 73, 7120 as cs2enum, int0);
        if ((int1 != -1 as struct)) {
            CC_CREATE(comp(1378, 21), 5, int0);
            CC_SETSIZE(24, 24, 0, 0);
            CC_SETPOSITION(0, (13 + (int0 * 50)), 1, 0);
            CC_SETGRAPHIC(14945 as graphic);
            string0 = `${struct_getparam(int1, 3044)}<br><br>${struct_getparam(int1, 3045)}`;
            CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
            CC_CREATE(90308628, 4, int0);
            CC_SETPOSITION(5, (int0 * 50), 0, 0);
            CC_SETSIZE(0, 50, 1, 0);
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETTEXTFONT(27);
            if ((int0 == varclient_2244)) {
                CC_SETCOLOUR(script10495(4));
            } else {
                CC_SETCOLOUR(script10495(3));
            };
            CC_SETTEXTSHADOW(true);
            CC_SETTEXT(`${inttostring((int0 + 1), 10)}. ${struct_getparam(int1, 3044)}`);
            CC_SENDTOBACK();
            CC_CREATE(comp(1378, 17), 5, (3 * int0));
            CC_SETSIZE(38, 38, 0, 0);
            CC_SETPOSITION(5, (6 + (int0 * 50)), 2, 0);
            if ((script7265(2, int0) == 1)) {
                if ((script7266(2, int0) == 1)) {
                    CC_SETGRAPHIC(15211 as graphic);
                    int2 = 15212;
                    CC_SETONMOUSEOVER(callback(script5336, -2147483645, (3 * int0), int2));
                    int2 = 15211;
                    CC_SETONMOUSELEAVE(callback(script5336, -2147483645, (3 * int0), int2));
                } else {
                    CC_SETGRAPHIC(15214 as graphic);
                };
            } else {
                CC_SETGRAPHIC(15215 as graphic);
            };
            CC_CREATE(comp(1378, 18), 5, (3 * int0));
            CC_SETSIZE(38, 38, 0, 0);
            CC_SETPOSITION(5, (6 + (int0 * 50)), 2, 0);
            string0 = struct_getparam(int1, 3046);
            if ((script7265(2, int0) == 1)) {
                if ((script7266(2, int0) == 1)) {
                    CC_SETGRAPHIC(14933 as graphic);
                    CC_SETOP(1, "Claim-Reward");
                    CC_SETONOP(callback(script7263, ((3 * int0) + 2)));
                    string0 = `${string0}<br><br>Reward: available`;
                } else {
                    CC_SETGRAPHIC(14936 as graphic);
                    string0 = `${string0}<br><br>Reward: claimed`;
                };
            } else {
                CC_SETGRAPHIC(14939 as graphic);
            };
            CC_SETONMOUSEREPEAT(callback(script7271, -2147483645, -2147483643, -1, string0, 0, 150));
            CC_CREATE(90308625, 5, ((3 * int0) + 1));
            CC_SETSIZE(38, 38, 0, 0);
            CC_SETPOSITION(0, (6 + (int0 * 50)), 1, 0);
            if ((script7265(1, int0) == 1)) {
                if ((script7266(1, int0) == 1)) {
                    CC_SETGRAPHIC(15211 as graphic);
                    int2 = 15212;
                    CC_SETONMOUSEOVER(callback(script5336, -2147483645, ((3 * int0) + 1), int2));
                    int2 = 15211;
                    CC_SETONMOUSELEAVE(callback(script5336, -2147483645, ((3 * int0) + 1), int2));
                } else {
                    CC_SETGRAPHIC(15214 as graphic);
                };
            } else {
                CC_SETGRAPHIC(15215 as graphic);
            };
            CC_CREATE(comp(1378, 18), 5, ((3 * int0) + 1));
            CC_SETSIZE(38, 38, 0, 0);
            CC_SETPOSITION(0, (6 + (int0 * 50)), 1, 0);
            string0 = struct_getparam(int1, 3047);
            if ((script7265(1, int0) == 1)) {
                if ((script7266(1, int0) == 1)) {
                    CC_SETOP(1, "Claim-Reward");
                    CC_SETONOP(callback(script7263, ((3 * int0) + 1)));
                    CC_SETGRAPHIC(14934);
                    string0 = `${string0}<br><br>Reward: available`;
                } else {
                    CC_SETGRAPHIC(14937 as graphic);
                    string0 = `${string0}<br><br>Reward: claimed`;
                };
            } else {
                CC_SETGRAPHIC(14940 as graphic);
            };
            CC_SETONMOUSEREPEAT(callback(script7271, -2147483645, -2147483643, -1, string0, 0, 150));
            CC_CREATE(90308625, 5, ((3 * int0) + 2));
            CC_SETSIZE(38, 38, 0, 0);
            CC_SETPOSITION(5, (6 + (int0 * 50)), 0, 0);
            if ((script7265(0, int0) == 1)) {
                if ((script7266(0, int0) == 1)) {
                    CC_SETGRAPHIC(15211 as graphic);
                    int2 = 15212;
                    CC_SETONMOUSEOVER(callback(script5336, -2147483645, ((3 * int0) + 2), int2));
                    int2 = 15211;
                    CC_SETONMOUSELEAVE(callback(script5336, -2147483645, ((3 * int0) + 2), int2));
                } else {
                    CC_SETGRAPHIC(15214 as graphic);
                };
            } else {
                CC_SETGRAPHIC(15215 as graphic);
            };
            CC_CREATE(comp(1378, 18), 5, ((3 * int0) + 2));
            CC_SETSIZE(38, 38, 0, 0);
            CC_SETPOSITION(5, (6 + (int0 * 50)), 0, 0);
            string0 = struct_getparam(int1, 3048);
            if ((script7265(0, int0) == 1)) {
                if ((script7266(0, int0) == 1)) {
                    CC_SETGRAPHIC(14935 as graphic);
                    CC_SETOP(1, "Claim-Reward");
                    CC_SETONOP(callback(script7263, (3 * int0)));
                    string0 = `${string0}<br><br>Reward: available`;
                } else {
                    CC_SETGRAPHIC(14938 as graphic);
                    string0 = `${string0}<br><br>Reward: claimed`;
                };
            } else {
                CC_SETGRAPHIC(14941 as graphic);
            };
            CC_SETONMOUSEREPEAT(callback(script7271, -2147483645, -2147483643, -1, string0, 0, 150));
            CC_CREATE(90308624, 5, (3 * int0));
            CC_SETPOSITION(5, ((int0 * 50) + 2), 0, 0);
            CC_SETSIZE(14, 46, 0, 0);
            if ((int0 == varclient_2244)) {
                CC_SETGRAPHIC(12899 as graphic);
            } else {
                CC_SETGRAPHIC(12890 as graphic);
            };
            CC_SETONMOUSEOVER(callback(script7261, int0));
            CC_SETONMOUSELEAVE(callback(script7262, int0));
            CC_SETOP(2, "Select");
            CC_SETONOP(callback(script7259, int0));
            CC_CREATE(90308624, 5, ((3 * int0) + 1));
            CC_SETPOSITION(0, ((int0 * 50) + 2), 2, 0);
            CC_SETSIZE(14, 46, 0, 0);
            if ((int0 == varclient_2244)) {
                CC_SETGRAPHIC(12901 as graphic);
            } else {
                CC_SETGRAPHIC(12892 as graphic);
            };
            CC_SETONMOUSEOVER(callback(script7261, int0));
            CC_SETONMOUSELEAVE(callback(script7262, int0));
            CC_SETOP(2, "Select");
            CC_SETONOP(callback(script7259, int0));
            CC_CREATE(90308624, 5, ((3 * int0) + 2));
            CC_SETPOSITION(19, ((int0 * 50) + 2), 0, 0);
            CC_SETSIZE(33, 46, 1, 0);
            if ((int0 == varclient_2244)) {
                CC_SETGRAPHIC(12900 as graphic);
            } else {
                CC_SETGRAPHIC(12891 as graphic);
            };
            CC_SETONMOUSEOVER(callback(script7261, int0));
            CC_SETONMOUSELEAVE(callback(script7262, int0));
            CC_SETOP(2, "Select");
            CC_SETONOP(callback(script7259, int0));
            int1 = -1;
        };
        int0 = (int0 + 1);
    };
    return;
}