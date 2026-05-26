//
function script266(): void {
    script13995(60489767, -1, 28556, "", 0);
    script13995(60489768, -1, 28556, "", 0);
    script13995(60489769, -1, 28556, "", 0);
    if ((varclient_1104 == 0)) {
        IF_SETTEXT("", 60489771);
    } else {
        IF_SETTEXT("1", 60489771);
        script13995(60489767, -1, 28556, "", 1);
    };
    if ((varclient_1105 == 0)) {
        IF_SETTEXT("", 60489773);
    } else {
        IF_SETTEXT("2", 60489773);
        script13995(60489768, -1, 28556, "", 1);
    };
    if ((varclient_1106 == 0)) {
        IF_SETTEXT("", 60489775);
    } else {
        IF_SETTEXT("3", 60489775);
        script13995(60489769, -1, 28556, "", 1);
    };
    return;
}