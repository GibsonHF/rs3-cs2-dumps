//
function script8987(int0: component): void {
    var int1 = DATE_RUNEDAY();
    var int2 = (int1 + 1);
    var int3 = MODULO((DATE_MINUTES() / 60), 24);
    var int4 = MODULO(DATE_MINUTES(), 60);
    var int5 = (23 - int3);
    var int6 = (60 - int4);
    var int7 = (script8985() - int1);
    if ((varbitplayer_18722 == 0)) {
        IF_SETTEXT(`Time remaining to vote: ${inttostring(int7, 10)} Days ${inttostring(int5, 10)} Hours ${inttostring(int6, 10)} Minutes`, int0);
    } else {
        int7 = (script8986() - int1);
        IF_SETTEXT(`Time remaining to vote: ${inttostring(int7, 10)} Days ${inttostring(int5, 10)} Hours ${inttostring(int6, 10)} Minutes`, int0);
    };
    return;
}