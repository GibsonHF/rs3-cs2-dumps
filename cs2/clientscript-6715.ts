//
function script6715(): void {
    if ((MODULO(CLIENTCLOCK(), 50) != 0)) {
        return;
    };
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var string0 = "";
    varclient_200 = (varclient_200 - 1);
    if ((varclient_200 < 1)) {
        string0 = "Your ban has expired. You can log in game now.";
        IF_SETONTIMER(callback(), comp(744, 335));
    } else {
        [int0, int1, int2] = script6716(varclient_200);
        string0 = `Your ban will be lifted in<br>${inttostring(int0, 10)} hours, ${inttostring(int1, 10)} minutes, ${inttostring(int2, 10)} seconds`;
    };
    script3233(string0);
    return;
}