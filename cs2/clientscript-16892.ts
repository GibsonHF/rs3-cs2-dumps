//
function script16892(): void {
    IF_SETTEXT("Fresh Start Worlds Event", comp(1066, 24));
    IF_SETTEXT("Standard Game", comp(1066, 30));
    IF_SETTEXT("Recommended for returning & current players", comp(1066, 25));
    IF_SETTEXT("Recommended for new & current players", comp(1066, 31));
    var int0 = 11837586;
    var int1 = 15777401;
    var int2 = int1;
    var int3 = int0;
    var int4 = 21651 as graphic;
    var int5 = 21652 as graphic;
    var string0 = "The Fresh Start Worlds Event";
    var string1 = "Press continue to start the Fresh Start Worlds event.<br><br>You may speak to Gale Freshman near the Burthorpe lodestone to return to the Standard Game at a later date.";
    if ((varbitplayer_51792 != 0)) {
        int2 = int0;
        int3 = int1;
        int4 = 21652 as graphic;
        int5 = 21651 as graphic;
        string1 = "Press continue to start the Standard Game.<br><br>There are no downsides to joining the Fresh Start Worlds Event if you wish to change your mind.";
        string0 = "The Standard Game";
    };
    IF_SETCOLOUR(int2, comp(1066, 22));
    IF_SETCOLOUR(int2, comp(1066, 23));
    IF_SETCOLOUR(int3, comp(1066, 28));
    IF_SETCOLOUR(int3, comp(1066, 29));
    IF_SETTEXT(string0, comp(1066, 55));
    IF_SETTEXT(string1, comp(1066, 56));
    script16896(comp(1066, 26), 14160 as cs2enum, int4);
    script16896(comp(1066, 32), 14239 as cs2enum, int5);
    return;
}