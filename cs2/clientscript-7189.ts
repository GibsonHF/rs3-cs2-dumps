//
function script7189(int0: number): void {
    if ((int0 == 1)) {
        IF_SETHIDE(false, comp(1372, 1));  // cutscene_subtitle_panel:tint_rect
        IF_SETHIDE(false, comp(1372, 4));  // cutscene_subtitle_panel:frame_rect
    } else {
        IF_SETHIDE(true, comp(1372, 1));  // cutscene_subtitle_panel:tint_rect
        IF_SETHIDE(true, comp(1372, 4));  // cutscene_subtitle_panel:frame_rect
    };
    return;
}