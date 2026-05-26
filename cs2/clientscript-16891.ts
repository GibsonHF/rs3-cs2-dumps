//
function script16891(): void {
    var int0 = MIN(960, IF_GETWIDTH(69861376));
    var int1 = MIN(540, IF_GETHEIGHT(69861376));
    IF_SETSIZE(int0, int1, 0, 0, 69861380);
    script16892();
    script16894();
    script16895();
    IF_SETONRESIZE(callback(script16891), 69861379);
    return;
}