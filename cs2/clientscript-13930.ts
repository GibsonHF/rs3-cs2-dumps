//
function script13930(int0: int): void {
    script13925();
    var int1 = 0;
    while ((int1 < 25)) {
        if ((CC_FIND(comp(1931, 17), int1) == 1)) {
            if ((TESTBIT(int0, int1) == 1)) {
                CC_SETONTIMER(callback(script13931, -2147483645, -2147483643, 40, 2));
            } else {
                CC_SETONTIMER(callback());
            };
        };
        int1 = (int1 + 1);
    };
    return;
}