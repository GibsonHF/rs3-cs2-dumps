//
function script5952(): void {
    var int0 = varplayer_1751;
    var int1 = varplayer_1752;
    var int2 = 0;
    if ((((int2 == 0) && (int0 != 0)) && (int1 != 0))) {
        int2 = 1;
    };
    if ((int2 == 1)) {
        varclient_1795 = 0;
        script3097();
        if ((int0 > int1)) {
            script3093(10000, 4041 as dbrow, "Log In Members", "Use the continue button to log into a members world.", 10150, "", "Continue");
        } else {
            script3093(10000, 4041 as dbrow, "Log In Free", "We can't find your subscription. Use the continue button to log into a free to play world.", 10151, "", "Continue");
        };
    };
    return;
}