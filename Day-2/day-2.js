const body = document.body
body.append("Bhabin Dulal")

const newH1 = document.createElement("h1")
newH1.innerText = "Mern-Stack"
body.append(newH1)

const getInner = document.querySelector(".some")
// getInner.innerText = "<b> How are you doing? </b>" writes whole text but the innerHtml only writes the text inside the html tag.
getInner.innerHTML = "<b> How are you doing? </b>"
body.append(getInner)