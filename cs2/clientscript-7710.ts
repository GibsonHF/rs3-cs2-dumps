//
function script7710(int0: int, int1: int): void {
    printmessage(`clanvartransmit $val=${inttostring(int0, 10)} $id=${inttostring(int1, 10)}`);
    if ((CC_FIND(comp(1411, 0), int1) == 1)) {
        CC_SETTEXT(inttostring(int0, 10));
    };
    return;
}