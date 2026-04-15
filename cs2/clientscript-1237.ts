//[proc,prayer_load_buttons]
function script1237(int0: component, int1: struct): void {
    CC_DELETEALL(int0);
    CC_DELETEALL(struct_getparam(int1, 8128));
    var int2 = script12006(int0);
    var int3 = 0;
    var int4 = script6431();
    script2715(struct_getparam(int1, 8126));
    script12419(int1, int2);
    var int5 = 0;
    var int6 = comp(-1, 65535);
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    if ((int1 != 37672 as struct)) {
        int6 = comp(1458, 44);
        if ((int1 == 37671 as struct)) {
            int6 = comp(1457, 53);
        };
        int3 = script11994(int2, int0);
        if ((IF_FIND(struct_getparam(int1, 8150)) == 1)) {
            if ((varbitplayer_27169 == 1)) {
                CC_SETSIZE(MIN(160, ((IF_GETWIDTH(struct_getparam(int1, 8130)) - (24 * 2)) - (4 * 3))), 27, 0, 0);
                CC_SETPOSITION((4 - 2), (4 - 1), 0, 2);
            } else if ((int4 == true)) {
                CC_SETSIZE((4 * 2), 32, 1, 0);
                CC_SETPOSITION(4, 6, 0, 2);
            } else {
                int9 = MIN(160, ((IF_GETWIDTH(struct_getparam(int1, 8130)) - (24 * 2)) - (4 * 3)));
                CC_SETSIZE(int9, 24, 0, 0);
                CC_SETPOSITION(4, 4, 0, 2);
            };
        };
        if ((varbitplayer_45115 < 0)) {
            varbitplayer_45115 = 0;
        };
        if ((varbitplayer_45116 < 0)) {
            varbitplayer_45116 = 0;
        };
        if ((varbitplayer_45116 != 1)) {
            IF_SETHIDE(true, struct_getparam(int1, 8127));
        } else {
            IF_SETHIDE(false, struct_getparam(int1, 8127));
        };
        if ((IF_FIND(struct_getparam(int1, 8153)) == 1)) {
            CC_SETPOSITION(0, 0, 2, 1);
            CC_SETSIZE((32 + 4), 0, 0, 1);
        };
        if ((IF_FIND(struct_getparam(int1, 8142)) == 1)) {
            CC_SETPOSITION(0, 0, 0, 1);
            CC_SETSIZE((32 + 4), 0, 0, 1);
            int5 = (MIN(CC_GETWIDTH(), CC_GETHEIGHT()) - (4 * 2));
            IF_SETSIZE(int5, int5, 0, 0, int6);
            IF_SETPOSITION(4, 0, 0, 1, int6);
        };
        script12234(int1);
        if ((varbitplayer_45116 == 1)) {
            IF_SETHIDE(false, struct_getparam(int1, 8144));
            IF_SETPOSITION(0, 0, 1, 0, struct_getparam(int1, 8144));
            if ((int4 == true)) {
                IF_SETSIZE(0, ((4 * 2) + 40), 1, 0, struct_getparam(int1, 8144));
            } else {
                IF_SETSIZE(0, ((4 * 2) + 26), 1, 0, struct_getparam(int1, 8144));
            };
            IF_SETPOSITION(0, 0, 1, 1, struct_getparam(int1, 8145));
            IF_SETSIZE((4 * 2), (4 * 2), 1, 1, struct_getparam(int1, 8145));
            IF_SETPOSITION(0, IF_GETHEIGHT(struct_getparam(int1, 8144)), 1, 0, struct_getparam(int1, 8127));
            IF_SETSIZE(0, ((14 * 6) + 5), 1, 0, struct_getparam(int1, 8127));
            script5808(struct_getparam(int1, 8127), 0);
            int7 = IF_GETHEIGHT(struct_getparam(int1, 8144));
            int8 = IF_GETHEIGHT(struct_getparam(int1, 8127));
            if ((int8 > 0)) {
                int8 = (int8 + 4);
            };
        } else {
            IF_SETHIDE(true, struct_getparam(int1, 8144));
            IF_SETHIDE(true, struct_getparam(int1, 8127));
        };
        script12002(int1, (int8 + int7), int4);
    } else {
        int3 = ENUM_GETOUTPUTCOUNT(int2);
        script12001(int4);
    };
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    [int10, int11, int12, int13] = script12235(int0, int1, int3);
    script12233(int0, int1, int13, int12, int11, int10, int3);
    if ((int1 != 37672 as struct)) {
        IF_SETONVARTRANSMIT(callback(script12231, -2147483645, int1, 3277, 3272, 3275, 3273, 4), int0);
        script12241(struct_getparam(int1, 8149), int1, int3);
    };
    script11989(37670 as struct);
    script11989(37671 as struct);
    if ((varbitplayer_45116 == 1)) {
        script5808(struct_getparam(37670 as struct, 8127), 0);
        script5808(struct_getparam(37671 as struct, 8127), 0);
    };
    return;
}