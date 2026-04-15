//
function script10511(int0: int, int1: int, int2: int): void {
    IF_SETTEXT(`${script15116(varplayer_10712, 3)} / ${script15116(int2, 3)}`, comp(1080, 18));
    IF_SETTEXT(`${script15116(int0, 3)} / ${script15116(int1, 3)}`, comp(1080, 20));
    var int3 = MIN(SCALE(int0, int1, 100), 100);
    IF_SETSIZE(MAX(1, SCALE(int3, 100, 16384)), 13, 2, 0, comp(1080, 14));
    return;
}