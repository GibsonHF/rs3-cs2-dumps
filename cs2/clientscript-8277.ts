//
function script8277(int0: component, int1: component, int2: component, int3: component, int4: component): void {
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = -1 as quest;
    var int11 = script3981();
    while ((int8 <= int11)) {
        int10 = enum_getvalue(0, 3, 2252 as cs2enum, int8);
        if (((int10 != -1 as quest) && (script18798(int10) == 0))) {
            switch (script2193(int10)) {
                case 2: {
                    int7 = (int7 + 1);
                    break;
                }
                case 1: {
                    int6 = (int6 + 1);
                    break;
                }
                case 0: {
                    int5 = (int5 + 1);
                    break;
                }
            };
            int9 = (int9 + 1);
        };
        int8 = (int8 + 1);
    };
    IF_SETTEXT(`${inttostring(int5, 10)} / ${inttostring(int9, 10)}`, int0);
    IF_SETTEXT(`${inttostring(int6, 10)} / ${inttostring(int9, 10)}`, int1);
    IF_SETTEXT(`${inttostring(int7, 10)} / ${inttostring(int9, 10)}`, int3);
    IF_SETSIZE(SCALE(int7, int9, 16384), 0, 2, 1, int4);
    IF_SETSIZE(SCALE((int7 + int6), int9, 16384), 0, 2, 1, int2);
    return;
}