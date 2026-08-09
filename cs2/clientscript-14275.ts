//
function script14275(int0: number): void {
    var int1 = script14274(int0);
    var int2 = script488(int1);
    IF_SETHIDE(true, comp(1015, 66));
    IF_SETHIDE(false, comp(1015, 76));
    IF_SETHIDE(false, comp(1015, 69));
    if ((int2 == -1)) {
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
        IF_SETGRAPHIC(struct_getparam(int2, 1153), comp(1015, 70));
        IF_SETTEXT(struct_getparam(int2, 1151), 66519113);
        IF_SETTEXT(`Cooldown: <col=ffffff>${inttostring(struct_getparam(int2, 1155), 10)}`, comp(1015, 74));
        IF_SETTEXT(`Cost: <col=ffffff>${inttostring(struct_getparam(int2, 1154), 10)}`, comp(1015, 75));
    };
    return;
}