//
function script21227(): void {
    var int5 = 0;
    var int6 = 0;
    if ((CC_FIND(int0, int1) == 1)) {
        unk11647();
        int5 = [];
        if ((int2 == 0)) {
            int5 = script12585(int5);
        };
        stack(int3);
        stack(int4);
        stack(script42(int5));
        unk11914();
        int6 = [];
        stack(int3);
        stack(int4);
        script21235();
        int5 = [];
        CC_CHECK_SET(int5);
        if ((int6 != 3)) {
            script426("That permission could not be changed. Please try again later.", int0, int1, 1);
        };
    };
    return;
}