//
function script9509(int0: int): void {
    IF_SETTRANS(0, comp(749, 43));
    IF_SETTEXT(`+${inttostring(int0, 10)}`, comp(749, 43));
    IF_SETONTIMER(callback(script9510, 49086507), comp(749, 43));
    return;
}