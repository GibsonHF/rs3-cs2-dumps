//
function script3776(int0: number, int1: number, string0: string): void {
    if ((int0 == 1)) {
        IF_SETSIZE(512, 332, 0, 0, comp(576, 7));  // share_accept:gold_window_layer
        IF_SETTEXT(`${string0} would like to share a bank preset with you. Would you like to overwrite your existing temporary bank preset?`, comp(576, 1));  // share_accept:info
        SOUND_VORBIS_VOLUME(7653 as vorbis, 1, 0, 120);
    } else {
        IF_SETSIZE(394, 274, 0, 0, comp(576, 7));  // share_accept:gold_window_layer
        IF_SETTEXT(`${string0} would like to share an action bar setup with you. Which action bar would you like to overwrite?`, comp(576, 1));  // share_accept:info
        SOUND_VORBIS_VOLUME(7653 as vorbis, 1, 0, 120);
    };
    return;
}