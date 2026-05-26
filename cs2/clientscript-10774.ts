//
function script10774(): void {
    var int0 = IF_GETWIDTH(comp(1560, 6));
    var int1 = IF_GETHEIGHT(comp(1560, 6));
    var string0 = "";
    if ((int0 < (2 * 224))) {
        IF_SETSIZE(0, 28, 1, 1, comp(1560, 17));
        IF_SETSIZE(0, 28, 1, 1, comp(1560, 18));
        IF_SETSIZE(0, 28, 1, 1, comp(1560, 19));
        IF_SETSIZE(0, 28, 1, 1, comp(1560, 20));
        IF_SETSIZE(0, 28, 1, 1, comp(1560, 22));
        IF_SETSIZE(0, 28, 1, 0, comp(1560, 9));
        IF_SETSIZE(0, (28 - 1), 1, 1, comp(1560, 7));
        IF_SETHIDE(false, comp(1560, 2));
        IF_SETHIDE(false, comp(1560, 3));
        IF_SETHIDE(false, comp(1560, 1));
        IF_SETHIDE(false, comp(1560, 10));
        IF_SETHIDE(true, comp(1560, 12));
        IF_SETHIDE(true, comp(1560, 8));
        varclient_4665 = 0;
        string0 = "Expand";
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), 102236254);
    } else {
        IF_SETSIZE(224, 28, 0, 1, comp(1560, 17));
        IF_SETSIZE(224, 28, 1, 1, comp(1560, 18));
        IF_SETSIZE(224, 28, 1, 1, comp(1560, 19));
        IF_SETSIZE(224, 28, 1, 1, comp(1560, 20));
        IF_SETSIZE(224, 28, 1, 1, comp(1560, 22));
        IF_SETSIZE(224, 28, 0, 0, comp(1560, 9));
        IF_SETSIZE(224, (28 - 1), 0, 1, comp(1560, 7));
        IF_SETHIDE(true, comp(1560, 2));
        IF_SETHIDE(true, comp(1560, 3));
        IF_SETHIDE(true, comp(1560, 1));
        IF_SETHIDE(true, comp(1560, 10));
        IF_SETSIZE(224, 28, 1, 0, comp(1560, 12));
        IF_SETHIDE(false, comp(1560, 12));
        IF_SETSIZE(224, (28 - 1), 1, 1, comp(1560, 8));
        IF_SETHIDE(false, comp(1560, 8));
        varclient_4665 = 1;
        string0 = "Collapse";
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), 102236254);
    };
    script10776(varclient_4666);
    return;
}