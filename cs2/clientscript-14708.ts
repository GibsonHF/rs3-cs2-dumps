//
function script14708(int0: number, int1: number, string0: string, string1: string, string2: string): void {
    if (((script13749() == 1) && (IF_GETHIDE(18087963) == 0))) {
        IF_SETHIDE(1, 33554432);
        return;
    };
    IF_SETHIDE(0, 33554432);
    var int2 = 0;
    if ((STRING_LENGTH(string1) > 0)) {
        int2 = PARAHEIGHT(string1, 300, 29);
    };
    IF_SETSIZE(300, (92 + (int2 * 20)), 0, 0, 33554432);
    if ((int0 != -1)) {
        stack(int0);
        stack(33554439);
        IF_SETGRAPHIC();
    };
    if ((int1 != -1)) {
        IF_SETOBJECT_NONUM(int1, 1, 33554440);
        if ((int0 == -1)) {
            script13959(33554439, 11954, 0);
        };
    };
    IF_SETTEXT(string0, 33554436);
    IF_SETTEXT(string1, 33554437);
    IF_SETTEXT(string2, 33554443);
    IF_SETONTIMER(callback(script14709, CLIENTCLOCK()), 33554434);
    return;
}