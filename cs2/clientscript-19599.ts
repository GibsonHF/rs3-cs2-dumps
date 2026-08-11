//
function script19599(): void {
    var int0 = 0;
    var int1 = varplayer_11958;
    var int2 = -1;
    var int3 = 0;
    var string0 = "Withdraw";
    var string1 = script19536();
    while ((int1 < 200)) {
        if (((CC_FIND(comp(1313, 75), int1) == 1) && (CC_GETINVOBJECT() == 48447 as obj))) {  // group_ironman_storage:clan_inv
            [int0, int2, int3] = script19600(MAX(int0, (int1 + 1)));
            if ((CC_FIND(comp(1313, 75), int1) == 1)) {  // group_ironman_storage:clan_inv
                script19540(string0, string1, int2, int3);
            };
            if ((CC_FIND(comp(1313, 75), int0) == 1)) {  // group_ironman_storage:clan_inv
                script19540(string0, string1, 48447, int3);
            };
        };
        int1 = (int1 + 1);
    };
    return;
}