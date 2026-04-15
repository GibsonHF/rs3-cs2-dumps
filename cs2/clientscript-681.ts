//[clientscript,gravestone_shop_setup]
function script681(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component, int6: component, int7: component): void {
    CC_DELETEALL(int0);
    IF_SETSCROLLPOS(0, 0, int0);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    IF_SETTEXT("Gravestones", int6);
    IF_SETTEXT("Please make your selection from the list.", int7);
    IF_SETTEXT("None selected.", int4);
    IF_SETTEXT("None selected.", int5);
    script682(int0, 0, 0, int2, int3, int4, int5, int6, int7);
    var int8 = 1;
    var int9 = 0;
    while ((int9 <= 26)) {
        if ((TESTBIT(varbitplayer_1670, int9) == 1)) {
            script682(int0, (int9 + 1), int8, int2, int3, int4, int5, int6, int7);
            int8 = (int8 + 1);
        };
        int9 = (int9 + 1);
    };
    var int10 = ((IF_GETWIDTH(int0) - 164) / 2);
    var int11 = (int10 + ((146 + int10) * int8));
    if ((int11 > IF_GETHEIGHT(int0))) {
        IF_SETSCROLLSIZE(0, int11, int0);
        script31(int1, int0, 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    };
    return;
}