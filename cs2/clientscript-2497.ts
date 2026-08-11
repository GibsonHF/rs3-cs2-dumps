//
function script2497(): void {
    varbitplayer_42991 = 0;
    var int0 = -1 as struct;
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = -1;
    var int5 = -1;
    var string0 = "";
    var int6 = -1;
    int5 = (int5 + 1);
    while ((int5 < 4)) {
        switch (int5) {
            case 0: {
                int0 = enum_getvalue(0, 73, 1932 as cs2enum, varbitplayer_42981);
                int1 = comp(35, 27);  // trh153_overlay:chest_1_model
                int2 = comp(35, 23);  // trh153_overlay:chest_1_icon
                int3 = comp(35, 22);  // trh153_overlay:chest_1_icon_glow
                int4 = 2293781;
                break;
            }
            case 1: {
                int0 = enum_getvalue(0, 73, 1932 as cs2enum, varbitplayer_42982);
                int1 = comp(35, 12);  // trh153_overlay:chest_2_model
                int2 = comp(35, 26);  // trh153_overlay:chest_2_icon
                int3 = comp(35, 25);  // trh153_overlay:chest_2_icon_glow
                int4 = 2293784;
                break;
            }
            case 2: {
                int0 = enum_getvalue(0, 73, 1932 as cs2enum, varbitplayer_42983);
                int1 = comp(35, 29);  // trh153_overlay:chest_3_model
                int2 = comp(35, 20);  // trh153_overlay:chest_3_icon
                int3 = comp(35, 19);  // trh153_overlay:chest_3_icon_glow
                int4 = 2293778;
                break;
            }
            case 3: {
                int0 = enum_getvalue(0, 73, 1932 as cs2enum, varbitplayer_42984);
                int1 = comp(35, 10);  // trh153_overlay:chest_4_model
                int2 = comp(35, 4);  // trh153_overlay:chest_4_icon
                int3 = comp(35, 3);  // trh153_overlay:chest_4_icon_glow
                int4 = 2293762;
                break;
            }
        };
        IF_SETMODEL(struct_getparam(int0, 7750), int1);
        IF_SETMODELANGLE(0, 0, 19, 29, 0, 450, int1);
        IF_SETMODELANIM(struct_getparam(int0, 7751), int1);
        if ((int0 == 28662 as struct)) {
            int6 = script16163(int5);
            IF_SETGRAPHIC(enum_getvalue(0, 23, 16540 as cs2enum, int6), int2);
            string0 = `A firework which gives a prize from the ${enum_getvalue(0, 36, 16539 as cs2enum, int6)} category.`;
        } else {
            IF_SETGRAPHIC(struct_getparam(int0, 7746), int2);
            string0 = struct_getparam(int0, 7745);
        };
        IF_SETSIZE(struct_getparam(int0, 7747), struct_getparam(int0, 7748), 0, 0, int2);
        IF_SETGRAPHIC(struct_getparam(int0, 7749), int3);
        if ((script13749() == 1)) {
            IF_SETOP(1, "Information", int4);
            IF_SETONOP(callback(script7774, string0, -2147483645, -2147483643, 0), int4);
        } else {
            IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int4);
        };
        IF_SETONMOUSEOVER(callback(script2498, int1, struct_getparam(int0, 7752), struct_getparam(int0, 7744)), int1);
        IF_SETONMOUSELEAVE(callback(script2499, int1, struct_getparam(int0, 7751)), int1);
    };
    return;
}