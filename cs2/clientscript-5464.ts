//
function script5464(): void {
    if ((varclient_1671 >= 48)) {
        IF_SETSIZE(IF_GETWIDTH(75956247), 105, 0, 0, 75956247);
        IF_SETSIZE(IF_GETWIDTH(75956255), 72, 0, 0, 75956255);
    } else if ((varclient_1671 >= 24)) {
        IF_SETSIZE(IF_GETWIDTH(75956247), 79, 0, 0, 75956247);
        IF_SETSIZE(IF_GETWIDTH(75956255), 48, 0, 0, 75956255);
    } else if ((varclient_1670 > 0)) {
        IF_SETSIZE(IF_GETWIDTH(75956247), 55, 0, 0, 75956247);
        IF_SETSIZE(IF_GETWIDTH(75956255), 24, 0, 0, 75956255);
    } else {
        IF_SETSIZE(IF_GETWIDTH(75956247), 37, 0, 0, 75956247);
        IF_SETSIZE(IF_GETWIDTH(75956255), 1, 0, 0, 75956255);
    };
    return;
}