//
function script17136(int0: component): void {
    IF_SETPOSITION(30, 20, 2, 1, int0);
    IF_SETPOSITION(118, 33, 0, 2, comp(1288, 108));
    IF_SETTEXT(`${script19175(32986 as struct)} has reached the maximum possible combat level of ${inttostring(138, 10)}.`, comp(1288, 96));
    IF_SETHIDE(false, comp(1288, 107));
    return;
}