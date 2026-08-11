//
function script11933(): void {
    if (((script4550(71) == 1) && (IF_GETHIDE(comp(71, 18)) == false))) {  // arch_orthen_site_map:popup_window
        IF_SETHIDE(true, comp(71, 18));  // arch_orthen_site_map:popup_window
        SOUND_VORBIS_VOLUME(48065 as vorbis, 1, 0, 120);
        return;
    };
    SOUND_VORBIS_VOLUME(3053 as vorbis, 1, 0, 120);
    script675();
    return;
}