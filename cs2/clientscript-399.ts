//
function script399(int0: number): void {
    if (((IF_GETX(int0) < (IF_GETWIDTH(20054017) - 1)) || ((IF_GETY(int0) - IF_GETHEIGHT(int0)) > 110))) {
        if ((IF_GETX(int0) == (140 + IF_GETWIDTH(int0)))) {
            IF_SETONTIMER(callback(script1550, 20054024), 20054037);
        };
        IF_SETPOSITION((1 + IF_GETX(int0)), IF_GETY(int0), 0, 0, int0);
    } else {
        script1411();
    };
    return;
}