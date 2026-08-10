//
function script21030(): void {
    if ((int0 == -1)) {
        script12478("Recieved null dbrow when requesting capacity.");
        stack(0);
        return;
    };
    var int1 = dbrow_getfield(int0, 90288, 0);
    stack(int1);
    script20975();
    int1 = [];
    stack(int1);
    return;
}