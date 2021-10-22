// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from "msw";
import { BINANCE_API_ROUTE } from "../constants";

// eslint-disable-next-line import/prefer-default-export
export const handlers = [
  rest.get(BINANCE_API_ROUTE, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        {
          symbol: "ETHBTC",
          price: "0.06500900",
        },
        {
          symbol: "LTCBTC",
          price: "0.00317100",
        },
        {
          symbol: "BNBBTC",
          price: "0.00789700",
        },
        {
          symbol: "NEOBTC",
          price: "0.00072800",
        },
        {
          symbol: "QTUMETH",
          price: "0.00322500",
        },
        {
          symbol: "EOSETH",
          price: "0.00117100",
        },
        {
          symbol: "SNTETH",
          price: "0.00002196",
        },
        {
          symbol: "BNTETH",
          price: "0.00104400",
        },
        {
          symbol: "BCCBTC",
          price: "0.07908100",
        },
        {
          symbol: "GASBTC",
          price: "0.00014280",
        },
        {
          symbol: "BNBETH",
          price: "0.12150000",
        },
        {
          symbol: "BTCUSDT",
          price: "60393.46000000",
        },
        {
          symbol: "ETHUSDT",
          price: "3925.35000000",
        },
        {
          symbol: "HSRBTC",
          price: "0.00041400",
        },
        {
          symbol: "OAXETH",
          price: "0.00017780",
        },
        {
          symbol: "DNTETH",
          price: "0.00002801",
        },
        {
          symbol: "MCOETH",
          price: "0.00577200",
        },
        {
          symbol: "ICNETH",
          price: "0.00166300",
        },
        {
          symbol: "MCOBTC",
          price: "0.00021140",
        },
        {
          symbol: "WTCBTC",
          price: "0.00001586",
        },
        {
          symbol: "WTCETH",
          price: "0.00023700",
        },
        {
          symbol: "LRCBTC",
          price: "0.00000676",
        },
        {
          symbol: "LRCETH",
          price: "0.00010404",
        },
        {
          symbol: "QTUMBTC",
          price: "0.00020960",
        },
        {
          symbol: "YOYOBTC",
          price: "0.00000037",
        },
        {
          symbol: "OMGBTC",
          price: "0.00023400",
        },
        {
          symbol: "OMGETH",
          price: "0.00360100",
        },
        {
          symbol: "ZRXBTC",
          price: "0.00001641",
        },
        {
          symbol: "ZRXETH",
          price: "0.00025200",
        },
        {
          symbol: "STRATBTC",
          price: "0.00003085",
        },
        {
          symbol: "STRATETH",
          price: "0.00105300",
        },
        {
          symbol: "SNGLSBTC",
          price: "0.00000013",
        },
        {
          symbol: "SNGLSETH",
          price: "0.00005306",
        },
        {
          symbol: "BQXBTC",
          price: "0.00008703",
        },
        {
          symbol: "BQXETH",
          price: "0.00126350",
        },
        {
          symbol: "KNCBTC",
          price: "0.00002668",
        },
        {
          symbol: "KNCETH",
          price: "0.00040830",
        },
        {
          symbol: "FUNBTC",
          price: "0.00000035",
        },
        {
          symbol: "FUNETH",
          price: "0.00000535",
        },
        {
          symbol: "SNMBTC",
          price: "0.00000496",
        },
        {
          symbol: "SNMETH",
          price: "0.00004986",
        },
        {
          symbol: "NEOETH",
          price: "0.01120000",
        },
        {
          symbol: "IOTABTC",
          price: "0.00002178",
        },
        {
          symbol: "IOTAETH",
          price: "0.00033550",
        },
        {
          symbol: "LINKBTC",
          price: "0.00046940",
        },
        {
          symbol: "LINKETH",
          price: "0.00721600",
        },
        {
          symbol: "XVGBTC",
          price: "0.00000039",
        },
        {
          symbol: "XVGETH",
          price: "0.00000608",
        },
        {
          symbol: "SALTBTC",
          price: "0.00004250",
        },
        {
          symbol: "SALTETH",
          price: "0.00113800",
        },
        {
          symbol: "MDABTC",
          price: "0.00001269",
        },
        {
          symbol: "MDAETH",
          price: "0.00181150",
        },
        {
          symbol: "MTLBTC",
          price: "0.00005225",
        },
        {
          symbol: "MTLETH",
          price: "0.00080300",
        },
        {
          symbol: "SUBBTC",
          price: "0.00000457",
        },
        {
          symbol: "SUBETH",
          price: "0.00012334",
        },
        {
          symbol: "EOSBTC",
          price: "0.00007620",
        },
        {
          symbol: "SNTBTC",
          price: "0.00000144",
        },
        {
          symbol: "ETCETH",
          price: "0.01373000",
        },
        {
          symbol: "ETCBTC",
          price: "0.00089300",
        },
        {
          symbol: "MTHBTC",
          price: "0.00000059",
        },
        {
          symbol: "MTHETH",
          price: "0.00004135",
        },
        {
          symbol: "ENGBTC",
          price: "0.00006200",
        },
        {
          symbol: "ENGETH",
          price: "0.00186480",
        },
        {
          symbol: "DNTBTC",
          price: "0.00000296",
        },
        {
          symbol: "ZECBTC",
          price: "0.00265300",
        },
        {
          symbol: "ZECETH",
          price: "0.04073000",
        },
        {
          symbol: "BNTBTC",
          price: "0.00006783",
        },
        {
          symbol: "ASTBTC",
          price: "0.00000418",
        },
        {
          symbol: "ASTETH",
          price: "0.00006960",
        },
        {
          symbol: "DASHBTC",
          price: "0.00321800",
        },
        {
          symbol: "DASHETH",
          price: "0.04952000",
        },
        {
          symbol: "OAXBTC",
          price: "0.00000545",
        },
        {
          symbol: "ICNBTC",
          price: "0.00005742",
        },
        {
          symbol: "BTGBTC",
          price: "0.00112100",
        },
        {
          symbol: "BTGETH",
          price: "0.05274500",
        },
        {
          symbol: "EVXBTC",
          price: "0.00001140",
        },
        {
          symbol: "EVXETH",
          price: "0.00062490",
        },
        {
          symbol: "REQBTC",
          price: "0.00000363",
        },
        {
          symbol: "REQETH",
          price: "0.00004995",
        },
        {
          symbol: "VIBBTC",
          price: "0.00000090",
        },
        {
          symbol: "VIBETH",
          price: "0.00001385",
        },
        {
          symbol: "HSRETH",
          price: "0.01247400",
        },
        {
          symbol: "TRXBTC",
          price: "0.00000164",
        },
        {
          symbol: "TRXETH",
          price: "0.00002522",
        },
        {
          symbol: "POWRBTC",
          price: "0.00000580",
        },
        {
          symbol: "POWRETH",
          price: "0.00008920",
        },
        {
          symbol: "ARKBTC",
          price: "0.00002708",
        },
        {
          symbol: "ARKETH",
          price: "0.00104600",
        },
        {
          symbol: "YOYOETH",
          price: "0.00005828",
        },
        {
          symbol: "XRPBTC",
          price: "0.00001807",
        },
        {
          symbol: "XRPETH",
          price: "0.00027780",
        },
        {
          symbol: "MODBTC",
          price: "0.00004280",
        },
        {
          symbol: "MODETH",
          price: "0.00116700",
        },
        {
          symbol: "ENJBTC",
          price: "0.00002963",
        },
        {
          symbol: "ENJETH",
          price: "0.00045570",
        },
        {
          symbol: "STORJBTC",
          price: "0.00002062",
        },
        {
          symbol: "STORJETH",
          price: "0.00029910",
        },
        {
          symbol: "BNBUSDT",
          price: "477.10000000",
        },
        {
          symbol: "VENBNB",
          price: "0.14920000",
        },
        {
          symbol: "YOYOBNB",
          price: "0.00059800",
        },
        {
          symbol: "POWRBNB",
          price: "0.00385000",
        },
        {
          symbol: "VENBTC",
          price: "0.00013928",
        },
        {
          symbol: "VENETH",
          price: "0.00325194",
        },
        {
          symbol: "KMDBTC",
          price: "0.00001808",
        },
        {
          symbol: "KMDETH",
          price: "0.00027800",
        },
        {
          symbol: "NULSBNB",
          price: "0.01257000",
        },
        {
          symbol: "RCNBTC",
          price: "0.00000074",
        },
        {
          symbol: "RCNETH",
          price: "0.00037604",
        },
        {
          symbol: "RCNBNB",
          price: "0.00347300",
        },
        {
          symbol: "NULSBTC",
          price: "0.00000961",
        },
        {
          symbol: "NULSETH",
          price: "0.00051926",
        },
        {
          symbol: "RDNBTC",
          price: "0.00001006",
        },
        {
          symbol: "RDNETH",
          price: "0.00071530",
        },
        {
          symbol: "RDNBNB",
          price: "0.00623000",
        },
        {
          symbol: "XMRBTC",
          price: "0.00439000",
        },
        {
          symbol: "XMRETH",
          price: "0.06756000",
        },
        {
          symbol: "DLTBNB",
          price: "0.00240000",
        },
        {
          symbol: "WTCBNB",
          price: "0.00180500",
        },
        {
          symbol: "DLTBTC",
          price: "0.00000177",
        },
        {
          symbol: "DLTETH",
          price: "0.00016807",
        },
        {
          symbol: "AMBBTC",
          price: "0.00000064",
        },
        {
          symbol: "AMBETH",
          price: "0.00004100",
        },
        {
          symbol: "AMBBNB",
          price: "0.00068500",
        },
        {
          symbol: "BCCETH",
          price: "2.47246000",
        },
        {
          symbol: "BCCUSDT",
          price: "448.70000000",
        },
        {
          symbol: "BCCBNB",
          price: "54.29000000",
        },
        {
          symbol: "BATBTC",
          price: "0.00001145",
        },
        {
          symbol: "BATETH",
          price: "0.00017610",
        },
        {
          symbol: "BATBNB",
          price: "0.00183100",
        },
        {
          symbol: "BCPTBTC",
          price: "0.00000048",
        },
        {
          symbol: "BCPTETH",
          price: "0.00008181",
        },
        {
          symbol: "BCPTBNB",
          price: "0.00116200",
        },
        {
          symbol: "ARNBTC",
          price: "0.00000761",
        },
        {
          symbol: "ARNETH",
          price: "0.00029362",
        },
        {
          symbol: "GVTBTC",
          price: "0.00005828",
        },
        {
          symbol: "GVTETH",
          price: "0.00384600",
        },
        {
          symbol: "CDTBTC",
          price: "0.00000317",
        },
        {
          symbol: "CDTETH",
          price: "0.00005119",
        },
        {
          symbol: "GXSBTC",
          price: "0.00001079",
        },
        {
          symbol: "GXSETH",
          price: "0.00016590",
        },
        {
          symbol: "NEOUSDT",
          price: "43.95000000",
        },
        {
          symbol: "NEOBNB",
          price: "0.09230000",
        },
        {
          symbol: "POEBTC",
          price: "0.00000005",
        },
        {
          symbol: "POEETH",
          price: "0.00000664",
        },
        {
          symbol: "QSPBTC",
          price: "0.00000100",
        },
        {
          symbol: "QSPETH",
          price: "0.00001528",
        },
        {
          symbol: "QSPBNB",
          price: "0.00052350",
        },
        {
          symbol: "BTSBTC",
          price: "0.00000078",
        },
        {
          symbol: "BTSETH",
          price: "0.00009498",
        },
        {
          symbol: "BTSBNB",
          price: "0.00144800",
        },
        {
          symbol: "XZCBTC",
          price: "0.00013550",
        },
        {
          symbol: "XZCETH",
          price: "0.00310000",
        },
        {
          symbol: "XZCBNB",
          price: "0.26750000",
        },
        {
          symbol: "LSKBTC",
          price: "0.00005948",
        },
        {
          symbol: "LSKETH",
          price: "0.00091200",
        },
        {
          symbol: "LSKBNB",
          price: "0.06494000",
        },
        {
          symbol: "TNTBTC",
          price: "0.00000261",
        },
        {
          symbol: "TNTETH",
          price: "0.00000920",
        },
        {
          symbol: "FUELBTC",
          price: "0.00000026",
        },
        {
          symbol: "FUELETH",
          price: "0.00002221",
        },
        {
          symbol: "MANABTC",
          price: "0.00001292",
        },
        {
          symbol: "MANAETH",
          price: "0.00019890",
        },
        {
          symbol: "BCDBTC",
          price: "0.00003680",
        },
        {
          symbol: "BCDETH",
          price: "0.00251000",
        },
        {
          symbol: "DGDBTC",
          price: "0.00393100",
        },
        {
          symbol: "DGDETH",
          price: "0.19260000",
        },
        {
          symbol: "IOTABNB",
          price: "0.00275500",
        },
        {
          symbol: "ADXBTC",
          price: "0.00000909",
        },
        {
          symbol: "ADXETH",
          price: "0.00014000",
        },
        {
          symbol: "ADXBNB",
          price: "0.00492900",
        },
        {
          symbol: "ADABTC",
          price: "0.00003542",
        },
        {
          symbol: "ADAETH",
          price: "0.00054480",
        },
        {
          symbol: "PPTBTC",
          price: "0.00001855",
        },
        {
          symbol: "PPTETH",
          price: "0.00141000",
        },
        {
          symbol: "CMTBTC",
          price: "0.00000028",
        },
        {
          symbol: "CMTETH",
          price: "0.00000625",
        },
        {
          symbol: "CMTBNB",
          price: "0.00057700",
        },
        {
          symbol: "XLMBTC",
          price: "0.00000610",
        },
        {
          symbol: "XLMETH",
          price: "0.00009390",
        },
        {
          symbol: "XLMBNB",
          price: "0.00077210",
        },
        {
          symbol: "CNDBTC",
          price: "0.00000027",
        },
        {
          symbol: "CNDETH",
          price: "0.00002599",
        },
        {
          symbol: "CNDBNB",
          price: "0.00033990",
        },
        {
          symbol: "LENDBTC",
          price: "0.00004512",
        },
        {
          symbol: "LENDETH",
          price: "0.00137174",
        },
        {
          symbol: "WABIBTC",
          price: "0.00000367",
        },
        {
          symbol: "WABIETH",
          price: "0.00040308",
        },
        {
          symbol: "WABIBNB",
          price: "0.00046360",
        },
        {
          symbol: "LTCETH",
          price: "0.04880000",
        },
        {
          symbol: "LTCUSDT",
          price: "191.50000000",
        },
        {
          symbol: "LTCBNB",
          price: "0.40140000",
        },
        {
          symbol: "TNBBTC",
          price: "0.00000007",
        },
        {
          symbol: "TNBETH",
          price: "0.00000752",
        },
        {
          symbol: "WAVESBTC",
          price: "0.00045650",
        },
        {
          symbol: "WAVESETH",
          price: "0.00701700",
        },
        {
          symbol: "WAVESBNB",
          price: "0.05769000",
        },
        {
          symbol: "GTOBTC",
          price: "0.00000074",
        },
        {
          symbol: "GTOETH",
          price: "0.00003197",
        },
        {
          symbol: "GTOBNB",
          price: "0.00035200",
        },
        {
          symbol: "ICXBTC",
          price: "0.00003395",
        },
        {
          symbol: "ICXETH",
          price: "0.00052300",
        },
        {
          symbol: "ICXBNB",
          price: "0.00465400",
        },
        {
          symbol: "OSTBTC",
          price: "0.00000032",
        },
        {
          symbol: "OSTETH",
          price: "0.00000225",
        },
        {
          symbol: "OSTBNB",
          price: "0.00052500",
        },
        {
          symbol: "ELFBTC",
          price: "0.00000958",
        },
        {
          symbol: "ELFETH",
          price: "0.00014760",
        },
        {
          symbol: "AIONBTC",
          price: "0.00000290",
        },
        {
          symbol: "AIONETH",
          price: "0.00004463",
        },
        {
          symbol: "AIONBNB",
          price: "0.00261300",
        },
        {
          symbol: "NEBLBTC",
          price: "0.00002251",
        },
        {
          symbol: "NEBLETH",
          price: "0.00034500",
        },
        {
          symbol: "NEBLBNB",
          price: "0.01356000",
        },
        {
          symbol: "BRDBTC",
          price: "0.00000317",
        },
        {
          symbol: "BRDETH",
          price: "0.00004851",
        },
        {
          symbol: "BRDBNB",
          price: "0.00247000",
        },
        {
          symbol: "MCOBNB",
          price: "0.26837000",
        },
        {
          symbol: "EDOBTC",
          price: "0.00005609",
        },
        {
          symbol: "EDOETH",
          price: "0.00226600",
        },
        {
          symbol: "WINGSBTC",
          price: "0.00001193",
        },
        {
          symbol: "WINGSETH",
          price: "0.00033460",
        },
        {
          symbol: "NAVBTC",
          price: "0.00000685",
        },
        {
          symbol: "NAVETH",
          price: "0.00011870",
        },
        {
          symbol: "NAVBNB",
          price: "0.00423700",
        },
        {
          symbol: "LUNBTC",
          price: "0.00008510",
        },
        {
          symbol: "LUNETH",
          price: "0.00489100",
        },
        {
          symbol: "TRIGBTC",
          price: "0.00001980",
        },
        {
          symbol: "TRIGETH",
          price: "0.00059400",
        },
        {
          symbol: "TRIGBNB",
          price: "0.01218000",
        },
        {
          symbol: "APPCBTC",
          price: "0.00000137",
        },
        {
          symbol: "APPCETH",
          price: "0.00014600",
        },
        {
          symbol: "APPCBNB",
          price: "0.00189100",
        },
        {
          symbol: "VIBEBTC",
          price: "0.00000042",
        },
        {
          symbol: "VIBEETH",
          price: "0.00005720",
        },
        {
          symbol: "RLCBTC",
          price: "0.00006751",
        },
        {
          symbol: "RLCETH",
          price: "0.00103900",
        },
        {
          symbol: "RLCBNB",
          price: "0.03344000",
        },
        {
          symbol: "INSBTC",
          price: "0.00000618",
        },
        {
          symbol: "INSETH",
          price: "0.00050100",
        },
        {
          symbol: "PIVXBTC",
          price: "0.00001240",
        },
        {
          symbol: "PIVXETH",
          price: "0.00019200",
        },
        {
          symbol: "PIVXBNB",
          price: "0.01660000",
        },
        {
          symbol: "IOSTBTC",
          price: "0.00000083",
        },
        {
          symbol: "IOSTETH",
          price: "0.00001273",
        },
        {
          symbol: "CHATBTC",
          price: "0.00000195",
        },
        {
          symbol: "CHATETH",
          price: "0.00006585",
        },
        {
          symbol: "STEEMBTC",
          price: "0.00000944",
        },
        {
          symbol: "STEEMETH",
          price: "0.00014590",
        },
        {
          symbol: "STEEMBNB",
          price: "0.00448000",
        },
        {
          symbol: "NANOBTC",
          price: "0.00008930",
        },
        {
          symbol: "NANOETH",
          price: "0.00137000",
        },
        {
          symbol: "NANOBNB",
          price: "0.05589000",
        },
        {
          symbol: "VIABTC",
          price: "0.00000681",
        },
        {
          symbol: "VIAETH",
          price: "0.00085600",
        },
        {
          symbol: "VIABNB",
          price: "0.00958000",
        },
        {
          symbol: "BLZBTC",
          price: "0.00000424",
        },
        {
          symbol: "BLZETH",
          price: "0.00006515",
        },
        {
          symbol: "BLZBNB",
          price: "0.00062190",
        },
        {
          symbol: "AEBTC",
          price: "0.00000292",
        },
        {
          symbol: "AEETH",
          price: "0.00021900",
        },
        {
          symbol: "AEBNB",
          price: "0.00777000",
        },
        {
          symbol: "RPXBTC",
          price: "0.00000224",
        },
        {
          symbol: "RPXETH",
          price: "0.00005449",
        },
        {
          symbol: "RPXBNB",
          price: "0.00145700",
        },
        {
          symbol: "NCASHBTC",
          price: "0.00000005",
        },
        {
          symbol: "NCASHETH",
          price: "0.00000081",
        },
        {
          symbol: "NCASHBNB",
          price: "0.00006790",
        },
        {
          symbol: "POABTC",
          price: "0.00000065",
        },
        {
          symbol: "POAETH",
          price: "0.00004891",
        },
        {
          symbol: "POABNB",
          price: "0.00092100",
        },
        {
          symbol: "ZILBTC",
          price: "0.00000165",
        },
        {
          symbol: "ZILETH",
          price: "0.00002527",
        },
        {
          symbol: "ZILBNB",
          price: "0.00020840",
        },
        {
          symbol: "ONTBTC",
          price: "0.00001600",
        },
        {
          symbol: "ONTETH",
          price: "0.00024650",
        },
        {
          symbol: "ONTBNB",
          price: "0.00246200",
        },
        {
          symbol: "STORMBTC",
          price: "0.00000035",
        },
        {
          symbol: "STORMETH",
          price: "0.00001398",
        },
        {
          symbol: "STORMBNB",
          price: "0.00006550",
        },
        {
          symbol: "QTUMBNB",
          price: "0.09597000",
        },
        {
          symbol: "QTUMUSDT",
          price: "12.66900000",
        },
        {
          symbol: "XEMBTC",
          price: "0.00000284",
        },
        {
          symbol: "XEMETH",
          price: "0.00004356",
        },
        {
          symbol: "XEMBNB",
          price: "0.00244100",
        },
        {
          symbol: "WANBTC",
          price: "0.00001488",
        },
        {
          symbol: "WANETH",
          price: "0.00022840",
        },
        {
          symbol: "WANBNB",
          price: "0.00181000",
        },
        {
          symbol: "WPRBTC",
          price: "0.00000027",
        },
        {
          symbol: "WPRETH",
          price: "0.00004020",
        },
        {
          symbol: "QLCBTC",
          price: "0.00000059",
        },
        {
          symbol: "QLCETH",
          price: "0.00000909",
        },
        {
          symbol: "SYSBTC",
          price: "0.00000594",
        },
        {
          symbol: "SYSETH",
          price: "0.00011047",
        },
        {
          symbol: "SYSBNB",
          price: "0.00163500",
        },
        {
          symbol: "QLCBNB",
          price: "0.00092200",
        },
        {
          symbol: "GRSBTC",
          price: "0.00001541",
        },
        {
          symbol: "GRSETH",
          price: "0.00076455",
        },
        {
          symbol: "ADAUSDT",
          price: "2.14000000",
        },
        {
          symbol: "ADABNB",
          price: "0.00448600",
        },
        {
          symbol: "CLOAKBTC",
          price: "0.00015550",
        },
        {
          symbol: "CLOAKETH",
          price: "0.00414200",
        },
        {
          symbol: "GNTBTC",
          price: "0.00000678",
        },
        {
          symbol: "GNTETH",
          price: "0.00022071",
        },
        {
          symbol: "GNTBNB",
          price: "0.00243900",
        },
        {
          symbol: "LOOMBTC",
          price: "0.00000170",
        },
        {
          symbol: "LOOMETH",
          price: "0.00002618",
        },
        {
          symbol: "LOOMBNB",
          price: "0.00088500",
        },
        {
          symbol: "XRPUSDT",
          price: "1.09170000",
        },
        {
          symbol: "BCNBTC",
          price: "0.00000022",
        },
        {
          symbol: "BCNETH",
          price: "0.00000707",
        },
        {
          symbol: "BCNBNB",
          price: "0.00002000",
        },
        {
          symbol: "REPBTC",
          price: "0.00038320",
        },
        {
          symbol: "REPETH",
          price: "0.00584400",
        },
        {
          symbol: "REPBNB",
          price: "0.44670000",
        },
        {
          symbol: "BTCTUSD",
          price: "60449.77000000",
        },
        {
          symbol: "TUSDBTC",
          price: "0.00025971",
        },
        {
          symbol: "ETHTUSD",
          price: "3925.00000000",
        },
        {
          symbol: "TUSDETH",
          price: "0.00762097",
        },
        {
          symbol: "TUSDBNB",
          price: "0.06777000",
        },
        {
          symbol: "ZENBTC",
          price: "0.00141000",
        },
        {
          symbol: "ZENETH",
          price: "0.02161000",
        },
        {
          symbol: "ZENBNB",
          price: "0.17850000",
        },
        {
          symbol: "SKYBTC",
          price: "0.00002143",
        },
        {
          symbol: "SKYETH",
          price: "0.00222000",
        },
        {
          symbol: "SKYBNB",
          price: "0.03022000",
        },
        {
          symbol: "EOSUSDT",
          price: "4.60200000",
        },
        {
          symbol: "EOSBNB",
          price: "0.00963000",
        },
        {
          symbol: "CVCBTC",
          price: "0.00000777",
        },
        {
          symbol: "CVCETH",
          price: "0.00011880",
        },
        {
          symbol: "CVCBNB",
          price: "0.00211200",
        },
        {
          symbol: "THETABTC",
          price: "0.00010760",
        },
        {
          symbol: "THETAETH",
          price: "0.00165600",
        },
        {
          symbol: "THETABNB",
          price: "0.01361000",
        },
        {
          symbol: "XRPBNB",
          price: "0.00228500",
        },
        {
          symbol: "TUSDUSDT",
          price: "1.00010000",
        },
        {
          symbol: "IOTAUSDT",
          price: "1.31630000",
        },
        {
          symbol: "XLMUSDT",
          price: "0.36840000",
        },
        {
          symbol: "IOTXBTC",
          price: "0.00000111",
        },
        {
          symbol: "IOTXETH",
          price: "0.00001714",
        },
        {
          symbol: "QKCBTC",
          price: "0.00000048",
        },
        {
          symbol: "QKCETH",
          price: "0.00000747",
        },
        {
          symbol: "AGIBTC",
          price: "0.00000668",
        },
        {
          symbol: "AGIETH",
          price: "0.00007363",
        },
        {
          symbol: "AGIBNB",
          price: "0.00077200",
        },
        {
          symbol: "NXSBTC",
          price: "0.00001102",
        },
        {
          symbol: "NXSETH",
          price: "0.00077300",
        },
        {
          symbol: "NXSBNB",
          price: "0.01087000",
        },
        {
          symbol: "ENJBNB",
          price: "0.00375200",
        },
        {
          symbol: "DATABTC",
          price: "0.00000239",
        },
        {
          symbol: "DATAETH",
          price: "0.00003670",
        },
        {
          symbol: "ONTUSDT",
          price: "0.96630000",
        },
        {
          symbol: "TRXBNB",
          price: "0.00020740",
        },
        {
          symbol: "TRXUSDT",
          price: "0.09899000",
        },
        {
          symbol: "ETCUSDT",
          price: "53.97000000",
        },
        {
          symbol: "ETCBNB",
          price: "0.11300000",
        },
        {
          symbol: "ICXUSDT",
          price: "2.05100000",
        },
        {
          symbol: "SCBTC",
          price: "0.00000030",
        },
        {
          symbol: "SCETH",
          price: "0.00000467",
        },
        {
          symbol: "SCBNB",
          price: "0.00003836",
        },
        {
          symbol: "NPXSBTC",
          price: "0.00000003",
        },
        {
          symbol: "NPXSETH",
          price: "0.00000345",
        },
        {
          symbol: "VENUSDT",
          price: "0.00010000",
        },
        {
          symbol: "KEYBTC",
          price: "0.00000013",
        },
        {
          symbol: "KEYETH",
          price: "0.00000323",
        },
        {
          symbol: "NASBTC",
          price: "0.00000690",
        },
        {
          symbol: "NASETH",
          price: "0.00010620",
        },
        {
          symbol: "NASBNB",
          price: "0.02337000",
        },
        {
          symbol: "MFTBTC",
          price: "0.00000008",
        },
        {
          symbol: "MFTETH",
          price: "0.00000333",
        },
        {
          symbol: "MFTBNB",
          price: "0.00002725",
        },
        {
          symbol: "DENTBTC",
          price: "0.00000004",
        },
        {
          symbol: "DENTETH",
          price: "0.00000151",
        },
        {
          symbol: "ARDRBTC",
          price: "0.00000528",
        },
        {
          symbol: "ARDRETH",
          price: "0.00018870",
        },
        {
          symbol: "ARDRBNB",
          price: "0.00316800",
        },
        {
          symbol: "NULSUSDT",
          price: "0.58070000",
        },
        {
          symbol: "HOTBTC",
          price: "0.00000002",
        },
        {
          symbol: "HOTETH",
          price: "0.00000241",
        },
        {
          symbol: "VETBTC",
          price: "0.00000212",
        },
        {
          symbol: "VETETH",
          price: "0.00003256",
        },
        {
          symbol: "VETUSDT",
          price: "0.12778000",
        },
        {
          symbol: "VETBNB",
          price: "0.00026780",
        },
        {
          symbol: "DOCKBTC",
          price: "0.00000136",
        },
        {
          symbol: "DOCKETH",
          price: "0.00003283",
        },
        {
          symbol: "POLYBTC",
          price: "0.00001149",
        },
        {
          symbol: "POLYBNB",
          price: "0.00145900",
        },
        {
          symbol: "PHXBTC",
          price: "0.00000180",
        },
        {
          symbol: "PHXETH",
          price: "0.00005617",
        },
        {
          symbol: "PHXBNB",
          price: "0.00045600",
        },
        {
          symbol: "HCBTC",
          price: "0.00002000",
        },
        {
          symbol: "HCETH",
          price: "0.00513400",
        },
        {
          symbol: "GOBTC",
          price: "0.00000061",
        },
        {
          symbol: "GOBNB",
          price: "0.00069230",
        },
        {
          symbol: "PAXBTC",
          price: "0.00025175",
        },
        {
          symbol: "PAXBNB",
          price: "0.20121000",
        },
        {
          symbol: "PAXUSDT",
          price: "0.99960000",
        },
        {
          symbol: "PAXETH",
          price: "0.00888047",
        },
        {
          symbol: "RVNBTC",
          price: "0.00000196",
        },
        {
          symbol: "RVNBNB",
          price: "0.00024870",
        },
        {
          symbol: "DCRBTC",
          price: "0.00201400",
        },
        {
          symbol: "DCRBNB",
          price: "0.78100000",
        },
        {
          symbol: "USDCBNB",
          price: "0.21755000",
        },
        {
          symbol: "MITHBTC",
          price: "0.00000082",
        },
        {
          symbol: "MITHBNB",
          price: "0.00010410",
        },
        {
          symbol: "BCHABCBTC",
          price: "0.02933000",
        },
        {
          symbol: "BCHSVBTC",
          price: "0.01117900",
        },
        {
          symbol: "BCHABCUSDT",
          price: "220.08000000",
        },
        {
          symbol: "BCHSVUSDT",
          price: "58.90000000",
        },
        {
          symbol: "BNBPAX",
          price: "495.10000000",
        },
        {
          symbol: "BTCPAX",
          price: "51529.15000000",
        },
        {
          symbol: "ETHPAX",
          price: "3904.41000000",
        },
        {
          symbol: "XRPPAX",
          price: "0.88960000",
        },
        {
          symbol: "EOSPAX",
          price: "2.58450000",
        },
        {
          symbol: "XLMPAX",
          price: "0.04221000",
        },
        {
          symbol: "RENBTC",
          price: "0.00001820",
        },
        {
          symbol: "RENBNB",
          price: "0.00458500",
        },
        {
          symbol: "BNBTUSD",
          price: "479.90000000",
        },
        {
          symbol: "XRPTUSD",
          price: "1.09700000",
        },
        {
          symbol: "EOSTUSD",
          price: "4.11590000",
        },
        {
          symbol: "XLMTUSD",
          price: "0.06833000",
        },
        {
          symbol: "BNBUSDC",
          price: "476.90000000",
        },
        {
          symbol: "BTCUSDC",
          price: "60393.15000000",
        },
        {
          symbol: "ETHUSDC",
          price: "3925.67000000",
        },
        {
          symbol: "XRPUSDC",
          price: "1.09130000",
        },
        {
          symbol: "EOSUSDC",
          price: "4.60000000",
        },
        {
          symbol: "XLMUSDC",
          price: "0.04970000",
        },
        {
          symbol: "USDCUSDT",
          price: "1.00030000",
        },
        {
          symbol: "ADATUSD",
          price: "2.14600000",
        },
        {
          symbol: "TRXTUSD",
          price: "0.09911000",
        },
        {
          symbol: "NEOTUSD",
          price: "11.81800000",
        },
        {
          symbol: "TRXXRP",
          price: "0.09058000",
        },
        {
          symbol: "XZCXRP",
          price: "20.79200000",
        },
        {
          symbol: "PAXTUSD",
          price: "0.99950000",
        },
        {
          symbol: "USDCTUSD",
          price: "1.00000000",
        },
        {
          symbol: "USDCPAX",
          price: "1.00020000",
        },
        {
          symbol: "LINKUSDT",
          price: "28.36000000",
        },
        {
          symbol: "LINKTUSD",
          price: "28.87000000",
        },
        {
          symbol: "LINKPAX",
          price: "3.98340000",
        },
        {
          symbol: "LINKUSDC",
          price: "28.37000000",
        },
        {
          symbol: "WAVESUSDT",
          price: "27.56000000",
        },
        {
          symbol: "WAVESTUSD",
          price: "1.07200000",
        },
        {
          symbol: "WAVESPAX",
          price: "0.80290000",
        },
        {
          symbol: "WAVESUSDC",
          price: "1.20360000",
        },
        {
          symbol: "BCHABCTUSD",
          price: "220.20000000",
        },
        {
          symbol: "BCHABCPAX",
          price: "221.20000000",
        },
        {
          symbol: "BCHABCUSDC",
          price: "220.30000000",
        },
        {
          symbol: "BCHSVTUSD",
          price: "59.17000000",
        },
        {
          symbol: "BCHSVPAX",
          price: "58.18000000",
        },
        {
          symbol: "BCHSVUSDC",
          price: "57.50000000",
        },
        {
          symbol: "LTCTUSD",
          price: "191.80000000",
        },
        {
          symbol: "LTCPAX",
          price: "171.13000000",
        },
        {
          symbol: "LTCUSDC",
          price: "191.50000000",
        },
        {
          symbol: "TRXPAX",
          price: "0.07661000",
        },
        {
          symbol: "TRXUSDC",
          price: "0.09895000",
        },
        {
          symbol: "BTTBTC",
          price: "0.00000005",
        },
        {
          symbol: "BTTBNB",
          price: "0.00000756",
        },
        {
          symbol: "BTTUSDT",
          price: "0.00361000",
        },
        {
          symbol: "BNBUSDS",
          price: "22.27880000",
        },
        {
          symbol: "BTCUSDS",
          price: "9604.59000000",
        },
        {
          symbol: "USDSUSDT",
          price: "0.99680000",
        },
        {
          symbol: "USDSPAX",
          price: "1.00020000",
        },
        {
          symbol: "USDSTUSD",
          price: "1.00000000",
        },
        {
          symbol: "USDSUSDC",
          price: "1.00000000",
        },
        {
          symbol: "BTTPAX",
          price: "0.00038660",
        },
        {
          symbol: "BTTTUSD",
          price: "0.00361200",
        },
        {
          symbol: "BTTUSDC",
          price: "0.00361400",
        },
        {
          symbol: "ONGBNB",
          price: "0.00545000",
        },
        {
          symbol: "ONGBTC",
          price: "0.00001957",
        },
        {
          symbol: "ONGUSDT",
          price: "1.18400000",
        },
        {
          symbol: "HOTBNB",
          price: "0.00001989",
        },
        {
          symbol: "HOTUSDT",
          price: "0.00949900",
        },
        {
          symbol: "ZILUSDT",
          price: "0.09920000",
        },
        {
          symbol: "ZRXBNB",
          price: "0.01045000",
        },
        {
          symbol: "ZRXUSDT",
          price: "0.99240000",
        },
        {
          symbol: "FETBNB",
          price: "0.00150600",
        },
        {
          symbol: "FETBTC",
          price: "0.00001190",
        },
        {
          symbol: "FETUSDT",
          price: "0.71880000",
        },
        {
          symbol: "BATUSDT",
          price: "0.69120000",
        },
        {
          symbol: "XMRBNB",
          price: "0.55680000",
        },
        {
          symbol: "XMRUSDT",
          price: "265.40000000",
        },
        {
          symbol: "ZECBNB",
          price: "0.33620000",
        },
        {
          symbol: "ZECUSDT",
          price: "160.30000000",
        },
        {
          symbol: "ZECPAX",
          price: "42.10000000",
        },
        {
          symbol: "ZECTUSD",
          price: "51.48000000",
        },
        {
          symbol: "ZECUSDC",
          price: "160.60000000",
        },
        {
          symbol: "IOSTBNB",
          price: "0.00010434",
        },
        {
          symbol: "IOSTUSDT",
          price: "0.04988000",
        },
        {
          symbol: "CELRBNB",
          price: "0.00028427",
        },
        {
          symbol: "CELRBTC",
          price: "0.00000224",
        },
        {
          symbol: "CELRUSDT",
          price: "0.13534000",
        },
        {
          symbol: "ADAPAX",
          price: "0.03257000",
        },
        {
          symbol: "ADAUSDC",
          price: "2.13900000",
        },
        {
          symbol: "NEOPAX",
          price: "11.12200000",
        },
        {
          symbol: "NEOUSDC",
          price: "43.96000000",
        },
        {
          symbol: "DASHBNB",
          price: "0.40800000",
        },
        {
          symbol: "DASHUSDT",
          price: "194.40000000",
        },
        {
          symbol: "NANOUSDT",
          price: "5.39400000",
        },
        {
          symbol: "OMGBNB",
          price: "0.03938000",
        },
        {
          symbol: "OMGUSDT",
          price: "14.13600000",
        },
        {
          symbol: "THETAUSDT",
          price: "6.49600000",
        },
        {
          symbol: "ENJUSDT",
          price: "1.79200000",
        },
        {
          symbol: "MITHUSDT",
          price: "0.04962000",
        },
        {
          symbol: "MATICBNB",
          price: "0.00314700",
        },
        {
          symbol: "MATICBTC",
          price: "0.00002486",
        },
        {
          symbol: "MATICUSDT",
          price: "1.50200000",
        },
        {
          symbol: "ATOMBNB",
          price: "0.07143000",
        },
        {
          symbol: "ATOMBTC",
          price: "0.00056390",
        },
        {
          symbol: "ATOMUSDT",
          price: "34.07000000",
        },
        {
          symbol: "ATOMUSDC",
          price: "34.02000000",
        },
        {
          symbol: "ATOMPAX",
          price: "3.17800000",
        },
        {
          symbol: "ATOMTUSD",
          price: "2.59800000",
        },
        {
          symbol: "ETCUSDC",
          price: "4.71000000",
        },
        {
          symbol: "ETCPAX",
          price: "4.83800000",
        },
        {
          symbol: "ETCTUSD",
          price: "3.79500000",
        },
        {
          symbol: "BATUSDC",
          price: "0.63130000",
        },
        {
          symbol: "BATPAX",
          price: "0.25560000",
        },
        {
          symbol: "BATTUSD",
          price: "0.22220000",
        },
        {
          symbol: "PHBBNB",
          price: "0.00013700",
        },
        {
          symbol: "PHBBTC",
          price: "0.00000016",
        },
        {
          symbol: "PHBUSDC",
          price: "0.00587000",
        },
        {
          symbol: "PHBTUSD",
          price: "0.01017400",
        },
        {
          symbol: "PHBPAX",
          price: "0.00639000",
        },
        {
          symbol: "TFUELBNB",
          price: "0.00012590",
        },
        {
          symbol: "TFUELBTC",
          price: "0.00000486",
        },
        {
          symbol: "TFUELUSDT",
          price: "0.29370000",
        },
        {
          symbol: "TFUELUSDC",
          price: "0.00356500",
        },
        {
          symbol: "TFUELTUSD",
          price: "0.00307700",
        },
        {
          symbol: "TFUELPAX",
          price: "0.00348700",
        },
        {
          symbol: "ONEBNB",
          price: "0.00053310",
        },
        {
          symbol: "ONEBTC",
          price: "0.00000420",
        },
        {
          symbol: "ONEUSDT",
          price: "0.25423000",
        },
        {
          symbol: "ONETUSD",
          price: "0.00472000",
        },
        {
          symbol: "ONEPAX",
          price: "0.00496000",
        },
        {
          symbol: "ONEUSDC",
          price: "0.00520000",
        },
        {
          symbol: "FTMBNB",
          price: "0.00513340",
        },
        {
          symbol: "FTMBTC",
          price: "0.00004056",
        },
        {
          symbol: "FTMUSDT",
          price: "2.45060000",
        },
        {
          symbol: "FTMTUSD",
          price: "0.01095000",
        },
        {
          symbol: "FTMPAX",
          price: "0.01028000",
        },
        {
          symbol: "FTMUSDC",
          price: "0.01107000",
        },
        {
          symbol: "BTCBBTC",
          price: "1.00000000",
        },
        {
          symbol: "BCPTTUSD",
          price: "0.02606000",
        },
        {
          symbol: "BCPTPAX",
          price: "0.02761000",
        },
        {
          symbol: "BCPTUSDC",
          price: "0.02728000",
        },
        {
          symbol: "ALGOBNB",
          price: "0.00384500",
        },
        {
          symbol: "ALGOBTC",
          price: "0.00003039",
        },
        {
          symbol: "ALGOUSDT",
          price: "1.83580000",
        },
        {
          symbol: "ALGOTUSD",
          price: "1.01700000",
        },
        {
          symbol: "ALGOPAX",
          price: "0.20390000",
        },
        {
          symbol: "ALGOUSDC",
          price: "0.23800000",
        },
        {
          symbol: "USDSBUSDT",
          price: "0.99970000",
        },
        {
          symbol: "USDSBUSDS",
          price: "0.99990000",
        },
        {
          symbol: "GTOUSDT",
          price: "0.04488000",
        },
        {
          symbol: "GTOPAX",
          price: "0.01361000",
        },
        {
          symbol: "GTOTUSD",
          price: "0.01236000",
        },
        {
          symbol: "GTOUSDC",
          price: "0.01196000",
        },
        {
          symbol: "ERDBNB",
          price: "0.00083273",
        },
        {
          symbol: "ERDBTC",
          price: "0.00000168",
        },
        {
          symbol: "ERDUSDT",
          price: "0.01971000",
        },
        {
          symbol: "ERDPAX",
          price: "0.00125270",
        },
        {
          symbol: "ERDUSDC",
          price: "0.00135730",
        },
        {
          symbol: "DOGEBNB",
          price: "0.00015270",
        },
        {
          symbol: "DOGEBTC",
          price: "0.00000394",
        },
        {
          symbol: "DOGEUSDT",
          price: "0.23760000",
        },
        {
          symbol: "DOGEPAX",
          price: "0.00216820",
        },
        {
          symbol: "DOGEUSDC",
          price: "0.00212770",
        },
        {
          symbol: "DUSKBNB",
          price: "0.00118000",
        },
        {
          symbol: "DUSKBTC",
          price: "0.00000277",
        },
        {
          symbol: "DUSKUSDT",
          price: "0.16720000",
        },
        {
          symbol: "DUSKUSDC",
          price: "0.01790000",
        },
        {
          symbol: "DUSKPAX",
          price: "0.01890000",
        },
        {
          symbol: "BGBPUSDC",
          price: "1.39000000",
        },
        {
          symbol: "ANKRBNB",
          price: "0.00019310",
        },
        {
          symbol: "ANKRBTC",
          price: "0.00000152",
        },
        {
          symbol: "ANKRUSDT",
          price: "0.09212000",
        },
        {
          symbol: "ANKRTUSD",
          price: "0.00212800",
        },
        {
          symbol: "ANKRPAX",
          price: "0.00209300",
        },
        {
          symbol: "ANKRUSDC",
          price: "0.00209700",
        },
        {
          symbol: "ONTPAX",
          price: "0.84510000",
        },
        {
          symbol: "ONTUSDC",
          price: "0.57080000",
        },
        {
          symbol: "WINBNB",
          price: "0.00000127",
        },
        {
          symbol: "WINBTC",
          price: "0.00000001",
        },
        {
          symbol: "WINUSDT",
          price: "0.00060240",
        },
        {
          symbol: "WINUSDC",
          price: "0.00060230",
        },
        {
          symbol: "COSBNB",
          price: "0.00004533",
        },
        {
          symbol: "COSBTC",
          price: "0.00000035",
        },
        {
          symbol: "COSUSDT",
          price: "0.02166000",
        },
        {
          symbol: "TUSDBTUSD",
          price: "0.99750000",
        },
        {
          symbol: "NPXSUSDT",
          price: "0.00703010",
        },
        {
          symbol: "NPXSUSDC",
          price: "0.00017020",
        },
        {
          symbol: "COCOSBNB",
          price: "0.00131400",
        },
        {
          symbol: "COCOSBTC",
          price: "0.00000003",
        },
        {
          symbol: "COCOSUSDT",
          price: "0.62800000",
        },
        {
          symbol: "MTLUSDT",
          price: "3.16100000",
        },
        {
          symbol: "TOMOBNB",
          price: "0.03255000",
        },
        {
          symbol: "TOMOBTC",
          price: "0.00004264",
        },
        {
          symbol: "TOMOUSDT",
          price: "2.57400000",
        },
        {
          symbol: "TOMOUSDC",
          price: "0.36700000",
        },
        {
          symbol: "PERLBNB",
          price: "0.00018980",
        },
        {
          symbol: "PERLBTC",
          price: "0.00000151",
        },
        {
          symbol: "PERLUSDC",
          price: "0.02447000",
        },
        {
          symbol: "PERLUSDT",
          price: "0.09079000",
        },
        {
          symbol: "DENTUSDT",
          price: "0.00596100",
        },
        {
          symbol: "MFTUSDT",
          price: "0.01308600",
        },
        {
          symbol: "KEYUSDT",
          price: "0.01266600",
        },
        {
          symbol: "STORMUSDT",
          price: "0.00339700",
        },
        {
          symbol: "DOCKUSDT",
          price: "0.08294000",
        },
        {
          symbol: "WANUSDT",
          price: "0.90110000",
        },
        {
          symbol: "FUNUSDT",
          price: "0.02100000",
        },
        {
          symbol: "CVCUSDT",
          price: "0.46790000",
        },
        {
          symbol: "BTTTRX",
          price: "0.03649000",
        },
        {
          symbol: "WINTRX",
          price: "0.00610000",
        },
        {
          symbol: "CHZBNB",
          price: "0.00066790",
        },
        {
          symbol: "CHZBTC",
          price: "0.00000528",
        },
        {
          symbol: "CHZUSDT",
          price: "0.31860000",
        },
        {
          symbol: "BANDBNB",
          price: "0.02248000",
        },
        {
          symbol: "BANDBTC",
          price: "0.00014430",
        },
        {
          symbol: "BANDUSDT",
          price: "8.70600000",
        },
        {
          symbol: "BNBBUSD",
          price: "476.90000000",
        },
        {
          symbol: "BTCBUSD",
          price: "60376.53000000",
        },
        {
          symbol: "BUSDUSDT",
          price: "1.00030000",
        },
        {
          symbol: "BEAMBNB",
          price: "0.02177000",
        },
        {
          symbol: "BEAMBTC",
          price: "0.00001292",
        },
        {
          symbol: "BEAMUSDT",
          price: "0.78090000",
        },
        {
          symbol: "XTZBNB",
          price: "0.01389700",
        },
        {
          symbol: "XTZBTC",
          price: "0.00010990",
        },
        {
          symbol: "XTZUSDT",
          price: "6.63700000",
        },
        {
          symbol: "RENUSDT",
          price: "1.10120000",
        },
        {
          symbol: "RVNUSDT",
          price: "0.11888000",
        },
        {
          symbol: "HCUSDT",
          price: "0.84230000",
        },
        {
          symbol: "HBARBNB",
          price: "0.00078560",
        },
        {
          symbol: "HBARBTC",
          price: "0.00000621",
        },
        {
          symbol: "HBARUSDT",
          price: "0.37570000",
        },
        {
          symbol: "NKNBNB",
          price: "0.00074700",
        },
        {
          symbol: "NKNBTC",
          price: "0.00000722",
        },
        {
          symbol: "NKNUSDT",
          price: "0.43700000",
        },
        {
          symbol: "XRPBUSD",
          price: "1.09140000",
        },
        {
          symbol: "ETHBUSD",
          price: "3924.29000000",
        },
        {
          symbol: "BCHABCBUSD",
          price: "220.16000000",
        },
        {
          symbol: "LTCBUSD",
          price: "191.40000000",
        },
        {
          symbol: "LINKBUSD",
          price: "28.35000000",
        },
        {
          symbol: "ETCBUSD",
          price: "53.98000000",
        },
        {
          symbol: "STXBNB",
          price: "0.00454200",
        },
        {
          symbol: "STXBTC",
          price: "0.00003598",
        },
        {
          symbol: "STXUSDT",
          price: "2.17500000",
        },
        {
          symbol: "KAVABNB",
          price: "0.01195000",
        },
        {
          symbol: "KAVABTC",
          price: "0.00009470",
        },
        {
          symbol: "KAVAUSDT",
          price: "5.73400000",
        },
        {
          symbol: "BUSDNGN",
          price: "462.64000000",
        },
        {
          symbol: "BNBNGN",
          price: "43608.00000000",
        },
        {
          symbol: "BTCNGN",
          price: "34199998.00000000",
        },
        {
          symbol: "ARPABNB",
          price: "0.00030720",
        },
        {
          symbol: "ARPABTC",
          price: "0.00000243",
        },
        {
          symbol: "ARPAUSDT",
          price: "0.14697000",
        },
        {
          symbol: "TRXBUSD",
          price: "0.09897000",
        },
        {
          symbol: "EOSBUSD",
          price: "4.60100000",
        },
        {
          symbol: "IOTXUSDT",
          price: "0.06730000",
        },
        {
          symbol: "RLCUSDT",
          price: "4.07800000",
        },
        {
          symbol: "MCOUSDT",
          price: "2.74400000",
        },
        {
          symbol: "XLMBUSD",
          price: "0.36830000",
        },
        {
          symbol: "ADABUSD",
          price: "2.13900000",
        },
        {
          symbol: "CTXCBNB",
          price: "0.00412200",
        },
        {
          symbol: "CTXCBTC",
          price: "0.00000374",
        },
        {
          symbol: "CTXCUSDT",
          price: "0.22570000",
        },
        {
          symbol: "BCHBNB",
          price: "1.29300000",
        },
        {
          symbol: "BCHBTC",
          price: "0.01022000",
        },
        {
          symbol: "BCHUSDT",
          price: "617.00000000",
        },
        {
          symbol: "BCHUSDC",
          price: "621.30000000",
        },
        {
          symbol: "BCHTUSD",
          price: "630.00000000",
        },
        {
          symbol: "BCHPAX",
          price: "617.72000000",
        },
        {
          symbol: "BCHBUSD",
          price: "616.90000000",
        },
        {
          symbol: "BTCRUB",
          price: "4260000.00000000",
        },
        {
          symbol: "ETHRUB",
          price: "276959.10000000",
        },
        {
          symbol: "XRPRUB",
          price: "77.12000000",
        },
        {
          symbol: "BNBRUB",
          price: "33662.00000000",
        },
        {
          symbol: "TROYBNB",
          price: "0.00003761",
        },
        {
          symbol: "TROYBTC",
          price: "0.00000018",
        },
        {
          symbol: "TROYUSDT",
          price: "0.01803400",
        },
        {
          symbol: "BUSDRUB",
          price: "70.54000000",
        },
        {
          symbol: "QTUMBUSD",
          price: "12.66400000",
        },
        {
          symbol: "VETBUSD",
          price: "0.12775000",
        },
        {
          symbol: "VITEBNB",
          price: "0.00070700",
        },
        {
          symbol: "VITEBTC",
          price: "0.00000153",
        },
        {
          symbol: "VITEUSDT",
          price: "0.09281000",
        },
        {
          symbol: "FTTBNB",
          price: "0.13160000",
        },
        {
          symbol: "FTTBTC",
          price: "0.00103710",
        },
        {
          symbol: "FTTUSDT",
          price: "62.66000000",
        },
        {
          symbol: "BTCTRY",
          price: "581800.00000000",
        },
        {
          symbol: "BNBTRY",
          price: "4596.00000000",
        },
        {
          symbol: "BUSDTRY",
          price: "9.63600000",
        },
        {
          symbol: "ETHTRY",
          price: "37822.00000000",
        },
        {
          symbol: "XRPTRY",
          price: "10.52000000",
        },
        {
          symbol: "USDTTRY",
          price: "9.63300000",
        },
        {
          symbol: "USDTRUB",
          price: "70.53000000",
        },
        {
          symbol: "BTCEUR",
          price: "51973.14000000",
        },
        {
          symbol: "ETHEUR",
          price: "3378.82000000",
        },
        {
          symbol: "BNBEUR",
          price: "410.40000000",
        },
        {
          symbol: "XRPEUR",
          price: "0.93960000",
        },
        {
          symbol: "EURBUSD",
          price: "1.16200000",
        },
        {
          symbol: "EURUSDT",
          price: "1.16200000",
        },
        {
          symbol: "OGNBNB",
          price: "0.00174100",
        },
        {
          symbol: "OGNBTC",
          price: "0.00001374",
        },
        {
          symbol: "OGNUSDT",
          price: "0.83090000",
        },
        {
          symbol: "DREPBNB",
          price: "0.00009380",
        },
        {
          symbol: "DREPBTC",
          price: "0.00001143",
        },
        {
          symbol: "DREPUSDT",
          price: "0.69140000",
        },
        {
          symbol: "BULLUSDT",
          price: "1370.28000000",
        },
        {
          symbol: "BULLBUSD",
          price: "1368.56000000",
        },
        {
          symbol: "BEARUSDT",
          price: "11.16000000",
        },
        {
          symbol: "BEARBUSD",
          price: "11.14000000",
        },
        {
          symbol: "ETHBULLUSDT",
          price: "79.18000000",
        },
        {
          symbol: "ETHBULLBUSD",
          price: "78.46000000",
        },
        {
          symbol: "ETHBEARUSDT",
          price: "12.20000000",
        },
        {
          symbol: "ETHBEARBUSD",
          price: "12.24000000",
        },
        {
          symbol: "TCTBNB",
          price: "0.00041860",
        },
        {
          symbol: "TCTBTC",
          price: "0.00000058",
        },
        {
          symbol: "TCTUSDT",
          price: "0.03423000",
        },
        {
          symbol: "WRXBNB",
          price: "0.00270000",
        },
        {
          symbol: "WRXBTC",
          price: "0.00002134",
        },
        {
          symbol: "WRXUSDT",
          price: "1.28900000",
        },
        {
          symbol: "ICXBUSD",
          price: "2.05100000",
        },
        {
          symbol: "BTSUSDT",
          price: "0.04747000",
        },
        {
          symbol: "BTSBUSD",
          price: "0.01930000",
        },
        {
          symbol: "LSKUSDT",
          price: "3.60500000",
        },
        {
          symbol: "BNTUSDT",
          price: "4.09800000",
        },
        {
          symbol: "BNTBUSD",
          price: "4.09600000",
        },
        {
          symbol: "LTOBNB",
          price: "0.00248000",
        },
        {
          symbol: "LTOBTC",
          price: "0.00000445",
        },
        {
          symbol: "LTOUSDT",
          price: "0.26870000",
        },
        {
          symbol: "ATOMBUSD",
          price: "34.04000000",
        },
        {
          symbol: "DASHBUSD",
          price: "194.30000000",
        },
        {
          symbol: "NEOBUSD",
          price: "43.93000000",
        },
        {
          symbol: "WAVESBUSD",
          price: "27.55000000",
        },
        {
          symbol: "XTZBUSD",
          price: "6.63800000",
        },
        {
          symbol: "EOSBULLUSDT",
          price: "3.85000000",
        },
        {
          symbol: "EOSBULLBUSD",
          price: "3.90000000",
        },
        {
          symbol: "EOSBEARUSDT",
          price: "30.21000000",
        },
        {
          symbol: "EOSBEARBUSD",
          price: "29.81000000",
        },
        {
          symbol: "XRPBULLUSDT",
          price: "8.74000000",
        },
        {
          symbol: "XRPBULLBUSD",
          price: "8.78000000",
        },
        {
          symbol: "XRPBEARUSDT",
          price: "548.55000000",
        },
        {
          symbol: "XRPBEARBUSD",
          price: "547.33000000",
        },
        {
          symbol: "BATBUSD",
          price: "0.69110000",
        },
        {
          symbol: "ENJBUSD",
          price: "1.79000000",
        },
        {
          symbol: "NANOBUSD",
          price: "5.39200000",
        },
        {
          symbol: "ONTBUSD",
          price: "0.96610000",
        },
        {
          symbol: "RVNBUSD",
          price: "0.11884000",
        },
        {
          symbol: "STRATBUSD",
          price: "0.49150000",
        },
        {
          symbol: "STRATBNB",
          price: "0.01900000",
        },
        {
          symbol: "STRATUSDT",
          price: "0.49040000",
        },
        {
          symbol: "AIONBUSD",
          price: "0.07210000",
        },
        {
          symbol: "AIONUSDT",
          price: "0.17560000",
        },
        {
          symbol: "MBLBNB",
          price: "0.00002106",
        },
        {
          symbol: "MBLBTC",
          price: "0.00000005",
        },
        {
          symbol: "MBLUSDT",
          price: "0.01007700",
        },
        {
          symbol: "COTIBNB",
          price: "0.00108320",
        },
        {
          symbol: "COTIBTC",
          price: "0.00000856",
        },
        {
          symbol: "COTIUSDT",
          price: "0.51770000",
        },
        {
          symbol: "ALGOBUSD",
          price: "1.83630000",
        },
        {
          symbol: "BTTBUSD",
          price: "0.00361100",
        },
        {
          symbol: "TOMOBUSD",
          price: "2.57700000",
        },
        {
          symbol: "XMRBUSD",
          price: "265.20000000",
        },
        {
          symbol: "ZECBUSD",
          price: "160.20000000",
        },
        {
          symbol: "BNBBULLUSDT",
          price: "57.21000000",
        },
        {
          symbol: "BNBBULLBUSD",
          price: "58.37000000",
        },
        {
          symbol: "BNBBEARUSDT",
          price: "58.61000000",
        },
        {
          symbol: "BNBBEARBUSD",
          price: "57.21000000",
        },
        {
          symbol: "STPTBNB",
          price: "0.00067000",
        },
        {
          symbol: "STPTBTC",
          price: "0.00000246",
        },
        {
          symbol: "STPTUSDT",
          price: "0.14913000",
        },
        {
          symbol: "BTCZAR",
          price: "857014.00000000",
        },
        {
          symbol: "ETHZAR",
          price: "27850.40000000",
        },
        {
          symbol: "BNBZAR",
          price: "5000.00000000",
        },
        {
          symbol: "USDTZAR",
          price: "14.02300000",
        },
        {
          symbol: "BUSDZAR",
          price: "13.88800000",
        },
        {
          symbol: "BTCBKRW",
          price: "42029197.00000000",
        },
        {
          symbol: "ETHBKRW",
          price: "1277799.00000000",
        },
        {
          symbol: "BNBBKRW",
          price: "44687.00000000",
        },
        {
          symbol: "WTCUSDT",
          price: "0.95660000",
        },
        {
          symbol: "DATABUSD",
          price: "0.14422000",
        },
        {
          symbol: "DATAUSDT",
          price: "0.14417000",
        },
        {
          symbol: "XZCUSDT",
          price: "4.44600000",
        },
        {
          symbol: "SOLBNB",
          price: "0.42700000",
        },
        {
          symbol: "SOLBTC",
          price: "0.00337110",
        },
        {
          symbol: "SOLUSDT",
          price: "203.55000000",
        },
        {
          symbol: "SOLBUSD",
          price: "203.53000000",
        },
        {
          symbol: "BTCIDRT",
          price: "693891182.00",
        },
        {
          symbol: "BNBIDRT",
          price: "6750472.00",
        },
        {
          symbol: "USDTIDRT",
          price: "14108.00",
        },
        {
          symbol: "BUSDIDRT",
          price: "14389.00",
        },
        {
          symbol: "CTSIBTC",
          price: "0.00001331",
        },
        {
          symbol: "CTSIUSDT",
          price: "0.80420000",
        },
        {
          symbol: "CTSIBNB",
          price: "0.00168500",
        },
        {
          symbol: "CTSIBUSD",
          price: "0.80410000",
        },
        {
          symbol: "HIVEBNB",
          price: "0.00429000",
        },
        {
          symbol: "HIVEBTC",
          price: "0.00001244",
        },
        {
          symbol: "HIVEUSDT",
          price: "0.75290000",
        },
        {
          symbol: "CHRBNB",
          price: "0.00075470",
        },
        {
          symbol: "CHRBTC",
          price: "0.00000596",
        },
        {
          symbol: "CHRUSDT",
          price: "0.36050000",
        },
        {
          symbol: "BTCUPUSDT",
          price: "130.93700000",
        },
        {
          symbol: "BTCDOWNUSDT",
          price: "0.00853900",
        },
        {
          symbol: "GXSUSDT",
          price: "0.65180000",
        },
        {
          symbol: "ARDRUSDT",
          price: "0.31880000",
        },
        {
          symbol: "ERDBUSD",
          price: "0.01966100",
        },
        {
          symbol: "LENDUSDT",
          price: "0.51431000",
        },
        {
          symbol: "HBARBUSD",
          price: "0.37540000",
        },
        {
          symbol: "MATICBUSD",
          price: "1.50100000",
        },
        {
          symbol: "WRXBUSD",
          price: "1.28800000",
        },
        {
          symbol: "ZILBUSD",
          price: "0.09924000",
        },
        {
          symbol: "MDTBNB",
          price: "0.00073720",
        },
        {
          symbol: "MDTBTC",
          price: "0.00000075",
        },
        {
          symbol: "MDTUSDT",
          price: "0.04522000",
        },
        {
          symbol: "STMXBNB",
          price: "0.00006589",
        },
        {
          symbol: "STMXBTC",
          price: "0.00000052",
        },
        {
          symbol: "STMXETH",
          price: "0.00000801",
        },
        {
          symbol: "STMXUSDT",
          price: "0.03152000",
        },
        {
          symbol: "KNCBUSD",
          price: "1.61400000",
        },
        {
          symbol: "KNCUSDT",
          price: "1.61300000",
        },
        {
          symbol: "REPBUSD",
          price: "13.67300000",
        },
        {
          symbol: "REPUSDT",
          price: "23.24000000",
        },
        {
          symbol: "LRCBUSD",
          price: "0.40860000",
        },
        {
          symbol: "LRCUSDT",
          price: "0.40840000",
        },
        {
          symbol: "IQBNB",
          price: "0.00003815",
        },
        {
          symbol: "IQBUSD",
          price: "0.01823000",
        },
        {
          symbol: "PNTBTC",
          price: "0.00001857",
        },
        {
          symbol: "PNTUSDT",
          price: "1.11710000",
        },
        {
          symbol: "BTCGBP",
          price: "42959.89000000",
        },
        {
          symbol: "ETHGBP",
          price: "2791.77000000",
        },
        {
          symbol: "XRPGBP",
          price: "0.77530000",
        },
        {
          symbol: "BNBGBP",
          price: "339.40000000",
        },
        {
          symbol: "GBPBUSD",
          price: "1.40600000",
        },
        {
          symbol: "DGBBNB",
          price: "0.00010710",
        },
        {
          symbol: "DGBBTC",
          price: "0.00000084",
        },
        {
          symbol: "DGBBUSD",
          price: "0.05109000",
        },
        {
          symbol: "BTCUAH",
          price: "1600326.00000000",
        },
        {
          symbol: "USDTUAH",
          price: "26.36000000",
        },
        {
          symbol: "COMPBTC",
          price: "0.00521000",
        },
        {
          symbol: "COMPBNB",
          price: "5.71900000",
        },
        {
          symbol: "COMPBUSD",
          price: "314.20000000",
        },
        {
          symbol: "COMPUSDT",
          price: "314.50000000",
        },
        {
          symbol: "BTCBIDR",
          price: "854500000.00",
        },
        {
          symbol: "ETHBIDR",
          price: "55519867.00",
        },
        {
          symbol: "BNBBIDR",
          price: "6750000.00",
        },
        {
          symbol: "BUSDBIDR",
          price: "14148.00",
        },
        {
          symbol: "USDTBIDR",
          price: "14142.00",
        },
        {
          symbol: "BKRWUSDT",
          price: "0.00084530",
        },
        {
          symbol: "BKRWBUSD",
          price: "0.00084550",
        },
        {
          symbol: "SCUSDT",
          price: "0.01834000",
        },
        {
          symbol: "ZENUSDT",
          price: "85.13000000",
        },
        {
          symbol: "SXPBTC",
          price: "0.00003765",
        },
        {
          symbol: "SXPBNB",
          price: "0.00476700",
        },
        {
          symbol: "SXPBUSD",
          price: "2.27300000",
        },
        {
          symbol: "SNXBTC",
          price: "0.00015580",
        },
        {
          symbol: "SNXBNB",
          price: "0.01978000",
        },
        {
          symbol: "SNXBUSD",
          price: "9.43000000",
        },
        {
          symbol: "SNXUSDT",
          price: "9.42600000",
        },
        {
          symbol: "ETHUPUSDT",
          price: "93.40600000",
        },
        {
          symbol: "ETHDOWNUSDT",
          price: "0.78000000",
        },
        {
          symbol: "ADAUPUSDT",
          price: "117.34400000",
        },
        {
          symbol: "ADADOWNUSDT",
          price: "0.00325800",
        },
        {
          symbol: "LINKUPUSDT",
          price: "1.82530000",
        },
        {
          symbol: "LINKDOWNUSDT",
          price: "0.01920000",
        },
        {
          symbol: "VTHOBNB",
          price: "0.00002019",
        },
        {
          symbol: "VTHOBUSD",
          price: "0.00071800",
        },
        {
          symbol: "VTHOUSDT",
          price: "0.00965200",
        },
        {
          symbol: "DCRBUSD",
          price: "16.03500000",
        },
        {
          symbol: "DGBUSDT",
          price: "0.05108000",
        },
        {
          symbol: "GBPUSDT",
          price: "1.40600000",
        },
        {
          symbol: "STORJBUSD",
          price: "0.36200000",
        },
        {
          symbol: "SXPUSDT",
          price: "2.27300000",
        },
        {
          symbol: "IRISBNB",
          price: "0.00166200",
        },
        {
          symbol: "IRISBTC",
          price: "0.00000192",
        },
        {
          symbol: "IRISBUSD",
          price: "0.06080000",
        },
        {
          symbol: "MKRBNB",
          price: "6.90300000",
        },
        {
          symbol: "MKRBTC",
          price: "0.04167000",
        },
        {
          symbol: "MKRUSDT",
          price: "2517.00000000",
        },
        {
          symbol: "MKRBUSD",
          price: "2521.00000000",
        },
        {
          symbol: "DAIBNB",
          price: "0.04876000",
        },
        {
          symbol: "DAIBTC",
          price: "0.00008966",
        },
        {
          symbol: "DAIUSDT",
          price: "1.01890000",
        },
        {
          symbol: "DAIBUSD",
          price: "1.01810000",
        },
        {
          symbol: "RUNEBNB",
          price: "0.02145000",
        },
        {
          symbol: "RUNEBTC",
          price: "0.00016940",
        },
        {
          symbol: "RUNEBUSD",
          price: "10.22700000",
        },
        {
          symbol: "MANABUSD",
          price: "0.78140000",
        },
        {
          symbol: "DOGEBUSD",
          price: "0.23760000",
        },
        {
          symbol: "LENDBUSD",
          price: "0.51530000",
        },
        {
          symbol: "ZRXBUSD",
          price: "0.99350000",
        },
        {
          symbol: "DCRUSDT",
          price: "121.60000000",
        },
        {
          symbol: "STORJUSDT",
          price: "1.24630000",
        },
        {
          symbol: "XRPBKRW",
          price: "319.76000000",
        },
        {
          symbol: "ADABKRW",
          price: "327.55000000",
        },
        {
          symbol: "BTCAUD",
          price: "81009.20000000",
        },
        {
          symbol: "ETHAUD",
          price: "5266.27000000",
        },
        {
          symbol: "AUDBUSD",
          price: "0.74530000",
        },
        {
          symbol: "FIOBNB",
          price: "0.00039570",
        },
        {
          symbol: "FIOBTC",
          price: "0.00000314",
        },
        {
          symbol: "FIOBUSD",
          price: "0.18960000",
        },
        {
          symbol: "BNBUPUSDT",
          price: "472.06000000",
        },
        {
          symbol: "BNBDOWNUSDT",
          price: "0.18500000",
        },
        {
          symbol: "XTZUPUSDT",
          price: "0.07027000",
        },
        {
          symbol: "XTZDOWNUSDT",
          price: "2.14000000",
        },
        {
          symbol: "AVABNB",
          price: "0.00645800",
        },
        {
          symbol: "AVABTC",
          price: "0.00005098",
        },
        {
          symbol: "AVABUSD",
          price: "3.07600000",
        },
        {
          symbol: "USDTBKRW",
          price: "1125.00000000",
        },
        {
          symbol: "BUSDBKRW",
          price: "1097.18000000",
        },
        {
          symbol: "IOTABUSD",
          price: "1.31540000",
        },
        {
          symbol: "MANAUSDT",
          price: "0.78170000",
        },
        {
          symbol: "XRPAUD",
          price: "1.46480000",
        },
        {
          symbol: "BNBAUD",
          price: "640.40000000",
        },
        {
          symbol: "AUDUSDT",
          price: "0.74570000",
        },
        {
          symbol: "BALBNB",
          price: "0.42580000",
        },
        {
          symbol: "BALBTC",
          price: "0.00036200",
        },
        {
          symbol: "BALBUSD",
          price: "21.88000000",
        },
        {
          symbol: "YFIBNB",
          price: "82.19000000",
        },
        {
          symbol: "YFIBTC",
          price: "0.55810000",
        },
        {
          symbol: "YFIBUSD",
          price: "33728.44000000",
        },
        {
          symbol: "YFIUSDT",
          price: "33727.64000000",
        },
        {
          symbol: "BLZBUSD",
          price: "0.07104000",
        },
        {
          symbol: "KMDBUSD",
          price: "0.46760000",
        },
        {
          symbol: "BALUSDT",
          price: "21.91000000",
        },
        {
          symbol: "BLZUSDT",
          price: "0.25610000",
        },
        {
          symbol: "IRISUSDT",
          price: "0.11581000",
        },
        {
          symbol: "KMDUSDT",
          price: "1.09240000",
        },
        {
          symbol: "BTCDAI",
          price: "60445.16000000",
        },
        {
          symbol: "ETHDAI",
          price: "3927.68000000",
        },
        {
          symbol: "BNBDAI",
          price: "477.50000000",
        },
        {
          symbol: "USDTDAI",
          price: "0.99990000",
        },
        {
          symbol: "BUSDDAI",
          price: "1.00030000",
        },
        {
          symbol: "JSTBNB",
          price: "0.00021850",
        },
        {
          symbol: "JSTBTC",
          price: "0.00000131",
        },
        {
          symbol: "JSTBUSD",
          price: "0.07939000",
        },
        {
          symbol: "JSTUSDT",
          price: "0.07902000",
        },
        {
          symbol: "SRMBNB",
          price: "0.01638000",
        },
        {
          symbol: "SRMBTC",
          price: "0.00012960",
        },
        {
          symbol: "SRMBUSD",
          price: "7.82100000",
        },
        {
          symbol: "SRMUSDT",
          price: "7.81500000",
        },
        {
          symbol: "ANTBNB",
          price: "0.00967000",
        },
        {
          symbol: "ANTBTC",
          price: "0.00007644",
        },
        {
          symbol: "ANTBUSD",
          price: "4.61300000",
        },
        {
          symbol: "ANTUSDT",
          price: "4.62100000",
        },
        {
          symbol: "CRVBNB",
          price: "0.00687000",
        },
        {
          symbol: "CRVBTC",
          price: "0.00005097",
        },
        {
          symbol: "CRVBUSD",
          price: "3.07400000",
        },
        {
          symbol: "CRVUSDT",
          price: "3.07400000",
        },
        {
          symbol: "SANDBNB",
          price: "0.00156600",
        },
        {
          symbol: "SANDBTC",
          price: "0.00001236",
        },
        {
          symbol: "SANDUSDT",
          price: "0.74650000",
        },
        {
          symbol: "SANDBUSD",
          price: "0.74660000",
        },
        {
          symbol: "OCEANBNB",
          price: "0.00189000",
        },
        {
          symbol: "OCEANBTC",
          price: "0.00001499",
        },
        {
          symbol: "OCEANBUSD",
          price: "0.90410000",
        },
        {
          symbol: "OCEANUSDT",
          price: "0.90530000",
        },
        {
          symbol: "NMRBNB",
          price: "0.09000000",
        },
        {
          symbol: "NMRBTC",
          price: "0.00071700",
        },
        {
          symbol: "NMRBUSD",
          price: "43.33000000",
        },
        {
          symbol: "NMRUSDT",
          price: "43.44000000",
        },
        {
          symbol: "DOTBNB",
          price: "0.09172000",
        },
        {
          symbol: "DOTBTC",
          price: "0.00072500",
        },
        {
          symbol: "DOTBUSD",
          price: "43.76000000",
        },
        {
          symbol: "DOTUSDT",
          price: "43.79000000",
        },
        {
          symbol: "LUNABNB",
          price: "0.08905000",
        },
        {
          symbol: "LUNABTC",
          price: "0.00070330",
        },
        {
          symbol: "LUNABUSD",
          price: "42.47000000",
        },
        {
          symbol: "LUNAUSDT",
          price: "42.49000000",
        },
        {
          symbol: "IDEXBTC",
          price: "0.00000498",
        },
        {
          symbol: "IDEXBUSD",
          price: "0.30108000",
        },
        {
          symbol: "RSRBNB",
          price: "0.00008280",
        },
        {
          symbol: "RSRBTC",
          price: "0.00000065",
        },
        {
          symbol: "RSRBUSD",
          price: "0.03947000",
        },
        {
          symbol: "RSRUSDT",
          price: "0.03942000",
        },
        {
          symbol: "PAXGBNB",
          price: "3.74900000",
        },
        {
          symbol: "PAXGBTC",
          price: "0.02964000",
        },
        {
          symbol: "PAXGBUSD",
          price: "1890.00000000",
        },
        {
          symbol: "PAXGUSDT",
          price: "1792.00000000",
        },
        {
          symbol: "WNXMBNB",
          price: "0.17350000",
        },
        {
          symbol: "WNXMBTC",
          price: "0.00094600",
        },
        {
          symbol: "WNXMBUSD",
          price: "22.16500000",
        },
        {
          symbol: "WNXMUSDT",
          price: "57.16000000",
        },
        {
          symbol: "TRBBNB",
          price: "0.51700000",
        },
        {
          symbol: "TRBBTC",
          price: "0.00095000",
        },
        {
          symbol: "TRBBUSD",
          price: "57.48000000",
        },
        {
          symbol: "TRBUSDT",
          price: "57.50000000",
        },
        {
          symbol: "ETHNGN",
          price: "805670.00000000",
        },
        {
          symbol: "DOTBIDR",
          price: "619000.00",
        },
        {
          symbol: "LINKAUD",
          price: "38.06000000",
        },
        {
          symbol: "SXPAUD",
          price: "3.06700000",
        },
        {
          symbol: "BZRXBNB",
          price: "0.00514000",
        },
        {
          symbol: "BZRXBTC",
          price: "0.00000563",
        },
        {
          symbol: "BZRXBUSD",
          price: "0.34050000",
        },
        {
          symbol: "BZRXUSDT",
          price: "0.34000000",
        },
        {
          symbol: "WBTCBTC",
          price: "1.00080000",
        },
        {
          symbol: "WBTCETH",
          price: "15.40000000",
        },
        {
          symbol: "SUSHIBNB",
          price: "0.02237000",
        },
        {
          symbol: "SUSHIBTC",
          price: "0.00017690",
        },
        {
          symbol: "SUSHIBUSD",
          price: "10.66600000",
        },
        {
          symbol: "SUSHIUSDT",
          price: "10.66900000",
        },
        {
          symbol: "YFIIBNB",
          price: "8.14000000",
        },
        {
          symbol: "YFIIBTC",
          price: "0.06420000",
        },
        {
          symbol: "YFIIBUSD",
          price: "3893.00000000",
        },
        {
          symbol: "YFIIUSDT",
          price: "3891.00000000",
        },
        {
          symbol: "KSMBNB",
          price: "0.77720000",
        },
        {
          symbol: "KSMBTC",
          price: "0.00613000",
        },
        {
          symbol: "KSMBUSD",
          price: "370.70000000",
        },
        {
          symbol: "KSMUSDT",
          price: "370.60000000",
        },
        {
          symbol: "EGLDBNB",
          price: "0.56900000",
        },
        {
          symbol: "EGLDBTC",
          price: "0.00449700",
        },
        {
          symbol: "EGLDBUSD",
          price: "271.72000000",
        },
        {
          symbol: "EGLDUSDT",
          price: "271.82000000",
        },
        {
          symbol: "DIABNB",
          price: "0.00381300",
        },
        {
          symbol: "DIABTC",
          price: "0.00003046",
        },
        {
          symbol: "DIABUSD",
          price: "1.83900000",
        },
        {
          symbol: "DIAUSDT",
          price: "1.84200000",
        },
        {
          symbol: "RUNEUSDT",
          price: "10.22600000",
        },
        {
          symbol: "FIOUSDT",
          price: "0.18960000",
        },
        {
          symbol: "UMABTC",
          price: "0.00019600",
        },
        {
          symbol: "UMAUSDT",
          price: "11.84700000",
        },
        {
          symbol: "EOSUPUSDT",
          price: "0.69220000",
        },
        {
          symbol: "EOSDOWNUSDT",
          price: "0.00037750",
        },
        {
          symbol: "TRXUPUSDT",
          price: "0.35300000",
        },
        {
          symbol: "TRXDOWNUSDT",
          price: "10.00000000",
        },
        {
          symbol: "XRPUPUSDT",
          price: "4.96160000",
        },
        {
          symbol: "XRPDOWNUSDT",
          price: "0.00137200",
        },
        {
          symbol: "DOTUPUSDT",
          price: "14.99400000",
        },
        {
          symbol: "DOTDOWNUSDT",
          price: "10.44500000",
        },
        {
          symbol: "SRMBIDR",
          price: "26748.00",
        },
        {
          symbol: "ONEBIDR",
          price: "119.92",
        },
        {
          symbol: "LINKTRY",
          price: "273.10000000",
        },
        {
          symbol: "USDTNGN",
          price: "564.60000000",
        },
        {
          symbol: "BELBNB",
          price: "0.00470000",
        },
        {
          symbol: "BELBTC",
          price: "0.00003710",
        },
        {
          symbol: "BELBUSD",
          price: "2.24200000",
        },
        {
          symbol: "BELUSDT",
          price: "2.24300000",
        },
        {
          symbol: "WINGBNB",
          price: "0.04865000",
        },
        {
          symbol: "WINGBTC",
          price: "0.00034780",
        },
        {
          symbol: "SWRVBNB",
          price: "0.00150400",
        },
        {
          symbol: "SWRVBUSD",
          price: "0.56490000",
        },
        {
          symbol: "WINGBUSD",
          price: "21.00000000",
        },
        {
          symbol: "WINGUSDT",
          price: "21.00000000",
        },
        {
          symbol: "LTCUPUSDT",
          price: "4.20100000",
        },
        {
          symbol: "LTCDOWNUSDT",
          price: "1.62900000",
        },
        {
          symbol: "LENDBKRW",
          price: "579.46000000",
        },
        {
          symbol: "SXPEUR",
          price: "1.95700000",
        },
        {
          symbol: "CREAMBNB",
          price: "0.32600000",
        },
        {
          symbol: "CREAMBUSD",
          price: "155.70000000",
        },
        {
          symbol: "UNIBNB",
          price: "0.05343000",
        },
        {
          symbol: "UNIBTC",
          price: "0.00042240",
        },
        {
          symbol: "UNIBUSD",
          price: "25.50000000",
        },
        {
          symbol: "UNIUSDT",
          price: "25.51000000",
        },
        {
          symbol: "NBSBTC",
          price: "0.00000031",
        },
        {
          symbol: "NBSUSDT",
          price: "0.01614000",
        },
        {
          symbol: "OXTBTC",
          price: "0.00000732",
        },
        {
          symbol: "OXTUSDT",
          price: "0.44190000",
        },
        {
          symbol: "SUNBTC",
          price: "0.00071100",
        },
        {
          symbol: "SUNUSDT",
          price: "0.03144000",
        },
        {
          symbol: "AVAXBNB",
          price: "0.13716000",
        },
        {
          symbol: "AVAXBTC",
          price: "0.00108390",
        },
        {
          symbol: "AVAXBUSD",
          price: "65.45000000",
        },
        {
          symbol: "AVAXUSDT",
          price: "65.45000000",
        },
        {
          symbol: "HNTBTC",
          price: "0.00034760",
        },
        {
          symbol: "HNTUSDT",
          price: "20.98000000",
        },
        {
          symbol: "BAKEBNB",
          price: "0.00424300",
        },
        {
          symbol: "BURGERBNB",
          price: "0.00859000",
        },
        {
          symbol: "SXPBIDR",
          price: "32222.00",
        },
        {
          symbol: "LINKBKRW",
          price: "16948.99000000",
        },
        {
          symbol: "FLMBNB",
          price: "0.00333000",
        },
        {
          symbol: "FLMBTC",
          price: "0.00000883",
        },
        {
          symbol: "FLMBUSD",
          price: "0.53260000",
        },
        {
          symbol: "FLMUSDT",
          price: "0.53060000",
        },
        {
          symbol: "SCRTBTC",
          price: "0.00009762",
        },
        {
          symbol: "SCRTETH",
          price: "0.00150250",
        },
        {
          symbol: "CAKEBNB",
          price: "0.04143000",
        },
        {
          symbol: "CAKEBUSD",
          price: "19.78000000",
        },
        {
          symbol: "SPARTABNB",
          price: "0.00096460",
        },
        {
          symbol: "UNIUPUSDT",
          price: "3.66000000",
        },
        {
          symbol: "UNIDOWNUSDT",
          price: "2.17500000",
        },
        {
          symbol: "ORNBTC",
          price: "0.00013310",
        },
        {
          symbol: "ORNUSDT",
          price: "8.05600000",
        },
        {
          symbol: "TRXNGN",
          price: "20.71000000",
        },
        {
          symbol: "SXPTRY",
          price: "21.90000000",
        },
        {
          symbol: "UTKBTC",
          price: "0.00000702",
        },
        {
          symbol: "UTKUSDT",
          price: "0.42510000",
        },
        {
          symbol: "XVSBNB",
          price: "0.06420000",
        },
        {
          symbol: "XVSBTC",
          price: "0.00050740",
        },
        {
          symbol: "XVSBUSD",
          price: "30.64000000",
        },
        {
          symbol: "XVSUSDT",
          price: "30.66000000",
        },
        {
          symbol: "ALPHABNB",
          price: "0.00217300",
        },
        {
          symbol: "ALPHABTC",
          price: "0.00001714",
        },
        {
          symbol: "ALPHABUSD",
          price: "1.03600000",
        },
        {
          symbol: "ALPHAUSDT",
          price: "1.03560000",
        },
        {
          symbol: "VIDTBTC",
          price: "0.00001785",
        },
        {
          symbol: "VIDTBUSD",
          price: "1.07500000",
        },
        {
          symbol: "AAVEBNB",
          price: "0.64450000",
        },
        {
          symbol: "BTCBRL",
          price: "346500.00000000",
        },
        {
          symbol: "USDTBRL",
          price: "5.74000000",
        },
        {
          symbol: "AAVEBTC",
          price: "0.00509800",
        },
        {
          symbol: "AAVEETH",
          price: "0.07840000",
        },
        {
          symbol: "AAVEBUSD",
          price: "307.80000000",
        },
        {
          symbol: "AAVEUSDT",
          price: "308.00000000",
        },
        {
          symbol: "AAVEBKRW",
          price: "164167.00000000",
        },
        {
          symbol: "NEARBNB",
          price: "0.01868100",
        },
        {
          symbol: "NEARBTC",
          price: "0.00014747",
        },
        {
          symbol: "NEARBUSD",
          price: "8.90000000",
        },
        {
          symbol: "NEARUSDT",
          price: "8.90400000",
        },
        {
          symbol: "SXPUPUSDT",
          price: "0.19856000",
        },
        {
          symbol: "SXPDOWNUSDT",
          price: "0.14960000",
        },
        {
          symbol: "DOTBKRW",
          price: "13514.98000000",
        },
        {
          symbol: "SXPGBP",
          price: "1.62200000",
        },
        {
          symbol: "FILBNB",
          price: "0.13810000",
        },
        {
          symbol: "FILBTC",
          price: "0.00109000",
        },
        {
          symbol: "FILBUSD",
          price: "65.80000000",
        },
        {
          symbol: "FILUSDT",
          price: "65.82000000",
        },
        {
          symbol: "FILUPUSDT",
          price: "1.12000000",
        },
        {
          symbol: "FILDOWNUSDT",
          price: "0.00053310",
        },
        {
          symbol: "YFIUPUSDT",
          price: "0.21910000",
        },
        {
          symbol: "YFIDOWNUSDT",
          price: "0.83560000",
        },
        {
          symbol: "INJBNB",
          price: "0.02618000",
        },
        {
          symbol: "INJBTC",
          price: "0.00020680",
        },
        {
          symbol: "INJBUSD",
          price: "12.48400000",
        },
        {
          symbol: "INJUSDT",
          price: "12.48500000",
        },
        {
          symbol: "AERGOBTC",
          price: "0.00000501",
        },
        {
          symbol: "AERGOBUSD",
          price: "0.30250000",
        },
        {
          symbol: "LINKEUR",
          price: "24.40000000",
        },
        {
          symbol: "ONEBUSD",
          price: "0.25400000",
        },
        {
          symbol: "EASYETH",
          price: "0.00623000",
        },
        {
          symbol: "AUDIOBTC",
          price: "0.00003357",
        },
        {
          symbol: "AUDIOBUSD",
          price: "2.02700000",
        },
        {
          symbol: "AUDIOUSDT",
          price: "2.02800000",
        },
        {
          symbol: "CTKBNB",
          price: "0.00420000",
        },
        {
          symbol: "CTKBTC",
          price: "0.00003314",
        },
        {
          symbol: "CTKBUSD",
          price: "2.00000000",
        },
        {
          symbol: "CTKUSDT",
          price: "2.00300000",
        },
        {
          symbol: "BCHUPUSDT",
          price: "0.33990000",
        },
        {
          symbol: "BCHDOWNUSDT",
          price: "0.22350000",
        },
        {
          symbol: "BOTBTC",
          price: "0.04906000",
        },
        {
          symbol: "BOTBUSD",
          price: "2783.23000000",
        },
        {
          symbol: "ETHBRL",
          price: "22548.38000000",
        },
        {
          symbol: "DOTEUR",
          price: "37.65000000",
        },
        {
          symbol: "AKROBTC",
          price: "0.00000055",
        },
        {
          symbol: "AKROUSDT",
          price: "0.03291000",
        },
        {
          symbol: "AXSBNB",
          price: "0.25620000",
        },
        {
          symbol: "AXSBTC",
          price: "0.00202600",
        },
        {
          symbol: "AXSBUSD",
          price: "122.42000000",
        },
        {
          symbol: "AXSUSDT",
          price: "122.41000000",
        },
        {
          symbol: "HARDBNB",
          price: "0.00214600",
        },
        {
          symbol: "HARDBTC",
          price: "0.00001693",
        },
        {
          symbol: "HARDBUSD",
          price: "1.02260000",
        },
        {
          symbol: "HARDUSDT",
          price: "1.02260000",
        },
        {
          symbol: "BNBBRL",
          price: "2741.00000000",
        },
        {
          symbol: "LTCEUR",
          price: "165.00000000",
        },
        {
          symbol: "RENBTCBTC",
          price: "1.00080000",
        },
        {
          symbol: "RENBTCETH",
          price: "16.29900000",
        },
        {
          symbol: "DNTBUSD",
          price: "0.17900000",
        },
        {
          symbol: "DNTUSDT",
          price: "0.17900000",
        },
        {
          symbol: "SLPETH",
          price: "0.00001693",
        },
        {
          symbol: "ADAEUR",
          price: "1.84500000",
        },
        {
          symbol: "LTCNGN",
          price: "78132.00000000",
        },
        {
          symbol: "CVPETH",
          price: "0.00046390",
        },
        {
          symbol: "CVPBUSD",
          price: "1.81600000",
        },
        {
          symbol: "STRAXBTC",
          price: "0.00003464",
        },
        {
          symbol: "STRAXETH",
          price: "0.00053460",
        },
        {
          symbol: "STRAXBUSD",
          price: "2.09900000",
        },
        {
          symbol: "STRAXUSDT",
          price: "2.10000000",
        },
        {
          symbol: "FORBTC",
          price: "0.00000146",
        },
        {
          symbol: "FORBUSD",
          price: "0.08807000",
        },
        {
          symbol: "UNFIBNB",
          price: "0.02654000",
        },
        {
          symbol: "UNFIBTC",
          price: "0.00017870",
        },
        {
          symbol: "UNFIBUSD",
          price: "10.79100000",
        },
        {
          symbol: "UNFIUSDT",
          price: "10.79500000",
        },
        {
          symbol: "FRONTETH",
          price: "0.00033040",
        },
        {
          symbol: "FRONTBUSD",
          price: "1.25950000",
        },
        {
          symbol: "BCHABUSD",
          price: "43.64100000",
        },
        {
          symbol: "ROSEBTC",
          price: "0.00000305",
        },
        {
          symbol: "ROSEBUSD",
          price: "0.18401000",
        },
        {
          symbol: "ROSEUSDT",
          price: "0.18401000",
        },
        {
          symbol: "AVAXTRY",
          price: "630.80000000",
        },
        {
          symbol: "BUSDBRL",
          price: "5.74200000",
        },
        {
          symbol: "AVAUSDT",
          price: "3.08400000",
        },
        {
          symbol: "SYSBUSD",
          price: "0.35920000",
        },
        {
          symbol: "XEMUSDT",
          price: "0.17160000",
        },
        {
          symbol: "HEGICETH",
          price: "0.00003822",
        },
        {
          symbol: "HEGICBUSD",
          price: "0.15050000",
        },
        {
          symbol: "AAVEUPUSDT",
          price: "0.70280000",
        },
        {
          symbol: "AAVEDOWNUSDT",
          price: "0.00726900",
        },
        {
          symbol: "PROMBNB",
          price: "0.03980000",
        },
        {
          symbol: "PROMBUSD",
          price: "19.00000000",
        },
        {
          symbol: "XRPBRL",
          price: "6.26600000",
        },
        {
          symbol: "XRPNGN",
          price: "214.17000000",
        },
        {
          symbol: "SKLBTC",
          price: "0.00000560",
        },
        {
          symbol: "SKLBUSD",
          price: "0.33820000",
        },
        {
          symbol: "SKLUSDT",
          price: "0.33810000",
        },
        {
          symbol: "BCHEUR",
          price: "531.50000000",
        },
        {
          symbol: "YFIEUR",
          price: "29012.92000000",
        },
        {
          symbol: "ZILBIDR",
          price: "1406.00",
        },
        {
          symbol: "SUSDBTC",
          price: "0.00002065",
        },
        {
          symbol: "SUSDETH",
          price: "0.00052700",
        },
        {
          symbol: "SUSDUSDT",
          price: "1.00200000",
        },
        {
          symbol: "COVERETH",
          price: "0.06373000",
        },
        {
          symbol: "COVERBUSD",
          price: "193.60000000",
        },
        {
          symbol: "GLMBTC",
          price: "0.00000879",
        },
        {
          symbol: "GLMETH",
          price: "0.00013520",
        },
        {
          symbol: "GHSTETH",
          price: "0.00045490",
        },
        {
          symbol: "GHSTBUSD",
          price: "1.78900000",
        },
        {
          symbol: "SUSHIUPUSDT",
          price: "0.04914000",
        },
        {
          symbol: "SUSHIDOWNUSDT",
          price: "33.70000000",
        },
        {
          symbol: "XLMUPUSDT",
          price: "0.10107000",
        },
        {
          symbol: "XLMDOWNUSDT",
          price: "4.42200000",
        },
        {
          symbol: "LINKBRL",
          price: "162.90000000",
        },
        {
          symbol: "LINKNGN",
          price: "11772.00000000",
        },
        {
          symbol: "LTCRUB",
          price: "13538.40000000",
        },
        {
          symbol: "TRXTRY",
          price: "0.95430000",
        },
        {
          symbol: "XLMEUR",
          price: "0.31700000",
        },
        {
          symbol: "DFETH",
          price: "0.00007020",
        },
        {
          symbol: "DFBUSD",
          price: "0.21070000",
        },
        {
          symbol: "GRTBTC",
          price: "0.00001485",
        },
        {
          symbol: "GRTETH",
          price: "0.00022830",
        },
        {
          symbol: "GRTUSDT",
          price: "0.89710000",
        },
        {
          symbol: "JUVBTC",
          price: "0.00023030",
        },
        {
          symbol: "JUVBUSD",
          price: "13.95000000",
        },
        {
          symbol: "JUVUSDT",
          price: "13.96000000",
        },
        {
          symbol: "PSGBTC",
          price: "0.00037620",
        },
        {
          symbol: "PSGBUSD",
          price: "22.73000000",
        },
        {
          symbol: "PSGUSDT",
          price: "22.73000000",
        },
        {
          symbol: "BUSDBVND",
          price: "23714.00",
        },
        {
          symbol: "USDTBVND",
          price: "23773.00",
        },
        {
          symbol: "REEFBTC",
          price: "0.00000049",
        },
        {
          symbol: "REEFUSDT",
          price: "0.02962000",
        },
        {
          symbol: "OGBTC",
          price: "0.00011630",
        },
        {
          symbol: "OGUSDT",
          price: "7.02700000",
        },
        {
          symbol: "ATMBTC",
          price: "0.00023190",
        },
        {
          symbol: "ATMUSDT",
          price: "14.09000000",
        },
        {
          symbol: "ASRBTC",
          price: "0.00011780",
        },
        {
          symbol: "ASRUSDT",
          price: "7.12900000",
        },
        {
          symbol: "CELOBTC",
          price: "0.00010696",
        },
        {
          symbol: "CELOUSDT",
          price: "6.46200000",
        },
        {
          symbol: "RIFBTC",
          price: "0.00000450",
        },
        {
          symbol: "RIFUSDT",
          price: "0.27200000",
        },
        {
          symbol: "CHZTRY",
          price: "3.07000000",
        },
        {
          symbol: "XLMTRY",
          price: "3.55000000",
        },
        {
          symbol: "LINKGBP",
          price: "20.16000000",
        },
        {
          symbol: "GRTEUR",
          price: "0.77200000",
        },
        {
          symbol: "BTCSTBTC",
          price: "0.00071930",
        },
        {
          symbol: "BTCSTBUSD",
          price: "43.50000000",
        },
        {
          symbol: "BTCSTUSDT",
          price: "43.49000000",
        },
        {
          symbol: "TRUBTC",
          price: "0.00000909",
        },
        {
          symbol: "TRUBUSD",
          price: "0.53570000",
        },
        {
          symbol: "TRUUSDT",
          price: "0.54990000",
        },
        {
          symbol: "DEXEETH",
          price: "0.00333800",
        },
        {
          symbol: "DEXEBUSD",
          price: "13.15000000",
        },
        {
          symbol: "EOSEUR",
          price: "3.96300000",
        },
        {
          symbol: "LTCBRL",
          price: "1101.00000000",
        },
        {
          symbol: "USDCBUSD",
          price: "1.00010000",
        },
        {
          symbol: "TUSDBUSD",
          price: "1.00000000",
        },
        {
          symbol: "PAXBUSD",
          price: "1.00000000",
        },
        {
          symbol: "CKBBTC",
          price: "0.00000033",
        },
        {
          symbol: "CKBBUSD",
          price: "0.01944000",
        },
        {
          symbol: "CKBUSDT",
          price: "0.01947000",
        },
        {
          symbol: "TWTBTC",
          price: "0.00001803",
        },
        {
          symbol: "TWTBUSD",
          price: "1.08980000",
        },
        {
          symbol: "TWTUSDT",
          price: "1.09060000",
        },
        {
          symbol: "FIROBTC",
          price: "0.00013440",
        },
        {
          symbol: "FIROETH",
          price: "0.00207300",
        },
        {
          symbol: "FIROUSDT",
          price: "8.14000000",
        },
        {
          symbol: "BETHETH",
          price: "0.93020000",
        },
        {
          symbol: "DOGEEUR",
          price: "0.20450000",
        },
        {
          symbol: "DOGETRY",
          price: "2.29100000",
        },
        {
          symbol: "DOGEAUD",
          price: "0.31860000",
        },
        {
          symbol: "DOGEBRL",
          price: "1.36600000",
        },
        {
          symbol: "DOTNGN",
          price: "10716.00000000",
        },
        {
          symbol: "PROSETH",
          price: "0.00059200",
        },
        {
          symbol: "LITBTC",
          price: "0.00007148",
        },
        {
          symbol: "LITBUSD",
          price: "4.32700000",
        },
        {
          symbol: "LITUSDT",
          price: "4.32700000",
        },
        {
          symbol: "BTCVAI",
          price: "56876.40000000",
        },
        {
          symbol: "BUSDVAI",
          price: "1.09400000",
        },
        {
          symbol: "SFPBTC",
          price: "0.00002827",
        },
        {
          symbol: "SFPBUSD",
          price: "1.71260000",
        },
        {
          symbol: "SFPUSDT",
          price: "1.70890000",
        },
        {
          symbol: "DOGEGBP",
          price: "0.16970000",
        },
        {
          symbol: "DOTTRY",
          price: "421.60000000",
        },
        {
          symbol: "FXSBTC",
          price: "0.00010744",
        },
        {
          symbol: "FXSBUSD",
          price: "6.52700000",
        },
        {
          symbol: "DODOBTC",
          price: "0.00002488",
        },
        {
          symbol: "DODOBUSD",
          price: "1.50400000",
        },
        {
          symbol: "DODOUSDT",
          price: "1.50500000",
        },
        {
          symbol: "FRONTBTC",
          price: "0.00002082",
        },
        {
          symbol: "EASYBTC",
          price: "0.00029250",
        },
        {
          symbol: "CAKEBTC",
          price: "0.00032750",
        },
        {
          symbol: "CAKEUSDT",
          price: "19.77000000",
        },
        {
          symbol: "BAKEBUSD",
          price: "2.02400000",
        },
        {
          symbol: "UFTETH",
          price: "0.00026680",
        },
        {
          symbol: "UFTBUSD",
          price: "1.04800000",
        },
        {
          symbol: "BANDBUSD",
          price: "8.70700000",
        },
        {
          symbol: "GRTBUSD",
          price: "0.89680000",
        },
        {
          symbol: "IOSTBUSD",
          price: "0.04993000",
        },
        {
          symbol: "OMGBUSD",
          price: "14.13900000",
        },
        {
          symbol: "REEFBUSD",
          price: "0.02960000",
        },
        {
          symbol: "ACMBTC",
          price: "0.00014370",
        },
        {
          symbol: "ACMBUSD",
          price: "8.68000000",
        },
        {
          symbol: "ACMUSDT",
          price: "8.66600000",
        },
        {
          symbol: "AUCTIONBTC",
          price: "0.00072360",
        },
        {
          symbol: "AUCTIONBUSD",
          price: "43.76000000",
        },
        {
          symbol: "PHABTC",
          price: "0.00001243",
        },
        {
          symbol: "PHABUSD",
          price: "0.75110000",
        },
        {
          symbol: "DOTGBP",
          price: "31.11000000",
        },
        {
          symbol: "ADATRY",
          price: "20.62000000",
        },
        {
          symbol: "ADABRL",
          price: "12.31700000",
        },
        {
          symbol: "ADAGBP",
          price: "1.52640000",
        },
        {
          symbol: "TVKBTC",
          price: "0.00000348",
        },
        {
          symbol: "TVKBUSD",
          price: "0.21050000",
        },
        {
          symbol: "BADGERBTC",
          price: "0.00041440",
        },
        {
          symbol: "BADGERBUSD",
          price: "25.27000000",
        },
        {
          symbol: "BADGERUSDT",
          price: "25.11000000",
        },
        {
          symbol: "FISBTC",
          price: "0.00002990",
        },
        {
          symbol: "FISBUSD",
          price: "1.80560000",
        },
        {
          symbol: "FISUSDT",
          price: "1.80760000",
        },
        {
          symbol: "DOTBRL",
          price: "251.77000000",
        },
        {
          symbol: "ADAAUD",
          price: "2.88000000",
        },
        {
          symbol: "HOTTRY",
          price: "0.09158000",
        },
        {
          symbol: "EGLDEUR",
          price: "233.85000000",
        },
        {
          symbol: "OMBTC",
          price: "0.00000391",
        },
        {
          symbol: "OMBUSD",
          price: "0.23610000",
        },
        {
          symbol: "OMUSDT",
          price: "0.23610000",
        },
        {
          symbol: "PONDBTC",
          price: "0.00000155",
        },
        {
          symbol: "PONDBUSD",
          price: "0.09403000",
        },
        {
          symbol: "PONDUSDT",
          price: "0.09399000",
        },
        {
          symbol: "DEGOBTC",
          price: "0.00013950",
        },
        {
          symbol: "DEGOBUSD",
          price: "8.40000000",
        },
        {
          symbol: "DEGOUSDT",
          price: "8.40000000",
        },
        {
          symbol: "AVAXEUR",
          price: "56.32000000",
        },
        {
          symbol: "BTTTRY",
          price: "0.03483000",
        },
        {
          symbol: "CHZBRL",
          price: "1.83000000",
        },
        {
          symbol: "UNIEUR",
          price: "21.95000000",
        },
        {
          symbol: "ALICEBTC",
          price: "0.00019610",
        },
        {
          symbol: "ALICEBUSD",
          price: "11.86000000",
        },
        {
          symbol: "ALICEUSDT",
          price: "11.86000000",
        },
        {
          symbol: "CHZBUSD",
          price: "0.31870000",
        },
        {
          symbol: "CHZEUR",
          price: "0.27450000",
        },
        {
          symbol: "CHZGBP",
          price: "0.22780000",
        },
        {
          symbol: "BIFIBNB",
          price: "2.77700000",
        },
        {
          symbol: "BIFIBUSD",
          price: "1259.70000000",
        },
        {
          symbol: "LINABTC",
          price: "0.00000088",
        },
        {
          symbol: "LINABUSD",
          price: "0.05264000",
        },
        {
          symbol: "LINAUSDT",
          price: "0.05261000",
        },
        {
          symbol: "ADARUB",
          price: "151.14000000",
        },
        {
          symbol: "ENJBRL",
          price: "10.30600000",
        },
        {
          symbol: "ENJEUR",
          price: "1.54200000",
        },
        {
          symbol: "MATICEUR",
          price: "1.29210000",
        },
        {
          symbol: "NEOTRY",
          price: "424.10000000",
        },
        {
          symbol: "PERPBTC",
          price: "0.00025810",
        },
        {
          symbol: "PERPBUSD",
          price: "15.61000000",
        },
        {
          symbol: "PERPUSDT",
          price: "15.63000000",
        },
        {
          symbol: "RAMPBTC",
          price: "0.00000486",
        },
        {
          symbol: "RAMPBUSD",
          price: "0.29360000",
        },
        {
          symbol: "RAMPUSDT",
          price: "0.29320000",
        },
        {
          symbol: "SUPERBTC",
          price: "0.00001430",
        },
        {
          symbol: "SUPERBUSD",
          price: "0.86330000",
        },
        {
          symbol: "SUPERUSDT",
          price: "0.86410000",
        },
        {
          symbol: "CFXBTC",
          price: "0.00000549",
        },
        {
          symbol: "CFXBUSD",
          price: "0.33180000",
        },
        {
          symbol: "CFXUSDT",
          price: "0.33160000",
        },
        {
          symbol: "ENJGBP",
          price: "1.27420000",
        },
        {
          symbol: "EOSTRY",
          price: "44.34000000",
        },
        {
          symbol: "LTCGBP",
          price: "136.18000000",
        },
        {
          symbol: "LUNAEUR",
          price: "36.56000000",
        },
        {
          symbol: "RVNTRY",
          price: "1.14710000",
        },
        {
          symbol: "THETAEUR",
          price: "5.59000000",
        },
        {
          symbol: "XVGBUSD",
          price: "0.02394000",
        },
        {
          symbol: "EPSBTC",
          price: "0.00000946",
        },
        {
          symbol: "EPSBUSD",
          price: "0.57230000",
        },
        {
          symbol: "EPSUSDT",
          price: "0.57230000",
        },
        {
          symbol: "AUTOBTC",
          price: "0.01933000",
        },
        {
          symbol: "AUTOBUSD",
          price: "1168.70000000",
        },
        {
          symbol: "AUTOUSDT",
          price: "1168.30000000",
        },
        {
          symbol: "TKOBTC",
          price: "0.00003341",
        },
        {
          symbol: "TKOBIDR",
          price: "28526.32",
        },
        {
          symbol: "TKOBUSD",
          price: "2.02000000",
        },
        {
          symbol: "TKOUSDT",
          price: "2.01500000",
        },
        {
          symbol: "PUNDIXETH",
          price: "0.00037600",
        },
        {
          symbol: "PUNDIXUSDT",
          price: "1.47700000",
        },
        {
          symbol: "BTTBRL",
          price: "0.02071000",
        },
        {
          symbol: "BTTEUR",
          price: "0.00311400",
        },
        {
          symbol: "HOTEUR",
          price: "0.00817600",
        },
        {
          symbol: "WINEUR",
          price: "0.00051890",
        },
        {
          symbol: "TLMBTC",
          price: "0.00000314",
        },
        {
          symbol: "TLMBUSD",
          price: "0.18990000",
        },
        {
          symbol: "TLMUSDT",
          price: "0.18990000",
        },
        {
          symbol: "BTGBUSD",
          price: "67.81000000",
        },
        {
          symbol: "BTGUSDT",
          price: "67.90000000",
        },
        {
          symbol: "HOTBUSD",
          price: "0.00949200",
        },
        {
          symbol: "BNBUAH",
          price: "12596.00000000",
        },
        {
          symbol: "ONTTRY",
          price: "9.31000000",
        },
        {
          symbol: "VETEUR",
          price: "0.10992000",
        },
        {
          symbol: "VETGBP",
          price: "0.09062000",
        },
        {
          symbol: "WINBRL",
          price: "0.00346000",
        },
        {
          symbol: "MIRBTC",
          price: "0.00005309",
        },
        {
          symbol: "MIRBUSD",
          price: "3.20600000",
        },
        {
          symbol: "MIRUSDT",
          price: "3.20700000",
        },
        {
          symbol: "BARBTC",
          price: "0.00026790",
        },
        {
          symbol: "BARBUSD",
          price: "16.25000000",
        },
        {
          symbol: "BARUSDT",
          price: "16.25000000",
        },
        {
          symbol: "FORTHBTC",
          price: "0.00025500",
        },
        {
          symbol: "FORTHBUSD",
          price: "15.40000000",
        },
        {
          symbol: "FORTHUSDT",
          price: "15.42000000",
        },
        {
          symbol: "CAKEGBP",
          price: "14.10000000",
        },
        {
          symbol: "DOGERUB",
          price: "16.77000000",
        },
        {
          symbol: "HOTBRL",
          price: "0.03750000",
        },
        {
          symbol: "WRXEUR",
          price: "1.10770000",
        },
        {
          symbol: "EZBTC",
          price: "0.00008300",
        },
        {
          symbol: "EZETH",
          price: "0.00127600",
        },
        {
          symbol: "BAKEUSDT",
          price: "2.02500000",
        },
        {
          symbol: "BURGERBUSD",
          price: "4.10400000",
        },
        {
          symbol: "BURGERUSDT",
          price: "4.11600000",
        },
        {
          symbol: "SLPBUSD",
          price: "0.06660000",
        },
        {
          symbol: "SLPUSDT",
          price: "0.06660000",
        },
        {
          symbol: "TRXAUD",
          price: "0.09810000",
        },
        {
          symbol: "TRXEUR",
          price: "0.08519000",
        },
        {
          symbol: "VETTRY",
          price: "1.23200000",
        },
        {
          symbol: "SHIBUSDT",
          price: "0.00002751",
        },
        {
          symbol: "SHIBBUSD",
          price: "0.00002750",
        },
        {
          symbol: "ICPBTC",
          price: "0.00073600",
        },
        {
          symbol: "ICPBNB",
          price: "0.09320000",
        },
        {
          symbol: "ICPBUSD",
          price: "44.48000000",
        },
        {
          symbol: "ICPUSDT",
          price: "44.48000000",
        },
        {
          symbol: "BTCGYEN",
          price: "4300000.00000000",
        },
        {
          symbol: "USDTGYEN",
          price: "85.00000000",
        },
        {
          symbol: "SHIBEUR",
          price: "0.00002369",
        },
        {
          symbol: "SHIBRUB",
          price: "0.00057730",
        },
        {
          symbol: "ETCEUR",
          price: "46.46000000",
        },
        {
          symbol: "ETCBRL",
          price: "310.20000000",
        },
        {
          symbol: "DOGEBIDR",
          price: "3366.00",
        },
        {
          symbol: "ARBTC",
          price: "0.00089160",
        },
        {
          symbol: "ARBNB",
          price: "0.11282000",
        },
        {
          symbol: "ARBUSD",
          price: "53.84000000",
        },
        {
          symbol: "ARUSDT",
          price: "53.89000000",
        },
        {
          symbol: "POLSBTC",
          price: "0.00005213",
        },
        {
          symbol: "POLSBNB",
          price: "0.00660100",
        },
        {
          symbol: "POLSBUSD",
          price: "3.15100000",
        },
        {
          symbol: "POLSUSDT",
          price: "3.15500000",
        },
        {
          symbol: "MDXBTC",
          price: "0.00001955",
        },
        {
          symbol: "MDXBNB",
          price: "0.00245200",
        },
        {
          symbol: "MDXBUSD",
          price: "1.18200000",
        },
        {
          symbol: "MDXUSDT",
          price: "1.18200000",
        },
        {
          symbol: "MASKBNB",
          price: "0.02046000",
        },
        {
          symbol: "MASKBUSD",
          price: "9.75000000",
        },
        {
          symbol: "MASKUSDT",
          price: "9.77500000",
        },
        {
          symbol: "LPTBTC",
          price: "0.00043760",
        },
        {
          symbol: "LPTBNB",
          price: "0.05563000",
        },
        {
          symbol: "LPTBUSD",
          price: "26.42000000",
        },
        {
          symbol: "LPTUSDT",
          price: "26.43000000",
        },
        {
          symbol: "ETHUAH",
          price: "103629.00000000",
        },
        {
          symbol: "MATICBRL",
          price: "8.63800000",
        },
        {
          symbol: "SOLEUR",
          price: "175.29000000",
        },
        {
          symbol: "SHIBBRL",
          price: "0.00015801",
        },
        {
          symbol: "AGIXBTC",
          price: "0.00000530",
        },
        {
          symbol: "ICPEUR",
          price: "38.35000000",
        },
        {
          symbol: "MATICGBP",
          price: "1.06730000",
        },
        {
          symbol: "SHIBTRY",
          price: "0.00026510",
        },
        {
          symbol: "MATICBIDR",
          price: "21232.00",
        },
        {
          symbol: "MATICRUB",
          price: "105.94000000",
        },
        {
          symbol: "NUBTC",
          price: "0.00001814",
        },
        {
          symbol: "NUBNB",
          price: "0.00230410",
        },
        {
          symbol: "NUBUSD",
          price: "1.09610000",
        },
        {
          symbol: "NUUSDT",
          price: "1.09780000",
        },
        {
          symbol: "XVGUSDT",
          price: "0.02387000",
        },
        {
          symbol: "RLCBUSD",
          price: "4.09700000",
        },
        {
          symbol: "CELRBUSD",
          price: "0.13528000",
        },
        {
          symbol: "ATMBUSD",
          price: "14.08000000",
        },
        {
          symbol: "ZENBUSD",
          price: "85.12000000",
        },
        {
          symbol: "FTMBUSD",
          price: "2.44800000",
        },
        {
          symbol: "THETABUSD",
          price: "6.50400000",
        },
        {
          symbol: "WINBUSD",
          price: "0.00060310",
        },
        {
          symbol: "KAVABUSD",
          price: "5.73400000",
        },
        {
          symbol: "XEMBUSD",
          price: "0.17160000",
        },
        {
          symbol: "ATABTC",
          price: "0.00001781",
        },
        {
          symbol: "ATABNB",
          price: "0.00225500",
        },
        {
          symbol: "ATABUSD",
          price: "1.07630000",
        },
        {
          symbol: "ATAUSDT",
          price: "1.07710000",
        },
        {
          symbol: "GTCBTC",
          price: "0.00017540",
        },
        {
          symbol: "GTCBNB",
          price: "0.02201000",
        },
        {
          symbol: "GTCBUSD",
          price: "10.56000000",
        },
        {
          symbol: "GTCUSDT",
          price: "10.57500000",
        },
        {
          symbol: "TORNBTC",
          price: "0.00107890",
        },
        {
          symbol: "TORNBNB",
          price: "0.13694000",
        },
        {
          symbol: "TORNBUSD",
          price: "65.46000000",
        },
        {
          symbol: "TORNUSDT",
          price: "65.38000000",
        },
        {
          symbol: "MATICTRY",
          price: "14.45800000",
        },
        {
          symbol: "ETCGBP",
          price: "38.36000000",
        },
        {
          symbol: "SOLGBP",
          price: "144.60000000",
        },
        {
          symbol: "BAKEBTC",
          price: "0.00003349",
        },
        {
          symbol: "COTIBUSD",
          price: "0.51830000",
        },
        {
          symbol: "KEEPBTC",
          price: "0.00001173",
        },
        {
          symbol: "KEEPBNB",
          price: "0.00148840",
        },
        {
          symbol: "KEEPBUSD",
          price: "0.71140000",
        },
        {
          symbol: "KEEPUSDT",
          price: "0.71070000",
        },
        {
          symbol: "SOLTRY",
          price: "1962.00000000",
        },
        {
          symbol: "RUNEGBP",
          price: "7.28700000",
        },
        {
          symbol: "SOLBRL",
          price: "1170.80000000",
        },
        {
          symbol: "SCBUSD",
          price: "0.01833000",
        },
        {
          symbol: "CHRBUSD",
          price: "0.36080000",
        },
        {
          symbol: "STMXBUSD",
          price: "0.03151000",
        },
        {
          symbol: "HNTBUSD",
          price: "20.99000000",
        },
        {
          symbol: "FTTBUSD",
          price: "62.60000000",
        },
        {
          symbol: "DOCKBUSD",
          price: "0.08291000",
        },
        {
          symbol: "ADABIDR",
          price: "30359.00",
        },
        {
          symbol: "ERNBNB",
          price: "0.02435000",
        },
        {
          symbol: "ERNBUSD",
          price: "11.60000000",
        },
        {
          symbol: "ERNUSDT",
          price: "11.62100000",
        },
        {
          symbol: "KLAYBTC",
          price: "0.00002637",
        },
        {
          symbol: "KLAYBNB",
          price: "0.00334800",
        },
        {
          symbol: "KLAYBUSD",
          price: "1.59800000",
        },
        {
          symbol: "KLAYUSDT",
          price: "1.59800000",
        },
        {
          symbol: "RUNEEUR",
          price: "8.80400000",
        },
        {
          symbol: "MATICAUD",
          price: "2.01700000",
        },
        {
          symbol: "DOTRUB",
          price: "3088.00000000",
        },
        {
          symbol: "UTKBUSD",
          price: "0.42440000",
        },
        {
          symbol: "IOTXBUSD",
          price: "0.06724000",
        },
        {
          symbol: "PHAUSDT",
          price: "0.75070000",
        },
        {
          symbol: "SOLRUB",
          price: "14376.00000000",
        },
        {
          symbol: "RUNEAUD",
          price: "13.78600000",
        },
        {
          symbol: "BUSDUAH",
          price: "26.36000000",
        },
        {
          symbol: "BONDBTC",
          price: "0.00045990",
        },
        {
          symbol: "BONDBNB",
          price: "0.05797000",
        },
        {
          symbol: "BONDBUSD",
          price: "27.95000000",
        },
        {
          symbol: "BONDUSDT",
          price: "27.91000000",
        },
        {
          symbol: "MLNBTC",
          price: "0.00229300",
        },
        {
          symbol: "MLNBNB",
          price: "0.29030000",
        },
        {
          symbol: "MLNBUSD",
          price: "139.70000000",
        },
        {
          symbol: "MLNUSDT",
          price: "139.30000000",
        },
        {
          symbol: "GRTTRY",
          price: "8.64000000",
        },
        {
          symbol: "CAKEBRL",
          price: "114.63000000",
        },
        {
          symbol: "ICPRUB",
          price: "4589.00000000",
        },
        {
          symbol: "DOTAUD",
          price: "58.70000000",
        },
        {
          symbol: "AAVEBRL",
          price: "1792.00000000",
        },
        {
          symbol: "EOSAUD",
          price: "6.55500000",
        },
        {
          symbol: "DEXEUSDT",
          price: "13.15000000",
        },
        {
          symbol: "LTOBUSD",
          price: "0.26840000",
        },
        {
          symbol: "ADXBUSD",
          price: "0.55000000",
        },
        {
          symbol: "QUICKBTC",
          price: "0.00678100",
        },
        {
          symbol: "QUICKBNB",
          price: "0.86200000",
        },
        {
          symbol: "QUICKBUSD",
          price: "410.20000000",
        },
        {
          symbol: "C98BNB",
          price: "0.00735400",
        },
        {
          symbol: "C98BTC",
          price: "0.00005814",
        },
        {
          symbol: "CLVBTC",
          price: "0.00002001",
        },
        {
          symbol: "CLVBNB",
          price: "0.00254100",
        },
        {
          symbol: "CLVBUSD",
          price: "1.21000000",
        },
        {
          symbol: "CLVUSDT",
          price: "1.21000000",
        },
        {
          symbol: "QNTBTC",
          price: "0.00466600",
        },
        {
          symbol: "QNTBNB",
          price: "0.59050000",
        },
        {
          symbol: "QNTBUSD",
          price: "281.40000000",
        },
        {
          symbol: "QNTUSDT",
          price: "282.30000000",
        },
        {
          symbol: "FLOWBTC",
          price: "0.00022140",
        },
        {
          symbol: "FLOWBNB",
          price: "0.02798000",
        },
        {
          symbol: "FLOWBUSD",
          price: "13.38000000",
        },
        {
          symbol: "FLOWUSDT",
          price: "13.38000000",
        },
        {
          symbol: "XECBUSD",
          price: "0.00018566",
        },
        {
          symbol: "AXSBRL",
          price: "703.00000000",
        },
        {
          symbol: "AXSAUD",
          price: "164.71000000",
        },
        {
          symbol: "TVKUSDT",
          price: "0.21110000",
        },
        {
          symbol: "MINABTC",
          price: "0.00007046",
        },
        {
          symbol: "MINABNB",
          price: "0.00892700",
        },
        {
          symbol: "MINABUSD",
          price: "4.26100000",
        },
        {
          symbol: "MINAUSDT",
          price: "4.26300000",
        },
        {
          symbol: "RAYBNB",
          price: "0.02217000",
        },
        {
          symbol: "RAYBUSD",
          price: "10.57100000",
        },
        {
          symbol: "RAYUSDT",
          price: "10.57700000",
        },
        {
          symbol: "FARMBTC",
          price: "0.00281100",
        },
        {
          symbol: "FARMBNB",
          price: "0.35830000",
        },
        {
          symbol: "FARMBUSD",
          price: "171.20000000",
        },
        {
          symbol: "FARMUSDT",
          price: "170.90000000",
        },
        {
          symbol: "ALPACABTC",
          price: "0.00001508",
        },
        {
          symbol: "ALPACABNB",
          price: "0.00191100",
        },
        {
          symbol: "ALPACABUSD",
          price: "0.91060000",
        },
        {
          symbol: "ALPACAUSDT",
          price: "0.91100000",
        },
        {
          symbol: "TLMTRY",
          price: "1.83000000",
        },
        {
          symbol: "QUICKUSDT",
          price: "410.20000000",
        },
        {
          symbol: "ORNBUSD",
          price: "8.04100000",
        },
        {
          symbol: "MBOXBTC",
          price: "0.00007140",
        },
        {
          symbol: "MBOXBNB",
          price: "0.00903100",
        },
        {
          symbol: "MBOXBUSD",
          price: "4.31200000",
        },
        {
          symbol: "MBOXUSDT",
          price: "4.31200000",
        },
        {
          symbol: "VGXBTC",
          price: "0.00003690",
        },
        {
          symbol: "VGXETH",
          price: "0.00056500",
        },
        {
          symbol: "FORUSDT",
          price: "0.08813000",
        },
        {
          symbol: "REQUSDT",
          price: "0.21950000",
        },
        {
          symbol: "GHSTUSDT",
          price: "1.79100000",
        },
        {
          symbol: "TRURUB",
          price: "38.80000000",
        },
        {
          symbol: "FISBRL",
          price: "10.43000000",
        },
        {
          symbol: "WAXPUSDT",
          price: "0.29450000",
        },
        {
          symbol: "WAXPBUSD",
          price: "0.29410000",
        },
        {
          symbol: "WAXPBNB",
          price: "0.00061710",
        },
        {
          symbol: "WAXPBTC",
          price: "0.00000487",
        },
        {
          symbol: "TRIBEBTC",
          price: "0.00001466",
        },
        {
          symbol: "TRIBEBNB",
          price: "0.00185100",
        },
        {
          symbol: "TRIBEBUSD",
          price: "0.88330000",
        },
        {
          symbol: "TRIBEUSDT",
          price: "0.88380000",
        },
        {
          symbol: "GNOUSDT",
          price: "358.70000000",
        },
        {
          symbol: "GNOBUSD",
          price: "358.70000000",
        },
        {
          symbol: "GNOBNB",
          price: "0.75170000",
        },
        {
          symbol: "GNOBTC",
          price: "0.00594700",
        },
        {
          symbol: "ARPATRY",
          price: "1.41440000",
        },
        {
          symbol: "PROMBTC",
          price: "0.00031440",
        },
        {
          symbol: "MTLBUSD",
          price: "3.15600000",
        },
        {
          symbol: "OGNBUSD",
          price: "0.83080000",
        },
        {
          symbol: "XECUSDT",
          price: "0.00018574",
        },
        {
          symbol: "C98BRL",
          price: "20.20000000",
        },
        {
          symbol: "SOLAUD",
          price: "273.04000000",
        },
        {
          symbol: "SUSHIBIDR",
          price: "151000.00",
        },
        {
          symbol: "XRPBIDR",
          price: "15426.00",
        },
        {
          symbol: "POLYBUSD",
          price: "0.69310000",
        },
        {
          symbol: "ELFUSDT",
          price: "0.57990000",
        },
        {
          symbol: "DYDXUSDT",
          price: "19.18100000",
        },
        {
          symbol: "DYDXBUSD",
          price: "19.17800000",
        },
        {
          symbol: "DYDXBNB",
          price: "0.04009500",
        },
        {
          symbol: "DYDXBTC",
          price: "0.00031726",
        },
        {
          symbol: "ELFBUSD",
          price: "0.57900000",
        },
        {
          symbol: "POLYUSDT",
          price: "0.69480000",
        },
        {
          symbol: "IDEXUSDT",
          price: "0.30165000",
        },
        {
          symbol: "VIDTUSDT",
          price: "1.07600000",
        },
        {
          symbol: "SOLBIDR",
          price: "2881660.00",
        },
        {
          symbol: "AXSBIDR",
          price: "1732115.00",
        },
        {
          symbol: "BTCUSDP",
          price: "60505.13000000",
        },
        {
          symbol: "ETHUSDP",
          price: "3934.95000000",
        },
        {
          symbol: "BNBUSDP",
          price: "480.01000000",
        },
        {
          symbol: "USDPBUSD",
          price: "0.99990000",
        },
        {
          symbol: "USDPUSDT",
          price: "1.00010000",
        },
        {
          symbol: "GALAUSDT",
          price: "0.08310000",
        },
        {
          symbol: "GALABUSD",
          price: "0.08316000",
        },
        {
          symbol: "GALABNB",
          price: "0.00017424",
        },
        {
          symbol: "GALABTC",
          price: "0.00000137",
        },
        {
          symbol: "FTMBIDR",
          price: "34638.00",
        },
        {
          symbol: "ALGOBIDR",
          price: "26000.00",
        },
        {
          symbol: "CAKEAUD",
          price: "26.80000000",
        },
        {
          symbol: "KSMAUD",
          price: "498.90000000",
        },
        {
          symbol: "WAVESRUB",
          price: "1944.75000000",
        },
        {
          symbol: "SUNBUSD",
          price: "0.03138000",
        },
        {
          symbol: "ILVUSDT",
          price: "775.40000000",
        },
        {
          symbol: "ILVBUSD",
          price: "774.80000000",
        },
        {
          symbol: "ILVBNB",
          price: "1.62100000",
        },
        {
          symbol: "ILVBTC",
          price: "0.01279000",
        },
        {
          symbol: "RENBUSD",
          price: "1.10010000",
        },
        {
          symbol: "YGGUSDT",
          price: "6.28100000",
        },
        {
          symbol: "YGGBUSD",
          price: "6.28000000",
        },
        {
          symbol: "YGGBNB",
          price: "0.01310000",
        },
        {
          symbol: "YGGBTC",
          price: "0.00010400",
        },
        {
          symbol: "STXBUSD",
          price: "2.17700000",
        },
        {
          symbol: "SYSUSDT",
          price: "0.35950000",
        },
        {
          symbol: "DFUSDT",
          price: "0.21010000",
        },
        {
          symbol: "SOLUSDC",
          price: "203.22000000",
        },
        {
          symbol: "ARPARUB",
          price: "10.39000000",
        },
        {
          symbol: "LTCUAH",
          price: "5054.00000000",
        },
        {
          symbol: "FETBUSD",
          price: "0.71810000",
        },
        {
          symbol: "ARPABUSD",
          price: "0.14668000",
        },
        {
          symbol: "LSKBUSD",
          price: "3.59700000",
        },
        {
          symbol: "AVAXBIDR",
          price: "934570.00",
        },
        {
          symbol: "ALICEBIDR",
          price: "167725.00",
        },
        {
          symbol: "FIDAUSDT",
          price: "8.21300000",
        },
        {
          symbol: "FIDABUSD",
          price: "8.20000000",
        },
        {
          symbol: "FIDABNB",
          price: "0.01726000",
        },
        {
          symbol: "FIDABTC",
          price: "0.00013580",
        },
        {
          symbol: "DENTBUSD",
          price: "0.00595400",
        },
        {
          symbol: "FRONTUSDT",
          price: "1.26600000",
        },
        {
          symbol: "CVPUSDT",
          price: "1.82200000",
        },
        {
          symbol: "AGLDBTC",
          price: "0.00005268",
        },
        {
          symbol: "AGLDBNB",
          price: "0.00665400",
        },
        {
          symbol: "AGLDBUSD",
          price: "3.17700000",
        },
        {
          symbol: "AGLDUSDT",
          price: "3.18200000",
        },
        {
          symbol: "RADBTC",
          price: "0.00020940",
        },
        {
          symbol: "RADBNB",
          price: "0.02637000",
        },
        {
          symbol: "RADBUSD",
          price: "12.68300000",
        },
        {
          symbol: "RADUSDT",
          price: "12.66700000",
        },
        {
          symbol: "UNIAUD",
          price: "34.25000000",
        },
        {
          symbol: "HIVEBUSD",
          price: "0.75360000",
        },
        {
          symbol: "STPTBUSD",
          price: "0.14887000",
        },
        {
          symbol: "BETABTC",
          price: "0.00003206",
        },
        {
          symbol: "BETABNB",
          price: "0.00406370",
        },
        {
          symbol: "BETABUSD",
          price: "1.93964000",
        },
        {
          symbol: "BETAUSDT",
          price: "1.94000000",
        },
        {
          symbol: "SHIBAUD",
          price: "0.00003700",
        },
        {
          symbol: "RAREBTC",
          price: "0.00003312",
        },
        {
          symbol: "RAREBNB",
          price: "0.00418900",
        },
        {
          symbol: "RAREBUSD",
          price: "2.00000000",
        },
        {
          symbol: "RAREUSDT",
          price: "2.00000000",
        },
        {
          symbol: "AVAXBRL",
          price: "377.60000000",
        },
        {
          symbol: "AVAXAUD",
          price: "87.89000000",
        },
        {
          symbol: "LUNAAUD",
          price: "57.25000000",
        },
        {
          symbol: "TROYBUSD",
          price: "0.01799300",
        },
        {
          symbol: "AXSETH",
          price: "0.03121000",
        },
        {
          symbol: "FTMETH",
          price: "0.00062590",
        },
        {
          symbol: "SOLETH",
          price: "0.05186000",
        },
        {
          symbol: "SSVBTC",
          price: "0.00024690",
        },
        {
          symbol: "SSVETH",
          price: "0.00378800",
        },
        {
          symbol: "LAZIOTRY",
          price: "189.42600000",
        },
        {
          symbol: "LAZIOEUR",
          price: "16.93280000",
        },
        {
          symbol: "LAZIOBTC",
          price: "0.00032632",
        },
        {
          symbol: "LAZIOUSDT",
          price: "19.71260000",
        },
        {
          symbol: "CHESSBTC",
          price: "0.00008299",
        },
        {
          symbol: "CHESSBNB",
          price: "0.01053700",
        },
        {
          symbol: "CHESSBUSD",
          price: "5.02300000",
        },
        {
          symbol: "CHESSUSDT",
          price: "5.01900000",
        },
        {
          symbol: "FTMAUD",
          price: "3.27710000",
        },
        {
          symbol: "FTMBRL",
          price: "14.16000000",
        },
        {
          symbol: "SCRTBUSD",
          price: "5.91800000",
        },
      ])
    )
  ),
];
