//
function script9746(): void {
    IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 1));
    IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 9));
    if (((varclient_4188 == 0) || (varclient_4188 == -1))) {
        IF_SETHIDE(false, comp(1049, 22));
        if ((IF_GETGRAPHIC(comp(1049, 0)) == 18525 as graphic)) {
            stack(17535);
            stack(68747325);
            IF_SETGRAPHIC();
        } else {
            stack(17536);
            stack(68747325);
            IF_SETGRAPHIC();
        };
        IF_SETHIDE(false, comp(1049, 24));
        if ((IF_GETGRAPHIC(comp(1049, 8)) == 18525 as graphic)) {
            stack(17535);
            stack(68747326);
            IF_SETGRAPHIC();
        } else {
            stack(17536);
            stack(68747326);
            IF_SETGRAPHIC();
        };
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 1));
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 9));
    } else {
        IF_SETHIDE(true, comp(1049, 22));
        IF_SETHIDE(true, comp(1049, 24));
    };
    return;
}