//
function script15792(int0: number): void {
    if ((int0 == -1)) {
        return;
    };
    var int1 = comp(845, 5);  // tut7_camera:gesture
    stack(15796);
    stack(IF_GETX(int1));
    stack(IF_GETY(int1));
    stack(script15793(int0));
    stack(int0);
    stack(0);
    stack(int1);
    IF_SETONTIMER("iiiiiii", int1);
    return;
}