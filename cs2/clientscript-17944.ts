//
function script17944(): string {
    var int0 = 0;
    var int1 = 0;
    [int0, int1] = script17945(REBOOTTIMER());
    if ((int1 < 10)) {
        return `${inttostring(int0, 10)}:0${inttostring(int1, 10)}`;
    };
    return `${inttostring(int0, 10)}:${inttostring(int1, 10)}`;
}