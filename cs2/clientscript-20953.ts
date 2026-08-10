//
function script20953(): void {
    var int3 = dbrow_getfield(int1, 1343536, 0);
    if ((int3 == 0)) {
        stack(1);
        return;
    };
    if ((MAP_MEMBERS() == 1)) {
        stack(1);
        return;
    };
    if ((PLAYERMEMBER() == false)) {
        if ((int2 == 1)) {
            script1296("You need to be a member to unlock this relic.");
        };
    } else if ((int2 == 1)) {
        script1296("You need to be on a members' world to unlock this relic.");
    };
    stack(0);
    return;
}