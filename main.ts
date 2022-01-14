let Pas = 0
let Test_Chrono = 0
let Temps_de_référence_B = 0
let Temps_de_référence_A = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    Pas = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    Test_Chrono = 0
})
input.onGesture(Gesture.Shake, function () {
    Pas += 1
    Temps_de_référence_B = input.runningTime()
    // <ou> que le temps d'un pas (à déterminer préalablement)
    if (Temps_de_référence_B - Temps_de_référence_A < 0) {
        music.setVolume(255)
        music.playTone(659, music.beat(BeatFraction.Whole))
    } else if (Temps_de_référence_B - Temps_de_référence_A > 0) {
        music.setVolume(255)
        music.playTone(659, music.beat(BeatFraction.Whole))
    }
    Temps_de_référence_A = input.runningTime()
})
