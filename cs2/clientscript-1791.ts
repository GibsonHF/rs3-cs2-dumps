//
function script1791(int0: component): void {
    var int1 = (varclient_270 / 60);
    var int2 = MODULO(varclient_270, 60);
    if ((int2 >= 10)) {
        IF_SETTEXT(`${inttostring(int1, 10)}h ${inttostring(int2, 10)}m`, int0);
    } else {
        IF_SETTEXT(`${inttostring(int1, 10)}h 0${inttostring(int2, 10)}m`, int0);
    };
    return;
}