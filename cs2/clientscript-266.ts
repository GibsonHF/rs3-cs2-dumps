//
function script266(): void {
    script13995(comp(923, 39), comp(-1, 65535), 28556 as struct, "", 0);
    script13995(comp(923, 40), comp(-1, 65535), 28556 as struct, "", 0);
    script13995(comp(923, 41), comp(-1, 65535), 28556 as struct, "", 0);
    if ((varclient_1104 == 0)) {
        IF_SETTEXT("", comp(923, 43));
    } else {
        IF_SETTEXT("1", comp(923, 43));
        script13995(comp(923, 39), comp(-1, 65535), 28556 as struct, "", 1);
    };
    if ((varclient_1105 == 0)) {
        IF_SETTEXT("", comp(923, 45));
    } else {
        IF_SETTEXT("2", comp(923, 45));
        script13995(comp(923, 40), comp(-1, 65535), 28556 as struct, "", 1);
    };
    if ((varclient_1106 == 0)) {
        IF_SETTEXT("", comp(923, 47));
    } else {
        IF_SETTEXT("3", comp(923, 47));
        script13995(comp(923, 41), comp(-1, 65535), 28556 as struct, "", 1);
    };
    return;
}