//
function script6249(): void {
    script19684();
    IF_SETONRESIZE(callback(script19683), comp(1667, 4));
    IF_SETHIDE(1, 109248521);
    var int0 = 109248517;
    IF_SETONTIMER(callback(script7201, -2147483645), int0);
    CC_DELETEALL(int0);
    IF_SETONTIMER(callback(script11782, 109248514), 109248518);
    IF_SETONTIMER(callback(script11782, 109248515), 109248518);
    var int1 = 0;
    while ((int1 < 3)) {
        CC_CREATE(int0, 5, int1);
        CC_SETOP(1, "Maintain Focus");
        CC_SETONOP(callback(script11149, 1, -2147483645, int1));
        CC_SETSIZE(64, 64, 0, 0);
        CC_SETHIDE(1);
        int1 = (int1 + 1);
    };
    return;
}