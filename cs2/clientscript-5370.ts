//
function script5370(int0: number, int1: number, string0: string, string1: string): void {
    if ((int0 == 1)) {
        IF_SETHIDE(1, 62324750);
    } else {
        IF_SETHIDE(0, 62324750);
    };
    if ((int1 == 1)) {
        IF_SETHIDE(1, 62324738);
    } else {
        IF_SETHIDE(0, 62324738);
    };
    IF_SETTEXT(string0, 62324784);
    IF_SETTEXT(string1, 62324787);
    var int2 = STRINGWIDTH(string1, 28);
    IF_SETSIZE((int2 + 16), IF_GETHEIGHT(62324737), 0, 0, 62324737);
    int2 = STRINGWIDTH(string0, 28);
    IF_SETSIZE((int2 + 16), IF_GETHEIGHT(62324739), 0, 0, 62324739);
    int2 = MAX(IF_GETWIDTH(62324737), IF_GETWIDTH(62324739));
    if ((int1 == 0)) {
        int2 = MAX(int2, IF_GETWIDTH(62324738));
    };
    if ((int0 == 0)) {
        int2 = MAX(int2, IF_GETWIDTH(62324750));
    };
    IF_SETSIZE((int2 + 48), IF_GETHEIGHT(62324785), 0, 0, 62324785);
    var int3 = (IF_GETHEIGHT(62324737) + IF_GETHEIGHT(62324739));
    if ((int1 == 0)) {
        int3 = (int3 + IF_GETHEIGHT(62324738));
    };
    IF_SETSIZE(IF_GETWIDTH(62324785), int3, 0, 0, 62324785);
    if ((int0 == 0)) {
        IF_SETPOSITION(0, (7 + IF_GETHEIGHT(62324785)), 1, 0, 62324750);
    };
    return;
}