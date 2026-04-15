//
function script5702(): void {
    var int0 = SCALE(varbitplayer_28441, 1500, 100);
    var string0 = "<col=89CFF0>Cool";
    if ((int0 == 100)) {
        string0 = "<col=FF0000>Inferno";
    } else if ((int0 >= 80)) {
        string0 = "<col=FF6600>Scorching";
    } else if ((int0 >= 60)) {
        string0 = "<col=FF6600>Boiling";
    } else if ((int0 >= 40)) {
        string0 = "<col=FFFF00>Hot";
    } else if ((int0 >= 20)) {
        string0 = "<col=FFFF00>Warm";
    };
    var string1 = `Current weather condition: ${string0} (${inttostring(int0, 10)}%)`;
    if ((int0 == 100)) {
        string1 = strconcat(string1, "<br>Eat an ice cream to cool yourself down.");
    };
    script3536(string1, comp(1642, 13), -1);
    return;
}