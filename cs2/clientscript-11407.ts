//
function script11407(int0: component): void {
    IF_SETHIDE(false, comp(1477, 703));
    CC_DELETEALL(int0);
    CC_DELETEALL(comp(1622, 1));
    CC_DELETEALL(comp(1622, 0));
    CC_DELETEALL(comp(1622, 10));
    CC_DELETEALL(comp(1622, 12));
    CC_DELETEALL(comp(1622, 11));
    CC_DELETEALL(comp(1622, 2));
    var int1 = 52;
    if ((IF_FIND(comp(1622, 2)) == 1)) {
        IF_SETHIDE(false, comp(1622, 2));
        CC_SETPOSITION(0, 0, 0, 2);
        CC_SETSIZE(0, int1, 1, 0);
    };
    if ((IF_FIND(comp(1622, 0)) == 1)) {
        CC_SETPOSITION(0, 0, 2, 0);
        CC_SETSIZE(16, int1, 0, 1);
    };
    if ((IF_FIND(comp(1622, 1)) == 1)) {
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETSIZE(0, int1, 1, 1);
    };
    var int2 = INV_SIZE(773 as inv);
    var int3 = 0;
    var int4 = 40;
    var int5 = 36;
    var int6 = 10;
    var int7 = 10;
    if ((script6431() == true)) {
        int4 = 54;
        int5 = 48;
        int6 = 8;
        int7 = 4;
    };
    while ((int3 < int2)) {
        CC_CREATE(comp(1622, 10), 5, int3);
        CC_SETSIZE(int4, int5, 0, 0);
        CC_SETGRAPHIC(18266 as graphic);
        CC_SETONMOUSEOVER(callback(script9227, 773, -2147483645, -2147483643, 106299404, 1));
        CC_SETONMOUSELEAVE(callback(script9227, 773, -2147483645, -2147483643, 106299404, 0));
        script9229(106299404, int3, int4, int5);
        CC_CREATE(106299403, 5, int3);
        CC_SETSIZE((int4 - 4), (int5 - 4), 0, 0);
        CC_SETONTARGETENTER(callback(script1615, 1, -2147483645, -2147483643));
        stack(1615);
        stack(0);
        stack(-2147483645);
        stack(-2147483643);
        stack("iii");
        CC_SETONTARGETLEAVE();
        int3 = (int3 + 1);
    };
    if ((varbitplayer_22875 != 1)) {
        IF_SETHIDE(false, comp(1622, 10));
    } else {
        IF_SETHIDE(true, comp(1622, 10));
    };
    if (((PLAYERMEMBER() == false) || (((((((((((varbitplayer_27945 == 0) && (varbitplayer_27947 == 0)) && (varbitplayer_27948 == 0)) && (varbitplayer_27949 == 0)) && (varbitplayer_27950 == 0)) && (varbitplayer_27951 == 0)) && (varbitplayer_27952 == 0)) && (varbitplayer_27953 == 0)) && (varbitplayer_27954 == 0)) && (varbitplayer_27955 == 0)) && (varbitplayer_27956 == 0)))) {
        IF_SETHIDE(true, comp(1622, 14));
    } else {
        IF_SETHIDE(false, comp(1622, 14));
    };
    IF_SETONRESIZE(callback(script11408, -2147483645), int0);
    IF_SETONINVTRANSMIT(callback(script11408, -2147483645, 773, 1), int0);
    IF_SETPOSITION(int6, int7, 0, 0, 106299401);
    script11409(int0);
    return;
}