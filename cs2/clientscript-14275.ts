//
function script14275(int0: number): void {
    var int1 = script14274(int0);
    var int2 = script488(int1);
    IF_SETHIDE(1, 66519106);
    IF_SETHIDE(0, 66519116);
    IF_SETHIDE(0, 66519109);
    if ((int2 == -1)) {
        IF_SETHIDE(0, 66519111);
        IF_SETHIDE(1, 66519110);
        IF_SETHIDE(1, 66519112);
        IF_SETHIDE(1, 66519113);
        IF_SETHIDE(1, 66519114);
        IF_SETHIDE(1, 66519115);
    } else {
        IF_SETHIDE(1, 66519111);
        IF_SETHIDE(0, 66519110);
        IF_SETHIDE(0, 66519112);
        IF_SETHIDE(0, 66519113);
        IF_SETHIDE(0, 66519114);
        IF_SETHIDE(0, 66519115);
        IF_SETTEXT(struct_getparam(int2, 1150), 66519112);
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