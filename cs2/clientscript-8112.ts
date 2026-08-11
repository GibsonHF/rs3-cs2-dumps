//
function script8112(int0: number, int1: number): void {
    if (((int0 == 1) || (int0 == 0))) {
        if ((int1 == 0)) {
            IF_SETPOSITION(0, 0, 1, 1, comp(1430, 269));  // toplevel_v2_combat_bar:fullscreen_padlock_layer
            IF_SETPOSITION(0, 0, 2, 2, comp(1430, 255));  // toplevel_v2_combat_bar:fullscreen_settings_layer
            IF_SETPOSITION(0, 0, 0, 0, comp(1430, 257));  // toplevel_v2_combat_bar:bar_indicator
        } else {
            IF_SETPOSITION(0, 0, 1, 1, comp(1430, 269));  // toplevel_v2_combat_bar:fullscreen_padlock_layer
            IF_SETPOSITION(0, 0, 2, 2, comp(1430, 255));  // toplevel_v2_combat_bar:fullscreen_settings_layer
            IF_SETPOSITION(0, 0, 0, 0, comp(1430, 257));  // toplevel_v2_combat_bar:bar_indicator
        };
    } else {
        IF_SETPOSITION(0, 0, 1, 1, comp(1430, 269));  // toplevel_v2_combat_bar:fullscreen_padlock_layer
        IF_SETPOSITION(0, 0, 2, 2, comp(1430, 255));  // toplevel_v2_combat_bar:fullscreen_settings_layer
        IF_SETPOSITION(0, 0, 0, 0, comp(1430, 257));  // toplevel_v2_combat_bar:bar_indicator
    };
    return;
}