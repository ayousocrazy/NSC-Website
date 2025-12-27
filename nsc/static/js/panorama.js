pannellum.viewer('panorama', {
    default: {
        firstScene: "mainGround",
        sceneFadeDuration: 1000
    },
    scenes: {
        "mainGround": {
            title: "Main Ground",
            type: "equirectangular",
            panorama: PANORAMAS.mainGround,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 5,
                    type: "scene",
                    text: "Lobby",
                    sceneId: "lobby"
                },
                {
                    pitch: 0,
                    yaw: 80,
                    type: "scene",
                    text: "Pathway 1",
                    sceneId: "pathway1"
                }
            ]
        },
        "lobby": {
            title: "Entrance Hall",
            type: "equirectangular",
            panorama: PANORAMAS.lobby,
            hotSpots: [
                {
                    pitch: -10,
                    yaw: 180,
                    type: "scene",
                    text: "Main Ground",
                    sceneId: "mainGround"
                },
                {
                    pitch: 5,
                    yaw: 5,
                    type: "scene",
                    text: "Stairs",
                    sceneId: "stairs"
                }
            ]
        },
        "pathway1": {
            title: "Pathway 1",
            type: "equirectangular",
            panorama: PANORAMAS.pathway1,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 0,
                    type: "scene",
                    text: "Study Room",
                    sceneId: "studyRoom"
                },
                {
                    pitch: -10,
                    yaw: 170,
                    type: "scene",
                    text: "Main Ground",
                    sceneId: "mainGround"
                }
            ]
        },
        "studyRoom": {
            title: "Study Room",
            type: "equirectangular",
            panorama: PANORAMAS.studyRoom,
            hotSpots: [
                {
                    pitch: -30,
                    yaw: 180,
                    type: "scene",
                    text: "Pathway 1",
                    sceneId: "pathway1"
                }
            ]
        },
        "greenRoom": {
            title: "Recreational Room",
            type: "equirectangular",
            panorama: PANORAMAS.greenRoom,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 180,
                    type: "scene",
                    text: "Main Ground",
                    sceneId: "main-ground"
                }
            ]
        },
        "stairs": {
            title: "Entry Stairs",
            type: "equirectangular",
            panorama: PANORAMAS.stairs,
            hotSpots: [
                {
                    pitch: -20,
                    yaw: 0,
                    type: "scene",
                    text: "Lobby",
                    sceneId: "lobby"
                },
                {
                    pitch: 0,
                    yaw: 0,
                    type: "scene",
                    text: "Balcony View",
                    sceneId: "balconyView"
                },
                {
                    pitch: 10,
                    yaw: 60,
                    type: "scene",
                    text: "Corridor Right",
                    sceneId: "corridor1A"
                },
                {
                    pitch: 5,
                    yaw: -60,
                    type: "scene",
                    text: "Corridor Left",
                    sceneId: "corridor1B"
                }
            ]
        },
        "balconyView": {
            title: "Balcony View",
            type: "equirectangular",
            panorama: PANORAMAS.balconyView,
            hotSpots: [
                {
                    pitch: -15,
                    yaw: 5,
                    type: "scene",
                    text: "Stairs",
                    sceneId: "stairs"
                },
                {
                    pitch: -5,
                    yaw: 40,
                    type: "scene",
                    text: "Corridor Left",
                    sceneId: "corridor1B"
                },
                {
                    pitch: -5,
                    yaw: -40,
                    type: "scene",
                    text: "Corridor Right",
                    sceneId: "corridor1A"
                }
            ]
        },
        "corridor1A": {
            title: "Floor 1 Corridor Right",
            type: "equirectangular",
            panorama: PANORAMAS.corridor1A,
            hotSpots: [
                {
                    pitch: -10,
                    yaw: 70,
                    type: "scene",
                    text: "Stairs",
                    sceneId: "stairs"
                },
                {
                    pitch: 0,
                    yaw: 140,
                    type: "scene",
                    text: "Balcony View",
                    sceneId: "balconyView"
                },
                {
                    pitch: -15,
                    yaw: -170,
                    type: "scene",
                    text: "Room 105",
                    sceneId: "room105"
                },
                {
                    pitch: 5,
                    yaw: 5,
                    type: "scene",
                    text: "Floor 2",
                    sceneId: "floor2"
                }
            ]
        },
        "corridor1B": {
            title: "Floor 1 Corridor Left",
            type: "equirectangular",
            panorama: PANORAMAS.corridor1B,
            hotSpots: [
                {
                    pitch: -20,
                    yaw: -140,
                    type: "scene",
                    text: "Stairs",
                    sceneId: "stairs"
                },
                {
                    pitch: -10,
                    yaw: 130,
                    type: "scene",
                    text: "Balcony View",
                    sceneId: "balconyView"
                },
                {
                    pitch: -5,
                    yaw: 18,
                    type: "scene",
                    text: "Room 102",
                    sceneId: "room102"
                }
            ]
        },
        "corridor2": {
            title: "Floor 2 Corridor",
            type: "equirectangular",
            panorama: PANORAMAS.corridor2,
            hotSpots: [
                {
                    pitch: -5,
                    yaw: 5,
                    type: "scene",
                    text: "Cafeteria",
                    sceneId: "cafeteria"
                },
                {
                    pitch: -5,
                    yaw: 180,
                    type: "scene",
                    text: "Floor 2 Hallway",
                    sceneId: "floor2"
                },
                {
                    pitch: -5,
                    yaw: 90,
                    type: "scene",
                    text: "Room 204",
                    sceneId: "room203"
                },
            ]
        },
        "corridor3": {
            title: "Floor 3 Corridor",
            type: "equirectangular",
            panorama: PANORAMAS.corridor3,
            hotSpots: [
                {
                    pitch: -5,
                    yaw: 175,
                    type: "scene",
                    text: "Floor 3 Hallway",
                    sceneId: "floor3"
                },
                {
                    pitch: -15,
                    yaw: 80,
                    type: "scene",
                    text: "Room 303",
                    sceneId: "room303"
                },
            ]
        },
        "corridor4": {
            title: "Floor 4 Corridor",
            type: "equirectangular",
            panorama: PANORAMAS.corridor4,
            hotSpots: [
                {
                    pitch: -15,
                    yaw: 160,
                    type: "scene",
                    text: "Floor 3",
                    sceneId: "floor4"
                },
                {
                    pitch: -10,
                    yaw: 70,
                    type: "scene",
                    text: "Room 402",
                    sceneId: "room402"
                },
            ]
        },
        "floor2": {
            title: "Floor 2",
            type: "equirectangular",
            panorama: PANORAMAS.floor2,
            hotSpots: [
                {
                    pitch: -15,
                    yaw: -15,
                    type: "scene",
                    text: "Floor 1",
                    sceneId: "corridor1A"
                },
                {
                    pitch: -10,
                    yaw: 100,
                    type: "scene",
                    text: "Corridor",
                    sceneId: "corridor2"
                },
                {
                    pitch: 5,
                    yaw: 5,
                    type: "scene",
                    text: "Floor 3",
                    sceneId: "floor3"
                }
            ]
        },
        "floor3": {
            title: "Floor 3",
            type: "equirectangular",
            panorama: PANORAMAS.floor3,
            hotSpots: [
                {
                    pitch: -15,
                    yaw: -15,
                    type: "scene",
                    text: "Floor 2",
                    sceneId: "floor2"
                },
                {
                    pitch: -10,
                    yaw: -170,
                    type: "scene",
                    text: "Room 301",
                    sceneId: "room301"
                },
                {
                    pitch: -5,
                    yaw: 90,
                    type: "scene",
                    text: "Corridor",
                    sceneId: "corridor3"
                },
                {
                    pitch: 5,
                    yaw: 5,
                    type: "scene",
                    text: "Floor 4",
                    sceneId: "floor4"
                }
            ]
        },
        "floor4": {
            title: "Floor 4",
            type: "equirectangular",
            panorama: PANORAMAS.floor4,
            hotSpots: [
                {
                    pitch: 5,
                    yaw: 5,
                    type: "scene",
                    text: "Floor 4 Corridor",
                    sceneId: "corridor4"
                },
                {
                    pitch: -30,
                    yaw: -30,
                    type: "scene",
                    text: "Floor 3 Hallway",
                    sceneId: "floor3"
                }
            ]
        },
        "room102": {
            title: "Room 102",
            type: "equirectangular",
            panorama: PANORAMAS.room102,
            hotSpots: [
                {
                    pitch: -5,
                    yaw: 5,
                    type: "scene",
                    text: "Corridor",
                    sceneId: "corridor1B"
                }
            ]
        },
        "room105": {
            title: "Room 105",
            type: "equirectangular",
            panorama: PANORAMAS.room105,
            hotSpots: [
                {
                    pitch: -15,
                    yaw: 15,
                    type: "scene",
                    text: "Corridor",
                    sceneId: "corridor1A"
                }
            ]
        },
        "room203": {
            title: "Room 203",
            type: "equirectangular",
            panorama: PANORAMAS.room203,
            hotSpots: [
                {
                    pitch: -45,
                    yaw: 180,
                    type: "scene",
                    text: "Corridor",
                    sceneId: "corridor2"
                }
            ]
        },
        "room301": {
            title: "Room 301",
            type: "equirectangular",
            panorama: PANORAMAS.room301,
            hotSpots: [
                {
                    pitch: -20,
                    yaw: 90,
                    type: "scene",
                    text: "Floor 3 Hallway",
                    sceneId: "floor3"
                }
            ]
        },
        "room303": {
            title: "Room 303",
            type: "equirectangular",
            panorama: PANORAMAS.room303,
            hotSpots: [
                {
                    pitch: -20,
                    yaw: -80,
                    type: "scene",
                    text: "Corridor",
                    sceneId: "corridor3"
                }
            ]
        },
        "room402": {
            title: "Room 402",
            type: "equirectangular",
            panorama: PANORAMAS.room402,
            hotSpots: [
                {
                    pitch: -20,
                    yaw: -100,
                    type: "scene",
                    text: "Corridor",
                    sceneId: "corridor4"
                }
            ]
        },
        "cafeteria": {
            title: "Cafeteria",
            type: "equirectangular",
            panorama: PANORAMAS.cafeteria,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 60,
                    type: "scene",
                    text: "Floor 2 Corridor",
                    sceneId: "corridor2"
                }
            ]
        },
    }
});
