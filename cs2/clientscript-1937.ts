//
function script1937(int0: int, int1: unknown_int, int2: unknown_int, int3: int): void {
    SOUND_VORBIS_VOLUME(33966 as vorbis, 1, 0, 250);
    var int4 = script1931(int0, int1);
    var int5 = (int4 * 25);
    var string0 = "null";
    if ((int2 == 0)) {
        if ((int3 > 0)) {
            string0 = script4583(int3, `You have to wait ${inttostring(int3, 10)} day before you can reset your unlocks again.`, `You have to wait ${inttostring(int3, 10)} days before you can reset your unlocks again.`);
            script13971(comp(267, 69), comp(267, 70), 28553 as struct, "Accept", true);
        } else {
            string0 = `This will reset all unlocks. You will have to allocate your quest points again and wait ${inttostring(7, 10)} days before resetting again.`;
        };
        IF_SETTEXT(string0, comp(267, 65));
    } else if ((int2 == 1)) {
        if ((int5 <= 0)) {
            return;
        };
        IF_SETTEXT(`Do you wish to allocate ${inttostring(int5, 10)} points to this track?`, comp(267, 65));
    };
    IF_SETHIDE(false, comp(267, 6));
    IF_SETHIDE(false, comp(267, 4));
    return;
}