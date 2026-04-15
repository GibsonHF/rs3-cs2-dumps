//
function script16637(int0: component, int1: int): void {
    var int2 = script16602(int1);
    var string0 = "";
    if ((int2 == 0)) {
        string0 = "Triggers the Rainbow Bonus!";
    } else if ((int2 == 1)) {
        string0 = "Awards a single prize.";
    } else {
        string0 = `Awards x${inttostring(int2, 10)} prizes!`;
    };
    if ((int1 > 1)) {
        string0 = strconcat(string0, `<br>Active in ${inttostring(int1, 10)} keys.`);
    } else {
        string0 = strconcat(string0, "<br>Active on your next key.");
    };
    script426(string0, int0, -1, 0);
    return;
}