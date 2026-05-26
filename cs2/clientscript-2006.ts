//
function script2006(): void {
    var int0 = IF_GETX(59375770);
    var int1 = 0;
    if ((IF_FIND(59375770) == 1)) {
        int1 = cc_getparam(4520);
    };
    if (((int0 <= (0 - IF_GETWIDTH(53411840))) || ((int0 < 0) && (int1 == 1)))) {
        IF_SETPARAM_INT(4520, 0, 59375770);
        IF_SETONTIMER(callback(script15621), 59375621);
        IF_SETHIDE(0, 59375768);
    } else {
        IF_SETPARAM_INT(4520, 1, 59375770);
        IF_SETONTIMER(callback(script15623), 59375621);
    };
    return;
}