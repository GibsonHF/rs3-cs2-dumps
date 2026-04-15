//
function script9704(int0: unknown_int): void {
    if ((int0 == 0)) {
        varclient_3997 = 0;
    } else {
        varclient_3997 = script5233(10);
    };
    var int1 = 0;
    var int2 = varclient_4139;
    while ((++int1 <= 10)) {
        script4767(int1, varclient_3997);
        IF_SETPOSITION(int2, 0, 0, 1, script5819(int1));
        int2 = (int2 + 90);
        varclient_3997 = (varclient_3997 + 1);
        if ((varclient_3997 >= script16172())) {
            varclient_3997 = 0;
        };
    };
    if ((script13749() == true)) {
        IF_SETONMOUSELEAVE(callback(), comp(1253, 171));
        IF_SETDRAGGABLE(82116779, -1, 82116814);
        IF_SETHIDE(0, 82116814);
    } else {
        IF_SETHIDE(true, comp(1253, 206));
        script5821();
    };
    return;
}