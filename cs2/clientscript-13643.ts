//
function script13643(int0: number): void {
    var int1 = (IF_GETWIDTH(124387334) - 2);
    var int2 = 0;
    var int3 = 0;
    [int2, int3] = script13644(int0);
    if ((int2 == 0)) {
        IF_SETSIZE(1, 0, 0, 1, 124387363);
    } else {
        IF_SETSIZE(SCALE(int1, int3, int2), 0, 0, 1, 124387363);
    };
    var int4 = ((100 * int2) / int3);
    IF_SETTEXT(`${inttostring(int4, 10)}%`, 124387364);
    script13646(int0);
    return;
}