//[proc,quickchat_menu_select]
function script1061(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    script8543(int6);
    script8676(int6, 0);
    script8674(int6, 0);
    var int7 = 0;
    while ((CC_FIND(int0, int7) == 1)) {
        if ((int7 == int2)) {
            CC_SETONMOUSEOVER(callback());
            CC_SETONMOUSELEAVE(callback());
            if ((CC_FIND[1](int1, int7) == 1)) {
                CC_SETHIDE[1](0);
                CC_SETCOLOUR[1](9869175);
            };
        } else {
            CC_SETONMOUSEOVER(callback(script1082, (int4 - 1), int1, int7, int6));
            CC_SETONMOUSELEAVE(callback(script1083, (int4 - 1), int1, int7, int6));
            if ((CC_FIND[1](int1, int7) == 1)) {
                CC_SETHIDE[1](1);
            };
        };
        int7 = (int7 + 1);
    };
    script1062(int3, int4, int5, -1, 0, int6);
    return;
}