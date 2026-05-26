//
function script16892(): void {
    IF_SETTEXT("Fresh Start Worlds Event", 69861400);
    IF_SETTEXT("Standard Game", 69861406);
    IF_SETTEXT("Recommended for returning & current players", 69861401);
    IF_SETTEXT("Recommended for new & current players", 69861407);
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
    IF_SETCOLOUR(int2, 69861398);
    IF_SETCOLOUR(int2, 69861399);
    IF_SETCOLOUR(int3, 69861404);
    IF_SETCOLOUR(int3, 69861405);
    IF_SETTEXT(string0, 69861431);
    IF_SETTEXT(string1, 69861432);
    script16896(69861402, 14160, int4);
    script16896(69861408, 14239, int5);
    return;
}