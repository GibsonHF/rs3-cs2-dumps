//
function script15304(int0: number): void {
    if ((script13749() == 0)) {
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