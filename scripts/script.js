let $ = document
/*counter*/
let conter = true
let i = 0
/*counter*/
let header_product_elem = document.querySelector(".header_links li")
let header_dropdown_menu = document.querySelector(".header_dropdown_menu")
let ham_menu_icon = $.querySelector(".ham_menu_icon")
let res_menu = $.querySelector(".res_menu")
let res_header_product_elem = $.getElementById("res_product")
let res_header_dropdown = $.querySelector(".res_dropdown_menu")
let drop_icon = document.querySelector(".drop_icon")
let res_drop_icon = $.querySelector(".res_drop_icon")
let box_type = $.querySelector(".box_type")
let int_boxes_count = $.querySelectorAll(".int_box-elem_count")
console.log(drop_icon);

////////////////////////////////// int_box_counter starts
window.addEventListener("scroll", () => {
    let scroll_top = document.documentElement.scrollTop
    let inner_height = window.innerHeight
    let offsetT = box_type.parentElement.parentElement.offsetTop
    if (scroll_top + inner_height > offsetT + 50) {
        if (conter) {
            int_boxes_count.forEach((item) => {
                setcounter(item)
            })

        }
        conter = false
    }
})


function setcounter(item) {
    let set_interval = setInterval(() => {
        i++
        if (i >= item.dataset.counts) {
            clearInterval(set_interval)
        }
        item.innerHTML = i + " +"
    }, 15);
}
/////////////////////////////////////int_box_counter finished



/////////////////////////////////////products_swiper starts
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    centeredSlides: false,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        800: { slidesPerView: "auto", spaceBetween: 15 },
        600: { slidesPerView: 1, spaceBetween: 0 },
        // 500: { slidesPerView: 1, spaceBetween: 10 }
    },
})
////////////////////////////////main header
header_product_elem.addEventListener("click", () => {

    header_dropdown_menu.classList.toggle("show_dropdown")
    drop_icon.classList.toggle("rotate")

})
///////////////////res header
ham_menu_icon.addEventListener("click", () => {
    res_menu.classList.toggle("show_res_menu")
})

res_header_product_elem.addEventListener("click", () => {
    console.log(res_header_dropdown);
    res_header_dropdown.classList.toggle("show_res_dropdown")
    res_drop_icon.classList.toggle("res_drop_icon_rotate")
})
////////////////////////////////////////////////

/*toUp*/
let toUp_elem = $.querySelector(".toUp")
toUp_elem.addEventListener("click", (event) => {
    window.scrollTo({ top: 0, behavior: "smooth" })
})
///////////////////////////////