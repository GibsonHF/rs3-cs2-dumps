//
function script20626(): void {
    unk10992("Search...", -1701144064, 255, 98172934);
    if ((STRING_LENGTH(varclient_8377) > 0)) {
        IF_SETTEXT(varclient_8377, 98172934);
    };
    varclient_8376 = MAX(0, varclient_8376);
    if ((script6431() == 1)) {
        IF_SETGRAPHIC(-1, 98172931);
        IF_SETGRAPHIC(-1, 98172932);
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