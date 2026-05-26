//
function script9813(int0: number, int1: number): void {
    if ((int1 == -1)) {
        var int1 = IF_GETPARENTLAYER(int0);
    };
    script9808(int0);
    IF_SETONRESIZE(callback(script9815, int0), int1);
    IF_CALLONRESIZE(int1);
    return;
}