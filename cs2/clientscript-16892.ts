//
function script16892(): void {
    IF_SETTEXT("Fresh Start Worlds Event", comp(1066, 24));  // gamemode_seasonal_fss_registration:title_fresh
    IF_SETTEXT("Standard Game", comp(1066, 30));  // gamemode_seasonal_fss_registration:title_default
    IF_SETTEXT("Recommended for returning & current players", comp(1066, 25));  // gamemode_seasonal_fss_registration:text_fresh
    IF_SETTEXT("Recommended for new & current players", comp(1066, 31));  // gamemode_seasonal_fss_registration:text_default
    var int0 = 11837586;
    var int1 = 15777401;
    var int2 = int1;
    var int3 = int0;
    var int4 = 21651;
    var int5 = 21652;
    var string0 = "The Fresh Start Worlds Event";
    var string1 = "Press continue to start the Fresh Start Worlds event.<br><br>You may speak to Gale Freshman near the Burthorpe lodestone to return to the Standard Game at a later date.";
    if ((varbitplayer_51792 != 0)) {
        int2 = int0;
        int3 = int1;
        int4 = 21652;
        int5 = 21651;
        string1 = "Press continue to start the Standard Game.<br><br>There are no downsides to joining the Fresh Start Worlds Event if you wish to change your mind.";
        string0 = "The Standard Game";
    };
    IF_SETCOLOUR(int2, comp(1066, 22));  // gamemode_seasonal_fss_registration:highlight_fresh_1
    IF_SETCOLOUR(int2, comp(1066, 23));  // gamemode_seasonal_fss_registration:highlight_fresh_2
    IF_SETCOLOUR(int3, comp(1066, 28));  // gamemode_seasonal_fss_registration:highlight_standard_1
    IF_SETCOLOUR(int3, comp(1066, 29));  // gamemode_seasonal_fss_registration:highlight_standard_2
    IF_SETTEXT(string0, comp(1066, 55));  // gamemode_seasonal_fss_registration:confirm_game_name
    IF_SETTEXT(string1, comp(1066, 56));  // gamemode_seasonal_fss_registration:confirm_body
    script16896(69861402, 14160, int4);
    script16896(69861408, 14239, int5);
    return;
}