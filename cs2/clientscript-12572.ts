//
function script12572(int0: component, int1: component): void {
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    varbitclient_32659 = 0;
    varbitclient_32660 = 0;
    while ((int2 < 6)) {
        int3 = (5 + RANDOMINC(15));
        CC_CREATE(int0, 4, int2);
        script12573(int3);
        int4 = (CC_GETWIDTH() * (int2 - 2));
        CC_SETPOSITION(int4, 0, 0, 4);
        CC_CREATE(int1, 5, int2);
        script12574(int3);
        CC_SETPOSITION(int4, 0, 0, 4);
        int2 = (int2 + 1);
    };
    return;
}