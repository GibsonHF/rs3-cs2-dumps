//
function script10774(): void {
    var int0 = IF_GETWIDTH(102236166);
    var int1 = IF_GETHEIGHT(102236166);
    var string0 = "";
    if ((int0 < (2 * 224))) {
        IF_SETSIZE(0, 28, 1, 1, 102236177);
        IF_SETSIZE(0, 28, 1, 1, 102236178);
        IF_SETSIZE(0, 28, 1, 1, 102236179);
        IF_SETSIZE(0, 28, 1, 1, 102236180);
        IF_SETSIZE(0, 28, 1, 1, 102236182);
        IF_SETSIZE(0, 28, 1, 0, 102236169);
        IF_SETSIZE(0, (28 - 1), 1, 1, 102236167);
        IF_SETHIDE(0, 102236162);
        IF_SETHIDE(0, 102236163);
        IF_SETHIDE(0, 102236161);
        IF_SETHIDE(0, 102236170);
        IF_SETHIDE(1, 102236172);
        IF_SETHIDE(1, 102236168);
        varclient_4665 = 0;
        string0 = "Expand";
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), 102236254);
    } else {
        IF_SETSIZE(224, 28, 0, 1, 102236177);
        IF_SETSIZE(224, 28, 1, 1, 102236178);
        IF_SETSIZE(224, 28, 1, 1, 102236179);
        IF_SETSIZE(224, 28, 1, 1, 102236180);
        IF_SETSIZE(224, 28, 1, 1, 102236182);
        IF_SETSIZE(224, 28, 0, 0, 102236169);
        IF_SETSIZE(224, (28 - 1), 0, 1, 102236167);
        IF_SETHIDE(1, 102236162);
        IF_SETHIDE(1, 102236163);
        IF_SETHIDE(1, 102236161);
        IF_SETHIDE(1, 102236170);
        IF_SETSIZE(224, 28, 1, 0, 102236172);
        IF_SETHIDE(0, 102236172);
        IF_SETSIZE(224, (28 - 1), 1, 1, 102236168);
        IF_SETHIDE(0, 102236168);
        varclient_4665 = 1;
        string0 = "Collapse";
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), 102236254);
    };
    script10776(varclient_4666);
    return;
}