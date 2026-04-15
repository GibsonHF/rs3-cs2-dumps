//
function script47(int0: int): string {
    if ((int0 > 99)) {
        return inttostring(int0, 10);
    };
    if ((int0 > 9)) {
        return `0${inttostring(int0, 10)}`;
    };
    if ((int0 >= 0)) {
        return `00${inttostring(int0, 10)}`;
    };
    return inttostring(int0, 10);
}