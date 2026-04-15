//
function script19279(): void {
    script19280();
    script19281();
    script19282();
    script19270(comp(1290, 197), comp(1290, 199));
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
            stack(script19209(varbitplayer_56176));
            stack(84541465);
            IF_SETGRAPHIC();
            script3536(`${script10979(varbitplayer_56176)}${script10876(varbitplayer_56176)}+</col>`, 84541465, -1);
        };
        if ((varbitplayer_56178 != 0)) {
            IF_SETHIDE(false, comp(1290, 191));
            stack(enum_getvalue(0, 23, 16540 as cs2enum, varbitplayer_56178));
            stack(84541631);
            IF_SETGRAPHIC();
            stack("<col=FFFF00>");
            stack(0);
            stack(36);
            stack(16539);
            stack(varbitplayer_56178);
            enum_getvalue();
            script3536(`${stack()} category</col>`, 84541631, -1);
        };
        if ((varbitplayer_56177 > 1)) {
            IF_SETHIDE(false, comp(1290, 23));
            stack(script10980(varbitplayer_56177));
            stack(84541463);
            IF_SETGRAPHIC();
            script3536(`<col=FF00>x${inttostring(varbitplayer_56177, 10)} multiplier</col>`, 84541463, -1);
        };
    };
    return;
}