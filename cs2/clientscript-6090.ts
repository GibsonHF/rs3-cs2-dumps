//
function script6090(int0: int, int1: int): void {
    var int2 = comp(78, 12);
    var int3 = comp(78, 13);
    if ((CC_FIND(int2, 1) == 1)) {
        CC_SETTEXT(inttostring(int0, 10));
    };
    if ((CC_FIND(int3, 1) == 1)) {
        CC_SETTEXT(inttostring(int1, 10));
    };
    return;
}