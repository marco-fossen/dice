input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Double))
    numero = randint(1, 6)
    if (numero == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (numero == 2) {
        basic.showLeds(`
            . . . . .
            # # . . .
            # # . # #
            . . . # #
            . . . . .
            `)
    }
    if (numero == 3) {
        basic.showLeds(`
            . . . # #
            . . . # #
            # # . . .
            # # . # #
            . . . # #
            `)
    }
    if (numero == 4) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # # . # #
            # # . # #
            `)
    }
    if (numero == 5) {
        basic.showLeds(`
            # . . . #
            # . # . #
            . . # . .
            # . . . #
            # . . . #
            `)
    }
    if (numero == 6) {
        basic.showLeds(`
            # . # . #
            # . # . #
            . . . . .
            # . # . #
            # . # . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(numero)
})
let numero = 0
numero = 0
basic.showNumber(numero)
basic.forever(function () {
	
})
