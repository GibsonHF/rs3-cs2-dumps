//
function script18550(int0: component, int1: int, int2: struct, int3: struct, int4: struct): void {
    var int5 = (int1 * 11);
    var int6 = (2 * 3);
    var int7 = MODULO(int1, 2);
    var int8 = (MODULO(int1, int6) / 2);
    var int9 = (15 + ((int1 / 2) * (255 + 15)));
    var int10 = 15;
    if ((int1 == 0)) {
        script18126(int0);
    };
    if ((int7 == 1)) {
        int10 = (int10 + (15 + 205));
    };
    if ((struct_getparam(int3, 9077) == 1)) {
        while ((int5 < ((int1 + 1) * 11))) {
            if ((CC_FIND(int0, int5++) == 1)) {
                CC_DELETE();
            };
        };
        return;
    };
    var int11 = struct_getparam(int3, 4851);
    var int12 = -1 as struct;
    var int13 = -1 as struct;
    var int14 = 0;
    [int12, int13, int14] = script326(int3);
    var int15 = -1 as npc;
    var int16 = script13501(int3);
    CC_CREATE(int0, 5, int5++);
    CC_SETGRAPHIC(33561 as graphic);
    CC_SETASPECT(CC_GETGRAPHICDIMENSIONS());
    CC_SETSIZE(255, 1, 0, 4);
    CC_SETPOSITION(int9, int10, 0, 0);
    var int17 = CC_GETHEIGHT();
    CC_CREATE(int0, 5, int5);
    CC_SETGRAPHIC(11707 as graphic);
    CC_SETASPECT(CC_GETGRAPHICDIMENSIONS());
    CC_SETSIZE(255, 1, 0, 4);
    CC_SETPOSITION(int9, int10, 0, 0);
    CC_SETONMOUSEOVER(callback(script688, int0, int5, 11713));
    CC_SETONMOUSELEAVE(callback(script688, int0, int5, 11707));
    CC_SETONCLICK(callback(script688, int0, int5, 11712));
    CC_SETONRELEASE(callback(script688, int0, int5, 11713));
    int5 = (int5 + 1);
    CC_CREATE(int0, 5, int5++);
    CC_SETGRAPHIC(11703);
    CC_SETASPECT(CC_GETGRAPHICDIMENSIONS());
    CC_SETSIZE(251, 1, 0, 4);
    CC_SETPOSITION(int9, (((int10 + int17) - CC_GETHEIGHT()) - SCALE(1, 205, int17)), 0, 0);
    var int18 = ((int9 + (255 / 2)) - (120 / 2));
    var int19 = (int10 + 10);
    if ((struct_getparam(int3, 4852) != -1)) {
        CC_CREATE(int0, 5, int5);
        CC_SETGRAPHIC(struct_getparam(int3, 4852));
        CC_SETPOSITION(int18, int19, 0, 0);
        CC_SETSIZE(120, 120, 0, 0);
    } else if ((int11 != -1 as obj)) {
        if ((struct_getparam(int3, 9078) == 1)) {
            if ((int14 == 5)) {
                int15 = struct_getparam(int13, 3152);
                CC_CREATE(int0, 6, int5);
                unk11155(0);
                CC_SETNPCMODEL(int15);
                stack(int3);
                stack(9081);
                struct_getparam();
                stack(int3);
                stack(9082);
                struct_getparam();
                stack(int3);
                stack(9083);
                struct_getparam();
                stack(int3);
                stack(9084);
                struct_getparam();
                stack(int3);
                stack(9085);
                struct_getparam();
                stack(int3);
                stack(9080);
                struct_getparam();
                CC_SETMODELANGLE(stack());
                CC_SETPOSITION(int18, int19, 0, 0);
                CC_SETSIZE(120, 120, 0, 0);
            } else if ((struct_getparam(int3, 9079) != -1 as model)) {
                CC_CREATE(int0, 6, int5);
                CC_SETPOSITION(int18, int19, 0, 0);
                CC_SETMODEL(struct_getparam(int3, 9079));
                unk11155(1);
                stack(int3);
                stack(9081);
                struct_getparam();
                stack(int3);
                stack(9082);
                struct_getparam();
                stack(int3);
                stack(9083);
                struct_getparam();
                stack(int3);
                stack(9084);
                struct_getparam();
                stack(int3);
                stack(9085);
                struct_getparam();
                stack(int3);
                stack(9080);
                struct_getparam();
                CC_SETMODELANGLE(stack());
                CC_SETPOSITION(int18, int19, 0, 0);
                CC_SETSIZE(120, 120, 0, 0);
            } else {
                script12478(`rewardshop struct: ${script13337(int3)} has param rewardshop_draw_model, but is not a pet or has an override specified.`);
            };
        } else {
            CC_CREATE(int0, 5, int5);
            int11 = script14453(int3, int11);
            CC_SETOBJECT_HIGHRES(int11);
            CC_SETPOSITION(int18, int19, 0, 0);
            CC_SETSIZE(120, 120, 0, 0);
        };
    };
    int5 = (int5 + 1);
    var string0 = script13337(int3);
    var int20 = struct_getparam(int3, 4448);
    string0 = script325(int20, string0, 1, 0);
    string0 = script3930(string0, (255 - 10), 2, 57 as fontmetrics);
    CC_CREATE(int0, 4, int5);
    CC_SETTEXT(string0);
    CC_SETTEXTFONT(57 as fontmetrics);
    CC_SETCOLOUR(14734449);
    CC_SETSIZE((255 - 10), SCALE(205, 100, 30), 0, 0);
    CC_SETPOSITION((int9 + 5), (int10 + SCALE(205, 100, 55)), 0, 0);
    CC_SETTEXTALIGN(1, 1, 10);
    int5 = (int5 + 1);
    CC_CREATE(int0, 4, int5);
    var int21 = script9095(int3, int16);
    if (((PLAYERMEMBER() == false) && (struct_getparam(int3, 5147) > 0))) {
        int21 = struct_getparam(int3, 5147);
    };
    var string1 = TOSTRING_LOCALISED(int21, 1);
    if ((int21 == 0)) {
        string1 = "FREE!";
    };
    CC_SETTEXT(string1);
    CC_SETTEXTFONT(57 as fontmetrics);
    CC_SETCOLOUR(14737632);
    CC_SETSIZE(255, SCALE(205, 100, 15), 0, 0);
    CC_SETPOSITION(int9, (int10 + SCALE(205, 100, 83)), 0, 0);
    CC_SETTEXTALIGN(1, 1, 20);
    int5 = (int5 + 1);
    CC_CREATE(int0, 5, int5);
    CC_SETGRAPHIC(struct_getparam(int2, 8661));
    CC_SETSIZE(SCALE(205, 100, 15), SCALE(205, 100, 15), 0, 0);
    CC_SETPOSITION((int9 + 40), (int10 + SCALE(205, 100, 83)), 0, 0);
    if ((int21 == 0)) {
        CC_SETHIDE(true);
    };
    int5 = (int5 + 1);
    CC_CREATE(int0, 5, int5);
    CC_SETGRAPHIC(struct_getparam(int4, 4738));
    CC_SETSIZE(16, 28, 0, 0);
    CC_SETPOSITION(((int9 + 255) - 16), (int10 - 2), 0, 0);
    CC_SETHIDE(true);
    int5 = (int5 + 1);
    CC_CREATE(int0, 5, int5);
    CC_SETGRAPHIC(struct_getparam(int4, 4739));
    CC_SETSIZE(0, 28, 0, 0);
    CC_SETPOSITION((int9 + 255), (int10 - 2), 0, 0);
    CC_SETHIDE(true);
    int5 = (int5 + 1);
    CC_CREATE(int0, 5, int5);
    CC_SETGRAPHIC(struct_getparam(int4, 4740));
    CC_SETSIZE(12, 28, 0, 0);
    CC_SETPOSITION((int9 + 255), (int10 - 2), 0, 0);
    CC_SETHIDE(true);
    int5 = (int5 + 1);
    CC_CREATE(int0, 4, int5);
    CC_SETTEXTFONT(57 as fontmetrics);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETSIZE(0, 23, 0, 0);
    CC_SETPOSITION((int9 + 255), (int10 - 2), 0, 0);
    CC_SETHIDE(true);
    int5 = (int5 + 1);
    return;
}