//
function script11124(): void {
    var int0 = comp(1600, 17);
    IF_SETONTIMER(callback(script11129, -2147483645), int0);
    CC_DELETEALL(int0);
    var int1 = 0;
    while ((int1 < 3)) {
        CC_CREATE(int0, 5, int1);
        CC_SETOP(1, "Remove Distraction");
        CC_SETONOP(callback(script11149, 1, -2147483645, int1));
        CC_SETSIZE(64, 64, 0, 0);
        CC_SETHIDE(1);
        int1 = (int1 + 1);
    };
    return;
}