//
function script10809(): void {
    var int0 = 102367261;
    var int1 = 102367285;
    var int2 = 102367286;
    var int3 = 102367249;
    var int4 = 102367295;
    var int5 = 102367250;
    var int6 = 102367287;
    CC_DELETEALL(int2);
    var int7 = -1;
    var int8 = (varclient_4968 + varclient_4969);
    if ((varplayer_5006 != -1 as struct)) {
        int7 = script10813(varbitplayer_26175);
    };
    if ((int7 != -1)) {
        script10812(int2, int5, 23852, -1, 34, 35, "RuneCoins", int7, varclient_4659, 0);
        if ((varclient_4659 < int7)) {
            IF_SETHIDE(0, int5);
            if ((int8 > 0)) {
                IF_SETHIDE(0, int6);
            } else {
                IF_SETHIDE(1, int6);
            };
            IF_SETHIDE(1, int3);
        } else {
            IF_SETHIDE(1, int5);
            IF_SETHIDE(1, int6);
            IF_SETHIDE(0, int3);
            if ((int7 == 0)) {
                IF_SETTEXT("Claim", int4);
            } else {
                IF_SETTEXT("Buy", int4);
            };
        };
        script7794(int1, 21361);
        IF_SETHIDE(0, int0);
        IF_SETONVARCTRANSMIT(callback(script10807, 4659, 4968, 4969, 3), int0);
    } else {
        IF_SETHIDE(1, int0);
        IF_SETONVARCTRANSMIT(callback(), int0);
    };
    return;
}