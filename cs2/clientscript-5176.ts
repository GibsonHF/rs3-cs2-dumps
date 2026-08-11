//
function script5176(): void {
    var int0 = -1;
    var int1 = 10;
    var int2 = 0;
    var int3 = 0;
    var int4 = enum_getvalue(0, 0, 4848 as cs2enum, varbitplayer_1009);
    var int5 = enum_getvalue(0, 73, 4849 as cs2enum, int4);
    var int6 = -1;
    var int7 = 0;
    CC_DELETEALL(comp(1122, 53));  // hcape_interface:goals_icons
    while ((int5 != -1 as struct)) {
        if ((int4 == varclient_1596)) {
            int7 = 1;
        } else {
            int7 = 0;
        };
        if ((struct_getparam(int5, 1882) == 0)) {
            script13998(73531445, -1, 28556, int1, 0, 60, 60, 0, 0, "", int7);
            if ((script5200(int4) == 1)) {
                CC_CREATE(comp(1122, 53), 5, IF_GETNEXTSUBID(comp(1122, 53)));  // hcape_interface:goals_icons
                CC_SETPOSITION(int1, 0, 0, 0);
                CC_SETSIZE(60, 60, 0, 0);
                CC_SETGRAPHIC(7465 as graphic);
            };
            CC_CREATE(comp(1122, 53), 5, IF_GETNEXTSUBID(comp(1122, 53)));  // hcape_interface:goals_icons
            CC_SETPOSITION(int1, 0, 0, 0);
            CC_SETSIZE(60, 60, 0, 0);
            CC_SETOP(1, "Goal details");
            CC_SETONOP(callback(script5179, int4));
            CC_SETGRAPHIC(struct_getparam(int5, 1881));
            int1 = (int1 + 70);
        } else {
            int2 = script14213(int4);
            int3 = script14212(int4);
            script13998(73531445, -1, 28556, int1, 0, 120, 60, 0, callback(script0), int7);
            CC_CREATE(comp(1122, 53), 4, IF_GETNEXTSUBID(comp(1122, 53)));  // hcape_interface:goals_icons
            CC_SETPOSITION(int1, 0, 0, 0);
            CC_SETSIZE(120, 60, 0, 0);
            CC_SETTEXT(`Tasks Complete:<br><br>${inttostring(int3, 10)} of ${inttostring(int2, 10)}`);
            CC_SETTEXTALIGN(1, 1, 0);
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETTEXTSHADOW(true);
            script11024(3);
            CC_CREATE(comp(1122, 53), 5, IF_GETNEXTSUBID(comp(1122, 53)));  // hcape_interface:goals_icons
            CC_SETPOSITION(int1, 0, 0, 0);
            CC_SETSIZE(120, 120, 0, 0);
            CC_SETOP(1, "Goal details");
            CC_SETONOP(callback(script5179, int4));
            int1 = (int1 + 130);
        };
        int4 = struct_getparam(int5, 1878);
        int5 = enum_getvalue(0, 73, 4849 as cs2enum, int4);
    };
    int4 = 14;
    int5 = enum_getvalue(0, 73, 4849 as cs2enum, int4);
    while ((int5 != -1 as struct)) {
        if ((struct_getparam(int5, 2196) == 1)) {
            if ((script5200(int4) == 0)) {
                int4 = struct_getparam(int5, 1878);
                int5 = enum_getvalue(0, 73, 4849 as cs2enum, int4);
            } else {
                if ((int4 == varclient_1596)) {
                    int7 = 1;
                } else {
                    int7 = 0;
                };
                script13998(73531445, -1, 28556, int1, 0, 60, 60, 0, 0, "", int7);
                CC_CREATE(comp(1122, 53), 5, IF_GETNEXTSUBID(comp(1122, 53)));  // hcape_interface:goals_icons
                CC_SETPOSITION(int1, 0, 0, 0);
                CC_SETSIZE(60, 60, 0, 0);
                CC_SETGRAPHIC(struct_getparam(int5, 1881));
                CC_SETOP(1, "Goal details");
                if ((varclient_1595 > 3)) {
                    CC_SETONOP(callback(script5179, int4));
                    if ((script5200(int4) == 1)) {
                        CC_CREATE(comp(1122, 53), 5, IF_GETNEXTSUBID(comp(1122, 53)));  // hcape_interface:goals_icons
                        CC_SETSIZE(60, 60, 0, 0);
                        CC_SETPOSITION(int1, 0, 0, 0);
                        CC_SETGRAPHIC(7465 as graphic);
                    };
                } else {
                    CC_SETONOP(callback(script5179, 13));
                    CC_SETGRAPHIC(7454 as graphic);
                };
                int4 = struct_getparam(int5, 1878);
                int5 = enum_getvalue(0, 73, 4849 as cs2enum, int4);
                int1 = (int1 + 70);
            };
        } else {
            if ((int4 == varclient_1596)) {
                int7 = 1;
            } else {
                int7 = 0;
            };
            script13998(73531445, -1, 28556, int1, 0, 60, 60, 0, 0, "", int7);
            CC_CREATE(comp(1122, 53), 5, IF_GETNEXTSUBID(comp(1122, 53)));  // hcape_interface:goals_icons
            CC_SETPOSITION(int1, 0, 0, 0);
            CC_SETSIZE(60, 60, 0, 0);
            CC_SETGRAPHIC(struct_getparam(int5, 1881));
            CC_SETOP(1, "Goal details");
            if ((varclient_1595 > 3)) {
                CC_SETONOP(callback(script5179, int4));
                if ((script5200(int4) == 1)) {
                    CC_CREATE(comp(1122, 53), 5, IF_GETNEXTSUBID(comp(1122, 53)));  // hcape_interface:goals_icons
                    CC_SETSIZE(60, 60, 0, 0);
                    CC_SETPOSITION(int1, 0, 0, 0);
                    CC_SETGRAPHIC(7465 as graphic);
                };
            } else {
                CC_SETONOP(callback(script5179, 13));
                CC_SETGRAPHIC(7454 as graphic);
            };
            int4 = struct_getparam(int5, 1878);
            int5 = enum_getvalue(0, 73, 4849 as cs2enum, int4);
            int1 = (int1 + 70);
        };
    };
    if ((int1 > IF_GETWIDTH(comp(1122, 53)))) {  // hcape_interface:goals_icons
        IF_SETSCROLLSIZE(int1, 0, comp(1122, 53));  // hcape_interface:goals_icons
    };
    script11147(73531446, 73531445);
    return;
}