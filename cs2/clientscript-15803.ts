//
function script15803(): void {
    var int0 = IF_GETX(comp(846, 3));  // tut7_sandbox_goal:floater
    if ((int0 <= (IF_GETWIDTH(comp(846, 0)) - (22 * 2)))) {  // tut7_sandbox_goal:bounds
        IF_SETPOSITION((IF_GETX(comp(846, 3)) + 1), IF_GETY(comp(846, 3)), 0, 0, comp(846, 3));  // tut7_sandbox_goal:floater
    } else {
        IF_SETHIDE(true, comp(846, 3));  // tut7_sandbox_goal:floater
    };
    return;
}