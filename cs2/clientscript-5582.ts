//
function script5582(int0: number, int1: number, int2: number): void {
    var int3 = 240;
    if ((STRING_LENGTH(IF_GETTEXT(int1)) > 0)) {
        int3 = (PARAWIDTH(IF_GETTEXT(int1), 500, 26) + 80);
        if ((int3 > IF_GETWIDTH(int0))) {
            IF_SETSIZE(int3, 18, 0, 0, 78184452);
            IF_SETSIZE(int3, 18, 0, 0, 78184459);
            IF_SETSIZE(int3, 18, 0, 0, 78184466);
            IF_SETSIZE(int3, 18, 0, 0, 78184467);
        };
        script4481(int1);
        script4481(int2);
        IF_SETONTIMER(callback(), int0);
    };
    return;
}