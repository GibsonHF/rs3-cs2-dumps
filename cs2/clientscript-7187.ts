//
function script7187(int0: number): void {
    IF_SETTRANS(MAX(128, MIN(int0, 255)), comp(1372, 1));  // cutscene_subtitle_panel:tint_rect
    IF_SETTRANS(MAX(0, MIN(int0, 255)), comp(1372, 4));  // cutscene_subtitle_panel:frame_rect
    IF_SETTRANS(MAX(0, MIN(int0, 255)), comp(1372, 3));  // cutscene_subtitle_panel:text
    IF_SETTRANS(MAX(0, MIN(int0, 255)), comp(1372, 2));  // cutscene_subtitle_panel:text_dropshadow
    return;
}