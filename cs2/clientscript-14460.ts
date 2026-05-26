//
function script14460(): void {
    if ((PLAYERMEMBER() == 1)) {
        script14466(6412, 6413, 42860578);
    } else {
        script14466(6106, 6413, 42860578);
    };
    script15079(2);
    CC_DELETEALL(82117164);
    var int0 = -1;
    var int1 = script19062();
    while ((++int0 < int1)) {
        CC_CREATE(82117164, 5, int0);
    };
    int0 = 0;
    while ((++int0 <= 12)) {
        script14465(int0);
    };
    IF_SETOPCURSOR(1, 201, 42860728);
    IF_SETTEXT("Fill the gems on the right by selecting prizes from the categories on the left. You are guaranteed to win one of these prizes!", 42860674);
    return;
}