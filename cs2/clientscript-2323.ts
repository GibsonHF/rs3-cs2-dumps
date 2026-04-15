//
function script2323(int0: component): void {
    if ((IF_GETX(int0) < (IF_GETWIDTH(comp(306, 1)) - 1))) {
        if ((IF_GETX(int0) == (140 + IF_GETWIDTH(int0)))) {
            IF_SETONTIMER(callback(script399, 20054023), comp(306, 20));
        };
        IF_SETPOSITION((1 + IF_GETX(int0)), IF_GETY(int0), 0, 0, int0);
    } else {
        script2324();
    };
    return;
}