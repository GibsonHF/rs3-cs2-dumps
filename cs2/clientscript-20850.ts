//
function script20850(int0: number): void {
    CC_DELETEALL(comp(1494, 17));
    var int1 = ((40 + (int0 * 12)) + ((int0 - 1) * 4));
    IF_SETSIZE(int1, 22, 0, 0, comp(1494, 13));
    var int2 = -1;
    var int3 = -1;
    int2 = (int2 + 1);
    while ((int2 < int0)) {
        if ((int2 == 0)) {
            int3 = 17038;
        } else {
            int3 = 17039;
        };
        script2994(97910801, int2, 0, 0, 1, 1, 12, 12, 0, 0, int3);
        CC_SETONVARTRANSMIT(callback(script20851, -2147483645, -2147483643, 13472, 1));
        CC_SETOP(1, "Select");
    };
    return;
}