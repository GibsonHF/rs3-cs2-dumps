//
function script20858(): void {
    unk10992("Search...", -1701144064, 255, 98172934);
    if ((STRING_LENGTH(varclient_8377) > 0)) {
        IF_SETTEXT(varclient_8377, 98172934);
    };
    varclient_8472 = 0;
    varclient_8473 = script20847();
    varclient_8376 = MAX(0, varclient_8376);
    if ((script20473(varclient_8376) == 0)) {
        varclient_8376 = 0;
    };
    if ((script6431() == 1)) {
        IF_SETGRAPHIC(-1 as graphic, comp(1498, 3));  // marketplace_store:fade_top
        IF_SETGRAPHIC(-1 as graphic, comp(1498, 4));  // marketplace_store:fade_bottom
    };
    script20631(1);
    script20630(varclient_8376);
    stack(20628);
    stack("");
    stack(98172930);
    unk10987();
    script20623(1);
    return;
}