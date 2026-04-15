//
function script7539(int0: int): void {
    SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
    printmessage(`You need a Slayer level of ${inttostring(int0, 10)} to undertake this contract.`);
    return;
}