//
function script15304(int0: unknown_int): void {
    if ((script13749() == false)) {
        IF_SETDRAGDEADZONE(5, int0);
        stack(5);
        stack(int0);
        IF_SETDRAGDEADTIME();
    } else {
        IF_SETDRAGDEADZONE(20, int0);
        stack(5);
        stack(int0);
        IF_SETDRAGDEADTIME();
    };
    return;
}