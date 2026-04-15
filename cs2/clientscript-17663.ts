//
function script17663(int0: obj): string {
    var int1 = item_getparam(int0, 8928);
    var string0 = "";
    var string1 = "";
    if ((item_getparam(int0, 9001) != -1 as var_reference)) {
        string1 = script15973(item_getparam(int0, 7382), 1);
        if ((WORLDMAP_GETDISPLAYCOORD(item_getparam(int0, 9001)) == 2)) {
            string0 = `${string0}- <col=00ff00>Charged (${string1})</col> - Passive active.<br>`;
        } else {
            string0 = `${string0}- <col=ffffff>Charging (${string1})</col> - Passive will be active after item has been equipped for <col=ffffff>${string1}</col><br>`;
        };
    };
    switch (int1) {
        case 48396: {
            string0 = `${string0}- <sprite=30015><nbsp><col=ffffff>${struct_getparam(48293, 2794)}:</col> Generates <col=ffffff>1 <sprite=30128><nbsp>${struct_getparam(48350, 2794)}</col> stack.`;
            string0 = `${string0}<br>- At <col=ffffff>${inttostring(script17464(), 10)}</col> stacks, your <sprite=30015><nbsp><col=ffffff>${struct_getparam(48293, 2794)}</col> is empowered and deals ${script17717(200)}</col>.`;
            break;
        }
        case 48397: {
            string0 = `${string0}- Maximum number of <col=ffffff><sprite=30123><nbsp>${struct_getparam(48334, 2794)}</col> stacks is increased by <col=ffffff>${inttostring(2, 10)}</col>.`;
            break;
        }
        case 49089: {
            string0 = `${string0}- Increases the level of <col=ffffff><sprite=30099><nbsp>${struct_getparam(48340, 2794)}</col> by <col=ffffff>15</col>.`;
            break;
        }
        case 52804: {
            string0 = script10159(string0);
            break;
        }
        case 52805: {
            string0 = script10537(string0);
            break;
        }
        case 52807: {
            string0 = script11216(string0);
            break;
        }
        case 52806: {
            string0 = script11217(string0);
            string0 = script17708(string0, 52779 as struct);
            break;
        }
        case 49554: {
            string0 = `${string0}- Stores <col=ffffff>${inttostring(50, 10)}%</col> of damage taken as <col=ffffff>${struct_getparam(49555, 2794)}</col> stacks, up to a maximum of <col=ffffff>${TOSTRING_LOCALISED(80000, 1)}</col>.`;
            string0 = `${string0}<br>- After <col=ffffff>${inttostring(15, 10)}</col> attacks launch an additional attack that deals <col=ffffff>${script7653(100, 1, 1, 0, 1)}%</col> of the total damage stored.`;
            break;
        }
        case 49549:
        case 29051: {
            string0 = script18379(int1, string0);
            break;
        }
        case 49560:
        case 49558: {
            string0 = script18547(int1, string0);
            break;
        }
        case 49561:
        case 49559: {
            string0 = script18546(int1, string0);
            break;
        }
        case 49688: {
            string0 = script16755(string0);
            break;
        }
        case 49689: {
            string0 = script16756(string0);
            break;
        }
        case 49690: {
            string0 = script18825(string0);
            break;
        }
        case 49691: {
            string0 = script18826(string0);
            break;
        }
        case 49394: {
            string0 = `${string0}- <col=A788DD>Necromancy attacks</col> have a <col=ffffff>${inttostring(5, 10)}%</col> chance to generate <col=ffffff>${inttostring(1, 10)}</col> <col=ffffff><sprite=30123><nbsp>${struct_getparam(48334, 2794)}</col> stack with each hit.`;
            break;
        }
        case 49828: {
            string0 = `${string0}- <col=A788DD>Necromancy attacks</col> have a <col=ffffff>${inttostring(10, 10)}%</col> chance to generate <col=ffffff>${inttostring(2, 10)}</col> <col=ffffff><sprite=30101><nbsp>${struct_getparam(48333, 2794)}</col> ${script4583(2, "stack", "stacks")} with each cast.`;
            break;
        }
        case 51046: {
            string0 = script19638(string0, int0);
            break;
        }
        case 51047: {
            string0 = script19639(string0);
            break;
        }
        case 51048: {
            string0 = script19640(string0);
            break;
        }
        case 51049: {
            string0 = script19641(string0);
            break;
        }
        case 51050: {
            string0 = script19642(string0);
            break;
        }
        case 51668: {
            string0 = script19973(string0);
            break;
        }
        case 51671: {
            string0 = script19974(string0);
            break;
        }
        case 51670: {
            string0 = script19975(string0);
            break;
        }
        case 52067: {
            string0 = script20090(string0);
            break;
        }
        case 52076: {
            string0 = script20091(string0);
            break;
        }
        case 52526: {
            string0 = script14722(string0);
            break;
        }
        case 52075: {
            string0 = script20092(string0);
            break;
        }
        case 52522: {
            string0 = script14723(string0);
            break;
        }
        case 52523: {
            string0 = script20395(string0);
            break;
        }
        case 52524: {
            string0 = script20396(string0);
            break;
        }
        case 52525: {
            string0 = script20397(string0);
            break;
        }
        case 52803: {
            string0 = script10536(string0);
            break;
        }
    };
    return string0;
}