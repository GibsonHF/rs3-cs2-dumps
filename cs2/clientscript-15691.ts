//
function script15691(int0: struct, string0: string): string {
    var int1 = 0;
    var int2 = 0;
    switch (int0) {
        case 46485: {
            if ((script248() == 1)) {
                return strconcat("You will only be able to use the contents of this pack after the end of the competitive stage of Fresh Start Worlds.<br>", string0);
            };
            break;
        }
        case 51829:
        case 51830:
        case 51831:
        case 51832:
        case 51833:
        case 51834: {
            [int1, int2] = script20060(int0);
            if (((int1 > 0) || (int2 > 0))) {
                return strconcat(`*This package will be available again for purchase in approximately ${inttostring(int1, 10)} ${script4583(int1, "hour", "hours")} and ${inttostring(int2, 10)} ${script4583(int2, "minute", "minutes")}.<br><br>`, string0);
            };
            break;
        }
    };
    return string0;
}