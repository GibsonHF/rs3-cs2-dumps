//
function script9701(int0: component): void {
    IF_SETTRANS(255, int0);
    IF_SETONTIMER(callback(script9712, int0), int0);
    return;
}