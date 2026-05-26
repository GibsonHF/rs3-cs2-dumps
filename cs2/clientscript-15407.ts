//
function script15407(): void {
    var int0 = IF_GETWIDTH(17301514);
    var int1 = IF_GETHEIGHT(17301514);
    var int2 = IF_GETX(17301520);
    var int3 = IF_GETY(17301520);
    var int4 = IF_GETWIDTH(17301520);
    var int5 = IF_GETHEIGHT(17301520);
    IF_SETSIZE(int2, 0, 0, 1, 17301515);
    IF_SETSIZE(((int0 - int2) - int4), 0, 0, 1, 17301516);
    IF_SETSIZE(0, int3, 1, 0, 17301517);
    IF_SETSIZE(0, ((int1 - int3) - int5), 1, 0, 17301518);
    IF_SETONTIMER(callback(script4156, int0, int1), 17301514);
    return;
}