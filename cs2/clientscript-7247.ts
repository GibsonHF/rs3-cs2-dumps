//
function script7247(int0: int): string {
    if ((int0 == 0)) {
        return "0";
    };
    if ((int0 < 0)) {
        var int0 = (0 - int0);
    };
    return `${inttostring((int0 / 10), 10)}${script8002()}${inttostring(MODULO(int0, 10), 10)}`;
}