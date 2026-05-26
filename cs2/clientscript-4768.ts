//
function script4768(): void {
    var int0 = 1;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    if ((CLANPROFILE_FIND() == 1)) {
        int1 = (varclan_2724 / 100);
        int2 = (varclan_2725 / 100);
        int3 = (varclan_2728 / 100);
        int4 = (varclan_2732 / 100);
        int5 = (varclan_2731 / 100);
        int6 = (varclan_2730 / 100);
        int7 = (varclan_2733 / 100);
        CC_DELETEALL(comp(1115, 67));
        CC_DELETEALL(comp(1115, 65));
        CC_DELETEALL(comp(1115, 63));
        [int0, int1, int2, int3, int4, int5, int6, int7] = script4769(1, int0, int1, int2, int3, int4, int5, int6, int7);
        [int0, int1, int2, int3, int4, int5, int6, int7] = script4769(2, int0, int1, int2, int3, int4, int5, int6, int7);
        [int0, int1, int2, int3, int4, int5, int6, int7] = script4769(3, int0, int1, int2, int3, int4, int5, int6, int7);
    };
    return;
}