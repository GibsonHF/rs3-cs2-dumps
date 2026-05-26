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
        IF_SETGRAPHIC(struct_getparam(int2, 1153), 66519110);
        IF_SETTEXT(struct_getparam(int2, 1151), 66519113);
        IF_SETTEXT(`Cooldown: <col=ffffff>${inttostring(struct_getparam(int2, 1155), 10)}`, 66519114);
        IF_SETTEXT(`Cost: <col=ffffff>${inttostring(struct_getparam(int2, 1154), 10)}`, 66519115);
    };
    return;
}