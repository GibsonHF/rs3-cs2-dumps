//
function script8501(): void {
    var int0 = MODULO((REBOOTTIMER() / 50), 60);
    var int1 = (REBOOTTIMER() / 3000);
    if ((int0 < 10)) {
        IF_SETTEXT(`System update in<br>${inttostring(int1, 10)}:0${inttostring(int0, 10)}`, comp(1477, 919));  // toplevel_v2:system_update_message
    } else {
        IF_SETTEXT(`System update in<br>${inttostring(int1, 10)}:${inttostring(int0, 10)}`, comp(1477, 919));  // toplevel_v2:system_update_message
    };
    if ((REBOOTTIMER() > 0)) {
        IF_SETHIDE(false, comp(1477, 917));  // toplevel_v2:system_update_layer
    } else {
        IF_SETHIDE(true, comp(1477, 917));  // toplevel_v2:system_update_layer
    };
    return;
}