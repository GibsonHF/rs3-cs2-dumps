//
function script21031(): void {
    if ((int0 == -1)) {
        script12478("Recieved null dbrow when requesting level requirement.");
        stack(0);
        return;
    };
    script20976();
    if (BRANCH_EQUALS(1)) {
        stack(1);
        return;
    };
    stack(dbrow_getfield(int0, 90160, 0));
    return;
}