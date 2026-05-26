//
function script266(): void {
    script13995(60489767, -1, 28556, "", 0);
    script13995(60489768, -1, 28556, "", 0);
    script13995(60489769, -1, 28556, "", 0);
    if ((varclient_1104 == 0)) {
        IF_SETTEXT("", comp(923, 43));
    } else {
        IF_SETTEXT("1", comp(923, 43));
        script13995(60489767, -1, 28556, "", 1);
    };
    if ((varclient_1105 == 0)) {
        IF_SETTEXT("", comp(923, 45));
    } else {
        IF_SETTEXT("2", comp(923, 45));
        script13995(60489768, -1, 28556, "", 1);
    };
    if ((varclient_1106 == 0)) {
        IF_SETTEXT("", comp(923, 47));
    } else {
        IF_SETTEXT("3", comp(923, 47));
        script13995(60489769, -1, 28556, "", 1);
    };
    return;
}