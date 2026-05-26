//
function script6881(): void {
    var int0 = (ENUM_GETOUTPUTCOUNT(2345) - 1);
    var int1 = 1;
    var int2 = 2;
    if ((varbitplayer_687 != 0)) {
        int1 = 2;
        int2 = 1;
    };
    while ((int0 >= 0)) {
        if ((CC_FIND(85918200, (int0 * 2)) == 1)) {
            CC_CLEAROPS();
            CC_SETOP(int1, "Select-primary-colour");
            if ((varbitplayer_688 == 1)) {
                CC_SETOP(int2, "Select-secondary-colour");
            };
        };
        int0 = (int0 - 1);
    };
    return;
}