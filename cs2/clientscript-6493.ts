//
function script6493(int0: int): string {
    var string0 = `${inttostring(int0, 10)}%`;
    if ((int0 >= 0)) {
        string0 = `+${string0}`;
    };
    return string0;
}