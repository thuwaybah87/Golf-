document.addEventListener("DOMContentLoaded", function () {
    
    let backToTop = document.createElement("button");
    backToTop.id = "backToTop";
    backToTop.innerHTML = "↑";
    backToTop.title = "العودة إلى الأعلى";
    document.body.appendChild(backToTop);
 

    let style = document.createElement("style");
    style.innerHTML = `
        #backToTop {
            display: none;
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color:rgb(27, 88, 43);
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 18px;
        }
        #backToTop:hover {
            background-color:rgb(12, 58, 11);
        }
    `;
    document.head.appendChild(style);

    
    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    };

  
    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
