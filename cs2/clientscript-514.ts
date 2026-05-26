//
function script514(): void {
    var int0 = 0;
    var int1 = 0;
    if ((GETWINDOWMODE() >= 2)) {
        int0 = IF_GETWIDTH(96797495);
        int1 = IF_GETHEIGHT(96797495);
        if ((varclient_51 < int0)) {
            varclient_51 = (varclient_51 + 15);
            IF_SETSIZE(varclient_51, int1, 0, 0, 39976961);
        };
    } else if ((varclient_51 < 512)) {
        varclient_51 = (varclient_51 + 15);
        IF_SETSIZE(varclient_51, 334, 0, 0, 39976961);
    };
    return;
}