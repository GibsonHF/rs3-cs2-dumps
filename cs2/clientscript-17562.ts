//
function script17562(int0: unknown_int, int1: unknown_int): void {
    CHATPHRASE_GETDYNAMICCOMMANDCOUNT(0, 217);
    CC_CREATE(comp(1197, 1), 27, 0);
    CC_SETSIZE(0, 0, 1, 1);
    if ((int1 == 1)) {
        IF_SETONOP(callback(script17564), comp(1197, 2));
        IF_SETHIDE(0, 78446594);
    } else {
        IF_CLEAROPS(comp(1197, 2));
        IF_SETHIDE(true, comp(1197, 2));
    };
    var int2 = 10;
    var int3 = 10;
    var int4 = 0;
    var int5 = 0;
    if ((script6431() == true)) {
        stack(11997);
        stack(78446595);
        IF_SETGRAPHIC();
        [int2, int3, int4, int5] = script2956();
    } else {
        stack(10261);
        stack(78446595);
        IF_SETGRAPHIC();
    };
    IF_SETSIZE(42, 42, 0, 0, comp(1197, 3));
    IF_SETPOSITION(int2, int3, 0, 0, comp(1197, 2));
    script8841(100, 1);
    return;
}