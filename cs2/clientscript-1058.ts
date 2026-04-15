//
function script1058(): void {
    if ((((((varbitplayer_19928 == 1) && (script1186() == 1)) || (varbitplayer_27169 == 1)) || (varbitplayer_60446 == 1)) || (varbitplayer_38842 == 1))) {
        IF_SETHIDE(true, comp(1477, 99));
        return;
    };
    var string0 = "Logout";
    var int0 = 21255;
    if ((varbitplayer_19924 == 1)) {
        int0 = 21257;
    };
    IF_SETHIDE(false, comp(1477, 99));
    IF_SETSIZE(32, 32, 0, 0, comp(1477, 99));
    IF_SETPOSITION(0, 0, 2, 0, comp(1477, 99));
    IF_SETMOUSEOVERCURSOR(36, comp(1477, 99));
    if ((CC_FIND(comp(1477, 99), 0) == 1)) {
        CC_SETPOSITION(struct_getparam(int0, 3575), struct_getparam(int0, 3576), 2, 0);
        CC_SETSIZE(struct_getparam(int0, 3563), struct_getparam(int0, 3564), 0, 0);
        CC_SETGRAPHIC(struct_getparam(int0, 3601));
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1));
        CC_SETONMOUSELEAVE(callback(script8805));
    };
    if ((CC_FIND(comp(1477, 99), 1) == 1)) {
        CC_SETPOSITION(struct_getparam(int0, 3573), struct_getparam(int0, 3574), 2, 0);
        CC_SETSIZE(struct_getparam(int0, 3565), struct_getparam(int0, 3566), 0, 0);
        if ((varbitplayer_19924 == 0)) {
            CC_SETGRAPHIC(32977 as graphic);
            CC_SETONMOUSEOVER(callback(script5336, -2147483645, -2147483643, 34644));
            CC_SETONMOUSELEAVE(callback(script5336, -2147483645, -2147483643, 32977));
            CC_SETOP(1, "Logout");
        } else {
            CC_SETGRAPHIC(20257 as graphic);
            CC_SETONMOUSEOVER(callback(script5336, -2147483645, -2147483643, 20258));
            CC_SETONMOUSELEAVE(callback(script5336, -2147483645, -2147483643, 20257));
            CC_SETOP(1, "Logout");
        };
        CC_SETNOCLICKTHROUGH(true);
    };
    return;
}