//
function script1956(int0: component, int1: component, int2: int): void {
    IF_SETTEXT(`${inttostring(int2, 10)}/30`, int0);
    IF_SETSIZE(SCALE(202, 30, int2), IF_GETHEIGHT(int1), 0, 0, int1);
    return;
}