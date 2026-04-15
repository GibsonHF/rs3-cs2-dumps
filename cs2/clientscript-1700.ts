//[clientscript,scrollbar_horizontal_drag]
function script1700(int0: component, int1: component, int2: int, int3: unknown_int): void {
    var int4 = 0;
    var int5 = 0;
    if ((CC_FIND(int0, 1) == 1)) {
        if (((varbitplayer_22875 == 2) || (cc_getparam(7986) == 2))) {
            int4 = (IF_GETWIDTH(int0) - CC_GETWIDTH());
        } else {
            int4 = (((IF_GETWIDTH(int0) - 32) - CC_GETWIDTH()) - 10);
        };
        if ((int4 <= 0)) {
            return;
        };
        int5 = (IF_GETSCROLLWIDTH(int1) - IF_GETWIDTH(int1));
        var int2 = ((int2 * int5) / int4);
        script1702(int0, int1, int2, int3);
    };
    return;
}