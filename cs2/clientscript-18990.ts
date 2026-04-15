//
function script18990(int0: int): [obj, int, int] {
    switch (int0) {
        case 1: {
            return [varplayer_11755, varplayer_11758, varbitplayer_55657];
        }
        case 2: {
            return [varplayer_11756, varplayer_11759, varbitplayer_55658];
        }
        case 3: {
            return [varplayer_11757, varplayer_11760, varbitplayer_55659];
        }
    };
    script12478(`Uhandled $slot ${inttostring(int0, 10)}`);
    return [-1 as obj, -1, -1];
}