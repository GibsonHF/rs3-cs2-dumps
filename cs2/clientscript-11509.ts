//
function script11509(int0: obj, int1: struct, int2: int, int3: unknown_int): void {
    var int4 = 1;
    varclient_4888 = int2;
    if ((int0 == -1 as obj)) {
        if ((int3 == 0)) {
            if ((varbitplayer_673 == 5)) {
                IF_SETHIDE(true, comp(1627, 10));
            } else {
                IF_SETTEXT("No recolours are available for this item.", comp(1627, 10));
                IF_SETHIDE(false, comp(1627, 10));
            };
            int4 = 0;
        } else if ((int1 == -1 as struct)) {
            IF_SETTEXT("No recolours are available for this outfit or some of your overrides are not recolourable.", comp(1627, 10));
            IF_SETHIDE(false, comp(1627, 10));
            int4 = 0;
        };
    };
    if (((int0 != -1 as obj) && ((item_getparam(int0, 5100) == 1) || (item_getparam(int0, 5099) < 0)))) {
        int4 = 0;
    };
    script11511(int1, comp(1627, 12), comp(1627, 11));
    if ((int4 == 1)) {
        script11513();
        script11520();
        script11529(1);
        IF_SETTEXT(inttostring(varbitplayer_28089, 10), comp(1627, 2));
    } else {
        script11510();
    };
    return;
}