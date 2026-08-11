//
function script5238(int0: number): void {
    var string0 = "Ability";
    var int1 = enum_getvalue(0, 73, 5033 as cs2enum, varbitplayer_4125);
    IF_SETHIDE(true, comp(1126, 24));  // tt2_noticeboard:tooltip_link1
    IF_SETHIDE(true, comp(1126, 25));  // tt2_noticeboard:tooltip_link2
    IF_SETHIDE(true, comp(1126, 26));  // tt2_noticeboard:tooltip_link3
    IF_SETHIDE(true, comp(1126, 27));  // tt2_noticeboard:tooltip_link4
    switch (int0) {
        case 1: {
            string0 = struct_getparam(int1, 1900);
            IF_SETHIDE(false, comp(1126, 24));  // tt2_noticeboard:tooltip_link1
            break;
        }
        case 2: {
            string0 = struct_getparam(int1, 1903);
            IF_SETHIDE(false, comp(1126, 25));  // tt2_noticeboard:tooltip_link2
            break;
        }
        case 3: {
            string0 = struct_getparam(int1, 1906);
            IF_SETHIDE(false, comp(1126, 26));  // tt2_noticeboard:tooltip_link3
            break;
        }
        case 4: {
            string0 = struct_getparam(int1, 1909);
            IF_SETHIDE(false, comp(1126, 27));  // tt2_noticeboard:tooltip_link4
            break;
        }
    };
    IF_SETTEXT(string0, comp(1126, 38));  // tt2_noticeboard:tooltip_text
    IF_SETHIDE(false, comp(1126, 13));  // tt2_noticeboard:tooltip_bounding_box
    return;
}