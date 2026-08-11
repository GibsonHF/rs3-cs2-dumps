//
function script5279(int0: number): void {
    var int1 = script734(varbitplayer_7088);
    IF_SETHIDE(int1, comp(388, 17));  // clan_keep_theatre_options:day_disabled
    IF_SETHIDE(int1, comp(388, 30));  // clan_keep_theatre_options:night_disabled
    IF_SETHIDE(int1, comp(388, 43));  // clan_keep_theatre_options:green_disabled
    IF_SETHIDE(int1, comp(388, 56));  // clan_keep_theatre_options:dusk_disabled
    IF_SETHIDE(int1, comp(388, 69));  // clan_keep_theatre_options:dawn_disabled
    IF_SETHIDE(int1, comp(388, 102));  // clan_keep_theatre_options:greenscreen_disabled
    IF_SETHIDE(int1, comp(388, 116));  // clan_keep_theatre_options:cave_disabled
    IF_SETHIDE(int1, comp(388, 130));  // clan_keep_theatre_options:crypt_disabled
    IF_SETHIDE(int1, comp(388, 143));  // clan_keep_theatre_options:forest_disabled
    IF_SETHIDE(int1, comp(388, 158));  // clan_keep_theatre_options:ocean_disabled
    IF_SETHIDE(int1, comp(388, 172));  // clan_keep_theatre_options:hills_disabled
    IF_SETHIDE(int1, comp(388, 186));  // clan_keep_theatre_options:room_disabled
    IF_SETHIDE(int1, comp(388, 200));  // clan_keep_theatre_options:village_disabled
    IF_SETHIDE(int1, comp(388, 84));  // clan_keep_theatre_options:accept_button_disabled_layer
    if ((int1 == true)) {
        IF_SETTEXT("Theatre Options", int0);
        IF_SETONOP(callback(script5293, -2147483644, 1, 0), comp(388, 99));  // clan_keep_theatre_options:greenscreen_button
        IF_SETONOP(callback(script5293, -2147483644, 2, 0), comp(388, 112));  // clan_keep_theatre_options:cave_button
        IF_SETONOP(callback(script5293, -2147483644, 3, 0), comp(388, 126));  // clan_keep_theatre_options:crypt_button
        IF_SETONOP(callback(script5293, -2147483644, 4, 0), comp(388, 140));  // clan_keep_theatre_options:forest_button
        IF_SETONOP(callback(script5293, -2147483644, 5, 0), comp(388, 154));  // clan_keep_theatre_options:ocean_button
        IF_SETONOP(callback(script5293, -2147483644, 6, 0), comp(388, 168));  // clan_keep_theatre_options:hills_button
        IF_SETONOP(callback(script5293, -2147483644, 7, 0), comp(388, 182));  // clan_keep_theatre_options:room_button
        IF_SETONOP(callback(script5293, -2147483644, 8, 0), comp(388, 196));  // clan_keep_theatre_options:village_button
        IF_SETONOP(callback(script5293, -2147483644, 1, 1), comp(388, 14));  // clan_keep_theatre_options:day_button
        IF_SETONOP(callback(script5293, -2147483644, 2, 1), comp(388, 27));  // clan_keep_theatre_options:night_button
        IF_SETONOP(callback(script5293, -2147483644, 3, 1), comp(388, 40));  // clan_keep_theatre_options:green_button
        IF_SETONOP(callback(script5293, -2147483644, 4, 1), comp(388, 53));  // clan_keep_theatre_options:dusk_button
        IF_SETONOP(callback(script5293, -2147483644, 5, 1), comp(388, 66));  // clan_keep_theatre_options:dawn_button
    } else {
        if (((varbitplayer_6355 == 0) || (varbitplayer_6364 == 0))) {
            IF_SETTEXT("Waiting on technician to select options...", int0);
        } else {
            IF_SETTEXT("Waiting on technician to unlock theatre...", int0);
        };
        IF_SETONOP(callback(), comp(388, 99));  // clan_keep_theatre_options:greenscreen_button
        IF_SETONOP(callback(), comp(388, 112));  // clan_keep_theatre_options:cave_button
        IF_SETONOP(callback(), comp(388, 126));  // clan_keep_theatre_options:crypt_button
        IF_SETONOP(callback(), comp(388, 140));  // clan_keep_theatre_options:forest_button
        IF_SETONOP(callback(), comp(388, 154));  // clan_keep_theatre_options:ocean_button
        IF_SETONOP(callback(), comp(388, 168));  // clan_keep_theatre_options:hills_button
        IF_SETONOP(callback(), comp(388, 182));  // clan_keep_theatre_options:room_button
        IF_SETONOP(callback(), comp(388, 196));  // clan_keep_theatre_options:village_button
        IF_SETONOP(callback(), comp(388, 14));  // clan_keep_theatre_options:day_button
        IF_SETONOP(callback(), comp(388, 27));  // clan_keep_theatre_options:night_button
        IF_SETONOP(callback(), comp(388, 40));  // clan_keep_theatre_options:green_button
        IF_SETONOP(callback(), comp(388, 53));  // clan_keep_theatre_options:dusk_button
        IF_SETONOP(callback(), comp(388, 66));  // clan_keep_theatre_options:dawn_button
    };
    script4532(int0);
    return;
}