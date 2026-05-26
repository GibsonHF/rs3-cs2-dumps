//
function script9509(int0: number): void {
    IF_SETTRANS(0, 49086507);
    IF_SETTEXT(`+${inttostring(int0, 10)}`, 49086507);
    IF_SETONTIMER(callback(script9510, 49086507), 49086507);
    return;
}