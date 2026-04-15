//
function script5238(int0: unknown_int): void {
    var string0 = "Ability";
    var int1 = enum_getvalue(0, 73, 5033 as cs2enum, varbitplayer_4125);
    IF_SETHIDE(true, comp(1126, 24));
    IF_SETHIDE(true, comp(1126, 25));
    IF_SETHIDE(true, comp(1126, 26));
    IF_SETHIDE(true, comp(1126, 27));
    switch (int0) {
        case 1: {
            string0 = struct_getparam(int1, 1900);
            IF_SETHIDE(false, comp(1126, 24));
            break;
        }
        case 2: {
            string0 = struct_getparam(int1, 1903);
            IF_SETHIDE(false, comp(1126, 25));
            break;
        }
        case 3: {
            string0 = struct_getparam(int1, 1906);
            IF_SETHIDE(false, comp(1126, 26));
            break;
        }
        case 4: {
            string0 = struct_getparam(int1, 1909);
            IF_SETHIDE(false, comp(1126, 27));
            break;
        }
    };
    IF_SETTEXT(string0, comp(1126, 38));
    IF_SETHIDE(false, comp(1126, 13));
    return;
}