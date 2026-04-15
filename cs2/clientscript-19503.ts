//
function script19503(int0: int): void {
    IF_SETTEXT(`Items found: <col=ffffff>${TOSTRING_LOCALISED(int0, 1)}</col>`, comp(1313, 114));
    IF_SETHIDE(false, comp(1313, 112));
    varclient_6870 = int0;
    return;
}