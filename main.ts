input.onButtonPressed(Button.A, function () {
    kitronik_VIEW128x64.clear()
    for (let index = 0; index <= list.length - 1; index++) {
        kitronik_VIEW128x64.writeImageOLED(list[index], 0, 0)
        kitronik_VIEW128x64.refresh()
        basic.pause(1000)
        kitronik_VIEW128x64.clear()
        kitronik_VIEW128x64.writeImageDouble(list[index], 0, 0)
        kitronik_VIEW128x64.refresh()
        basic.pause(1000)
        kitronik_VIEW128x64.clear()
    }
})
input.onButtonPressed(Button.AB, function () {
    kitronik_VIEW128x64.clear()
    basic.pause(1000)
    kitronik_VIEW128x64.writeImageDouble(kitronik_VIEW128x64.matrix8x8(`
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        . . . # # . . .
        . . . # # . . .
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        `), 32, 16)
    kitronik_VIEW128x64.refresh()
    basic.pause(1000)
    kitronik_VIEW128x64.clear()
    kitronik_VIEW128x64.writeImageDouble(kitronik_VIEW128x64.matrix8x8(`
        . . . . . . . .
        . . . . . . . .
        . . # # # # . .
        . . # . . # . .
        . . # . . # . .
        . . # # # # . .
        . . . . . . . .
        . . . . . . . .
        `), 32, 16)
    kitronik_VIEW128x64.refresh()
    basic.pause(1000)
    kitronik_VIEW128x64.clear()
    kitronik_VIEW128x64.writeImageDouble(kitronik_VIEW128x64.matrix8x8(`
        . . . . . . . .
        . # # # # # # .
        . # . . . . # .
        . # . . . . # .
        . # . . . . # .
        . # . . . . # .
        . # # # # # # .
        . . . . . . . .
        `), 32, 16)
    kitronik_VIEW128x64.refresh()
    basic.pause(1000)
    kitronik_VIEW128x64.clear()
    kitronik_VIEW128x64.writeImageDouble(kitronik_VIEW128x64.matrix8x8(`
        # # # # # # # #
        # . . . . . . #
        # . . . . . . #
        # . . . . . . #
        # . . . . . . #
        # . . . . . . #
        # . . . . . . #
        # # # # # # # #
        `), 32, 16)
    kitronik_VIEW128x64.refresh()
    basic.pause(1000)
})
function Intro () {
    kitronik_VIEW128x64.clear()
    kitronik_VIEW128x64.refresh()
    basic.pause(1000)
    kitronik_VIEW128x64.show(kitronik_VIEW128x64.OLEDstring("Welcome Frank!"), 1)
    kitronik_VIEW128x64.refresh()
    basic.pause(1000)
    kitronik_VIEW128x64.refresh()
    kitronik_VIEW128x64.show(kitronik_VIEW128x64.OLEDstring("This will demo paint Blocks"), 3)
    kitronik_VIEW128x64.refresh()
    basic.pause(1000)
    kitronik_VIEW128x64.show(kitronik_VIEW128x64.OLEDstring("Press A to display in-built icons"), 5)
    kitronik_VIEW128x64.refresh()
    basic.pause(1000)
    kitronik_VIEW128x64.show(kitronik_VIEW128x64.OLEDstring("Press B to display Custome Shapes"), 7)
    kitronik_VIEW128x64.refresh()
    basic.pause(1000)
}
input.onButtonPressed(Button.B, function () {
    kitronik_VIEW128x64.clear()
    basic.pause(1000)
    kitronik_VIEW128x64.writeImageOLED(kitronik_VIEW128x64.matrix8x8(`
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        . . . # # . . .
        . . . # # . . .
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        `), 64, 32)
    kitronik_VIEW128x64.refresh()
    basic.pause(1000)
    kitronik_VIEW128x64.clear()
    kitronik_VIEW128x64.writeImageOLED(kitronik_VIEW128x64.matrix8x8(`
        . . . . . . . .
        . . . . . . . .
        . . # # # # . .
        . . # . . # . .
        . . # . . # . .
        . . # # # # . .
        . . . . . . . .
        . . . . . . . .
        `), 64, 32)
    kitronik_VIEW128x64.refresh()
    basic.pause(1000)
    kitronik_VIEW128x64.clear()
    kitronik_VIEW128x64.writeImageOLED(kitronik_VIEW128x64.matrix8x8(`
        . . . . . . . .
        . # # # # # # .
        . # . . . . # .
        . # . . . . # .
        . # . . . . # .
        . # . . . . # .
        . # # # # # # .
        . . . . . . . .
        `), 64, 32)
    kitronik_VIEW128x64.refresh()
    basic.pause(1000)
    kitronik_VIEW128x64.clear()
    kitronik_VIEW128x64.writeImageOLED(kitronik_VIEW128x64.matrix8x8(`
        # # # # # # # #
        # . . . . . . #
        # . . . . . . #
        # . . . . . . #
        # . . . . . . #
        # . . . . . . #
        # . . . . . . #
        # # # # # # # #
        `), 64, 32)
    kitronik_VIEW128x64.refresh()
    basic.pause(1000)
})
let list: Image[] = []
Intro()
list = [
kitronik_VIEW128x64.iImage(IconNames.Heart),
images.iconImage(IconNames.SmallHeart),
kitronik_VIEW128x64.iImage(IconNames.Yes),
images.iconImage(IconNames.No),
kitronik_VIEW128x64.iImage(IconNames.Happy),
images.iconImage(IconNames.Sad),
kitronik_VIEW128x64.iImage(IconNames.Confused),
images.iconImage(IconNames.Angry),
kitronik_VIEW128x64.iImage(IconNames.Silly),
images.iconImage(IconNames.Surprised),
images.iconImage(IconNames.Silly),
images.iconImage(IconNames.Fabulous),
images.iconImage(IconNames.Meh),
images.iconImage(IconNames.TShirt),
images.iconImage(IconNames.Rollerskate),
images.iconImage(IconNames.Duck),
images.iconImage(IconNames.House),
images.iconImage(IconNames.Tortoise),
images.iconImage(IconNames.Butterfly),
images.iconImage(IconNames.StickFigure),
images.iconImage(IconNames.Ghost),
images.iconImage(IconNames.StickFigure),
images.iconImage(IconNames.Ghost),
images.iconImage(IconNames.Sword),
images.iconImage(IconNames.Giraffe),
images.iconImage(IconNames.Skull),
images.iconImage(IconNames.Umbrella),
images.iconImage(IconNames.Snake),
images.iconImage(IconNames.Rabbit),
images.iconImage(IconNames.Cow),
images.iconImage(IconNames.QuarterNote),
images.iconImage(IconNames.EigthNote),
images.iconImage(IconNames.Pitchfork),
images.iconImage(IconNames.Target),
images.iconImage(IconNames.Triangle),
images.iconImage(IconNames.LeftTriangle),
images.iconImage(IconNames.Chessboard),
images.iconImage(IconNames.Diamond),
images.iconImage(IconNames.SmallDiamond),
images.iconImage(IconNames.Scissors),
images.iconImage(IconNames.SmallSquare),
images.iconImage(IconNames.Square)
]
