// Need to be defined for the typescript compiler
interface Boolean { }
interface Function { }
interface Number { }
interface Object { }
interface RegExp { }
interface String { }
interface IArguments { }
interface BigInt { }
interface Symbol { }
interface Array<T> { [Symbol.iterator](): any; }
declare var Symbol: { readonly iterator: unique symbol };

// Language constructs
declare class BoundFunction { }
declare function operator(op: string, ...values:any[]): any;
declare function callback(): BoundFunction;
declare function callback<T extends (...args: any[]) => any>(fn: T, ...args: T extends (...args: (infer ARGS)[]) => any ? ARGS : never): BoundFunction;
declare function comp(interf: number, element: number): component;
declare function comprel(interf: number, elementrel: number): component;
declare function pos(level: number, chunkx:number, chunkz:number, subx:number, subz:number): coordgrid;
declare function stack(...args: any[]): any;

// Compiler intrinsics
declare function varbittable(): string;
declare function opnametoid(string0: string): number;
declare function call0(int0: number): void;
declare function call1(int0: number): void;
declare function getvar0(int0: number): void;
declare function getvar1(int0: number): void;
declare function getvar2(int0: number): void;
declare function getvarother0(int0: number): void;
declare function getvarother1(int0: number): void;
declare function getvarother2(int0: number): void;
declare function setvar0(int0: number): void;
declare function setvar1(int0: number): void;
declare function setvar2(int0: number): void;
declare function op(int0: number): void;

// Clientscript types
type int = number
type type_2 = number
type quest = number
type questhelp = number
type cursor = number
type seq = number
type colour = number
type loc_shape = number
type component = number
type idkit = number
type midi = number
type npc_mode = number
type namedobj = number
type synth = number
type type_15 = number
type area = number
type stat = number
type npc_stat = number
type writeinv = number
type mesh = number
type maparea = number
type coordgrid = number
type graphic = number
type chatphrase = number
type fontmetrics = number
type cs2enum = number
type type_27 = number
type jingle = number
type chatcat = number
type loc = number
type model = number
type npc = number
type obj = number
type player_uid = number
type type_35 = BigInt
type spotanim = number
type npc_uid = number
type inv = number
type texture = number
type category = number
type char = number
type laser = number
type bas = number
type type_45 = number
type collision_geometry = number
type physics_model = number
type physics_control_modifier = number
type clanhash = BigInt
type coordfine = string
type cutscene = number
type itemcode = number
type type_54 = number
type mapsceneicon = number
type clanforumqfc = BigInt
type vorbis = number
type verify_object = number
type mapelement = number
type categorytype = number
type social_network = number
type hitmark = number
type package = number
type particle_effector = number
type type_65 = number
type particle_emitter = number
type plogtype = number
type unsigned_int = number
type skybox = number
type skydecor = number
type hash64 = BigInt
type inputtype = number
type struct = number
type dbrow = number
type type_75 = number
type type_76 = number
type type_77 = number
type type_78 = number
type type_79 = number
type type_80 = number
type type_81 = number
type type_83 = number
type type_84 = number
type type_85 = number
type type_86 = number
type type_87 = number
type type_88 = number
type gwc_platform = number
type type_90 = number
type type_91 = number
type type_92 = number
type type_93 = number
type bug_template = number
type billing_auth_flag = number
type account_feature_flag = number
type interface = number
type toplevelinterface = number
type overlayinterface = number
type clientinterface = number
type movespeed = number
type material = number
type seqgroup = number
type temp_hiscore = number
type temp_hiscore_length_type = number
type temp_hiscore_display_type = number
type temp_hiscore_contribute_result = number
type audiogroup = number
type audiomixbuss = number
type long = BigInt
type crm_channel = number
type http_image = number
type pop_up_display_behaviour = number
type poll = number
type type_115 = BigInt
type type_116 = BigInt
type pointlight = number
type player_group = number
type player_group_status = number
type player_group_invite_result = number
type player_group_modify_result = number
type player_group_join_or_create_result = number
type player_group_affinity_modify_result = number
type player_group_delta_type = number
type client_type = number
type telemetry_interval = number
type type_127 = number
type type_128 = number
type type_129 = number
type type_130 = number
type achievement = number
type stylesheet = number
type type_138 = number
type type_200 = number
type type_201 = number
type type_202 = number
type type_203 = number
type type_204 = number
type type_205 = number
type type_206 = number
type type_207 = number
type type_208 = number
type var_reference = number
type unknown_int = number
type unknown_long = BigInt
type unknown_string = string
type scriptref = number
type scriptsubref = number

