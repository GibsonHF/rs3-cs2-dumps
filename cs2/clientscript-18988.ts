//
function script18988(int0: int): [graphic, graphic, graphic] {
    switch (int0) {
        case 0:
        case 3:
        case 4:
        case 5:
        case 6:
        case 11:
        case 13:
        case 18:
        case 19:
        case 20:
        case 21:
        case 24: {
            return [33891 as graphic, 33887 as graphic, 33889 as graphic];
        }
        case 1:
        case 2:
        case 7:
        case 8:
        case 9:
        case 10:
        case 14:
        case 15:
        case 16:
        case 17:
        case 22:
        case 23: {
            return [33892 as graphic, 33888 as graphic, 33890 as graphic];
        }
        case 12: {
            if ((varbitplayer_55644 == 6)) {
                return [33893 as graphic, 33893 as graphic, 33893 as graphic];
            };
            return [33894 as graphic, 33894 as graphic, 33895 as graphic];
        }
    };
    script12478(`unexpected trh198 tile id: ${inttostring(int0, 10)}`);
    return [-1 as graphic, -1 as graphic, -1 as graphic];
}