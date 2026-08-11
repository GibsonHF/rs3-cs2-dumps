//
function script20502(int0: number): void {
    if ((int0 == 18)) {
        IF_SETHIDE(false, comp(137, 56));  // chatdefault:top_layer
        IF_SETHIDE(false, comp(137, 66));  // chatdefault:divider_top
        IF_SETHIDE(true, comp(137, 208));  // chatdefault:legacy_filter_buttons
        IF_SETPOSITION(0, 0, 0, 2, comp(137, 55));  // chatdefault:chat
        IF_SETSIZE(0, 0, 1, 1, comp(137, 55));  // chatdefault:chat
        IF_SETPOSITION(0, 0, 0, 2, comp(137, 3));  // chatdefault:quickchat
        IF_SETSIZE(0, 0, 1, 1, comp(137, 3));  // chatdefault:quickchat
        script8391(18, 0);
        IF_SETSIZE(0, 0, 1, 1, struct_getparam(21279, 3506));
    };
    script10493(int0);
    script12431(int0);
    return;
}