//
function script1790(int0: component): void {
    var int1 = SCALE(3, 5, varclient_265);
    if ((int1 <= 3)) {
        IF_SETTEXT("<col=ff0000>GET READY!</col>", int0);
        return;
    };
    var int2 = (int1 / 60);
    int1 = MODULO(int1, 60);
    if ((int1 >= 10)) {
        IF_SETTEXT(`${inttostring(int2, 10)}m ${inttostring(int1, 10)}s`, int0);
    } else {
        IF_SETTEXT(`${inttostring(int2, 10)}m 0${inttostring(int1, 10)}s`, int0);
    };
    return;
}