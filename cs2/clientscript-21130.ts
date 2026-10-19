//
function script21130(): void {
    if ((int0 <= 4095)) {
        stack(0);
        stack(int0);
        return;
    };
    var int0 = (int0 - 4096);
    stack((1 + (int0 / 256)));
    stack(MODULO(int0, 256));
    return;
}