// VM opcodes (scrambled_id -> canonical_id -> name)
declare function pushlocalint(): unknown_int; // 1656 -> 33
declare function plus(int0: int, int1: int): int; // 1774 -> 4000
declare function pushconst(...args: any[]): any; // 1335 -> 9001
declare function intdiv(int0: int, int1: int): int; // 1168 -> 4003
declare function poplocalint(int0: unknown_int): void; // 843 -> 34
declare function push_array(int0: int): unknown_int; // 393 -> 45
declare function pop_array(int0: int, int1: unknown_int): void; // 192 -> 46
declare function branch_lt(...args: any[]): any; // 1451 -> 9
declare function jump(): void; // 1378 -> 6
declare function IF_GETTEXT(int0: component): string; // 483 -> 2602
declare function LOWERCASE(string0: string): string; // 2173 -> 4103
declare function strcmp(string0: string, string1: string): int; // 504 -> 4107
declare function AND(int0: int, int1: int): int; // 1230 -> 4014
declare function minus(int0: int, int1: int): int; // 1722 -> 4001
declare function gosub(...args: any[]): any; // 1077 -> 40
declare function OC_MEMBERS(int0: obj): int; // 2195 -> 10314
declare function branch_eq(...args: any[]): any; // 1332 -> 8
declare function MAP_MEMBERS(): unknown_int; // 1452 -> 10028
declare function INV_TOTAL(int0: inv, int1: obj): int; // 1437 -> 3303
declare function pushvar(...args: any[]): any; // 523 -> 42
declare function CC_DELETEALL(int0: component): void; // 524 -> 152
declare function IF_SETHIDE(int0: boolean, int1: component): void; // 1710 -> 2003
declare function ENUM_GETOUTPUTCOUNT(int0: cs2enum): int; // 345 -> 3411
declare function enum_getvalue(int0: number, int1: number, int2: number, int3: number): any; // 121 -> 3408
declare function IF_FIND(int0: component): unknown_int; // 161 -> 10102
declare function intmul(int0: int, int1: int): int; // 1562 -> 4002
declare function CC_GETWIDTH(): int; // 963 -> 10202
declare function IF_GETHEIGHT(int0: component): int; // 450 -> 2503
declare function branch_gt(...args: any[]): any; // 1588 -> 10
declare function IF_SETSCROLLSIZE(int0: int, int1: int, int2: component): void; // 1791 -> 2120
declare function IF_SETSCROLLPOS(int0: int, int1: int, int2: component): void; // 1535 -> 2100
declare function pushvarbit(): int; // 1058 -> 10022
declare function IF_GETY(int0: component): int; // 1530 -> 2501
declare function IF_GETHIDE(int0: component): boolean; // 1516 -> 10077
declare function branch_gteq(...args: any[]): any; // 513 -> 32
declare function IF_SETSIZE(int0: int, int1: int, int2: int, int3: int, int4: component): void; // 1794 -> 2001
declare function IF_GETWIDTH(int0: component): int; // 193 -> 2502
declare function MIN(int0: int, int1: int): int; // 1344 -> 4016
declare function MAX(int0: int, int1: int): int; // 282 -> 4017
declare function IF_HASSUBOVERLAY(int0: component, int1: overlayinterface): unknown_int; // 1198 -> 10069
declare function IF_SETPOSITION(int0: int, int1: int, int2: int, int3: int, int4: component): void; // 1924 -> 2000
declare function branch_not(...args: any[]): any; // 1596 -> 7
declare function GET_ENTITY_BOUNDING_BOX(): [unknown_int, int, int, int, int]; // 8 -> 10172
declare function GET_ENTITY_SCREEN_POSITION(int0: int): [int, int, int]; // 1445 -> 10173
declare function GET_ENTITY_OVERLAY_HEIGHT(): int; // 367 -> 10174
declare function npc_getparam(...args: any[]): any; // 1983 -> 10076
declare function CC_FIND(int0: component, int1: int): unknown_int; // 781 -> 10116
declare function CC_SETHIDE(int0: boolean): void; // 25 -> 1003
declare function CC_SETPOSITION(int0: int, int1: int, int2: int, int3: int): void; // 1694 -> 1000
declare function CC_SETSIZE(int0: int, int1: int, int2: unknown_int, int3: unknown_int): void; // 35 -> 1001
declare function IF_GETNEXTSUBID(int0: component): int; // 2165 -> 2703
declare function popvar(...args: any[]): any; // 1280 -> 43
declare function CC_CREATE(int0: component, int1: unknown_int, int2: int): void; // 1892 -> 150
declare function CC_SETTRANS(int0: int): void; // 1215 -> 1103
declare function IF_SETFILL(int0: unknown_int, int1: unknown_int): void; // 1921 -> 2102
declare function pushlocalstring(): unknown_string; // 2084 -> 35
declare function MODULO(int0: int, int1: int): int; // 2046 -> 4011
declare function struct_getparam(...args: any[]): any; // 502 -> 4500
declare function branch_lteq(...args: any[]): any; // 2163 -> 31
declare function IF_SETONMOUSEREPEAT(vararg: BoundFunction, int0: unknown_int): void; // 2039 -> 2412
declare function IF_SETOP(int0: int, string0: string, int1: component): void; // 950 -> 2300
declare function IF_SETONCLICK(vararg: BoundFunction, int0: unknown_int): void; // 969 -> 2400
declare function CC_SETONOP(vararg: BoundFunction): void; // 84 -> 1409
declare function CC_SETOP(int0: int, string0: string): void; // 1203 -> 1300
declare function CC_SETFILL(int0: unknown_int): void; // 412 -> 1102
declare function CC_SETNOCLICKTHROUGH(int0: boolean): void; // 1509 -> 10105
declare function IF_SETOUTLINE(int0: unknown_int, int1: component): void; // 2010 -> 2116
declare function IF_GETTARGETMASK(int0: component): int; // 1342 -> 2800
declare function inttostring(int0: int, int1: unknown_int): string; // 1717 -> 10064
declare function strconcat(string0: string, string1: string): string; // 1531 -> 4101
declare function IF_SETTEXT(string0: string, int0: component): void; // 1436 -> 2112
declare function INV_SIZE(int0: inv): int; // 724 -> 3304
declare function INV_GETOBJ(int0: inv, int1: int): obj; // 1784 -> 3301
declare function INV_GETNUM(int0: inv, int1: int): int; // 1675 -> 3302
declare function CC_SETOBJECT(int0: obj, int1: int): void; // 2112 -> 10368
declare function OC_NAME(int0: obj): string; // 1091 -> 4200
declare function joinstring(...args: any[]): any; // 423 -> 37
declare function CC_SETOPBASE(string0: string): void; // 1341 -> 1305
declare function CC_SETOUTLINE(int0: unknown_int): void; // 2090 -> 10118
declare function IF_GETSCROLLHEIGHT(int0: component): int; // 87 -> 2604
declare function SCALE(int0: int, int1: int, int2: int): int; // 322 -> 4018
declare function IF_GETSCROLLY(int0: component): int; // 967 -> 2601
declare function CC_SETGRAPHIC(int0: graphic): void; // 1045 -> 1105
declare function CC_SETTILING(int0: boolean): void; // 869 -> 1107
declare function CC_SETDRAGGABLE(int0: component, int1: int): void; // 271 -> 1301
declare function CC_SETDRAGRENDERBEHAVIOUR(int0: unknown_int): void; // 1555 -> 1302
declare function CC_SETONDRAG(vararg: BoundFunction): void; // 2162 -> 1405
declare function CC_SETONDRAGCOMPLETE(vararg: BoundFunction): void; // 1202 -> 1410
declare function CC_SENDTOBACK(): void; // 1514 -> 10541
declare function CC_SETONHOLD(vararg: BoundFunction): void; // 57 -> 1401
declare function CC_SETONCLICK(vararg: BoundFunction): void; // 146 -> 1400
declare function IF_SETONSCROLLWHEEL(vararg: BoundFunction, int0: unknown_int): void; // 273 -> 2417
declare function CC_SETHFLIP(int0: boolean): void; // 601 -> 1119
declare function CC_SETVFLIP(int0: boolean): void; // 589 -> 1118
declare function cc_setparam(int0: unknown_int, int1: unknown_int): void; // 434 -> 10098
declare function CC_SETONVARTRANSMIT(vararg: BoundFunction): void; // 1088 -> 10145
declare function CC_GETHEIGHT(): int; // 816 -> 10162
declare function CC_DRAGPICKUP(int0: int, int1: int): void; // 1459 -> 10161
declare function poplocalstring(string0: unknown_string): void; // 1703 -> 36
declare function CC_SETONMOUSEREPEAT(vararg: BoundFunction): void; // 299 -> 10107
declare function CC_SETONMOUSELEAVE(vararg: BoundFunction): void; // 2206 -> 1404
declare function IF_SETCOLOUR(int0: int, int1: component): void; // 697 -> 2101
declare function TOSTRING_LOCALISED(int0: int, int1: unknown_int): string; // 1610 -> 4124
declare function STRING_LENGTH(string0: string): int; // 2136 -> 4117
declare function CLAN_JOINCHAT(string0: string): void; // 376 -> 10342
declare function FORMATMINIMENU(...args: any[]): any; // 1031 -> 10390
declare function ACTIVECLANSETTINGS_GETAFFINEDMUTED(...args: any[]): any; // 1739 -> 10382
declare function popdiscardint(int0: unknown_int): void; // 506 -> 10004
declare function NOTIFICATIONS_INIT(): void; // 900 -> 10181
declare function COORD(): coordgrid; // 1804 -> 3308
declare function COORDZ(int0: coordgrid): int; // 635 -> 3311
declare function IF_SETONTIMER(vararg: BoundFunction, int0: unknown_int): void; // 419 -> 2408
declare function CAM2_ADDEFFECT_ZTILT(int0: unknown_int): unknown_int; // 95 -> 10027
declare function define_array(int0: int): void; // 850 -> 10569
declare function ARRAY_SORT(int0: int, int1: unknown_int, int2: unknown_int): void; // 360 -> 10681
declare function IF_SETGRAPHIC(int0: graphic, int1: component): void; // 1550 -> 2105
declare function IF_GETMODELANGLE_X(int0: component): int; // 1553 -> 2606
declare function IF_GETMODELANGLE_Y(int0: component): int; // 2205 -> 2608
declare function IF_GETMODELANGLE_Z(int0: component): int; // 1326 -> 2607
declare function IF_GETMODELZOOM(int0: component): int; // 1527 -> 2605
declare function IF_SETMODELANGLE(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: component): void; // 1320 -> 2109
declare function IF_SETMODEL(int0: model, int1: component): void; // 2246 -> 2108
declare function IF_SETONVARTRANSMIT(vararg: BoundFunction, int0: unknown_int): void; // 119 -> 2407
declare function REMOVETAGS(string0: string): string; // 1599 -> 4119
declare function STRING_INDEXOF_CHAR(string0: string, int0: unknown_int, int1: int): int; // 1576 -> 10482
declare function SUBSTRING(string0: string, int0: int, int1: int): string; // 660 -> 4118
declare function COMLEVEL_ACTIVE(): int; // 1943 -> 10415
declare function IF_SETPARAM_STRING(int0: unknown_int, string0: string, int1: component): void; // 1871 -> 10114
declare function IF_SETPARAM_INT(int0: unknown_int, int1: int, int2: component): void; // 1973 -> 2127
declare function IF_GETTOP(): unknown_int; // 388 -> 10092
declare function IF_SETTEXTANTIMACRO(int0: unknown_int, int1: component): void; // 1394 -> 10406
declare function SEQLENGTH(int0: seq): int; // 2170 -> 10250
declare function IF_SETONMOUSEOVER(vararg: BoundFunction, int0: unknown_int): void; // 1244 -> 10101
declare function IF_SETONMOUSELEAVE(vararg: BoundFunction, int0: unknown_int): void; // 417 -> 2404
declare function IF_SETMODELANIM(int0: seq, int1: component): void; // 2144 -> 2110
declare function IF_SETOBJECT(int0: obj, int1: int, int2: component): void; // 2085 -> 2200
declare function IF_SETTEXTFONT(int0: fontmetrics, int1: component): void; // 298 -> 2113
declare function IF_SETONSUBCHANGE(...args: any[]): any; // 1068 -> 2424
declare function CC_GETHIDE(): boolean; // 1474 -> 10320
declare function SOUND_VORBIS_VOLUME(int0: vorbis, int1: unknown_int, int2: int, int3: unknown_int): void; // 182 -> 3206
declare function printmessage(string0: string): void; // 409 -> 3100
declare function CC_SETTEXT(string0: string): void; // 1602 -> 1112
declare function CHAT_PLAYERNAME(): string; // 220 -> 10029
declare function RESUME_STRINGDIALOG(string0: string): void; // 581 -> 10119
declare function IGNORE_COUNT(): int; // 1382 -> 10776
declare function IGNORE_ADD(string0: string): void; // 1662 -> 10436
declare function IGNORE_TEST(string0: string): unknown_int; // 1464 -> 10270
declare function IGNORE_DEL(string0: string): void; // 1082 -> 10089
declare function FRIEND_COUNT(): int; // 949 -> 10729
declare function FRIEND_ADD(string0: string): void; // 720 -> 10419
declare function FRIEND_TEST(string0: string): unknown_int; // 1712 -> 10414
declare function CHAT_GETFILTER_PRIVATE(): int; // 1813 -> 5005
declare function CHAT_GETFILTER_PUBLIC(...args: any[]): any; // 792 -> 5000
declare function CHAT_GETFILTER_TRADE(...args: any[]): any; // 1487 -> 5016
declare function CHAT_SETFILTER(...args: any[]): any; // 707 -> 5001
declare function CHAT_SENDPRIVATE(string0: string, string1: string): void; // 290 -> 10791
declare function KEYHELD_SHIFT(): boolean; // 415 -> 10528
declare function RESUME_COUNTDIALOG(string0: string): void; // 232 -> 10006
declare function RESUME_COUNTDIALOG_LONG(string0: string): void; // 1990 -> 10579
declare function ESCAPE(string0: string): string; // 1894 -> 10441
declare function RESUME_NAMEDIALOG(string0: string): void; // 1303 -> 10597
declare function RANDOM(int0: int): int; // 1991 -> 4004
declare function IF_SETMODELTINT(int0: int, int1: unknown_int, int2: unknown_int, int3: int, int4: component): void; // 1165 -> 10557
declare function CLIENTCLOCK(): int; // 1708 -> 3300
declare function cc_getparam(...args: any[]): any; // 2053 -> 10049
declare function IF_TRIGGEROP(int0: component, int1: int, int2: int): void; // 143 -> 10057
declare function RANDOMINC(int0: int): int; // 1126 -> 4005
declare function PLAYERMEMBER(): boolean; // 686 -> 10146
declare function CC_SETONTIMER(vararg: BoundFunction): void; // 1158 -> 1408
declare function IF_CLOSESUBCLIENT(int0: component): void; // 264 -> 10020
declare function COORDX(int0: coordgrid): int; // 822 -> 3309
declare function COORDY(int0: coordgrid): int; // 455 -> 3310
declare function CHAT_SENDABUSEREPORT(...args: any[]): any; // 1147 -> 10596
declare function CC_GETX(): int; // 2188 -> 1500
declare function CC_GETY(): int; // 1026 -> 1501
declare function IF_GETSCROLLWIDTH(int0: component): int; // 1195 -> 2603
declare function CC_DELETE(): void; // 404 -> 10115
declare function IF_SETONINVTRANSMIT(vararg: BoundFunction, int0: unknown_int): void; // 1817 -> 2414
declare function CC_SETTEXTFONT(int0: fontmetrics): void; // 399 -> 1113
declare function CC_SETTEXTSHADOW(int0: boolean): void; // 1807 -> 1115
declare function CC_SETCOLOUR(int0: int): void; // 2270 -> 1101
declare function CC_SETOBJECT_LONG(int0: obj, long0: long): void; // 2072 -> 10799
declare function CC_SETDRAGDEADZONE(int0: int): void; // 2035 -> 1303
declare function CC_SETDRAGDEADTIME(int0: unknown_int): void; // 551 -> 1304
declare function CC_SETOBJECT_NONUM(int0: obj, int1: int): void; // 891 -> 10367
declare function CC_CLEAROPS(): void; // 962 -> 10026
declare function INVOTHER_GETOBJ(int0: inv, int1: int): obj; // 1583 -> 3313
declare function INVOTHER_GETNUM(int0: inv, int1: int): int; // 767 -> 10726
declare function item_getparam(...args: any[]): any; // 810 -> 4208
declare function popvarbit(int0: int): void; // 1626 -> 10023
declare function CC_GETFONTMETRICS(): fontmetrics; // 55 -> 10437
declare function PARAHEIGHT(string0: string, int0: int, int1: fontmetrics): int; // 1532 -> 4108
declare function IF_SETONKEY(vararg: BoundFunction, int0: unknown_int): void; // 319 -> 10265
declare function CAM2_GETCONTROLMODE(): unknown_int; // 860 -> 10123
declare function CAM2_GETLOOKATMODE(): unknown_int; // 1011 -> 10637
declare function CAM2_SETLOOKATMODE(int0: unknown_int): void; // 693 -> 10444
declare function CAM2_GETPOSITIONMODE(): unknown_int; // 1232 -> 10274
declare function CAM2_SETPOSITIONMODE(int0: unknown_int): void; // 1503 -> 10443
declare function CAM2_GETPOSITIONENTITY_ANGLEOFFSETS(): [int, int]; // 2116 -> 10273
declare function CAM2_SETPOSITIONENTITY_PLAYER(int0: int, int1: int, int2: int, int3: int, int4: int, int5: unknown_int, int6: unknown_int, int7: unknown_int): void; // 1443 -> 10577
declare function CAM2_SETLINEARMOVEMENTMODE(int0: unknown_int): void; // 1449 -> 10166
declare function CAM2_SETPOSITIONANGULARINTERPOLATION(int0: unknown_int): void; // 131 -> 10165
declare function CLAN_GETCHATCOUNT(): int; // 1815 -> 3612
declare function CLAN_LEAVECHAT(): void; // 53 -> 3620
declare function IF_SETONCLANTRANSMIT(...args: any[]): any; // 1896 -> 10229
declare function IF_SETONFRIENDTRANSMIT(vararg: BoundFunction, int0: unknown_int): void; // 1110 -> 10223
declare function WORLDLIST_FETCH(): unknown_int; // 1692 -> 10163
declare function CC_SETTEXTALIGN(int0: int, int1: int, int2: int): void; // 1297 -> 1114
declare function CC_SETLINKFRIENDCHAT(int0: int): void; // 32 -> 10808
declare function CC_SETMAXLINES(int0: int): void; // 1107 -> 10277
declare function OC_WEARPOS(int0: obj): int; // 266 -> 10253
declare function OC_CATEGORY(int0: obj): category; // 1523 -> 10356
declare function enum_getreverseindex(int0: unknown_int, int1: unknown_int, int2: cs2enum, int3: unknown_int, int4: int): unknown_int; // 1446 -> 10154
declare function FRIEND_GETNAME(int0: int): [string, string]; // 2107 -> 10474
declare function FRIEND_SETRANK(...args: any[]): any; // 2255 -> 10481
declare function DB_GETROWTABLE(int0: dbrow): unknown_int; // 279 -> 10363
declare function dbrow_getfield(int0: number, int1: number, int2: number): any; // 2138 -> 10094
declare function DB_GETFIELDCOUNT(int0: dbrow, int1: unknown_int): int; // 1823 -> 10078
declare function STAT(int0: stat): int; // 1959 -> 10093
declare function MINIMENUOPEN(int0: component, int1: unknown_int): unknown_int; // 2177 -> 10332
declare function MAP_WORLD(): int; // 527 -> 10210
declare function WORLDLIST_SPECIFIC(int0: int): [int, string, int, string, int, int, string]; // 2189 -> 10485
declare function TESTBIT(int0: int, int1: int): int; // 1585 -> 4010
declare function POW(int0: int, int1: int): int; // 2041 -> 4012
declare function IF_SETTRANS(int0: int, int1: component): void; // 912 -> 2103
declare function IF_GETLAYER(int0: component): component; // 1628 -> 2505
declare function MES_TYPED(int0: unknown_int, int1: unknown_int, string0: string): void; // 575 -> 3114
declare function IGNORE_ADD_TEMP(string0: string): void; // 1283 -> 10413
declare function DB_FIND(...args: any[]): any; // 629 -> 10113
declare function dbrow_findnext(...args: any[]): any; // 2005 -> 10112
declare function CC_GETOPBASE(): string; // 1964 -> 10338
declare function DATE_RUNEDAY(): int; // 733 -> 10108
declare function IF_SETONVARCTRANSMIT(vararg: BoundFunction, int0: unknown_int): void; // 171 -> 2428
declare function IF_SETOBJECT_NONUM(int0: obj, int1: int, int2: component): void; // 966 -> 2205
declare function CC_GETTEXT(): string; // 1261 -> 10201
declare function SPLINE_NEW(int0: unknown_int, int1: int): void; // 613 -> 5405
declare function MOVECOORD(int0: coordgrid, int1: int, int2: int, int3: int): coordgrid; // 2054 -> 3336
declare function SPLINE_ADDPOINT(int0: unknown_int, int1: int, int2: coordgrid, int3: int, int4: coordgrid, int5: int, int6: unknown_int): void; // 1879 -> 5406
declare function CAM_MOVEALONG(int0: unknown_int, int1: int, int2: int, int3: int, int4: unknown_int, int5: int): void; // 151 -> 5502
declare function IF_SETONCAMFINISHED(vararg: BoundFunction, int0: unknown_int): void; // 1114 -> 2426
declare function SPLINE_LENGTH(int0: unknown_int): int; // 202 -> 5407
declare function CAM_SMOOTHRESET(): void; // 2095 -> 5512
declare function IF_SETVFLIP(int0: unknown_int, int1: component): void; // 1638 -> 10373
declare function WORLDMAP_DISABLEELEMENTCATEGORY(int0: unknown_int, int1: unknown_int): void; // 866 -> 10219
declare function SOUND_SYNTH(int0: unknown_int, int1: unknown_int, int2: int): void; // 1522 -> 3200
declare function WORLDMAP_DISABLETYPE(int0: unknown_int, int1: unknown_int): void; // 267 -> 10280
declare function WORLDMAP_DISABLETEXTSIZE(int0: unknown_int, int1: unknown_int): void; // 10 -> 10279
declare function WORLDMAP_GETCURRENTMAP(): maparea; // 1558 -> 10590
declare function WORLDMAP_GETMAPNAME(int0: maparea): string; // 917 -> 5207
declare function CC_SETONMOUSEOVER(vararg: BoundFunction): void; // 2073 -> 1403
declare function WORLDMAP_SETMAP(int0: maparea): void; // 96 -> 10589
declare function HAS_HTML5(): unknown_int; // 152 -> 10489
declare function WORLDMAP_GETCONFIGZOOM(int0: maparea): int; // 838 -> 10588
declare function WORLDMAP_GETDISABLEELEMENTS(): unknown_int; // 2200 -> 10964
declare function WORLDMAP_GETDISPLAYCOORD(int0: coordgrid): [int, int]; // 1072 -> 10679
declare function CC_SETLINEDIRECTION(int0: unknown_int): void; // 1655 -> 10852
declare function CC_SETLINEWID(int0: int): void; // 223 -> 10851
declare function PARAWIDTH(string0: string, int0: int, int1: fontmetrics): int; // 1765 -> 10251
declare function WORLDMAP_JUMPTOSOURCECOORD(int0: coordgrid): void; // 713 -> 5214
declare function WORLDMAP_JUMPTODISPLAYCOORD(int0: coordgrid): void; // 445 -> 10488
declare function WORLDMAP_GETMAP(int0: coordgrid): maparea; // 1379 -> 10613
declare function WORLDMAP_SETMAP_COORD_OVERRIDE(int0: maparea, int1: coordgrid): void; // 1004 -> 10612
declare function IF_SETTEXTALIGN(int0: int, int1: int, int2: int, int3: component): void; // 576 -> 10261
declare function MARKETING_INITANALYTICS(...args: any[]): any; // 895 -> 10340
declare function MARKETING_INITATTRIBUTION(...args: any[]): any; // 2040 -> 10339
declare function OC_UNCERT(int0: obj): obj; // 140 -> 10249
declare function OC_CERT(int0: obj): obj; // 2044 -> 10422
declare function STAT_BASE(int0: stat): int; // 1164 -> 3306
declare function enum_getreversecount(int0: unknown_int, int1: cs2enum, int2: unknown_int): int; // 1227 -> 10240
declare function DATE_MINUTES(): int; // 1757 -> 6300
declare function IF_SET2DANGLE(int0: int, int1: component): void; // 1242 -> 10060
declare function MAP_LANG(): int; // 631 -> 3335
declare function CC_SETMODEL(int0: model): void; // 286 -> 1108
declare function CC_SETMODELANIM(int0: seq): void; // 1286 -> 1110
declare function CC_SETMODELANGLE(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int): void; // 242 -> 1109
declare function IF_GETPARENTLAYER(int0: component): component; // 1985 -> 10121
declare function IF_SETNOCLICKTHROUGH(int0: unknown_int, int1: component): void; // 1070 -> 2005
declare function WORLDMAP_COORDINMAP(int0: coordgrid, int1: maparea): unknown_int; // 1673 -> 10844
declare function IF_SETONRESIZE(vararg: BoundFunction, int0: unknown_int): void; // 278 -> 10097
declare function IF_SETONOP(vararg: BoundFunction, int0: unknown_int): void; // 764 -> 2409
declare function FRIEND_DEL(string0: string): void; // 1061 -> 10007
declare function OC_HASVAROBJ(int0: obj): unknown_int; // 1124 -> 10341
declare function INV_GETVAR(int0: inv, int1: int, int2: unknown_int): int; // 898 -> 10155
declare function IF_CLEAROPS(int0: component): void; // 1055 -> 2307
declare function IF_SETNPCMODEL(int0: npc, int1: component): void; // 2265 -> 10083
declare function BAS_GETANIM_READY(int0: bas): seq; // 403 -> 4600
declare function IF_SETMODELZOOM(int0: int, int1: component): void; // 1095 -> 2123
declare function ABS(int0: int): int; // 584 -> 10527
declare function STRINGWIDTH(string0: string, int0: fontmetrics): int; // 1589 -> 4125
declare function GETBIT_RANGE(int0: int, int1: int, int2: int): int; // 1854 -> 10494
declare function IF_SETONVERTICALSWIPE(vararg: BoundFunction, int0: unknown_int): void; // 365 -> 10359
declare function IF_SETONHORIZONTALSWIPE(vararg: BoundFunction, int0: unknown_int): void; // 837 -> 10344
declare function MARKETING_SENDANALYTICSEVENT(string0: string): void; // 2124 -> 10515
declare function MARKETING_SENDATTRIBUTIONEVENT(string0: string): void; // 1145 -> 10514
declare function CHAT_PLAYERNAME_UNFILTERED(): string; // 275 -> 5020
declare function ACTIVECLANSETTINGS_GETAFFINEDSLOT(string0: string): unknown_int; // 1608 -> 10547
declare function ACTIVECLANSETTINGS_GETAFFINEDRANK(int0: unknown_int): int; // 1559 -> 10546
declare function IF_GETTRANS(int0: component): int; // 204 -> 2609
declare function INT_TO_LONG(int0: int): long; // 1923 -> 10033
declare function branch_lt_long(...args: any[]): any; // 1702 -> 10411
declare function IF_GETX(int0: component): int; // 1568 -> 2500
declare function STRING_INDEXOF_STRING(string0: string, string1: string, int0: int): int; // 2176 -> 4121
declare function CAM_FOLLOWCOORD(int0: coordgrid): void; // 1221 -> 5511
declare function CAM_GETANGLE_XA(): int; // 794 -> 10454
declare function CAM_GETANGLE_YA(): int; // 865 -> 10453
declare function CAM_FORCEANGLE(int0: int, int1: int): void; // 1883 -> 5504
declare function IF_SETTARGETCURSORS(int0: cursor, int1: cursor, int2: unknown_int): void; // 1979 -> 10759
declare function IF_HASSUBMODAL(int0: component, int1: unknown_int): unknown_int; // 2184 -> 10068
declare function IF_SETOPBASE(string0: string, int0: component): void; // 925 -> 2305
declare function IF_SETOPCURSOR(int0: unknown_int, int1: unknown_int, int2: component): void; // 659 -> 2309
declare function CC_GETID(): int; // 774 -> 1702
declare function CC_SETLINKACTIVECLANCHANNEL(int0: int): void; // 548 -> 10630
declare function CC_SETONRELEASE(vararg: BoundFunction): void; // 744 -> 1402
declare function SETBIT(int0: int, int1: int): int; // 482 -> 10232
declare function CLEARBIT(int0: int, int1: int): int; // 1994 -> 10233
declare function GETWINDOWMODE(): int; // 1800 -> 5306
declare function STAT_VISIBLE_XP(int0: stat): int; // 179 -> 3307
declare function STAT_BASE_ACTUAL(int0: stat): int; // 978 -> 10296
declare function STAT_VISIBLE_XP_ACTUAL(int0: stat): int; // 919 -> 10088
declare function IF_SETONDIALOGABORT(vararg: BoundFunction, int0: unknown_int): void; // 653 -> 10052
declare function IF_CLOSE(): void; // 784 -> 10151
declare function OC_FIND(string0: string, int0: boolean): int; // 1935 -> 10812
declare function OC_FINDNEXT(): obj; // 1518 -> 10811
declare function RESUME_OBJDIALOG(int0: obj): void; // 2096 -> 3110
declare function IF_SETONSTOCKTRANSMIT(...args: any[]): any; // 1132 -> 10470
declare function STOCKMARKET_GETOFFERTYPE(int0: int, int1: unknown_int): int; // 2276 -> 10784
declare function STOCKMARKET_GETOFFERCOUNT(int0: int, int1: unknown_int): int; // 203 -> 10600
declare function STOCKMARKET_GETOFFERCOMPLETEDCOUNT(int0: int, int1: unknown_int): int; // 2171 -> 10803
declare function STOCKMARKET_GETOFFERCOMPLETEDGOLD(...args: any[]): any; // 2109 -> 10802
declare function poplocallong(long0: unknown_long): void; // 2036 -> 10237
declare function STOCKMARKET_GETOFFERITEM(int0: int, int1: unknown_int): obj; // 1053 -> 10570
declare function pushlocallong(): unknown_long; // 1812 -> 10024
declare function SUB_LONG(long0: long, long1: long): long; // 1304 -> 10322
declare function TOSTRING_LOCALISED_LONG(long0: long, int0: unknown_int): string; // 1511 -> 10519
declare function STOCKMARKET_ISOFFERADDING(int0: int, int1: unknown_int): unknown_int; // 755 -> 10801
declare function STOCKMARKET_ISOFFERFINISHED(int0: int, int1: unknown_int): unknown_int; // 1868 -> 10490
declare function MAX_LONG(long0: unknown_long, long1: long): long; // 1397 -> 10389
declare function IF_SETTARGETVERB(string0: unknown_string, int0: component): void; // 955 -> 10551
declare function CC_SETTARGETVERB(string0: string): void; // 368 -> 10689
declare function STOCKMARKET_ISOFFEREMPTY(int0: int, int1: unknown_int): unknown_int; // 1370 -> 10300
declare function STOCKMARKET_GETOFFERPRICE(int0: int, int1: unknown_int): long; // 1316 -> 10599
declare function CC_CLEARSCRIPTHOOKS(): void; // 1073 -> 10217
declare function IF_SETONTARGETENTER(...args: any[]): any; // 1957 -> 2416
declare function IF_SETONTARGETLEAVE(vararg: BoundFunction, int0: unknown_int): void; // 920 -> 2406
declare function IF_SETONSTATTRANSMIT(vararg: BoundFunction, int0: unknown_int): void; // 1284 -> 2415
declare function CC_SETONTARGETENTER(...args: any[]): any; // 1371 -> 10734
declare function CC_SETONTARGETLEAVE(...args: any[]): any; // 206 -> 10733
declare function CC_GETTRANS(): int; // 746 -> 10378
declare function CC_SETNPCHEAD(int0: npc): void; // 985 -> 10205
declare function CC_GETMODELANGLE_X(...args: any[]): any; // 107 -> 10329
declare function CC_GETMODELANGLE_Z(...args: any[]): any; // 247 -> 10327
declare function CC_GETMODELZOOM(): int; // 1087 -> 10326
declare function OR(int0: int, int1: int): int; // 328 -> 10075
declare function CC_GETTARGETMASK(): int; // 853 -> 10407
declare function MAP_LOADEDPERCENT(): int; // 518 -> 10535
declare function IF_SETGRAPHICSHADOW(int0: unknown_int, int1: component): void; // 769 -> 2117
declare function CAM2_SETCOLLISIONMODE(int0: unknown_int, int1: unknown_int): void; // 103 -> 10030
declare function HAS_NXT(): unknown_int; // 1637 -> 10211
declare function CAM2_SETDEPTHPLANES(int0: unknown_int, int1: unknown_int): void; // 462 -> 10198
declare function IF_GETGRAPHIC(int0: component): graphic; // 1908 -> 2612
declare function MAP_LOADINGSCREEN_SETTRIGGERPERCENT(int0: unknown_int, int1: unknown_int): void; // 1353 -> 10110
declare function IF_SENDTOBACK(int0: component): void; // 1803 -> 10011
declare function IF_SENDTOFRONT(int0: component): void; // 222 -> 10010
declare function IF_RESETMODELLIGHTING(int0: component): void; // 1690 -> 10781
declare function IF_SETMODELLIGHTING(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: material, int10: component): void; // 598 -> 10242
declare function IF_GETFONTMETRICS(int0: component): fontmetrics; // 960 -> 10317
declare function CC_SET2DANGLE(int0: int): void; // 1538 -> 1106
declare function IF_SETONMISCTRANSMIT(...args: any[]): any; // 528 -> 2422
declare function CC_GET2DANGLE(): int; // 426 -> 10499
declare function IF_CALLONRESIZE(int0: component): void; // 94 -> 10059
declare function TARGETMODE_ACTIVE(): unknown_int; // 2108 -> 10207
declare function TARGETMODE_CANCEL(): void; // 212 -> 10206
declare function RUNENERGY_VISIBLE(): int; // 2146 -> 3321
declare function IF_GETGRAPHICDIMENSIONS(int0: component): [int, int]; // 534 -> 10621
declare function IF_SETONHOLD(...args: any[]): any; // 1698 -> 10807
declare function IF_SETONRELEASE(...args: any[]): any; // 2244 -> 10255
declare function IF_SETNPCHEAD(int0: npc, int1: component): void; // 1315 -> 2201
declare function OPENURL(string0: unknown_string, string1: string, int0: unknown_int): void; // 1770 -> 10054
declare function IF_SETMAXLINES(int0: unknown_int, int1: component): void; // 1875 -> 10258
declare function enum_getstring(int0: unknown_int, int1: unknown_int): string; // 2126 -> 10047
declare function CC_SETPARAM_INT(int0: unknown_int, int1: int): void; // 1223 -> 10200
declare function CC_SETPARAM_STRING(int0: unknown_int, string0: string): void; // 234 -> 10291
declare function popdiscardstring(string0: string): void; // 1811 -> 10360
declare function IF_SETOBJECT_ALWAYSNUM(int0: obj, int1: int, int2: component): void; // 1544 -> 10498
declare function OC_IOP(int0: obj, int1: unknown_int): string; // 947 -> 10243
declare function SOUND_VORBIS_RATE(int0: vorbis, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: int): void; // 498 -> 3209
declare function INV_TOTALCAT(int0: inv, int1: unknown_int): int; // 889 -> 10147
declare function IF_GETCHARPOSATINDEX(int0: int, int1: component): [int, int]; // 927 -> 10765
declare function APPLET_HASFOCUS(): unknown_int; // 785 -> 10369
declare function OC_ICURSOR(...args: any[]): any; // 990 -> 10560
declare function INVOTHER_GETVAR(int0: inv, int1: int, int2: unknown_int): int; // 1900 -> 10585
declare function CLIENTOPTION_SET(int0: int, int1: int): void; // 2074 -> 10032
declare function CHATPHRASE_GETAUTORESPONSECOUNT(int0: chatphrase): int; // 1938 -> 10533
declare function IF_GETSCROLLX(int0: component): int; // 1064 -> 2600
declare function CHATPHRASE_GETDYNAMICCOMMANDCOUNT(int0: chatphrase): int; // 1007 -> 10469
declare function CHATPHRASE_GETDYNAMICCOMMAND(int0: chatphrase, int1: int): unknown_int; // 50 -> 10664
declare function ACTIVECHATPHRASE_SETDYNAMICINT(int0: unknown_int, int1: int): void; // 1653 -> 10616
declare function ACTIVECHATPHRASE_SETDYNAMICOBJ(int0: unknown_int, int1: obj): void; // 2271 -> 10617
declare function FRIEND_GETSLOTFROMNAME(string0: string): int; // 68 -> 10493
declare function FRIEND_GETWORLD(int0: int): int; // 2008 -> 10212
declare function FRIEND_PLATFORM(int0: int): unknown_int; // 1481 -> 10287
declare function FRIEND_IS_REFERRER(int0: int): unknown_int; // 921 -> 10883
declare function FRIEND_IS_REFERRED(int0: int): unknown_int; // 682 -> 10882
declare function CC_SETLINKFRIEND(int0: int): void; // 277 -> 10631
declare function MAP_QUICKCHAT(): unknown_int; // 621 -> 10639
declare function USERDETAIL_QUICKCHAT(): unknown_int; // 385 -> 10305
declare function FRIEND_GETNOTES(int0: int): string; // 1334 -> 10701
declare function PLAYER_GROUP_FIND(): unknown_int; // 1259 -> 10082
declare function FRIEND_GETWORLDNAME(int0: int): string; // 505 -> 10875
declare function SETDEFAULTCURSORS(int0: unknown_int, int1: unknown_int): void; // 814 -> 10122
declare function SETHARDCODEDOPCURSORS(int0: unknown_int, int1: unknown_int): void; // 1571 -> 10539
declare function PLATFORMTYPE(): unknown_int; // 1767 -> 10209
declare function IF_GETMODELXOF(int0: number): number; // 2123 -> 2610
declare function IF_GETMODELYOF(int0: number): number; // 1020 -> 2611
declare function CC_GETMODELXOF(...args: any[]): any; // 137 -> 10331
declare function CC_GETMODELYOF(): int; // 759 -> 10330
declare function CC_GETMODELANGLE_Y(): int; // 1455 -> 10328
declare function IF_CRMVIEW_INIT(): boolean; // 1632 -> 10135
declare function CAM2_REMOVEEFFECT(int0: unknown_int): void; // 984 -> 10015
declare function SETUP_MESSAGEBOX(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: unknown_int, int6: unknown_int, int7: unknown_int, int8: unknown_int, int9: unknown_int, int10: unknown_int): void; // 241 -> 10861
declare function VIDEO_ADVERT_FORCE_REMOVE(): void; // 1294 -> 10365
declare function DATE_RUNEDAY_TODATE(int0: int): [int, int, int]; // 1587 -> 10275
declare function CONSOLE_ENABLESNOW(): void; // 737 -> 10860
declare function CLIENTOPTION_GET(int0: int): int; // 2089 -> 10139
declare function INV_FREESPACE(int0: inv): int; // 652 -> 10199
declare function branch_gt_long(...args: any[]): any; // 1560 -> 10321
declare function IF_SETDRAGGABLE(int0: component, int1: unknown_int, int2: component): void; // 465 -> 10290
declare function SHOP_REQUESTDATASTATUS(): unknown_int; // 2266 -> 10609
declare function GENDER(): int; // 1222 -> 10235
declare function IF_HASSUB(int0: component): unknown_int; // 1781 -> 10048
declare function INV_TOTALPARAM(int0: inv, int1: unknown_int): int; // 1529 -> 10218
declare function IF_SETENABLED(int0: boolean, int1: component): void; // 2001 -> 10152
declare function IF_GETMODEL(int0: unknown_int): model; // 45 -> 10374
declare function IF_SETOPKEY(int0: int, int1: unknown_int, int2: unknown_int, int3: component): void; // 1190 -> 10194
declare function IF_SETOPKEYIGNOREHELD(int0: unknown_int, int1: component): void; // 1937 -> 10193
declare function SHOP_PURCHASEITEM(string0: unknown_string): void; // 2150 -> 10216
declare function IF_SETSUBTRACTINSETS(...args: any[]): any; // 1151 -> 10423
declare function KEYHELD_CTRL(): boolean; // 400 -> 10529
declare function SHOP_PURCHASEITEMSTATUS(): unknown_int; // 2145 -> 10343
declare function WORLDMAP_SETZOOM(...args: any[]): any; // 1426 -> 10425
declare function WORLDMAP_GETZOOM(...args: any[]): any; // 1354 -> 10424
declare function CAM2_ISENABLED(): unknown_int; // 644 -> 10536
declare function CC_SETONCLICKREPEAT(...args: any[]): any; // 981 -> 10288
declare function CC_SETONBUTTONCLICK(vararg: BoundFunction): void; // 1704 -> 10445
declare function VIEWPORT_SETFOV(int0: unknown_int, int1: unknown_int): void; // 910 -> 10042
declare function IF_SETPAUSETEXT(string0: string, int0: component): void; // 167 -> 10111
declare function HSVTORGB(int0: int): int; // 1018 -> 4020
declare function RANDOM_SOUND_PITCH(int0: vorbis, int1: unknown_int, int2: unknown_int, int3: int, int4: unknown_int, int5: unknown_int): [vorbis, unknown_int, unknown_int, unknown_int, int]; // 579 -> 4019
declare function enum_hasoutput(int0: unknown_int, int1: cs2enum, int2: unknown_int): unknown_int; // 1659 -> 10244
declare function CC_GETINVCOUNT(): int; // 1411 -> 10248
declare function BASEIDKIT(int0: unknown_int, int1: idkit): void; // 110 -> 10239
declare function BASECOLOUR(int0: unknown_int, int1: int): void; // 183 -> 404
declare function CC_SETPLAYERMODEL_SELF(): void; // 1824 -> 1211
declare function CC_SETONVARCTRANSMIT(vararg: BoundFunction): void; // 2256 -> 1428
declare function CHAT_LASTUID(): int; // 879 -> 10063
declare function IF_SETONTARGETENTER(int0: unknown_int, string0: string, int1: int): void; // 594 -> 10214
declare function CC_SETSUBTRACTINSETS(): void; // 951 -> 10039
declare function CLAN_ISSELF(int0: int): unknown_int; // 1861 -> 10627
declare function CLAN_GETCHATRANK(): int; // 492 -> 3618
declare function CLAN_GETCHATMINKICK(int0: int): [unknown_int, unknown_int]; // 1115 -> 3616
declare function CLAN_GETCHATUSERRANK(int0: int): int; // 1779 -> 10626
declare function WORLDMAP_ISLOADED(): unknown_int; // 1373 -> 10149
declare function WORLDMAP_GETDISPLAYPOSITION(): [int, int]; // 2231 -> 10677
declare function IF_SETPLAYERMODEL_SELF(int0: unknown_int): void; // 443 -> 10292
declare function CLAN_KICKUSER(string0: string): void; // 1274 -> 10845
declare function CHAT_SETMODE(int0: int): void; // 2066 -> 10126
declare function CHAT_SENDPUBLIC(string0: string): void; // 1339 -> 10125
declare function CC_FINDBYCATEGORY(int0: component, int1: int, int2: int): unknown_int; // 2134 -> 10150
declare function CC_SETOBJECT_ALWAYSNUM(int0: obj, int1: int): void; // 1798 -> 10366
declare function CAM_RESET(): void; // 1594 -> 5503
declare function CC_SETOPCURSOR(int0: int, int1: unknown_int): void; // 1890 -> 10043
declare function BITCOUNT(int0: int): int; // 1199 -> 10050
declare function CC_GETLAYER(): component; // 757 -> 1505
declare function ABORT_DIALOG(): void; // 239 -> 10031
declare function CLAN_GETCHATDISPLAYNAME(): string; // 418 -> 10286
declare function IF_SETTILING(int0: unknown_int, int1: component): void; // 1439 -> 10783
declare function IF_SETONVARCSTRTRANSMIT(vararg: BoundFunction, int0: unknown_int): void; // 1245 -> 2429
declare function IF_SETONCHATTRANSMIT(vararg: BoundFunction, int0: unknown_int): void; // 159 -> 10486
declare function CC_GETGRAPHIC(): graphic; // 106 -> 10289
declare function CHAR_ISPRINTABLE(int0: unknown_int): unknown_int; // 475 -> 10635
declare function WORLDMAP_LISTELEMENT_START(...args: any[]): any; // 2101 -> 10817
declare function MEC_TEXT(int0: unknown_int): string; // 380 -> 10816
declare function WORLDMAP_LISTELEMENT_NEXT(): [unknown_int, coordgrid]; // 1166 -> 10815
declare function REBOOTTIMER(): int; // 1982 -> 10276
declare function FRIEND_GETRANK(...args: any[]): any; // 340 -> 10818
declare function IF_CLEARSCRIPTHOOKS(int0: component): void; // 1422 -> 10387
declare function WORLDMAP_CLOSEMAP(...args: any[]): any; // 2235 -> 10386
declare function CHATPHRASE_FIND(string0: string, int0: unknown_int): int; // 541 -> 10820
declare function CHATPHRASE_FINDNEXT(): chatphrase; // 1986 -> 10819
declare function CHATPHRASE_GETTEXT(int0: chatphrase): string; // 93 -> 10810
declare function APPEND_NUM(string0: string, int0: int): string; // 162 -> 10611
declare function IF_SETTEXTSHADOW(int0: unknown_int, int1: component): void; // 1409 -> 10512
declare function VIDEO_ADVERT_HAS_FINISHED(): unknown_int; // 65 -> 10775
declare function DETAIL_SOUNDVOL(...args: any[]): any; // 554 -> 10160
declare function DETAIL_BGSOUNDVOL(...args: any[]): any; // 343 -> 10158
declare function DETAIL_SPEECHVOL(...args: any[]): any; // 344 -> 10157
declare function DETAIL_LOGINVOL(...args: any[]): any; // 1564 -> 10156
declare function VIDEO_ADVERT_PLAY(int0: unknown_int): unknown_int; // 1729 -> 10774
declare function INV_STOCKBASE(int0: unknown_int, int1: unknown_int): unknown_int; // 1080 -> 10350
declare function CC_GETCOLOUR(): int; // 871 -> 10297
declare function IF_OPENSUBCLIENT(int0: component, int1: unknown_int): void; // 1574 -> 10141
declare function CC_SETALPHA(int0: unknown_int): void; // 1601 -> 10730
declare function QUEST_GETNAME(int0: quest): string; // 563 -> 10245
declare function QUEST_GETSORTNAME(...args: any[]): any; // 52 -> 10540
declare function quest_getparam(...args: any[]): any; // 1023 -> 10262
declare function QUEST_GETDIFFICULTY(int0: quest): int; // 1420 -> 10241
declare function SIN_DEG(...args: any[]): any; // 788 -> 10396
declare function COS_DEG(...args: any[]): any; // 1573 -> 10395
declare function QUEST_QUESTREQ_COUNT(int0: quest): int; // 1022 -> 10595
declare function QUEST_QUESTREQ(int0: quest, int1: int): quest; // 740 -> 10594
declare function QUEST_STATREQ_COUNT(int0: quest): int; // 1413 -> 10510
declare function QUEST_STATREQ_STAT(...args: any[]): any; // 727 -> 10509
declare function QUEST_STATREQ_LEVEL(...args: any[]): any; // 1248 -> 10508
declare function VIEWPORT_SETZOOM(int0: int, int1: int): void; // 880 -> 10222
declare function VIEWPORT_CLAMPFOV(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int): void; // 997 -> 10221
declare function CAM2_SETFIELDOFVIEW(int0: int, int1: int): void; // 1029 -> 10036
declare function QUEST_GETMEMBERS(int0: quest): boolean; // 1621 -> 10716
declare function QUEST_POINTSREQ(int0: quest): int; // 714 -> 10516
declare function QUEST_POINTS(int0: quest): int; // 1181 -> 10727
declare function DIVIDE_LONG(long0: long, long1: long): long; // 558 -> 10412
declare function MULTIPLY_LONG(long0: long, long1: long): long; // 1336 -> 10371
declare function QUEST_FINISHED(int0: quest): boolean; // 1893 -> 10430
declare function QUEST_STARTED(int0: quest): unknown_int; // 1461 -> 10521
declare function CHAR_ISALPHANUMERIC(int0: unknown_int): unknown_int; // 30 -> 10867
declare function CHAR_TOLOWERCASE(string0: string, int0: unknown_int): [string, unknown_int]; // 405 -> 10866
declare function ADDPERCENT(int0: int, int1: unknown_int): int; // 2178 -> 10680
declare function APPEND_CHAR(string0: string, int0: unknown_int): string; // 1862 -> 10634
declare function IF_GET2DANGLE(int0: component): int; // 2240 -> 10167
declare function CC_SETTARGETOPCURSOR(int0: cursor): void; // 1388 -> 10789
declare function CC_SETTARGETCURSORS(int0: cursor, int1: cursor): void; // 1678 -> 10788
declare function WORLDLIST_PINGWORLDS(int0: unknown_int): void; // 1419 -> 6509
declare function LOBBY_LEAVELOBBY(): void; // 1205 -> 5616
declare function CHATCAT_GETSUBCATCOUNT(...args: any[]): any; // 1224 -> 10890
declare function CHATCAT_GETPHRASECOUNT(...args: any[]): any; // 219 -> 10889
declare function CHATCAT_GETSUBCAT(int0: chatcat, int1: int): chatcat; // 765 -> 10886
declare function CHATCAT_GETPHRASE(int0: chatcat, int1: int): chatphrase; // 1435 -> 10884
declare function CHATPHRASE_GETAUTORESPONSE(int0: chatphrase, int1: int): chatphrase; // 86 -> 10869
declare function CHAR_TOUPPERCASE(int0: unknown_int): unknown_int; // 667 -> 10887
declare function CHATCAT_GETSUBCATSHORTCUT(int0: chatcat, int1: int): unknown_int; // 214 -> 10888
declare function CHAR_ISNUMERIC(int0: unknown_int): unknown_int; // 12 -> 10885
declare function IF_SETLINEDIRECTION(int0: unknown_int, int1: component): void; // 936 -> 10864
declare function GET_COL_TAG(int0: int): string; // 197 -> 10061
declare function CLIENTOPTION_EXISTS(int0: int): unknown_int; // 994 -> 10737
declare function CLIENTOPTION_CANMOD(int0: int): unknown_int; // 2245 -> 10736
declare function AUTOSETUP_GETLEVEL(): unknown_int; // 4 -> 10319
declare function USERDETAIL_LOBBY_MEMBERSHIP(): [int, int, unknown_int]; // 2137 -> 10660
declare function FORMAT_DATETIME_FROM_MINUTES(int0: int): string; // 1125 -> 10576
declare function IF_SETONBUTTONCLICK(...args: any[]): any; // 1048 -> 10197
declare function IF_NPC_SETCUSTOMHEADMODEL(int0: unknown_int, int1: unknown_int, int2: unknown_int): void; // 1520 -> 10464
declare function IF_NPC_SETCUSTOMRETEX(int0: unknown_int, int1: material, int2: unknown_int): void; // 1526 -> 10463
declare function CLEARBIT_RANGE(int0: int, int1: unknown_int, int2: unknown_int): int; // 141 -> 10853
declare function USERDETAIL_LOBBY_UNREADMESSAGES(...args: any[]): any; // 348 -> 10690
declare function USERDETAIL_LOBBY_EMAILSTATUS(...args: any[]): any; // 1032 -> 10703
declare function FULLSCREEN_GETMODE(int0: int): [int, int]; // 1302 -> 10355
declare function AUTOSETUP_SETCUSTOM(): void; // 1441 -> 10604
declare function SETWINDOWMODE(...args: any[]): any; // 1074 -> 10671
declare function SETDEFAULTWINDOWMODE(...args: any[]): any; // 1906 -> 10670
declare function FULLSCREEN_MODECOUNT(): int; // 1019 -> 10669
declare function FULLSCREEN_ENTER(int0: int, int1: int): unknown_int; // 329 -> 10668
declare function CREATE_CONNECT_REPLY(): unknown_int; // 2174 -> 10786
declare function CREATE_REPLY(): unknown_int; // 1851 -> 10563
declare function CREATE_EMAIL_VALIDATE_REPLY(): unknown_int; // 1755 -> 10975
declare function WORLDLIST_SPECIFIC_THISWORLD(): int; // 216 -> 10208
declare function CC_NPC_SETCUSTOMBODYMODEL(int0: int, int1: model): void; // 2217 -> 10766
declare function CC_NPC_SETCUSTOMRETEX(int0: unknown_int, int1: unknown_int): void; // 480 -> 10409
declare function IF_SETONDRAG(vararg: BoundFunction, int0: unknown_int): void; // 1346 -> 10388
declare function IF_SETONDRAGCOMPLETE(vararg: BoundFunction, int0: unknown_int): void; // 61 -> 2410
declare function IF_SETDRAGRENDERBEHAVIOUR(int0: unknown_int, int1: unknown_int): void; // 1614 -> 10697
declare function CAM_DEC_Y(): void; // 633 -> 10720
declare function CAM_INC_Y(): void; // 500 -> 10719
declare function CAM_INC_X(): void; // 1427 -> 10718
declare function CAM_DEC_X(): void; // 1231 -> 10717
declare function CC_GETINVOBJECT(): obj; // 379 -> 10313
declare function USERDETAIL_LOBBY_CCEXPIRY(...args: any[]): any; // 2148 -> 10856
declare function USERDETAIL_LOBBY_GRACEEXPIRY(...args: any[]): any; // 1936 -> 10855
declare function AUTOSETUP_SETLOW(): void; // 662 -> 10608
declare function OPENURLRAW(string0: string, int0: unknown_int): void; // 391 -> 10040
declare function branch_gteq_long(...args: any[]): any; // 116 -> 10349
declare function WORLDLIST_SORT(int0: int, int1: boolean, int2: int, int3: boolean): void; // 1185 -> 10747
declare function LOGIN_RESETREPLY(): void; // 625 -> 10266
declare function SSO_AVAILABLE(): unknown_int; // 1713 -> 10294
declare function LOBBY_ENTERLOBBY_SSO(string0: string, int0: boolean): void; // 1148 -> 10375
declare function LOBBY_ENTERLOBBY(string0: string, string1: string, string2: string, int0: boolean): void; // 1836 -> 10710
declare function LOBBY_ENTERLOBBYREPLY(): unknown_int; // 13 -> 10067
declare function WINDOW_GETINSETS(): [int, int, int, int]; // 296 -> 10446
declare function IF_SLIDER_GETMINMAX(int0: int, int1: int): unknown_int; // 2118 -> 10678
declare function USERDETAIL_LOBBY_LASTLOGINDAY(): int; // 1658 -> 10834
declare function CAM2_GETPOSITIONPOINT_POINT(...args: any[]): any; // 1249 -> 10504
declare function MOVECOORD_FINE(...args: any[]): any; // 971 -> 10401
declare function CAM2_SETPOSITIONPOINT_POINT(...args: any[]): any; // 928 -> 10439
declare function LOGIN_CANCEL(): void; // 602 -> 5630
declare function IGNORE_GETNAME(int0: int): [string, string]; // 1051 -> 10472
declare function STAFFMODLEVEL(): unknown_int; // 1512 -> 10180
declare function PLAYERMOD(): unknown_int; // 117 -> 10456
declare function IF_BUTTON_SETTOGGLED(int0: unknown_int, int1: component): void; // 586 -> 10185
declare function LOBBY_ENTERGAMEREPLY(): int; // 1904 -> 10186
declare function GET_MOUSEX(): int; // 70 -> 3342
declare function GET_MOUSEY(): int; // 903 -> 3343
declare function NOTIFICATIONS_SENDGROUPEDLOCAL(int0: int, int1: int): [int, string, unknown_int]; // 1175 -> 10522
declare function TTV_LOGOUT(): unknown_int; // 205 -> 10615
declare function TTV_LIBRARY_REQUEST(): int; // 574 -> 10503
declare function TTV_STREAM_START(int0: int, int1: int, int2: int, int3: unknown_int): int; // 902 -> 10722
declare function TTV_STREAM_SETTITLE(string0: string): int; // 358 -> 10721
declare function IF_SET2DANGLE(): unknown_int; // 128 -> 10189
declare function QUIT(): void; // 325 -> 10362
declare function SHOP_GETINDEXFORCATEGORYID(...args: any[]): any; // 1753 -> 10655
declare function SHOP_GETPRODUCTCOUNT(...args: any[]): any; // 1285 -> 10654
declare function SHOP_GETPRODUCTDETAILS(int0: unknown_int, int1: int): [string, string, unknown_string, string, unknown_string, unknown_string, int, string]; // 1504 -> 10653
declare function CHAT_SETMODE(int0: int): void; // 678 -> 10126
declare function ACTIVECLANCHANNEL_GETUSERCOUNT(): int; // 638 -> 10740
declare function ACTIVECLANCHANNEL_GETUSERSLOT(string0: string): int; // 1473 -> 3760
declare function ACTIVECLANCHANNEL_GETUSERRANK(int0: int): int; // 1827 -> 3757
declare function ACTIVECLANCHANNEL_GETCLANNAME(): string; // 832 -> 10688
declare function ACTIVECLANCHANNEL_GETUSERDISPLAYNAME(int0: int): string; // 2127 -> 10739
declare function ACTIVECLANCHANNEL_GETUSERWORLD(int0: int): int; // 905 -> 10335
declare function IF_SETONCLANCHANNELTRANSMIT(...args: any[]): any; // 1643 -> 10228
declare function IF_SETONCLANSETTINGSTRANSMIT(vararg: BoundFunction, int0: unknown_int): void; // 1758 -> 2431
declare function PLAYERMODLEVEL(): unknown_int; // 1852 -> 10455
declare function UNKNOWN_COMMAND_126(): [int, int, int, int]; // 1350 -> 10416
declare function CANCEL_INTERFACE_DRAG(): void; // 739 -> 10003
declare function UNKNOWN_COMMAND_455(): void; // 398 -> 10497
declare function DATE_MINUTES_FROMRUNEDAY(int0: int): int; // 2262 -> 6306
declare function IF_LIST_SETENTRIES(int0: unknown_int, int1: component): void; // 1864 -> 10391
declare function IF_LIST_SETDROPDOWNNUMENTRIES(...args: any[]): any; // 983 -> 10345
declare function IF_LIST_SETSELECTIONLIMIT(...args: any[]): any; // 1649 -> 10348
declare function IF_GETSTYLESHEET(int0: component): unknown_int; // 306 -> 10347
declare function STYLESHEET_GET_VALUE(int0: stylesheet, string0: string, int1: unknown_int): int; // 812 -> 10346
declare function HIGHLIGHT_SET_CATEGORY_MODE(...args: any[]): any; // 1849 -> 10143
declare function HIGHLIGHT_SET_CATEGORY_COLOUR(...args: any[]): any; // 337 -> 10142
declare function INTERFACE_SETPICKINGRADIUS(int0: unknown_int): void; // 522 -> 10008
declare function CAM_LOOKAT(...args: any[]): any; // 181 -> 5501
declare function CAM_MOVETO(...args: any[]): any; // 14 -> 5500
declare function USERFLOWFLAGS(): [int, int]; // 1155 -> 5624
declare function CC_CALLONRESIZE(): void; // 2051 -> 10492
declare function NOTIFICATIONS_CANCELLOCAL(int0: int): void; // 952 -> 10447
declare function NOTIFICATIONS_SENDGROUPEDLOCAL(string0: string, string1: string, int0: int, int1: int, string2: string, int2: int): int; // 1235 -> 10650
declare function OBJSTACK_TYPE(int0: unknown_int): void; // 1189 -> 10009
declare function ACHIEVEMENT_REQSTATE(int0: achievement): int; // 1776 -> 10501
declare function CC_SETSCROLLSIZE(int0: int, int1: int): void; // 2 -> 10438
declare function CC_GETSCROLLWIDTH(): int; // 1365 -> 10459
declare function CC_SETSCROLLPOS(int0: int, int1: int): void; // 829 -> 10252
declare function CC_SENDTOFRONT(): void; // 1945 -> 10502
declare function CC_GETSCROLLX(): int; // 383 -> 10460
declare function IF_SETMOUSEOVERCURSOR(int0: unknown_int, int1: component): void; // 2033 -> 10041
declare function DB_LISTALL(int0: unknown_int): int; // 1541 -> 10452
declare function CC_GETPARENTLAYER(): component; // 1644 -> 10435
declare function ATAN2_DEG(int0: int, int1: int): int; // 1272 -> 10835
declare function OC_STACKABLE(int0: obj): unknown_int; // 442 -> 10500
declare function IF_SETRETEX(int0: int, int1: material, int2: material, int3: component): void; // 606 -> 10187
declare function IF_SETRECOL(int0: unknown_int, int1: unknown_int, int2: int, int3: component): void; // 1253 -> 10303
declare function IF_RESUME_PAUSEBUTTON(int0: unknown_int): void; // 347 -> 10283
declare function CC_SETOPKEY(int0: int, int1: int, int2: int, int3: unknown_int, int4: unknown_int, int5: unknown_int, int6: unknown_int, int7: unknown_int, int8: unknown_int, int9: unknown_int, int10: unknown_int): void; // 959 -> 10496
declare function CC_SETOPKEYRATE(int0: int, int1: unknown_int, int2: unknown_int): void; // 1218 -> 10511
declare function CC_SETOPTKEY(int0: int, int1: int): void; // 1988 -> 10358
declare function CC_SETOPTKEYRATE(int0: unknown_int, int1: unknown_int): void; // 1700 -> 10383
declare function AUTOSETUP_DOSETUPSTATUS(): [unknown_int, int]; // 470 -> 10657
declare function CREATE_NAME_AVAILABLEREQUEST(string0: string): void; // 1021 -> 10264
declare function WORLDMAP_3DVIEW_ACTIVE(int0: unknown_int): void; // 1042 -> 10230
declare function OC_MINIMENU_COLOUR(int0: obj): int; // 867 -> 10062
declare function SSO_LOGOUT(): void; // 395 -> 10420
declare function SETWALKMARKER(int0: unknown_int, int1: unknown_int): void; // 2222 -> 10282
declare function CC_SETNPCMODEL(int0: npc): void; // 847 -> 10544
declare function CC_SETMODELZOOM(int0: int): void; // 1584 -> 10587
declare function WORLDMAP_GETDISPLAYCOORD(int0: var_reference): int; // 571 -> 10324
declare function CC_LIST_SETENTRYICON(int0: int, int1: graphic): void; // 1133 -> 10530
declare function IF_GETNEXTCATEGORYSUBID(int0: int, int1: component): int; // 823 -> 10323
declare function CC_CREATECHILD(int0: unknown_int, int1: int, int2: int): void; // 133 -> 10191
declare function CC_DELETEALLNESTED(): void; // 645 -> 10337
declare function ACTIVECLANSETTINGS_FIND_LISTENED(): unknown_int; // 20 -> 10080
declare function ACTIVECLANSETTINGS_GETCLANNAME(): string; // 2055 -> 10448
declare function ACTIVECLANSETTINGS_GETAFFINEDCOUNT(): int; // 157 -> 10312
declare function TEXT_SWITCH(int0: boolean, string0: unknown_string, string1: unknown_string): string; // 1254 -> 10263
declare function branch_not_long(...args: any[]): any; // 1772 -> 10449
declare function CLANFORUMQFC_TOSTRING(string0: unknown_string, long0: clanforumqfc): [string, string]; // 1669 -> 10127
declare function GETCLIPBOARD(): string; // 647 -> 10507
declare function RESUME_CLANFORUMQFCDIALOG(string0: string): void; // 1907 -> 10256
declare function ACTIVECLANSETTINGS_GETCURRENTOWNER_SLOT(): number; // 1888 -> 10683
declare function ACTIVECLANSETTINGS_GETAFFINEDDISPLAYNAME(int0: number): string; // 600 -> 10682
declare function ACTIVECLANCHANNEL_GETSORTEDUSERSLOT(int0: int): int; // 1778 -> 10868
declare function UNKNOWN_COMMAND_127(int0: int, int1: int, int2: int, int3: int): void; // 1267 -> 10695
declare function ACTIVECLANCHANNEL_FIND_LISTENED(): unknown_int; // 2249 -> 10188
declare function IF_SETONPLAYERGROUPTRANSMIT(...args: any[]): any; // 1563 -> 10361
declare function ACTIVECLANCHANNEL_GETRANKKICK(): int; // 2052 -> 3753
declare function DATE_RUNEDAY_FROMDATE(int0: int, int1: int, int2: int): int; // 309 -> 10065
declare function DATE_ISLEAPYEAR(int0: int): unknown_int; // 656 -> 10623
declare function CLAN_GETCHATOWNERNAME(): string; // 1357 -> 10940
declare function CLAN_GETCHATUSERNAME_UNFILTERED(...args: any[]): any; // 1744 -> 10941
declare function CLAN_GETCHATUSERNAME(...args: any[]): any; // 603 -> 10942
declare function CLAN_GETCHATUSERWORLD(int0: int): int; // 334 -> 10213
declare function IF_GETOP(int0: unknown_int, int1: component): string; // 939 -> 10603
declare function LOGIN_LAST_TRANSFER_REPLY(): [unknown_int, unknown_int, unknown_int]; // 1129 -> 10854
declare function CLANPROFILE_FIND(): unknown_int; // 1764 -> 10136
declare function CC_SETASPECT(int0: int, int1: int): void; // 1014 -> 10457
declare function IF_SETONVARCLANTRANSMIT(...args: any[]): any; // 1542 -> 2433
declare function IF_GETCOLOUR(int0: component): int; // 314 -> 10575
declare function RESUME_HSLDIALOG(int0: int): void; // 1412 -> 3116
declare function OC_ALLOWSPLACEHOLDER(int0: obj): unknown_int; // 1468 -> 10178
declare function CC_SETONINVTRANSMIT(vararg: BoundFunction): void; // 2106 -> 10518
declare function CC_SETONVARCSTRTRANSMIT(vararg: BoundFunction): void; // 1766 -> 10517
declare function GETDEFAULTWINDOWMODE(int0: int, int1: int, int2: int, int3: int): unknown_int; // 1953 -> 10109
declare function MINIMENU_CLOSE(): void; // 1405 -> 10014
declare function branch_eq_long(...args: any[]): any; // 841 -> 10153
declare function ADD_LONG(long0: long, long1: long): long; // 2016 -> 10238
declare function CLIENTTYPE(): unknown_int; // 2212 -> 10120
declare function CC_SETMOUSEOVERCURSOR(int0: unknown_int): void; // 1663 -> 10301
declare function IF_SETMODELORTHOG(int0: unknown_int, int1: unknown_int): void; // 539 -> 10034
declare function IF_GRID_GETNUMROWS(int0: number): number; // 1625 -> 10648
declare function IF_GRID_GETNUMCOLUMNS(int0: number): number; // 651 -> 10647
declare function IF_GETCHILDSPACING(int0: component): int; // 149 -> 10646
declare function IF_GRID_GETCELLHEIGHT(int0: component): int; // 1492 -> 10645
declare function CC_SETONHORIZONTALPINCH(int0: unknown_int, int1: unknown_int, int2: int, int3: int, int4: unknown_int): [unknown_int, int]; // 815 -> 10644
declare function DETAIL_MUSICVOL(...args: any[]): any; // 1103 -> 10159
declare function CC_SETPAUSETEXT(string0: string): void; // 675 -> 10025
declare function CC_SETRETEX(int0: unknown_int, int1: unknown_int, int2: material): void; // 1683 -> 10749
declare function USERDETAIL_LOBBY_PLAYAGE(): unknown_int; // 1619 -> 10598
declare function SOUND_SPEECH_VOLUME(int0: vorbis, int1: unknown_int, int2: unknown_int, int3: unknown_int): void; // 201 -> 10559
declare function ACHIEVEMENT_SPRITE(int0: achievement): graphic; // 607 -> 10636
declare function ACHIEVEMENT_FINDPARENTS(int0: achievement): unknown_int; // 2229 -> 10865
declare function ACHIEVEMENT_FINDNEXT(): achievement; // 663 -> 10532
declare function ACHIEVEMENT_GETNAME(int0: achievement): string; // 782 -> 10561
declare function IF_SETOBJECT_HIGHRES(int0: obj, int1: unknown_int): void; // 766 -> 10037
declare function IF_NPC_SETCUSTOMBODYMODEL(int0: int, int1: model, int2: unknown_int): void; // 2243 -> 10702
declare function RESEND_UID_PASSPORT_REQUEST(): void; // 1001 -> 10325
declare function CC_SETRECOL(int0: int, int1: int, int2: int): void; // 1056 -> 10880
declare function OC_WEARPOS2(int0: obj): unknown_int; // 1805 -> 10487
declare function db_find_with_count(int0: unknown_int, int1: unknown_int, int2: unknown_int): int; // 1470 -> 10100
declare function CAM2_REMOVEALLEFFECTS(): void; // 1143 -> 10000
declare function CAM2_SETLOOKATENTITY_PLAYER(int0: int, int1: int, int2: int, int3: unknown_int): void; // 546 -> 10442
declare function GET_MOUSEBUTTONS(): [unknown_int, unknown_int, unknown_int]; // 821 -> 10667
declare function IF_SETONCLICKREPEAT(...args: any[]): any; // 2261 -> 10618
declare function CC_SETONSTATTRANSMIT(vararg: BoundFunction): void; // 899 -> 10723
declare function mec_getparam(...args: any[]): any; // 1917 -> 10192
declare function OPENURL_SHIM(string0: string, string1: string, string2: string, int0: unknown_int): void; // 580 -> 10084
declare function IF_GETCHARINDEXATPOS(int0: int, int1: int, int2: component): int; // 793 -> 10638
declare function LOGIN_ACCOUNTAPPEAL(string0: string): unknown_int; // 1931 -> 10732
declare function MAP_ISOWNER(string0: unknown_string): unknown_int; // 464 -> 10614
declare function CREATE_SUGGEST_NAME_REQUEST(...args: any[]): any; // 1238 -> 10168
declare function URLENCODE(string0: string): string; // 1317 -> 10124
declare function CREATE_SUGGEST_NAME_REPLY(...args: any[]): any; // 1972 -> 10545
declare function CREATE_NAME_VALIDATE_REPLY(): unknown_int; // 2267 -> 10572
declare function IF_CREATECHILD(int0: unknown_int, int1: int, int2: int, int3: component): void; // 2019 -> 10298
declare function SETOBJ(int0: unknown_int, int1: unknown_int): void; // 2248 -> 10804
declare function IF_CREATENESTED(int0: unknown_int, int1: int, int2: int, int3: int, int4: int, int5: component): unknown_int; // 85 -> 10260
declare function CC_SETENABLED(int0: boolean): void; // 1361 -> 10087
declare function CC_SETFEEDBACKMODE(int0: unknown_int): void; // 1810 -> 10086
declare function CC_BUTTON_SETCANTOGGLE(int0: unknown_int): void; // 770 -> 10129
declare function CC_BUTTON_SETTOGGLED(int0: boolean): void; // 310 -> 10128
declare function SOUND_GROUP_STOP(int0: unknown_int): void; // 484 -> 10184
declare function CC_CHECK_SET(int0: boolean): void; // 1281 -> 10085
declare function CC_CHECK_SETALIGNMENT(...args: any[]): any; // 1577 -> 10046
declare function CC_CHECK_SETBUTTONSIZE(...args: any[]): any; // 2029 -> 10045
declare function CC_SCROLLBAR_SETVISIBLE(int0: unknown_int): void; // 258 -> 10138
declare function CC_LIST_SETENTRIES(int0: cs2enum): void; // 1226 -> 10676
declare function CC_LIST_SETISSELECTED(int0: int, int1: unknown_int, int2: unknown_int): void; // 37 -> 10675
declare function CC_LIST_ADDENTRY(int0: int, string0: string, int1: unknown_int): unknown_int; // 992 -> 10531
declare function CC_LIST_CLEARSELECTION(): void; // 270 -> 10372
declare function CC_GRID_SETLAYOUTPARAMS(...args: any[]): any; // 918 -> 10379
declare function CC_SETCHILDSPACING(...args: any[]): any; // 2018 -> 10353
declare function PRELOAD_PERCENT(): int; // 21 -> 10712
declare function MAP_PRELOAD(int0: coordgrid): void; // 1887 -> 10012
declare function CAM2_SETPOSITIONPOINTCOLLISION(int0: unknown_int): void; // 91 -> 10370
declare function IF_SETOPKEYRATE(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int): void; // 2048 -> 10552
declare function WORLDMAP_3DVIEW_ACTIVE(...args: any[]): any; // 1850 -> 10967
declare function WORLDMAP_3DVIEW_DISABLE(...args: any[]): any; // 859 -> 10966
declare function CAM2_RESETSNAPDISTANCES(...args: any[]): any; // 637 -> 10977
declare function COORD_GRIDTOFINE(int0: coordgrid, int1: unknown_int): unknown_string; // 1984 -> 10403
declare function WORLDMAP_GETCONFIGORIGIN(int0: maparea): coordgrid; // 321 -> 10131
declare function WORLDMAP_3DVIEW_ENABLE(...args: any[]): any; // 1065 -> 10974
declare function CAM2_ENABLE(...args: any[]): any; // 1845 -> 10973
declare function CAM2_SETSNAPDISTANCES(...args: any[]): any; // 1154 -> 10972
declare function COORDY_FINE(...args: any[]): any; // 1447 -> 10402
declare function COORDX_FINE(...args: any[]): any; // 1627 -> 10400
declare function COORDZ_FINE(...args: any[]): any; // 1343 -> 10399
declare function CAM2_SETPOSITIONACCELERATION_AXIS(...args: any[]): any; // 1396 -> 10971
declare function CAM2_SETPOSITIONMAXSPEED_AXIS(...args: any[]): any; // 536 -> 10970
declare function CAM2_SETLOOKATACCELERATION_AXIS(...args: any[]): any; // 1992 -> 10969
declare function CAM2_SETLOOKATMAXSPEED_AXIS(...args: any[]): any; // 90 -> 10968
declare function WORLDMAP_3DVIEW_GETCOORDFINE(...args: any[]): any; // 23 -> 10795
declare function WORLDMAP_GETCONFIGBOUNDS(int0: maparea): [int, int, int, int]; // 1605 -> 10794
declare function CAM2_SETLOOKATPOINT_POINT(...args: any[]): any; // 562 -> 10440
declare function FPS_STATS(): [unknown_int, unknown_int, unknown_int]; // 885 -> 10610
declare function IF_GET_GAMESCREEN(): component; // 2216 -> 10543
declare function PUSH_CONSTANT_INT(string0: unknown_string, int0: int): [string, int, unknown_int]; // 619 -> 10574
declare function CAM2_ADDEFFECT_SHAKE(int0: unknown_int, int1: unknown_int, int2: unknown_int): unknown_int; // 1368 -> 10295
declare function VIEWPORT_GETEFFECTIVESIZE(): [int, int]; // 44 -> 10538
declare function WORLDMAP_3DVIEW_SETLODDISTANCE(int0: unknown_int, int1: int): void; // 2179 -> 10548
declare function FORCE_INTERFACE_DRAG(): void; // 1307 -> 10586
declare function MAP_LOADINGSCREEN_ISOPEN(): unknown_int; // 2193 -> 10558
declare function INVPOW(int0: int, int1: unknown_int): int; // 857 -> 10506
declare function CC_GETDYNAMICLAYER(): unknown_int; // 281 -> 10336
declare function CC_GETSCROLLY(int0: int): [int, int]; // 2071 -> 10628
declare function RUNWEIGHT_VISIBLE(): int; // 99 -> 10226
declare function INTERPOLATE(int0: int, int1: int, int2: int, int3: int, int4: int): int; // 1279 -> 10711
declare function IF_SETONCAMERAUPDATETRANSMIT(...args: any[]): any; // 1567 -> 10051
declare function CAM2_SETSPRINGPROPERTIES(int0: int, int1: int, int2: int, int3: int): void; // 1724 -> 10656
declare function KEYHELD_ALT(): boolean; // 2113 -> 10140
declare function CC_SETOPKEYIGNOREHELD(int0: int): void; // 2219 -> 10495
declare function CC_SETOPTKEYIGNOREHELD(): void; // 742 -> 10357
declare function ACTIVECLANCHANNEL_FIND_AFFINED(int0: unknown_int): void; // 1505 -> 10106
declare function ACHIEVEMENT_GETMEMBERS(int0: achievement): boolean; // 1271 -> 10741
declare function CAM2_UPDATEEFFECT_ZTILT(int0: unknown_int, int1: int): void; // 555 -> 10035
declare function CC_INPUT_SETUP(int0: unknown_int, int1: unknown_int, int2: unknown_int): void; // 501 -> 10090
declare function IGNORE_GETNOTES(int0: int): string; // 16 -> 10700
declare function FRIEND_SETNOTES(string0: string, string1: string): void; // 441 -> 10473
declare function IGNORE_SETNOTES(string0: string, string1: string): void; // 1172 -> 10471
declare function CC_GETOP(int0: unknown_int): string; // 1275 -> 10480
declare function IF_SETOBJECT_LONG(int0: unknown_int, long0: long, int1: component): void; // 1693 -> 10750
declare function IF_GETINVOBJECT(int0: component): obj; // 828 -> 10584
declare function branch_lteq_long(...args: any[]): any; // 1237 -> 10491
declare function VIEWPORT_GETZOOM(): [int, int]; // 1951 -> 10461
declare function OC_TRADEABLE(int0: obj): unknown_int; // 2012 -> 10790
declare function CC_SETCLICKMASK(int0: unknown_int): void; // 1013 -> 10754
declare function FROMDATE(...args: any[]): any; // 1515 -> 10772
declare function IF_GETINVCOUNT(int0: component): unknown_int; // 1789 -> 10583
declare function WORLDMAP_FLASHELEMENTCATEGORY(int0: unknown_int): void; // 1548 -> 10782
declare function WORLDMAP_GETSIZE(): [int, int]; // 259 -> 10777
declare function IF_SETGRAPHIC(int0: graphic, int1: component): void; // 249 -> 2105
declare function CC_SETOBJECT_HIGHRES(int0: obj): void; // 261 -> 10315
declare function CC_PANEL_SETISVERTICAL(...args: any[]): any; // 861 -> 10354
declare function IF_SETONVARTRANSMIT(int0: boolean): void; // 2225 -> 10013
declare function TTV_LIVESTREAMS_GETSTREAM_START(...args: any[]): any; // 1444 -> 10652
declare function TTV_LIVESTREAMS_GETSTREAM_NEXT(): [int, unknown_string, unknown_string, string, string]; // 1506 -> 10651
declare function TTV_LIVESTREAMS_UPDATE(): unknown_int; // 1122 -> 10417
declare function TTV_LOGIN(string0: string, string1: string): unknown_int; // 1362 -> 10578
declare function TTV_LIBRARY_GETSTATE(): unknown_int; // 1130 -> 10826
declare function TTV_HASPREREQUISITES(): unknown_int; // 497 -> 10825
declare function OS_ISWINDOWS(): unknown_int; // 292 -> 10824
declare function OS_ISMAC(): unknown_int; // 2131 -> 10806
declare function OS_ISLINUX(): unknown_int; // 1134 -> 10823
declare function TTV_LOGIN_GETSTATE(): unknown_int; // 672 -> 10822
declare function TTV_STREAM_GETSTATE(): unknown_int; // 2164 -> 10556
declare function TTV_STREAM_GETVIEWERS(): int; // 2272 -> 10555
declare function TTV_WEBCAM_GETDEVICE_BYUNIQUENAME(string0: string): [int, string, string]; // 544 -> 10534
declare function TTV_WEBCAM_GETCAP_BYUNIQUEID(int0: int, int1: int): [int, int, int, int, int]; // 2104 -> 10744
declare function TTV_WEBCAM_GETDEVICE_COUNT(): int; // 1480 -> 10752
declare function TTV_WEBCAM_FLIP(int0: unknown_int, int1: unknown_int): void; // 1691 -> 10763
declare function TTV_WEBCAM_SUPPORTED(...args: any[]): any; // 1759 -> 10753
declare function TTV_WEBCAM_GETDEVICE_BYINDEX(int0: int): [int, string, string]; // 747 -> 10751
declare function TTV_WEBCAM_GETCAP_BYINDEX(int0: int, int1: int): [int, int, int, int, int]; // 188 -> 10743
declare function TTV_WEBCAM_GETCAP_COUNT(int0: int): int; // 1834 -> 10745
declare function TTV_WEBCAM_START(int0: int, int1: int): unknown_int; // 773 -> 10592
declare function TTV_WEBCAM_STOP(int0: int): unknown_int; // 1060 -> 10581
declare function TTV_STREAM_STOP(...args: any[]): any; // 160 -> 10715
declare function TTV_STREAM_GETQUALITY(): unknown_int; // 709 -> 10633
declare function OS_PHYSICALMEMORYSIZE(int0: unknown_int, int1: unknown_int, string0: unknown_string): [unknown_int, unknown_int, string, int]; // 2143 -> 10144
declare function CC_GETGRAPHICDIMENSIONS(): [int, int]; // 2273 -> 10458
declare function LOGIN_REPLY(): int; // 1837 -> 10190
declare function GET_OBJ_OVERLAY_HEIGHT(): int; // 657 -> 10171
declare function GET_OBJ_SCREEN_POSITION(int0: int): [int, int, int]; // 1404 -> 10170
declare function GET_OBJ_BOUNDING_BOX(): [unknown_int, int, int, int, int]; // 2224 -> 10169
declare function GET_LOC_OVERLAY_HEIGHT(): int; // 1877 -> 10177
declare function GET_LOC_SCREEN_POSITION(int0: int): [int, int, int]; // 1534 -> 10176
declare function GET_LOC_BOUNDING_BOX(): [unknown_int, int, int, int, int]; // 1940 -> 10175
declare function CAM2_SETLOOKATENTITY_NPC(...args: any[]): any; // 1406 -> 10285
declare function CAM2_SETPOSITIONENTITY_NPC(...args: any[]): any; // 901 -> 10284
declare function PLAYER_GROUP_MEMBER_COUNT(): int; // 2202 -> 10550
declare function PLAYER_GROUP_MEMBER_GET_DISPLAYNAME(int0: int): string; // 796 -> 10549
declare function PLAYER_GROUP_MEMBER_IS_OWNER(int0: int): unknown_int; // 1395 -> 10427
declare function PLAYER_GROUP_MEMBER_GET_RANK(int0: int): unknown_int; // 2060 -> 10426
declare function IF_SETONPLAYERGROUPVARPTRANSMIT(...args: any[]): any; // 1714 -> 10462
declare function PLAYER_GROUP_GET_MAX_SIZE(string0: string, string1: unknown_string): [string, string, int]; // 1169 -> 10773
declare function PLAYER_GROUP_BANNED_COUNT(...args: any[]): any; // 868 -> 10797
declare function PLAYER_GROUP_BANNED_GET_DISPLAYNAME(int0: int): string; // 1790 -> 10796
declare function CC_SETLINKPLAYERGROUP(int0: int, int1: unknown_int): void; // 34 -> 10629
declare function PLAYER_GROUP_GET_DISPLAYNAME(): string; // 439 -> 10809
declare function PLAYER_GROUP_MEMBER_GET_STATUS(int0: int): unknown_int; // 28 -> 10302
declare function PLAYER_GROUP_MEMBER_IS_ONLINE(int0: int): unknown_int; // 1733 -> 10939
declare function PLAYER_GROUP_MEMBER_GET_LAST_SEEN_NODE_ID(int0: int): int; // 227 -> 10936
declare function PLAYER_GROUP_MEMBER_GET_SAME_WORLD_VAR(int0: int, int1: unknown_int, int2: unknown_int): int; // 2227 -> 10938
declare function PLAYER_GROUP_MEMBER_GET_TEAM(int0: int): int; // 839 -> 10937
declare function PLAYER_GROUP_GET_OWNER_SLOT(int0: int): [unknown_int, unknown_int]; // 2160 -> 10408
declare function PLAYER_GROUP_GET_OVERALL_STATUS(): unknown_int; // 24 -> 10862
declare function NOTIFICATIONS_OPENSETTINGS(): void; // 698 -> 10001
declare function CC_SETSTYLESHEET(...args: any[]): any; // 553 -> 10451
declare function CC_RESUME_PAUSEBUTTON(): void; // 1292 -> 10117
declare function DATE_YEAR(): int; // 710 -> 10421
declare function lc_getparam(int0: loc, int1: unknown_int): unknown_int; // 1363 -> 10798
declare function CC_MODELGROUP_GETCAMERAYAWPITCHROLL(int0: fontmetrics): [int, unknown_int, unknown_int, unknown_int, unknown_int]; // 864 -> 10278
declare function SCALE_LONG(long0: long, long1: unknown_long, long2: unknown_long): long; // 225 -> 10393
declare function TELEMETRY_GET_GROUP_INDEX(int0: int): int; // 1549 -> 10567
declare function TELEMETRY_GET_ROW_INDEX(int0: int, int1: int): int; // 968 -> 10566
declare function TELEMETRY_GET_GROUP_COUNT(): int; // 883 -> 10963
declare function TELEMETRY_GET_GROUP_ID(int0: int): int; // 1491 -> 10962
declare function TELEMETRY_GET_COLUMN_COUNT(int0: int): int; // 250 -> 10957
declare function TELEMETRY_GET_ROW_COUNT(int0: int): int; // 1015 -> 10961
declare function TELEMETRY_GET_ROW_ID(int0: int, int1: int): int; // 493 -> 10959
declare function TELEMETRY_GET_COLUMN_ID(int0: int, int1: int): int; // 914 -> 10960
declare function TELEMETRY_GET_GRID_VALUE(int0: int, int1: int, int2: int): int; // 1545 -> 10564
declare function TELEMETRY_IS_ROW_PINNED(int0: int, int1: int): unknown_int; // 288 -> 10958
declare function TELEMETRY_GET_COLUMN_INDEX(int0: int, int1: int): int; // 1664 -> 10565
declare function ACHIEVEMENT_FINDSUBCAT(int0: category, int1: category): int; // 1266 -> 10246
declare function CC_LIST_GETENABLED(...args: any[]): any; // 1920 -> 10602
declare function NOTIFICATIONS_ISLOCALSCHEDULED(...args: any[]): any; // 904 -> 10601
declare function AUTOSETUP_SETMIN(): void; // 941 -> 10002
declare function IGNORE_GETNAME_UNFILTERED(): void; // 2023 -> 10281
declare function IGNORE_GETNAME_UNFILTERED(...args: any[]): any; // 1100 -> 10780
declare function CC_SETONSCROLLWHEEL(vararg: BoundFunction): void; // 1098 -> 10591
declare function UNKNOWN_COMMAND_120(int0: unknown_int, int1: graphic, int2: unknown_int): void; // 1367 -> 10418
declare function OS_DRIVER_VENDOR(): int; // 463 -> 10215
declare function CHAT_CLEAR(): void; // 1777 -> 10571
declare function CAM2_SETLOOKATORIENTATION_ZMOVEMENT(int0: int): void; // 29 -> 10707
declare function CAM2_SETLOOKATORIENTATION_XMOVEMENT(int0: int): void; // 1046 -> 10708
declare function CAM2_SETLOOKATORIENTATION_XROTATION(int0: int): void; // 1942 -> 10705
declare function CAM2_SETLOOKATORIENTATION_YROTATION(int0: int): void; // 265 -> 10706
declare function IF_SETONGAMEPADBUTTON(...args: any[]): any; // 1057 -> 10526
declare function IF_SETONGAMEPADAXIS(...args: any[]): any; // 226 -> 10525
declare function IF_SETONGAMEPADTRIGGER(...args: any[]): any; // 2140 -> 10524
declare function IF_SETONGAMEPADBUTTONHELD(...args: any[]): any; // 1565 -> 10523
declare function IF_LIST_SETISSELECTED(int0: int, int1: unknown_int, int2: unknown_int, int3: component): void; // 377 -> 10513
declare function CC_GETSCROLLHEIGHT(): int; // 1214 -> 10713
declare function CC_SETPARAM_STRING(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int): int; // 1668 -> 10649
declare function NOT(int0: int, int1: int): [int, int]; // 945 -> 10742
declare function CC_TRIGGEROP(int0: unknown_int): void; // 943 -> 10432
declare function ACHIEVEMENT_CATEGORY(int0: achievement): category; // 2042 -> 10352
declare function IF_SETONSTORETRANSMIT(int0: int): [int, string]; // 1609 -> 10779
declare function PARALINE(string0: string, int0: int, int1: fontmetrics, int2: int): string; // 1922 -> 10704
declare function ACHIEVEMENT_TOTAL_RUNESCORE(): int; // 72 -> 10593
declare function ACHIEVEMENT_FINDCATEGORY(int0: category): int; // 597 -> 10236
declare function GETDEFAULTWINDOWMODE(...args: any[]): any; // 1076 -> 10698
declare function IF_NPC_SETCUSTOMRECOL(...args: any[]): any; // 2079 -> 10805
declare function SOUND_SYNTH_VOLUME(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int): void; // 547 -> 10760
declare function AUTOSETUP_DOSETUP(): unknown_int; // 1853 -> 10299
declare function POP_INT_DISCARD(...args: any[]): any; // 323 -> 10381
declare function IF_SETFEEDBACKMODE(...args: any[]): any; // 356 -> 10380
declare function CC_SETHELD(...args: any[]): any; // 289 -> 10066
declare function SETDEFAULTCURSORS(): void; // 1000 -> 10053
declare function IF_SETONHOOK46(...args: any[]): any; // 1250 -> 10376
declare function IF_SETPINCHDEADZONE(...args: any[]): any; // 1751 -> 10468
declare function IF_SETPINCHFLAGS(...args: any[]): any; // 341 -> 10467
declare function IF_SETONVERTICALPINCH(...args: any[]): any; // 877 -> 10466
declare function IF_SETONHORIZONTALPINCH(...args: any[]): any; // 481 -> 10465
declare function DB_FIND_REFINE(int0: unknown_int, int1: int, int2: unknown_int): int; // 1096 -> 10709
declare function CHAT_GETNEXTUID(int0: int): int; // 2221 -> 10699
declare function IF_SET_GAMESCREEN_ENABLED(int0: unknown_int): void; // 2013 -> 10247
declare function USERDETAIL_LOBBY_RECOVERYDAY(): unknown_int; // 1187 -> 10663
declare function BATTERY_GETLEVELPERCENT(...args: any[]): any; // 1869 -> 10662
declare function BATTERY_ISCHARGING(...args: any[]): any; // 1069 -> 10661
declare function OC_DESC(int0: obj): string; // 888 -> 10573
declare function PLAYERCOUNTRY(): unknown_int; // 447 -> 10130
declare function FEDERATED_LOGIN(int0: unknown_int, int1: unknown_int): void; // 1234 -> 10103
declare function FEDERATED_LOGIN_STATUS(): int; // 1050 -> 10293
declare function OPENSTORE(int0: unknown_int, string0: unknown_string): void; // 1723 -> 10562
declare function LOGIN_INPROGRESS(...args: any[]): any; // 862 -> 10267
declare function SSO_DISPLAYNAME(): string; // 459 -> 10434
declare function STEAM_SETACHIVEMENT(string0: string, int0: unknown_int, int1: unknown_int): unknown_int; // 2125 -> 10227
declare function STEAM_STORESTATS(): unknown_int; // 1027 -> 10005
declare function IF_SETDRAGDEADZONE(...args: any[]): any; // 578 -> 10334
declare function IF_SETDRAGDEADTIME(...args: any[]): any; // 956 -> 10333
declare function ACHIEVEMENT_IS_CHECKLIST(int0: achievement): unknown_int; // 1384 -> 10272
declare function ACHIEVEMENT_ACHIEVEMENT_REQ_COUNT(int0: achievement): int; // 570 -> 10271
declare function ACHIEVEMENT_GETSUBCATCOUNT(int0: category, int1: unknown_int): unknown_int; // 954 -> 10728
declare function ACHIEVEMENT_SUBCAT(int0: achievement): category; // 105 -> 10351
declare function ACHIEVEMENT_FINDGRACED(): int; // 1687 -> 10195
declare function CC_SETONMOUSEOVER(): unknown_int; // 1340 -> 10231
declare function CC_SETMODELLIGHTING(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: material): void; // 2199 -> 10450
declare function SHOP_OPENCATEGORIES(int0: unknown_int, int1: unknown_int): void; // 514 -> 10044
declare function LOBBY_ENTERGAME(...args: any[]): any; // 1645 -> 10311
declare function DETAILGET_SOUNDVOL(...args: any[]): any; // 836 -> 10310
declare function DETAILGET_MUSICVOL(...args: any[]): any; // 658 -> 10309
declare function DETAILGET_BGSOUNDVOL(...args: any[]): any; // 2028 -> 10308
declare function DETAILGET_SPEECHVOL(...args: any[]): any; // 2111 -> 10307
declare function DETAILGET_LOGINVOL(): unknown_int; // 1971 -> 10306
declare function SHOP_APPLYPENDINGTRANSACTIONS(...args: any[]): any; // 687 -> 10091
declare function TOGGLEBIT(): unknown_int; // 98 -> 10164
declare function PRELOAD_DOWNLOAD_COMPLETE(): unknown_int; // 209 -> 10771
declare function PRELOAD_PROGRESS(): int; // 893 -> 10770
declare function PRELOAD_DOWNLOAD_DOWNLOADEDSIZE(...args: any[]): any; // 148 -> 10769
declare function PRELOAD_DOWNLOAD_TOTALSIZE(...args: any[]): any; // 2117 -> 10768
declare function PRELOAD_DOWNLOAD_RATE(...args: any[]): any; // 2274 -> 10767
declare function IF_GETMODELYOF(int0: unknown_int): void; // 1092 -> 10104
declare function NOTIFICATIONS_SENDLOCAL(string0: unknown_string, string1: unknown_string, int0: unknown_int, int1: int): unknown_int; // 640 -> 10254
declare function SHOP_REQUESTDATA(...args: any[]): any; // 1414 -> 10316
declare function WORLDMAP_LISTELEMENT_START(int0: unknown_int, int1: int, int2: unknown_int, int3: unknown_int): unknown_int; // 1580 -> 10257
declare function IF_SETPLAYERHEAD_SELF(int0: unknown_int, int1: unknown_int): unknown_int; // 1364 -> 10364
declare function CC_SCROLLBAR_SETUP(int0: unknown_int, int1: unknown_int, int2: unknown_int): void; // 856 -> 10137
declare function IF_LIST_ADDENTRY(int0: unknown_int, string0: string, int1: unknown_int): unknown_int; // 775 -> 10095
declare function STYLESHEET_HAS_VALUE(int0: stylesheet, string0: string): unknown_int; // 1965 -> 10484
declare function STYLESHEET_GET_PARENT_ID(int0: stylesheet): stylesheet; // 2097 -> 10483
declare function SETBIT_RANGE_TOINT(int0: int, int1: int, int2: unknown_int, int3: unknown_int): int; // 1885 -> 10410
declare function SHOP_ISPRODUCTAVAILABLE(int0: unknown_int, int1: int): unknown_int; // 1136 -> 10725
declare function IF_GETENABLED(int0: unknown_int): unknown_int; // 2220 -> 10431
declare function UI_GETCATEGORY(int0: int): int; // 1975 -> 10398
declare function CC_SETMODELORIGIN(int0: unknown_int, int1: unknown_int): void; // 641 -> 10800
declare function CC_GRID_GETNUMROWS(): number; // 2198 -> 10659
declare function CC_GRID_GETNUMCOLUMNS(): number; // 375 -> 10658
declare function IF_GRID_GETLAYOUTPARAMS(int0: component): [unknown_int, int, int]; // 1898 -> 10738
declare function CC_TEXT_SETTRANS(...args: any[]): any; // 2027 -> 10714
declare function IF_DELETEALLNESTED(int0: unknown_int, int1: unknown_int, int2: unknown_int): unknown_int; // 111 -> 10234
declare function IF_SETASPECT(int0: unknown_int, int1: unknown_int, int2: component): void; // 1063 -> 10196
declare function UI_GETDYNID(int0: int): int; // 808 -> 10397
declare function UNPACK_LONG(long0: long): [unknown_int, int]; // 1801 -> 10433
declare function IF_CHECK_SET(int0: boolean, int1: unknown_int): void; // 1674 -> 10220
declare function ACHIEVEMENT_ALLPREREQMET(int0: achievement): unknown_int; // 756 -> 10520
declare function DEEPLINK_COUNT(): int; // 354 -> 10429
declare function DEEPLINK_GET(int0: int): unknown_int; // 26 -> 10428
declare function DEEPLINK_CLEAR_INDEX(int0: unknown_int): void; // 416 -> 10016
declare function ACTIVECHATPHRASE_PREPARE(): [number, number]; // 540 -> 10554
declare function DETAILGET_INTERFACESCALE(): number; // 2076 -> 10553
declare function OC_COST(int0: obj): long; // 1699 -> 10070
declare function MODULO_LONG(long0: long, long1: unknown_long): long; // 712 -> 10687
declare function MIN_LONG(long0: long, long1: long): long; // 2099 -> 10622
declare function INVOTHER_TOTAL(int0: unknown_int, int1: unknown_int): int; // 353 -> 10542
declare function CHATPHRASE_GETDYNAMICCOMMANDCOUNT(int0: unknown_int, int1: unknown_int): void; // 538 -> 10665
declare function CUTSCENE2D_STOP(int0: unknown_int): void; // 46 -> 10021
declare function CC_SETONDRAG(int0: unknown_int): void; // 324 -> 10017
declare function CC_CAROUSEL_SETTEXTENTRIES(...args: any[]): any; // 1024 -> 10072
declare function CC_CAROUSEL_SETSELECTED(...args: any[]): any; // 813 -> 10071
declare function CC_CAROUSEL_SETICONENTRIES(...args: any[]): any; // 1616 -> 10073
declare function CC_PAGEDCAROUSEL_SETDYNAMICPAGECOUNT(int0: unknown_int): void; // 1204 -> 10018
declare function CC_PAGEDCAROUSEL_SETSELECTED(int0: unknown_int, int1: unknown_int): void; // 200 -> 10182
declare function CC_COMBO_SETENTRIES(int0: cs2enum): void; // 923 -> 10674
declare function CC_COMBO_SELECT(int0: int, int1: unknown_int): unknown_int; // 1956 -> 10672
declare function CC_COMBO_ADDENTRY(int0: int, string0: string): unknown_int; // 683 -> 10673
declare function CC_COMBO_CLEARENTRIES(): void; // 410 -> 10384
declare function CC_PAGEDLAYER_SETDYNAMICPAGECOUNT(int0: unknown_int): void; // 752 -> 10133
declare function CC_PAGEDLAYER_SETPAGELABELS(int0: unknown_int): void; // 1826 -> 10132
declare function CC_PAGEDLAYER_SETPAGEICONS(int0: unknown_int): void; // 77 -> 10134
declare function CC_PAGEDLAYER_SETACTIVEPAGE(int0: unknown_int, int1: unknown_int): void; // 2213 -> 10183
declare function IF_RADIALPROGRESSOVERLAY_START(int0: unknown_int, int1: int, int2: unknown_int): void; // 251 -> 10096
declare function CC_RADIALPROGRESSOVERLAY_START(int0: unknown_int, int1: int): void; // 485 -> 10074
declare function IF_RADIALPROGRESSOVERLAY_SET(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int): void; // 1467 -> 10079
declare function CC_RADIALPROGRESSOVERLAY_SET(int0: unknown_int, int1: unknown_int, int2: unknown_int): void; // 1159 -> 10055
declare function IF_RADIALPROGRESSOVERLAY_SETVALUE(int0: unknown_int, int1: unknown_int): void; // 2279 -> 10038
declare function CC_RADIALPROGRESSOVERLAY_SETVALUE(int0: unknown_int): void; // 582 -> 10019
declare function CC_RADIOGROUP_SETSELECTIONLIMITS(int0: unknown_int, int1: unknown_int): void; // 109 -> 10225
declare function CC_RADIOGROUP_SETOPTIONS(int0: unknown_int): void; // 1099 -> 10224
declare function CC_RADIOGROUP_CLEAROPTIONS(): void; // 1466 -> 10056
declare function CC_RADIOGROUP_SETOPTIONSELECTED(int0: int, int1: unknown_int, int2: unknown_int): unknown_int; // 1139 -> 10318
declare function CC_SLIDER_SETUP(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int): void; // 1140 -> 10269
declare function CC_SLIDER_SETUPENUM(int0: unknown_int): void; // 1716 -> 10268
declare function CC_RADIALPROGRESSOVERLAY_GETPROGRESS(): int; // 2241 -> 10580
declare function CC_SETONDROPDOWNSELECT(vararg: BoundFunction): void; // 236 -> 10392
declare function CC_RADIOGROUP_ADDOPTION(...args: any[]): any; // 1338 -> 10849
declare function TEXT_GENDER(string0: unknown_string, string1: unknown_string, string2: unknown_string): [string, string]; // 787 -> 10821
declare function CC_ANIM_PLAY(...args: any[]): any; // 1966 -> 10624
declare function CC_ANIM_KILL(...args: any[]): any; // 1727 -> 10625
declare function CC_UNKNOWN1(): int; // 165 -> 10842
declare function CC_UNKNOWN2(): int; // 1785 -> 10787
declare function IF_SETPLAYERHEAD_SELF(int0: unknown_int): unknown_int; // 688 -> 10404
declare function DETAIL_WATERDETAIL_HIGH(int0: unknown_int, int1: unknown_int, int2: unknown_int): unknown_int; // 2263 -> 10405
declare function IF_SETONDROPDOWNSELECT(int0: unknown_int, string0: string, int1: unknown_int): unknown_int; // 1735 -> 10385
declare function DB_FIND_GET(int0: int): dbrow; // 1081 -> 10746
declare function unk10978(int0: number): void; // 244 -> 10978
declare function unk10979(int0: number): void; // 2264 -> 10979
declare function unk10980(int0: number): void; // 723 -> 10980
declare function unk10981(int0: number): number; // 702 -> 10981
declare function unk10982(long0: BigInt, int0: number): number; // 1974 -> 10982
declare function unk10983(int0: number): string; // 995 -> 10983
declare function unk10984(int0: number): number; // 1313 -> 10984
declare function unk10985(int0: number, int1: number, int2: number): number; // 471 -> 10985
declare function unk10986(int0: number): number; // 257 -> 10986
declare function unk10987(...args: any[]): any; // 2223 -> 10987
declare function unk10988(int0: number, int1: number): number; // 1575 -> 10988
declare function unk10989(): number; // 113 -> 10989
declare function unk10990(): void; // 1927 -> 10990
declare function unk10991(...args: any[]): any; // 1679 -> 10991
declare function unk10992(string0: string, int0: number, int1: number, int2: number): void; // 58 -> 10992
declare function unk10993(int0: number): number; // 1117 -> 10993
declare function unk10994(int0: number, int1: number, int2: number): void; // 1932 -> 10994
declare function unk10995(int0: number): void; // 1667 -> 10995
declare function unk10996(): number; // 1216 -> 10996
declare function unk10997(int0: number): void; // 1513 -> 10997
declare function unk10998(): void; // 427 -> 10998
declare function unk10999(int0: number, int1: number): number; // 1324 -> 10999
declare function unk11000(string0: string): void; // 155 -> 11000
declare function unk11001(...args: any[]): any; // 1276 -> 11001
declare function unk11002(): number; // 924 -> 11002
declare function unk11003(): number; // 1734 -> 11003
declare function unk11004(...args: any[]): any; // 1919 -> 11004
declare function unk11005(...args: any[]): any; // 1604 -> 11005
declare function unk11006(int0: number): void; // 2190 -> 11006
declare function unk11007(int0: number): void; // 620 -> 11007
declare function unk11008(int0: number): void; // 1196 -> 11008
declare function unk11009(...args: any[]): any; // 1260 -> 11009
declare function unk11010(...args: any[]): any; // 1375 -> 11010
declare function unk11011(int0: number, int1: number, int2: number): number; // 1429 -> 11011
declare function unk11012(string0: string, int0: number, int1: number): void; // 1106 -> 11012
declare function unk11013(int0: number, int1: number, int2: number, int3: number): void; // 1389 -> 11013
declare function unk11014(int0: number): void; // 1141 -> 11014
declare function unk11015(): number; // 599 -> 11015
declare function unk11016(string0: string): void; // 736 -> 11016
declare function unk11017(int0: number): number; // 626 -> 11017
declare function unk11018(int0: number, int1: number): number; // 677 -> 11018
declare function unk11019(...args: any[]): any; // 1857 -> 11019
declare function unk11020(int0: number): string; // 1054 -> 11020
declare function unk11021(string0: string): string; // 461 -> 11021
declare function unk11022(string0: string): number; // 933 -> 11022
declare function unk11023(int0: number, int1: number, int2: number): void; // 224 -> 11023
declare function unk11024(): [number, number, number]; // 76 -> 11024
declare function unk11025(int0: number): number; // 649 -> 11025
declare function unk11026(int0: number): number; // 1612 -> 11026
declare function unk11027(int0: number, string0: string): number; // 616 -> 11027
declare function unk11028(long0: BigInt, int0: number): BigInt; // 1178 -> 11028
declare function unk11029(long0: BigInt, int0: number): BigInt; // 896 -> 11029
declare function unk11030(vararg: BoundFunction): void; // 1958 -> 11030
declare function unk11031(string0: string): number; // 145 -> 11031
declare function unk11032(int0: number, int1: number): number; // 799 -> 11032
declare function unk11033(string0: string, int0: number): [number, number, number, BigInt, BigInt, number, BigInt, number, number, number, number, number, number]; // 1347 -> 11033
declare function unk11034(int0: number, int1: number, int2: number): number; // 2192 -> 11034
declare function unk11035(int0: number, int1: number, int2: number): number; // 127 -> 11035
declare function unk11036(int0: number, int1: number): number; // 2031 -> 11036
declare function unk11037(int0: number): number; // 840 -> 11037
declare function unk11038(...args: any[]): any; // 1720 -> 11038
declare function unk11039(int0: number): void; // 1685 -> 11039
declare function unk11040(vararg: BoundFunction): void; // 218 -> 11040
declare function unk11041(int0: number): void; // 1410 -> 11041
declare function unk11042(int0: number, int1: number): void; // 1856 -> 11042
declare function unk11043(int0: number): void; // 1028 -> 11043
declare function unk11044(): void; // 2032 -> 11044
declare function unk11045(): number; // 396 -> 11045
declare function unk11046(int0: number): void; // 406 -> 11046
declare function unk11047(...args: any[]): any; // 1641 -> 11047
declare function unk11048(...args: any[]): any; // 2064 -> 11048
declare function unk11049(string0: string, string1: string, string2: string, int0: number): number; // 624 -> 11049
declare function unk11050(int0: number, int1: number, int2: number, int3: number): number; // 62 -> 11050
declare function unk11051(): [number, number]; // 60 -> 11051
declare function unk11052(int0: number): number; // 846 -> 11052
declare function unk11053(): number; // 802 -> 11053
declare function unk11054(long0: BigInt, int0: number): string; // 71 -> 11054
declare function unk11055(): void; // 1867 -> 11055
declare function unk11056(...args: any[]): any; // 118 -> 11056
declare function unk11057(...args: any[]): any; // 2251 -> 11057
declare function unk11058(): void; // 11 -> 11058
declare function unk11059(int0: number): [number, string, number, string, string, string, string, number, string, number, number]; // 1721 -> 11059
declare function unk11060(): void; // 246 -> 11060
declare function unk11061(int0: number): number; // 1642 -> 11061
declare function unk11062(): void; // 2280 -> 11062
declare function unk11063(): void; // 1496 -> 11063
declare function unk11064(...args: any[]): any; // 1462 -> 11064
declare function unk11065(int0: number, int1: number): number; // 1262 -> 11065
declare function unk11066(int0: number): number; // 510 -> 11066
declare function unk11067(int0: number): number; // 1299 -> 11067
declare function unk11068(int0: number): number; // 291 -> 11068
declare function unk11069(int0: number): number; // 872 -> 11069
declare function unk11070(int0: number, int1: number): number; // 1533 -> 11070
declare function unk11071(...args: any[]): any; // 1665 -> 11071
declare function unk11072(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void; // 650 -> 11072
declare function unk11073(int0: number, int1: number, int2: number): number; // 1083 -> 11073
declare function unk11074(int0: number): number; // 577 -> 11074
declare function unk11075(int0: number): number; // 754 -> 11075
declare function unk11076(): number; // 1731 -> 11076
declare function unk11077(): number; // 646 -> 11077
declare function unk11078(int0: number): [number, number]; // 2166 -> 11078
declare function unk11079(): number; // 2070 -> 11079
declare function unk11080(int0: number): [number, number]; // 402 -> 11080
declare function unk11081(int0: number, int1: number): string; // 1475 -> 11081
declare function unk11082(...args: any[]): any; // 1590 -> 11082
declare function unk11083(int0: number, int1: number, int2: number, int3: number, int4: number): void; // 112 -> 11083
declare function unk11084(int0: number, string0: string, string1: string): void; // 751 -> 11084
declare function unk11085(string0: string, string1: string): number; // 1355 -> 11085
declare function unk11086(...args: any[]): any; // 153 -> 11086
declare function unk11087(int0: number, int1: number, int2: number): void; // 213 -> 11087
declare function unk11088(...args: any[]): any; // 691 -> 11088
declare function unk11089(int0: number, int1: number): number; // 680 -> 11089
declare function unk11090(int0: number, int1: number): number; // 39 -> 11090
declare function unk11091(int0: number, int1: number): number; // 1745 -> 11091
declare function unk11092(int0: number, int1: number): number; // 432 -> 11092
declare function unk11093(int0: number, int1: number): number; // 2047 -> 11093
declare function unk11094(int0: number, int1: number): number; // 363 -> 11094
declare function unk11095(int0: number, int1: number): number; // 1889 -> 11095
declare function unk11096(int0: number): number; // 1552 -> 11096
declare function unk11097(int0: number): number; // 842 -> 11097
declare function unk11098(...args: any[]): any; // 673 -> 11098
declare function unk11099(...args: any[]): any; // 2181 -> 11099
declare function unk11100(int0: number, string0: string): void; // 612 -> 11100
declare function unk11101(): [number, number, string, number, string, number, number, string]; // 892 -> 11101
declare function unk11102(): [number, number, string, number, string, number, number, string]; // 491 -> 11102
declare function unk11103(): number; // 2154 -> 11103
declare function unk11104(): number; // 102 -> 11104
declare function unk11105(...args: any[]): any; // 1479 -> 11105
declare function unk11106(...args: any[]): any; // 2253 -> 11106
declare function unk11107(int0: number): void; // 666 -> 11107
declare function unk11108(): void; // 1795 -> 11108
declare function unk11109(int0: number, int1: number, int2: number): void; // 964 -> 11109
declare function unk11110(...args: any[]): any; // 1881 -> 11110
declare function unk11111(...args: any[]): any; // 1241 -> 11111
declare function unk11112(): number; // 2043 -> 11112
declare function unk11113(int0: number): number; // 1252 -> 11113
declare function unk11114(...args: any[]): any; // 1387 -> 11114
declare function unk11115(): number; // 929 -> 11115
declare function unk11116(): number; // 1670 -> 11116
declare function unk11117(): number; // 1521 -> 11117
declare function unk11118(): number; // 386 -> 11118
declare function unk11119(vararg: BoundFunction): void; // 1650 -> 11119
declare function unk11120(int0: number): number; // 2218 -> 11120
declare function unk11121(string0: string): number; // 1623 -> 11121
declare function unk11122(int0: number): number; // 1725 -> 11122
declare function unk11123(int0: number): number; // 411 -> 11123
declare function unk11124(...args: any[]): any; // 509 -> 11124
declare function unk11125(int0: number): void; // 1769 -> 11125
declare function unk11126(): number; // 834 -> 11126
declare function unk11127(int0: number): number; // 845 -> 11127
declare function unk11128(string0: string): void; // 238 -> 11128
declare function unk11129(string0: string, int0: number): void; // 433 -> 11129
declare function unk11130(): void; // 101 -> 11130
declare function unk11131(): void; // 1752 -> 11131
declare function unk11132(int0: number): number; // 104 -> 11132
declare function unk11133(int0: number): [number, number]; // 474 -> 11133
declare function unk11134(int0: number, int1: number, int2: number): number; // 1009 -> 11134
declare function unk11135(int0: number, int1: number, int2: number): number; // 748 -> 11135
declare function unk11136(...args: any[]): any; // 349 -> 11136
declare function unk11137(int0: number, int1: number): number; // 786 -> 11137
declare function unk11138(int0: number, int1: number, int2: number): number; // 1442 -> 11138
declare function unk11139(...args: any[]): any; // 975 -> 11139
declare function unk11140(int0: number, int1: number): number; // 886 -> 11140
declare function unk11141(int0: number, int1: number, int2: number): number; // 2103 -> 11141
declare function unk11142(...args: any[]): any; // 1308 -> 11142
declare function unk11143(int0: number, int1: number): number; // 1448 -> 11143
declare function unk11144(int0: number, int1: number, int2: number): number; // 1787 -> 11144
declare function unk11145(...args: any[]): any; // 2155 -> 11145
declare function unk11146(int0: number, int1: number): number; // 1144 -> 11146
declare function unk11147(int0: number, int1: number, int2: number): number; // 1150 -> 11147
declare function unk11148(...args: any[]): any; // 692 -> 11148
declare function unk11149(...args: any[]): any; // 1579 -> 11149
declare function unk11150(...args: any[]): any; // 243 -> 11150
declare function unk11151(...args: any[]): any; // 230 -> 11151
declare function unk11152(int0: number): number; // 1486 -> 11152
declare function unk11153(...args: any[]): any; // 2167 -> 11153
declare function unk11154(...args: any[]): any; // 1768 -> 11154
declare function unk11155(...args: any[]): any; // 1977 -> 11155
declare function unk11156(...args: any[]): any; // 1220 -> 11156
declare function unk11157(...args: any[]): any; // 1987 -> 11157
declare function unk11158(): number; // 7 -> 11158
declare function unk11159(): number; // 1192 -> 11159
declare function unk11160(): number; // 1808 -> 11160
declare function unk11161(): void; // 1750 -> 11161
declare function unk11162(): number; // 1112 -> 11162
declare function unk11163(...args: any[]): any; // 1171 -> 11163
declare function unk11164(...args: any[]): any; // 332 -> 11164
declare function unk11165(...args: any[]): any; // 1939 -> 11165
declare function unk11166(...args: any[]): any; // 1696 -> 11166
declare function unk11167(...args: any[]): any; // 1502 -> 11167
declare function unk11168(int0: number, int1: number, int2: number): void; // 1955 -> 11168
declare function unk11169(int0: number): number; // 1980 -> 11169
declare function unk11170(int0: number): [number, number]; // 2009 -> 11170
declare function unk11171(int0: number): number; // 372 -> 11171
declare function unk11172(int0: number, int1: number, int2: number): number; // 1457 -> 11172
declare function unk11173(...args: any[]): any; // 1554 -> 11173
declare function unk11174(...args: any[]): any; // 565 -> 11174
declare function unk11175(...args: any[]): any; // 196 -> 11175
declare function unk11176(...args: any[]): any; // 953 -> 11176
declare function unk11177(...args: any[]): any; // 2152 -> 11177
declare function unk11178(...args: any[]): any; // 973 -> 11178
declare function unk11179(...args: any[]): any; // 1322 -> 11179
declare function unk11180(...args: any[]): any; // 430 -> 11180
declare function unk11181(...args: any[]): any; // 1131 -> 11181
declare function unk11182(...args: any[]): any; // 979 -> 11182
declare function unk11183(...args: any[]): any; // 1648 -> 11183
declare function unk11184(...args: any[]): any; // 208 -> 11184
declare function unk11185(...args: any[]): any; // 1217 -> 11185
declare function unk11186(...args: any[]): any; // 831 -> 11186
