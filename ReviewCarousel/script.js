let reviewsList = [
    {
        review: "I was introduced to Physeo and utilized the videos heavily alongside the Anking Deck. It was like a switch was flipped! The concepts now made sense! The straightforward explanations and organized presentations allowed me to truly integrate everything together. Thank you for all of your work, it truly saved me.",
        title: "Medical Student (MS-4)",
        name: "Jennifer Hansen",
        imgFile: "Jennifer.png"
    },
    {
        review: "For those of you on the fence whether to get a subscription or not, just go get them and thank me later. I got 240+ on Step 1 and it was Physeo which helped me jump 15 to 20 points higher on the real exam, while my scores were stuck around 220 during the practice tests.",
        title: "Medical Student (MS-3)",
        name: "Emily Jones",
        imgFile: "Emily.jpg"
    },
    {
        review: "I was able to score above 250 on step 1 and above 750 on comlex level 1 and Physeo had a lot to do with my success. If you thoroughly understand physiology, pharmacology and pathology become a breeze. Trust me, your life will be so much easier with this amazing resource. Highly recommend!",
        title: "Pathology Resident (PGY-2)",
        name: "Michael Christensen",
        imgFile: "me.jpg"
    },
    {
        review: "I\’m in love with Physeo. I\’ve been using it for a few months now but I wish I\’d been using it since my first year of medical school. This is truly an excellent resource and I\’m grateful I stumbled upon it from my random Step 1 Google searches a few months back. Every med student needs to get Physeo!",
        title: "Radiology Resident (PGY-1)",
        name: "Steve Burns",
        imgFile: "Steve.png"
    }
]       

const arrows = document.querySelectorAll('[data-icon]')
const reviewerImage = document.querySelector('.reviewer-image')
const reviewerName = document.querySelector('.reviewer-name')
const reviewerTitle = document.querySelector('.reviewer-title')
const reviewerReview = document.querySelector('.reviewer-review')

let reviewsIndex = 0

function changeReview () {
    reviewerName.innerHTML = reviewsList[reviewsIndex].name
    reviewerTitle.innerHTML = reviewsList[reviewsIndex].title
    reviewerReview.innerHTML = reviewsList[reviewsIndex].review
    reviewerImage.src = reviewsList[reviewsIndex].imgFile
}

arrows.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('back-arrow')) {
            reviewsIndex -=1
            if (reviewsIndex < 0) {
                reviewsIndex = reviewsList.length - 1
            }
            console.log(reviewsIndex)
            changeReview()
        } else if (button.classList.contains('forward-arrow')) {
            reviewsIndex +=1
            if (reviewsIndex > reviewsList.length - 1) {
                reviewsIndex = 0
            }
            console.log(reviewsIndex)
            changeReview()
        }
    })
})


