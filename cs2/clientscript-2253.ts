//
function script2253(): void {
    IF_SETTEXT(varclient_2381, comp(945, 18));
    if ((varclient_1233 > 200)) {
        varclient_1233 = 200;
    };
    var int0 = varclient_1233;
    int0 = (((int0 * 37) / 40) + 14);
    IF_SETSIZE(int0, 18, 1, 0, comp(945, 20));
    IF_SETPOSITION((int0 + 1), 15, 0, 0, comp(945, 21));
    return;
}