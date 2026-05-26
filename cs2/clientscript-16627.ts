//
function script16627(): void {
    CC_DELETEALL(82117164);
    var int0 = -1;
    while ((++int0 < 4)) {
        CC_CREATE(82117164, 5, int0);
    };
    var int1 = 0;
    while ((++int1 <= 10)) {
        script16628(int1);
    };
    IF_SETSIZE(200, 120, 0, 0, 82116640);
    IF_SETPOSITION(100, 60, 0, 0, 82116640);
    IF_SETOPCURSOR(1, 46, 31981579);
    return;
}