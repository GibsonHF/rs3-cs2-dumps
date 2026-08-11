//
function script13818(): void {
    if ((script6431() == 1)) {
        IF_SETHIDE(false, comp(429, 4));  // audio_options:mobile_data_audio
        IF_SETSIZE(200, 65, 0, 0, comp(429, 3));  // audio_options:global_mute_wrapper
        script15726();
        script16925(28115024, 16356, 3, 12, 10);
    } else {
        IF_SETHIDE(true, comp(429, 4));  // audio_options:mobile_data_audio
        IF_SETSIZE(0, 65, 1, 0, comp(429, 3));  // audio_options:global_mute_wrapper
    };
    script1191(28114951, script5633(-1), 0);
    script1191(28114959, script5633(0), 0);
    script1191(28114976, script5633(1), 0);
    script1191(28114993, script5633(2), 0);
    script1191(28115010, script5633(3), 0);
    script1191(28115025, varbitplayer_49340, 0);
    return;
}