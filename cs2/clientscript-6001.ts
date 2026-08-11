//
function script6001(): void {
    if ((script13702(3) == 0)) {
        IF_SETGRAPHIC(23032 as graphic, comp(1092, 10));  // thas_lodestone_map:al_kharid
    };
    if ((script13702(5) == 0)) {
        IF_SETGRAPHIC(23025 as graphic, comp(1092, 12));  // thas_lodestone_map:burthorpe
    };
    if ((script13702(7) == 0)) {
        IF_SETGRAPHIC(23029 as graphic, comp(1092, 14));  // thas_lodestone_map:draynor
    };
    if ((script13702(8) == 0)) {
        IF_SETGRAPHIC(23031 as graphic, comp(1092, 15));  // thas_lodestone_map:edgeville
    };
    if ((script13702(9) == 0)) {
        IF_SETGRAPHIC(23022 as graphic, comp(1092, 16));  // thas_lodestone_map:falador
    };
    if ((script13702(10) == 0)) {
        IF_SETGRAPHIC(23020 as graphic, comp(1092, 17));  // thas_lodestone_map:lumbridge
    };
    if ((script13702(11) == 0)) {
        IF_SETGRAPHIC(23028 as graphic, comp(1092, 18));  // thas_lodestone_map:port_sarim
    };
    if ((script13702(13) == 0)) {
        IF_SETGRAPHIC(23024 as graphic, comp(1092, 20));  // thas_lodestone_map:taverley
    };
    if ((script13702(14) == 0)) {
        IF_SETGRAPHIC(23021 as graphic, comp(1092, 21));  // thas_lodestone_map:varrock
    };
    if ((script13702(22) == 0)) {
        IF_SETGRAPHIC(23041 as graphic, comp(1092, 32));  // thas_lodestone_map:wilderness
    };
    if ((script13702(23) == 0)) {
        IF_SETGRAPHIC(23042 as graphic, comp(1092, 33));  // thas_lodestone_map:ashdale
    };
    if ((script13702(29) == 0)) {
        IF_SETGRAPHIC(31780 as graphic, comp(1092, 35));  // thas_lodestone_map:cityofum
    };
    if ((script13702(33) == 0)) {
        IF_SETGRAPHIC(35679 as graphic, comp(1092, 41));  // thas_lodestone_map:wendlewick
    };
    if ((MAP_MEMBERS() == 0)) {
        if ((PLAYERMEMBER() == true)) {
            IF_SETGRAPHIC(23033 as graphic, comp(1092, 8));  // thas_lodestone_map:ancients
            IF_SETGRAPHIC(23034 as graphic, comp(1092, 9));  // thas_lodestone_map:lunar
            IF_SETGRAPHIC(23023 as graphic, comp(1092, 11));  // thas_lodestone_map:ardougne
            IF_SETGRAPHIC(23026 as graphic, comp(1092, 13));  // thas_lodestone_map:catherby
            IF_SETGRAPHIC(23027 as graphic, comp(1092, 19));  // thas_lodestone_map:seers
            IF_SETGRAPHIC(23030 as graphic, comp(1092, 25));  // thas_lodestone_map:yanille
            IF_SETGRAPHIC(23035 as graphic, comp(1092, 26));  // thas_lodestone_map:canifis
            IF_SETGRAPHIC(23036 as graphic, comp(1092, 27));  // thas_lodestone_map:eagles
            IF_SETGRAPHIC(23038 as graphic, comp(1092, 28));  // thas_lodestone_map:fremennik
            IF_SETGRAPHIC(23039 as graphic, comp(1092, 29));  // thas_lodestone_map:karamja
            IF_SETGRAPHIC(23037 as graphic, comp(1092, 30));  // thas_lodestone_map:ooglog
            IF_SETGRAPHIC(23040 as graphic, comp(1092, 31));  // thas_lodestone_map:tirranwn
            IF_SETGRAPHIC(24252 as graphic, comp(1092, 34));  // thas_lodestone_map:prifddinas
            IF_SETGRAPHIC(31133 as graphic, comp(1092, 23));  // thas_lodestone_map:menaphos
            IF_SETGRAPHIC(1083 as graphic, comp(1092, 24));  // thas_lodestone_map:dino_island
            IF_SETGRAPHIC(27107 as graphic, comp(1092, 22));  // thas_lodestone_map:fort
        } else if ((MAP_MEMBERS() == 0)) {
            if ((IF_FIND(comp(1092, 8)) == 1)) {  // thas_lodestone_map:ancients
                CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
                CC_SETGRAPHIC[1](23033 as graphic);
                CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
                CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
            };
            if ((IF_FIND(comp(1092, 9)) == 1)) {  // thas_lodestone_map:lunar
                CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
                CC_SETGRAPHIC[1](23034 as graphic);
                CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
                CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
            };
            if ((IF_FIND(comp(1092, 11)) == 1)) {  // thas_lodestone_map:ardougne
                CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
                CC_SETGRAPHIC[1](23023 as graphic);
                CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
                CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
            };
            if ((IF_FIND(comp(1092, 13)) == 1)) {  // thas_lodestone_map:catherby
                CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
                CC_SETGRAPHIC[1](23026 as graphic);
                CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
                CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
            };
            if ((IF_FIND(comp(1092, 19)) == 1)) {  // thas_lodestone_map:seers
                CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
                CC_SETGRAPHIC[1](23027 as graphic);
                CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
                CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
            };
            if ((IF_FIND(comp(1092, 25)) == 1)) {  // thas_lodestone_map:yanille
                CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
                CC_SETGRAPHIC[1](23030 as graphic);
                CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
                CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
            };
            if ((IF_FIND(comp(1092, 26)) == 1)) {  // thas_lodestone_map:canifis
                CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
                CC_SETGRAPHIC[1](23035 as graphic);
                CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
                CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
            };
            if ((IF_FIND(comp(1092, 27)) == 1)) {  // thas_lodestone_map:eagles
                CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
                CC_SETGRAPHIC[1](23036 as graphic);
                CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
                CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
            };
            if ((IF_FIND(comp(1092, 28)) == 1)) {  // thas_lodestone_map:fremennik
                CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
                CC_SETGRAPHIC[1](23038 as graphic);
                CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
                CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
            };
            if ((IF_FIND(comp(1092, 29)) == 1)) {  // thas_lodestone_map:karamja
                CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
                CC_SETGRAPHIC[1](23039 as graphic);
                CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
                CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
            };
            if ((IF_FIND(comp(1092, 30)) == 1)) {  // thas_lodestone_map:ooglog
                CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
                CC_SETGRAPHIC[1](23037 as graphic);
                CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
                CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
            };
            if ((IF_FIND(comp(1092, 31)) == 1)) {  // thas_lodestone_map:tirranwn
                CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
                CC_SETGRAPHIC[1](23040 as graphic);
                CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
                CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
            };
            if ((IF_FIND(comp(1092, 34)) == 1)) {  // thas_lodestone_map:prifddinas
                CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
                CC_SETGRAPHIC[1](24252 as graphic);
                CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
                CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
            };
            if ((IF_FIND(comp(1092, 23)) == 1)) {  // thas_lodestone_map:menaphos
                CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
                CC_SETGRAPHIC[1](31133 as graphic);
                CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
                CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
            };
            if ((IF_FIND(comp(1092, 24)) == 1)) {  // thas_lodestone_map:dino_island
                CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
                CC_SETGRAPHIC[1](1083 as graphic);
                CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
                CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
            };
            if ((IF_FIND(comp(1092, 22)) == 1)) {  // thas_lodestone_map:fort
                CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
                CC_SETGRAPHIC[1](27107 as graphic);
                CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
                CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
            };
            IF_SETGRAPHIC(23045 as graphic, comp(1092, 8));  // thas_lodestone_map:ancients
            IF_SETGRAPHIC(23045 as graphic, comp(1092, 9));  // thas_lodestone_map:lunar
            IF_SETGRAPHIC(23045 as graphic, comp(1092, 11));  // thas_lodestone_map:ardougne
            IF_SETGRAPHIC(23045 as graphic, comp(1092, 13));  // thas_lodestone_map:catherby
            IF_SETGRAPHIC(23045 as graphic, comp(1092, 19));  // thas_lodestone_map:seers
            IF_SETGRAPHIC(23045 as graphic, comp(1092, 25));  // thas_lodestone_map:yanille
            IF_SETGRAPHIC(23045 as graphic, comp(1092, 26));  // thas_lodestone_map:canifis
            IF_SETGRAPHIC(23045 as graphic, comp(1092, 27));  // thas_lodestone_map:eagles
            IF_SETGRAPHIC(23045 as graphic, comp(1092, 28));  // thas_lodestone_map:fremennik
            IF_SETGRAPHIC(23045 as graphic, comp(1092, 29));  // thas_lodestone_map:karamja
            IF_SETGRAPHIC(23045 as graphic, comp(1092, 30));  // thas_lodestone_map:ooglog
            IF_SETGRAPHIC(23045 as graphic, comp(1092, 31));  // thas_lodestone_map:tirranwn
            IF_SETGRAPHIC(23045 as graphic, comp(1092, 34));  // thas_lodestone_map:prifddinas
            IF_SETGRAPHIC(23045 as graphic, comp(1092, 23));  // thas_lodestone_map:menaphos
            IF_SETGRAPHIC(23045 as graphic, comp(1092, 24));  // thas_lodestone_map:dino_island
            IF_SETGRAPHIC(23045 as graphic, comp(1092, 22));  // thas_lodestone_map:fort
        } else {
            if ((script13702(1) == 0)) {
                IF_SETGRAPHIC(23033 as graphic, comp(1092, 8));  // thas_lodestone_map:ancients
            };
            if ((script13702(2) == 0)) {
                IF_SETGRAPHIC(23034 as graphic, comp(1092, 9));  // thas_lodestone_map:lunar
            };
            if ((script13702(4) == 0)) {
                IF_SETGRAPHIC(23023 as graphic, comp(1092, 11));  // thas_lodestone_map:ardougne
            };
            if ((script13702(6) == 0)) {
                IF_SETGRAPHIC(23026 as graphic, comp(1092, 13));  // thas_lodestone_map:catherby
            };
            if ((script13702(12) == 0)) {
                IF_SETGRAPHIC(23027 as graphic, comp(1092, 19));  // thas_lodestone_map:seers
            };
            if ((script13702(15) == 0)) {
                IF_SETGRAPHIC(23030 as graphic, comp(1092, 25));  // thas_lodestone_map:yanille
            };
            if ((script13702(16) == 0)) {
                IF_SETGRAPHIC(23035 as graphic, comp(1092, 26));  // thas_lodestone_map:canifis
            };
            if ((script13702(17) == 0)) {
                IF_SETGRAPHIC(23036 as graphic, comp(1092, 27));  // thas_lodestone_map:eagles
            };
            if ((script13702(18) == 0)) {
                IF_SETGRAPHIC(23038 as graphic, comp(1092, 28));  // thas_lodestone_map:fremennik
            };
            if ((script13702(19) == 0)) {
                IF_SETGRAPHIC(23039 as graphic, comp(1092, 29));  // thas_lodestone_map:karamja
            };
            if ((script13702(20) == 0)) {
                IF_SETGRAPHIC(23037 as graphic, comp(1092, 30));  // thas_lodestone_map:ooglog
            };
            if ((script13702(21) == 0)) {
                IF_SETGRAPHIC(23040 as graphic, comp(1092, 31));  // thas_lodestone_map:tirranwn
            };
            if ((script13702(24) == 0)) {
                IF_SETGRAPHIC(24252 as graphic, comp(1092, 34));  // thas_lodestone_map:prifddinas
            };
            if ((script13702(26) == 0)) {
                IF_SETGRAPHIC(31133 as graphic, comp(1092, 23));  // thas_lodestone_map:menaphos
            };
            if ((script13702(27) == 0)) {
                IF_SETGRAPHIC(1083 as graphic, comp(1092, 24));  // thas_lodestone_map:dino_island
            };
            if ((script13702(28) == 0)) {
                IF_SETGRAPHIC(27107 as graphic, comp(1092, 22));  // thas_lodestone_map:fort
            };
            if ((script13702(29) == 0)) {
                IF_SETGRAPHIC(31780 as graphic, comp(1092, 35));  // thas_lodestone_map:cityofum
            };
        };
    } else if ((MAP_MEMBERS() == 0)) {
        if ((IF_FIND(comp(1092, 8)) == 1)) {  // thas_lodestone_map:ancients
            CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
            CC_SETGRAPHIC[1](23033 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 9)) == 1)) {  // thas_lodestone_map:lunar
            CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
            CC_SETGRAPHIC[1](23034 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 11)) == 1)) {  // thas_lodestone_map:ardougne
            CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
            CC_SETGRAPHIC[1](23023 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 13)) == 1)) {  // thas_lodestone_map:catherby
            CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
            CC_SETGRAPHIC[1](23026 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 19)) == 1)) {  // thas_lodestone_map:seers
            CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
            CC_SETGRAPHIC[1](23027 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 25)) == 1)) {  // thas_lodestone_map:yanille
            CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
            CC_SETGRAPHIC[1](23030 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 26)) == 1)) {  // thas_lodestone_map:canifis
            CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
            CC_SETGRAPHIC[1](23035 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 27)) == 1)) {  // thas_lodestone_map:eagles
            CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
            CC_SETGRAPHIC[1](23036 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 28)) == 1)) {  // thas_lodestone_map:fremennik
            CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
            CC_SETGRAPHIC[1](23038 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 29)) == 1)) {  // thas_lodestone_map:karamja
            CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
            CC_SETGRAPHIC[1](23039 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 30)) == 1)) {  // thas_lodestone_map:ooglog
            CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
            CC_SETGRAPHIC[1](23037 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 31)) == 1)) {  // thas_lodestone_map:tirranwn
            CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
            CC_SETGRAPHIC[1](23040 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 34)) == 1)) {  // thas_lodestone_map:prifddinas
            CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
            CC_SETGRAPHIC[1](24252 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 23)) == 1)) {  // thas_lodestone_map:menaphos
            CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
            CC_SETGRAPHIC[1](31133 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 24)) == 1)) {  // thas_lodestone_map:dino_island
            CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
            CC_SETGRAPHIC[1](1083 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        if ((IF_FIND(comp(1092, 22)) == 1)) {  // thas_lodestone_map:fort
            CC_CREATE[1](comp(1092, 42), 5, IF_GETNEXTSUBID(comp(1092, 42)));  // thas_lodestone_map:dynamic_layer
            CC_SETGRAPHIC[1](27107 as graphic);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        };
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 8));  // thas_lodestone_map:ancients
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 9));  // thas_lodestone_map:lunar
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 11));  // thas_lodestone_map:ardougne
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 13));  // thas_lodestone_map:catherby
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 19));  // thas_lodestone_map:seers
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 25));  // thas_lodestone_map:yanille
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 26));  // thas_lodestone_map:canifis
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 27));  // thas_lodestone_map:eagles
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 28));  // thas_lodestone_map:fremennik
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 29));  // thas_lodestone_map:karamja
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 30));  // thas_lodestone_map:ooglog
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 31));  // thas_lodestone_map:tirranwn
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 34));  // thas_lodestone_map:prifddinas
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 23));  // thas_lodestone_map:menaphos
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 24));  // thas_lodestone_map:dino_island
        IF_SETGRAPHIC(23045 as graphic, comp(1092, 22));  // thas_lodestone_map:fort
    } else {
        if ((script13702(1) == 0)) {
            IF_SETGRAPHIC(23033 as graphic, comp(1092, 8));  // thas_lodestone_map:ancients
        };
        if ((script13702(2) == 0)) {
            IF_SETGRAPHIC(23034 as graphic, comp(1092, 9));  // thas_lodestone_map:lunar
        };
        if ((script13702(4) == 0)) {
            IF_SETGRAPHIC(23023 as graphic, comp(1092, 11));  // thas_lodestone_map:ardougne
        };
        if ((script13702(6) == 0)) {
            IF_SETGRAPHIC(23026 as graphic, comp(1092, 13));  // thas_lodestone_map:catherby
        };
        if ((script13702(12) == 0)) {
            IF_SETGRAPHIC(23027 as graphic, comp(1092, 19));  // thas_lodestone_map:seers
        };
        if ((script13702(15) == 0)) {
            IF_SETGRAPHIC(23030 as graphic, comp(1092, 25));  // thas_lodestone_map:yanille
        };
        if ((script13702(16) == 0)) {
            IF_SETGRAPHIC(23035 as graphic, comp(1092, 26));  // thas_lodestone_map:canifis
        };
        if ((script13702(17) == 0)) {
            IF_SETGRAPHIC(23036 as graphic, comp(1092, 27));  // thas_lodestone_map:eagles
        };
        if ((script13702(18) == 0)) {
            IF_SETGRAPHIC(23038 as graphic, comp(1092, 28));  // thas_lodestone_map:fremennik
        };
        if ((script13702(19) == 0)) {
            IF_SETGRAPHIC(23039 as graphic, comp(1092, 29));  // thas_lodestone_map:karamja
        };
        if ((script13702(20) == 0)) {
            IF_SETGRAPHIC(23037 as graphic, comp(1092, 30));  // thas_lodestone_map:ooglog
        };
        if ((script13702(21) == 0)) {
            IF_SETGRAPHIC(23040 as graphic, comp(1092, 31));  // thas_lodestone_map:tirranwn
        };
        if ((script13702(24) == 0)) {
            IF_SETGRAPHIC(24252 as graphic, comp(1092, 34));  // thas_lodestone_map:prifddinas
        };
        if ((script13702(26) == 0)) {
            IF_SETGRAPHIC(31133 as graphic, comp(1092, 23));  // thas_lodestone_map:menaphos
        };
        if ((script13702(27) == 0)) {
            IF_SETGRAPHIC(1083 as graphic, comp(1092, 24));  // thas_lodestone_map:dino_island
        };
        if ((script13702(28) == 0)) {
            IF_SETGRAPHIC(27107 as graphic, comp(1092, 22));  // thas_lodestone_map:fort
        };
        if ((script13702(29) == 0)) {
            IF_SETGRAPHIC(31780 as graphic, comp(1092, 35));  // thas_lodestone_map:cityofum
        };
    };
    if ((script18376() == 0)) {
        IF_SETHIDE(true, comp(1092, 37));  // thas_lodestone_map:christmas_hub
    } else {
        IF_SETHIDE(false, comp(1092, 37));  // thas_lodestone_map:christmas_hub
    };
    if ((script18797() == 0)) {
        IF_SETHIDE(true, comp(1092, 38));  // thas_lodestone_map:easter_hub
    } else {
        IF_SETHIDE(false, comp(1092, 38));  // thas_lodestone_map:easter_hub
    };
    if ((script17140() == 0)) {
        IF_SETHIDE(true, comp(1092, 40));  // thas_lodestone_map:halloween_hub
    } else {
        IF_SETHIDE(false, comp(1092, 40));  // thas_lodestone_map:halloween_hub
    };
    if ((script8695() == 0)) {
        IF_SETHIDE(true, comp(1092, 39));  // thas_lodestone_map:beach
    } else {
        IF_SETHIDE(false, comp(1092, 39));  // thas_lodestone_map:beach
    };
    script8841(30, 1);
    script11676();
    var int0 = ENUM_GETOUTPUTCOUNT(13483 as cs2enum);
    var int1 = comp(-1, 65535);
    int0 = (int0 - 1);
    while ((int0 >= 0)) {
        int1 = enum_getvalue(0, 9, 13483 as cs2enum, int0);
        if ((IF_FIND(int1) == 1)) {
            cc_setparam(7215, int1);
        };
    };
    return;
}