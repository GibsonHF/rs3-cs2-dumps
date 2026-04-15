//
function script4338(int0: int): string {
    var string0 = "";
    if ((int0 < 10)) {
        string0 = APPEND_NUM("00:0", int0);
    } else if ((int0 < 60)) {
        string0 = APPEND_NUM("00:", int0);
    } else if ((int0 < 959)) {
        string0 = `0${inttostring((int0 / 100), 10)}:${inttostring(MODULO(int0, 100), 10)}`;
    } else {
        string0 = `${inttostring((int0 / 100), 10)}:${inttostring(MODULO(int0, 100), 10)}`;
    };
    return string0;
}