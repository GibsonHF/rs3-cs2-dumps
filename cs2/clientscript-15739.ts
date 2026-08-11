//
function script15739(int0: number, int1: number, int2: number, string0: string, string1: string): void {
    if ((int0 == -1 as dbrow)) {
        return;
    };
    var string2 = "";
    var string3 = "";
    if ((DB_GETROWTABLE(int0) == 122)) {
        string2 = script20546(int0);
        unk11082(string3, script20660(int0), script20661(int0), int1);
        string3 = script14145(script11623());
        string3 = script14145(string3, script20662(int0), script20663(int0));
        string3 = script14145(string3, "You currently own:", script14241(dbrow_getfield(int0, 499936, 0)));
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
    IF_SETONOP(callback(script20548), comp(1495, 22));  // marketplace_preview:rotator_button_layer
    IF_SETONOP(callback(script20548), comp(1495, 2));  // marketplace_preview:background
    IF_SETONOP(callback(script15743, string1), comp(1495, 52));  // marketplace_preview:purchase_button_layer
    IF_SETHIDE(false, comp(828, 8));  // mobile_shop_hard_currency:confirm_buy_container
    return;
}