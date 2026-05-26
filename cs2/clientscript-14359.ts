//
function script14359(): void {
    var int0 = 0;
    var int1 = varplayer_8970;
    var int2 = -1;
    var int3 = 0;
    var string0 = script13591();
    var string1 = script13685();
    while ((int1 < 1820)) {
        if (((CC_FIND(33882313, int1) == 1) && (CC_GETINVOBJECT() == 48447))) {
            [int0, int2, int3] = script14360(MAX(int0, (int1 + 1)));
            if ((CC_FIND(33882313, int1) == 1)) {
                script13798(string0, string1, int2, int3);
            };
            if ((CC_FIND(33882313, int0) == 1)) {
                script13798(string0, string1, 48447, int3);
            };
        };
        int1 = (int1 + 1);
    };
    return;
}