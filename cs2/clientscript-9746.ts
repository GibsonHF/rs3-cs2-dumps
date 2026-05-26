//
function script9746(): void {
    IF_SETCOLOUR(script693(255, 255, 255), 68747265);
    IF_SETCOLOUR(script693(255, 255, 255), 68747273);
    if (((varclient_4188 == 0) || (varclient_4188 == -1))) {
        IF_SETHIDE(0, 68747286);
        if ((IF_GETGRAPHIC(68747264) == 18525)) {
            stack(17535);
            stack(68747329);
            IF_SETGRAPHIC();
        } else {
            stack(17536);
            stack(68747329);
            IF_SETGRAPHIC();
        };
        IF_SETHIDE(0, 68747288);
        if ((IF_GETGRAPHIC(68747272) == 18525)) {
            stack(17535);
            stack(68747330);
            IF_SETGRAPHIC();
        } else {
            stack(17536);
            stack(68747330);
            IF_SETGRAPHIC();
        };
        IF_SETCOLOUR(script693(125, 125, 125), 68747265);
        IF_SETCOLOUR(script693(125, 125, 125), 68747273);
    } else {
        IF_SETHIDE(1, 68747286);
        IF_SETHIDE(1, 68747288);
    };
    return;
}