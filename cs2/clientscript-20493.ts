//
function script20493(int0: component, int1: int, int2: int, int3: unknown_int): [int, int] {
    var string0 = "";
    switch (int3) {
        case 1000: {
            string0 = "Deprecated. Use groupboxes instead.";
            break;
        }
        case 23: {
            string0 = "Groupboxes used for everything other than backgrounds (eg progress bar)";
            break;
        }
        case 1001: {
            string0 = "Use for non-scrolling contents.";
            break;
        }
        case 1002: {
            string0 = "Start and end your content at a $y offset of ^spacing_default. The contents will then be cut off by box edges when scrolling.";
            break;
        }
        case 1003: {
            string0 = "Use for non-scrolling contents. The title can be updated via if/cc_settext.";
            break;
        }
        case 1004: {
            string0 = "Start and end your content at a $y offset of ^spacing_default. The contents will then be cut off by box edges when scrolling. The title can be updated via if/cc_settext.";
            break;
        }
        default: {
            return [int1, int2];
        }
    };
    var int4 = script20478(string0, IF_GETWIDTH(int0), 2100 as dbrow, 0);
    script2995(int0, int1++, 0, 0, 0, 0, 0, int4, 1, 0, 2100 as dbrow, string0);
    return [int1, ((int2 + int4) + 10)];
}