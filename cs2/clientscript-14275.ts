//
function script14275(int0: int): void {
    var int1 = script14274(int0);
    var int2 = script488(int1);
    IF_SETHIDE(true, comp(1015, 66));
    IF_SETHIDE(false, comp(1015, 76));
    IF_SETHIDE(false, comp(1015, 69));
    if ((int2 == -1 as struct)) {
        IF_SETHIDE(false, comp(1015, 71));
        IF_SETHIDE(true, comp(1015, 70));
        IF_SETHIDE(true, comp(1015, 72));
        IF_SETHIDE(true, comp(1015, 73));
        IF_SETHIDE(true, comp(1015, 74));
        IF_SETHIDE(true, comp(1015, 75));
    } else {
        IF_SETHIDE(true, comp(1015, 71));
        IF_SETHIDE(false, comp(1015, 70));
        IF_SETHIDE(false, comp(1015, 72));
        IF_SETHIDE(false, comp(1015, 73));
        IF_SETHIDE(false, comp(1015, 74));
        IF_SETHIDE(false, comp(1015, 75));
        IF_SETTEXT(struct_getparam(int2, 1150), comp(1015, 72));
        stack(struct_getparam(int2, 1153));
        stack(66519110);
        IF_SETGRAPHIC();
        stack(int2);
        stack(1151);
        struct_getparam();
        IF_SETTEXT(stack(), 66519113);
        stack("Cooldown: <col=ffffff>");
        stack(int2);
        stack(1155);
        struct_getparam();
        IF_SETTEXT(`${stack()}${inttostring(stack(), 10)}`, 66519114);
        stack("Cost: <col=ffffff>");
        stack(int2);
        stack(1154);
        struct_getparam();
        IF_SETTEXT(`${stack()}${inttostring(stack(), 10)}`, 66519115);
    };
    return;
}