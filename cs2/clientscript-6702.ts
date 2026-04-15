//
function script6702(int0: int): string {
    if ((int0 < 0)) {
        return "---";
    };
    var int1 = SCALE(3, 5, int0);
    if ((int1 <= 3)) {
        return "<col=ff0000>- ! -</col>";
    };
    var int2 = (int1 / 60);
    int1 = MODULO(int1, 60);
    if ((int1 >= 10)) {
        return `${inttostring(int2, 10)}:${inttostring(int1, 10)}</col>`;
    };
    return `${inttostring(int2, 10)}:0${inttostring(int1, 10)}</col>`;
}