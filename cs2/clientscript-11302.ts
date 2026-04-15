//
function script11302(int0: int): void {
    var int1 = 0;
    while ((int1 < 35)) {
        if ((CC_FIND(comp(1613, 40), (int0 + int1)) == 1)) {
            CC_CLEAROPS();
            CC_SETTRANS(255);
            if ((++int1 == 4)) {
                int1 = 16;
            };
            if ((int1 == 19)) {
                int1 = 32;
            };
            if (((int0 + int1) > 255)) {
                int1 = 35;
            };
        } else {
            int1 = 35;
        };
    };
    return;
}