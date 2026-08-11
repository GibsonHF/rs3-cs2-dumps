//
function script10809(): void {
    var int0 = comp(1562, 29);  // mtxmgt_purchase:runecoins_layer
    var int1 = 102367285;
    var int2 = comp(1562, 54);  // mtxmgt_purchase:runecoins_content_layer
    var int3 = comp(1562, 17);  // mtxmgt_purchase:runecoins_button_layer
    var int4 = comp(1562, 63);  // mtxmgt_purchase:runecoins_button_text
    var int5 = comp(1562, 18);  // mtxmgt_purchase:buy_runecoins_button_layer
    var int6 = comp(1562, 55);  // mtxmgt_purchase:bonds_to_runecoins_button_layer
    CC_DELETEALL(int2);
    var int7 = -1;
    var int8 = (varclient_4968 + varclient_4969);
    if ((varplayer_5006 != -1 as struct)) {
        int7 = script10813(varbitplayer_26175);
    };
    if ((int7 != -1)) {
        script10812(int2, int5, 23852, -1, 34, 35, "RuneCoins", int7, varclient_4659, 0);
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
        script7794(int1, 21361);
        IF_SETHIDE(false, int0);
        IF_SETONVARCTRANSMIT(callback(script10807, 4659, 4968, 4969, 3), int0);
    } else {
        IF_SETHIDE(true, int0);
        IF_SETONVARCTRANSMIT(callback(), int0);
    };
    return;
}