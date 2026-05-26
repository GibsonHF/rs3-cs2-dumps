//
function script19528(): void {
    varclient_8171 = CLIENTCLOCK();
    varclient_8173 = 0;
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
    if ((script6431() == 1)) {
        int1 = 44;
        int2 = 44;
        int3 = 44;
        int4 = 39;
        int5 = 20;
        int6 = 5;
    };
    while ((int0 < 200)) {
        CC_CREATE(86048843, 5, int0);
        CC_SETSIZE(int3, int4, 0, 0);
        CC_SETOUTLINE(1);
        CC_SETONOP(callback(script19529, -2147483644, -2147483643, -2147483645));
        CC_SETDRAGGABLE(86048770, -1);
        CC_SETDRAGDEADZONE(int5);
        CC_SETDRAGDEADTIME(int6);
        CC_SETONDRAG(callback(script19541, -2147483645, -2147483643, -2147483646));
        CC_SETONDRAGCOMPLETE(callback(script19480, -2147483643, -2147483642, -2147483641));
        CC_SETONMOUSEOVER(callback(script19549, -2147483645, -2147483643, 1));
        CC_SETONMOUSELEAVE(callback(script19498, -2147483645, -2147483643));
        CC_SETONMOUSEREPEAT(callback(script19499, -2147483645, -2147483643));
        CC_SETHIDE(1);
        CC_CREATE[1](86048858, 5, int0);
        CC_SETCOLOUR[1](65535);
        CC_SETONMOUSEOVER[1](callback(script19548, -2147483643, 1));
        CC_SETONMOUSELEAVE[1](callback(script19548, -2147483643, 0));
        CC_SETSIZE[1](8, int4, 0, 0);
        int0 = (int0 + 1);
    };
    int0 = 0;
    while ((int0 <= 20)) {
        script19530(int0);
        int0 = (int0 + 1);
    };
    script19507();
    script19558();
    script7791(86048838, 86048842);
    script19538();
    script8841(101, 1);
    script9236(86048781, 86048782, 86048783, 964, 0, -1, -1, 1, "Deposit");
    if ((INV_GETOBJ(963, 0) != -1)) {
        varclient_8174 = 1;
        script19512(0);
    };
    script9554(86048771, 86048886, -1, `${varclient_8166} Storage`, 28241);
    return;
}