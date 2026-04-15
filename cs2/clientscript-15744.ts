//
function script15744(string0: unknown_string): void {
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
    SHOP_PURCHASEITEM(string0);
    IF_SETHIDE(false, comp(828, 9));
    IF_SETONTIMER(callback(script15745, -2147483645, string0), comp(828, 9));
    return;
}