//
function script7716(int0: number, int1: number, int2: number, int3: number, string0: string): void {
    if ((CC_FIND(comp(1411, 0), int2) == 1)) {  // clantool_profile:variables
        CC_SETONVARCTRANSMIT(callback());
        CC_SETHIDE(false);
        CC_SETTEXT(string0);
        IF_SETHIDE(true, comp(1411, 57));  // clantool_profile:text_input_box
        IF_SETHIDE(true, int0);
        IF_SETHIDE(true, int1);
        IF_SETHIDE(true, int3);
        IF_SETTEXT("", int0);
    };
    return;
}