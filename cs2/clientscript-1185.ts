//[proc,loginscreen_brightness]
function script1185(int0: component, int1: component): void {
    var int2 = (IF_GETWIDTH(int0) - IF_GETWIDTH(int1));
    var int3 = 4;
    var int4 = CLIENTOPTION_GET(5);
    IF_SETPOSITION((int4 * (int2 / int3)), 0, 0, 0, int1);
    IF_SETSIZE((IF_GETX(int0) + IF_GETX(int1)), 0, 0, 1, comp(1513, 47));
    return;
}