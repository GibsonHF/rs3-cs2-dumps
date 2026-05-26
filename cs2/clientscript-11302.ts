//
function script11302(int0: number): void {
    var int1 = 0;
    while ((int1 < 35)) {
        if ((CC_FIND(105709608, (int0 + int1)) == 1)) {
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