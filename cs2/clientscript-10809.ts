//
function script10809(): void {
    var int0 = comp(1562, 29);
    var int1 = comp(1562, 53);
    var int2 = comp(1562, 54);
    var int3 = comp(1562, 17);
    var int4 = comp(1562, 63);
    var int5 = comp(1562, 18);
    var int6 = comp(1562, 55);
    CC_DELETEALL(int2);
    var int7 = -1;
    var int8 = (varclient_4968 + varclient_4969);
    if ((varplayer_5006 != -1 as struct)) {
        int7 = script10813(varbitplayer_26175);
    };
    if ((int7 != -1)) {
        script10812(int2, int5, 23852 as graphic, -1 as graphic, 34, 35, "RuneCoins", int7, varclient_4659, 0);
        if ((varclient_4659 < int7)) {
            IF_SETHIDE(false, int5);
            if ((int8 > 0)) {
                IF_SETHIDE(false, int6);
            } else {
                IF_SETHIDE(true, int6);
            };
            IF_SETHIDE(true, int3);
        } else {
            IF_SETHIDE(true, int5);
            IF_SETHIDE(true, int6);
            IF_SETHIDE(false, int3);
            if ((int7 == 0)) {
                IF_SETTEXT("Claim", int4);
            } else {
                IF_SETTEXT("Buy", int4);
            };
        };
        script7794(int1, 21361 as struct);
        IF_SETHIDE(false, int0);
        IF_SETONVARCTRANSMIT(callback(script10807, 4659, 4968, 4969, 3), int0);
    } else {
        IF_SETHIDE(true, int0);
        IF_SETONVARCTRANSMIT(callback(), int0);
    };
    return;
}