//[clientscript,bankpin_cancel]
function script696(): void {
    script8841(110, 0);
    script675();
    printmessage("Cancelled.");
    SOUND_VORBIS_VOLUME(39602 as vorbis, 1, 0, 150);
    return;
}