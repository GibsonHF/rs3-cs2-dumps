//[clientscript,stockmarket_onload]
function script585(): void {
    IF_SETONVARTRANSMIT(callback(script588, 135, 1), comp(105, 199));
    stack(586);
    stack("");
    stack(6881280);
    IF_SETONSTOCKTRANSMIT();
    IF_SETONVARTRANSMIT(callback(script11743, 429, 431, 2), 6881470);
    IF_SETONINVTRANSMIT(callback(script11743, 540, 1), 6881470);
    script8841(82, 1);
    IF_SETTEXT(script9465(1), 6881615);
    if ((MAP_LANG() == 1)) {
        script15026();
    };
    if (((strcmp(varclient_2250, "") != 0) && (varclient_2235 == comp(105, 332)))) {
        IF_SETTEXT(ESCAPE(varclient_2250), comp(105, 335));
        IF_SETHIDE(false, comp(105, 337));
        IF_SETONCLICK(callback(script15048), comp(105, 337));
        if ((varplayer_135 == -1)) {
            script12012();
        };
        script11700(varplayer_135);
    } else if ((strcmp(varclient_6788, "") != 0)) {
        if ((varclient_2235 == comp(105, 332))) {
            varclient_2250 = varclient_6788;
        };
        IF_SETTEXT(ESCAPE(varclient_6788), comp(105, 335));
        IF_SETHIDE(false, comp(105, 337));
        IF_SETONCLICK(callback(script15048), comp(105, 337));
        script11700(varplayer_135);
    } else {
        varclient_6788 = "";
    };
    script621();
    return;
}