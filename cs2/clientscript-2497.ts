//
function script2497(): void {
    varbitplayer_42991 = 0;
    var int0 = -1 as struct;
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var string0 = "";
    var int6 = -1;
    while ((++int5 < 4)) {
        switch (int5) {
            case 0: {
                int0 = enum_getvalue(0, 73, 1932 as cs2enum, varbitplayer_42981);
                int1 = 2293787;
                int2 = 2293783;
                int3 = 2293782;
                int4 = 2293781;
                break;
            }
            case 1: {
                int0 = enum_getvalue(0, 73, 1932 as cs2enum, varbitplayer_42982);
                int1 = 2293772;
                int2 = 2293786;
                int3 = 2293785;
                int4 = 2293784;
                break;
            }
            case 2: {
                int0 = enum_getvalue(0, 73, 1932 as cs2enum, varbitplayer_42983);
                int1 = 2293789;
                int2 = 2293780;
                int3 = 2293779;
                int4 = 2293778;
                break;
            }
            case 3: {
                int0 = enum_getvalue(0, 73, 1932 as cs2enum, varbitplayer_42984);
                int1 = 2293770;
                int2 = 2293764;
                int3 = 2293763;
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