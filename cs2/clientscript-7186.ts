//
function script7186(int0: number): void {
    var int1 = MIN(60, (int0 / 3));
    if ((varclient_2232 > int1)) {
        script7187((IF_GETTRANS(comp(1372, 3)) - (255 / int1)));  // cutscene_subtitle_panel:text
    } else {
        script7187((IF_GETTRANS(comp(1372, 3)) + (255 / int1)));  // cutscene_subtitle_panel:text
    };
    script7191();
    return;
}