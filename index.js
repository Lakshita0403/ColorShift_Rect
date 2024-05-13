var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function(details)
{
    var rectangle_location = rect.getBoundingClientRect() ;

        // console.log(details.clientX- rectangle_location.left);

     var inside_rectangle_location = details.clientX- rectangle_location.left;

     if(inside_rectangle_location<rectangle_location.width/2)
        {
            var redcolor = gsap.utils.mapRange(
                0,rectangle_location.width/2,255,0,inside_rectangle_location
            );

            gsap.to(rect,{
                backgroundColor:`rgb(${redcolor},0,0)`,
                ease:Power4,
            });
        }
        else{

            var bluecolor = gsap.utils.mapRange(
                rectangle_location.width/2,rectangle_location.width,0,255,inside_rectangle_location
            );

            gsap.to(rect,{
                backgroundColor:`rgb(0,0,${bluecolor})`,
                ease:Power4,
            });

        }
});

rect.addEventListener("mouseleave",function()
{
    gsap.to(rect,{
        backgroundColor:"white",
    });
});

// console.log(gsap.utils.mapRange(0,250,255,0,250));