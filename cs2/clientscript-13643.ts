//
function script13643(int0: number): void {
    var int1 = (IF_GETWIDTH(comp(1898, 6)) - 2);  // mtxrunefest2017:progress_bar_outer
    var int2 = 0;
    var int3 = 0;
    [int2, int3] = script13644(int0);
    if ((int2 == 0)) {
        IF_SETSIZE(1, 0, 0, 1, comp(1898, 35));  // mtxrunefest2017:progress_bar
    } else {
        IF_SETSIZE(SCALE(int1, int3, int2), 0, 0, 1, comp(1898, 35));  // mtxrunefest2017:progress_bar
    };
    var int4 = ((100 * int2) / int3);
    IF_SETTEXT(`${inttostring(int4, 10)}%`, comp(1898, 36));  // mtxrunefest2017:prog
    script13646(int0);
    return;
}