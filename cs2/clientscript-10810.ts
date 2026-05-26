//
function script10810(): void {
    var int0 = 102367262;
    var int1 = 102367251;
    var int2 = 102367252;
    var int3 = 102367273;
    var int4 = 102367271;
    var int5 = 102367250;
    CC_DELETEALL(int2);
    var int6 = -1;
    if ((varplayer_5006 != -1 as struct)) {
        int6 = script10814(varbitplayer_26176);
    };
    if ((int6 != -1)) {
        script10812(int2, int5, 23851, -1, 34, 35, "Loyalty Points", int6, varclient_4660, 1);
        if ((varclient_4660 < int6)) {
            script7794(int1, 21362);
            IF_SETHIDE(0, int4);
        } else {
            script7794(int1, 21361);
            IF_SETHIDE(1, int4);
            if ((int6 == 0)) {
                IF_SETTEXT("Claim", int3);
            } else {
                IF_SETTEXT("Buy", int3);
            };
        };
        IF_SETHIDE(0, int0);
        IF_SETONVARCTRANSMIT(callback(script10808, 4660, 1), int0);
    } else {
        IF_SETHIDE(1, int0);
        IF_SETONVARCTRANSMIT(callback(), int0);
    };
    return;
}