//
function script5038(int0: number): void {
    SOUND_VORBIS_VOLUME(6185 as vorbis, 1, 0, 200);
    if ((int0 == 1)) {
        IF_SETHIDE(true, comp(1111, 6));  // clan_field_editor:display
        IF_SETHIDE(false, comp(1111, 1));  // clan_field_editor:restoration
    } else {
        IF_SETHIDE(false, comp(1111, 6));  // clan_field_editor:display
        IF_SETHIDE(true, comp(1111, 1));  // clan_field_editor:restoration
    };
    return;
}