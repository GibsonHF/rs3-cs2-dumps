//
function script11509(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = 1;
    varclient_4888 = int2;
    if ((int0 == -1)) {
        if ((int3 == 0)) {
            if ((varbitplayer_673 == 5)) {
                IF_SETHIDE(true, comp(1627, 10));  // mtxmgt_colour_overlay:no_recols_text
            } else {
                IF_SETTEXT("No recolours are available for this item.", comp(1627, 10));  // mtxmgt_colour_overlay:no_recols_text
                IF_SETHIDE(false, comp(1627, 10));  // mtxmgt_colour_overlay:no_recols_text
            };
            int4 = 0;
        } else if ((int1 == -1)) {
            IF_SETTEXT("No recolours are available for this outfit or some of your overrides are not recolourable.", comp(1627, 10));  // mtxmgt_colour_overlay:no_recols_text
            IF_SETHIDE(false, comp(1627, 10));  // mtxmgt_colour_overlay:no_recols_text
            int4 = 0;
        };
    };
    if ((int0 != -1)) {
        if (((item_getparam(int0, 5100) == 1) || (item_getparam(int0, 5099) < 0))) {
            int4 = 0;
        };
    };
    script11511(int1, 106627084, 106627083);
    if ((int4 == 1)) {
        script11513();
        script11520();
        script11529(1);
        IF_SETTEXT(inttostring(varbitplayer_28089, 10), comp(1627, 2));  // mtxmgt_colour_overlay:amount
    } else {
        script11510();
    };
    return;
}