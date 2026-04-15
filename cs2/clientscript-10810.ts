//
function script10810(): void {
    var int0 = comp(1562, 30);
    var int1 = comp(1562, 19);
    var int2 = comp(1562, 20);
    var int3 = comp(1562, 41);
    var int4 = comp(1562, 39);
    var int5 = comp(1562, 18);
    CC_DELETEALL(int2);
    var int6 = -1;
    if ((varplayer_5006 != -1 as struct)) {
        int6 = script10814(varbitplayer_26176);
    };
    if ((int6 != -1)) {
        script10812(int2, int5, 23851 as graphic, -1 as graphic, 34, 35, "Loyalty Points", int6, varclient_4660, 1);
        if ((varclient_4660 < int6)) {
            script7794(int1, 21362 as struct);
            IF_SETHIDE(false, int4);
        } else {
            script7794(int1, 21361 as struct);
            IF_SETHIDE(true, int4);
            if ((int6 == 0)) {
                IF_SETTEXT("Claim", int3);
            } else {
                IF_SETTEXT("Buy", int3);
            };
        };
        IF_SETHIDE(false, int0);
        IF_SETONVARCTRANSMIT(callback(script10808, 4660, 1), int0);
    } else {
        IF_SETHIDE(true, int0);
        IF_SETONVARCTRANSMIT(callback(), int0);
    };
    return;
}