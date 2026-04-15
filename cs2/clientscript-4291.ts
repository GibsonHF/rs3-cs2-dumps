//
function script4291(): void {
    IF_SETONCLANSETTINGSTRANSMIT(callback(script4300), 71827479);
    IF_SETONVARCTRANSMIT(callback(script4300, 1516, 1), 71827479);
    IF_SETONTIMER(callback(script4319, 0, 1), 71827485);
    IF_SETONCLANSETTINGSTRANSMIT(callback(script4294), 71827485);
    IF_SETONCLANCHANNELTRANSMIT(callback(script4294), 71827485);
    IF_SETONVARCTRANSMIT(callback(script118, 1500, 1501, 1502, 1503, 4), 71827485);
    IF_SETONVARCSTRTRANSMIT(callback(script118, 2521, 1), 71827485);
    script4311();
    script4328(71827597);
    IF_SETONCLANSETTINGSTRANSMIT(callback(script5226), 71827597);
    IF_SETSIZE(IF_GETWIDTH(71827485), 115, 0, 0, 71827485);
    IF_SETHIDE(1, 71828065);
    var int0 = 71827478;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = (IF_GETWIDTH(71827477) / 2);
    var int5 = 23;
    var int6 = script10495(12);
    var int7 = script10495(9);
    while ((int1 < 500)) {
        if ((MODULO(int1, 2) != 0)) {
            int2 = int4;
        } else {
            int2 = 0;
        };
        int3 = ((int1 / 2) * int5);
        CC_CREATE(int0, 3, int1);
        CC_SETPOSITION(int2, int3, 0, 0);
        CC_SETSIZE(8192, int5, 2, 0);
        CC_SETFILL(1);
        if ((MODULO((int1 / 2), 2) != 0)) {
            CC_SETCOLOUR(int6);
        } else {
            CC_SETCOLOUR(int7);
        };
        int1 = (int1 + 1);
    };
    return;
}