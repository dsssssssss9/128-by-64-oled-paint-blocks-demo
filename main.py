def on_button_pressed_a():
    kitronik_VIEW128x64.clear()
input.on_button_pressed(Button.A, on_button_pressed_a)

kitronik_VIEW128x64.clear()
kitronik_VIEW128x64.write_image_oled(None, 0, 0)
kitronik_VIEW128x64.refresh()
basic.pause(1000)
kitronik_VIEW128x64.clear()
kitronik_VIEW128x64.write_image_double(kitronik_VIEW128x64.i_image(IconNames.SQUARE), 0, 0)
kitronik_VIEW128x64.refresh()
list2 = [images.icon_image(IconNames.HEART),
    images.icon_image(IconNames.FABULOUS),
    images.icon_image(IconNames.RABBIT)]

def on_forever():
    pass
basic.forever(on_forever)
