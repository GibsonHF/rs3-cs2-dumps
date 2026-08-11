//
function script14460(): void {
    if ((PLAYERMEMBER() == true)) {
        script14466(6412, 6413, 42860578);
    } else {
        script14466(6106, 6413, 42860578);
    };
    script15079(2);
    CC_DELETEALL(comp(1253, 556));  // wheel_of_fortune:fake_op
    var int0 = -1;
    var int1 = script19062();
    int0 = (int0 + 1);
    while ((int0 < int1)) {
        CC_CREATE(comp(1253, 556), 5, int0);  // wheel_of_fortune:fake_op
    };
    int0 = 0;
    int0 = (int0 + 1);
    while ((int0 <= 12)) {
        script14465(int0);
    };
    IF_SETOPCURSOR(1, 201, comp(654, 184));  // trh168:claim_chest
    IF_SETTEXT("Fill the gems on the right by selecting prizes from the categories on the left. You are guaranteed to win one of these prizes!", comp(654, 130));  // trh168:tutorial_text
    return;
}