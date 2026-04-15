//
function script19033(): void {
    var string0 = `${inttostring(MODULO(varbitplayer_55833, 5), 10)}/${inttostring(5, 10)}`;
    var string1 = `${inttostring(MODULO(varbitplayer_55833, 10), 10)}/${inttostring(10, 10)}`;
    var string2 = `${inttostring(varbitplayer_55833, 10)}/${inttostring(20, 10)}`;
    if ((varbitplayer_52331 >= 99)) {
        string0 = "MAX";
    };
    if ((varbitplayer_54994 >= 99)) {
        string1 = "MAX";
    };
    if ((varbitplayer_55831 >= 99)) {
        string2 = "MAX";
    };
    IF_SETTEXT(string0, comp(1014, 26));
    IF_SETTEXT(string1, comp(1014, 110));
    IF_SETTEXT(string2, comp(1014, 113));
    return;
}