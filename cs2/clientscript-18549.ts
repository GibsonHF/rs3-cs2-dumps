//
function script18549(int0: dbrow, int1: graphic, int2: graphic, int3: graphic, int4: graphic): [graphic, graphic, graphic, graphic] {
    if ((dbrow_getfield(int0, 790656, 0) == false)) {
        if ((script18539() == 1)) {
            var int1 = 33584 as graphic;
            var int2 = 33585 as graphic;
        } else if ((script18536() == 1)) {
            int1 = 22901 as graphic;
            int2 = 22945 as graphic;
        } else if ((script18537() == 1)) {
            int1 = 27773 as graphic;
            int2 = 27774 as graphic;
            var int3 = 27776 as graphic;
            var int4 = 27775 as graphic;
        } else if ((script18538() == 1)) {
            int1 = 1528 as graphic;
            int2 = 1529 as graphic;
            int3 = 1537 as graphic;
            int4 = 1530 as graphic;
        };
    };
    return [int1, int2, int3, int4];
}