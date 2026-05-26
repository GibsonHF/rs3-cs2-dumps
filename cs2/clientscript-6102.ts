//
function script6102(): void {
    var int0 = 0;
    var int1 = 0;
    IF_SETTEXT(script940(varplayer_302), 82903107);
    if (((varplayer_299 != -1 as inv) && (varplayer_301 != -1))) {
        if ((varplayer_299 == 93 as inv)) {
            int0 = script6076(varplayer_300, varplayer_302, varplayer_304);
        } else {
            int0 = script6075(varplayer_300, varplayer_302);
        };
        if ((int0 == -1)) {
            IF_SETTEXT("N/A", 82903177);
            stack(2180);
            stack(82903176);
            IF_SETGRAPHIC();
        } else if ((varplayer_299 == varplayer_305)) {
            IF_SETTEXT("Free!", 82903177);
            stack(-1);
            stack(82903176);
            IF_SETGRAPHIC();
        } else {
            IF_SETTEXT(script940(int0), 82903177);
            stack(enum_getvalue(0, 23, 200 as cs2enum, varplayer_306));
            stack(82903176);
            IF_SETGRAPHIC();
        };
        int1 = PARAWIDTH(IF_GETTEXT(82903177), IF_GETWIDTH(82903174), 26);
        if ((varplayer_299 != varplayer_305)) {
            int1 = ((int1 + 2) + IF_GETWIDTH(82903176));
        };
        IF_SETSIZE(int1, 15, 0, 0, 82903175);
    };
    return;
}