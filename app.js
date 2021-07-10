let images = [
  "https://static.toiimg.com/photo/51076300.cms",
  "https://ca-times.brightspotcdn.com/dims4/default/5916a07/2147483647/strip/true/crop/3334x2223+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F49%2F0f%2Fef59cff446769735ca4fd9dd546e%2Fla-photos-1staff-464422-fo-0903-angler-mrt-028.JPG",
  "https://imgmedia.lbb.in/media/2019/08/5d43d83bca10992d055cc50d_1564727355126.jpg",
  "https://cdnimg.webstaurantstore.com/images/articles/353/different-types-of-restaurants-header.jpg"
];
console.log(images);

const Image = document.createElement("img");
const tableNimg = document.querySelector(".tableNimg");

Image.src = "https://imgmedia.lbb.in/media/2019/08/5d43d83bca10992d055cc50d_1564727355126.jpg";
tableNimg.append(Image);

let changePicture = function (j) {
  Image.src = images[j];
  tableNimg.append(Image);
};

let i = 1; 

setInterval(()=>{
    changePicture(i);
    i++;
    if(i == 4){
        i = 0;
    }
}, 2800)
