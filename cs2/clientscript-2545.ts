//
function script2545(): string {
    var int0 = script2544();
    var string0 = "";
    if ((int0 > 1000)) {
        int0 = (int0 / 1000);
        string0 = `${inttostring(int0, 10)} K`;
    } else {
        string0 = inttostring(int0, 10);
    };
    var int1 = varbitplayer_43240;
    if ((int1 > 1000)) {
        int1 = (int1 / 1000);
        string0 = `${string0}/<br>${inttostring(int1, 10)} K`;
    } else {
        string0 = `${string0}/<br>${inttostring(int1, 10)}`;
    };
    return string0;
}