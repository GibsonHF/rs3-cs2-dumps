//
function script14708(int0: unknown_int, int1: obj, string0: string, string1: string, string2: string): void {
    if (((script13749() == true) && (IF_GETHIDE(comp(276, 27)) == false))) {
        IF_SETHIDE(true, comp(512, 0));
        return;
    };
    IF_SETHIDE(false, comp(512, 0));
    var int2 = 0;
    if ((STRING_LENGTH(string1) > 0)) {
        int2 = PARAHEIGHT(string1, 300, 29 as fontmetrics);
    };
    IF_SETSIZE(300, (92 + (int2 * 20)), 0, 0, comp(512, 0));
    if ((int0 != -1)) {
        stack(int0);
        stack(33554439);
        IF_SETGRAPHIC();
    };
    if ((int1 != -1 as obj)) {
        IF_SETOBJECT_NONUM(int1, 1, comp(512, 8));
        if ((int0 == -1)) {
            script13959(comp(512, 7), 11954 as struct, false);
        };
    };
    IF_SETTEXT(string0, comp(512, 4));
    IF_SETTEXT(string1, comp(512, 5));
    IF_SETTEXT(string2, comp(512, 11));
    IF_SETONTIMER(callback(script14709, CLIENTCLOCK()), comp(512, 2));
    return;
}