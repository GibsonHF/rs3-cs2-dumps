//
function script5464(): void {
    if ((varclient_1671 >= 48)) {
        IF_SETSIZE(IF_GETWIDTH(comp(1159, 23)), 105, 0, 0, comp(1159, 23));
        IF_SETSIZE(IF_GETWIDTH(comp(1159, 31)), 72, 0, 0, comp(1159, 31));
    } else if ((varclient_1671 >= 24)) {
        IF_SETSIZE(IF_GETWIDTH(comp(1159, 23)), 79, 0, 0, comp(1159, 23));
        IF_SETSIZE(IF_GETWIDTH(comp(1159, 31)), 48, 0, 0, comp(1159, 31));
    } else if ((varclient_1670 > 0)) {
        IF_SETSIZE(IF_GETWIDTH(comp(1159, 23)), 55, 0, 0, comp(1159, 23));
        IF_SETSIZE(IF_GETWIDTH(comp(1159, 31)), 24, 0, 0, comp(1159, 31));
    } else {
        IF_SETSIZE(IF_GETWIDTH(comp(1159, 23)), 37, 0, 0, comp(1159, 23));
        IF_SETSIZE(IF_GETWIDTH(comp(1159, 31)), 1, 0, 0, comp(1159, 31));
    };
    return;
}