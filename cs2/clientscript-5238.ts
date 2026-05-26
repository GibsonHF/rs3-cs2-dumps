//
function script5238(int0: number): void {
    var string0 = "Ability";
    var int1 = enum_getvalue(0, 73, 5033 as cs2enum, varbitplayer_4125);
    IF_SETHIDE(1, 73793560);
    IF_SETHIDE(1, 73793561);
    IF_SETHIDE(1, 73793562);
    IF_SETHIDE(1, 73793563);
    switch (int0) {
        case 1: {
            string0 = struct_getparam(int1, 1900);
            IF_SETHIDE(0, 73793560);
            break;
        }
        case 2: {
            string0 = struct_getparam(int1, 1903);
            IF_SETHIDE(0, 73793561);
            break;
        }
        case 3: {
            string0 = struct_getparam(int1, 1906);
            IF_SETHIDE(0, 73793562);
            break;
        }
        case 4: {
            string0 = struct_getparam(int1, 1909);
            IF_SETHIDE(0, 73793563);
            break;
        }
    };
    IF_SETTEXT(string0, 73793574);
    IF_SETHIDE(0, 73793549);
    return;
}