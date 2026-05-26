//
function script3124(int0: number, int1: number): void {
    var int2 = struct_getparam(int0, 2796);
    if (((int0 == 28430) || (int0 == 11748))) {
        int2 = script17463(script15098(INV_GETOBJ(94, 3), int0));
    };
    if (((IF_FIND(struct_getparam(int1, 8932)) == 1) && (IF_FIND[1](struct_getparam(int1, 8934)) == 1))) {
        if ((int2 > 0)) {
            CC_SETHIDE(0);
            CC_SETTEXT(script15973(int2, 1));
            CC_SETTEXTALIGN(2, 1, 0);
            CC_SETHIDE[1](0);
        } else {
            CC_SETHIDE(1);
            CC_SETHIDE[1](1);
        };
    };
    return;
}