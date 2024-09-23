var APP_DATA = {
  "scenes": [
    {
      "id": "0-front",
      "name": "Front",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.6973005354775275,
        "pitch": -0.19324118369685372,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.5393646609661404,
          "pitch": -0.09865415449187864,
          "rotation": 0,
          "target": "1-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.494524772984704,
        "pitch": 0.17139681873046797,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -1.5336407330304382,
          "pitch": 0.38321093406794127,
          "rotation": 0.7853981633974483,
          "target": "2-g-floor"
        },
        {
          "yaw": 1.5154590905108538,
          "pitch": 0.783338853386768,
          "rotation": 0,
          "target": "0-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-g-floor",
      "name": "G Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.4080869556364028,
        "pitch": 0.2212803123978464,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -3.043197395841336,
          "pitch": 0.9268942631963437,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": -0.6500551386960804,
          "pitch": 0.6880116402627827,
          "rotation": 0,
          "target": "3-living-area"
        },
        {
          "yaw": 0.01498863901380787,
          "pitch": 0.4736642635319033,
          "rotation": 0,
          "target": "1-entrance"
        },
        {
          "yaw": -1.8717370657279737,
          "pitch": 0.5986872875991214,
          "rotation": 0,
          "target": "12-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-area",
      "name": "Living Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.3002747423119647,
        "pitch": 0.33306298849983307,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.0741874021893523,
          "pitch": 0.4740456186542996,
          "rotation": 0,
          "target": "2-g-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.7582763824699477,
        "pitch": 0.26990519762623855,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 3.012439217809349,
          "pitch": 0.5772546008287609,
          "rotation": 0.7853981633974483,
          "target": "5-utility-area"
        },
        {
          "yaw": 1.6051845613578637,
          "pitch": 0.582044491894333,
          "rotation": 5.497787143782138,
          "target": "7-to-basement"
        },
        {
          "yaw": -0.1584811399264936,
          "pitch": 0.4921254082806108,
          "rotation": 0.7853981633974483,
          "target": "2-g-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-utility-area",
      "name": "Utility Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.924662367765464,
        "pitch": 0.7898970246003589,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.963605570445365,
          "pitch": 0.645916865001837,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": 0.21399836581976395,
          "pitch": 0.5953689002251412,
          "rotation": 0.7853981633974483,
          "target": "6-backyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-backyard",
      "name": "Backyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.18815753582004469,
        "pitch": -0.2985012452491027,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -0.2832028749935276,
          "pitch": 0.2738826155180121,
          "rotation": 0.7853981633974483,
          "target": "5-utility-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-to-basement",
      "name": "To Basement",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.0569960926548578,
        "pitch": 0.5837041851491218,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -0.30340929765838354,
          "pitch": 0.9461284614127585,
          "rotation": 0.7853981633974483,
          "target": "4-kitchen"
        },
        {
          "yaw": -1.3723991260397952,
          "pitch": 0.9365284931203881,
          "rotation": 0,
          "target": "8-basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-basement",
      "name": "Basement",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.8479388651349069,
        "pitch": 0.43416492279405183,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.4543211699828351,
          "pitch": 1.0039358523335231,
          "rotation": 0,
          "target": "10-bedroom-1"
        },
        {
          "yaw": -1.649275236222385,
          "pitch": 0.36291343810398935,
          "rotation": 0,
          "target": "9-bathroom"
        },
        {
          "yaw": -1.2580480977569728,
          "pitch": 0.7106157642611262,
          "rotation": 0.7853981633974483,
          "target": "11-bedroom-2"
        },
        {
          "yaw": -0.046666941381248606,
          "pitch": 0.345838363046747,
          "rotation": 0,
          "target": "7-to-basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.4143252816581828,
        "pitch": 0.4180475056205797,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -2.762261605102969,
          "pitch": 0.6550680553387096,
          "rotation": 0,
          "target": "8-basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.6580982811204148,
        "pitch": 0.3495123935585287,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 2.985372671219894,
          "pitch": 0.49287287638662214,
          "rotation": 0,
          "target": "8-basement"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.22854431082616244,
          "pitch": 0.19935513810407635,
          "title": "Front Exit",
          "text": "Text"
        }
      ]
    },
    {
      "id": "11-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.0463446504504539,
        "pitch": 0.593743085217449,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 2.6315539371690697,
          "pitch": 0.715489219972655,
          "rotation": 0,
          "target": "8-basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-i-floor",
      "name": "I Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.8827228795595818,
        "pitch": 0.6708640190309829,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 0.9800454947794819,
          "pitch": 1.027769854647545,
          "rotation": 5.497787143782138,
          "target": "13-bedroom-3"
        },
        {
          "yaw": 2.7055191480734218,
          "pitch": 0.6353026646739242,
          "rotation": 0.7853981633974483,
          "target": "17-bedroom-5"
        },
        {
          "yaw": 2.2312112781212985,
          "pitch": 0.345300569109277,
          "rotation": 18.84955592153877,
          "target": "14-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-bedroom-3",
      "name": "Bedroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.4253818604609467,
        "pitch": 0.6088480696818692,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -1.4053180699206411,
          "pitch": 0.6036465058533267,
          "rotation": 0,
          "target": "12-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-i-floor",
      "name": "I Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.058376474619429075,
        "pitch": 0.9974029692522084,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -0.1429504540909825,
          "pitch": 0.42271848697543213,
          "rotation": 0.7853981633974483,
          "target": "12-i-floor"
        },
        {
          "yaw": -1.777519172758808,
          "pitch": 0.41016929602669805,
          "rotation": 0,
          "target": "15-toilet--shower-area"
        },
        {
          "yaw": 0.6197215515821632,
          "pitch": 0.7769771234192397,
          "rotation": 0,
          "target": "18-ii-floor"
        },
        {
          "yaw": 1.2998924733630393,
          "pitch": 0.8741688872164595,
          "rotation": 13.351768777756625,
          "target": "16-bedroom-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-toilet--shower-area",
      "name": "Toilet & Shower Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.9934909327002064,
        "pitch": 0.6985157532854771,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.5187347750389142,
          "pitch": 0.2597002765887879,
          "rotation": 0,
          "target": "14-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-bedroom-4",
      "name": "Bedroom 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.7328986080067388,
        "pitch": 0.6130840586016415,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -1.9325525118082716,
          "pitch": 0.5332422712607414,
          "rotation": 0,
          "target": "14-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-bedroom-5",
      "name": "Bedroom 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.8643893647772529,
        "pitch": 0.6355223099320213,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -1.9709884337923747,
          "pitch": 0.7757137964221759,
          "rotation": 0,
          "target": "12-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-ii-floor",
      "name": "II Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 3.056476448499014,
        "pitch": 1.017225188251908,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -2.2666177712931255,
          "pitch": 1.1326319706790375,
          "rotation": 0.7853981633974483,
          "target": "20-bedroom-7"
        },
        {
          "yaw": 2.2404290194383556,
          "pitch": 1.1853968233370509,
          "rotation": 5.497787143782138,
          "target": "19-bedroom-6"
        },
        {
          "yaw": 3.11212389106816,
          "pitch": 0.9759586588814759,
          "rotation": 0,
          "target": "14-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-bedroom-6",
      "name": "Bedroom 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.3997420342004148,
        "pitch": 0.5707367641044936,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -0.6195959335813264,
          "pitch": 0.569582453239299,
          "rotation": 0,
          "target": "18-ii-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-bedroom-7",
      "name": "Bedroom 7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.060118878932375,
        "pitch": 0.12577745905199578,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -2.4788472794978844,
          "pitch": 0.4853164388467057,
          "rotation": 0.7853981633974483,
          "target": "18-ii-floor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "84 Queens Road",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
