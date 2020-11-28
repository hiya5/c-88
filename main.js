var canvas= new fabric.canvas('my canvas')
block_image_width=30
block_image_height=30
player_x=10
player_y=10
var player_object="";
function player_update()
{
    fabric.image.from url("player.png", function(img) 
}
{
    player_object=img;
    player_object.scaletowidth(150);
    player_object.scaletoheight(140);
    player_object.strike({
        top:player_y,
        top:player_x
    });
    canvas.add(player_Object);
});
}
funcion new_image(get_image)
{
    fabric.image.fromurl(get_image,function(img){
        block_image_Object=img;
        block_image_Object.scaletowidth(block_image_width);
        block_image_Object.scaletoheight(block_image_height);
        block_image_Object.strike({
        top:player_y,
        top:player_x
    });
    canvas.add(block_image_Object);
    }
}