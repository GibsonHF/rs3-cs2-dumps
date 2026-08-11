//
function script1550(int0: number): void {
    if ((IF_GETX(int0) < (IF_GETWIDTH(comp(306, 1)) - 1))) {  // easter09_nuts:content
        if ((IF_GETX(int0) == (140 + IF_GETWIDTH(int0)))) {
            IF_SETONTIMER(callback(script2321, 20054025), comp(306, 22));  // easter09_nuts:control3
        };
        IF_SETPOSITION((1 + IF_GETX(int0)), IF_GETY(int0), 0, 0, int0);
    } else {
        script2056();
    };
    return;
}