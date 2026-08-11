//
function script20281(int0: number): void {
    script20282();
    var int0 = (int0 + 1);
    if ((int0 > 2)) {
        IF_SETONTIMER(callback(), comp(1361, 2));  // league_child_tasks:skin_listener
    } else {
        IF_SETONTIMER(callback(script20281, int0), comp(1361, 2));  // league_child_tasks:skin_listener
    };
    return;
}