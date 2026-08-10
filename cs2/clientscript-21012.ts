//
function script21012(): void {
    var int2 = 0;
    var int3 = script14659(int0);
    int2 = (int2 + 1);
    while ((int2 <= int3)) {
        if ((script14656(int0, int2) == int1)) {
            stack(1);
            return;
        };
    };
    stack(0);
    return;
}