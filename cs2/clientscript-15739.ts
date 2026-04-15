//
function script15739(int0: dbrow, int1: unknown_int, int2: int, string0: string, string1: unknown_string): void {
    if ((int0 == -1 as dbrow)) {
        return;
    };
    var string2 = "";
    var string3 = "";
    if ((DB_GETROWTABLE(int0) == 122)) {
        string2 = script20546(int0);
        unk11082(string3, script20660(int0), script20661(int0), int1);
        string3 = script14145(stack(), script11623(stack()));
        string3 = script14145(string3, script20662(int0), script20663(int0));
        stack(string3);
        stack("You currently own:");
        stack(int0);
        stack(499936);
        stack(0);
        dbrow_getfield();
        string3 = script14145(stack(), script14241(stack()));
    };
    switch (RANDOM(6)) {
        case 0: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59077 as vorbis, 1, 0, 150, 15, 15));
            break;
        }
        case 1: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59078 as vorbis, 1, 0, 150, 15, 15));
            break;
        }
        case 2: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59079 as vorbis, 1, 0, 150, 15, 15));
            break;
        }
        case 3: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59080 as vorbis, 1, 0, 150, 15, 15));
            break;
        }
        case 4: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59081 as vorbis, 1, 0, 150, 15, 15));
            break;
        }
        case 5: {
            SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(59082 as vorbis, 1, 0, 150, 15, 15));
            break;
        }
    };
    script18696(dbrow_getfield(int0, 499712, 0));
    script20547(string2, string0, 1, string3, dbrow_getfield(int0, 499792, 0), int2, dbrow_getfield(int0, 500048, 0));
    IF_SETONOP(callback(script20548), comp(1495, 21));
    IF_SETONOP(callback(script20548), 97976322);
    IF_SETONOP(callback(script15743, string1), 97976372);
    IF_SETHIDE(0, 54263816);
    return;
}