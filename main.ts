basic.forever(function () {
    if (input.temperature() > 22) {
        basic.showString("CALOR")
    } else {
        basic.showString("FRED")
    }
})
basic.forever(function () {
    if (input.lightLevel() > 200) {
        music.play(music.stringPlayable("A B C5 B C5 B C5 C5 ", 120), music.PlaybackMode.UntilDone)
        if (input.lightLevel() < 50) {
            music.play(music.stringPlayable("E F E F F E F F ", 120), music.PlaybackMode.UntilDone)
        } else {
        	
        }
    }
})
