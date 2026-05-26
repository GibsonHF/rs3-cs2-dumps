//
function script17562(int0: number, int1: number): void {
    CHATPHRASE_GETDYNAMICCOMMANDCOUNT(0, 217);
    CC_CREATE(78446593, 27, 0);
    CC_SETSIZE(0, 0, 1, 1);
    if ((int1 == 1)) {
        IF_SETONOP(callback(script17564), 78446594);
        IF_SETHIDE(0, 78446594);
    } else {
        IF_CLEAROPS(78446594);
        IF_SETHIDE(1, 78446594);
    };
    var int2 = 10;
    var int3 = 10;
    var int4 = 0;
    var int5 = 0;
    if ((script6431() == 1)) {
        stack(11997);
        stack(78446595);
        IF_SETGRAPHIC();
        [int2, int3, int4, int5] = script2956();
    } else {
        stack(10261);
        stack(78446595);
        IF_SETGRAPHIC();
    };
    IF_SETSIZE(42, 42, 0, 0, 78446595);
    IF_SETPOSITION(int2, int3, 0, 0, 78446594);
    script8841(100, 1);
    return;
}