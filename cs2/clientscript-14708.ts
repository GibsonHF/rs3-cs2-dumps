//
function script14708(int0: number, int1: number, string0: string, string1: string, string2: string): void {
    if (((script13749() == 1) && (IF_GETHIDE(comp(276, 27)) == false))) {
        IF_SETHIDE(true, comp(512, 0));
        return;
    };
    IF_SETHIDE(false, comp(512, 0));
    var int2 = 0;
    if ((STRING_LENGTH(string1) > 0)) {
        int2 = PARAHEIGHT(string1, 300, 29 as fontmetrics);
    };
    IF_SETSIZE(300, (92 + (int2 * 20)), 0, 0, comp(512, 0));
    if ((int0 != -1 as graphic)) {
        IF_SETGRAPHIC(int0, comp(512, 7));
    };
    if ((int1 != -1 as obj)) {
        IF_SETOBJECT_NONUM(int1, 1, comp(512, 8));
        if ((int0 == -1 as graphic)) {
            script13959(33554439, 11954, 0);
        };
    };
    IF_SETTEXT(string0, comp(512, 4));
    IF_SETTEXT(string1, comp(512, 5));
    IF_SETTEXT(string2, comp(512, 11));
    IF_SETONTIMER(callback(script14709, CLIENTCLOCK()), comp(512, 2));
    return;
}