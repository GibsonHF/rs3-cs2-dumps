//
function script19279(): void {
    script19280();
    script19281();
    script19282();
    script19270(84541637, 84541639);
    if ((varbitplayer_56168 == (DB_GETFIELDCOUNT(varplayer_11902, 1220688) - 1))) {
        IF_SETTEXT("Next Floor", comp(1290, 198));
    } else {
        IF_SETTEXT("<sprite=16033><nbsp>Navigate", comp(1290, 198));
    };
    IF_SETHIDE(true, comp(1290, 25));
    IF_SETHIDE(true, comp(1290, 191));
    IF_SETHIDE(true, comp(1290, 23));
    if ((varbitplayer_56175 > 0)) {
        if ((varbitplayer_56176 > 1)) {
            IF_SETHIDE(false, comp(1290, 25));
            IF_SETGRAPHIC(script19209(varbitplayer_56176), comp(1290, 25));
            script3536(`${script10979(varbitplayer_56176)}${script10876(varbitplayer_56176)}+</col>`, 84541465, -1);
        };
        if ((varbitplayer_56178 != 0)) {
            IF_SETHIDE(false, comp(1290, 191));
            IF_SETGRAPHIC(enum_getvalue(0, 23, 16540 as cs2enum, varbitplayer_56178), comp(1290, 191));
            script3536(`<col=FFFF00>${enum_getvalue(0, 36, 16539 as cs2enum, varbitplayer_56178)} category</col>`, 84541631, -1);
        };
        if ((varbitplayer_56177 > 1)) {
            IF_SETHIDE(false, comp(1290, 23));
            IF_SETGRAPHIC(script10980(varbitplayer_56177), comp(1290, 23));
            script3536(`<col=FF00>x${inttostring(varbitplayer_56177, 10)} multiplier</col>`, 84541463, -1);
        };
    };
    return;
}