//
function script16627(): void {
    CC_DELETEALL(comp(1253, 556));
    var int0 = -1;
    while ((++int0 < 4)) {
        CC_CREATE(comp(1253, 556), 5, int0);
    };
    var int1 = 0;
    while ((++int1 <= 10)) {
        script16628(int1);
    };
    IF_SETSIZE(200, 120, 0, 0, comp(1253, 32));
    IF_SETPOSITION(100, 60, 0, 0, comp(1253, 32));
    IF_SETOPCURSOR(1, 46 as cursor, comp(488, 11));
    return;
}