//
function script9750(): void {
    if (((varplayer_4476 < 6) || (varclient_4189 == 1))) {
        IF_SETHIDE(false, comp(1049, 44));
        if ((IF_GETGRAPHIC(comp(1049, 6)) == 18525 as graphic)) {
            stack(17535);
            stack(68747333);
            IF_SETGRAPHIC();
        } else {
            stack(17536);
            stack(68747333);
            IF_SETGRAPHIC();
        };
        IF_SETHIDE(false, comp(1049, 46));
        if ((IF_GETGRAPHIC(comp(1049, 4)) == 18525 as graphic)) {
            stack(17535);
            stack(68747334);
            IF_SETGRAPHIC();
        } else {
            stack(17536);
            stack(68747334);
            IF_SETGRAPHIC();
        };
        IF_SETHIDE(false, comp(1049, 48));
        if ((IF_GETGRAPHIC(comp(1049, 2)) == 18525 as graphic)) {
            stack(17535);
            stack(68747335);
            IF_SETGRAPHIC();
        } else {
            stack(17536);
            stack(68747335);
            IF_SETGRAPHIC();
        };
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 7));
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 5));
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 3));
    } else {
        IF_SETHIDE(true, comp(1049, 44));
        IF_SETHIDE(true, comp(1049, 46));
        IF_SETHIDE(true, comp(1049, 48));
        IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 7));
        IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 5));
        IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 3));
    };
    if ((varplayer_1068 == 1)) {
        IF_SETHIDE(true, comp(1049, 44));
        IF_SETHIDE(true, comp(1049, 46));
        IF_SETHIDE(true, comp(1049, 48));
        IF_SETHIDE(false, comp(1049, 49));
    };
    return;
}