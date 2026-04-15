//
function script9302(int0: int): void {
    IF_SETTEXT(`Items found: <col=ffffff>${TOSTRING_LOCALISED(int0, 1)}</col>`, comp(517, 256));
    IF_SETHIDE(false, comp(517, 254));
    varclient_6870 = int0;
    return;
}