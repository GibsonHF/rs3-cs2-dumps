//
function script17412(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    IF_SETGRAPHIC(21231 as graphic, comp(1253, 5));  // wheel_of_fortune:background
    IF_SETSIZE(0, 0, 1, 1, comp(1253, 5));  // wheel_of_fortune:background
    CC_DELETEALL(comp(1253, 3));  // wheel_of_fortune:background_holder
    [int1, int0] = [int0, (int0 + 1)];
    int2 = 0;
    stack(82116611);
    stack(int1);
    stack(int2);
    int2 = (int2 + 1);
    script15938(0, -45, 1, 1, 800, 600, 0, 0);
    CC_SENDTOFRONT();
    stack(int1);
    stack(int2);
    int2 = (int2 + 1);
    script7919(0, 0, 0, 1, 0, 0, 1, 1, 19608, 0, 0, 0, 0);
    return;
}