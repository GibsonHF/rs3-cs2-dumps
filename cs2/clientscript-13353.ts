//
function script13353(): void {
    varclient_6681 = CLIENTCLOCK();
    varclient_6683 = 0;
    if ((varbitplayer_45189 == 0)) {
        varbitplayer_45189 = 2;
    };
    var int0 = 0;
    var int1 = 40;
    var int2 = 36;
    var int3 = 36;
    var int4 = 32;
    var int5 = 10;
    var int6 = 10;
    var int7 = 18266;
    var int8 = 0;
    if ((script6431() == true)) {
        int1 = 44;
        int2 = 44;
        int3 = 44;
        int4 = 39;
        int5 = 20;
        int6 = 5;
    };
    while ((int0 < 1820)) {
        CC_CREATE(comp(517, 201), 5, int0);
        CC_SETSIZE(int3, int4, 0, 0);
        CC_SETOUTLINE(1);
        CC_SETONOP(callback(script14073, -2147483644, -2147483643, -2147483645));
        CC_SETDRAGGABLE(33882112, -1);
        CC_SETDRAGDEADZONE(int5);
        CC_SETDRAGDEADTIME(int6);
        CC_SETONDRAG(callback(script13799, -2147483645, -2147483643, -2147483646));
        CC_SETONDRAGCOMPLETE(callback(script8917, -2147483643, -2147483642, -2147483641));
        CC_SETONMOUSEOVER(callback(script13870, -2147483645, -2147483643, 1));
        CC_SETONMOUSELEAVE(callback(script9300, -2147483645, -2147483643));
        CC_SETONMOUSEREPEAT(callback(script9301, -2147483645, -2147483643));
        CC_SETHIDE(1);
        CC_CREATE[1](33882329, 5, int0);
        CC_SETCOLOUR[1](65535);
        CC_SETONMOUSEOVER[1](callback(script13866, -2147483643, 1));
        CC_SETONMOUSELEAVE[1](callback(script13866, -2147483643, 0));
        CC_SETSIZE[1](8, int4, 0, 0);
        int0 = (int0 + 1);
    };
    IF_SETPARAM_INT(3843, -1, comp(517, 168));
    script10017(comp(517, 251), -1, -1, 6, "null", comp(517, 253));
    int0 = 0;
    while ((int0 <= 15)) {
        CC_CREATE(comp(517, 205), 4, int0);
        CC_SETONMOUSEOVER(callback(script13870, -2147483645, -2147483643, 1));
        CC_SETONMOUSELEAVE(callback(script13870, -2147483645, -2147483643, 0));
        CC_CREATE(33882318, 4, int0);
        CC_SETONMOUSEOVER(callback(script13870, -2147483645, -2147483643, 1));
        CC_SETONMOUSELEAVE(callback(script13870, -2147483645, -2147483643, 0));
        CC_CREATE(33882283, 4, int0);
        CC_CREATE(33882281, 4, int0);
        CC_CREATE(33882282, 5, int0);
        CC_CREATE(33882312, 5, int0);
        CC_SETSIZE(int1, int2, 0, 0);
        CC_SETGRAPHIC(int7);
        CC_SETTRANS(int8);
        script13571(int0);
        int0 = (int0 + 1);
    };
    while ((int0 <= 20)) {
        script13571(int0);
        int0 = (int0 + 1);
    };
    script9313();
    script592();
    script13908();
    script7791(comp(517, 195), comp(517, 199));
    script13770();
    script8841(24, 1);
    script9236(comp(517, 14), comp(517, 15), comp(517, 16), 93 as inv, 0, -1, -1, 1, "Deposit");
    script9236(comp(517, 34), comp(517, 35), comp(517, 36), 530 as inv, 0, 0, (varclient_6709 - 1), 1, "Deposit");
    if ((INV_GETOBJ(95 as inv, 0) != -1 as obj)) {
        varbitclient_45227 = 1;
        script9317(0);
    };
    return;
}