//
function script8501(): void {
    var int0 = MODULO((REBOOTTIMER() / 50), 60);
    var int1 = (REBOOTTIMER() / 3000);
    if ((int0 < 10)) {
        IF_SETTEXT(`System update in<br>${inttostring(int1, 10)}:0${inttostring(int0, 10)}`, comp(1477, 920));  // toplevel_v2:fps_monitor
    } else {
        IF_SETTEXT(`System update in<br>${inttostring(int1, 10)}:${inttostring(int0, 10)}`, comp(1477, 920));  // toplevel_v2:fps_monitor
    };
    if ((REBOOTTIMER() > 0)) {
        IF_SETHIDE(false, comp(1477, 918));  // toplevel_v2:content_panel_blue
    } else {
        IF_SETHIDE(true, comp(1477, 918));  // toplevel_v2:content_panel_blue
    };
    return;
}